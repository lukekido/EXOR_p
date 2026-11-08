/* ==========================================================================
   EXORDIUM // CAREER TREE LOGIC: Canonical Database, Filters & X-Ray Panel
   ========================================================================== */

const CAREERS_DATABASE = [
  // --- SECTOR A: INDUSTRIAL SENSOR CO. ---
  {
    id: "aux_adm",
    branch: "office",
    branchName: "Industrial Sensor Co.",
    level: 1,
    name: "Administrative Assistant",
    salary: "$ 1,800 / week",
    hours: "Mon-Fri · 08:00 to 17:00",
    cues: ["starting"],
    cuesLabels: ["Mandatory Starting Point"],
    desc: "The universal starting point for corporate life. Juggle immediate director demands in a scavenger-hunt sprint: gather supplier invoices, unjam stubborn printers, and fetch coffee.",
    responsibilities: [
      "Closing Day Minigame: 5 minutes to deliver the weekly company closing report.",
      "Unjam the mechanical printer (multi-step clearing sequence).",
      "Deliver fresh coffee to the director before 3:20 on the clock to avoid reprimands.",
      "Audit numeric spreadsheets and physically deliver the printed report."
    ],
    promotionNotes: "Observe coworkers' routines and earn the opportunity to transition into Technical Support (Inbox triage) or Inside Sales (Spec & Deal negotiation).",
    dialogQuote: "The printer jammed again, and the director expects fresh coffee on his desk before the 2:30 executive meeting. Hustle!",
    dialogSpeaker: "Ana · Office Coworker",
    dialogImage: "assets/img/closing_day_printer.png"
  },
  {
    id: "service_desk",
    branch: "office",
    branchName: "Industrial Sensor Co.",
    level: 2,
    name: "Service Desk (Technical Support)",
    salary: "$ 2,200 / week",
    hours: "Mon-Fri · 08:00 to 17:00",
    cues: ["arcade"],
    cuesLabels: ["Real-Time Triaging"],
    desc: "On the frontline of corporate trouble tickets. Triage incoming emails into 5 distinct categories and evaluate 24-month warranty claims against ticking countdown timers.",
    responsibilities: [
      "Triage inbound emails into Technical Inquiries, Warranty Claims, Complaints, Sales Inquiries, and Phishing.",
      "Detect malicious links using tooltips that flag spoofed and suspicious sender URLs.",
      "Decide warranty validity: Factory defects only; immersion coverage strictly for IP68-certified models (CAM-4); lightning strikes and weather surges are NEVER covered.",
      "Route subtle calibration drifts to the engineering division."
    ],
    promotionNotes: "Consistent high performance automatically qualifies you for promotion to Quality & Support Supervisor.",
    dialogQuote: "The client submerged a PT-200 transmitter directly into a tank, but it's only rated IP65! If you approve this warranty replacement, the company eats a $420 loss right out of our department budget!",
    dialogSpeaker: "Ben · Support Analyst",
    dialogImage: "assets/img/job_inbox.png"
  },
  {
    id: "inside_sales",
    branch: "office",
    branchName: "Industrial Sensor Co.",
    level: 2,
    name: "Inside Sales Representative",
    salary: "$ 2,000 / wk + 3% Commission",
    hours: "Mon-Fri · 08:00 to 17:00",
    cues: ["bonus"],
    cuesLabels: ["Sales Commission"],
    desc: "Negotiate industrial sensors over workstation terminals. Cross-reference operating temperature, pressure thresholds, and output signals (4-20mA, 0-10V) while bargaining before client patience runs out.",
    responsibilities: [
      "Cross-reference catalog specifications (PT-100 through PT-400 probes, TH-10 through TH-50 thermal sensors).",
      "Avoid overselling and never supply a sensor outside requested technical parameters.",
      "Canonical hazard: Supplying an incompatible sensor that melts at 80 °C triggers corporate lawsuits and immediate termination!",
      "Counteroffer discount tiers (0% to 20%) to close orders before a third customer refusal."
    ],
    promotionNotes: "Unlocks career branching into Commercial Supervisor, Field Sales, or Sales Manager.",
    dialogQuote: "The client wants to pay $900 for a thermal probe rated for 80 °C. If I push that cheap 45 °C unit to make a quick sale, it'll melt into sludge inside his boiler...",
    dialogSpeaker: "Inside Sales Rep",
    dialogImage: "assets/img/job_deal.png"
  },
  {
    id: "quality_supervisor",
    branch: "office",
    branchName: "Industrial Sensor Co.",
    level: 3,
    name: "Quality & Support Supervisor",
    salary: "$ 3,500 / week",
    hours: "Mon-Fri · 08:00 to 17:00",
    cues: ["bonus"],
    cuesLabels: ["Surplus Converts to Bonus"],
    desc: "Acts as the company's first-instance dispute ombudsman. Inspect severe client escalations, authorize conciliation settlements from 10% to 200% of product value, and approve exceptional warranties.",
    responsibilities: [
      "Manage the weekly resolution and customer conciliation budget.",
      "Strategic payoff: Whatever budget remains unspent by Friday afternoon converts directly into personal performance and prestige!",
      "Distribute goodwill gifts and refunds to defuse angry corporate clients before legal action."
    ],
    promotionNotes: "Direct gateway toward Competitive Intelligence Analyst or Chief Financial Officer (CFO).",
    dialogQuote: "We have $1,200 remaining in my conciliation discretionary fund this Friday. That surplus goes straight toward my executive promotion review!",
    dialogSpeaker: "Customer Support Supervisor",
    dialogImage: "assets/img/job_office_elevator.png"
  },
  {
    id: "external_sales",
    branch: "office",
    branchName: "Industrial Sensor Co.",
    level: 3,
    name: "Field Sales Specialist (On the Road)",
    salary: "$ 3,000 / wk + High Commissions",
    hours: "Mon-Fri · 08:00 to 17:00 (Fieldwork)",
    cues: ["bonus"],
    cuesLabels: ["Unlocks +20% Permanent Modifier"],
    desc: "Field visits to industrial manufacturing plants and enterprise clients across SPRF. Climbing this path to Sales Manager permanently unlocks a coveted lifetime salary multiplier.",
    responsibilities: [
      "Prospect manufacturing facilities and secure high-volume municipal sensor contracts.",
      "Grants the permanent Commercial Persuasion modifier (+20% lifetime salary bonus across every commercial branch!)."
    ],
    promotionNotes: "Promotion to Sales Manager retaining the +20% permanent perk, or springboard to Executive Vice Director.",
    dialogQuote: "Closing this bulk sensor contract for the industrial district locked in a permanent 20% commission bonus in my pocket for the rest of my career!",
    dialogSpeaker: "Commercial Representative",
    dialogImage: "assets/img/downtown.png"
  },
  {
    id: "sales_manager",
    branch: "office",
    branchName: "Industrial Sensor Co.",
    level: 3,
    name: "Commercial Sales Manager",
    salary: "$ 6,000 / week",
    hours: "Mon-Fri · Flexible Hours",
    cues: ["crime", "danger"],
    cuesLabels: ["Kickback Scheme", "Police Sting Risk"],
    desc: "Analyze sales metrics and monitor staff communication logs. You can extort corrupt sales reps for a 50% daily cut of diverted commissions—but run a 4% chance of walking into the General Director's police sting!",
    responsibilities: [
      "Clock in and roam freely across the city as long as critical calls are answered.",
      "Fire underperforming reps with immediate cause.",
      "Secret scheme: Tap into fraudulent commission diversions to siphon 50% daily kickbacks.",
      "Canonical Informant Event (4% probability): The rep is wired as an undercover director plant; police officers handcuff you on the spot for corporate extortion!"
    ],
    promotionNotes: "Promotion path to Executive Vice Director.",
    dialogQuote: "You thought I was just going to fire you? Who said anything about a pink slip? Officers, step right in!",
    dialogSpeaker: "Company Director · Corporate Sting",
    dialogImage: "assets/img/job_hire_dialog.png"
  },
  {
    id: "intel_analyst",
    branch: "office",
    branchName: "Industrial Sensor Co.",
    level: 4,
    name: "Competitive Intelligence Analyst",
    salary: "$ 7,000 / week",
    hours: "Autonomous · Unrestricted Schedule",
    cues: ["crime", "danger"],
    cuesLabels: ["Industrial Espionage", "Falsified Dossiers"],
    desc: "Audit competitor filings and assemble weekly executive intelligence briefs. Rival conglomerates court you to leak proprietary blueprints in exchange for illicit wire transfers.",
    responsibilities: [
      "Draft doctored market reports claiming your firm holds an unassailable monopoly.",
      "Receive encrypted inquiries on your personal mobile to leak proprietary sensor designs.",
      "Risk: Internal IT monitors encrypted packets, and corporate buyers might be a compliance trap orchestrated by the Director."
    ],
    promotionNotes: "Direct promotion track to Chief Financial Officer (CFO).",
    dialogQuote: "The rival firm offered $15,000 in untraceable cash to leak schematics for our high-temp thermal probe. If executive compliance intercepts this, it's straight to a state prison cube.",
    dialogSpeaker: "Market Intelligence Analyst",
    dialogImage: "assets/img/job_office_elevator.png"
  },
  {
    id: "vice_director",
    branch: "office",
    branchName: "Industrial Sensor Co.",
    level: 4,
    name: "Executive Vice Director",
    salary: "$ 15,000 / week",
    hours: "Mon, Wed, Fri · 09:00 to 11:00 (2h/day!)",
    cues: ["executive"],
    cuesLabels: ["2h/Day Schedule · 3 Days/Week"],
    desc: "The pinnacle of corporate luxury. Clock in for merely two hours a day, three days a week. Private corner office with panoramic metropolitan views and unimpeded executive authority.",
    responsibilities: [
      "Ultra-reduced work schedule (only 6 total hours required per week).",
      "Full authority to hire and terminate personnel across all departmental ranks.",
      "Shortest, most direct progression path to Chief Executive Officer (CEO)."
    ],
    promotionNotes: "Direct promotion to Chief Executive Officer.",
    dialogQuote: "Two brief morning strategy briefings on Monday, Wednesday, and Friday. The rest of the week is completely mine to enjoy metropolitan life in SPRF.",
    dialogSpeaker: "Executive Vice Director",
    dialogImage: "assets/img/job_director_press.png"
  },
  {
    id: "cfo",
    branch: "office",
    branchName: "Industrial Sensor Co.",
    level: 4,
    name: "Chief Financial Officer (CFO)",
    salary: "$ 15,000 / week",
    hours: "Mon, Wed, Fri · 09:00 to 11:00 (2h/day!)",
    cues: ["executive"],
    cuesLabels: ["Requires 4x Performance for CEO"],
    desc: "Matches the Vice Director's relaxed 2-hour daily schedule, but requires 4 times more performance output to claim the top seat of Chief Executive Officer.",
    responsibilities: [
      "Approve quarterly balance sheets and capital allocation budgets for the sensor firm.",
      "Elite 6-hour weekly workload commanding a top-bracket executive salary ($15,000/wk).",
      "Must deliver quadruple net results to outmaneuver the Vice Director for the CEO chair."
    ],
    promotionNotes: "Arduous merit-based path to Chief Executive Officer (CEO).",
    dialogQuote: "Our fiscal quarter shattered revenue projections, yet the Board still demands quadruple the performance metrics before they hand me the CEO gavel over the Vice Director.",
    dialogSpeaker: "CFO · Chief Financial Officer",
    dialogImage: "assets/img/closing_day_boss.png"
  },
  {
    id: "director_ceo",
    branch: "office",
    branchName: "Industrial Sensor Co.",
    level: 5,
    name: "Chief Executive Officer (CEO)",
    salary: "$ 40,000 / week",
    hours: "No Fixed Schedule · Absolute Liberty",
    cues: ["executive", "bonus"],
    cuesLabels: ["Absolute Authority", "Live Crisis Press Minigame"],
    desc: "The summit of corporate hierarchy. Putt golf balls across office carpeting, rubber-stamp authorizations without reading (courting corporate catastrophe), and face live televised press conferences on TV Maresol.",
    responsibilities: [
      "'Sign Without Reading' Minigame: Rapidly stamp hundreds of invoices in 5 seconds or review each entry line-by-line to hunt down embezzlements.",
      "'Press Conference' Minigame: Defend the conglomerate live on TV Maresol using corporate jargon when a scandal erupts over melted industrial sensors.",
      "Staggering compensation of $40,000 per week (deposited every Friday at 17:00)."
    ],
    promotionNotes: "No higher corporate rank exists in the city. Maximum social status across SPRF.",
    dialogQuote: "Members of the press from TV Maresol: the alleged sensor melting was an isolated high-temperature surge caused by external factors currently under forensic audit!",
    dialogSpeaker: "Company CEO · Live Press Conference",
    dialogImage: "assets/img/job_director_press.png"
  },

  // --- SECTOR B: METROPOLITAN PHARMACY CHAIN ---
  {
    id: "pharm_att1",
    branch: "pharmacy",
    branchName: "Pharmacy Chain",
    level: 1,
    name: "Pharmacy Counter Clerk 1",
    salary: "$ 1,600 / week",
    hours: "Mon-Fri · Morning Shift: 07:00 to 15:00",
    cues: ["starting"],
    cuesLabels: ["Pharmacy Starting Rank"],
    desc: "Operate the drugstore register and update pricing labels across retail gondolas in compliance with municipal health authority directives.",
    responsibilities: [
      "Ring up customers in checkout lines and process register payments.",
      "Reprice retail goods across drugstore aisles following daily regulatory tariffs."
    ],
    promotionNotes: "Promotion to Senior Counter Clerk 2.",
    dialogQuote: "I need to reprice all the vitamin bottles in aisle 3 before the floor supervisor opens checkout register 2.",
    dialogSpeaker: "Pharmacy Clerk 1",
    dialogImage: "assets/img/job_pharmacy_shelf.png"
  },
  {
    id: "pharm_att2",
    branch: "pharmacy",
    branchName: "Pharmacy Chain",
    level: 2,
    name: "Senior Pharmacy Clerk 2",
    salary: "$ 1,800 / week",
    hours: "Mon-Fri · Evening Shift: 15:00 to 23:00",
    cues: ["arcade"],
    cuesLabels: ["Controlled Prescription Triage"],
    desc: "Staff the prescription counter and manage the dispensation of regulated controlled pharmaceuticals requiring prescription retention.",
    responsibilities: [
      "Verify antibiotic and controlled medication slips against regulatory medical databases.",
      "Audit dosage values and match prescriptions against certified medical registries."
    ],
    promotionNotes: "Promotion to Drugstore Supervisor.",
    dialogQuote: "This controlled prescription is missing the official registry stamp from the Regional Hospital physician. I cannot legally dispense this medication!",
    dialogSpeaker: "Senior Clerk 2",
    dialogImage: "assets/img/job_pharmacy_rx.png"
  },
  {
    id: "pharm_sup",
    branch: "pharmacy",
    branchName: "Pharmacy Chain",
    level: 3,
    name: "Drugstore Floor Supervisor",
    salary: "$ 2,500 / week",
    hours: "Tue-Sat · Opening or Closing Shifts",
    cues: ["bonus"],
    cuesLabels: ["Store Keys · Armored Transport"],
    desc: "Open and close retail store branches. Grant managerial discounts, sweep register cash into the floor vault, and schedule armored cash couriers.",
    responsibilities: [
      "Resolve escalated disputes with volatile counter patrons.",
      "Sweep cash from registers into the drop safe whenever cash ceilings are exceeded.",
      "Summon armored security vehicles when vault deposits reach collection thresholds."
    ],
    promotionNotes: "Branching pathway to Store Manager or Licensed Pharmacist.",
    dialogQuote: "The retail safe reached our $20,000 security ceiling. I've logged the armored transport dispatch for 18:00 sharp.",
    dialogSpeaker: "Store Floor Supervisor",
    dialogImage: "assets/img/job_pharmacy_shelf.png"
  },
  {
    id: "pharmacist",
    branch: "pharmacy",
    branchName: "Pharmacy Chain",
    level: 4,
    name: "Licensed Pharmacist",
    salary: "$ 5,000 / wk + Generous Profit Sharing",
    hours: "Mon-Fri · Morning Shift · Autonomous Schedule",
    cues: ["diploma", "bonus"],
    cuesLabels: ["Pharmacy Degree Mandatory", "Quarterly Profit Sharing"],
    desc: "Indispensable licensed clinical role. Administer injections, perform sterile ear piercings (using retail drugstore studs), check blood pressure, monitor glucose, and process diagnostic test kits.",
    responsibilities: [
      "Mandatory requirement: University Degree in Pharmacy.",
      "Perform clinical procedures in the private consultation suite (injections, tests, piercing).",
      "Authorized to perform any clerk or supervisory duty on the store floor."
    ],
    promotionNotes: "Can merge with Store Manager into the elite 'Pharmacist-Manager' role (+50% permanent salary bonus!).",
    dialogQuote: "The injectable antibiotic dosage is prepped in clinic room 2. I've cross-referenced the prescription with the prescribing physician.",
    dialogSpeaker: "Dr. Sarah · Licensed Pharmacist",
    dialogImage: "assets/img/job_pharmacy_rx.png"
  },
  {
    id: "pharm_mgr",
    branch: "pharmacy",
    branchName: "Pharmacy Chain",
    level: 4,
    name: "Pharmacy Store Manager",
    salary: "$ 5,000 / wk + Generous Profit Sharing",
    hours: "Flexible Hours · Retail Operations Oversight",
    cues: ["bonus"],
    cuesLabels: ["Hire/Fire Authority · Profit Bonus"],
    desc: "Oversees all daily operations for the retail pharmacy branch. Schedules shifts, hires and dismisses floor staff, and takes performance penalties if customer lines stall.",
    responsibilities: [
      "Build balanced staff schedules for attendants and clerks (max 5 days/wk per municipal labor code).",
      "Maintain high customer satisfaction scores and minimize register queue delays.",
      "Can be recruited directly into this position based on prior executive reputation."
    ],
    promotionNotes: "Promotion to Regional Pharmacy Director.",
    dialogQuote: "Line 1 is wrapping around the cosmetics aisle! If customer satisfaction scores drop, our quarterly profit-sharing bonus takes a massive hit on Friday.",
    dialogSpeaker: "Store General Manager",
    dialogImage: "assets/img/job_hire_dialog.png"
  },
  {
    id: "pharm_mgr_special",
    branch: "pharmacy",
    branchName: "Pharmacy Chain",
    level: 4,
    name: "Pharmacist-Manager (Hybrid Role)",
    salary: "$ 7,500 / wk + Profit Sharing (+50% Lifetime!)",
    hours: "Autonomous Schedule · Total Store Sovereignty",
    cues: ["diploma", "bonus"],
    cuesLabels: ["+50% Permanent Lifetime Bonus", "Clinical & Executive Dual Role"],
    desc: "The apex commercial hybrid approved in game canon. A store manager who earns a pharmacy degree (or a pharmacist promoted to manager) secures a permanent +50% base salary bonus for life!",
    responsibilities: [
      "Cover for pharmacists during absences while retaining executive command of the store.",
      "Permanent 50% salary boost remains intact even if you move to a rival pharmacy chain.",
      "Commands hiring, firing, payroll audits, and regulatory clinical compliance."
    ],
    promotionNotes: "Direct promotion track to Regional Pharmacy Director.",
    dialogQuote: "Assuming store general management alongside official clinical license registration locked in $7,500 weekly base pay plus network-wide profit sharing!",
    dialogSpeaker: "Hybrid Pharmacist-Manager",
    dialogImage: "assets/img/job_pharmacy_rx.png"
  },
  {
    id: "pharm_regional",
    branch: "pharmacy",
    branchName: "Pharmacy Chain",
    level: 5,
    name: "Regional Pharmacy Director",
    salary: "$ 9,000 / week",
    hours: "Mon-Fri · 08:00 to 17:00 (Field Oversight)",
    cues: ["executive"],
    cuesLabels: ["Technical Audits", "Fires Store Managers"],
    desc: "Oversees every pharmacy outlet in SPRF. Conducts unannounced compliance inspections (clean lab coats, adequate staffing, cold-chain storage) and prioritizes branches with customer complaints.",
    responsibilities: [
      "Audit sanitary compliance, prescription retention archives, and cold-chain drug storage.",
      "Unilateral power to fire retail store managers and supervisors for operational breaches.",
      "Reserved exclusively for candidates promoted from within internal store management."
    ],
    promotionNotes: "The highest executive pinnacle in the metropolitan pharmaceutical sector.",
    dialogQuote: "The downtown branch is missing its licensed pharmacist during peak commuter hours, and staff are wearing non-standard coats. Formal notice served, and store management bonuses are revoked!",
    dialogSpeaker: "Regional Operations Director",
    dialogImage: "assets/img/downtown.png"
  },

  // --- SECTOR C: RESTAURANTS & DINING ---
  {
    id: "rest_hall",
    branch: "restaurant",
    branchName: "Restaurants & Dining",
    level: 1,
    name: "Dining Room Busser / Attendant",
    salary: "$ 1,500 / week",
    hours: "Wed-Sun · 09:00 to 15:30 (Lunch Shift)",
    cues: ["starting"],
    cuesLabels: ["Dining Room Maintenance"],
    desc: "Keep tables sanitized, thermal coffee dispensers filled, and napkin holders stocked. If napkins run out, disgruntled guests lodge complaints that trigger double penalties!",
    responsibilities: [
      "Clear and sanitize tables immediately after diners depart.",
      "Ensure complimentary coffee urns and paper napkin dispensers are never depleted.",
      "Hardcore Difficulty: Making an error deducts double the points that the task would award!"
    ],
    promotionNotes: "Promotion to Buffet Waiter / Cashier.",
    dialogQuote: "A new party is sitting in dining section 2! If their table is out of napkins, the head floor manager is going to dock my daily tip bonus!",
    dialogSpeaker: "Dining Room Busser",
    dialogImage: "assets/img/job_restaurant_buffet.png"
  },
  {
    id: "rest_kitchen_helper",
    branch: "restaurant",
    branchName: "Restaurants & Dining",
    level: 1,
    name: "Kitchen Assistant / Prep Cook",
    salary: "$ 1,500 / week",
    hours: "Wed-Sun · 09:00 to 15:30",
    cues: ["starting"],
    cuesLabels: ["Food Prep & Dishwashing"],
    desc: "Peel potatoes, chop carrots, dice scallions, fill heavy stockpots with water, and wash greasy dishware carrying organic leftovers.",
    responsibilities: [
      "Stock prep stations for line cooks and executive chefs.",
      "Immediately dispose of expired ingredients past shelf life.",
      "Scrub dirty pans and plates featuring dynamic procedural stains."
    ],
    promotionNotes: "Can be promoted either into Line Cook (culinary track) or Waiter/Cashier (front-of-house track).",
    dialogQuote: "Chef ordered 20 pounds of peeled potatoes ready before the noon lunch rush. I can't let the prep line fall behind!",
    dialogSpeaker: "Kitchen Prep Assistant",
    dialogImage: "assets/img/job_restaurant_buffet.png"
  },
  {
    id: "rest_waiter",
    branch: "restaurant",
    branchName: "Restaurants & Dining",
    level: 2,
    name: "Buffet Waiter / Cashier",
    salary: "$ 1,700 / week",
    hours: "Wed-Sun · Lunch or Dinner Shifts",
    cues: ["arcade"],
    cuesLabels: ["Buffet & À La Carte Service"],
    desc: "In Buffet venues, replenish heated steam tables and ring up beverage/dessert tabs. In fine-dining À La Carte venues, serve plated courses table-side and retrieve vintage bottles from chilled cellars.",
    responsibilities: [
      "Buffet: Keep stainless-steel food wells replenished and process register payments.",
      "À La Carte: Respond to table call bells, deliver written tickets to the kitchen expo window, and run handheld POS terminals.",
      "Fine Dining: Uncork selected wines from the temperature-controlled cellar and pour proper glassware."
    ],
    promotionNotes: "Promotion to Restaurant Floor Manager (Note: waiters never cross over to culinary line cooking!).",
    dialogQuote: "Table 4 ordered a reserve red from the cellar and the chef's pan-seared salmon. Fetching the bottle at the exact serving temperature!",
    dialogSpeaker: "À La Carte Waiter",
    dialogImage: "assets/img/job_restaurant_fancy.png"
  },
  {
    id: "rest_cook",
    branch: "restaurant",
    branchName: "Restaurants & Dining",
    level: 2,
    name: "Line Cook",
    salary: "$ 2,400 / week",
    hours: "Wed-Sun · Kitchen Service Shift",
    cues: ["arcade"],
    cuesLabels: ["Sides, Pastas & Sauces"],
    desc: "Prepare carbohydrates and appetizers: seasoned rice, handmade pastas, risottos, and delicate sauces following ticket pacing dictated by front-of-house orders.",
    responsibilities: [
      "Cook all side dishes with precise cooking timers.",
      "Coordinate workstation prep with the Kitchen Assistant.",
      "Does NOT sear premium proteins or plate final courses (exclusive domain of the Executive Chef)."
    ],
    promotionNotes: "With a Culinary Arts Degree, promoted directly to Executive Chef.",
    dialogQuote: "Truffle risotto and buttered purée are hot in the pass window, Chef! Waiting on meat cuts to finish plating.",
    dialogSpeaker: "Line Cook",
    dialogImage: "assets/img/job_restaurant_buffet.png"
  },
  {
    id: "rest_chef",
    branch: "restaurant",
    branchName: "Restaurants & Dining",
    level: 3,
    name: "Executive Chef",
    salary: "$ 12,600 / week (Double Manager Pay + 50% Bonus!)",
    hours: "Wed-Sun · Gastronomic Dinner Service",
    cues: ["diploma", "bonus"],
    cuesLabels: ["Culinary Degree Required", "Triple Salary Multiplier"],
    desc: "The undisputed gastronomic ruler of the kitchen. Sear steaks, pan-roast seafood, and craft artisanal plate presentations. Earns double a general manager's salary plus a 50% permanent bonus!",
    responsibilities: [
      "Mandatory requirement: University Degree in Culinary Arts.",
      "Execute precise temperature finishes for prime steaks, poultry, and seafood.",
      "Oversee immaculate plate presentation before handing dishes to waitstaff.",
      "Commands an extraordinary weekly compensation of $12,600."
    ],
    promotionNotes: "Can buy out the business to become Restaurant Franchise Owner.",
    dialogQuote: "Prime tenderloin finished with red wine reduction and fresh herb emulsion. Waiter, table 2 immediately while the plate is piping hot!",
    dialogSpeaker: "Executive Chef",
    dialogImage: "assets/img/job_restaurant_fancy.png"
  },
  {
    id: "rest_franchise_owner",
    branch: "restaurant",
    branchName: "Restaurants & Dining",
    level: 4,
    name: "Restaurant Franchise Owner",
    salary: "$ 25,000+ / week (Net Profit Yield)",
    hours: "Complete Entrepreneurial Autonomy",
    cues: ["executive", "bonus"],
    cuesLabels: ["Franchise Proprietor", "Direct Net Profit Deposits"],
    desc: "Own multiple dining establishments across SPRF. Settle supplier accounts, municipal business taxes, and staff payroll; all residual net profits transfer directly into your personal bank account!",
    responsibilities: [
      "Audit branch financials, seasonal tasting menus, and hospitality standards.",
      "Exclusive authority to recruit and dismiss executive head chefs.",
      "Every dollar of net operational surplus converts into personal player wealth."
    ],
    promotionNotes: "Independent enterprise owner and real-estate investor in the city's living economy.",
    dialogQuote: "All supplier invoices and payroll settled this Friday. The net surplus of $32,000 has already cleared directly into my checking account!",
    dialogSpeaker: "Franchise Proprietor",
    dialogImage: "assets/img/condo_alphaville.png"
  },

  // --- SECTOR D: FREELANCE & CITY SERVICES ---
  {
    id: "cleaning_worker",
    branch: "freelance",
    branchName: "Freelance & City Services",
    level: 1,
    name: "Commercial Cleaning Contractor",
    salary: "$ 1,400 to $ 1,500 / wk + Bonuses",
    hours: "24/7 Any Time · Total Schedule Freedom",
    cues: ["bonus"],
    cuesLabels: ["+$200 Perfect Streak Bonus", "5-Star Rating System"],
    desc: "Take on commercial sanitization contracts (offices, boutiques, pharmacies, and restaurants). Mop floors, dust surfaces, and revive indoor plants. Flawless work unlocks the legendary Purple Star with Gold Trim!",
    responsibilities: [
      "Squeegee wet floors: if moisture lingers too long, clients complain and dock $20 from payment!",
      "Water wilted indoor plants (they turn vibrant green and blossom under your care).",
      "Choose between two agencies: Spotless Ltd. (higher pay, rigorous inspections) or Clean Family Services (relaxed, forgiving).",
      "Earn a $200 cash bonus for every 5 consecutive flawless work days.",
      "Reaching 5 stars plus the Purple Star unlocks high-paying contracts to clean luxury mansions in gated suburbs!"
    ],
    promotionNotes: "Future expansion into Hospital Sanitization Specialist (+40% base wage boost).",
    dialogQuote: "Floor squeegeed dry and all lobby palms watered and shining green. Another flawless shift toward securing that 5th star!",
    dialogSpeaker: "Professional Cleaner",
    dialogImage: "assets/img/job_cleaning_plants.png"
  },
  {
    id: "courier_bike",
    branch: "freelance",
    branchName: "Freelance & City Services",
    level: 1,
    name: "Bicycle Courier (Delivery App)",
    salary: "Paid per delivery (Instant cashout)",
    hours: "100% Flexible · Turn on app anytime",
    cues: ["starting"],
    cuesLabels: ["Instant App Payouts", "No Background Checks"],
    desc: "Pedal across traffic corridors and bike paths delivering restaurant takeout, urgent pharmacy medicine, and sealed corporate courier satchels between private firms and SPRF City Hall.",
    responsibilities: [
      "Navigate dense city traffic smoothly without striking pedestrians.",
      "Continue working without interruption even with [Suspect] or [Fugitive] judicial statuses!",
      "No boss, no production quotas: earnings hit your wallet the instant delivery confirmation clears."
    ],
    promotionNotes: "Purchase high-performance road bikes at Spoke Cycles to shave travel times and multiply deliveries.",
    dialogQuote: "Another express prescription delivery dropped off from the downtown pharmacy to the gated suburban estate. Fare deposited instantly in my app balance!",
    dialogSpeaker: "Bike Courier",
    dialogImage: "assets/img/player_home.png"
  },
  {
    id: "ride_driver",
    branch: "freelance",
    branchName: "Freelance & City Services",
    level: 2,
    name: "Rideshare Driver (Personal Car)",
    salary: "Paid per completed trip (Fares + Tips)",
    hours: "100% Flexible · Nights & Weekends",
    cues: ["arcade", "danger"],
    cuesLabels: ["Rare Encounters & Fare Dodgers", "Judicial App Lockout"],
    desc: "Drive your personal vehicle transporting citizens across SPRF. Navigate dozens of emergent slice-of-life events, from smooth-talking fare dodgers to enigmatic passengers murmuring about nocturnal anomalies across the sky!",
    responsibilities: [
      "Transport passengers safely to requested destinations across town.",
      "Canonical emergent encounters: The passenger asking for your digital handle promising to pay tomorrow (some vanish forever!); an anxious TV Maresol anchor running late for a live broadcast; 5 passengers squeezing into a 4-seater (risking police checkpoints!).",
      "If your judicial status is flagged as [Wanted], rideshare dispatch freezes your account immediately!"
    ],
    promotionNotes: "Upgrade to luxury sedans at Motorama or Eastside Auto to unlock high-bracket clientele and airport transfers.",
    dialogQuote: "Hey driver, give me your digital transfer handle and I'll send the fare the moment I get upstairs, I swear! (Spoiler: they might vanish into the night and never pay).",
    dialogSpeaker: "Suspicious Passenger",
    dialogImage: "assets/img/crash_scene.png"
  }
];

