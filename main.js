const parkingAreas = [
  {
    id: "lot-1",
    name: "Lot 1",
    nearby: "Greenhill Center of the Arts and south campus edge",
    permit: "Day visitor permit",
    amp: true,
    overnight: false,
    tags: ["day", "amp"],
    search: ["lot 1", "greenhill", "arts", "main", "business 12"],
    summary: "A strong south campus choice for daytime visitors with AMP stalls in marked spaces.",
    note: "Use the kiosk or parking portal for a day permit. If you choose an AMP-marked stall, app payment is still required.",
    x: 28.8,
    y: 88.2,
    hotspotLabel: "1"
  },
  {
    id: "lot-2",
    name: "Lot 2",
    nearby: "Laurentide Hall, Young Auditorium, and west academic buildings",
    permit: "Day visitor permit",
    amp: true,
    overnight: false,
    tags: ["day", "amp"],
    search: ["lot 2", "laurentide", "young", "auditorium"],
    summary: "Convenient for west side performances, events, and classroom visits.",
    note: "AMP spaces here are short-term only. General visitor permits cover daytime parking outside AMP-marked stalls.",
    x: 27.2,
    y: 75.2,
    hotspotLabel: "2"
  },
  {
    id: "lot-3",
    name: "Lot 3",
    nearby: "Laurentide Hall and the west central campus corridor",
    permit: "AMP pay-by-space only",
    amp: true,
    overnight: false,
    tags: ["amp"],
    search: ["lot 3", "laurentide", "west campus"],
    summary: "Best for quick stops near Laurentide when you only need short-term parking.",
    note: "This area appears in UW-Whitewater's AMP list, not in the standard kiosk day-permit lot list.",
    x: 33.7,
    y: 67.8,
    hotspotLabel: "3"
  },
  {
    id: "lot-4",
    name: "Lot 4",
    nearby: "Moraine Hall, Fischer Hall, and east central academic buildings",
    permit: "Day visitor permit",
    amp: true,
    overnight: false,
    tags: ["day", "amp"],
    search: ["lot 4", "moraine", "fischer", "east central"],
    summary: "Useful for central-east visits with both kiosk day parking and AMP short-term options.",
    note: "Visitors using Lot 4 should park in the south half of the lot. The north half is reserved for residents. Check stall signage, and only AMP-labeled spaces use app payment.",
    x: 65.2,
    y: 57.2,
    hotspotLabel: "4"
  },
  {
    id: "lot-7",
    name: "Lot 7",
    nearby: "Visitor Center, University Center, and campus core",
    permit: "Day visitor permit",
    amp: true,
    overnight: false,
    tags: ["day", "amp"],
    search: ["lot 7", "visitor center", "university center", "uc"],
    summary: "One of the most practical daytime choices if your first stop is the Visitor Center or University Center.",
    note: "The kiosk is at the Visitor Center drive-thru, so this zone is a natural first stop for new guests.",
    x: 39.3,
    y: 57.6,
    hotspotLabel: "7"
  },
  {
    id: "lot-8",
    name: "Lot 8",
    nearby: "Bigelow Hall, Drumlin Hall, and the west residence hall edge",
    permit: "AMP pay-by-space only",
    amp: true,
    overnight: false,
    tags: ["amp"],
    search: ["lot 8", "bigelow", "drumlin", "west residence"],
    summary: "Short-term only according to the official AMP zone list.",
    note: "This area is best for quick drop-ins. It is not listed as a general kiosk day-permit lot.",
    x: 22.9,
    y: 54.1,
    hotspotLabel: "8"
  },
  {
    id: "lot-9",
    name: "Lot 9",
    nearby: "Visitor Center and campus core just north of the UC",
    permit: "Day visitor permit",
    amp: false,
    overnight: false,
    tags: ["day"],
    search: ["lot 9", "visitor center", "uc", "campus core"],
    summary: "A general visitor day-parking option close to the center of campus.",
    note: "Good fallback if Lot 7 is full and you still want to stay close to the Visitor Center area.",
    x: 37.8,
    y: 51.8,
    hotspotLabel: "9"
  },
  {
    id: "lot-11",
    name: "Lot 11",
    nearby: "Williams Center and the Kachel Fieldhouse area",
    permit: "Day visitor permit",
    amp: true,
    overnight: false,
    tags: ["day", "amp"],
    search: ["lot 11", "williams center", "kachel", "fieldhouse"],
    summary: "Helpful for athletics-adjacent visits and one of the two AMP areas with a 4-hour cap.",
    note: "AMP spaces here can run up to 4 hours rather than the usual 2-hour limit.",
    x: 38.8,
    y: 34.7,
    hotspotLabel: "11"
  },
  {
    id: "lot-12",
    name: "Lot 12",
    nearby: "Andersen Library and southeast academic buildings",
    permit: "Day visitor permit",
    amp: true,
    overnight: false,
    tags: ["day", "amp"],
    search: ["lot 12", "andersen library", "library", "southeast"],
    summary: "A strong daytime choice for library visits and southeast campus appointments.",
    note: "Lot 12A is also part of the official AMP list for short-term parking.",
    x: 68.8,
    y: 84.9,
    hotspotLabel: "12"
  },
  {
    id: "lot-12a",
    name: "Lot 12A",
    nearby: "University Center east side and nearby campus core spaces",
    permit: "AMP pay-by-space only",
    amp: true,
    overnight: false,
    tags: ["amp"],
    search: ["lot 12a", "12a", "university center", "uc", "amp"],
    summary: "Short-term AMP-only parking closest to the University Center side of the campus core.",
    note: "Lot 12A is AMP-only, so payment is required in marked spaces.",
    x: 56.1,
    y: 75.2,
    hotspotLabel: "12A"
  },
  {
    id: "lot-14",
    name: "Lot 14",
    nearby: "Upham Hall and the east side classroom cluster",
    permit: "Day visitor permit",
    amp: true,
    overnight: false,
    tags: ["day", "amp"],
    search: ["lot 14", "upham", "east side classrooms"],
    summary: "A useful east-side option with both day permit access and AMP spaces.",
    note: "If you need only a short errand, choose an AMP-marked stall and watch the session timer.",
    x: 58.4,
    y: 68.9,
    hotspotLabel: "14"
  },
  {
    id: "lot-18",
    name: "Lot 18",
    nearby: "Drumlin Dining Hall and the north east campus edge",
    permit: "Day visitor permit",
    amp: false,
    overnight: false,
    tags: ["day"],
    search: ["lot 18", "drumlin dining hall", "north east"],
    summary: "Good for north-campus daytime access near dining and residence hall areas.",
    note: "The official visitor page includes Lot 18 in the usual daytime kiosk permit list.",
    x: 62.7,
    y: 30.7,
    hotspotLabel: "18"
  },
  {
    id: "lot-19",
    name: "Lot 19",
    nearby: "Wells Hall and the northeast residence hall area",
    permit: "Day and overnight visitor permit",
    amp: false,
    overnight: true,
    tags: ["day", "overnight"],
    search: ["lot 19", "wells", "overnight", "north east"],
    summary: "This is the key overnight lot for visitors using kiosk permits.",
    note: "If your car will remain parked between 2 AM and 5 AM, the visitor page says it must be in Lot 19.",
    x: 73.9,
    y: 32.0,
    hotspotLabel: "19"
  },
  {
    id: "lot-21",
    name: "Lot 21",
    nearby: "Fremont Street side of campus",
    permit: "Day visitor permit",
    amp: false,
    overnight: false,
    tags: ["day"],
    search: ["lot 21", "fremont", "east remote"],
    summary: "A quieter perimeter option for daytime visits on the east side.",
    note: "Useful when you want easier in-and-out access from the Fremont Street side.",
    x: 94.4,
    y: 34.3,
    hotspotLabel: "21"
  },
  {
    id: "lot-23",
    name: "Lot 23",
    nearby: "Center of campus near Goodhue and academic buildings",
    permit: "AMP pay-by-space only",
    amp: true,
    overnight: false,
    tags: ["amp"],
    search: ["lot 23", "goodhue", "center campus"],
    summary: "Short-term parking in the campus core with a 4-hour AMP limit.",
    note: "Lot 23 is in the official AMP list and shares the longer 4-hour maximum with Lot 11.",
    x: 58.7,
    y: 47.2,
    hotspotLabel: "23"
  },
  {
    id: "lot-24",
    name: "Lot 24",
    nearby: "Athletic complex and north west campus edge",
    permit: "Day visitor permit",
    amp: false,
    overnight: false,
    tags: ["day"],
    search: ["lot 24", "athletic complex", "north west", "stadium"],
    summary: "Best for athletics and recreation facilities on the north west side of campus.",
    note: "This is one of the standard daytime kiosk permit lots listed by Parking Services.",
    x: 41.2,
    y: 26.7,
    hotspotLabel: "24"
  },
  {
    id: "prince-street",
    name: "Prince Street",
    nearby: "West side street parking corridor near residence halls and athletics",
    permit: "Day visitor permit",
    amp: false,
    overnight: false,
    tags: ["day"],
    search: ["prince", "street parking", "west side"],
    summary: "Prince Street is a west-side day-pass street parking option in the official visitor guidance.",
    note: "Always confirm street signage, since posted notices override general campus guidance."
  },
  {
    id: "prairie-street",
    name: "Prairie Street",
    nearby: "East side street parking corridor",
    permit: "Day visitor permit",
    amp: false,
    overnight: false,
    tags: ["day"],
    search: ["prairie", "street parking", "east side"],
    summary: "Prairie Street is an east-side day-pass street parking option in the official visitor guidance.",
    note: "Street signs take priority over this summary if a curb or block has different restrictions."
  },
  {
    id: "hyer",
    name: "Hyer area",
    nearby: "Hyer Hall and nearby short-term spaces",
    permit: "AMP pay-by-space only",
    amp: true,
    overnight: false,
    tags: ["amp"],
    search: ["hyer", "hyer hall"],
    summary: "Use AMP here for quick visits near Hyer Hall.",
    note: "This zone is not part of the standard visitor kiosk lot list."
  },
  {
    id: "koshkonong",
    name: "Koshkonong Drive",
    nearby: "Drive-side short-term spaces in the campus core",
    permit: "AMP pay-by-space only",
    amp: true,
    overnight: false,
    tags: ["amp"],
    search: ["koshkonong", "drive", "campus core"],
    summary: "Good for very short campus-core stops when you want curb-adjacent access.",
    note: "The official visitor page includes this drive in the AMP zone list."
  },
  {
    id: "lauderdale",
    name: "Lauderdale Drive",
    nearby: "Drive-side short-term spaces east of the campus core",
    permit: "AMP pay-by-space only",
    amp: true,
    overnight: false,
    tags: ["amp"],
    search: ["lauderdale", "drive", "east campus"],
    summary: "Short-term visitor access for quick pickups, drop-offs, or appointments.",
    note: "This is an AMP zone, so permits do not replace payment in marked spaces."
  }
];

