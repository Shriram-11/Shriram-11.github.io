# Portfolio Rewrite Plan

## Goal

Rebuild the portfolio as a modern, technical, engineering-focused personal site that presents Shriram Naik primarily as a software engineer and platform engineer, with AI/ML as a secondary strength.

The old student-era template should be replaced entirely. The new site should feel intentional, calm, and credible, not decorative or generic.

## Core Positioning

- Primary identity: Software Engineer / Platform Engineer
- Secondary identity: AI and Machine Learning Enthusiast
- Narrative arc: Student -> Hackathon Competitor -> AI/ML Builder -> Software Engineer -> Platform/Backend Engineer
- Tone: bold, engineering-focused, mature, technical
- Design direction: dark-first, not dark-only; polished light mode toggle available

## Visual Direction

- Palette: graphite / slate base with restrained teal accent
- Accent usage: links, hover states, focus states, selected UI, small highlights
- Typography:
  - Headings: Geist or IBM Plex Sans
  - Body: Inter or Geist
  - Code / technical details: JetBrains Mono
- Visual language: typography, spacing, structure, and content over decoration
- Inspiration references: Linear, Vercel, Stripe, Datadog, Anthropic, OpenAI

## Public Information Strategy

Keep public contact details minimal.

Show:

- Belgaum, Karnataka, India
- GitHub
- LinkedIn
- Email

Avoid:

- Phone number
- Unnecessary personal details
- Anything that exposes proprietary or sensitive work

## Content Strategy

### Hero

- Clear one-line positioning statement
- Short supporting summary emphasizing backend systems, cloud-native infrastructure, and problem-solving
- Primary CTA: view projects or experience
- Secondary CTA: download resume

### Experience

- Describe current professional work without exposing proprietary implementation details
- Focus on backend systems, RBAC / ABAC authorization, auditability, APIs, Kubernetes, GitOps, Terraform, and infrastructure services
- Use outcome-based bullets, not internal product names or sensitive specifics unless approved

### Featured Projects

Feature only the strongest public work.

- Interview Preparation Platform (GenAI and LangGraph)
- DataCrafter (Automated Data Analysis Platform)
- ClassVision (Computer Vision and Deep Learning)
- Selected Hackathon Projects
- Hackathon Achievements

For projects without public source code:

- Use summaries, screenshots, architecture diagrams, and demo links where available
- Avoid pretending source access exists when it does not

### Dedicated AI / ML Section

- Keep AI/ML as a distinct section
- Frame it as part of the journey, not the primary identity
- Mention hackathons, research, CV, and GenAI work

### Currently Exploring

Add a concise section titled "Currently Exploring".

Include focus areas such as:

- Backend and platform engineering
- Kubernetes and cloud-native systems
- Infrastructure automation
- Distributed systems
- AI and developer tooling

This section should feel like a snapshot, not a status feed.

### Resume Access

- Add downloadable PDF resume in the navigation bar
- Add downloadable PDF resume in the hero section

## Site Structure

Recommended sections for the homepage:

1. Hero
2. Currently Exploring
3. Experience
4. Featured Projects
5. AI / ML Journey
6. Hackathon Highlights
7. Contact / Footer

Optional supporting pages:

- About: deeper narrative and background
- Projects: project details, demos, diagrams, repositories
- Contact: minimal and professional

## What To Remove Or Deprioritize

- Generic blog-first presentation
- Childhood/student styling
- Decorative clutter and excessive template elements
- Overly playful copy
- Irrelevant sections that do not reinforce the engineering story
- Public PII beyond the minimal contact set

## Implementation Phases

### Phase 1: Strategy And Structure

- Rewrite homepage hierarchy
- Decide which sections remain and which are removed
- Define the content model for public vs private work
- Lock the visual system and typography

### Phase 2: Homepage Rebuild

- Replace template-driven hero
- Add resume CTA and minimal navigation
- Build the new section flow
- Create the dark theme first
- Add the light theme toggle

### Phase 3: Content Migration

- Rewrite project descriptions
- Rewrite experience bullets
- Add current focus section
- Remove or minimize sensitive contact data

### Phase 4: Polish And Validation

- Check responsiveness
- Verify theme contrast and readability
- Review spacing and hierarchy
- Confirm the portfolio feels mature and technical

## Open Questions Before Implementation

- Final accent shade within the teal family
- Whether the resume PDF already exists or needs to be generated
- Which projects have public demos or screenshots ready
- Whether a separate About page should remain or be folded into the homepage

## Working Principle

Build the site so it reads like the personal website of an engineer working on complex systems, not a template assembled from unrelated sections.
