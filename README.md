# 🚨 RALCA-AI: Next-Gen Emergency Dispatch & Hazard-Aware Coordination

> *"When seconds decide outcomes, emergency dispatch shouldn't rely on guesswork, busy signals, or blind routing."*

**HackNowa Global Hackathon 2026** | **Track:** AI for Everyday Life  
**Live Demo:** [chimerical-pavlova-5c3493.netlify.app](https://chimerical-pavlova-5c3493.netlify.app/)  
**Demo Video:** [Watch Walkthrough](https://drive.google.com/file/d/1rDUJDflSiCdU2cgAMTE-W8FeN9jwqiqh/view?usp=drivesdk)  

---

## ⚡ The Reality of Emergency Response

Traditional municipal dispatch systems (911 / 112 / 108) were built for voice calls, not dynamic crisis telemetry. During catastrophic events, dispatch centers face predictable failure points:

* **Adrenaline-distorted reporting:** Panicked callers struggle to describe symptoms, exact locations, or environmental threats coherently.
* **Manual triage friction:** Dispatchers spend critical minutes interrogating callers to determine whether an ambulance or heavy rescue is required.
* **Siloed fleets:** Fire, medical, and police units operate on separate dashboards, leading to fragmented deployments.
* **Blind navigation:** Standard GPS routes emergency units directly toward hazards—flooded underpasses, toxic plumes, or debris fields.
* **The "black box" wait:** Once a call ends, victims endure terrifying uncertainty with zero visibility into responder arrival.

**RALCA-AI** replaces this fragmented chain with a real-time, sensor-aware coordination engine connecting distressed civilians, AI triage agents, and field commanders on a single reactive pipeline.

---

## 💡 System Architecture

```mermaid
flowchart TD
    Civilian([Distressed Civilian / Bystander]) -->|SOS + Geolocation| SOSPortal[Civilian SOS Interface]
    SOSPortal -->|Telemetry & Natural Language| AIEngine[Dual-Layer AI Triage Engine]
    AIEngine -->|Urgency Score & Incident Tags| StateBus[(Firestore / Reactive Event Bus)]
    
    StateBus -->|Instant Push| CommandCenter[Live Tactical Command Center]
    CommandCenter -->|Fetch Unit Readiness| GeoMatcher[Multi-Factor Agency Matcher]
    GeoMatcher -->|Distance + Specialty + Fleet Status| RoutingEngine[Hazard-Aware Routing Engine]
    RoutingEngine -->|OSRM Geometry + Hazard Polygon Check| TacticalMap[Interactive Leaflet Radar]
    
    AgencyCommander([Rescue Agency Commander]) -->|Accept / Code 3 / On-Scene| AgencyPortal[Agency Terminal]
    AgencyPortal -->|Lifecycle State Changes| StateBus
    StateBus -->|Live Dynamic Push| CivilianTracker[Civilian Real-Time Tracker]



    The 4-Step LifecycleInstant SOS Beacon: The user triggers an alert via text, voice prompt, or pre-configured emergency chips, capturing precise GPS coordinates.Dual-Layer AI Triage: A deterministic rule engine backed by Gemini 1.5 Flash parses the prompt for life-threat indicators (e.g., unconscious, severe trauma, entrapment) and assigns an Urgency Class (CRITICAL, HIGH, MODERATE) and a 0–100 Priority Score.Multi-Factor Dispatch Matching: The engine scores available stations by proximity, vehicle readiness, and operational specialization.Hazard-Bypass Routing: Integrated OSRM pathing cross-references simulated hazard polygons (flood zones, structure collapses) to compute the safest possible route rather than blindly following the shortest line.🛠️ Engineering & Tech StackLayerTechnologiesFrontend CoreReact 18, Vite 6, Tailwind CSS 3.4, Lucide IconsGeospatial & MappingLeaflet 1.9, CartoDB Dark Matter, OpenStreetMap TilesRouting & NavigationOSRM (Open Source Routing Machine) API + Geodesic FallbackBackend & StateGoogle Cloud Firestore + Zero-Config Cross-Tab BroadcastChannel BusAI IntelligenceGemini 1.5 Flash API + Deterministic NLP MatrixReal-Time AudioNative Web Audio API (Synthesized tone alarms, zero external assets)✨ Core Features1. Civilian SOS Portal (/sos)Real-time triage analysis that previews severity as the user types.Casualty counter, situational quick-select chips, and high-accuracy browser geolocation.Direct link to live status tracking without account registration.2. Live Command Center (/command-center)High-contrast tactical UI engineered for high-stress dispatch environments.KPI Ribbon: Real-time metrics tracking active incidents, deployable fleets, critical cases, and average response times.Interactive Radar: Leaflet mapping with pulsing SVG markers, station pins, and hazard overlays.Transparent agency recommendation drawer displaying calculated match scores.3. Hazard-Aware Safe RoutingEvaluates street-level vectors against active environmental hazards.Mathematical polygon collision detection triggers instant recalculation around flash floods and structural collapses.Side-by-side visualization of Direct vs. Hazard-Bypass routes.4. Zero-Setup Demo ArchitectureRuns out-of-the-box in local reactive mode via BroadcastChannel synchronization—no database setup required for evaluators.60-Second Simulator: A single click runs an automated end-to-end incident lifecycle (Reporting $\rightarrow$ Triage $\rightarrow$ Dispatch $\rightarrow$ Resolution).🚀 Quickstart & Setup1. Clone & InstallBashgit clone [https://github.com/rgokulgokul2007-lgtm/hacknowa26-ralca.git](https://github.com/rgokulgokul2007-lgtm/hacknowa26-ralca.git)
cd hacknowa26-ralca
npm install
2. Configure Environment (Optional)The project is built with Zero-Setup Mode: it defaults to local reactive data with simulated stations out of the box.To enable live Google Cloud Firestore or Gemini API integration, create a .env file:Bashcp .env.example .env
Code snippet# Cloud Firestore (Optional)
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id

# Gemini API Key (Optional)
VITE_GEMINI_API_KEY=your_gemini_api_key
3. Run LocallyBashnpm run dev
Open http://localhost:3000 (or the port displayed in your terminal) in your browser.🧪 Evaluator Walkthrough (3-Minute Tour)Trigger an Alert (/sos): Click the quick-chip: "Road collision between two cars. 2 people injured and one person is unconscious." Observe the live NLP engine flag the event as CRITICAL in real time. Click Transmit Emergency SOS.Observe Civilian View (/track/:id): The civilian view transitions to an active progress tracker with situational safety instructions and calculated ETAs.Open Command Center (/command-center) in a Second Tab: Notice the incident appears instantly across tabs without page reloads. The tactical radar plots the pulsing red beacon.Inspect Agency Recommendation: Click the incident card. Review the multi-factor match score and select Dispatch Agency.Inspect the Hazard Bypass: Watch the Leaflet engine plot a navigation path that automatically circumnavigates active hazard zones.Cross-Tab Synchronization: Return to the Civilian Tracker tab to confirm status updates to DISPATCHED with active unit telemetry.🛡️ Hackathon DisclaimerRALCA-AI is a prototype decision-support framework engineered for the HackNowa Global Hackathon 2026. All agency stations, incident streams, and hazard overlays utilized in demo mode are synthetic simulations designed to showcase technical capabilities and UI/UX flows.