const destinations = [
  {
    id: "visitor-center",
    name: "Visitor Center",
    popular: true,
    summary: "Best for permit questions, kiosk pickup, and first-time campus arrivals.",
    recommendations: [
      { lotId: "lot-7", reason: "Closest day-permit lot and right by the Visitor Center kiosk drive-thru." },
      { lotId: "lot-9", reason: "Good backup option a short walk from the same campus core." }
    ]
  },
  {
    id: "university-center",
    name: "University Center",
    popular: true,
    summary: "Strong choices for meetings, tours, and student-life visits in the middle of campus.",
    recommendations: [
      { lotId: "lot-12a", reason: "Closest AMP-only option for a quick University Center stop." },
      { lotId: "lot-14", reason: "Strong day-pass or AMP option with easy access to the University Center area." },
      { lotId: "lot-12", reason: "Good day-pass or AMP fallback on the east side of campus core." }
    ]
  },
  {
    id: "andersen-library",
    name: "Andersen Library",
    popular: true,
    summary: "Best east-side visitor options for library visits and nearby academic appointments.",
    recommendations: [
      { lotId: "lot-12", reason: "Closest day-permit visitor lot to the library cluster." },
      { lotId: "lot-14", reason: "Helpful second choice if you also need easy access to east-side classrooms." }
    ]
  },
  {
    id: "upham-hall",
    name: "Upham Hall",
    summary: "Recommended lots for the east-side classroom corridor.",
    recommendations: [
      { lotId: "lot-14", reason: "Most practical day-permit option for Upham Hall." },
      { lotId: "lot-4", reason: "Strong backup with central-east access." }
    ]
  },
  {
    id: "young-auditorium",
    name: "Young Auditorium",
    popular: true,
    summary: "Best west-side options for performances, events, and arts visits.",
    recommendations: [
      { lotId: "lot-1", reason: "Good day-pass or AMP option for Young Auditorium visits." },
      { lotId: "lot-2", reason: "Another strong day-pass or AMP choice for the west-side arts area." }
    ]
  },
  {
    id: "greenhill-center",
    name: "Greenhill Center of the Arts",
    summary: "Good south-campus options for arts, classes, and events.",
    recommendations: [
      { lotId: "lot-1", reason: "Closest day-permit lot to Greenhill." },
      { lotId: "lot-2", reason: "Solid alternate when you need another south-west option." }
    ]
  },
  {
    id: "hyland-building",
    name: "Hyland Building",
    popular: true,
    summary: "Best visitor options for the south-central academic corridor near Hyland.",
    recommendations: [
      { lotId: "lot-7", reason: "Best first option for Hyland Building visits." },
      { lotId: "lot-9", reason: "Strong nearby fallback if Lot 7 is busy." }
    ]
  },
  {
    id: "bigelow-hall",
    name: "Bigelow Hall",
    summary: "Best visitor options for west-side residence hall visits near Bigelow.",
    recommendations: [
      { lotId: "lot-8", reason: "Closest AMP option for a quick Bigelow Hall stop." },
      { lotId: "lot-7", reason: "Good day-pass or AMP alternative if you want a broader campus-core option." }
    ]
  },
  {
    id: "drumlin-hall",
    name: "Drumlin Hall",
    summary: "Useful visitor choices for the west residence hall corridor.",
    recommendations: [
      { lotId: "lot-8", reason: "Closest AMP option for Drumlin Hall." },
      { lotId: "lot-7", reason: "Strong day-pass or AMP fallback nearby." }
    ]
  },
  {
    id: "laurentide-hall",
    name: "Laurentide Hall",
    summary: "Best west-side visitor parking for Laurentide Hall and nearby classrooms.",
    recommendations: [
      { lotId: "lot-2", reason: "Best day-pass or AMP lot for Laurentide Hall." },
      { lotId: "prince-street", reason: "Good west-side day-pass street parking option for Laurentide Hall." }
    ]
  },
  {
    id: "bookstore",
    name: "Bookstore",
    summary: "Good visitor parking options for bookstore trips near the campus core.",
    recommendations: [
      { lotId: "lot-7", reason: "Best first option for bookstore visits." },
      { lotId: "lot-14", reason: "Good day-pass or AMP fallback on the east side." }
    ]
  },
  {
    id: "fischer-hall",
    name: "Fischer Hall",
    summary: "Useful central-east visitor choices for Fischer Hall.",
    recommendations: [
      { lotId: "lot-4", reason: "Best day-pass or AMP lot for Fischer Hall." },
      { lotId: "lot-14", reason: "Good east-side fallback with both day-pass and AMP access." }
    ]
  },
  {
    id: "goodhue-hall",
    name: "Goodhue Hall",
    summary: "Campus-core parking options for quick visits near Goodhue Hall.",
    recommendations: [
      { lotId: "lot-23", reason: "Closest AMP-only option for a short stop near Goodhue Hall." },
      { lotId: "lot-7", reason: "Good day-pass or AMP alternative just west of the campus core." }
    ]
  },
  {
    id: "pulliam-hall",
    name: "Pulliam Hall",
    summary: "Useful east-central visitor options for Pulliam Hall.",
    recommendations: [
      { lotId: "lot-3", reason: "Best AMP-only option for Pulliam Hall." },
      { lotId: "lot-7", reason: "Good day-pass or AMP fallback for Pulliam Hall visits." }
    ]
  },
  {
    id: "roseman-building",
    name: "Roseman Building",
    summary: "Good east-side recommendations for offices and appointments near Roseman.",
    recommendations: [
      { lotId: "lot-14", reason: "Best day-pass or AMP option for the Roseman area." },
      { lotId: "lot-12", reason: "Strong secondary choice from the southeast side." }
    ]
  },
  {
    id: "winther-hall",
    name: "Winther Hall",
    summary: "Helpful east-side parking picks for Winther Hall.",
    recommendations: [
      { lotId: "lot-14", reason: "Closest day-pass or AMP option for Winther Hall." },
      { lotId: "lot-12", reason: "Good fallback with nearby library-side access." }
    ]
  },
  {
    id: "ambrose-health-center",
    name: "Ambrose Health Center",
    summary: "Useful visitor recommendations for Ambrose Health Center and nearby buildings.",
    recommendations: [
      { lotId: "lot-4", reason: "Best central-east day-pass or AMP option for Ambrose Health Center." },
      { lotId: "lot-14", reason: "Good east-side fallback if you want easier access from Starin Road." }
    ]
  },
  {
    id: "mcgraw-hall",
    name: "McGraw Hall",
    summary: "Good south-central visitor parking choices for McGraw Hall.",
    recommendations: [
      { lotId: "lot-2", reason: "Best first option for McGraw Hall visits." },
      { lotId: "prince-street", reason: "Good west-side day-pass street parking option for McGraw Hall." }
    ]
  },
  {
    id: "williams-center",
    name: "Williams Center",
    summary: "Helpful for athletics and recreation-adjacent visits.",
    recommendations: [
      { lotId: "lot-11", reason: "Nearest visitor option and useful for longer AMP stays too." },
      { lotId: "lot-24", reason: "Good alternative if your stop leans more toward the athletic complex." }
    ]
  },
  {
    id: "athletic-complex",
    name: "Athletic Complex",
    summary: "North-west campus recommendations for games, camps, and recreation facilities.",
    recommendations: [
      { lotId: "lot-24", reason: "Best visitor lot for the athletic complex side of campus." },
      { lotId: "lot-11", reason: "Useful backup with access to the Williams Center corridor." }
    ]
  },
  {
    id: "drumlin-dining",
    name: "Drumlin Dining Hall",
    popular: true,
    summary: "Top north-east visitor choices for dining and residence hall visits.",
    recommendations: [
      { lotId: "lot-8", reason: "Best quick-stop option when you want to pay for AMP near Drumlin Dining Hall." },
      { lotId: "lot-7", reason: "Good choice if you want to pay for a day pass or use AMP near the campus core." }
    ]
  },
  {
    id: "wells-hall",
    name: "Wells Hall",
    popular: true,
    summary: "Best visitor parking for north-east residence hall visits and overnight stays.",
    recommendations: [
      { lotId: "lot-19", reason: "Primary visitor lot for Wells Hall and the official overnight choice." },
      { lotId: "lot-18", reason: "Useful daytime fallback close to the same north-east area." }
    ]
  },
  {
    id: "kachel-fieldhouse",
    name: "Kachel Fieldhouse",
    summary: "Best visitor choices for fieldhouse events and athletics-adjacent visits.",
    recommendations: [
      { lotId: "lot-11", reason: "Closest day-pass or AMP option for the Kachel Fieldhouse area." },
      { lotId: "lot-24", reason: "Strong alternate for larger athletics events." }
    ]
  },
  {
    id: "hyer-hall",
    name: "Hyer Hall",
    summary: "Short-term and nearby visitor options for Hyer Hall.",
    recommendations: [
      { lotId: "hyer", reason: "Closest AMP-only option for quick Hyer Hall stops." },
      { lotId: "lot-1", reason: "Good day-pass or AMP fallback for Hyer Hall visits." }
    ]
  }
];

