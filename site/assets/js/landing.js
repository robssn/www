(() => {
  const form = document.querySelector('[data-lead-form]');
  if (!form) return;

  document.querySelectorAll('[data-lead-route]').forEach((link) => {
    link.addEventListener('click', () => {
      const route = link.getAttribute('data-lead-route');
      const option = [...form.querySelectorAll('input[name="lead_type"]')]
        .find((input) => input.value === route);

      if (option) {
        option.checked = true;
        option.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });
  });
})();
