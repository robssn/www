# Clay Lead Integration

Connected workspace: **Personal Workspace** (`1022026`). No custom Clay subroutines are currently configured.

## Recommended flow

1. ROBSSN form submits to Formspree.
2. Formspree sends an email to `sales@skunkworks.africa` and optionally triggers Zapier, Make or a webhook.
3. The automation creates or updates a Clay row.
4. Clay enriches company domain, industry, employee count and contact profile where lawful and relevant.
5. Lead scoring routes the enquiry to buyer, seller, dealer/fleet or service-partner queues.

## Form fields

- `lead_type`
- `province`
- `timeframe`
- `estimated_value`
- `requirements`
- `name`, `company`, `email`, `phone`
- `landing_page`, `referrer`
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`
- `consent`

## Suggested score

- Immediate timeframe: +30
- Within 30 days: +20
- Estimated value above R2 million: +25
- Company provided: +10
- Clear requirement over 120 characters: +10
- Direct phone number: +5

Do not enrich or contact records beyond the purpose covered by the submitted consent and applicable POPIA requirements.