const results = document.getElementById("results");
const resultsCount = document.getElementById("results-count");
const searchInput = document.getElementById("search");
const filterButtons = Array.from(document.querySelectorAll(".filter-chip"));
const detailTitle = document.getElementById("detail-title");
const detailSummary = document.getElementById("detail-summary");
const detailNearby = document.getElementById("detail-nearby");
const detailPermit = document.getElementById("detail-permit");
const detailAmp = document.getElementById("detail-amp");
const detailOvernight = document.getElementById("detail-overnight");
const detailNote = document.getElementById("detail-note");
const destinationSelect = document.getElementById("destination-select");
const destinationChips = document.getElementById("destination-chips");
const clearDestinationButton = document.getElementById("clear-destination");
const recommendationTitle = document.getElementById("recommendation-title");
const recommendationSummary = document.getElementById("recommendation-summary");
const recommendationList = document.getElementById("recommendation-list");
const hotspotLayer = document.getElementById("hotspot-layer");
const pageButtons = Array.from(document.querySelectorAll(".bottom-nav-button"));
const pagePanels = Array.from(document.querySelectorAll(".app-page"));

let activeFilter = "all";
let activeAreaId = "lot-7";
let activeDestinationId = "";
let activePage = "home";

function getAreaById(id) {
  return parkingAreas.find((area) => area.id === id);
}

