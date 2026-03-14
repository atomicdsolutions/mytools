# Travel App — Claude Code Project Instructions

## Project Overview
This is an Angular web application. NOT React Native. NOT Flutter. NOT Expo.
Backend: Supabase (auth, database, storage, realtime, edge functions).
Workflow Automation: n8n owns all scheduled jobs, email parsing,
notification dispatch, and external API integrations.
Language: TypeScript strict mode throughout.
Core success drivers: Security and User Experience.

## Tech Stack
- Frontend: Angular (latest stable, standalone components, Angular 17+)
- UI: Angular Material + TailwindCSS
- State: NgRx (global) + Angular signals (local component state)
- Routing: Angular Router with lazy-loaded feature routes
- Forms: Angular Reactive Forms only
- HTTP: Angular HttpClient + auth interceptor + Supabase JS SDK
- Backend: Supabase (PostgreSQL, Auth, Realtime, Storage, Edge Functions)
- Workflow Automation: n8n
- AI: Claude/OpenAI via Supabase Edge Functions ONLY
- Maps: Google Maps JavaScript API + Google Places API
- Payments: Stripe via Supabase Edge Functions ONLY
- Notifications: Web Push via Angular PWA + n8n dispatch
- Error Monitoring: Sentry

## Stack Boundaries
| Concern | Owner |
|---------|-------|
| UI, routing, forms, user interaction | Angular |
| Database, auth, file storage, realtime | Supabase |
| AI API calls | Supabase Edge Functions |
| Stripe payment processing | Supabase Edge Functions |
| Signed media URL generation | Supabase Edge Functions |
| Email parsing & auto-import | n8n |
| Push notification dispatch | n8n |
| Onboarding email sequences | n8n |
| Budget threshold alerts | n8n (Supabase trigger → webhook) |
| Flight status polling | n8n (scheduled) |
| Testimonial reminders | n8n (scheduled) |
| Bucket list & partner matching | n8n (scheduled + webhook) |
| Wellness nudge scheduling | n8n (scheduled) |

Never call AI or Stripe from Angular.
Never put scheduling or notification dispatch in Angular or Edge Functions.

## Project Structure
src/

app/

core/           # Auth service, guards, interceptors, Supabase client, models

shared/         # Shared components, pipes, directives

features/       # Lazy-loaded feature modules

auth/         # Login, signup, onboarding quiz

dashboard/    # Home dashboard

trips/        # Trip creation, itinerary

group/        # Group chat, location sharing

discovery/    # Nightlife discovery

flights/      # Flight & travel tracking

expenses/     # Expense tracking

wellness/     # Wellness nudges, checklists

media/        # Gallery, testimonials

ai-assistant/ # AI trip chat & knowledge base

subscription/ # Premium tier

profile/      # User profile & settings

app.routes.ts

app.config.ts

environments/

supabase/

functions/        # Edge Functions

migrations/       # SQL with RLS

n8n/

workflows/        # Exported n8n workflow JSON (version controlled)