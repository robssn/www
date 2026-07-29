# Formspree Setup

1. Create a form in Formspree.
2. Verify `sales@skunkworks.africa` as the notification recipient.
3. Add `robssn.com` and `www.robssn.com` as allowed domains.
4. Enable spam filtering and submission limits appropriate to the plan.
5. Copy the endpoint into the GitHub Actions variable `FORMSPREE_ENDPOINT`.
6. Test buyer, seller, dealer/fleet and partner paths from production.
7. Confirm that UTM fields and consent are included in received submissions.

The endpoint is public by design; do not treat a Formspree form ID as a secret. The receiving mailbox and automation credentials remain private.
