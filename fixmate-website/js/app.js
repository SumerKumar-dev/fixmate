(function () {
  'use strict';

  const STORAGE_KEY = 'fixmate_vanilla_state_v1';
  const SESSION_KEY = 'fixmate_vanilla_user_v1';

  const TIME_SLOTS = [
    '09:00 AM - 10:30 AM',
    '11:00 AM - 12:30 PM',
    '02:00 PM - 03:30 PM',
    '04:00 PM - 05:30 PM',
    '06:00 PM - 07:30 PM',
  ];

  function createSeedState() {
    return {
      categories: [
        {
          id: 'cat-1',
          slug: 'electrician',
          name: 'Electrician',
          description: 'Circuit breakers, smart switches, wiring diagnostics, and backup inverter setup.',
          indicativeStartingPrice: 29,
          imageUrl: 'images/service_electrician.jpg',
          isActive: true,
        },
        {
          id: 'cat-2',
          slug: 'plumber',
          name: 'Plumber',
          description: 'Leak detection, mixer taps, drainage clearing, and concealed pipe fittings.',
          indicativeStartingPrice: 25,
          imageUrl: 'images/service_plumbing.jpg',
          isActive: true,
        },
        {
          id: 'cat-3',
          slug: 'ac-repair',
          name: 'AC Repair',
          description: 'Split & inverter AC servicing, gas refilling, coil deep cleaning, and PCB fixes.',
          indicativeStartingPrice: 35,
          imageUrl: 'images/service_ac_repair.jpg',
          isActive: true,
        },
        {
          id: 'cat-4',
          slug: 'carpenter',
          name: 'Carpenter',
          description: 'Custom cabinetry, door hinge alignment, wardrobe repair, and modular assembly.',
          indicativeStartingPrice: 28,
          isActive: true,
        },
        {
          id: 'cat-5',
          slug: 'cleaning',
          name: 'House Cleaning',
          description: 'Deep kitchen & bathroom sanitization, sofa shampooing, and move-in detailing.',
          indicativeStartingPrice: 39,
          isActive: true,
        },
        {
          id: 'cat-6',
          slug: 'appliance-repair',
          name: 'Appliance Repair',
          description: 'Washing machines, refrigerators, microwaves, and RO water purifier service.',
          indicativeStartingPrice: 32,
          isActive: true,
        },
        {
          id: 'cat-7',
          slug: 'painter',
          name: 'Painter',
          description: 'Interior wall repainting, damp-proof priming, texture finishes, and touch-ups.',
          indicativeStartingPrice: 45,
          isActive: true,
        },
        {
          id: 'cat-8',
          slug: 'mechanic',
          name: 'Mechanic',
          description: 'Doorstep car & two-wheeler diagnostics, battery jump-start, and periodic checks.',
          indicativeStartingPrice: 34,
          isActive: true,
        },
      ],
      users: [
        {
          id: 'user-cust-1',
          email: 'aarav.mehta@example.com',
          password: 'password123',
          fullName: 'Aarav Mehta',
          phone: '+91 98450 22190',
          role: 'customer',
          accountStatus: 'active',
          city: 'Bengaluru',
          locality: 'Indiranagar',
          address: '42, 12th Main Road, HAL 2nd Stage, Indiranagar',
        },
        {
          id: 'user-pro-1',
          email: 'vikram.nair@example.com',
          password: 'password123',
          fullName: 'Vikram Nair',
          phone: '+91 99001 44120',
          role: 'professional',
          accountStatus: 'active',
          city: 'Bengaluru',
          locality: 'Indiranagar',
          address: '100 Feet Road, Indiranagar',
        },
        {
          id: 'user-pro-2',
          email: 'elena.rodrigues@example.com',
          password: 'password123',
          fullName: 'Elena Rodrigues',
          phone: '+91 98802 19834',
          role: 'professional',
          accountStatus: 'active',
          city: 'Bengaluru',
          locality: 'Koramangala',
          address: '4th Block, Koramangala',
        },
        {
          id: 'user-pro-3',
          email: 'rohan.desai@example.com',
          password: 'password123',
          fullName: 'Rohan Desai',
          phone: '+91 97411 66310',
          role: 'professional',
          accountStatus: 'active',
          city: 'Bengaluru',
          locality: 'HSR Layout',
          address: 'Sector 2, HSR Layout',
        },
        {
          id: 'user-pro-4',
          email: 'sarah.kulkarni@example.com',
          password: 'password123',
          fullName: 'Sarah Kulkarni',
          phone: '+91 96112 77890',
          role: 'professional',
          accountStatus: 'active',
          city: 'Bengaluru',
          locality: 'Whitefield',
          address: 'ITPL Main Road, Whitefield',
        },
        {
          id: 'user-pro-5',
          email: 'karthik.rao@example.com',
          password: 'password123',
          fullName: 'Karthik Rao',
          phone: '+91 98204 51092',
          role: 'professional',
          accountStatus: 'active',
          city: 'Bengaluru',
          locality: 'Jayanagar',
          address: '4th T Block, Jayanagar',
        },
        {
          id: 'user-pro-6',
          email: 'priya.sharma@example.com',
          password: 'password123',
          fullName: 'Priya Sharma',
          phone: '+91 98192 33041',
          role: 'professional',
          accountStatus: 'active',
          city: 'Bengaluru',
          locality: 'Indiranagar',
          address: 'CMH Road, Indiranagar',
        },
        {
          id: 'user-pro-7',
          email: 'dev.malhotra@example.com',
          password: 'password123',
          fullName: 'Dev Malhotra',
          phone: '+91 99164 88210',
          role: 'professional',
          accountStatus: 'active',
          city: 'Bengaluru',
          locality: 'Koramangala',
          address: '6th Block, Koramangala',
        },
        {
          id: 'user-pro-8',
          email: 'imran.khan@example.com',
          password: 'password123',
          fullName: 'Imran Khan',
          phone: '+91 97390 11234',
          role: 'professional',
          accountStatus: 'active',
          city: 'Bengaluru',
          locality: 'HSR Layout',
          address: '27th Main, HSR Layout',
        },
        {
          id: 'user-admin-1',
          email: 'admin@fixmate.demo',
          password: 'password123',
          fullName: 'Nadia Kapoor',
          phone: '+91 80 4120 8800',
          role: 'admin',
          accountStatus: 'active',
          city: 'Bengaluru',
          locality: 'Indiranagar',
          address: 'FixMate Operations Hub',
        },
      ],
      professionals: [
        {
          id: 'pro-1',
          userId: 'user-pro-1',
          fullName: 'Vikram Nair',
          avatarUrl: 'images/pro_portrait_lead.jpg',
          categorySlug: 'electrician',
          categoryName: 'Electrician',
          headline: 'Master Residential Electrician & Smart Panel Specialist',
          bio: 'Over 11 years handling residential wiring, three-phase load balancing, MCB upgrades, and smart home dimmer installations with clean cabling.',
          experienceYears: 11,
          city: 'Bengaluru',
          localities: ['Indiranagar', 'Koramangala', 'Domlur'],
          distanceKm: 1.4,
          skills: ['MCB & Distribution Boards', 'Smart Switches', 'Inverter Wiring', 'Fault Diagnostics'],
          workingHours: '07:30 AM - 08:30 PM',
          isAvailable: true,
          emergencyAvailable: true,
          startingPrice: 29,
          verificationStatus: 'verified',
          ratingAvg: 4.9,
          reviewCount: 2,
          completedJobsCount: 148,
          portfolioUrls: ['images/service_electrician.jpg', 'images/hero_home_technician.jpg'],
          services: [
            { id: 'srv-101', title: 'MCB & Short-Circuit Diagnostic', description: 'Multimeter inspection of breaker panel and branch circuits.', price: 29, durationMinutes: 60 },
            { id: 'srv-102', title: 'Smart Switchboard Installation', description: 'Retrofit wiring with neutral calibration and load testing.', price: 55, durationMinutes: 90 },
            { id: 'srv-103', title: 'Home Inverter & Battery Setup', description: 'Dedicated backup line wiring and surge testing.', price: 75, durationMinutes: 120 },
          ],
          demoMonthlyEarnings: [
            { month: 'Jun', amount: 1420 },
            { month: 'Jul', amount: 1680 },
            { month: 'Aug', amount: 1590 },
            { month: 'Sep', amount: 1840 },
            { month: 'Oct', amount: 2110 },
            { month: 'Nov', amount: 1920 },
          ],
        },
        {
          id: 'pro-2',
          userId: 'user-pro-2',
          fullName: 'Elena Rodrigues',
          avatarUrl: 'images/service_plumbing.jpg',
          categorySlug: 'plumber',
          categoryName: 'Plumber',
          headline: 'Precision Plumbing, Concealed Leak & Fixture Specialist',
          bio: 'Licensed plumbing technician focused on non-destructive leak detection, brass/copper sanitary fittings, and bathroom pressure balancing.',
          experienceYears: 8,
          city: 'Bengaluru',
          localities: ['Koramangala', 'HSR Layout', 'Indiranagar'],
          distanceKm: 2.1,
          skills: ['Concealed Leak Detection', 'Mixer Valves', 'Pressure Pump Setup', 'Drain Unclogging'],
          workingHours: '08:00 AM - 07:30 PM',
          isAvailable: true,
          emergencyAvailable: true,
          startingPrice: 25,
          verificationStatus: 'verified',
          ratingAvg: 4.8,
          reviewCount: 1,
          completedJobsCount: 112,
          portfolioUrls: ['images/service_plumbing.jpg'],
          services: [
            { id: 'srv-201', title: 'Tap, Mixer & Valve Replacement', description: 'Leak-proof cartridge or faucet replacement with PTFE sealing.', price: 25, durationMinutes: 45 },
            { id: 'srv-202', title: 'Pressurized Pipe Leak Inspection', description: 'Moisture tracing and joint sealing without tile damage.', price: 49, durationMinutes: 90 },
          ],
          demoMonthlyEarnings: [
            { month: 'Jun', amount: 1150 },
            { month: 'Jul', amount: 1320 },
            { month: 'Aug', amount: 1490 },
            { month: 'Sep', amount: 1410 },
            { month: 'Oct', amount: 1750 },
            { month: 'Nov', amount: 1620 },
          ],
        },
        {
          id: 'pro-3',
          userId: 'user-pro-3',
          fullName: 'Rohan Desai',
          avatarUrl: 'images/service_ac_repair.jpg',
          categorySlug: 'ac-repair',
          categoryName: 'AC Repair',
          headline: 'Inverter Split AC & HVAC Diagnostic Engineer',
          bio: 'Certified refrigeration specialist for split, cassette, and inverter AC systems. Digital manifold checks, foam-jet cleaning, and PCB repair.',
          experienceYears: 9,
          city: 'Bengaluru',
          localities: ['HSR Layout', 'Koramangala', 'Indiranagar'],
          distanceKm: 3.4,
          skills: ['Foam-Jet Deep Cleaning', 'R32 Gas Top-Up', 'Inverter PCB Fixes', 'Drain Flushing'],
          workingHours: '09:00 AM - 08:00 PM',
          isAvailable: true,
          emergencyAvailable: false,
          startingPrice: 35,
          verificationStatus: 'verified',
          ratingAvg: 4.9,
          reviewCount: 1,
          completedJobsCount: 134,
          portfolioUrls: ['images/service_ac_repair.jpg', 'images/hero_home_technician.jpg'],
          services: [
            { id: 'srv-301', title: 'Foam-Jet Split AC Deep Service', description: 'Indoor & outdoor high-pressure wash with drain line flush.', price: 35, durationMinutes: 75 },
            { id: 'srv-302', title: 'Refrigerant Pressure Check & Top-Up', description: 'Nitrogen leak test plus calibrated refrigerant refill.', price: 68, durationMinutes: 90 },
          ],
          demoMonthlyEarnings: [
            { month: 'Jun', amount: 1800 },
            { month: 'Jul', amount: 1620 },
            { month: 'Aug', amount: 1550 },
            { month: 'Sep', amount: 1790 },
            { month: 'Oct', amount: 1940 },
            { month: 'Nov', amount: 1710 },
          ],
        },
        {
          id: 'pro-4',
          userId: 'user-pro-4',
          fullName: 'Sarah Kulkarni',
          avatarUrl: 'images/service_electrician.jpg',
          categorySlug: 'electrician',
          categoryName: 'Electrician',
          headline: 'Commercial & Home Electrical Safety Auditor',
          bio: 'Specialist in earthing resistance testing, EV home charger installation, and appliance surge protection.',
          experienceYears: 7,
          city: 'Bengaluru',
          localities: ['Whitefield', 'Indiranagar', 'Marathahalli'],
          distanceKm: 4.8,
          skills: ['EV Charger Wiring', 'Earthing & Surge Audit', 'Recessed Lighting'],
          workingHours: '08:30 AM - 07:00 PM',
          isAvailable: true,
          emergencyAvailable: true,
          startingPrice: 32,
          verificationStatus: 'verified',
          ratingAvg: 4.7,
          reviewCount: 1,
          completedJobsCount: 89,
          portfolioUrls: ['images/service_electrician.jpg'],
          services: [
            { id: 'srv-401', title: 'Home Electrical Safety Audit', description: 'Socket polarity, RCCB trip-time, and earthing voltage check.', price: 32, durationMinutes: 60 },
            { id: 'srv-402', title: 'EV Wallbox Dedicated Line Setup', description: 'Armored cabling and RCBO installation for 3.3kW–7.4kW.', price: 110, durationMinutes: 180 },
          ],
          demoMonthlyEarnings: [
            { month: 'Jun', amount: 1200 },
            { month: 'Jul', amount: 1380 },
            { month: 'Aug', amount: 1510 },
            { month: 'Sep', amount: 1620 },
            { month: 'Oct', amount: 1890 },
            { month: 'Nov', amount: 1760 },
          ],
        },
        {
          id: 'pro-5',
          userId: 'user-pro-5',
          fullName: 'Karthik Rao',
          categorySlug: 'carpenter',
          categoryName: 'Carpenter',
          headline: 'Modular Woodwork & Door Hardware Craftsman',
          bio: 'Fine finish carpentry for soft-close hinges, sliding wardrobe tracks, custom shelving, and teak door alignment.',
          experienceYears: 12,
          city: 'Bengaluru',
          localities: ['Jayanagar', 'Koramangala', 'JP Nagar'],
          distanceKm: 5.2,
          skills: ['Soft-Close Hinges', 'Wardrobe Tracks', 'Smart Lock Fitting', 'Custom Shelving'],
          workingHours: '09:00 AM - 06:30 PM',
          isAvailable: true,
          emergencyAvailable: false,
          startingPrice: 28,
          verificationStatus: 'pending',
          ratingAvg: 4.6,
          reviewCount: 0,
          completedJobsCount: 41,
          portfolioUrls: [],
          services: [
            { id: 'srv-501', title: 'Cabinet Hinge & Channel Alignment', description: 'Precision adjustment of kitchen & wardrobe hardware.', price: 28, durationMinutes: 60 },
            { id: 'srv-502', title: 'Smart Door Lock Mortise Fit', description: 'Clean routing and alignment for digital deadbolts.', price: 60, durationMinutes: 120 },
          ],
          demoMonthlyEarnings: [
            { month: 'Jun', amount: 880 },
            { month: 'Jul', amount: 940 },
            { month: 'Aug', amount: 1090 },
            { month: 'Sep', amount: 1120 },
            { month: 'Oct', amount: 1290 },
            { month: 'Nov', amount: 1180 },
          ],
        },
        {
          id: 'pro-6',
          userId: 'user-pro-6',
          fullName: 'Priya Sharma',
          categorySlug: 'cleaning',
          categoryName: 'House Cleaning',
          headline: 'Eco-Safe Deep Home & Kitchen Detailing Specialist',
          bio: 'Trained residential hygiene lead using plant-derived degreasers, steam sanitization, and HEPA upholstery extraction.',
          experienceYears: 6,
          city: 'Bengaluru',
          localities: ['Indiranagar', 'Koramangala', 'Ulsoor'],
          distanceKm: 1.9,
          skills: ['Steam Descaling', 'Chimney Degreasing', 'Upholstery Extraction'],
          workingHours: '08:00 AM - 06:00 PM',
          isAvailable: true,
          emergencyAvailable: false,
          startingPrice: 39,
          verificationStatus: 'verified',
          ratingAvg: 4.8,
          reviewCount: 1,
          completedJobsCount: 95,
          portfolioUrls: [],
          services: [
            { id: 'srv-601', title: 'Kitchen & Chimney Degreasing', description: 'Complete tile, hob, cabinet exterior, and filter cleaning.', price: 45, durationMinutes: 120 },
            { id: 'srv-602', title: '2-Bathroom Steam Descaling', description: 'Hard-water stain removal and glass polishing.', price: 39, durationMinutes: 90 },
          ],
          demoMonthlyEarnings: [
            { month: 'Jun', amount: 1100 },
            { month: 'Jul', amount: 1210 },
            { month: 'Aug', amount: 1340 },
            { month: 'Sep', amount: 1450 },
            { month: 'Oct', amount: 1610 },
            { month: 'Nov', amount: 1540 },
          ],
        },
        {
          id: 'pro-7',
          userId: 'user-pro-7',
          fullName: 'Dev Malhotra',
          categorySlug: 'appliance-repair',
          categoryName: 'Appliance Repair',
          headline: 'Front-Load Washer & Inverter Fridge Technician',
          bio: 'Component-level troubleshooting for Bosch, LG, Samsung, and IFB washers, refrigerators, and built-in ovens.',
          experienceYears: 10,
          city: 'Bengaluru',
          localities: ['Koramangala', 'HSR Layout', 'Indiranagar'],
          distanceKm: 2.8,
          skills: ['Drain Pump Service', 'Inverter Compressor Relay', 'Microwave Magnetron'],
          workingHours: '09:00 AM - 08:00 PM',
          isAvailable: false,
          emergencyAvailable: false,
          startingPrice: 32,
          verificationStatus: 'verified',
          ratingAvg: 4.7,
          reviewCount: 0,
          completedJobsCount: 77,
          portfolioUrls: [],
          services: [
            { id: 'srv-701', title: 'Washing Machine Diagnostic', description: 'Error code scan, drain filter clearing, and inlet check.', price: 32, durationMinutes: 60 },
            { id: 'srv-702', title: 'Refrigerator Cooling Service', description: 'Defrost sensor, fan motor, and relay inspection.', price: 36, durationMinutes: 60 },
          ],
          demoMonthlyEarnings: [
            { month: 'Jun', amount: 1310 },
            { month: 'Jul', amount: 1290 },
            { month: 'Aug', amount: 1400 },
            { month: 'Sep', amount: 1520 },
            { month: 'Oct', amount: 1480 },
            { month: 'Nov', amount: 1390 },
          ],
        },
        {
          id: 'pro-8',
          userId: 'user-pro-8',
          fullName: 'Imran Khan',
          categorySlug: 'mechanic',
          categoryName: 'Mechanic',
          headline: 'Mobile OBD-II Car & Scooter Diagnostics',
          bio: 'Doorstep vehicle inspection, battery replacement, starter relay diagnostics, and brake pad checks at your apartment parking.',
          experienceYears: 5,
          city: 'Bengaluru',
          localities: ['HSR Layout', 'Koramangala', 'BTM Layout'],
          distanceKm: 3.9,
          skills: ['OBD-II Scanning', 'Battery Jump & Test', 'Periodic Oil Check'],
          workingHours: '07:00 AM - 09:00 PM',
          isAvailable: true,
          emergencyAvailable: true,
          startingPrice: 34,
          verificationStatus: 'unverified',
          ratingAvg: 4.5,
          reviewCount: 0,
          completedJobsCount: 19,
          portfolioUrls: [],
          services: [
            { id: 'srv-801', title: 'Emergency Battery Jump & Test', description: 'Doorstep cranking amps check and safe jump-start.', price: 34, durationMinutes: 45 },
            { id: 'srv-802', title: 'OBD-II Full Vehicle Scan', description: 'Engine fault code readout and sensor health report.', price: 42, durationMinutes: 60 },
          ],
          demoMonthlyEarnings: [
            { month: 'Jun', amount: 620 },
            { month: 'Jul', amount: 740 },
            { month: 'Aug', amount: 810 },
            { month: 'Sep', amount: 890 },
            { month: 'Oct', amount: 960 },
            { month: 'Nov', amount: 1020 },
          ],
        },
      ],
      bookings: [
        {
          id: 'bkg-1',
          bookingCode: 'FM-849201',
          customerId: 'user-cust-1',
          customerName: 'Aarav Mehta',
          customerPhone: '+91 98450 22190',
          professionalId: 'pro-1',
          professionalName: 'Vikram Nair',
          categoryName: 'Electrician',
          serviceId: 'srv-101',
          serviceTitle: 'MCB & Short-Circuit Diagnostic',
          problemDescription: 'Kitchen circuit breaker keeps tripping whenever the induction cooktop and microwave run together.',
          scheduledDate: '2026-10-28',
          timeSlot: '11:00 AM - 12:30 PM',
          serviceAddress: '42, 12th Main Road, HAL 2nd Stage, Indiranagar',
          locality: 'Indiranagar',
          estimatedTotal: 29,
          status: 'Completed',
          paymentMethod: 'Simulated UPI',
          createdAt: '2026-10-26T11:20:00Z',
        },
        {
          id: 'bkg-2',
          bookingCode: 'FM-849318',
          customerId: 'user-cust-1',
          customerName: 'Aarav Mehta',
          customerPhone: '+91 98450 22190',
          professionalId: 'pro-2',
          professionalName: 'Elena Rodrigues',
          categoryName: 'Plumber',
          serviceId: 'srv-201',
          serviceTitle: 'Tap, Mixer & Valve Replacement',
          problemDescription: 'Master bathroom sink cold-water angle valve has a slow drip at the thread.',
          scheduledDate: '2026-11-04',
          timeSlot: '02:00 PM - 03:30 PM',
          serviceAddress: '42, 12th Main Road, HAL 2nd Stage, Indiranagar',
          locality: 'Indiranagar',
          estimatedTotal: 25,
          status: 'Completed',
          paymentMethod: 'Simulated Card',
          createdAt: '2026-11-02T09:10:00Z',
        },
        {
          id: 'bkg-3',
          bookingCode: 'FM-850104',
          customerId: 'user-cust-1',
          customerName: 'Aarav Mehta',
          customerPhone: '+91 98450 22190',
          professionalId: 'pro-3',
          professionalName: 'Rohan Desai',
          categoryName: 'AC Repair',
          serviceId: 'srv-301',
          serviceTitle: 'Foam-Jet Split AC Deep Service',
          problemDescription: 'Living room 1.5-ton split AC has reduced airflow and mild water condensation.',
          scheduledDate: '2026-11-18',
          timeSlot: '09:00 AM - 10:30 AM',
          serviceAddress: '42, 12th Main Road, HAL 2nd Stage, Indiranagar',
          locality: 'Indiranagar',
          estimatedTotal: 35,
          status: 'Accepted',
          paymentMethod: 'Simulated UPI',
          createdAt: '2026-11-12T16:45:00Z',
        },
        {
          id: 'bkg-4',
          bookingCode: 'FM-850219',
          customerId: 'user-cust-1',
          customerName: 'Aarav Mehta',
          customerPhone: '+91 98450 22190',
          professionalId: 'pro-1',
          professionalName: 'Vikram Nair',
          categoryName: 'Electrician',
          serviceId: 'srv-102',
          serviceTitle: 'Smart Switchboard Installation',
          problemDescription: 'Install Wi-Fi dimmer switchboard in study room and verify neutral continuity.',
          scheduledDate: '2026-11-20',
          timeSlot: '04:00 PM - 05:30 PM',
          serviceAddress: '42, 12th Main Road, HAL 2nd Stage, Indiranagar',
          locality: 'Indiranagar',
          estimatedTotal: 55,
          status: 'Pending',
          paymentMethod: 'Simulated Card',
          createdAt: '2026-11-13T04:10:00Z',
        },
      ],
      reviews: [
        {
          id: 'rev-1',
          bookingId: 'bkg-1',
          customerId: 'user-cust-1',
          customerName: 'Aarav Mehta',
          professionalId: 'pro-1',
          professionalName: 'Vikram Nair',
          rating: 5,
          comment: 'Vikram traced the loose neutral busbar inside the kitchen sub-panel within 20 minutes and replaced the 20A RCBO cleanly.',
          isHidden: false,
          createdAt: '2026-10-28T13:00:00Z',
        },
        {
          id: 'rev-2',
          bookingId: 'bkg-2',
          customerId: 'user-cust-1',
          customerName: 'Aarav Mehta',
          professionalId: 'pro-2',
          professionalName: 'Elena Rodrigues',
          rating: 5,
          comment: 'Zero mess, brought spare brass valves, and pressure-tested the line before wrapping up.',
          isHidden: false,
          createdAt: '2026-11-04T16:15:00Z',
        },
        {
          id: 'rev-3',
          bookingId: 'bkg-demo-3',
          customerId: 'user-cust-1',
          customerName: 'Meera Iyer (Sample)',
          professionalId: 'pro-3',
          professionalName: 'Rohan Desai',
          rating: 5,
          comment: 'Used a waterproof wash jacket so the wall stayed spotless. Cooling improved right away.',
          isHidden: false,
          createdAt: '2026-10-19T12:00:00Z',
        },
      ],
      favorites: [
        { customerId: 'user-cust-1', professionalId: 'pro-1' },
        { customerId: 'user-cust-1', professionalId: 'pro-2' },
      ],
      notifications: [
        {
          id: 'notif-1',
          userId: 'user-cust-1',
          title: 'Booking Accepted',
          message: 'Rohan Desai accepted your AC Repair booking (FM-850104).',
          isRead: false,
          createdAt: '2026-11-12T17:10:00Z',
        },
        {
          id: 'notif-2',
          userId: 'user-pro-1',
          title: 'New Booking Request',
          message: 'Aarav Mehta requested Smart Switchboard Installation (FM-850219).',
          isRead: false,
          createdAt: '2026-11-13T04:10:00Z',
        },
      ],
      verificationRequests: [
        {
          id: 'ver-1',
          professionalId: 'pro-5',
          professionalName: 'Karthik Rao',
          categoryName: 'Carpenter',
          documentType: 'Trade Skill Certificate & Govt ID',
          licenseNumber: 'KA-SKL-2026-9941',
          notes: '12 years carpentry workshop proof submitted.',
          status: 'pending',
        },
        {
          id: 'ver-2',
          professionalId: 'pro-8',
          professionalName: 'Imran Khan',
          categoryName: 'Mechanic',
          documentType: 'Automotive Diagnostic Certification',
          licenseNumber: 'BLR-AUTO-5518',
          notes: 'Pending field equipment & ID review.',
          status: 'pending',
        },
      ],
      activities: [
        { actor: 'Aarav Mehta', action: 'Created booking FM-850219', target: 'Vikram Nair', createdAt: '2026-11-13T04:10:00Z' },
        { actor: 'Rohan Desai', action: 'Accepted booking FM-850104', target: 'Split AC Deep Service', createdAt: '2026-11-12T17:10:00Z' },
        { actor: 'Imran Khan', action: 'Submitted verification request', target: 'BLR-AUTO-5518', createdAt: '2026-11-12T14:20:00Z' },
      ],
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (_e) {}
    const seed = createSeedState();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
    return seed;
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function loadSession() {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      if (raw) {
        const u = JSON.parse(raw);
        return state.users.find((x) => x.id === u.id && x.accountStatus === 'active') || null;
      }
    } catch (_e) {}
    return null;
  }

  let state = loadState();
  let currentUser = loadSession();
  let currentView = 'landing';
  let selectedProId = null;
  let compareIds = [];
  let filters = {
    query: '',
    locality: '',
    categorySlug: 'all',
    maxPrice: 150,
    minRating: 0,
    availableOnly: false,
    emergencyOnly: false,
    sortBy: 'rating',
  };
  let customerTab = 'overview';
  let proTab = 'overview';
  let adminTab = 'overview';
  let bookingFilter = 'all';

  // ==================== UTILITIES ====================
  function escapeHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function showToast(msg, type = 'success') {
    const shelf = document.getElementById('toast-shelf');
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.textContent = msg;
    shelf.appendChild(el);
    setTimeout(() => {
      el.remove();
    }, 3600);
  }

  function getInitials(name) {
    return String(name || 'FM')
      .split(' ')
      .map((p) => p[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }

  function avatarMarkup(pro, cls) {
    if (pro.avatarUrl) {
      return `<img src="${escapeHtml(pro.avatarUrl)}" alt="${escapeHtml(pro.fullName)}" class="${cls}" />`;
    }
    return `<div class="${cls}">${escapeHtml(getInitials(pro.fullName))}</div>`;
  }

  function recalcRating(proId) {
    const pro = state.professionals.find((p) => p.id === proId);
    if (!pro) return;
    const vis = state.reviews.filter((r) => r.professionalId === proId && !r.isHidden);
    if (vis.length === 0) {
      pro.reviewCount = 0;
      pro.ratingAvg = 4.6;
    } else {
      pro.reviewCount = vis.length;
      pro.ratingAvg = Number((vis.reduce((a, r) => a + r.rating, 0) / vis.length).toFixed(1));
    }
  }

  // ==================== MODAL ENGINE ====================
  function openModal(title, html, wide = false) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = html;
    const box = document.getElementById('modal-box');
    box.classList.toggle('wide', wide);
    document.getElementById('modal-backdrop').classList.remove('hidden');
  }

  function closeModal() {
    document.getElementById('modal-backdrop').classList.add('hidden');
    document.getElementById('modal-body').innerHTML = '';
  }

  // ==================== NAVIGATION & HEADER ====================
  function updateHeader() {
    const actionsEl = document.getElementById('header-actions');
    const mobileActionsEl = document.getElementById('mobile-drawer-actions');
    const verifiedCount = state.professionals.filter((p) => p.verificationStatus === 'verified').length;
    const badgeEl = document.getElementById('floating-verified-count');
    if (badgeEl) badgeEl.textContent = `${verifiedCount} Verified Pros Ready`;

    const zipBtn =
      window.location.protocol !== 'file:'
        ? `<a href="/api/download-zip" download="fixmate-html-css-js.zip" class="btn btn-zip"><span>Download ZIP</span></a>`
        : '';

    if (currentUser) {
      const dashView =
        currentUser.role === 'admin'
          ? 'admin'
          : currentUser.role === 'professional'
          ? 'pro'
          : 'customer';
      const dashLabel =
        currentUser.role === 'admin'
          ? 'Admin Console'
          : currentUser.role === 'professional'
          ? 'Pro Dashboard'
          : 'My Dashboard';

      actionsEl.innerHTML = `
        ${zipBtn}
        <button type="button" class="btn-text" id="btn-go-dash">${dashLabel}</button>
        <button type="button" class="btn btn-navy" id="btn-logout">Sign Out</button>
      `;
      mobileActionsEl.innerHTML = `
        <button type="button" class="btn btn-primary" id="m-go-dash">${dashLabel}</button>
        <button type="button" class="btn btn-outline" id="m-logout">Sign Out</button>
      `;
      document.getElementById('btn-go-dash').onclick = () => setView(dashView);
      document.getElementById('btn-logout').onclick = logout;
      document.getElementById('m-go-dash').onclick = () => {
        closeMobileDrawer();
        setView(dashView);
      };
      document.getElementById('m-logout').onclick = () => {
        closeMobileDrawer();
        logout();
      };
    } else {
      actionsEl.innerHTML = `
        ${zipBtn}
        <button type="button" class="btn-text" id="btn-open-login">Login</button>
        <button type="button" class="btn btn-primary" id="btn-open-register">Get Started</button>
      `;
      mobileActionsEl.innerHTML = `
        <button type="button" class="btn btn-outline" id="m-open-login">Login</button>
        <button type="button" class="btn btn-primary" id="m-open-register">Get Started</button>
      `;
      document.getElementById('btn-open-login').onclick = () => openAuthModal('login');
      document.getElementById('btn-open-register').onclick = () => openAuthModal('register-customer');
      document.getElementById('m-open-login').onclick = () => {
        closeMobileDrawer();
        openAuthModal('login');
      };
      document.getElementById('m-open-register').onclick = () => {
        closeMobileDrawer();
        openAuthModal('register-customer');
      };
    }

    document.querySelectorAll('.nav-link').forEach((btn) => {
      const target = btn.getAttribute('data-nav');
      btn.classList.toggle('active', target === currentView || (target === 'explore' && currentView === 'profile'));
    });
  }

  function closeMobileDrawer() {
    document.getElementById('mobile-drawer').classList.add('hidden');
  }

  function setView(viewName) {
    if (viewName === 'customer' && currentUser?.role !== 'customer') {
      showToast('Sign in with a Customer account to open Customer Dashboard.', 'info');
      openAuthModal('login');
      return;
    }
    if (viewName === 'pro' && currentUser?.role !== 'professional') {
      showToast('Sign in with a Professional account to open Pro Dashboard.', 'info');
      openAuthModal('login');
      return;
    }
    if (viewName === 'admin' && currentUser?.role !== 'admin') {
      showToast('Administrator access required for Admin Console.', 'error');
      openAuthModal('login');
      return;
    }

    currentView = viewName;
    document.querySelectorAll('.view-section').forEach((sec) => {
      sec.classList.toggle('active', sec.id === `view-${viewName}`);
    });
    updateHeader();

    if (viewName === 'landing') renderLanding();
    if (viewName === 'explore') renderExplore();
    if (viewName === 'profile') renderProfile();
    if (viewName === 'customer') renderCustomerDashboard();
    if (viewName === 'pro') renderProDashboard();
    if (viewName === 'admin') renderAdminDashboard();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function navigateToExplore(overrides = {}) {
    filters = {
      query: '',
      locality: '',
      categorySlug: 'all',
      maxPrice: 150,
      minRating: 0,
      availableOnly: false,
      emergencyOnly: false,
      sortBy: 'rating',
      ...overrides,
    };
    setView('explore');
  }

  // ==================== LANDING PAGE ====================
  function renderLanding() {
    const activeCats = state.categories.filter((c) => c.isActive);

    document.getElementById('hero-quick-chips').innerHTML =
      '<span>Popular:</span>' +
      activeCats
        .slice(0, 5)
        .map(
          (c) =>
            `<button type="button" class="chip-btn" data-chip-cat="${c.slug}">${escapeHtml(c.name)}</button>`
        )
        .join('');

    document.querySelectorAll('[data-chip-cat]').forEach((btn) => {
      btn.onclick = () => navigateToExplore({ categorySlug: btn.getAttribute('data-chip-cat') });
    });

    document.getElementById('landing-services-grid').innerHTML = activeCats
      .map(
        (cat) => `
      <article class="service-card">
        <div class="service-thumb">
          ${
            cat.imageUrl
              ? `<img src="${escapeHtml(cat.imageUrl)}" alt="${escapeHtml(cat.name)}" />`
              : `<div class="service-thumb-icon"><strong>${escapeHtml(cat.name.slice(0, 2).toUpperCase())}</strong></div>`
          }
        </div>
        <div class="service-body">
          <div>
            <h3>${escapeHtml(cat.name)}</h3>
            <p>${escapeHtml(cat.description)}</p>
          </div>
          <div class="service-footer">
            <div>
              <div class="price-label">Indicative start</div>
              <div class="price-val tabular-nums">From $${cat.indicativeStartingPrice}</div>
            </div>
            <button type="button" class="btn btn-outline btn-sm" data-explore-slug="${cat.slug}">Explore</button>
          </div>
        </div>
      </article>
    `
      )
      .join('');

    document.querySelectorAll('[data-explore-slug]').forEach((btn) => {
      btn.onclick = () => navigateToExplore({ categorySlug: btn.getAttribute('data-explore-slug') });
    });
  }

  function analyzeProblem(problem) {
    const text = problem.toLowerCase();
    const rules = [
      { keywords: ['wire', 'spark', 'mcb', 'breaker', 'switch', 'socket', 'power', 'inverter', 'light', 'short circuit'], slug: 'electrician', name: 'Electrician', range: '$29 – $75 (indicative)', urgent: ['spark', 'smoke', 'short circuit'] },
      { keywords: ['leak', 'pipe', 'tap', 'faucet', 'sink', 'drain', 'clog', 'toilet', 'water', 'valve'], slug: 'plumber', name: 'Plumber', range: '$25 – $65 (indicative)', urgent: ['burst', 'flood', 'overflow'] },
      { keywords: ['ac', 'air conditioner', 'cooling', 'split', 'thermostat', 'compressor', 'hvac'], slug: 'ac-repair', name: 'AC Repair', range: '$35 – $85 (indicative)', urgent: [] },
      { keywords: ['door', 'hinge', 'cabinet', 'wardrobe', 'wood', 'lock', 'shelf', 'cupboard'], slug: 'carpenter', name: 'Carpenter', range: '$28 – $70 (indicative)', urgent: [] },
      { keywords: ['clean', 'sofa', 'bathroom', 'kitchen', 'stain', 'chimney', 'sanitize'], slug: 'cleaning', name: 'House Cleaning', range: '$39 – $95 (indicative)', urgent: [] },
      { keywords: ['washing machine', 'fridge', 'refrigerator', 'microwave', 'oven', 'appliance', 'ro'], slug: 'appliance-repair', name: 'Appliance Repair', range: '$32 – $75 (indicative)', urgent: [] },
      { keywords: ['paint', 'wall', 'ceiling', 'primer', 'damp', 'crack'], slug: 'painter', name: 'Painter', range: '$45 – $120 (indicative)', urgent: [] },
      { keywords: ['car', 'bike', 'scooter', 'battery', 'engine', 'brake', 'tyre'], slug: 'mechanic', name: 'Mechanic', range: '$34 – $80 (indicative)', urgent: ['stranded', 'dead battery'] },
    ];
    for (const r of rules) {
      if (r.keywords.some((k) => text.includes(k))) {
        const isEmergency = r.urgent.some((u) => text.includes(u));
        return {
          categorySlug: r.slug,
          categoryName: r.name,
          urgency: isEmergency ? 'Emergency' : 'Standard',
          summary: `Matched your issue description to ${r.name} specialists based on equipment and symptom signals.`,
          steps: [
            isEmergency ? 'Isolate electrical breaker or shut off main valve safely before technician arrival.' : 'Take a quick photo of the affected fixture to attach during booking.',
            `Compare verified ${r.name} professionals in your locality.`,
          ],
          range: r.range,
        };
      }
    }
    return {
      categorySlug: 'electrician',
      categoryName: 'Electrician',
      urgency: 'Standard',
      summary: 'Recommended starting with a general home diagnostic technician or browsing all categories.',
      steps: ['Add detailed symptoms in your booking notes.', 'Compare nearby professionals by rating and base rate.'],
      range: '$25 – $65 (indicative)',
    };
  }

  // ==================== EXPLORE PAGE ====================
  function renderExplore() {
    const activeCats = state.categories.filter((c) => c.isActive);
    document.getElementById('filter-query').value = filters.query;
    document.getElementById('filter-locality').value = filters.locality;
    document.getElementById('filter-sort').value = filters.sortBy;
    document.getElementById('filter-max-price').value = filters.maxPrice;
    document.getElementById('filter-price-val').textContent = `$${filters.maxPrice}`;
    document.getElementById('filter-available').checked = filters.availableOnly;
    document.getElementById('filter-emergency').checked = filters.emergencyOnly;

    document.getElementById('explore-category-tabs').innerHTML =
      `<button type="button" class="seg-btn ${filters.categorySlug === 'all' ? 'active' : ''}" data-cat="all">All Categories</button>` +
      activeCats
        .map(
          (c) =>
            `<button type="button" class="seg-btn ${filters.categorySlug === c.slug ? 'active' : ''}" data-cat="${c.slug}">${escapeHtml(c.name)}</button>`
        )
        .join('');

    document.querySelectorAll('[data-cat]').forEach((btn) => {
      btn.onclick = () => {
        filters.categorySlug = btn.getAttribute('data-cat');
        renderExplore();
      };
    });

    document.querySelectorAll('[data-min-rating]').forEach((btn) => {
      const val = Number(btn.getAttribute('data-min-rating'));
      btn.classList.toggle('active', filters.minRating === val);
    });

    const q = filters.query.trim().toLowerCase();
    const loc = filters.locality.trim().toLowerCase();

    const list = state.professionals
      .filter((pro) => {
        const user = state.users.find((u) => u.id === pro.userId);
        if (user && user.accountStatus === 'suspended') return false;
        if (filters.categorySlug !== 'all' && pro.categorySlug !== filters.categorySlug) return false;
        if (q) {
          const hay = [pro.fullName, pro.categoryName, pro.headline, ...pro.skills, ...pro.services.map((s) => s.title)]
            .join(' ')
            .toLowerCase();
          if (!hay.includes(q)) return false;
        }
        if (loc) {
          const areaMatch =
            pro.city.toLowerCase().includes(loc) ||
            pro.localities.some((l) => l.toLowerCase().includes(loc));
          if (!areaMatch) return false;
        }
        if (pro.startingPrice > filters.maxPrice) return false;
        if (pro.ratingAvg < filters.minRating) return false;
        if (filters.availableOnly && !pro.isAvailable) return false;
        if (filters.emergencyOnly && !pro.emergencyAvailable) return false;
        return true;
      })
      .sort((a, b) => {
        if (filters.sortBy === 'price-asc') return a.startingPrice - b.startingPrice;
        if (filters.sortBy === 'nearest') return a.distanceKm - b.distanceKm;
        return b.ratingAvg - a.ratingAvg;
      });

    document.getElementById('explore-count').textContent = `Showing ${list.length} of ${state.professionals.length} specialists`;

    const grid = document.getElementById('explore-grid');
    const empty = document.getElementById('explore-empty');

    if (list.length === 0) {
      grid.innerHTML = '';
      empty.classList.remove('hidden');
    } else {
      empty.classList.add('hidden');
      grid.innerHTML = list
        .map((pro) => {
          const isCompared = compareIds.includes(pro.id);
          return `
          <article class="pro-card">
            <div>
              <div class="pro-card-head">
                ${avatarMarkup(pro, 'pro-avatar')}
                <div>
                  <div class="pro-name-row">
                    <h3>${escapeHtml(pro.fullName)}</h3>
                    ${pro.verificationStatus === 'verified' ? '<span class="verified-mark" title="Verified Professional">✓ Verified</span>' : ''}
                  </div>
                  <p class="pro-meta-line">${escapeHtml(pro.categoryName)} · ${pro.experienceYears} yrs exp · ${pro.distanceKm} km</p>
                  <p class="pro-meta-line tabular-nums"><strong>${pro.ratingAvg.toFixed(1)} ★</strong> · ${pro.reviewCount} reviews</p>
                </div>
              </div>
              <p class="pro-headline" style="margin-top:12px;">${escapeHtml(pro.headline)}</p>
              <div class="pro-specs" style="margin-top:12px;">
                <div class="pro-spec-row"><span>Service Area</span><strong>${escapeHtml(pro.localities.slice(0, 2).join(', '))}</strong></div>
                <div class="pro-spec-row">
                  <span>Availability</span>
                  <strong style="color:${pro.isAvailable ? '#16a34a' : '#64748b'}">${pro.isAvailable ? 'Available' : 'Busy'}${pro.emergencyAvailable ? ' · Emergency Ready' : ''}</strong>
                </div>
                <div class="pro-spec-row"><span>Starting Rate (Indicative)</span><strong class="tabular-nums">$${pro.startingPrice}</strong></div>
              </div>
            </div>
            <div class="pro-card-actions">
              <div class="btn-pair">
                <button type="button" class="btn btn-outline btn-sm" data-open-pro="${pro.id}">View Profile</button>
                <button type="button" class="btn btn-primary btn-sm" ${!pro.isAvailable ? 'disabled' : ''} data-book-pro="${pro.id}">
                  ${pro.isAvailable ? 'Book Now' : 'Busy'}
                </button>
              </div>
              <button type="button" class="compare-toggle-btn ${isCompared ? 'selected' : ''}" data-compare-pro="${pro.id}">
                ${isCompared ? '✓ Selected to Compare' : '+ Add to Compare'}
              </button>
            </div>
          </article>
        `;
        })
        .join('');
    }

    document.querySelectorAll('[data-open-pro]').forEach((b) => {
      b.onclick = () => {
        selectedProId = b.getAttribute('data-open-pro');
        setView('profile');
      };
    });
    document.querySelectorAll('[data-book-pro]').forEach((b) => {
      b.onclick = () => openBookingModal(b.getAttribute('data-book-pro'));
    });
    document.querySelectorAll('[data-compare-pro]').forEach((b) => {
      b.onclick = () => toggleCompare(b.getAttribute('data-compare-pro'));
    });

    const tray = document.getElementById('compare-tray');
    document.getElementById('compare-count').textContent = `${compareIds.length}/3`;
    tray.classList.toggle('hidden', compareIds.length === 0);
  }

  function toggleCompare(proId) {
    if (compareIds.includes(proId)) {
      compareIds = compareIds.filter((id) => id !== proId);
    } else {
      if (compareIds.length >= 3) {
        showToast('You can compare up to 3 professionals at once.', 'info');
        return;
      }
      compareIds.push(proId);
    }
    renderExplore();
  }

  function openCompareModal() {
    const pros = state.professionals.filter((p) => compareIds.includes(p.id));
    if (pros.length === 0) return;

    const html = `
      <div style="overflow-x:auto;">
        <table class="data-table">
          <thead>
            <tr>
              <th>Criteria</th>
              ${pros.map((p) => `<th>${escapeHtml(p.fullName)}<br><small style="font-weight:400">${escapeHtml(p.categoryName)}</small></th>`).join('')}
            </tr>
          </thead>
          <tbody>
            <tr><td>Experience</td>${pros.map((p) => `<td class="tabular-nums">${p.experienceYears} yrs</td>`).join('')}</tr>
            <tr><td>Rating</td>${pros.map((p) => `<td class="tabular-nums">${p.ratingAvg.toFixed(1)} ★ (${p.reviewCount})</td>`).join('')}</tr>
            <tr><td>Starting Price</td>${pros.map((p) => `<td class="tabular-nums"><strong>$${p.startingPrice}</strong> indicative</td>`).join('')}</tr>
            <tr><td>Availability</td>${pros.map((p) => `<td>${p.isAvailable ? 'Available' : 'Busy'}<br><small>${escapeHtml(p.workingHours)}</small></td>`).join('')}</tr>
            <tr><td>Emergency Dispatch</td>${pros.map((p) => `<td>${p.emergencyAvailable ? 'Yes' : 'Standard hours'}</td>`).join('')}</tr>
            <tr><td>Verification</td>${pros.map((p) => `<td>${p.verificationStatus === 'verified' ? '<strong style="color:#2563eb">Verified</strong>' : escapeHtml(p.verificationStatus)}</td>`).join('')}</tr>
            <tr><td>Action</td>${pros.map((p) => `<td><button type="button" class="btn btn-primary btn-sm" ${!p.isAvailable ? 'disabled' : ''} data-cmp-book="${p.id}">Book</button></td>`).join('')}</tr>
          </tbody>
        </table>
      </div>
    `;
    openModal(`Compare Professionals (${pros.length}/3)`, html, true);
    document.querySelectorAll('[data-cmp-book]').forEach((b) => {
      b.onclick = () => {
        closeModal();
        openBookingModal(b.getAttribute('data-cmp-book'));
      };
    });
  }

  // ==================== PROFESSIONAL PROFILE ====================
  function renderProfile() {
    const pro = state.professionals.find((p) => p.id === selectedProId);
    const root = document.getElementById('pro-profile-content');
    if (!pro) {
      root.innerHTML = `<div class="card-panel"><p>Professional profile not found.</p></div>`;
      return;
    }

    const reviews = state.reviews.filter((r) => r.professionalId === pro.id && !r.isHidden);
    const isFav = Boolean(
      currentUser && state.favorites.some((f) => f.customerId === currentUser.id && f.professionalId === pro.id)
    );

    root.innerHTML = `
      <div class="card-panel profile-hero-card">
        <div class="profile-identity">
          ${avatarMarkup(pro, 'profile-photo-lg')}
          <div>
            <div class="pro-name-row">
              <h1>${escapeHtml(pro.fullName)}</h1>
              ${pro.verificationStatus === 'verified' ? '<span class="verified-mark">✓ Verified Professional</span>' : `<span class="muted-label">(Verification: ${escapeHtml(pro.verificationStatus)})</span>`}
            </div>
            <p style="font-weight:600; color:#334155; margin-top:4px;">${escapeHtml(pro.headline)}</p>
            <p class="pro-meta-line" style="margin-top:8px;">
              ${escapeHtml(pro.categoryName)} · ${pro.experienceYears} yrs experience · ${pro.ratingAvg.toFixed(1)} ★ (${pro.reviewCount} reviews) · ${pro.completedJobsCount} jobs (demo)
            </p>
            <p class="pro-meta-line" style="margin-top:6px;">
              ${escapeHtml(pro.city)}: ${escapeHtml(pro.localities.join(', '))} · Hours: ${escapeHtml(pro.workingHours)}
              ${pro.emergencyAvailable ? ' · <strong style="color:#b45309">Emergency Dispatch Ready</strong>' : ''}
            </p>
          </div>
        </div>
        <div class="profile-actions-col">
          <button type="button" class="btn btn-primary" ${!pro.isAvailable ? 'disabled' : ''} id="prof-book-btn">
            ${pro.isAvailable ? 'Book Service' : 'Currently Unavailable'}
          </button>
          <button type="button" class="btn btn-outline" id="prof-contact-btn">Contact Professional</button>
          <button type="button" class="btn btn-outline" id="prof-fav-btn">${isFav ? '♥ Saved in Favorites' : '♡ Save to Favorites'}</button>
        </div>
      </div>

      <div class="profile-split">
        <div style="display:flex; flex-direction:column; gap:20px;">
          <div class="card-panel">
            <h3>About &amp; Specializations</h3>
            <p style="color:#475569; margin:10px 0 14px; font-size:0.92rem;">${escapeHtml(pro.bio)}</p>
            <div class="popular-chips">
              ${pro.skills.map((s) => `<span class="chip-btn" style="cursor:default">${escapeHtml(s)}</span>`).join('')}
            </div>
          </div>

          <div class="card-panel">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <h3>Service Menu &amp; Indicative Pricing</h3>
              <span class="muted-label">Transparent rates</span>
            </div>
            <div class="list-divide">
              ${pro.services
                .map(
                  (s) => `
                <div style="display:flex; justify-content:space-between; align-items:center; gap:14px;">
                  <div>
                    <strong>${escapeHtml(s.title)}</strong>
                    <p style="font-size:0.82rem; color:#475569;">${escapeHtml(s.description)} (${s.durationMinutes} mins)</p>
                  </div>
                  <div style="display:flex; align-items:center; gap:12px;">
                    <strong class="tabular-nums">$${s.price}</strong>
                    <button type="button" class="btn btn-outline btn-sm" ${!pro.isAvailable ? 'disabled' : ''} data-book-srv="${s.id}">Book</button>
                  </div>
                </div>
              `
                )
                .join('')}
            </div>
          </div>

          <div class="card-panel">
            <h3>Work Portfolio</h3>
            ${
              pro.portfolioUrls.length
                ? `<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:12px; margin-top:12px;">
                    ${pro.portfolioUrls.map((u) => `<img src="${escapeHtml(u)}" alt="Portfolio work" style="width:100%; height:170px; object-fit:cover; border-radius:12px; border:1px solid #e2e8f0;" />`).join('')}
                  </div>`
                : `<p class="muted-label" style="margin-top:8px;">No portfolio photos uploaded yet.</p>`
            }
          </div>
        </div>

        <div class="card-panel" style="align-self:start;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <h3>Customer Reviews</h3>
            <strong class="tabular-nums">${pro.ratingAvg.toFixed(1)} ★</strong>
          </div>
          ${
            reviews.length === 0
              ? `<p class="muted-label">No verified reviews yet.</p>`
              : `<div class="list-divide">
                  ${reviews
                    .map(
                      (r) => `
                    <div>
                      <div style="display:flex; justify-content:space-between; font-size:0.8rem;">
                        <strong>${escapeHtml(r.customerName)}</strong>
                        <span class="rating-amber">${r.rating}.0 ★</span>
                      </div>
                      <p style="font-size:0.85rem; color:#475569; margin-top:6px;">${escapeHtml(r.comment)}</p>
                    </div>
                  `
                    )
                    .join('')}
                </div>`
          }
        </div>
      </div>
    `;

    document.getElementById('prof-book-btn').onclick = () => openBookingModal(pro.id);
    document.querySelectorAll('[data-book-srv]').forEach((b) => {
      b.onclick = () => openBookingModal(pro.id, b.getAttribute('data-book-srv'));
    });
    document.getElementById('prof-fav-btn').onclick = () => {
      if (!currentUser) {
        showToast('Sign in as a customer to save favorites.', 'info');
        openAuthModal('login');
        return;
      }
      const idx = state.favorites.findIndex((f) => f.customerId === currentUser.id && f.professionalId === pro.id);
      if (idx >= 0) state.favorites.splice(idx, 1);
      else state.favorites.push({ customerId: currentUser.id, professionalId: pro.id });
      saveState();
      renderProfile();
      showToast(idx >= 0 ? 'Removed from favorites.' : 'Saved to favorites.');
    };
    document.getElementById('prof-contact-btn').onclick = () => {
      openModal(
        `Message ${pro.fullName}`,
        `<form id="contact-pro-form">
          <div class="form-field">
            <label>Your Inquiry</label>
            <textarea id="contact-msg" rows="4" required placeholder="Ask about scope, parts, or timing..."></textarea>
          </div>
          <div style="display:flex; justify-content:flex-end; gap:8px;">
            <button type="button" class="btn btn-outline" id="c-cancel">Cancel</button>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </div>
        </form>`
      );
      document.getElementById('c-cancel').onclick = closeModal;
      document.getElementById('contact-pro-form').onsubmit = (e) => {
        e.preventDefault();
        closeModal();
        showToast(`Message sent to ${pro.fullName}.`);
      };
    };
  }

  // ==================== BOOKING MODAL ====================
  function openBookingModal(proId, serviceId = null) {
    if (!currentUser) {
      showToast('Please sign in as a customer to place a booking.', 'info');
      openAuthModal('login');
      return;
    }
    if (currentUser.role !== 'customer') {
      showToast('Switch to a Customer account to place service bookings.', 'info');
      return;
    }
    const pro = state.professionals.find((p) => p.id === proId);
    if (!pro) return;

    const todayStr = new Date().toISOString().split('T')[0];
    let selectedSlot = '';
    let problemImageData = '';

    const renderForm = () => {
      const selectedDateVal = document.getElementById('bk-date')?.value || todayStr;
      const taken = new Set(
        state.bookings
          .filter((b) => b.professionalId === pro.id && b.scheduledDate === selectedDateVal && b.status !== 'Cancelled')
          .map((b) => b.timeSlot)
      );
      return `
        <form id="booking-form">
          <div class="form-field">
            <label>1. Select Service Package</label>
            <select id="bk-service">
              ${pro.services
                .map(
                  (s) =>
                    `<option value="${s.id}" ${s.id === serviceId ? 'selected' : ''}>${escapeHtml(s.title)} — $${s.price} (${s.durationMinutes} mins)</option>`
                )
                .join('')}
            </select>
          </div>
          <div class="form-field">
            <label>2. Problem Description</label>
            <textarea id="bk-desc" rows="3" required placeholder="Describe the issue clearly..."></textarea>
          </div>
          <div class="form-field">
            <label>Optional Problem Photo</label>
            <input type="file" id="bk-photo" accept="image/*" />
            <div id="bk-photo-preview"></div>
          </div>
          <div class="form-grid">
            <div class="form-field">
              <label>3. Date (Future dates only)</label>
              <input type="date" id="bk-date" min="${todayStr}" value="${selectedDateVal}" required />
            </div>
            <div class="form-field">
              <label>Locality</label>
              <input type="text" id="bk-locality" value="${escapeHtml(currentUser.locality || pro.localities[0])}" required />
            </div>
          </div>
          <div class="form-field">
            <label>4. Available Time Slot</label>
            <div class="slots-grid" id="bk-slots">
              ${TIME_SLOTS.map((slot) => {
                const isTaken = taken.has(slot);
                return `<button type="button" class="slot-btn ${selectedSlot === slot ? 'active' : ''}" ${isTaken ? 'disabled' : ''} data-slot="${slot}">${slot}</button>`;
              }).join('')}
            </div>
          </div>
          <div class="form-field">
            <label>5. Full Service Address</label>
            <input type="text" id="bk-address" value="${escapeHtml(currentUser.address)}" required />
          </div>
          <div class="form-field">
            <label>6. Simulated Payment Method (Prototype Demo)</label>
            <select id="bk-payment">
              <option value="Simulated UPI">Simulated UPI</option>
              <option value="Simulated Card">Simulated Card</option>
              <option value="Pay After Service (Demo)">Pay After Service (Demo)</option>
            </select>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; padding-top:12px; border-top:1px solid #e2e8f0;">
            <div>
              <span class="muted-label">Estimated Total: </span>
              <strong id="bk-total" class="tabular-nums">$${pro.services[0]?.price || pro.startingPrice}</strong>
            </div>
            <button type="submit" class="btn btn-primary">Confirm Booking</button>
          </div>
        </form>
      `;
    };

    openModal(`Book ${pro.fullName} · ${pro.categoryName}`, renderForm());

    const bindSlotHandlers = () => {
      document.querySelectorAll('[data-slot]').forEach((btn) => {
        btn.onclick = () => {
          selectedSlot = btn.getAttribute('data-slot');
          document.querySelectorAll('[data-slot]').forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
        };
      });
    };
    bindSlotHandlers();

    document.getElementById('bk-service').onchange = (e) => {
      const srv = pro.services.find((s) => s.id === e.target.value);
      document.getElementById('bk-total').textContent = `$${srv ? srv.price : pro.startingPrice}`;
    };

    document.getElementById('bk-date').onchange = (e) => {
      selectedSlot = '';
      const d = e.target.value;
      const taken = new Set(
        state.bookings
          .filter((b) => b.professionalId === pro.id && b.scheduledDate === d && b.status !== 'Cancelled')
          .map((b) => b.timeSlot)
      );
      document.getElementById('bk-slots').innerHTML = TIME_SLOTS.map((slot) => {
        const isTaken = taken.has(slot);
        return `<button type="button" class="slot-btn" ${isTaken ? 'disabled' : ''} data-slot="${slot}">${slot}</button>`;
      }).join('');
      bindSlotHandlers();
    };

    document.getElementById('bk-photo').onchange = (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        problemImageData = reader.result;
        document.getElementById('bk-photo-preview').innerHTML = `<img src="${problemImageData}" alt="Preview" style="width:72px;height:72px;object-fit:cover;border-radius:8px;margin-top:6px;" />`;
      };
      reader.readAsDataURL(file);
    };

    document.getElementById('booking-form').onsubmit = (e) => {
      e.preventDefault();
      const dateVal = document.getElementById('bk-date').value;
      if (dateVal < todayStr) {
        showToast('Cannot select a past date.', 'error');
        return;
      }
      if (!selectedSlot) {
        showToast('Please select an available time slot.', 'error');
        return;
      }
      const srvId = document.getElementById('bk-service').value;
      const srv = pro.services.find((s) => s.id === srvId) || pro.services[0];
      const bookingCode = `FM-${Math.floor(100000 + Math.random() * 900000)}`;
      const booking = {
        id: `bkg-${Date.now()}`,
        bookingCode,
        customerId: currentUser.id,
        customerName: currentUser.fullName,
        customerPhone: currentUser.phone,
        professionalId: pro.id,
        professionalName: pro.fullName,
        categoryName: pro.categoryName,
        serviceId: srv.id,
        serviceTitle: srv.title,
        problemDescription: document.getElementById('bk-desc').value.trim(),
        problemImageUrl: problemImageData || undefined,
        scheduledDate: dateVal,
        timeSlot: selectedSlot,
        serviceAddress: document.getElementById('bk-address').value.trim(),
        locality: document.getElementById('bk-locality').value.trim(),
        estimatedTotal: srv.price,
        status: 'Pending',
        paymentMethod: document.getElementById('bk-payment').value,
        createdAt: new Date().toISOString(),
      };
      state.bookings.unshift(booking);
      state.notifications.unshift(
        {
          id: `n-${Date.now()}-c`,
          userId: currentUser.id,
          title: `Booking Confirmed (${bookingCode})`,
          message: `Request sent to ${pro.fullName} for ${dateVal} (${selectedSlot}).`,
          isRead: false,
          createdAt: new Date().toISOString(),
        },
        {
          id: `n-${Date.now()}-p`,
          userId: pro.userId,
          title: `New Job Request (${bookingCode})`,
          message: `${currentUser.fullName} requested ${srv.title} in ${booking.locality}.`,
          isRead: false,
          createdAt: new Date().toISOString(),
        }
      );
      state.activities.unshift({
        actor: currentUser.fullName,
        action: `Booked ${bookingCode}`,
        target: `${pro.fullName} (${pro.categoryName})`,
        createdAt: new Date().toISOString(),
      });
      saveState();
      showToast(`Booking ${bookingCode} confirmed!`);

      openModal(
        `Booking Confirmed (${bookingCode})`,
        `
        <div style="display:flex; flex-direction:column; gap:14px;">
          <div style="background:#ecfdf5; border:1px solid #a7f3d0; padding:14px; border-radius:12px;">
            <strong style="color:#065f46;">Sent to ${escapeHtml(pro.fullName)}</strong>
            <p style="font-size:0.84rem; color:#047857; margin-top:4px;">Status: Pending acceptance. Track updates in your Customer Dashboard.</p>
          </div>
          <p style="font-size:0.88rem;"><strong>Booking ID:</strong> <span class="tabular-nums">${bookingCode}</span></p>
          <p style="font-size:0.88rem;"><strong>Service:</strong> ${escapeHtml(booking.serviceTitle)} ($${booking.estimatedTotal})</p>
          <p style="font-size:0.88rem;"><strong>Schedule:</strong> ${booking.scheduledDate} · ${booking.timeSlot}</p>
          <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:8px;">
            <button type="button" class="btn btn-outline" id="bk-done-close">Close</button>
            <button type="button" class="btn btn-primary" id="bk-done-dash">Open Customer Dashboard</button>
          </div>
        </div>
      `
      );
      document.getElementById('bk-done-close').onclick = closeModal;
      document.getElementById('bk-done-dash').onclick = () => {
        closeModal();
        setView('customer');
      };
    };
  }

  // ==================== AUTH MODAL ====================
  function openAuthModal(mode = 'login') {
    const activeCats = state.categories.filter((c) => c.isActive);
    const html = `
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; background:#f1f5f9; padding:4px; border-radius:12px; margin-bottom:16px;">
        <button type="button" class="seg-btn ${mode === 'login' ? 'active' : ''}" data-auth-mode="login">Login</button>
        <button type="button" class="seg-btn ${mode === 'register-customer' ? 'active' : ''}" data-auth-mode="register-customer">Customer</button>
        <button type="button" class="seg-btn ${mode === 'register-pro' ? 'active' : ''}" data-auth-mode="register-pro">Pro Onboarding</button>
      </div>

      ${
        mode === 'login'
          ? `
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:12px; margin-bottom:16px;">
          <p style="font-size:0.75rem; font-weight:700; color:#475569; margin-bottom:8px;">1-Click Demo Role Access</p>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px;">
            <button type="button" class="btn btn-outline btn-sm" data-demo-role="customer">Customer</button>
            <button type="button" class="btn btn-outline btn-sm" data-demo-role="professional">Professional</button>
            <button type="button" class="btn btn-outline btn-sm" data-demo-role="admin">Admin</button>
          </div>
        </div>
      `
          : ''
      }

      <form id="auth-form">
        ${
          mode === 'register-customer' || mode === 'register-pro'
            ? `
          <div class="form-grid">
            <div class="form-field"><label>Full Name</label><input type="text" id="a-name" required placeholder="Riya Sharma" /></div>
            <div class="form-field"><label>Phone</label><input type="tel" id="a-phone" required placeholder="+91 98450 00000" /></div>
          </div>
        `
            : ''
        }
        <div class="form-field"><label>Email Address</label><input type="email" id="a-email" required placeholder="name@example.com" /></div>
        <div class="form-field"><label>${mode === 'reset' ? 'New Password' : 'Password'}</label><input type="password" id="a-pass" required minlength="6" placeholder="Min 6 characters" /></div>
        ${
          mode === 'register-customer' || mode === 'register-pro'
            ? `
          <div class="form-grid">
            <div class="form-field"><label>City</label><input type="text" id="a-city" value="Bengaluru" required /></div>
            <div class="form-field"><label>Locality</label><input type="text" id="a-loc" value="Indiranagar" required /></div>
          </div>
        `
            : ''
        }
        ${
          mode === 'register-pro'
            ? `
          <div class="form-grid">
            <div class="form-field">
              <label>Trade Category</label>
              <select id="a-cat">${activeCats.map((c) => `<option value="${c.slug}">${escapeHtml(c.name)}</option>`).join('')}</select>
            </div>
            <div class="form-field"><label>Starting Price ($)</label><input type="number" id="a-price" value="30" min="10" required /></div>
          </div>
          <div class="form-field"><label>Headline</label><input type="text" id="a-headline" required placeholder="Certified Residential Technician" /></div>
        `
            : ''
        }
        <button type="submit" class="btn btn-primary" style="width:100%;">
          ${mode === 'login' ? 'Sign In' : mode === 'reset' ? 'Update Password' : mode === 'register-pro' ? 'Complete Pro Onboarding' : 'Create Account'}
        </button>
        ${
          mode === 'login'
            ? `<p style="text-align:center; margin-top:10px;"><button type="button" class="btn-text" id="btn-forgot-pw" style="font-size:0.78rem;">Forgot password? Reset demo password</button></p>`
            : ''
        }
      </form>
    `;

    openModal(
      mode === 'login'
        ? 'Sign In to FixMate'
        : mode === 'register-pro'
        ? 'Join as a FixMate Professional'
        : mode === 'reset'
        ? 'Reset Password'
        : 'Create Customer Account',
      html
    );

    document.querySelectorAll('[data-auth-mode]').forEach((b) => {
      b.onclick = () => openAuthModal(b.getAttribute('data-auth-mode'));
    });
    const forgotBtn = document.getElementById('btn-forgot-pw');
    if (forgotBtn) forgotBtn.onclick = () => openAuthModal('reset');

    document.querySelectorAll('[data-demo-role]').forEach((b) => {
      b.onclick = () => {
        const role = b.getAttribute('data-demo-role');
        const user = state.users.find((u) => u.role === role);
        if (!user || user.accountStatus === 'suspended') {
          showToast('Demo account is currently suspended.', 'error');
          return;
        }
        loginSuccess(user);
      };
    });

    document.getElementById('auth-form').onsubmit = (e) => {
      e.preventDefault();
      const email = document.getElementById('a-email').value.trim().toLowerCase();
      const pass = document.getElementById('a-pass').value;

      if (mode === 'login') {
        const u = state.users.find((x) => x.email.toLowerCase() === email);
        if (!u || u.password !== pass) {
          showToast('Invalid email or password.', 'error');
          return;
        }
        if (u.accountStatus === 'suspended') {
          showToast('Account suspended by administrator.', 'error');
          return;
        }
        loginSuccess(u);
      } else if (mode === 'reset') {
        const u = state.users.find((x) => x.email.toLowerCase() === email);
        if (!u) {
          showToast('Email not found.', 'error');
          return;
        }
        u.password = pass;
        saveState();
        showToast('Password updated. You may now log in.');
        openAuthModal('login');
      } else {
        if (state.users.some((x) => x.email.toLowerCase() === email)) {
          showToast('Email already registered.', 'error');
          return;
        }
        const newUser = {
          id: `user-${Date.now()}`,
          email,
          password: pass,
          fullName: document.getElementById('a-name').value.trim(),
          phone: document.getElementById('a-phone').value.trim(),
          role: mode === 'register-pro' ? 'professional' : 'customer',
          accountStatus: 'active',
          city: document.getElementById('a-city').value.trim(),
          locality: document.getElementById('a-loc').value.trim(),
          address: `${document.getElementById('a-loc').value.trim()}, ${document.getElementById('a-city').value.trim()}`,
        };
        state.users.push(newUser);
        if (newUser.role === 'professional') {
          const catSlug = document.getElementById('a-cat').value;
          const cat = state.categories.find((c) => c.slug === catSlug) || state.categories[0];
          const price = Number(document.getElementById('a-price').value) || 30;
          const proId = `pro-${Date.now()}`;
          state.professionals.push({
            id: proId,
            userId: newUser.id,
            fullName: newUser.fullName,
            categorySlug: cat.slug,
            categoryName: cat.name,
            headline: document.getElementById('a-headline').value.trim(),
            bio: `Skilled ${cat.name.toLowerCase()} serving ${newUser.locality}.`,
            experienceYears: 3,
            city: newUser.city,
            localities: [newUser.locality],
            distanceKm: 2.2,
            skills: [cat.name, 'Diagnostics'],
            workingHours: '09:00 AM - 07:00 PM',
            isAvailable: true,
            emergencyAvailable: false,
            startingPrice: price,
            verificationStatus: 'pending',
            ratingAvg: 4.8,
            reviewCount: 0,
            completedJobsCount: 0,
            portfolioUrls: [],
            services: [
              { id: `srv-${Date.now()}`, title: `${cat.name} Standard Service`, description: 'Initial diagnostic & standard repair.', price, durationMinutes: 60 },
            ],
            demoMonthlyEarnings: [
              { month: 'Jun', amount: 0 }, { month: 'Jul', amount: 0 }, { month: 'Aug', amount: 0 },
              { month: 'Sep', amount: 0 }, { month: 'Oct', amount: 0 }, { month: 'Nov', amount: 0 },
            ],
          });
          state.verificationRequests.unshift({
            id: `ver-${Date.now()}`,
            professionalId: proId,
            professionalName: newUser.fullName,
            categoryName: cat.name,
            documentType: 'Onboarding Trade License',
            licenseNumber: `FM-${Math.floor(1000 + Math.random() * 9000)}`,
            notes: 'Submitted during onboarding.',
            status: 'pending',
          });
        }
        saveState();
        loginSuccess(newUser);
      }
    };
  }

  function loginSuccess(user) {
    currentUser = user;
    localStorage.setItem(SESSION_KEY, JSON.stringify({ id: user.id }));
    closeModal();
    showToast(`Signed in as ${user.fullName}`);
    if (user.role === 'professional') setView('pro');
    else if (user.role === 'admin') setView('admin');
    else updateHeader();
  }

  function logout() {
    currentUser = null;
    localStorage.removeItem(SESSION_KEY);
    showToast('Signed out.', 'info');
    setView('landing');
  }

  // ==================== CUSTOMER DASHBOARD ====================
  function renderCustomerDashboard() {
    const root = document.getElementById('customer-dashboard-content');
    if (!currentUser || currentUser.role !== 'customer') return;

    const myBookings = state.bookings.filter((b) => b.customerId === currentUser.id);
    const upcoming = myBookings.filter((b) => ['Pending', 'Accepted', 'In Progress'].includes(b.status));
    const completed = myBookings.filter((b) => b.status === 'Completed');
    const favPros = state.professionals.filter((p) =>
      state.favorites.some((f) => f.customerId === currentUser.id && f.professionalId === p.id)
    );
    const myReviews = state.reviews.filter((r) => r.customerId === currentUser.id);
    const myNotifs = state.notifications.filter((n) => n.userId === currentUser.id);
    const unread = myNotifs.filter((n) => !n.isRead).length;

    const filteredBookings = myBookings.filter((b) => {
      if (bookingFilter === 'upcoming') return ['Pending', 'Accepted', 'In Progress'].includes(b.status);
      if (bookingFilter === 'completed') return b.status === 'Completed';
      if (bookingFilter === 'cancelled') return b.status === 'Cancelled';
      return true;
    });

    let bodyHtml = '';
    if (customerTab === 'overview') {
      const bars = [
        { m: 'Jul', v: 30 },
        { m: 'Aug', v: 55 },
        { m: 'Sep', v: 40 },
        { m: 'Oct', v: 80 },
        { m: 'Nov', v: Math.min(100, myBookings.length * 22) },
      ];
      bodyHtml = `
        <div class="card-panel">
          <h2>Welcome back, ${escapeHtml(currentUser.fullName.split(' ')[0])}</h2>
          <p class="muted-label" style="margin-top:4px;">Service Locality: ${escapeHtml(currentUser.locality)}, ${escapeHtml(currentUser.city)}</p>
        </div>
        <div class="kpi-grid">
          <div class="kpi-card"><span>Upcoming</span><strong class="tabular-nums">${upcoming.length}</strong></div>
          <div class="kpi-card"><span>Completed</span><strong class="tabular-nums">${completed.length}</strong></div>
          <div class="kpi-card"><span>Saved Pros</span><strong class="tabular-nums">${favPros.length}</strong></div>
          <div class="kpi-card"><span>Unread Alerts</span><strong class="tabular-nums">${unread}</strong></div>
        </div>
        <div class="card-panel">
          <h3>Home Maintenance Activity (Demo)</h3>
          <div class="bar-chart">
            ${bars.map((b) => `<div class="bar-col"><div class="bar-fill" style="height:${b.v}%"></div><span class="bar-label">${b.m}</span></div>`).join('')}
          </div>
        </div>
      `;
    } else if (customerTab === 'bookings') {
      const steps = ['Pending', 'Accepted', 'In Progress', 'Completed'];
      bodyHtml = `
        <div class="card-panel">
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:12px; margin-bottom:16px;">
            <h2>My Bookings</h2>
            <div style="display:flex; gap:6px;">
              ${['all', 'upcoming', 'completed', 'cancelled']
                .map((f) => `<button type="button" class="seg-btn ${bookingFilter === f ? 'active' : ''}" data-c-bfilter="${f}">${f}</button>`)
                .join('')}
            </div>
          </div>
          <div class="list-divide">
            ${
              filteredBookings.length === 0
                ? '<p class="muted-label">No bookings match this filter.</p>'
                : filteredBookings
                    .map((b) => {
                      const reviewed = state.reviews.some((r) => r.bookingId === b.id);
                      const idx = steps.indexOf(b.status);
                      return `
                        <div>
                          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; gap:12px;">
                            <div>
                              <span class="mono-sub" style="display:inline;color:#2563eb;font-weight:700;">${b.bookingCode}</span> ·
                              <strong>${escapeHtml(b.status)}</strong> ·
                              <span class="muted-label tabular-nums">${b.scheduledDate} (${b.timeSlot})</span>
                              <h4 style="margin-top:4px;">${escapeHtml(b.serviceTitle)}</h4>
                              <p class="muted-label">${escapeHtml(b.professionalName)} (${escapeHtml(b.categoryName)}) · $${b.estimatedTotal}</p>
                            </div>
                            <div style="display:flex; gap:8px; align-items:center;">
                              ${['Pending', 'Accepted'].includes(b.status) ? `<button type="button" class="btn btn-danger-outline btn-sm" data-c-cancel="${b.id}">Cancel</button>` : ''}
                              ${b.status === 'Completed' && !reviewed ? `<button type="button" class="btn btn-primary btn-sm" data-c-review="${b.id}">Write Review</button>` : ''}
                            </div>
                          </div>
                          ${
                            b.status !== 'Cancelled'
                              ? `<div class="stepper">${steps.map((s, i) => `<div><div class="step-bar ${idx >= i ? 'done' : ''}"></div><div class="step-txt ${idx >= i ? 'done' : ''}">${s}</div></div>`).join('')}</div>`
                              : ''
                          }
                        </div>
                      `;
                    })
                    .join('')
            }
          </div>
        </div>
      `;
    } else if (customerTab === 'saved') {
      bodyHtml = `
        <div class="card-panel">
          <h2 style="margin-bottom:14px;">Saved Professionals</h2>
          ${
            favPros.length === 0
              ? '<p class="muted-label">No saved professionals yet.</p>'
              : `<div class="list-divide">${favPros
                  .map(
                    (p) => `
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div><strong>${escapeHtml(p.fullName)}</strong><p class="muted-label">${escapeHtml(p.categoryName)} · ${p.ratingAvg.toFixed(1)} ★ · $${p.startingPrice}</p></div>
                    <div style="display:flex; gap:8px;">
                      <button type="button" class="btn btn-outline btn-sm" data-open-pro="${p.id}">Profile</button>
                      <button type="button" class="btn btn-primary btn-sm" data-book-pro="${p.id}">Book</button>
                    </div>
                  </div>
                `
                  )
                  .join('')}</div>`
          }
        </div>
      `;
    } else if (customerTab === 'reviews') {
      bodyHtml = `
        <div class="card-panel">
          <h2 style="margin-bottom:14px;">My Submitted Reviews</h2>
          <div class="list-divide">
            ${myReviews.length === 0 ? '<p class="muted-label">No reviews submitted yet.</p>' : myReviews.map((r) => `<div><strong>${escapeHtml(r.professionalName)}</strong> <span class="rating-amber">${r.rating}.0 ★</span><p style="font-size:0.86rem;color:#475569;margin-top:4px;">${escapeHtml(r.comment)}</p></div>`).join('')}
          </div>
        </div>
      `;
    } else if (customerTab === 'notifications') {
      bodyHtml = `
        <div class="card-panel">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
            <h2>Notifications</h2>
            ${unread > 0 ? '<button type="button" class="btn btn-outline btn-sm" id="c-read-all">Mark All Read</button>' : ''}
          </div>
          <div class="list-divide">
            ${myNotifs.length === 0 ? '<p class="muted-label">No notifications.</p>' : myNotifs.map((n) => `<div><strong>${escapeHtml(n.title)}</strong><p class="muted-label">${escapeHtml(n.message)}</p></div>`).join('')}
          </div>
        </div>
      `;
    } else if (customerTab === 'settings') {
      bodyHtml = `
        <div class="card-panel">
          <h2 style="margin-bottom:14px;">Account Settings</h2>
          <form id="c-settings-form">
            <div class="form-grid">
              <div class="form-field"><label>Full Name</label><input type="text" id="cs-name" value="${escapeHtml(currentUser.fullName)}" required /></div>
              <div class="form-field"><label>Phone</label><input type="text" id="cs-phone" value="${escapeHtml(currentUser.phone)}" required /></div>
              <div class="form-field"><label>City</label><input type="text" id="cs-city" value="${escapeHtml(currentUser.city)}" required /></div>
              <div class="form-field"><label>Locality</label><input type="text" id="cs-loc" value="${escapeHtml(currentUser.locality)}" required /></div>
            </div>
            <div class="form-field"><label>Default Address</label><input type="text" id="cs-addr" value="${escapeHtml(currentUser.address)}" required /></div>
            <button type="submit" class="btn btn-primary">Save Settings</button>
          </form>
        </div>
      `;
    }

    root.innerHTML = `
      <div class="dashboard-layout">
        <aside class="dash-sidebar">
          <div class="card-panel">
            <strong>${escapeHtml(currentUser.fullName)}</strong>
            <p class="muted-label">Customer · ${escapeHtml(currentUser.locality)}</p>
            <button type="button" class="btn btn-primary btn-sm" style="width:100%; margin-top:12px;" data-nav="explore">Book New Service</button>
          </div>
          <nav class="dash-nav">
            ${[
              ['overview', 'Overview'],
              ['bookings', 'My Bookings'],
              ['saved', 'Saved Pros'],
              ['reviews', 'My Reviews'],
              ['notifications', `Alerts (${unread})`],
              ['settings', 'Account Settings'],
            ]
              .map(([id, lbl]) => `<button type="button" class="dash-nav-btn ${customerTab === id ? 'active' : ''}" data-ctab="${id}">${lbl}</button>`)
              .join('')}
          </nav>
        </aside>
        <div class="dash-main">${bodyHtml}</div>
      </div>
    `;

    document.querySelectorAll('[data-ctab]').forEach((b) => {
      b.onclick = () => {
        customerTab = b.getAttribute('data-ctab');
        renderCustomerDashboard();
      };
    });
    document.querySelectorAll('[data-c-bfilter]').forEach((b) => {
      b.onclick = () => {
        bookingFilter = b.getAttribute('data-c-bfilter');
        renderCustomerDashboard();
      };
    });
    document.querySelectorAll('[data-c-cancel]').forEach((b) => {
      b.onclick = () => {
        const bkg = state.bookings.find((x) => x.id === b.getAttribute('data-c-cancel'));
        if (bkg) {
          bkg.status = 'Cancelled';
          saveState();
          showToast('Booking cancelled.');
          renderCustomerDashboard();
        }
      };
    });
    document.querySelectorAll('[data-c-review]').forEach((b) => {
      b.onclick = () => {
        const bkg = state.bookings.find((x) => x.id === b.getAttribute('data-c-review'));
        if (!bkg) return;
        openModal(
          `Review ${bkg.professionalName}`,
          `<form id="rev-form">
            <div class="form-field"><label>Rating (1–5)</label><select id="rv-stars"><option value="5">5 ★ Excellent</option><option value="4">4 ★ Good</option><option value="3">3 ★ Average</option><option value="2">2 ★ Fair</option><option value="1">1 ★ Poor</option></select></div>
            <div class="form-field"><label>Comment</label><textarea id="rv-text" rows="3" required placeholder="Share your experience..."></textarea></div>
            <button type="submit" class="btn btn-primary">Publish Verified Review</button>
          </form>`
        );
        document.getElementById('rev-form').onsubmit = (e) => {
          e.preventDefault();
          state.reviews.unshift({
            id: `rev-${Date.now()}`,
            bookingId: bkg.id,
            customerId: currentUser.id,
            customerName: currentUser.fullName,
            professionalId: bkg.professionalId,
            professionalName: bkg.professionalName,
            rating: Number(document.getElementById('rv-stars').value),
            comment: document.getElementById('rv-text').value.trim(),
            isHidden: false,
            createdAt: new Date().toISOString(),
          });
          recalcRating(bkg.professionalId);
          saveState();
          closeModal();
          showToast('Verified review published!');
          renderCustomerDashboard();
        };
      };
    });

    const readBtn = document.getElementById('c-read-all');
    if (readBtn) {
      readBtn.onclick = () => {
        state.notifications.forEach((n) => {
          if (n.userId === currentUser.id) n.isRead = true;
        });
        saveState();
        renderCustomerDashboard();
      };
    }

    const setForm = document.getElementById('c-settings-form');
    if (setForm) {
      setForm.onsubmit = (e) => {
        e.preventDefault();
        const u = state.users.find((x) => x.id === currentUser.id);
        u.fullName = document.getElementById('cs-name').value.trim();
        u.phone = document.getElementById('cs-phone').value.trim();
        u.city = document.getElementById('cs-city').value.trim();
        u.locality = document.getElementById('cs-loc').value.trim();
        u.address = document.getElementById('cs-addr').value.trim();
        currentUser = u;
        saveState();
        showToast('Settings saved.');
        renderCustomerDashboard();
      };
    }

    root.querySelectorAll('[data-open-pro]').forEach((b) => {
      b.onclick = () => {
        selectedProId = b.getAttribute('data-open-pro');
        setView('profile');
      };
    });
    root.querySelectorAll('[data-book-pro]').forEach((b) => {
      b.onclick = () => openBookingModal(b.getAttribute('data-book-pro'));
    });
    root.querySelectorAll('[data-nav="explore"]').forEach((b) => {
      b.onclick = () => setView('explore');
    });
  }

  // ==================== PROFESSIONAL DASHBOARD ====================
  function renderProDashboard() {
    const root = document.getElementById('pro-dashboard-content');
    const pro = state.professionals.find((p) => p.userId === currentUser?.id);
    if (!currentUser || currentUser.role !== 'professional' || !pro) return;

    const myBookings = state.bookings.filter((b) => b.professionalId === pro.id);
    const pending = myBookings.filter((b) => b.status === 'Pending');
    const active = myBookings.filter((b) => ['Accepted', 'In Progress'].includes(b.status));
    const maxEarn = Math.max(1, ...pro.demoMonthlyEarnings.map((m) => m.amount));
    const totalEarn = pro.demoMonthlyEarnings.reduce((a, m) => a + m.amount, 0);
    const reviews = state.reviews.filter((r) => r.professionalId === pro.id && !r.isHidden);

    let bodyHtml = '';
    if (proTab === 'overview') {
      bodyHtml = `
        <div class="kpi-grid">
          <div class="kpi-card"><span>Pending</span><strong class="tabular-nums">${pending.length}</strong></div>
          <div class="kpi-card"><span>Active Jobs</span><strong class="tabular-nums">${active.length}</strong></div>
          <div class="kpi-card"><span>Completed (Demo)</span><strong class="tabular-nums">${pro.completedJobsCount}</strong></div>
          <div class="kpi-card"><span>Rating</span><strong class="tabular-nums">${pro.ratingAvg.toFixed(1)} ★</strong></div>
        </div>
        <div class="card-panel">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div><h3>Earnings Overview (Demo Data)</h3><p class="muted-label">Simulated 6-month payout trend</p></div>
            <strong class="tabular-nums" style="font-size:1.3rem;">$${totalEarn.toLocaleString()}</strong>
          </div>
          <div class="bar-chart">
            ${pro.demoMonthlyEarnings
              .map((m) => `<div class="bar-col"><span class="mono-sub">$${m.amount}</span><div class="bar-fill" style="height:${Math.max(8, Math.round((m.amount / maxEarn) * 100))}%"></div><span class="bar-label">${m.month}</span></div>`)
              .join('')}
          </div>
        </div>
      `;
    } else if (proTab === 'bookings') {
      bodyHtml = `
        <div class="card-panel">
          <h2 style="margin-bottom:14px;">Customer Booking Queue</h2>
          <div class="list-divide">
            ${
              myBookings.length === 0
                ? '<p class="muted-label">No bookings assigned yet.</p>'
                : myBookings
                    .map(
                      (b) => `
                  <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:12px;">
                    <div>
                      <span class="mono-sub" style="display:inline;color:#2563eb;font-weight:700;">${b.bookingCode}</span> ·
                      <strong>${escapeHtml(b.status)}</strong> · <span class="muted-label">${b.scheduledDate} (${b.timeSlot})</span>
                      <h4 style="margin-top:4px;">${escapeHtml(b.serviceTitle)} ($${b.estimatedTotal})</h4>
                      <p class="muted-label">${escapeHtml(b.customerName)} · ${escapeHtml(b.serviceAddress)}</p>
                    </div>
                    <div style="display:flex; gap:8px;">
                      ${b.status === 'Pending' ? `<button type="button" class="btn btn-primary btn-sm" data-p-status="${b.id}|Accepted">Accept</button><button type="button" class="btn btn-danger-outline btn-sm" data-p-status="${b.id}|Cancelled">Reject</button>` : ''}
                      ${b.status === 'Accepted' ? `<button type="button" class="btn btn-navy btn-sm" data-p-status="${b.id}|In Progress">Start Job</button>` : ''}
                      ${b.status === 'In Progress' ? `<button type="button" class="btn btn-primary btn-sm" data-p-status="${b.id}|Completed">Mark Completed</button>` : ''}
                    </div>
                  </div>
                `
                    )
                    .join('')
            }
          </div>
        </div>
      `;
    } else if (proTab === 'services') {
      bodyHtml = `
        <div class="card-panel">
          <h2 style="margin-bottom:12px;">Add Service Rate Card Item</h2>
          <form id="p-add-srv" class="form-grid">
            <div class="form-field"><label>Title</label><input type="text" id="ps-title" required placeholder="Ceiling Fan Installation" /></div>
            <div class="form-field"><label>Price ($)</label><input type="number" id="ps-price" value="35" min="10" required /></div>
            <div class="form-field" style="grid-column:1/-1;"><label>Description</label><input type="text" id="ps-desc" placeholder="Scope summary" /></div>
            <button type="submit" class="btn btn-primary" style="width:max-content;">Add Service</button>
          </form>
        </div>
        <div class="card-panel">
          <h2 style="margin-bottom:12px;">Active Services (${pro.services.length})</h2>
          <div class="list-divide">
            ${pro.services
              .map(
                (s) => `
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div><strong>${escapeHtml(s.title)}</strong><p class="muted-label">${escapeHtml(s.description)}</p></div>
                <div style="display:flex; align-items:center; gap:12px;">
                  <strong class="tabular-nums">$${s.price}</strong>
                  <button type="button" class="btn btn-danger-outline btn-sm" data-p-delsrv="${s.id}">Delete</button>
                </div>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      `;
    } else if (proTab === 'availability') {
      bodyHtml = `
        <div class="card-panel">
          <h2 style="margin-bottom:14px;">Profile &amp; Working Hours</h2>
          <form id="p-edit-prof">
            <div class="form-field"><label>Headline</label><input type="text" id="pe-head" value="${escapeHtml(pro.headline)}" required /></div>
            <div class="form-field"><label>Bio</label><textarea id="pe-bio" rows="3" required>${escapeHtml(pro.bio)}</textarea></div>
            <div class="form-grid">
              <div class="form-field"><label>Working Hours</label><input type="text" id="pe-hours" value="${escapeHtml(pro.workingHours)}" required /></div>
              <div class="form-field"><label>Localities (comma-separated)</label><input type="text" id="pe-locs" value="${escapeHtml(pro.localities.join(', '))}" required /></div>
            </div>
            <button type="submit" class="btn btn-primary">Save Updates</button>
          </form>
        </div>
      `;
    } else if (proTab === 'reviews') {
      bodyHtml = `
        <div class="card-panel">
          <h2 style="margin-bottom:12px;">Customer Reviews Received</h2>
          <div class="list-divide">
            ${reviews.length === 0 ? '<p class="muted-label">No reviews yet.</p>' : reviews.map((r) => `<div><strong>${escapeHtml(r.customerName)}</strong> <span class="rating-amber">${r.rating}.0 ★</span><p style="font-size:0.86rem;color:#475569;margin-top:4px;">${escapeHtml(r.comment)}</p></div>`).join('')}
          </div>
        </div>
      `;
    }

    const verifyBanner =
      pro.verificationStatus !== 'verified'
        ? `<div class="card-panel" style="border-color:#fde68a;">
            <strong>Verification Status: <span style="color:#b45309; text-transform:uppercase;">${escapeHtml(pro.verificationStatus)}</span></strong>
            <p class="muted-label" style="margin:6px 0 10px;">${pro.verificationStatus === 'pending' ? 'Credentials are awaiting Admin review.' : 'Submit your trade license number for Admin approval.'}</p>
            ${
              pro.verificationStatus !== 'pending'
                ? `<form id="p-ver-form" style="display:flex; gap:10px; flex-wrap:wrap;">
                    <input type="text" id="pv-lic" required placeholder="License / ID Number" style="padding:8px 12px;border:1px solid #e2e8f0;border-radius:8px;" />
                    <button type="submit" class="btn btn-primary btn-sm">Submit Verification</button>
                  </form>`
                : ''
            }
          </div>`
        : '';

    root.innerHTML = `
      <div class="dashboard-layout">
        <aside class="dash-sidebar">
          <div class="card-panel" style="display:flex; flex-direction:column; gap:10px;">
            <div>
              <strong>${escapeHtml(pro.fullName)}</strong> ${pro.verificationStatus === 'verified' ? '<span class="verified-mark">✓</span>' : ''}
              <p class="muted-label">${escapeHtml(pro.categoryName)}</p>
            </div>
            <button type="button" class="btn btn-outline btn-sm" id="p-toggle-avail">Status: ${pro.isAvailable ? 'Available' : 'Paused'}</button>
            <button type="button" class="btn btn-outline btn-sm" id="p-toggle-emerg">Emergency: ${pro.emergencyAvailable ? 'Enabled' : 'Disabled'}</button>
          </div>
          <nav class="dash-nav">
            ${[
              ['overview', 'Earnings & Overview'],
              ['bookings', `Job Requests (${pending.length})`],
              ['services', 'Services & Pricing'],
              ['availability', 'Profile & Hours'],
              ['reviews', 'Customer Reviews'],
            ]
              .map(([id, lbl]) => `<button type="button" class="dash-nav-btn ${proTab === id ? 'active' : ''}" data-ptab="${id}">${lbl}</button>`)
              .join('')}
          </nav>
        </aside>
        <div class="dash-main">${verifyBanner}${bodyHtml}</div>
      </div>
    `;

    document.querySelectorAll('[data-ptab]').forEach((b) => {
      b.onclick = () => {
        proTab = b.getAttribute('data-ptab');
        renderProDashboard();
      };
    });
    document.getElementById('p-toggle-avail').onclick = () => {
      pro.isAvailable = !pro.isAvailable;
      saveState();
      renderProDashboard();
      showToast('Availability updated.');
    };
    document.getElementById('p-toggle-emerg').onclick = () => {
      pro.emergencyAvailable = !pro.emergencyAvailable;
      saveState();
      renderProDashboard();
      showToast('Emergency dispatch updated.');
    };

    document.querySelectorAll('[data-p-status]').forEach((b) => {
      b.onclick = () => {
        const [id, nextStatus] = b.getAttribute('data-p-status').split('|');
        const bkg = state.bookings.find((x) => x.id === id);
        if (!bkg) return;
        bkg.status = nextStatus;
        if (nextStatus === 'Completed') {
          pro.completedJobsCount += 1;
          pro.demoMonthlyEarnings[pro.demoMonthlyEarnings.length - 1].amount += bkg.estimatedTotal;
        }
        state.notifications.unshift({
          id: `n-${Date.now()}`,
          userId: bkg.customerId,
          title: `Booking ${nextStatus} (${bkg.bookingCode})`,
          message: `${pro.fullName} updated your booking to ${nextStatus}.`,
          isRead: false,
          createdAt: new Date().toISOString(),
        });
        saveState();
        showToast(`Booking marked ${nextStatus}.`);
        renderProDashboard();
      };
    });

    const addSrvForm = document.getElementById('p-add-srv');
    if (addSrvForm) {
      addSrvForm.onsubmit = (e) => {
        e.preventDefault();
        const price = Number(document.getElementById('ps-price').value);
        pro.services.push({
          id: `srv-${Date.now()}`,
          title: document.getElementById('ps-title').value.trim(),
          description: document.getElementById('ps-desc').value.trim() || 'Standard service package',
          price,
          durationMinutes: 60,
        });
        pro.startingPrice = Math.min(...pro.services.map((s) => s.price));
        saveState();
        showToast('Service added.');
        renderProDashboard();
      };
    }

    document.querySelectorAll('[data-p-delsrv]').forEach((b) => {
      b.onclick = () => {
        if (pro.services.length <= 1) {
          showToast('Keep at least one service on your rate card.', 'info');
          return;
        }
        pro.services = pro.services.filter((s) => s.id !== b.getAttribute('data-p-delsrv'));
        pro.startingPrice = Math.min(...pro.services.map((s) => s.price));
        saveState();
        renderProDashboard();
      };
    });

    const editForm = document.getElementById('p-edit-prof');
    if (editForm) {
      editForm.onsubmit = (e) => {
        e.preventDefault();
        pro.headline = document.getElementById('pe-head').value.trim();
        pro.bio = document.getElementById('pe-bio').value.trim();
        pro.workingHours = document.getElementById('pe-hours').value.trim();
        pro.localities = document.getElementById('pe-locs').value.split(',').map((s) => s.trim()).filter(Boolean);
        saveState();
        showToast('Profile updated.');
        renderProDashboard();
      };
    }

    const verForm = document.getElementById('p-ver-form');
    if (verForm) {
      verForm.onsubmit = (e) => {
        e.preventDefault();
        pro.verificationStatus = 'pending';
        state.verificationRequests.unshift({
          id: `ver-${Date.now()}`,
          professionalId: pro.id,
          professionalName: pro.fullName,
          categoryName: pro.categoryName,
          documentType: 'Trade License & ID',
          licenseNumber: document.getElementById('pv-lic').value.trim(),
          notes: 'Submitted from Pro Dashboard.',
          status: 'pending',
        });
        saveState();
        showToast('Verification request submitted.');
        renderProDashboard();
      };
    }
  }

  // ==================== ADMIN DASHBOARD ====================
  function renderAdminDashboard() {
    const root = document.getElementById('admin-dashboard-content');
    if (!currentUser || currentUser.role !== 'admin') return;

    const customers = state.users.filter((u) => u.role === 'customer');
    const pendingVers = state.verificationRequests.filter((v) => v.status === 'pending');
    const completed = state.bookings.filter((b) => b.status === 'Completed').length;
    const cancelled = state.bookings.filter((b) => b.status === 'Cancelled').length;

    let bodyHtml = '';
    if (adminTab === 'overview') {
      bodyHtml = `
        <div class="kpi-grid six">
          <div class="kpi-card"><span>Customers</span><strong class="tabular-nums">${customers.length}</strong></div>
          <div class="kpi-card"><span>Professionals</span><strong class="tabular-nums">${state.professionals.length}</strong></div>
          <div class="kpi-card"><span>Total Bookings</span><strong class="tabular-nums">${state.bookings.length}</strong></div>
          <div class="kpi-card"><span>Pending Verify</span><strong class="tabular-nums">${pendingVers.length}</strong></div>
          <div class="kpi-card"><span>Completed</span><strong class="tabular-nums">${completed}</strong></div>
          <div class="kpi-card"><span>Cancelled</span><strong class="tabular-nums">${cancelled}</strong></div>
        </div>
        <div class="card-panel">
          <h3 style="margin-bottom:12px;">Recent Platform Activity</h3>
          <div class="list-divide">
            ${state.activities.slice(0, 8).map((a) => `<div><strong>${escapeHtml(a.actor)}</strong> · ${escapeHtml(a.action)} <span class="muted-label">(${escapeHtml(a.target)})</span></div>`).join('')}
          </div>
        </div>
      `;
    } else if (adminTab === 'verifications') {
      bodyHtml = `
        <div class="card-panel">
          <h2 style="margin-bottom:14px;">Verification Queue</h2>
          <div class="list-divide">
            ${state.verificationRequests
              .map(
                (v) => `
              <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:12px;">
                <div>
                  <strong>${escapeHtml(v.professionalName)}</strong> · <span class="muted-label">${escapeHtml(v.categoryName)} · ${escapeHtml(v.status).toUpperCase()}</span>
                  <p class="muted-label">${escapeHtml(v.documentType)} · License: ${escapeHtml(v.licenseNumber)}</p>
                </div>
                ${
                  v.status === 'pending'
                    ? `<div style="display:flex; gap:8px;">
                        <button type="button" class="btn btn-primary btn-sm" data-a-ver="${v.id}|approved">Approve & Verify</button>
                        <button type="button" class="btn btn-danger-outline btn-sm" data-a-ver="${v.id}|rejected">Reject</button>
                      </div>`
                    : ''
                }
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      `;
    } else if (adminTab === 'categories') {
      bodyHtml = `
        <div class="card-panel">
          <h2 style="margin-bottom:12px;">Add Service Category</h2>
          <form id="a-add-cat" class="form-grid">
            <div class="form-field"><label>Name</label><input type="text" id="ac-name" required placeholder="Pest Control" /></div>
            <div class="form-field"><label>Starting Price ($)</label><input type="number" id="ac-price" value="35" min="10" required /></div>
            <div class="form-field" style="grid-column:1/-1;"><label>Description</label><input type="text" id="ac-desc" placeholder="Home maintenance service" /></div>
            <button type="submit" class="btn btn-primary" style="width:max-content;">Add Category</button>
          </form>
        </div>
        <div class="card-panel">
          <h2 style="margin-bottom:12px;">Categories (${state.categories.length})</h2>
          <div class="list-divide">
            ${state.categories
              .map(
                (c) => `
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div><strong>${escapeHtml(c.name)}</strong> <span class="muted-label">($${c.indicativeStartingPrice} indicative)</span><p class="muted-label">${escapeHtml(c.description)}</p></div>
                <button type="button" class="btn btn-outline btn-sm" data-a-cat="${c.id}">${c.isActive ? 'Active' : 'Disabled'}</button>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      `;
    } else if (adminTab === 'users') {
      bodyHtml = `
        <div class="card-panel" style="overflow-x:auto;">
          <h2 style="margin-bottom:12px;">Users &amp; Professionals</h2>
          <table class="data-table">
            <thead><tr><th>Name</th><th>Role</th><th>Locality</th><th>Status</th><th>Action</th></tr></thead>
            <tbody>
              ${state.users
                .map(
                  (u) => `
                <tr>
                  <td><strong>${escapeHtml(u.fullName)}</strong><br><small class="muted-label">${escapeHtml(u.email)}</small></td>
                  <td style="text-transform:capitalize;">${u.role}</td>
                  <td>${escapeHtml(u.locality)}</td>
                  <td style="color:${u.accountStatus === 'active' ? '#16a34a' : '#dc2626'};font-weight:600;">${u.accountStatus}</td>
                  <td>${u.role !== 'admin' ? `<button type="button" class="btn btn-outline btn-sm" data-a-susp="${u.id}">${u.accountStatus === 'active' ? 'Suspend' : 'Reactivate'}</button>` : '—'}</td>
                </tr>
              `
                )
                .join('')}
            </tbody>
          </table>
        </div>
      `;
    } else if (adminTab === 'bookings') {
      bodyHtml = `
        <div class="card-panel" style="overflow-x:auto;">
          <h2 style="margin-bottom:12px;">All Bookings (${state.bookings.length})</h2>
          <table class="data-table">
            <thead><tr><th>Code</th><th>Customer</th><th>Professional</th><th>Date</th><th>Amount</th><th>Status</th></tr></thead>
            <tbody>
              ${state.bookings
                .map(
                  (b) => `
                <tr>
                  <td class="tabular-nums" style="color:#2563eb;font-weight:700;">${b.bookingCode}</td>
                  <td>${escapeHtml(b.customerName)}</td>
                  <td>${escapeHtml(b.professionalName)}</td>
                  <td class="tabular-nums">${b.scheduledDate}</td>
                  <td class="tabular-nums">$${b.estimatedTotal}</td>
                  <td><strong>${escapeHtml(b.status)}</strong></td>
                </tr>
              `
                )
                .join('')}
            </tbody>
          </table>
        </div>
      `;
    } else if (adminTab === 'reviews') {
      bodyHtml = `
        <div class="card-panel">
          <h2 style="margin-bottom:12px;">Review Moderation</h2>
          <div class="list-divide">
            ${state.reviews
              .map(
                (r) => `
              <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">
                <div>
                  <strong>${escapeHtml(r.customerName)} → ${escapeHtml(r.professionalName)}</strong> <span class="rating-amber">${r.rating}.0 ★</span>
                  ${r.isHidden ? '<span style="color:#dc2626;font-size:0.75rem;font-weight:700;"> HIDDEN</span>' : ''}
                  <p style="font-size:0.86rem;color:#475569;margin-top:4px;">${escapeHtml(r.comment)}</p>
                </div>
                <button type="button" class="btn btn-outline btn-sm" data-a-rev="${r.id}">${r.isHidden ? 'Restore' : 'Hide'}</button>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      `;
    }

    root.innerHTML = `
      <div class="dashboard-layout">
        <aside class="dash-sidebar">
          <div class="card-panel" style="background:#101828;color:#fff;">
            <span class="smart-kicker">Admin Operations</span>
            <strong style="display:block;font-size:1.05rem;">${escapeHtml(currentUser.fullName)}</strong>
          </div>
          <nav class="dash-nav">
            ${[
              ['overview', 'Platform Overview'],
              ['verifications', `Verifications (${pendingVers.length})`],
              ['categories', 'Categories'],
              ['users', 'Users & Pros'],
              ['bookings', 'All Bookings'],
              ['reviews', 'Review Moderation'],
            ]
              .map(([id, lbl]) => `<button type="button" class="dash-nav-btn ${adminTab === id ? 'active' : ''}" data-atab="${id}">${lbl}</button>`)
              .join('')}
          </nav>
        </aside>
        <div class="dash-main">${bodyHtml}</div>
      </div>
    `;

    document.querySelectorAll('[data-atab]').forEach((b) => {
      b.onclick = () => {
        adminTab = b.getAttribute('data-atab');
        renderAdminDashboard();
      };
    });

    document.querySelectorAll('[data-a-ver]').forEach((b) => {
      b.onclick = () => {
        const [id, decision] = b.getAttribute('data-a-ver').split('|');
        const vr = state.verificationRequests.find((x) => x.id === id);
        if (!vr) return;
        vr.status = decision;
        const pro = state.professionals.find((p) => p.id === vr.professionalId);
        if (pro) pro.verificationStatus = decision === 'approved' ? 'verified' : 'rejected';
        saveState();
        showToast(decision === 'approved' ? 'Professional verified!' : 'Verification rejected.');
        renderAdminDashboard();
      };
    });

    const catForm = document.getElementById('a-add-cat');
    if (catForm) {
      catForm.onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('ac-name').value.trim();
        state.categories.push({
          id: `cat-${Date.now()}`,
          slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          name,
          description: document.getElementById('ac-desc').value.trim() || 'Home maintenance service.',
          indicativeStartingPrice: Number(document.getElementById('ac-price').value) || 35,
          isActive: true,
        });
        saveState();
        showToast('Category added.');
        renderAdminDashboard();
      };
    }

    document.querySelectorAll('[data-a-cat]').forEach((b) => {
      b.onclick = () => {
        const c = state.categories.find((x) => x.id === b.getAttribute('data-a-cat'));
        if (c) {
          c.isActive = !c.isActive;
          saveState();
          renderAdminDashboard();
        }
      };
    });

    document.querySelectorAll('[data-a-susp]').forEach((b) => {
      b.onclick = () => {
        const u = state.users.find((x) => x.id === b.getAttribute('data-a-susp'));
        if (u) {
          u.accountStatus = u.accountStatus === 'active' ? 'suspended' : 'active';
          saveState();
          showToast(`Account ${u.accountStatus}.`);
          renderAdminDashboard();
        }
      };
    });

    document.querySelectorAll('[data-a-rev]').forEach((b) => {
      b.onclick = () => {
        const r = state.reviews.find((x) => x.id === b.getAttribute('data-a-rev'));
        if (r) {
          r.isHidden = !r.isHidden;
          recalcRating(r.professionalId);
          saveState();
          renderAdminDashboard();
        }
      };
    });
  }

  // ==================== ANIMATED COUNTERS & SCROLL ====================
  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          observer.unobserve(el);
          const target = Number(el.getAttribute('data-counter'));
          const decimals = Number(el.getAttribute('data-decimals') || 0);
          const suffix = el.getAttribute('data-suffix') || '';
          let frame = 0;
          const total = 34;
          const timer = setInterval(() => {
            frame += 1;
            const p = Math.min(1, frame / total);
            const eased = 1 - Math.pow(1 - p, 3);
            const val = target * eased;
            el.textContent = (decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString()) + suffix;
            if (frame >= total) clearInterval(timer);
          }, 24);
        });
      },
      { threshold: 0.3 }
    );
    counters.forEach((c) => observer.observe(c));
  }

  // ==================== GLOBAL INIT & EVENTS ====================
  function init() {
    window.addEventListener(
      'scroll',
      () => {
        document.getElementById('site-header').classList.toggle('scrolled', window.scrollY > 18);
      },
      { passive: true }
    );

    document.getElementById('mobile-menu-btn').onclick = () => {
      document.getElementById('mobile-drawer').classList.toggle('hidden');
    };

    document.querySelectorAll('[data-nav]').forEach((btn) => {
      btn.onclick = () => {
        closeMobileDrawer();
        setView(btn.getAttribute('data-nav'));
      };
    });

    document.querySelectorAll('[data-scroll]').forEach((btn) => {
      btn.onclick = () => {
        closeMobileDrawer();
        const targetId = btn.getAttribute('data-scroll');
        if (currentView !== 'landing') {
          setView('landing');
          setTimeout(() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' }), 120);
        } else {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }
      };
    });

    document.getElementById('hero-search-form').onsubmit = (e) => {
      e.preventDefault();
      navigateToExplore({
        query: document.getElementById('hero-query').value.trim(),
        locality: document.getElementById('hero-locality').value,
      });
    };

    document.getElementById('hero-become-pro').onclick = () => openAuthModal('register-pro');
    document.getElementById('cta-join-pro').onclick = () => openAuthModal('register-pro');
    document.getElementById('footer-become-pro').onclick = () => openAuthModal('register-pro');

    // Smart Matcher
    document.querySelectorAll('[data-example]').forEach((btn) => {
      btn.onclick = () => {
        document.getElementById('smart-problem-input').value = btn.getAttribute('data-example');
      };
    });

    document.getElementById('smart-matcher-form').onsubmit = (e) => {
      e.preventDefault();
      const problem = document.getElementById('smart-problem-input').value.trim();
      if (!problem) {
        showToast('Please describe your issue first.', 'info');
        return;
      }
      const res = analyzeProblem(problem);
      const box = document.getElementById('smart-matcher-result');
      box.classList.remove('hidden');
      box.innerHTML = `
        <div class="smart-result-top">
          <div><span class="muted-label">Recommended Category</span><h3>${escapeHtml(res.categoryName)}</h3></div>
          <div><span class="muted-label">Urgency</span><br><strong>${res.urgency}</strong></div>
          <div><span class="muted-label">Indicative Range</span><br><strong class="tabular-nums">${escapeHtml(res.range)}</strong></div>
        </div>
        <p style="font-size:0.88rem;color:#334155;">${escapeHtml(res.summary)}</p>
        <ul>${res.steps.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}</ul>
        <button type="button" class="btn btn-primary btn-sm" id="smart-go-btn">Browse ${escapeHtml(res.categoryName)} Pros →</button>
      `;
      document.getElementById('smart-go-btn').onclick = () => {
        navigateToExplore({ categorySlug: res.categorySlug, emergencyOnly: res.urgency === 'Emergency' });
      };
    };

    // Explore Filter Inputs
    document.getElementById('filter-query').oninput = (e) => {
      filters.query = e.target.value;
      renderExplore();
    };
    document.getElementById('filter-locality').oninput = (e) => {
      filters.locality = e.target.value;
      renderExplore();
    };
    document.getElementById('filter-sort').onchange = (e) => {
      filters.sortBy = e.target.value;
      renderExplore();
    };
    document.getElementById('filter-max-price').oninput = (e) => {
      filters.maxPrice = Number(e.target.value);
      renderExplore();
    };
    document.querySelectorAll('[data-min-rating]').forEach((b) => {
      b.onclick = () => {
        filters.minRating = Number(b.getAttribute('data-min-rating'));
        renderExplore();
      };
    });
    document.getElementById('filter-available').onchange = (e) => {
      filters.availableOnly = e.target.checked;
      renderExplore();
    };
    document.getElementById('filter-emergency').onchange = (e) => {
      filters.emergencyOnly = e.target.checked;
      renderExplore();
    };
    const resetFn = () => navigateToExplore();
    document.getElementById('btn-reset-filters').onclick = resetFn;
    document.getElementById('btn-empty-reset').onclick = resetFn;
    document.getElementById('btn-open-compare').onclick = openCompareModal;

    // Footer Explore shortcuts & policies
    document.querySelectorAll('[data-explore-cat]').forEach((b) => {
      b.onclick = () => navigateToExplore({ categorySlug: b.getAttribute('data-explore-cat') });
    });
    document.querySelectorAll('[data-policy]').forEach((b) => {
      b.onclick = () => {
        const type = b.getAttribute('data-policy');
        const copy =
          type === 'privacy'
            ? 'FixMate protects household contact details and stores demo records locally in your browser via localStorage.'
            : type === 'terms'
            ? 'All service rates shown are indicative base estimates. Verified badges are granted strictly after admin approval.'
            : 'Need support? Reach support@fixmate.demo or call +91 80 4120 8800 (07:00 AM – 10:00 PM).';
        openModal(
          type === 'privacy' ? 'Privacy Policy' : type === 'terms' ? 'Terms and Conditions' : 'Customer Support',
          `<p style="font-size:0.92rem;color:#475569;">${copy}</p>`
        );
      };
    });

    // Modal close handlers
    document.getElementById('modal-close').onclick = closeModal;
    document.getElementById('modal-backdrop').onclick = (e) => {
      if (e.target.id === 'modal-backdrop') closeModal();
    };

    updateHeader();
    renderLanding();
    initCounters();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
