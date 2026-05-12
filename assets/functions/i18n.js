const TRANSLATIONS = {
  en: {
    // Nav
    nav_about: "About",
    nav_solution: "Solution",
    nav_features: "Features",
    nav_how: "How It Works",
    nav_usecases: "Use Cases",
    nav_contact: "Contact Us",

    // Hero
    hero_eyebrow: "Complete FMCG Distribution Ecosystem",
    hero_h1a: "Fast.",
    hero_h1b: "Smart.",
    hero_h1c: "Reliable",
    hero_subtitle: "FMCG Distribution Hub for Modern Distributors.",
    hero_desc:
      "FDH is a complete ecosystem for distributors and sales teams to manage their entire business — from field sales to accounting — under one roof.",
    hero_cta1: "📞 Contact Us",
    hero_cta2: "See How It Works →",
    stat1_num: "360°",
    stat1_label: "Business Visibility",
    stat2_num: "2-in-1",
    stat2_label: "SmartMGTS + TallyPrime",
    stat3_num: "Real-Time",
    stat3_label: "Sync & Reporting",
    stat4_num: "0 Errors",
    stat4_label: "Automated Accounting",

    // What
    what_tag: "What is FDH",
    what_title: "One Digital Hub for Your Entire Distribution Business",
    what_p1:
      "FDH (FMCG Distribution Hub) is a centralized digital platform designed for FMCG companies to streamline their entire distribution process — from order management to inventory tracking and financial accounting.",
    what_p2:
      "It connects your field sales, warehouse, accounts, and management into <strong>one real-time system</strong> — eliminating silos and delivering complete operational clarity.",
    what_cta: "Explore the Platform →",
    what_box1: "Field Sales",
    what_box2: "Warehouse",
    what_box3: "Accounts",
    what_box4: "Management",
    what_box4_sub: "Full Control",
    what_sync: "All departments synced in real-time through FDH",

    // Problems
    prob_tag: "The Problem",
    prob_title: "Challenges in Traditional Distribution",
    p1_title: "Manual Stock Tracking Errors",
    p1_desc:
      "Paper-based inventory leads to mismatches, ghost stock, and costly reconciliation.",
    p2_title: "Delayed Sales Reports",
    p2_desc:
      "Reports generated hours later make it impossible to respond to market changes in time.",
    p3_title: "Disconnected Accounting Systems",
    p3_desc:
      "Separate tools create data gaps, double entries, and audit headaches.",
    p4_title: "Inefficient Field Sales Monitoring",
    p4_desc:
      "No visibility into where your reps are or which routes are productive.",
    p5_title: "Payment & Collection Confusion",
    p5_desc:
      "Outstanding dues and untracked receivables drain cash flow silently.",
    p6_title: "Zero Real-Time Visibility",
    p6_desc:
      "Management relies on end-of-day summaries instead of live dashboards.",
    prob_closing:
      'FDH solves all these challenges with <span class="text-amber-500">automation and real-time visibility</span>.',

    // Solution
    sol_tag: "Solution Overview",
    sol_title: "One Platform. Complete Control.",
    sol_desc:
      "FDH integrates with SmartMGTS and TallyPrime to give you full control over your business operations.",
    smart_badge: "Operations",
    smart_desc:
      "Complete field operations management for sales teams and distributors.",
    smart_f1: "Sales & Order Management",
    smart_f2: "Inventory & Stock Control",
    smart_f3: "Customer & Dealer Management",
    smart_f4: "Real-Time Dashboard & Reports",
    smart_f5: "Payroll & Employee Tracking",
    tally_badge: "Accounting",
    tally_desc:
      "Seamless financial accounting integration for complete business control.",
    tally_f1: "Ledger Management",
    tally_f2: "Financial Accounting",
    tally_f3: "Transactions & Vouchers",
    tally_f4: "Payment Tracking",
    tally_f5: "GST/VAT-Ready Reporting",
    sol_highlight: "Your operations and accounting — perfectly synced. ⚡",

    // Features
    feat_tag: "Key Features",
    feat_title: "Powerful Features for FMCG Growth",
    f1_title: "Smart Inventory Management",
    f1_desc:
      "Track stock levels in real-time. Automated low-stock alerts eliminate manual counting errors.",
    f2_title: "Real-Time Sales Analytics",
    f2_desc:
      "Live dashboards showing order volumes, rep performance, and territory data instantly.",
    f3_title: "Automated Payment Tracking",
    f3_desc:
      "Every collection and outstanding balance tracked automatically with smart alerts.",
    f4_title: "Field Force Monitoring",
    f4_desc:
      "Live GPS tracking, order placement, and productivity metrics for your entire field team.",
    f5_title: "Integrated Accounting",
    f5_desc:
      "TallyPrime sync means every transaction and ledger entry is recorded without re-entry.",
    f6_title: "Seamless System Integration",
    f6_desc:
      "SmartMGTS and TallyPrime work as one unified platform — no gaps, no duplication.",

    // How
    how_tag: "How It Works",
    how_title: "From Order to Insight in Minutes",
    s1_title: "Sales Team Places Orders via SmartMGTS",
    s1_desc:
      "Field reps capture orders on mobile — customer details, SKUs, quantities — directly in the system.",
    s2_title: "Stock Updates Instantly",
    s2_desc:
      "Inventory levels adjust in real-time as orders are confirmed. Warehouse always reflects live stock.",
    s3_title: "Transactions Sync with TallyPrime",
    s3_desc:
      "Every sale, payment, and stock movement automatically posts to TallyPrime — no re-entry required.",
    s4_title: "Payments & Reports Generated Automatically",
    s4_desc:
      "Payment tracking, collection reports, and financial statements are produced without manual work.",
    s5_title: "Management Gets Real-Time Insights",
    s5_desc:
      "Leaders access live dashboards showing sales, inventory, cash flow, and team performance — 24/7.",

    // Benefits
    ben_tag: "Why FDH",
    ben_title: "Why Choose FDH?",
    b1_title: "Increase Sales Efficiency",
    b1_desc: "Streamlined workflows let your team close more deals, faster.",
    b2_title: "Reduce Manual Errors",
    b2_desc:
      "Automation replaces error-prone data entry across inventory and accounting.",
    b3_title: "Faster Decision Making",
    b3_desc:
      "Real-time dashboards give leadership the data to act immediately.",
    b4_title: "Better Cash Flow Control",
    b4_desc: "Track every payment, overdue, and collection in real-time.",
    b5_title: "100% Visibility of Operations",
    b5_desc:
      "From field reps to ledger balance — complete transparency at every level.",
    ben_big: "100%",
    ben_big_sub: "Operational Visibility",
    metric1: "Sales Efficiency",
    metric2: "Error Reduction",
    metric3: "Reporting Speed",

    // Use Cases
    uc_tag: "Use Cases",
    uc_title: "Who can use FDH?",
    uc_desc:
      "Built for every organization that moves products through distribution channels.",
    uc1: "Distributors",
    uc2: "Wholesale Businesses",
    uc3: "Manufacturing Companies",
    uc4: "Sales-Driven Organizations",

    // Integration
    int_tag: "Smart Integration",
    int_title: "Smart Integration That Drives Growth",
    int_p:
      "FDH connects your SmartMGTS platform with TallyPrime, ensuring that every sale, stock movement, and transaction is automatically recorded and synchronized.",
    int_nodupe: "No duplication. No errors. Just smooth operations.",
    int_smart_sub: "Operations & Sales",
    int_hub_sub: "The Hub",
    int_tally_sub: "Accounting & Finance",

    // CTA
    cta_title: "Ready to Transform Your Distribution Business?",
    // cta_desc:
    //   "Join FMCG distributors who have unified their operations with FDH. Get in touch today and see the difference.",
    cta_btn1: "📞 Contact Us Today",
    cta_btn2: "WhatsApp Support",

    // Footer
    foot_desc:
      "A centralized digital platform for FMCG companies to streamline their entire distribution process — powered by SmartMGTS and TallyPrime.",
    foot_platform: "Platform",
    foot_integrations: "Integrations",
    foot_contact: "Contact",
    foot_about: "About FDH",
    foot_features: "Features",
    foot_how: "How It Works",
    foot_benefits: "Benefits",
    foot_smart: "About SmartMGTS",
    foot_tally: "TallyPrime Integration",
    foot_sync: "Sync Overview",
    foot_copy: "© 2025 FDH – FMCG Distribution Hub. All rights reserved.",
    foot_power: "Powered by SmartMGTS & TallyPrime",
    wa_chat: "Chat with us",
  },

  bn: {
    // Nav
    nav_about: "পরিচিতি",
    nav_solution: "সমাধান",
    nav_features: "বৈশিষ্ট্য",
    nav_how: "কীভাবে কাজ করে",
    nav_usecases: "ব্যবহারের ক্ষেত্র",
    nav_contact: "যোগাযোগ করুন",

    // Hero
    hero_eyebrow: "সম্পূর্ণ FMCG বিতরণ ইকোসিস্টেম",
    hero_h1a: "দ্রুত।",
    hero_h1b: "স্মার্ট।",
    hero_h1c: "নির্ভরযোগ্য",
    hero_subtitle: "আধুনিক পরিবেশকদের জন্য FMCG ডিস্ট্রিবিউশন হাব।",
    hero_desc:
      "FDH হলো পরিবেশক ও বিক্রয় দলের জন্য একটি সম্পূর্ণ ইকোসিস্টেম — মাঠ বিক্রয় থেকে হিসাব-নিকাশ পর্যন্ত সবকিছু এক ছাদের নিচে।",
    hero_cta1: "📞 যোগাযোগ করুন",
    hero_cta2: "কীভাবে কাজ করে দেখুন →",
    stat1_num: "৩৬০°",
    stat1_label: "ব্যবসার সম্পূর্ণ দৃশ্যমানতা",
    stat2_num: "২-ইন-১",
    stat2_label: "SmartMGTS + TallyPrime",
    stat3_num: "রিয়েল-টাইম",
    stat3_label: "সিঙ্ক ও রিপোর্টিং",
    stat4_num: "০ ত্রুটি",
    stat4_label: "স্বয়ংক্রিয় হিসাব",

    // What
    what_tag: "FDH কী",
    what_title: "আপনার সম্পূর্ণ বিতরণ ব্যবসার একটি ডিজিটাল হাব",
    what_p1:
      "FDH (FMCG ডিস্ট্রিবিউশন হাব) হলো FMCG কোম্পানিগুলোর জন্য একটি কেন্দ্রীভূত ডিজিটাল প্ল্যাটফর্ম — অর্ডার ব্যবস্থাপনা থেকে ইনভেন্টরি ট্র্যাকিং এবং আর্থিক হিসাব পর্যন্ত সব কার্যক্রম সহজ করে।",
    what_p2:
      "এটি আপনার মাঠ বিক্রয়, গুদাম, হিসাব ও ব্যবস্থাপনাকে <strong>একটি রিয়েল-টাইম সিস্টেমে</strong> সংযুক্ত করে — বিভাজন দূর করে সম্পূর্ণ কার্যক্রম স্বচ্ছতা নিশ্চিত করে।",
    what_cta: "প্ল্যাটফর্ম অন্বেষণ করুন →",
    what_box1: "মাঠ বিক্রয়",
    what_box2: "গুদামঘর",
    what_box3: "হিসাব",
    what_box4: "ব্যবস্থাপনা",
    what_box4_sub: "সম্পূর্ণ নিয়ন্ত্রণ",
    what_sync: "সমস্ত বিভাগ FDH-এর মাধ্যমে রিয়েল-টাইমে সিঙ্ক",

    // Problems
    prob_tag: "সমস্যা",
    prob_title: "ঐতিহ্যবাহী বিতরণে চ্যালেঞ্জ",
    p1_title: "ম্যানুয়াল স্টক ট্র্যাকিং ত্রুটি",
    p1_desc:
      "কাগজ-ভিত্তিক ইনভেন্টরি অমিল, ভুতুড়ে স্টক ও ব্যয়বহুল মিলানো সমস্যা তৈরি করে।",
    p2_title: "বিলম্বিত বিক্রয় রিপোর্ট",
    p2_desc:
      "ঘণ্টা পরে তৈরি রিপোর্ট বাজার পরিবর্তনে সময়মতো সাড়া দেওয়া অসম্ভব করে তোলে।",
    p3_title: "বিচ্ছিন্ন হিসাব ব্যবস্থা",
    p3_desc: "আলাদা টুল ডেটা ফাঁক, দ্বৈত এন্ট্রি ও অডিট সমস্যা তৈরি করে।",
    p4_title: "অদক্ষ মাঠ বিক্রয় পর্যবেক্ষণ",
    p4_desc:
      "আপনার প্রতিনিধিরা কোথায় আছেন বা কোন রুট কার্যকর তা দেখার সুযোগ নেই।",
    p5_title: "পেমেন্ট ও সংগ্রহ বিভ্রান্তি",
    p5_desc: "বকেয়া দেনা ও অট্র্যাকড পাওনা নীরবে নগদ প্রবাহ হ্রাস করে।",
    p6_title: "শূন্য রিয়েল-টাইম দৃশ্যমানতা",
    p6_desc:
      "ব্যবস্থাপনা লাইভ ড্যাশবোর্ডের পরিবর্তে দিনশেষের সারাংশের উপর নির্ভর করে।",
    prob_closing:
      'FDH এই সমস্ত চ্যালেঞ্জ সমাধান করে <span class="text-amber-500">অটোমেশন ও রিয়েল-টাইম দৃশ্যমানতার</span> মাধ্যমে।',

    // Solution
    sol_tag: "সমাধান সংক্ষেপ",
    sol_title: "এক প্ল্যাটফর্ম। সম্পূর্ণ নিয়ন্ত্রণ।",
    sol_desc:
      "FDH আপনার ব্যবসার সম্পূর্ণ নিয়ন্ত্রণ দিতে SmartMGTS এবং TallyPrime-এর সাথে সংযুক্ত।",
    smart_badge: "অপারেশন",
    smart_desc:
      "বিক্রয় দল ও পরিবেশকদের জন্য সম্পূর্ণ মাঠ অপারেশন ব্যবস্থাপনা।",
    smart_f1: "বিক্রয় ও অর্ডার ব্যবস্থাপনা",
    smart_f2: "ইনভেন্টরি ও স্টক নিয়ন্ত্রণ",
    smart_f3: "গ্রাহক ও ডিলার ব্যবস্থাপনা",
    smart_f4: "রিয়েল-টাইম ড্যাশবোর্ড ও রিপোর্ট",
    smart_f5: "পেরোল ও কর্মী ট্র্যাকিং",
    tally_badge: "হিসাব",
    tally_desc:
      "সম্পূর্ণ ব্যবসায়িক নিয়ন্ত্রণের জন্য নিরবচ্ছিন্ন আর্থিক হিসাব ইন্টিগ্রেশন।",
    tally_f1: "লেজার ব্যবস্থাপনা",
    tally_f2: "আর্থিক হিসাব",
    tally_f3: "লেনদেন ও ভাউচার",
    tally_f4: "পেমেন্ট ট্র্যাকিং",
    tally_f5: "GST/VAT-প্রস্তুত রিপোর্টিং",
    sol_highlight: "আপনার অপারেশন ও হিসাব — নিখুঁতভাবে সিঙ্ক। ⚡",

    // Features
    feat_tag: "মূল বৈশিষ্ট্য",
    feat_title: "FMCG প্রবৃদ্ধির জন্য শক্তিশালী বৈশিষ্ট্য",
    f1_title: "স্মার্ট ইনভেন্টরি ব্যবস্থাপনা",
    f1_desc:
      "রিয়েল-টাইমে স্টক স্তর ট্র্যাক করুন। স্বয়ংক্রিয় কম-স্টক সতর্কতা ম্যানুয়াল গণনা ত্রুটি দূর করে।",
    f2_title: "রিয়েল-টাইম বিক্রয় বিশ্লেষণ",
    f2_desc:
      "অর্ডার ভলিউম, প্রতিনিধি পারফরম্যান্স এবং এলাকা ডেটা তাৎক্ষণিকভাবে দেখানো লাইভ ড্যাশবোর্ড।",
    f3_title: "স্বয়ংক্রিয় পেমেন্ট ট্র্যাকিং",
    f3_desc:
      "প্রতিটি সংগ্রহ ও বকেয়া ব্যালেন্স স্বয়ংক্রিয়ভাবে ট্র্যাক হয় স্মার্ট সতর্কতাসহ।",
    f4_title: "মাঠ বাহিনী পর্যবেক্ষণ",
    f4_desc:
      "লাইভ GPS ট্র্যাকিং, অর্ডার স্থাপন এবং পুরো মাঠ দলের উৎপাদনশীলতা মেট্রিক্স।",
    f5_title: "ইন্টিগ্রেটেড হিসাব",
    f5_desc:
      "TallyPrime সিঙ্ক মানে প্রতিটি লেনদেন ও লেজার এন্ট্রি পুনরায় এন্ট্রি ছাড়াই রেকর্ড হয়।",
    f6_title: "নিরবচ্ছিন্ন সিস্টেম ইন্টিগ্রেশন",
    f6_desc:
      "SmartMGTS এবং TallyPrime একটি একক প্ল্যাটফর্ম হিসেবে কাজ করে — কোনো ফাঁক বা নকল নেই।",

    // How
    how_tag: "কীভাবে কাজ করে",
    how_title: "অর্ডার থেকে অন্তর্দৃষ্টি মিনিটের মধ্যে",
    s1_title: "বিক্রয় দল SmartMGTS-এ অর্ডার দেয়",
    s1_desc:
      "মাঠ প্রতিনিধিরা মোবাইলে অর্ডার ক্যাপচার করেন — গ্রাহকের বিবরণ, SKU, পরিমাণ — সরাসরি সিস্টেমে।",
    s2_title: "স্টক তাৎক্ষণিকভাবে আপডেট হয়",
    s2_desc:
      "অর্ডার নিশ্চিত হওয়ার সাথে সাথে ইনভেন্টরি স্তর রিয়েল-টাইমে সামঞ্জস্য পায়।",
    s3_title: "লেনদেন TallyPrime-এ সিঙ্ক হয়",
    s3_desc:
      "প্রতিটি বিক্রয়, পেমেন্ট ও স্টক আন্দোলন স্বয়ংক্রিয়ভাবে TallyPrime-এ পোস্ট হয় — পুনরায় এন্ট্রি ছাড়াই।",
    s4_title: "পেমেন্ট ও রিপোর্ট স্বয়ংক্রিয়ভাবে তৈরি হয়",
    s4_desc:
      "পেমেন্ট ট্র্যাকিং, সংগ্রহ রিপোর্ট এবং আর্থিক বিবরণী ম্যানুয়াল কাজ ছাড়াই তৈরি হয়।",
    s5_title: "ব্যবস্থাপনা রিয়েল-টাইম অন্তর্দৃষ্টি পায়",
    s5_desc:
      "নেতারা লাইভ ড্যাশবোর্ড দেখেন — বিক্রয়, ইনভেন্টরি, নগদ প্রবাহ এবং দলের পারফরম্যান্স — ২৪/৭।",

    // Benefits
    ben_tag: "কেন FDH",
    ben_title: "কেন FDH বেছে নেবেন?",
    b1_title: "বিক্রয় দক্ষতা বাড়ান",
    b1_desc:
      "সুশৃঙ্খল ওয়ার্কফ্লো আপনার দলকে আরো দ্রুত বেশি চুক্তি সম্পন্ন করতে দেয়।",
    b2_title: "ম্যানুয়াল ত্রুটি হ্রাস করুন",
    b2_desc:
      "অটোমেশন ইনভেন্টরি ও হিসাবজুড়ে ত্রুটি-প্রবণ ডেটা এন্ট্রি প্রতিস্থাপন করে।",
    b3_title: "দ্রুত সিদ্ধান্ত গ্রহণ",
    b3_desc:
      "রিয়েল-টাইম ড্যাশবোর্ড নেতৃত্বকে তাৎক্ষণিক ব্যবস্থা নেওয়ার ডেটা দেয়।",
    b4_title: "ভালো নগদ প্রবাহ নিয়ন্ত্রণ",
    b4_desc:
      "প্রতিটি পেমেন্ট, মেয়াদোত্তীর্ণ ও সংগ্রহ রিয়েল-টাইমে ট্র্যাক করুন।",
    b5_title: "১০০% কার্যক্রম দৃশ্যমানতা",
    b5_desc:
      "মাঠ প্রতিনিধি থেকে লেজার ব্যালেন্স পর্যন্ত — প্রতিটি স্তরে সম্পূর্ণ স্বচ্ছতা।",
    ben_big: "১০০%",
    ben_big_sub: "কার্যক্রম দৃশ্যমানতা",
    metric1: "বিক্রয় দক্ষতা",
    metric2: "ত্রুটি হ্রাস",
    metric3: "রিপোর্টিং গতি",

    // Use Cases
    uc_tag: "ব্যবহারের ক্ষেত্র",
    uc_title: "কারা FDH ব্যবহার করতে পারেন?",
    uc_desc:
      "বিতরণ চ্যানেলের মাধ্যমে পণ্য সরানো প্রতিটি প্রতিষ্ঠানের জন্য তৈরি।",
    uc1: "পরিবেশক",
    uc2: "পাইকারি ব্যবসা",
    uc3: "উৎপাদনকারী প্রতিষ্ঠান",
    uc4: "বিক্রয়-চালিত সংস্থা",

    // Integration
    int_tag: "স্মার্ট ইন্টিগ্রেশন",
    int_title: "প্রবৃদ্ধি চালিত স্মার্ট ইন্টিগ্রেশন",
    int_p:
      "FDH আপনার SmartMGTS প্ল্যাটফর্মকে TallyPrime-এর সাথে সংযুক্ত করে — প্রতিটি বিক্রয়, স্টক আন্দোলন ও লেনদেন স্বয়ংক্রিয়ভাবে রেকর্ড ও সিঙ্ক নিশ্চিত করে।",
    int_nodupe: "কোনো পুনরাবৃত্তি নেই। কোনো ত্রুটি নেই। শুধু মসৃণ অপারেশন।",
    int_smart_sub: "অপারেশন ও বিক্রয়",
    int_hub_sub: "কেন্দ্রীয় হাব",
    int_tally_sub: "হিসাব ও অর্থ",

    // CTA
    cta_title: "আপনার বিতরণ ব্যবসা রূপান্তরিত করতে প্রস্তুত?",
    // cta_desc:
    //   "যেসব FMCG পরিবেশক FDH দিয়ে তাদের কার্যক্রম একত্রিত করেছেন তাদের সাথে যোগ দিন। আজই যোগাযোগ করুন।",
    cta_btn1: "📞 আজই যোগাযোগ করুন",
    cta_btn2: "WhatsApp সহায়তা",

    // Footer
    foot_desc:
      "FMCG কোম্পানিগুলোর জন্য একটি কেন্দ্রীভূত ডিজিটাল প্ল্যাটফর্ম — SmartMGTS এবং TallyPrime-এর ক্ষমতায় পরিচালিত।",
    foot_platform: "প্ল্যাটফর্ম",
    foot_integrations: "ইন্টিগ্রেশন",
    foot_contact: "যোগাযোগ",
    foot_about: "FDH সম্পর্কে",
    foot_features: "বৈশিষ্ট্য",
    foot_how: "কীভাবে কাজ করে",
    foot_benefits: "সুবিধা",
    foot_smart: "SmartMGTS সম্পর্কে",
    foot_tally: "TallyPrime ইন্টিগ্রেশন",
    foot_sync: "সিঙ্ক সংক্ষেপ",
    foot_copy: "© ২০২৫ FDH – FMCG ডিস্ট্রিবিউশন হাব। সর্বস্বত্ব সংরক্ষিত।",
    foot_power: "SmartMGTS ও TallyPrime-এর ক্ষমতায়",
    wa_chat: "আমাদের সাথে চ্যাট করুন",
  },
};

let currentLang = "en";
let currentTheme = "dark";

function t(key) {
  return TRANSLATIONS[currentLang][key] || TRANSLATIONS.en[key] || key;
}

function applyLang() {
  document.documentElement.lang = currentLang === "bn" ? "bn" : "en";
  document.body.classList.toggle("lang-bn", currentLang === "bn");
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const html = el.getAttribute("data-i18n-html");
    if (html) {
      el.innerHTML = t(key);
    } else {
      el.textContent = t(key);
    }
  });
  // Update lang toggle button labels
  document
    .querySelectorAll(".lang-en-label")
    .forEach((el) => el.classList.toggle("hidden", currentLang === "en"));
  document
    .querySelectorAll(".lang-bn-label")
    .forEach((el) => el.classList.toggle("hidden", currentLang === "bn"));
}

function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem("fdh-lang", lang);
  applyLang();
}