function getDestinationById(id) {
  return destinations.find((destination) => destination.id === id);
}

function getRecommendationMap() {
  const destination = getDestinationById(activeDestinationId);

  if (!destination) {
    return new Map();
  }

  return new Map(
    destination.recommendations.map((recommendation, index) => [
      recommendation.lotId,
      { ...recommendation, order: index }
    ])
  );
}

function matchesFilter(area) {
  if (activeFilter === "all") {
    return true;
  }

  return area.tags.includes(activeFilter);
}

function matchesSearch(area, query) {
  if (!query) {
    return true;
  }

  const haystack = `${area.name} ${area.nearby} ${area.summary} ${area.search.join(" ")}`.toLowerCase();
  return haystack.includes(query);
}

function formatAmp(area) {
  if (!area.amp) {
    return "No AMP pay-by-space listed";
  }

  if (area.id === "lot-11" || area.id === "lot-23") {
    return "Yes, with a 4-hour AMP maximum";
  }

  return "Yes, with the usual 2-hour AMP maximum";
}

function createBadge(label, className) {
  const span = document.createElement("span");
  span.className = `badge ${className}`;
  span.textContent = label;
  return span;
}

function setActiveArea(areaId) {
  activeAreaId = areaId;
  renderAll();
}

function setDestination(destinationId) {
  activeDestinationId = destinationId;

  if (destinationId) {
    const destination = getDestinationById(destinationId);
    const firstRecommendation = destination?.recommendations[0];

    if (firstRecommendation) {
      activeAreaId = firstRecommendation.lotId;
    }
  }

  renderAll();
}

