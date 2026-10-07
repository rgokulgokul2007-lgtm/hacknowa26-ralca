🚨 RESQ AI: Next-Gen Emergency Dispatch & Hazard-Aware Coordination
HackNowa Global Hackathon 2026 | Track: AI for Everyday Life
Live Demo: https://chimerical-pavlova-5c3493.netlify.app/
Demo Video: https://drive.google.com/file/d/1rDUJDflSiCdU2cgAMTE-W8FeN9jwqiqh/view?usp=drivesdk


The Reality of Emergency Response
Traditional municipal dispatch systems (911 / 112 / 108) were built for voice calls, not dynamic crisis telemetry. During catastrophic events, dispatch centers face critical bottlenecks like panicked callers struggling to describe locations, dispatchers spending minutes interrogating callers to determine vehicle requirements, and medical or fire units operating on separate fragmented dashboards. Furthermore, standard GPS routes emergency units directly toward secondary hazards like floods or debris fields. RESQ AI unifies distressed civilians, AI triage agents, and field commanders on a single reactive pipeline to solve this.

System Architecture & The 4-Step Lifecycle
Step 1: Instant SOS Beacon
The user triggers an alert via text, voice prompt, or pre-configured emergency chips on the Civilian SOS Interface, which captures precise GPS coordinates.

Step 2: Dual-Layer AI Triage
A deterministic rule engine backed by Gemini 1.5 Flash parses the telemetry for life-threat indicators (unconscious, severe trauma, entrapment) and assigns an Urgency Class (CRITICAL, HIGH, MODERATE) alongside a Priority Score.

Step 3: Multi-Factor Dispatch Matching
The Live Tactical Command Center fetches unit readiness from the Firestore / Reactive Event Bus and scores available stations by proximity, vehicle readiness, and operational specialization.

Step 4: Hazard-Bypass Routing
The Interactive Leaflet Radar calculates the dispatch route using OSRM pathing, cross-referencing simulated hazard polygons (flood zones, structure collapses) to compute the safest possible bypass route rather than blindly following the shortest line. This status is then pushed live to the Civilian Real-Time Tracker.

Engineering & Tech Stack
Frontend Core: React 18, Vite 6, Tailwind CSS 3.4, Lucide Icons.
Geospatial & Mapping: Leaflet 1.9, CartoDB Dark Matter, OpenStreetMap Tiles.
Routing & Navigation: OSRM (Open Source Routing Machine) API with Geodesic Fallback.
Backend & State: Google Cloud Firestore and a Zero-Config Cross-Tab BroadcastChannel Bus.
AI Intelligence: Gemini 1.5 Flash API and a Deterministic NLP Matrix.
Real-Time Audio: Native Web Audio API for synthesized tone alarms.

Core Features
Civilian SOS Portal (/sos)
Provides real-time triage analysis that previews severity as the user types, including a casualty counter and high-accuracy browser geolocation. It seamlessly transitions to live status tracking without requiring an account.

Live Command Center (/command-center)
A high-contrast tactical UI engineered for high-stress dispatch environments. It features a real-time KPI ribbon tracking active incidents, and an interactive Leaflet map with pulsing SVG markers and hazard overlays.

Hazard-Aware Safe Routing
Evaluates street-level vectors against active environmental hazards. Mathematical polygon collision detection triggers instant recalculation around flash floods, providing a side-by-side visualization of direct versus hazard-bypass routes.

Zero-Setup Demo Architecture
Runs out-of-the-box in local reactive mode via BroadcastChannel synchronization, requiring no database setup for evaluators. It includes a 60-Second Simulator button that runs an automated end-to-end incident lifecycle.

Quickstart & Setup
1. Clone & Install
Open your terminal and run the git clone command using your repository URL (https://github.com/rgokulgokul2007-lgtm/hacknowa26-ralca.git). Once downloaded, navigate into the project folder and run the "npm install" command to install all necessary dependencies.

2. Configure Environment (Optional)
The project is built with Zero-Setup Mode and defaults to local reactive data. To enable live Google Cloud Firestore or Gemini API integration, create a file named ".env" based on the ".env.example" file. Inside it, paste your specific keys for VITE_FIREBASE_API_KEY, VITE_FIREBASE_PROJECT_ID, and VITE_GEMINI_API_KEY.

3. Run Locally
Start the development server by typing "npm run dev" into your terminal. Finally, open the local URL displayed in your terminal (typically http://localhost:5173 or http://localhost:3000) in your web browser.

Evaluator Walkthrough (3-Minute Tour)
Step 1: On the SOS page, click the quick-chip for a road collision. Observe the live NLP engine flag the event as CRITICAL in real time, then click Transmit Emergency SOS.
Step 2: The civilian view transitions to an active progress tracker with situational safety instructions and calculated ETAs.
Step 3: Open the Command Center in a second browser tab. The incident appears instantly across tabs without page reloads, and the tactical radar plots the pulsing red beacon.
Step 4: Click the incident card, review the multi-factor match score, and select Dispatch Agency.
Step 5: Watch the Leaflet engine plot a navigation path that automatically circumnavigates active hazard zones. Return to the Civilian Tracker tab to confirm the status has updated to DISPATCHED with active unit telemetry.

Author
Gokul R
Submitted for the HackNowa Global Hackathon 2026 (AI for Everyday Life Track)

Hackathon Disclaimer
RESQ AI is a prototype decision-support framework engineered for the HackNowa Global Hackathon 2026. All agency stations, incident streams, and hazard overlays utilized in demo mode are synthetic simulations designed to showcase technical capabilities and UI/UX flows.
