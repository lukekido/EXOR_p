/* ==========================================================================
   EXORDIUM // GESTALT CAREER TREE ENGINE (English Edition)
   Organized strictly by Canonical Profession Trees, Flow Sequences & Visual Cues
   ========================================================================== */

const CAREER_SECTORS = [
  {
    "id": "office",
    "name": "Lunar — Industrial Sensors (Corporate Office)",
    "brandTag": "Lunar // Industrial Teal Theme",
    "icon": "🏢",
    "subtitle": "10 Canonical Ranks · Levels 1 to 5 · Mandatory Story Entry Point",
    "ruleNotice": "In Lunar, higher positions do NOT perform lower levels' work. Starts as Assistant with branching choices at L1, L2, and L3.",
    "tracks": [
      {
        "id": "entry",
        "title": "Universal Entry Point · Level 1",
        "description": "Every citizen in SPRF starts their corporate career at this desk.",
        "positionIds": [
          "assistant"
        ]
      },
      {
        "id": "technical",
        "title": "Technical & Ombudsman Track · Levels 2 to 4",
        "description": "Triage technical tickets, resolve warranty disputes, and handle executive intelligence.",
        "positionIds": [
          "service_desk",
          "quality_supervisor",
          "analyst",
          "cfo"
        ]
      },
      {
        "id": "commercial",
        "title": "Commercial & Corporate Sales Track · Levels 2 to 4",
        "description": "Negotiate sensor specs, manage sales reps, or take on lucrative kickback risks.",
        "positionIds": [
          "inside_sales",
          "external_sales",
          "sales_manager",
          "vice_director"
        ]
      },
      {
        "id": "summit",
        "title": "Corporate Executive Summit · Level 5",
        "description": "The highest corporate tier in SPRF. Unchecked administrative power and live media crises.",
        "positionIds": [
          "ceo"
        ]
      }
    ]
  },
  {
    "id": "pharmacy",
    "name": "Metropolitan Pharmacy Chain",
    "brandTag": "Health Retail // 7 City Locations",
    "icon": "💊",
    "subtitle": "7 Canonical Ranks · Levels 1 to 5 · Higher Positions Perform Lower Work",
    "ruleNotice": "Dispensary staff cover all subordinate responsibilities during busy shifts. Branch into Store Management or earn a Pharmacy Degree to unlock Clinical Services and the permanent permanent hybrid salary bonus.",
    "tracks": [
      {
        "id": "counter",
        "title": "Dispensary Counter Progression · Levels 1 to 3",
        "description": "Checkout registers, price audits, and controlled medication retention.",
        "positionIds": [
          "attendant_1",
          "attendant_2",
          "pharmacy_supervisor"
        ]
      },
      {
        "id": "executive_clinical",
        "title": "Store Management vs Clinical Pharmacy · Level 4",
        "description": "Choose between branch administration or university-certified clinical medicine.",
        "positionIds": [
          "pharmacy_manager",
          "pharmacist",
          "manager_pharmacist"
        ]
      },
      {
        "id": "regional",
        "title": "Regional Health Operations · Level 5",
        "description": "Unannounced compliance audits across all 7 pharmacy branches in the metropolis.",
        "positionIds": [
          "regional_manager"
        ]
      }
    ]
  },
  {
    "id": "restaurant",
    "name": "Metropolitan Restaurant Sector",
    "brandTag": "Fine Dining & Buffets // 13 City Locations",
    "icon": "🍽️",
    "subtitle": "7 Canonical Ranks · Levels 1 to 4 · Front vs Back of House · Waiters Never Cook",
    "ruleNotice": "Strict gastronomic divide. Promoted employees do NOT perform lower tasks. Waiters advance exclusively through floor management, while prep assistants advance to line cooks and degree-holding executive chefs.",
    "tracks": [
      {
        "id": "front",
        "title": "Front-of-House Hospitality Track · Levels 1 to 3",
        "description": "Dining room sanitation, table service, fine wine cellars, and floor operations.",
        "positionIds": [
          "dining_helper",
          "waiter",
          "restaurant_manager"
        ]
      },
      {
        "id": "back",
        "title": "Back-of-House Culinary Track · Levels 1 to 3",
        "description": "Food preparation, sauce reductions, pasta stations, and haute-cuisine master finishes.",
        "positionIds": [
          "kitchen_helper",
          "cook",
          "chef"
        ]
      },
      {
        "id": "ownership",
        "title": "Franchise Enterprise Ownership · Level 4",
        "description": "Proprietor of multiple dining franchises across town; net profit deposited directly into your personal account.",
        "positionIds": [
          "franchise_manager"
        ]
      }
    ]
  },
  {
    "id": "freelance",
    "name": "Autonomous Gigs & City Services",
    "brandTag": "Self-Employed & Contract Work // 24/7 Freedom",
    "icon": "🛵",
    "subtitle": "3 Autonomous & Contract Roles · Schedule Autonomy",
    "ruleNotice": "Work on your own terms. Couriers pedal deliveries even with wanted status, drivers navigate emergent passenger encounters, and commercial cleaners earn streak bonuses across competing city contracting agencies.",
    "tracks": [
      {
        "id": "apps",
        "title": "App Mobility & Delivery Services · Autonomous",
        "description": "Instant payouts per job. Road cycling deliveries or late-night rideshare driving.",
        "positionIds": [
          "courier",
          "driver"
        ]
      },
      {
        "id": "cleaning",
        "title": "Commercial Sanitization Contracts · City Service",
        "description": "Clean businesses across the city. Squeegee floors, water indoor plants, and unlock luxury mansion jobs.",
        "positionIds": [
          "cleaner_commercial"
        ]
      }
    ]
  },
  {
    "id": "supermarket",
    "name": "Super Takai - Supermarket Chain",
    "brandTag": "スーパータカイ Supermarkets // 3 City Branches",
    "icon": "🛒",
    "subtitle": "Retail Restocking · 3 Branches in SPRF",
    "ruleNotice": "Restock physical gondolas across 3 supermarket locations before and after morning commuter surges.",
    "tracks": [
      {
        "id": "retail",
        "title": "Store Restocking Operations · Retail",
        "description": "Morning and afternoon restocking shifts before the city's shoppers arrive.",
        "positionIds": [
          "stock_clerk"
        ]
      }
    ]
  }
];