// --- INTERACTIVE CAREER TREE RENDERING ---
function renderCareerTree(filter = 'all', cueFilter = 'all') {
  const container = document.getElementById('treeHierarchyContainer');
  if (!container) return;

  container.innerHTML = '';

  // Filter positions
  const filtered = CAREERS_DATABASE.filter(item => {
    const matchBranch = (filter === 'all' || item.branch === filter);
    const matchCue = (cueFilter === 'all' || item.cues.includes(cueFilter));
    return matchBranch && matchCue;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="callout-banner" style="text-align: center;">
        <h4>No positions found for this filter combination.</h4>
        <p>Try switching sectors or clicking "All Sectors".</p>
      </div>
    `;
    return;
  }

  // Group by levels (1 to 5)
  const levels = [1, 2, 3, 4, 5];
  levels.forEach(lvl => {
    const inLevel = filtered.filter(i => i.level === lvl);
    if (inLevel.length === 0) return;

    const row = document.createElement('div');
    row.className = 'tree-level-row';

    const header = document.createElement('div');
    header.className = 'level-header';
    header.innerHTML = `
      <span class="level-badge">Level ${lvl}</span>
      <span class="level-title">${getLevelTitle(lvl)}</span>
    `;
    row.appendChild(header);

    const nodesGrid = document.createElement('div');
    nodesGrid.className = 'level-nodes';

    inLevel.forEach(job => {
      const node = document.createElement('div');
      node.className = 'tree-node';
      node.setAttribute('data-id', job.id);
      node.setAttribute('data-cue', job.cues.join(' '));

      // Visual cues badges
      let cuePillsHtml = '';
      if (job.cues.includes('bonus')) {
        cuePillsHtml += `<span class="cue-pill pill-bonus">⭐ SPECIAL BONUS</span>`;
      }
      if (job.cues.includes('crime')) {
        cuePillsHtml += `<span class="cue-pill pill-crime">⚖️ ILLICIT SCHEME</span>`;
      }
      if (job.cues.includes('danger')) {
        cuePillsHtml += `<span class="cue-pill pill-danger">🚨 POLICE RAID RISK</span>`;
      }
      if (job.cues.includes('diploma')) {
        cuePillsHtml += `<span class="cue-pill pill-diploma">🎓 DEGREE REQUIRED</span>`;
      }
      if (job.cues.includes('executive')) {
        cuePillsHtml += `<span class="cue-pill pill-executive">👔 EXECUTIVE SCHEDULE</span>`;
      }

      node.innerHTML = `
        <div class="node-header">
          <div>
            <div class="node-branch-tag">${job.branchName}</div>
            <div class="node-role-name">${job.name}</div>
          </div>
        </div>
        <div class="node-cues-row">${cuePillsHtml}</div>
        <p class="node-desc">${job.desc.substring(0, 110)}...</p>
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

      nodesGrid.appendChild(node);
    });

    row.appendChild(nodesGrid);
    container.appendChild(row);
  });
}

