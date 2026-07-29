# ROBSSN landing-page lead mapping for Clay

Connected Clay workspace: **Personal Workspace** (`1022026`).

At the time this landing page was generated, the workspace exposed no custom subroutines. The homepage therefore prepares structured fields for a downstream Formspree-to-Clay automation without claiming that automatic Clay ingestion is already active.

## Fields emitted by the main landing page

- `lead_type`
- `province`
- `timeframe`
- `estimated_value`
- `requirements`
- `name`
- `company`
- `email`
- `phone`
- `consent`
- `source`
- `lead_pipeline`
- `lead_stage`
- `clay_workspace_id`
- `landing_page`
- `referrer`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`

## Recommended Clay columns

| Website field | Clay column | Purpose |
|---|---|---|
| `email` | Email | Primary deduplication key |
| `company` | Company | Account association |
| `lead_type` | Opportunity route | Buyer, seller, fleet or partner segmentation |
| `timeframe` | Buying timeframe | Urgency scoring |
| `estimated_value` | Estimated value | Commercial priority |
| `requirements` | Requirement summary | Qualification context |
| `utm_*` | Campaign attribution | Channel and campaign reporting |
| `consent` | Consent recorded | POPIA processing evidence |

## Suggested automation

1. Formspree receives the website submission.
2. Formspree notifies `sales@skunkworks.africa`.
3. Zapier, Make or another approved workflow creates or updates a Clay row.
4. Deduplicate by email, then company plus mobile number.
5. Enrich only where lawful and relevant to the submitted purpose.
6. Route urgent or high-value opportunities to the appropriate sales queue.

No Clay enrichment should be performed beyond the purpose covered by the submitted consent and applicable POPIA requirements.