const CAREERS_DATABASE = [
  {
    "id": "assistant",
    "branch": "office",
    "branchName": "Lunar — Industrial Sensors",
    "level": 1,
    "name": "Administrative Assistant",
    "salary": "$ 1,800 / week",
    "hours": "Mon-Fri · 08:00 to 17:00",
    "sequenceType": "start",
    "sequenceLabel": "🚩 Universal Starting Point",
    "leadsTo": "Choice: Service Desk or Inside Sales",
    "cues": [
      "starting"
    ],
    "cuesLabels": [
      "Mandatory Story Start"
    ],
    "desc": "The universal starting line for corporate life. Juggle immediate director demands in a scavenger-hunt sprint: gather supplier invoices, unjam stubborn printers, and fetch coffee before the 3:20 clock deadline.",
    "responsibilities": [
      "Closing Day Minigame: 5 minutes to deliver the weekly company closing report.",
      "Unjam the mechanical printer (multi-step clearing sequence).",
      "Deliver fresh coffee to the director before 3:20 on the clock to avoid reprimands.",
      "Audit numeric balance sheets and physically deliver the printed report to the corner office."
    ],
    "promotionNotes": "Observe coworkers' routines and earn the opportunity to choose between Technical Support (Inbox triage) or Inside Sales (Spec & Deal bargaining).",
    "dialogQuote": "The printer jammed again, and the director expects fresh coffee on his desk before the 2:30 executive meeting. Hustle!",
    "dialogSpeaker": "Ana · Office Coworker",
    "dialogImage": "assets/img/closing_day_printer.png"
  },
  {
    "id": "service_desk",
    "branch": "office",
    "branchName": "Lunar — Industrial Sensors",
    "level": 2,
    "name": "Service Desk (Technical Support)",
    "salary": "$ 2,200 / week",
    "hours": "Mon-Fri · 08:00 to 17:00",
    "sequenceType": "auto",
    "sequenceLabel": "⏩ Auto Promotion from Assistant",
    "leadsTo": "Quality & Support Supervisor",
    "cues": [
      "arcade"
    ],
    "cuesLabels": [
      "Real-Time Triaging"
    ],
    "desc": "On the frontline of corporate trouble tickets. Triage incoming emails into 5 distinct categories and evaluate 24-month warranty claims against ticking countdown timers.",
    "responsibilities": [
      "Triage inbound emails into Technical Inquiries, Warranty Claims, Complaints, Sales Inquiries, and Phishing.",
      "Detect malicious links using tooltips that flag spoofed and suspicious sender URLs.",
      "Decide warranty validity: Factory defects only; immersion coverage strictly for IP68-certified models (CAM-4); lightning strikes and weather surges are NEVER covered.",
      "Route subtle calibration drifts to the engineering division."
    ],
    "promotionNotes": "Consistent high performance automatically qualifies you for promotion to Quality & Support Supervisor.",
    "dialogQuote": "The client submerged a PT-200 transmitter directly into a tank, but it's only rated IP65! If you approve this warranty replacement, the company eats a $420 loss right out of our department budget!",
    "dialogSpeaker": "Ben · Support Analyst",
    "dialogImage": "assets/img/job_inbox.png"
  },
  {
    "id": "inside_sales",
    "branch": "office",
    "branchName": "Lunar — Industrial Sensors",
    "level": 2,
    "name": "Inside Sales Representative",
    "salary": "$ 2,000 / week + Sales Commission",
    "hours": "Mon-Fri · 08:00 to 17:00",
    "sequenceType": "choice",
    "sequenceLabel": "🔀 Choice from Assistant",
    "leadsTo": "Choice: Field Sales or Sales Manager",
    "cues": [
      "bonus"
    ],
    "cuesLabels": [
      "Sales Commission"
    ],
    "desc": "Negotiate industrial sensors over workstation terminals. Cross-reference operating temperature, pressure thresholds, and output signals (4-20mA, 0-10V) while bargaining before client patience runs out.",
    "responsibilities": [
      "Cross-reference catalog specifications (PT-100 through PT-400 probes, TH-10 through TH-50 thermal sensors).",
      "Avoid overselling and never supply a sensor outside requested technical parameters.",
      "Canonical hazard: Supplying an incompatible sensor that melts at 80 °C triggers corporate lawsuits and immediate termination!",
      "Negotiate tiered counteroffer discounts to close orders before a third customer refusal."
    ],
    "promotionNotes": "Unlocks career branching into Field Sales Specialist (Road) or Commercial Sales Manager.",
    "dialogQuote": "The client wants to pay $900 for a thermal probe rated for 80 °C. If I push that cheap 45 °C unit to make a quick sale, it'll melt into sludge inside his boiler...",
    "dialogSpeaker": "Inside Sales Rep",
    "dialogImage": "assets/img/job_deal.png"
  },
  {
    "id": "quality_supervisor",
    "branch": "office",
    "branchName": "Lunar — Industrial Sensors",
    "level": 3,
    "name": "Quality & Support Supervisor",
    "salary": "$ 3,500 / week",
    "hours": "Mon-Fri · 08:00 to 17:00",
    "sequenceType": "auto",
    "sequenceLabel": "⏩ Auto Promotion from Service Desk",
    "leadsTo": "Competitive Intelligence Analyst",
    "cues": [
      "bonus"
    ],
    "cuesLabels": [
      "Surplus Converts to Bonus"
    ],
    "desc": "Acts as the company's first-instance dispute ombudsman. Inspect severe client escalations, authorize conciliation settlements proportionate to claim severity, and approve exceptional warranties.",
    "responsibilities": [
      "Manage the weekly resolution and customer conciliation budget.",
      "Strategic payoff: Whatever budget remains unspent by Friday afternoon converts directly into personal performance and prestige!",
      "Distribute goodwill gifts and refunds to defuse angry corporate clients before legal action."
    ],
    "promotionNotes": "Direct automatic promotion track to Competitive Intelligence Analyst.",
    "dialogQuote": "We have $1,200 remaining in my conciliation discretionary fund this Friday. That surplus goes straight toward my executive promotion review!",
    "dialogSpeaker": "Customer Support Supervisor",
    "dialogImage": "assets/img/job_office_elevator.png"
  },
  {
    "id": "external_sales",
    "branch": "office",
    "branchName": "Lunar — Industrial Sensors",
    "level": 3,
    "name": "Field Sales Specialist (On the Road)",
    "salary": "$ 3,000 / wk + High Commission",
    "hours": "Mon-Fri · 08:00 to 17:00 (Fieldwork)",
    "sequenceType": "choice",
    "sequenceLabel": "🔀 Choice from Inside Sales",
    "leadsTo": "Sales Manager or Vice Director",
    "cues": [
      "bonus"
    ],
    "cuesLabels": [
      "Unlocks Permanent Bonus"
    ],
    "desc": "Field visits to manufacturing plants across SPRF. Advancing through this path permanently unlocks the coveted Commercial Persuasion salary modifier across all commercial positions.",
    "responsibilities": [
      "Prospect industrial manufacturing complexes and secure high-volume municipal sensor contracts.",
      "Permanently grants the Commercial Persuasion modifier (lasting salary boost across all commercial roles)."
    ],
    "promotionNotes": "Promote to Sales Manager retaining the permanent commercial modifier, or springboard straight to Executive Vice Director.",
    "dialogQuote": "Closing this bulk sensor contract for the industrial district locked in a permanent commercial commission bonus for the rest of my career!",
    "dialogSpeaker": "Commercial Representative",
    "dialogImage": "assets/img/downtown.png"
  },
  {
    "id": "sales_manager",
    "branch": "office",
    "branchName": "Lunar — Industrial Sensors",
    "level": 3,
    "name": "Commercial Sales Manager",
    "salary": "$ 6,000 / week",
    "hours": "Mon-Fri · Flexible Hours",
    "sequenceType": "auto",
    "sequenceLabel": "⏩ From Field Sales or Inside Sales",
    "leadsTo": "Executive Vice Director",
    "cues": [
      "crime",
      "danger"
    ],
    "cuesLabels": [
      "Illicit Kickback Scheme",
      "Police Sting Risk"
    ],
    "desc": "Analyze sales metrics and monitor staff communication logs. You can enter illicit kickback schemes with corrupt sales reps—but risk walking into a director-backed police sting!",
    "responsibilities": [
      "Clock in and roam freely across the city as long as critical calls are answered.",
      "Fire underperforming reps with immediate cause.",
      "Secret scheme: Tap into fraudulent commission diversions to siphon daily illicit cuts.",
      "Internal Affairs Informant Event: If the rep is wired as an undercover director plant, police officers place you under immediate arrest for corporate extortion!"
    ],
    "promotionNotes": "Promotion path to Executive Vice Director.",
    "dialogQuote": "You thought I was just going to fire you? Who said anything about a pink slip? Officers, step right in!",
    "dialogSpeaker": "Company Director · Corporate Sting",
    "dialogImage": "assets/img/job_hire_dialog.png"
  },
  {
    "id": "analyst",
    "branch": "office",
    "branchName": "Lunar — Industrial Sensors",
    "level": 4,
    "name": "Competitive Intelligence Analyst",
    "salary": "$ 7,000 / week",
    "hours": "Autonomous · Unrestricted Schedule",
    "sequenceType": "auto",
    "sequenceLabel": "⏩ Auto from Quality Supervisor",
    "leadsTo": "Chief Financial Officer (CFO)",
    "cues": [
      "crime",
      "danger"
    ],
    "cuesLabels": [
      "Industrial Espionage",
      "Falsified Dossiers"
    ],
    "desc": "Audit competitor filings and assemble weekly executive intelligence briefs. Rival conglomerates court you to leak proprietary blueprints in exchange for illicit wire transfers.",
    "responsibilities": [
      "Draft doctored market reports claiming your firm holds an unassailable monopoly.",
      "Receive encrypted inquiries on your personal mobile to leak proprietary sensor designs.",
      "Risk: Internal IT monitors encrypted packets, and corporate buyers might be a compliance trap orchestrated by the Director."
    ],
    "promotionNotes": "Direct automatic promotion track to Chief Financial Officer (CFO).",
    "dialogQuote": "The rival firm offered $15,000 in untraceable cash to leak schematics for our high-temp thermal probe. If executive compliance intercepts this, it's straight to maximum-security prison.",
    "dialogSpeaker": "Market Intelligence Analyst",
    "dialogImage": "assets/img/job_office_elevator.png"
  },
  {
    "id": "vice_director",
    "branch": "office",
    "branchName": "Lunar — Industrial Sensors",
    "level": 4,
    "name": "Executive Vice Director",
    "salary": "$ 15,000 / week",
    "hours": "Mon, Wed, Fri · 09:00 to 11:00 (2h/day!)",
    "sequenceType": "auto",
    "sequenceLabel": "⏩ From Sales Manager / External Sales",
    "leadsTo": "Chief Executive Officer (CEO)",
    "cues": [
      "executive"
    ],
    "cuesLabels": [
      "2h/Day Schedule · 3 Days/Week"
    ],
    "desc": "The pinnacle of corporate luxury. Clock in for merely two hours a day, three days a week. Private corner office with panoramic metropolitan views and unimpeded executive authority.",
    "responsibilities": [
      "Ultra-reduced work schedule (only 6 total hours required per week).",
      "Full authority to hire and terminate personnel across all departmental ranks.",
      "Shortest, most direct progression path to Chief Executive Officer (CEO)."
    ],
    "promotionNotes": "Direct fastest promotion track to Chief Executive Officer.",
    "dialogQuote": "Two brief morning strategy briefings on Monday, Wednesday, and Friday. The rest of the week is completely mine to enjoy metropolitan life in SPRF.",
    "dialogSpeaker": "Executive Vice Director",
    "dialogImage": "assets/img/job_director_press.png"
  },
  {
    "id": "cfo",
    "branch": "office",
    "branchName": "Lunar — Industrial Sensors",
    "level": 4,
    "name": "Chief Financial Officer (CFO)",
    "salary": "$ 15,000 / week",
    "hours": "Mon, Wed, Fri · 09:00 to 11:00 (2h/day!)",
    "sequenceType": "auto",
    "sequenceLabel": "⏩ Auto from Intelligence Analyst",
    "leadsTo": "Chief Executive Officer (Requires 4x Performance)",
    "cues": [
      "executive"
    ],
    "cuesLabels": [
      "Requires 4x Performance for CEO"
    ],
    "desc": "Matches the Vice Director's relaxed 2-hour daily schedule, but requires 4 times more performance output to claim the top seat of Chief Executive Officer.",
    "responsibilities": [
      "Approve quarterly balance sheets and capital allocation budgets for the sensor firm.",
      "Elite 6-hour weekly workload commanding a top-bracket executive salary ($15,000/wk).",
      "Must deliver quadruple net results to outmaneuver the Vice Director for the CEO chair."
    ],
    "promotionNotes": "Arduous merit-based path to Chief Executive Officer (CEO).",
    "dialogQuote": "Our fiscal quarter shattered revenue projections, yet the Board still demands quadruple the performance metrics before they hand me the CEO gavel over the Vice Director.",
    "dialogSpeaker": "CFO · Chief Financial Officer",
    "dialogImage": "assets/img/closing_day_boss.png"
  },
  {
    "id": "ceo",
    "branch": "office",
    "branchName": "Lunar — Industrial Sensors",
    "level": 5,
    "name": "Chief Executive Officer (CEO)",
    "salary": "$ 40,000 / week",
    "hours": "No Fixed Schedule · Absolute Liberty",
    "sequenceType": "summit",
    "sequenceLabel": "🏁 Corporate Summit",
    "leadsTo": "Peak Career Rank",
    "cues": [
      "executive",
      "bonus"
    ],
    "cuesLabels": [
      "Absolute Authority",
      "Live Crisis Press Minigame"
    ],
    "desc": "The summit of corporate hierarchy. Putt golf balls across office carpeting, rubber-stamp authorizations without reading (courting corporate catastrophe), and face live televised press conferences on TV Maresol.",
    "responsibilities": [
      "'Sign Without Reading' Minigame: Rapidly stamp hundreds of invoices in 5 seconds or review each entry line-by-line to hunt down embezzlements.",
      "'Press Conference' Minigame: Defend the conglomerate live on TV Maresol using corporate jargon when a scandal erupts over melted industrial sensors.",
      "Staggering compensation of $40,000 per week (deposited every Friday at 17:00)."
    ],
    "promotionNotes": "No higher corporate rank exists in the city. Maximum social status across SPRF.",
    "dialogQuote": "Members of the press from TV Maresol: the alleged sensor melting was an isolated high-temperature surge caused by external factors currently under forensic audit!",
    "dialogSpeaker": "Company CEO · Live Press Conference",
    "dialogImage": "assets/img/job_director_press.png"
  },
  {
    "id": "attendant_1",
    "branch": "pharmacy",
    "branchName": "Pharmacy Chain",
    "level": 1,
    "name": "Pharmacy Counter Clerk 1",
    "salary": "$ 1,600 / week",
    "hours": "Mon-Fri · Morning Shift: 07:00 to 15:00",
    "sequenceType": "start",
    "sequenceLabel": "🚩 Pharmacy Starting Rank",
    "leadsTo": "Senior Pharmacy Clerk 2",
    "cues": [
      "starting"
    ],
    "cuesLabels": [
      "Dispensary Cashier"
    ],
    "desc": "Operate the drugstore register, assist patrons walking the aisles, and update pricing labels across retail gondolas in compliance with municipal health authority directives.",
    "responsibilities": [
      "Ring up customers in checkout lines and process register payments.",
      "Reprice retail goods across drugstore aisles following daily regulatory tariffs."
    ],
    "promotionNotes": "Automatic promotion to Senior Counter Clerk 2 upon meeting performance quota.",
    "dialogQuote": "I need to reprice all the vitamin bottles in aisle 3 before the floor supervisor opens checkout register 2.",
    "dialogSpeaker": "Pharmacy Clerk 1",
    "dialogImage": "assets/img/job_pharmacy_shelf.png"
  },
  {
    "id": "attendant_2",
    "branch": "pharmacy",
    "branchName": "Pharmacy Chain",
    "level": 2,
    "name": "Senior Pharmacy Clerk 2",
    "salary": "$ 1,800 / week",
    "hours": "Mon-Fri · Evening Shift: 15:00 to 23:00",
    "sequenceType": "auto",
    "sequenceLabel": "⏩ Auto from Clerk 1",
    "leadsTo": "Drugstore Floor Supervisor",
    "cues": [
      "arcade"
    ],
    "cuesLabels": [
      "Controlled Prescription Triage"
    ],
    "desc": "Staff the prescription counter and manage the dispensation of regulated controlled pharmaceuticals requiring strict prescription retention.",
    "responsibilities": [
      "Verify antibiotic and controlled medication slips against regulatory medical databases.",
      "Audit dosage values and match prescriptions against certified medical registries."
    ],
    "promotionNotes": "Automatic promotion to Drugstore Floor Supervisor.",
    "dialogQuote": "This controlled prescription is missing the official registry stamp from the Regional Hospital physician. I cannot legally dispense this medication!",
    "dialogSpeaker": "Senior Clerk 2",
    "dialogImage": "assets/img/job_pharmacy_rx.png"
  },
  {
    "id": "pharmacy_supervisor",
    "branch": "pharmacy",
    "branchName": "Pharmacy Chain",
    "level": 3,
    "name": "Drugstore Floor Supervisor",
    "salary": "$ 2,500 / week",
    "hours": "Tue-Sat · Opening or Closing Shifts",
    "sequenceType": "choice",
    "sequenceLabel": "🔀 Branch Point: Management vs Clinical",
    "leadsTo": "Store Manager or Licensed Pharmacist",
    "cues": [
      "bonus"
    ],
    "cuesLabels": [
      "Store Keys · Armored Transport"
    ],
    "desc": "Open and close retail store branches. Grant managerial discounts, sweep register cash into the floor vault, and schedule armored cash couriers.",
    "responsibilities": [
      "Resolve escalated disputes with volatile counter patrons.",
      "Sweep cash from registers into the drop safe whenever cash ceilings are exceeded.",
      "Summon armored security vehicles when vault deposits reach collection thresholds."
    ],
    "promotionNotes": "Branching pathway into Store Manager or into Licensed Pharmacist (if holding a Pharmacy Degree).",
    "dialogQuote": "The retail safe reached our $20,000 security ceiling. I've logged the armored transport dispatch for 18:00 sharp.",
    "dialogSpeaker": "Store Floor Supervisor",
    "dialogImage": "assets/img/job_pharmacy_shelf.png"
  },
  {
    "id": "pharmacy_manager",
    "branch": "pharmacy",
    "branchName": "Pharmacy Chain",
    "level": 4,
    "name": "Pharmacy Store Manager",
    "salary": "$ 5,000 / wk + Generous Profit Sharing",
    "hours": "Flexible Hours · Retail Operations Oversight",
    "sequenceType": "auto",
    "sequenceLabel": "⏩ Operations Track",
    "leadsTo": "Regional Pharmacy Director",
    "cues": [
      "bonus",
      "direct_hire"
    ],
    "cuesLabels": [
      "Hire/Fire Authority · Profit Bonus",
      "Direct Hire Allowed"
    ],
    "desc": "Oversees all daily operations for the retail pharmacy branch. Schedules shifts, hires and dismisses floor staff, and takes performance penalties if customer lines stall.",
    "responsibilities": [
      "Build balanced staff schedules for attendants and clerks (max 5 days/wk per municipal labor code).",
      "Maintain high customer satisfaction scores and minimize register queue delays.",
      "Can be recruited directly into this position based on prior executive reputation."
    ],
    "promotionNotes": "Promotion to Regional Pharmacy Director.",
    "dialogQuote": "Line 1 is wrapping around the cosmetics aisle! If customer satisfaction scores drop, our quarterly profit-sharing bonus takes a massive hit on Friday.",
    "dialogSpeaker": "Store General Manager",
    "dialogImage": "assets/img/job_hire_dialog.png"
  },
  {
    "id": "pharmacist",
    "branch": "pharmacy",
    "branchName": "Pharmacy Chain",
    "level": 4,
    "name": "Licensed Pharmacist",
    "salary": "$ 5,000 / wk + Generous Profit Sharing",
    "hours": "Mon-Fri · 07:00 to 15:00 · Autonomous",
    "sequenceType": "choice",
    "sequenceLabel": "🎓 Degree Required · Clinical Track",
    "leadsTo": "Pharmacist-Manager (Hybrid)",
    "cues": [
      "diploma",
      "bonus",
      "direct_hire"
    ],
    "cuesLabels": [
      "Pharmacy Degree Mandatory",
      "Direct Hire Allowed"
    ],
    "desc": "Indispensable licensed clinical role. Administer injections, perform sterile ear piercings (using retail drugstore studs), check blood pressure, monitor glucose, and process diagnostic test kits.",
    "responsibilities": [
      "Mandatory requirement: University Degree in Pharmacy.",
      "Perform clinical procedures in the private consultation suite (injections, tests, piercing).",
      "Authorized to perform any clerk or supervisory duty on the store floor."
    ],
    "promotionNotes": "Can merge with Store Manager into the elite 'Pharmacist-Manager' hybrid role (permanent apex salary bonus).",
    "dialogQuote": "The injectable antibiotic dosage is prepped in clinic room 2. I've cross-referenced the prescription with the prescribing physician.",
    "dialogSpeaker": "Dr. Sarah · Licensed Pharmacist",
    "dialogImage": "assets/img/job_pharmacy_rx.png"
  },
  {
    "id": "manager_pharmacist",
    "branch": "pharmacy",
    "branchName": "Pharmacy Chain",
    "level": 4,
    "name": "Pharmacist-Manager (Hybrid Role)",
    "salary": "$ 7,500 / wk + Profit Sharing (Permanent Bonus!)",
    "hours": "Autonomous Schedule · Total Store Sovereignty",
    "sequenceType": "auto",
    "sequenceLabel": "⭐ Apex Commercial Hybrid",
    "leadsTo": "Regional Pharmacy Director",
    "cues": [
      "diploma",
      "bonus",
      "direct_hire"
    ],
    "cuesLabels": [
      "Permanent Lifetime Bonus",
      "Clinical & Executive Dual Role"
    ],
    "desc": "The apex commercial hybrid approved in game canon. A store manager who earns a pharmacy degree (or a pharmacist promoted to manager) secures a permanent base salary bonus for life!",
    "responsibilities": [
      "Cover for pharmacists during absences while retaining executive command of the store.",
      "Permanent lifetime salary boost remains intact even if you move to a rival pharmacy chain.",
      "Commands hiring, firing, payroll audits, and regulatory clinical compliance."
    ],
    "promotionNotes": "Direct promotion track to Regional Pharmacy Director.",
    "dialogQuote": "Assuming store general management alongside official clinical license registration locked in $7,500 weekly base pay plus network-wide profit sharing!",
    "dialogSpeaker": "Hybrid Pharmacist-Manager",
    "dialogImage": "assets/img/job_pharmacy_rx.png"
  },
  {
    "id": "regional_manager",
    "branch": "pharmacy",
    "branchName": "Pharmacy Chain",
    "level": 5,
    "name": "Regional Pharmacy Director",
    "salary": "$ 9,000 / week",
    "hours": "Mon-Fri · 08:00 to 17:00 (Field Oversight)",
    "sequenceType": "summit",
    "sequenceLabel": "🏁 Pharmaceutical Summit",
    "leadsTo": "Top Healthcare Executive",
    "cues": [
      "executive"
    ],
    "cuesLabels": [
      "Technical Audits",
      "Fires Store Managers"
    ],
    "desc": "Oversees all 7 pharmacy outlets across SPRF. Conducts unannounced compliance inspections (clean lab coats, adequate staffing, cold-chain storage) and prioritizes branches with customer complaints.",
    "responsibilities": [
      "Audit sanitary compliance, prescription retention archives, and cold-chain drug storage across all 7 city locations.",
      "Unilateral power to fire retail store managers and supervisors for operational breaches.",
      "Reserved exclusively for candidates promoted from within internal store management."
    ],
    "promotionNotes": "The highest executive pinnacle in the metropolitan pharmaceutical sector.",
    "dialogQuote": "The downtown branch is missing its licensed pharmacist during peak commuter hours, and staff are wearing non-standard coats. Formal notice served, and store management bonuses are revoked!",
    "dialogSpeaker": "Regional Operations Director",
    "dialogImage": "assets/img/downtown.png"
  },
  {
    "id": "dining_helper",
    "branch": "restaurant",
    "branchName": "Restaurants & Dining",
    "level": 1,
    "name": "Dining Room Busser",
    "salary": "$ 1,500 / week",
    "hours": "Wed-Sun · 09:00 to 15:30 (Lunch Shift)",
    "sequenceType": "start",
    "sequenceLabel": "🚩 Front-of-House Entry",
    "leadsTo": "Buffet Waiter / Cashier",
    "cues": [
      "starting"
    ],
    "cuesLabels": [
      "Dining Room Maintenance"
    ],
    "desc": "Keep tables sanitized, thermal coffee dispensers filled, and napkin holders stocked. If napkins run out, disgruntled guests lodge complaints that trigger double penalties!",
    "responsibilities": [
      "Clear and sanitize tables immediately after diners depart.",
      "Ensure complimentary coffee urns and paper napkin dispensers are never depleted.",
      "Hardcore Difficulty: Making an error deducts double the points that the task would award!"
    ],
    "promotionNotes": "Automatic promotion to Buffet Waiter / Cashier.",
    "dialogQuote": "A new party is sitting in dining section 2! If their table is out of napkins, the head floor manager is going to dock my daily tip bonus!",
    "dialogSpeaker": "Dining Room Busser",
    "dialogImage": "assets/img/job_restaurant_buffet.png"
  },
  {
    "id": "kitchen_helper",
    "branch": "restaurant",
    "branchName": "Restaurants & Dining",
    "level": 1,
    "name": "Kitchen Prep Assistant",
    "salary": "$ 1,500 / week",
    "hours": "Wed-Sun · 09:00 to 15:30",
    "sequenceType": "start",
    "sequenceLabel": "🚩 Back-of-House Entry",
    "leadsTo": "Choice: Line Cook or Waiter",
    "cues": [
      "starting"
    ],
    "cuesLabels": [
      "Food Prep & Dishwashing"
    ],
    "desc": "Peel potatoes, chop carrots, dice scallions, fill heavy stockpots with water, and wash greasy dishware carrying organic leftovers.",
    "responsibilities": [
      "Stock prep stations for line cooks and executive chefs.",
      "Immediately dispose of expired ingredients past shelf life.",
      "Scrub dirty pans and plates featuring dynamic procedural stains."
    ],
    "promotionNotes": "Can choose promotion into Line Cook (culinary track) or cross into Waiter/Cashier (front-of-house track).",
    "dialogQuote": "Chef ordered 20 pounds of peeled potatoes ready before the noon lunch rush. I can't let the prep line fall behind!",
    "dialogSpeaker": "Kitchen Prep Assistant",
    "dialogImage": "assets/img/job_restaurant_buffet.png"
  },
  {
    "id": "waiter",
    "branch": "restaurant",
    "branchName": "Restaurants & Dining",
    "level": 2,
    "name": "Buffet Waiter / Cashier",
    "salary": "$ 1,700 / week",
    "hours": "Wed-Sun · 10:30 to 15:00",
    "sequenceType": "auto",
    "sequenceLabel": "⏩ Auto from Dining Helper (Waiters Never Cook)",
    "leadsTo": "Restaurant Floor Manager",
    "cues": [
      "arcade"
    ],
    "cuesLabels": [
      "Buffet & À La Carte Service"
    ],
    "desc": "In Buffet venues, replenish heated steam tables and ring up beverage tabs. In fine-dining À La Carte venues, serve plated courses table-side and retrieve vintage bottles from chilled cellars.",
    "responsibilities": [
      "Buffet: Keep stainless-steel food wells replenished and process register payments.",
      "À La Carte: Respond to table call bells, deliver written tickets to the kitchen expo window, and run handheld POS terminals.",
      "Fine Dining: Uncork selected wines from the temperature-controlled cellar and pour proper glassware."
    ],
    "promotionNotes": "Promotion to Restaurant Floor Manager (Note: waiters never cross over to culinary line cooking!).",
    "dialogQuote": "Table 4 ordered a reserve red from the cellar and the chef's pan-seared salmon. Fetching the bottle at the exact serving temperature!",
    "dialogSpeaker": "À La Carte Waiter",
    "dialogImage": "assets/img/job_restaurant_fancy.png"
  },
  {
    "id": "cook",
    "branch": "restaurant",
    "branchName": "Restaurants & Dining",
    "level": 2,
    "name": "Line Cook",
    "salary": "$ 2,200 / week",
    "hours": "Wed-Sun · 09:00 to 15:00",
    "sequenceType": "auto",
    "sequenceLabel": "⏩ Auto from Kitchen Assistant",
    "leadsTo": "Executive Chef (Requires Gastronomy Degree)",
    "cues": [
      "arcade"
    ],
    "cuesLabels": [
      "Sides, Pastas & Sauces"
    ],
    "desc": "Prepare carbohydrates and appetizers: seasoned rice, handmade pastas, risottos, and delicate sauces following ticket pacing dictated by front-of-house orders.",
    "responsibilities": [
      "Cook all side dishes with precise cooking timers.",
      "Coordinate workstation prep with the Kitchen Assistant.",
      "Does NOT sear premium proteins or plate final courses (exclusive domain of the Executive Chef)."
    ],
    "promotionNotes": "With a Culinary Arts Degree, promoted directly to Executive Chef.",
    "dialogQuote": "Truffle risotto and buttered purée are hot in the pass window, Chef! Waiting on meat cuts to finish plating.",
    "dialogSpeaker": "Line Cook",
    "dialogImage": "assets/img/job_restaurant_buffet.png"
  },
  {
    "id": "restaurant_manager",
    "branch": "restaurant",
    "branchName": "Restaurants & Dining",
    "level": 3,
    "name": "Restaurant Floor Manager",
    "salary": "$ 4,000 / week",
    "hours": "Flexible Hours",
    "sequenceType": "auto",
    "sequenceLabel": "⏩ Front-of-House Lead",
    "leadsTo": "Restaurant Franchise Owner",
    "cues": [
      "bonus",
      "direct_hire"
    ],
    "cuesLabels": [
      "Direct Hire Allowed",
      "Shift Supervision"
    ],
    "desc": "Oversees shift hospitality, buys food supplies before or after service (never during), and ensures waitstaff deliver five-star dining room service.",
    "responsibilities": [
      "Procure restaurant supplies and fresh produce before doors open.",
      "Supervise waitstaff and resolve customer complaints.",
      "Can be directly hired into this post based on previous executive reputation."
    ],
    "promotionNotes": "Promotion into Restaurant Franchise Owner / Proprietor.",
    "dialogQuote": "Produce delivery arrived at the back door. All tables are set for the evening tasting menu!",
    "dialogSpeaker": "Restaurant Floor Manager",
    "dialogImage": "assets/img/job_restaurant_fancy.png"
  },
  {
    "id": "chef",
    "branch": "restaurant",
    "branchName": "Restaurants & Dining",
    "level": 3,
    "name": "Executive Chef",
    "salary": "$ 8,000 / week (Double Manager Pay + Apex Bonus)",
    "hours": "Wed-Sun · 09:30 to 15:00",
    "sequenceType": "choice",
    "sequenceLabel": "🎓 Culinary Degree Required",
    "leadsTo": "Restaurant Franchise Owner",
    "cues": [
      "diploma",
      "bonus",
      "direct_hire"
    ],
    "cuesLabels": [
      "Culinary Degree Required",
      "Double Manager Salary + Apex Bonus",
      "Direct Hire"
    ],
    "desc": "The undisputed gastronomic ruler of the kitchen. Sear steaks, pan-roast seafood, and craft artisanal plate presentations. Earns double a general manager's salary plus a prestigious permanent bonus!",
    "responsibilities": [
      "Mandatory requirement: University Degree in Culinary Arts.",
      "Execute precise temperature finishes for prime steaks, poultry, and seafood.",
      "Oversee immaculate plate presentation before handing dishes to waitstaff.",
      "Commands an extraordinary compensation of $8,000 to $12,600/wk."
    ],
    "promotionNotes": "Can buy out the business to become Restaurant Franchise Owner.",
    "dialogQuote": "Prime tenderloin finished with red wine reduction and fresh herb emulsion. Waiter, table 2 immediately while the plate is piping hot!",
    "dialogSpeaker": "Executive Chef",
    "dialogImage": "assets/img/job_restaurant_fancy.png"
  },
  {
    "id": "franchise_manager",
    "branch": "restaurant",
    "branchName": "Restaurants & Dining",
    "level": 4,
    "name": "Restaurant Franchise Owner",
    "salary": "Net Profit Yield ($25,000+/wk)",
    "hours": "Total Entrepreneurial Autonomy",
    "sequenceType": "summit",
    "sequenceLabel": "🏁 Hospitality Summit",
    "leadsTo": "Independent Restaurateur",
    "cues": [
      "executive",
      "bonus"
    ],
    "cuesLabels": [
      "Franchise Proprietor",
      "Direct Net Profit Deposits"
    ],
    "desc": "Own multiple dining establishments across SPRF. Settle supplier accounts, municipal business taxes, and staff payroll; all residual net profits transfer directly into your personal bank account!",
    "responsibilities": [
      "Audit branch financials, seasonal tasting menus, and hospitality standards.",
      "Exclusive authority to recruit and dismiss executive head chefs.",
      "Every dollar of net operational surplus converts into personal player wealth."
    ],
    "promotionNotes": "Independent enterprise owner and real-estate investor in the city's living economy.",
    "dialogQuote": "All supplier invoices and payroll settled this Friday. The net surplus of $32,000 has already cleared directly into my checking account!",
    "dialogSpeaker": "Franchise Proprietor",
    "dialogImage": "assets/img/condo_alphaville.png"
  },
  {
    "id": "courier",
    "branch": "freelance",
    "branchName": "Autonomous Gigs & City Services",
    "level": 1,
    "name": "Bicycle Delivery Courier (Delivery App)",
    "salary": "Paid per delivery (Instant cashout)",
    "hours": "Flexible · Turn on app anytime",
    "sequenceType": "start",
    "sequenceLabel": "🛵 Autonomous Gig",
    "leadsTo": "Autonomous (Upgrade bikes at Spoke Cycles)",
    "cues": [
      "starting"
    ],
    "cuesLabels": [
      "Instant App Payouts",
      "No Background Checks"
    ],
    "desc": "Pedal across traffic corridors and bike paths delivering restaurant takeout, urgent pharmacy medicine, and sealed corporate courier satchels between private firms and SPRF City Hall.",
    "responsibilities": [
      "Navigate dense city traffic smoothly without striking pedestrians.",
      "Continue working without interruption even with [Suspect] or [Fugitive] judicial statuses!",
      "No boss, no production quotas: earnings hit your wallet the instant delivery confirmation clears."
    ],
    "promotionNotes": "Purchase high-performance road bikes at Spoke Cycles to shave travel times and multiply deliveries.",
    "dialogQuote": "Another express prescription delivery dropped off from the downtown pharmacy to the gated suburban estate. Fare deposited instantly in my app balance!",
    "dialogSpeaker": "Bike Courier",
    "dialogImage": "assets/img/player_home.png"
  },
  {
    "id": "driver",
    "branch": "freelance",
    "branchName": "Autonomous Gigs & City Services",
    "level": 1,
    "name": "Rideshare Driver (Personal Car)",
    "salary": "Paid per completed trip (Fares + Tips)",
    "hours": "Flexible · Nights & Weekends",
    "sequenceType": "start",
    "sequenceLabel": "🚗 Autonomous Gig",
    "leadsTo": "Autonomous (Upgrade cars at Dealerships)",
    "cues": [
      "arcade",
      "danger"
    ],
    "cuesLabels": [
      "Rare Encounters & Fare Dodgers",
      "Judicial App Lockout"
    ],
    "desc": "Drive your personal vehicle transporting citizens across SPRF. Navigate dozens of emergent slice-of-life events, from smooth-talking fare dodgers to enigmatic passengers murmuring about nocturnal anomalies across the sky!",
    "responsibilities": [
      "Transport passengers safely to requested destinations across town.",
      "Canonical emergent encounters: The passenger asking for your digital handle promising to pay tomorrow (some vanish forever!); an anxious TV Maresol anchor running late for a live broadcast; 5 passengers squeezing into a 4-seater (risking police checkpoints!).",
      "If your judicial status is flagged as [Wanted], rideshare dispatch freezes your account immediately!"
    ],
    "promotionNotes": "Upgrade to luxury sedans at Motorama or Eastside Auto to unlock high-bracket clientele and airport transfers.",
    "dialogQuote": "Hey driver, give me your digital transfer handle and I'll send the fare the moment I get upstairs, I swear! (Spoiler: they might vanish into the night and never pay).",
    "dialogSpeaker": "Suspicious Passenger",
    "dialogImage": "assets/img/crash_scene.png"
  },
  {
    "id": "cleaner_commercial",
    "branch": "freelance",
    "branchName": "Autonomous Gigs & City Services",
    "level": 1,
    "name": "Commercial Cleaning Contractor",
    "salary": "$ 1,450 / week + Streak Bonuses",
    "hours": "24/7 Any Time on Workdays · Total Freedom",
    "sequenceType": "start",
    "sequenceLabel": "🧹 Commercial Cleaning",
    "leadsTo": "5-Star Streak Unlocks Mansion Contracts",
    "cues": [
      "bonus"
    ],
    "cuesLabels": [
      "Flawless Streak Bonus",
      "5-Star Rating System"
    ],
    "desc": "Contracted to sanitize offices, boutiques, pharmacies, and restaurant dining rooms across SPRF. Two rival agencies — Spotless Ltd. and Clean Family Services — constantly bicker over who has the cleaner track record, but both pay cold cash to anyone who keeps the city's floors gleaming.",
    "responsibilities": [
      "Squeegee wet floors: if moisture lingers too long, clients complain and dock payment!",
      "Water wilted indoor plants (they turn vibrant green and blossom under your care).",
      "Earn a cash bonus for consecutive flawless work days.",
      "Reaching 5 stars plus the Purple Star unlocks high-paying contracts to clean luxury mansions in gated suburbs!"
    ],
    "promotionNotes": "Qualify for luxury residential contracts and institutional sanitization across the metropolis.",
    "dialogQuote": "Floor squeegeed dry and all lobby palms watered and shining green. Whether the contract came from Spotless or Clean Family, the floor doesn't care who signed the invoice!",
    "dialogSpeaker": "Commercial Cleaning Contractor",
    "dialogImage": "assets/img/job_cleaning_plants.png"
  },
  {
    "id": "stock_clerk",
    "branch": "supermarket",
    "branchName": "Super Takai Supermarkets",
    "level": 1,
    "name": "Supermarket Stock Clerk",
    "salary": "$ 1,500 / week",
    "hours": "Mon-Fri · 06:00-10:00 & 11:00-14:00",
    "sequenceType": "start",
    "sequenceLabel": "🛒 Retail Restocker",
    "leadsTo": "3 City Branches in SPRF",
    "cues": [
      "starting"
    ],
    "cuesLabels": [
      "Shelf Restocking",
      "Early Morning Shifts"
    ],
    "desc": "Restock retail gondolas and shelves across the 3 branches of Super Takai (スーパータカイ) in SPRF. Work split shifts before and after the morning rush.",
    "responsibilities": [
      "Restock 26 shelf positions across 7 rows of gondolas at the main downtown branch.",
      "Organize incoming supplier crates and update display signage.",
      "Keep aisles unobstructed before commuter shoppers flood the registers."
    ],
    "promotionNotes": "A vital early-morning job that leaves late afternoons and evenings completely open.",
    "dialogQuote": "All 7 rows of gondolas are fully stocked with fresh goods before the doors unlock for the morning shoppers!",
    "dialogSpeaker": "Super Takai Stock Clerk",
    "dialogImage": "assets/img/job_pharmacy_shelf.png"
  }
];