function getLevelTitle(lvl) {
  switch(lvl) {
    case 1: return "Entry-Level · Operational Foundations";
    case 2: return "Frontline Technical & Sales";
    case 3: return "Supervision, Field & Specialists";
    case 4: return "Senior Management & Executives";
    case 5: return "General Directorate & Chain Owners";
    default: return "";
  }
}

// Display career details in the lower X-ray panel
function showCareerDetails(job) {
  const panel = document.getElementById('careerDetailPanel');
  if (!panel) return;

  const respItems = job.responsibilities.map(r => `<li>${r}</li>`).join('');

  panel.innerHTML = `
    <div class="panel-header-badge">
      <div>
        <div class="eyebrow">${job.branchName} · Level ${job.level}</div>
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
        <span class="panel-stat-label">Entry Requirement</span>
        <span class="panel-stat-val" style="font-size: 15px;">${job.cues.includes('diploma') ? 'University Degree Required' : 'Performance Promotion'}</span>
      </div>
    </div>

    <div class="block">
      <h4 style="color: #fff; font-size: 18px; margin-bottom: 8px;">📋 Operational Routine & Canonical Responsibilities</h4>
      <ul style="padding-left: 20px; line-height: 1.6; color: #cbd5e1; display: grid; gap: 6px;">
        ${respItems}
      </ul>
    </div>

    <div class="block">
      <h4 style="color: #fff; font-size: 18px; margin-bottom: 8px;">🚀 Career Progression & Opportunities</h4>
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

  // Select first canonical job
  if (CAREERS_DATABASE.length > 0) {
    showCareerDetails(CAREERS_DATABASE[0]);
  }
});