function populateDestinations() {
  destinations.forEach((destination) => {
    const option = document.createElement("option");
    option.value = destination.id;
    option.textContent = destination.name;
    destinationSelect.appendChild(option);

    if (destination.popular) {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "destination-chip";
      chip.dataset.destination = destination.id;
      chip.textContent = destination.name;
      chip.addEventListener("click", () => {
        setDestination(destination.id);
      });
      destinationChips.appendChild(chip);
    }
  });
}

function renderDestinationControls() {
  destinationSelect.value = activeDestinationId;

  Array.from(destinationChips.children).forEach((chip) => {
    const isActive = chip.dataset.destination === activeDestinationId;
    chip.classList.toggle("active", isActive);
    chip.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function renderRecommendations() {
  const destination = getDestinationById(activeDestinationId);
  recommendationList.innerHTML = "";

  if (!destination) {
    recommendationTitle.textContent = "Select a campus destination";
    recommendationSummary.textContent =
      "We will recommend the strongest visitor lots for that stop and highlight them in the lot list and on the map.";

    const empty = document.createElement("div");
    empty.className = "recommendation-empty";
    empty.textContent =
      "Try Visitor Center, Andersen Library, Young Auditorium, or Wells Hall to get lot suggestions.";
    recommendationList.appendChild(empty);
    return;
  }

  recommendationTitle.textContent = destination.name;
  recommendationSummary.textContent = destination.summary;

  destination.recommendations.forEach((recommendation) => {
    const area = getAreaById(recommendation.lotId);
    if (!area) {
      return;
    }

    const item = document.createElement("button");
    item.type = "button";
    item.className = "recommendation-item";
    item.addEventListener("click", () => setActiveArea(area.id));

    const title = document.createElement("h4");
    title.textContent = area.name;
    const reason = document.createElement("p");
    reason.textContent = recommendation.reason;
    const badges = document.createElement("div");
    badges.className = "badge-row";
    badges.appendChild(
      createBadge(area.tags.includes("day") ? "Day permit" : "Short-term", area.tags.includes("day") ? "day" : "amp")
    );

    if (area.overnight) {
      badges.appendChild(createBadge("Overnight", "overnight"));
    }

    if (area.amp) {
      badges.appendChild(createBadge("AMP", "amp"));
    }

    item.append(title, reason, badges);
    recommendationList.appendChild(item);
  });
}

function renderDetails(area) {
  const recommendationMap = getRecommendationMap();
  const recommendation = recommendationMap.get(area.id);
  const destination = getDestinationById(activeDestinationId);

  detailTitle.textContent = area.name;
  detailSummary.textContent = area.summary;
  detailNearby.textContent = area.nearby;
  detailPermit.textContent = area.permit;
  detailAmp.textContent = formatAmp(area);
  detailOvernight.textContent = area.overnight
    ? "Yes, official overnight visitor lot"
    : "No overnight visitor parking";

  if (recommendation && destination) {
    detailNote.textContent = `${area.note} Recommended for ${destination.name}: ${recommendation.reason}`;
    return;
  }

  detailNote.textContent = area.note;
}

function sortAreas(areas) {
  const recommendationMap = getRecommendationMap();

  return [...areas].sort((left, right) => {
    const leftRecommendation = recommendationMap.get(left.id);
    const rightRecommendation = recommendationMap.get(right.id);

    if (leftRecommendation && rightRecommendation) {
      return leftRecommendation.order - rightRecommendation.order;
    }

    if (leftRecommendation) {
      return -1;
    }

    if (rightRecommendation) {
      return 1;
    }

    return parkingAreas.findIndex((area) => area.id === left.id) - parkingAreas.findIndex((area) => area.id === right.id);
  });
}

function renderResults() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = sortAreas(
    parkingAreas.filter((area) => matchesFilter(area) && matchesSearch(area, query))
  );
  const recommendationMap = getRecommendationMap();

  resultsCount.textContent = `${filtered.length} area${filtered.length === 1 ? "" : "s"} shown`;
  results.innerHTML = "";

  if (!filtered.length) {
    activeAreaId = null;
    detailTitle.textContent = "No matching parking areas";
    detailSummary.textContent = "Try a different building name or switch filters to see more options.";
    detailNearby.textContent = "-";
    detailPermit.textContent = "-";
    detailAmp.textContent = "-";
    detailOvernight.textContent = "-";
    detailNote.textContent = "Campus signage still applies once you arrive.";

    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent =
      "No lots matched that search. Try Wells, Visitor Center, Lot 7, Andersen Library, or AMP.";
    results.appendChild(empty);
    return;
  }

  if (!filtered.some((area) => area.id === activeAreaId)) {
    activeAreaId = filtered[0].id;
  }

  filtered.forEach((area) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "result-card";
    button.dataset.id = area.id;

    const isSelected = area.id === activeAreaId;
    const isRecommended = recommendationMap.has(area.id);

    button.classList.toggle("selected", isSelected);
    button.classList.toggle("recommended", isRecommended);
    button.setAttribute("aria-pressed", isSelected ? "true" : "false");

    if (isSelected) {
      renderDetails(area);
    }

    const top = document.createElement("div");
    top.className = "result-top";

    const copy = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = area.name;
    const location = document.createElement("p");
    location.className = "result-location";
    location.textContent = area.nearby;
    copy.append(title, location);

    const typeBadge = createBadge(area.permit.includes("AMP") ? "Short-term" : "Visitor", "info");
    top.append(copy, typeBadge);

    const badgeRow = document.createElement("div");
    badgeRow.className = "badge-row";

    if (isRecommended) {
      badgeRow.appendChild(createBadge("Recommended", "recommended"));
    }

    if (area.tags.includes("day")) {
      badgeRow.appendChild(createBadge("Day permit", "day"));
    }

    if (area.tags.includes("overnight")) {
      badgeRow.appendChild(createBadge("Overnight", "overnight"));
    }

    if (area.tags.includes("amp")) {
      badgeRow.appendChild(createBadge("AMP", "amp"));
    }

    button.append(top, badgeRow);
    button.addEventListener("click", () => setActiveArea(area.id));
    results.appendChild(button);
  });
}

function renderHotspots() {
  const recommendationMap = getRecommendationMap();
  hotspotLayer.innerHTML = "";

  parkingAreas
    .filter((area) => typeof area.x === "number" && typeof area.y === "number")
    .forEach((area) => {
      const button = document.createElement("button");
      const isSelected = area.id === activeAreaId;
      const isRecommended = recommendationMap.has(area.id);
      const isAmpOnly = area.permit === "AMP pay-by-space only";

      button.type = "button";
      button.className = "map-hotspot";
      button.classList.toggle("active", isSelected);
      button.classList.toggle("amp-only", isAmpOnly && !isSelected && !isRecommended);
      button.classList.toggle("recommended", isRecommended && !isSelected);
      button.style.setProperty("--x", area.x);
      button.style.setProperty("--y", area.y);
      button.textContent = area.hotspotLabel || area.name.replace("Lot ", "");
      button.setAttribute("aria-label", `${area.name}: ${area.nearby}`);
      button.title = `${area.name} - ${area.nearby}`;
      button.addEventListener("click", () => setActiveArea(area.id));

      hotspotLayer.appendChild(button);
    });
}

function renderFilters() {
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === activeFilter;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function renderPages() {
  pagePanels.forEach((panel) => {
    const isActive = panel.dataset.pagePanel === activePage;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });

  pageButtons.forEach((button) => {
    const isActive = button.dataset.page === activePage;
    button.classList.toggle("active", isActive);

    if (isActive) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });
}

function setActivePage(pageId) {
  activePage = pageId;
  renderPages();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderAll() {
  renderPages();
  renderDestinationControls();
  renderFilters();
  renderRecommendations();
  renderResults();
  renderHotspots();
}

populateDestinations();

destinationSelect.addEventListener("change", (event) => {
  setDestination(event.target.value);
});

clearDestinationButton.addEventListener("click", () => {
  setDestination("");
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    renderAll();
  });
});

searchInput.addEventListener("input", renderAll);

pageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActivePage(button.dataset.page);
  });
});

renderAll();