// --- GESTALT CAREER TREE RENDERING ---
function renderCareerTree(sectorFilter = 'all', cueFilter = 'all') {
  const container = document.getElementById('treeHierarchyContainer');
  if (!container) return;

  container.innerHTML = '';

  // Filter sectors
  const activeSectors = CAREER_SECTORS.filter(sec => {
    return (sectorFilter === 'all' || sec.id === sectorFilter);
  });

  let totalVisibleJobs = 0;

  activeSectors.forEach(sec => {
    // Check which jobs in this sector match the cue filter
    const sectorJobs = CAREERS_DATABASE.filter(j => j.branch === sec.id);
    const visibleJobs = sectorJobs.filter(j => {
      return (cueFilter === 'all' || j.cues.includes(cueFilter));
    });

    if (visibleJobs.length === 0) return;
    totalVisibleJobs += visibleJobs.length;

    // Create Profession Board (Gestalt Region / Common Container)
    const board = document.createElement('div');
    board.className = `profession-board board-${sec.id}`;
    board.id = `board-${sec.id}`;

    // Board Header
    board.innerHTML = `
      <div class="board-header">
        <div class="board-header-top">
          <div class="board-title-group">
            <span class="board-icon">${sec.icon}</span>
            <div>
              <div class="board-title">${sec.name}</div>
              <div class="board-subtitle">${sec.subtitle}</div>
            </div>
          </div>
          <span class="board-badge">${sec.brandTag}</span>
        </div>
        <div class="board-rules-banner">
          <span>⚖️ <strong>Canonical Law:</strong> ${sec.ruleNotice}</span>
        </div>
      </div>
    `;

    // Tracks Container (Gestalt Continuity / Tracks)
    const tracksContainer = document.createElement('div');
    tracksContainer.className = 'board-tracks-container';

    sec.tracks.forEach(track => {
      // Filter positions belonging to this track that are visible under cueFilter
      const trackJobs = visibleJobs.filter(j => track.positionIds.includes(j.id));
      if (trackJobs.length === 0) return;

      const trackBlock = document.createElement('div');
      trackBlock.className = 'flow-track-block';

      trackBlock.innerHTML = `
        <div class="track-block-header">
          <span class="track-block-title">
            <span style="color: var(--brand-teal);">◆</span> ${track.title}
          </span>
          <span style="font-size: 11.5px; color: var(--text-muted);">${track.description}</span>
        </div>
      `;

      const nodesRow = document.createElement('div');
      nodesRow.className = 'track-nodes-row';

      trackJobs.forEach(job => {
        const node = document.createElement('div');
        node.className = 'tree-node';
        node.setAttribute('data-id', job.id);
        node.setAttribute('data-cue', job.cues.join(' '));

        // Visual cue pills
        let cuePillsHtml = '';
        if (job.cues.includes('bonus')) {
          cuePillsHtml += `<span class="cue-pill pill-bonus">⭐ BONUS</span>`;
        }
        if (job.cues.includes('crime')) {
          cuePillsHtml += `<span class="cue-pill pill-crime">⚖️ ILLICIT SCHEME</span>`;
        }
        if (job.cues.includes('danger')) {
          cuePillsHtml += `<span class="cue-pill pill-danger">🚨 STING RISK</span>`;
        }
        if (job.cues.includes('diploma')) {
          cuePillsHtml += `<span class="cue-pill pill-diploma">🎓 DEGREE REQ</span>`;
        }
        if (job.cues.includes('executive')) {
          cuePillsHtml += `<span class="cue-pill pill-executive">👔 EXECUTIVE</span>`;
        }
        if (job.cues.includes('direct_hire')) {
          cuePillsHtml += `<span class="cue-pill pill-direct">🚪 DIRECT HIRE</span>`;
        }

        // Sequence badge style
        let seqClass = '';
        if (job.sequenceType === 'start') seqClass = 'is-start';
        else if (job.sequenceType === 'choice') seqClass = 'is-choice';
        else if (job.sequenceType === 'summit') seqClass = 'is-summit';

        node.innerHTML = `
          <div>
            <div class="node-header">
              <span class="node-level-chip">${job.branch === 'freelance' ? 'Autonomous' : (job.branch === 'supermarket' ? 'Retail' : `Level ${job.level}`)}</span>
              <div class="node-cues-row">${cuePillsHtml}</div>
            </div>
            <div class="node-role-name">${job.name}</div>
            <div style="margin: 8px 0;">
              <span class="node-sequence-badge ${seqClass}">${job.sequenceLabel}</span>
            </div>
            <p class="node-desc">${job.desc.substring(0, 115)}...</p>
          </div>
          <div class="node-footer">
            <span class="node-salary">${job.salary}</span>
            <span class="node-hours">${job.hours.split('·')[0]}</span>
          </div>
        `;

        node.addEventListener('click', () => {
          document.querySelectorAll('.tree-node').forEach(n => n.classList.remove('selected'));
          node.classList.add('selected');
          showCareerDetails(job);
          if (typeof SFX !== 'undefined') SFX.select();
        });

        nodesRow.appendChild(node);
      });

      trackBlock.appendChild(nodesRow);
      tracksContainer.appendChild(trackBlock);
    });

    board.appendChild(tracksContainer);
    container.appendChild(board);
  });

  if (totalVisibleJobs === 0) {
    container.innerHTML = `
      <div class="callout-banner" style="text-align: center; padding: 40px;">
        <h4 style="color: #fff; font-size: 18px; margin-bottom: 8px;">No careers match this filter combination.</h4>
        <p style="color: var(--text-muted); font-size: 14px;">Try switching profession sectors or clicking "All Sectors".</p>
      </div>
    `;
  }
}

