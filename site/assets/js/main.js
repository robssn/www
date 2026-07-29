(() => {
  const toggle=document.querySelector('[data-nav-toggle]'),links=document.querySelector('[data-nav-links]');
  if(toggle&&links){toggle.addEventListener('click',()=>{const open=links.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');}));}
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  const reveal=[...document.querySelectorAll('.reveal')];
  if('IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target);}}),{threshold:.1});reveal.forEach(el=>io.observe(el));}else reveal.forEach(el=>el.classList.add('is-visible'));
  document.querySelectorAll('[data-lead-form]').forEach(initLeadForm);
  function initLeadForm(form){
    const steps=[...form.querySelectorAll('[data-step]')],progress=[...form.closest('.form-card').querySelectorAll('[data-progress]')],status=form.querySelector('[data-form-status]'),submit=form.querySelector('[type="submit"]');let current=0;
    const show=i=>{current=Math.max(0,Math.min(i,steps.length-1));steps.forEach((s,n)=>s.hidden=n!==current);progress.forEach((p,n)=>p.classList.toggle('is-active',n<=current));};
    const valid=()=>{const fields=[...steps[current].querySelectorAll('input,select,textarea')].filter(f=>!f.disabled&&f.type!=='hidden');for(const field of fields){if(!field.checkValidity()){field.reportValidity();field.focus();return false;}}return true;};
    form.querySelectorAll('[data-next]').forEach(b=>b.addEventListener('click',()=>{if(valid())show(current+1)}));form.querySelectorAll('[data-back]').forEach(b=>b.addEventListener('click',()=>show(current-1)));
    const endpoint=window.ROBSSN_CONFIG?.formspreeEndpoint||form.action;form.action=endpoint;
    const params=new URLSearchParams(location.search);['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].forEach(n=>{if(form.elements[n])form.elements[n].value=params.get(n)||''});
    if(form.elements.landing_page)form.elements.landing_page.value=location.href;if(form.elements.referrer)form.elements.referrer.value=document.referrer||'Direct / unavailable';
    form.addEventListener('submit',async e=>{e.preventDefault();if(!valid())return;if(!endpoint||endpoint.includes('REPLACE_WITH_FORM_ID')){status.hidden=false;status.className='form-status is-error';status.textContent='The enquiry form is awaiting its Formspree form ID. Email sales@skunkworks.africa in the meantime.';return;}submit.disabled=true;submit.textContent='Sending…';status.hidden=true;try{const response=await fetch(endpoint,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});if(!response.ok)throw new Error('Submission failed');location.assign('/thank-you.html');}catch(error){status.hidden=false;status.className='form-status is-error';status.textContent='The enquiry could not be sent. Try again or email sales@skunkworks.africa.';submit.disabled=false;submit.textContent='Send enquiry';}});show(0);
  }
})();