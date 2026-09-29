---
name: frontend-forms-validation
description: Adaptive frontend form and validation patterns. Use when building forms, schemas, field errors, multi-step forms, submit flows, or wiring forms to backend mutations.
metadata:
  origin: portable
---

# Frontend Forms and Validation

## First: Detect the Form Stack

Inspect package.json and nearby forms for:
- React Hook Form
- Formik
- native controlled state
- Zod / Yup / Valibot / other validation
- shared field components
- error rendering helpers

Do not install or assume a form library if the project already uses another pattern.

## Source of Truth

If the project uses a schema library, keep validation rules in the established schema location and infer types from schemas when supported.

Avoid duplicating equivalent form types and validation rules.

## Controlled Inputs

Use the integration pattern expected by the platform and form library.

For React Native + React Hook Form, `Controller` is often appropriate.
For web, use the project's existing registration/controller pattern.

## Submit Flow

Typical flow:

```text
user input
 -> client validation
 -> submit handler
 -> mutation/action
 -> backend
 -> success/error mapping
 -> UI feedback
```

Prevent duplicate submissions while a request is pending.

## Errors

Distinguish:
- field validation errors
- form/root errors
- backend/business errors
- unexpected errors

Map backend errors into the project's existing field/root/toast pattern.

Do not expose raw stack traces or unknown objects to users.

## Multi-Step Forms

Keep step-local state close to the flow unless the project already centralizes wizard state.

Reset form and transient state after terminal success when appropriate.

## Rules

- Client validation is UX, not a replacement for backend validation.
- Match existing copy/language style.
- Reuse shared Input/Select/Error components.
- Preserve accessibility and keyboard behavior.
- Avoid tightly coupling presentation components to transport details.