// Display selected job details in the lower X-ray panel
function showCareerDetails(job) {
  const panel = document.getElementById('careerDetailPanel');
  if (!panel) return;

  const respItems = job.responsibilities.map(r => `<li>${r}</li>`).join('');

  panel.innerHTML = `
    <div class="panel-header-badge">
      <div>
        <div class="eyebrow">${job.branchName} · ${job.branch === 'freelance' ? 'Autonomous' : (job.branch === 'supermarket' ? 'Retail' : `Level ${job.level}`)}</div>
        <h3 class="panel-title">${job.name}</h3>
      </div>
      <div class="node-cues-row">
        ${job.cuesLabels.map(l => `<span class="cue-pill pill-bonus">${l}</span>`).join('')}
      </div>
    </div>

    <div class="panel-stats-grid">
      <div class="panel-stat-card">
        <span class="panel-stat-label">Weekly Compensation</span>
        <span class="panel-stat-val salary-highlight">${job.salary}</span>
      </div>
      <div class="panel-stat-card">
        <span class="panel-stat-label">Work Schedule</span>
        <span class="panel-stat-val" style="font-size: 15px;">${job.hours}</span>
      </div>
      <div class="panel-stat-card">
        <span class="panel-stat-label">Progression Sequence</span>
        <span class="panel-stat-val" style="font-size: 14px; color: #5eead4;">${job.leadsTo}</span>
      </div>
    </div>

    <div class="block">
      <h4 style="color: #fff; font-size: 18px; margin-bottom: 8px;">📋 Operational Routine & Canonical Responsibilities</h4>
      <ul style="padding-left: 20px; line-height: 1.6; color: #cbd5e1; display: grid; gap: 6px;">
        ${respItems}
      </ul>
    </div>

    <div class="block">
      <h4 style="color: #fff; font-size: 18px; margin-bottom: 8px;">🚀 Promotion & Career Ladder Trajectory</h4>
      <p style="color: var(--text-muted); font-size: 15px;">${job.promotionNotes}</p>
    </div>

    <!-- Dialog Capsule & Canonical In-Game Capture -->
    <div class="dialog-capsule ${job.cues.includes('danger') ? 'capsule-police' : 'capsule-office'}" style="margin-top: 10px;">
      <div class="dialog-avatar">
        <img src="${job.dialogImage}" alt="In-Game Record">
        <span class="status-indicator"></span>
      </div>
      <div class="dialog-body">
        <div class="dialog-meta">
          <div class="speaker-info">
            <span class="speaker-name">${job.dialogSpeaker}</span>
            <span class="speaker-role">${job.branchName}</span>
          </div>
          <span class="dialog-time">CANONICAL RECORD #EX-${job.id.toUpperCase()}</span>
        </div>
        <div class="dialog-bubble">
          <p class="speech-text">"${job.dialogQuote}"</p>
          <div class="dialog-media" style="margin-top: 12px; cursor: pointer;">
            <img src="${job.dialogImage}" alt="Gameplay ${job.name}">
            <div class="media-caption">
              <span>Real In-Game Capture · ${job.name}</span>
              <span class="media-badge">INTERACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Smooth scroll into panel
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Initialize Filters on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  let currentBranch = 'all';
  let currentCue = 'all';

  const branchButtons = document.querySelectorAll('.branch-filter-btn');
  branchButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      branchButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentBranch = btn.getAttribute('data-branch');
      renderCareerTree(currentBranch, currentCue);
    });
  });

  const cueButtons = document.querySelectorAll('.cue-filter-btn');
  cueButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      cueButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCue = btn.getAttribute('data-cue');
      renderCareerTree(currentBranch, currentCue);
    });
  });

  // Initial render
  renderCareerTree();

  // Select first canonical job (Administrative Assistant)
  if (CAREERS_DATABASE.length > 0) {
    showCareerDetails(CAREERS_DATABASE[0]);
    const firstNode = document.querySelector('.tree-node');
    if (firstNode) firstNode.classList.add('selected');
  }
});
