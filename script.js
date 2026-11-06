// script.js
// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;
  const icon = darkModeToggle ? darkModeToggle.querySelector("i") : null;

  // Check for saved user preference
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    if (icon) {
      icon.classList.remove("bi-moon");
      icon.classList.add("bi-sun");
    }
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");

      if (body.classList.contains("dark-mode")) {
        if (icon) {
          icon.classList.remove("bi-moon");
          icon.classList.add("bi-sun");
        }
        localStorage.setItem("darkMode", "enabled");
      } else {
        if (icon) {
          icon.classList.remove("bi-sun");
          icon.classList.add("bi-moon");
        }
        localStorage.setItem("darkMode", "disabled");
      }
    });
  }

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  const heroContent = document.getElementById("heroContent");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      if (navbar) navbar.classList.add("scrolled");
      if (heroContent) heroContent.classList.add("scrolled");
    } else {
      if (navbar) navbar.classList.remove("scrolled");
      if (heroContent) heroContent.classList.remove("scrolled");
    }

    // Animate event cards when they come into view
    const eventCards = document.querySelectorAll(".event-card");
    const featureCards = document.querySelectorAll(".feature-card");

    eventCards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < window.innerHeight - 100) {
        card.classList.add("visible");
      }
    });

    featureCards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < window.innerHeight - 100) {
        card.classList.add("visible");
      }
    });
  });

  // Initialize Bootstrap Carousel
  const carouselElement = document.getElementById("featuredEventsCarousel");
  if (carouselElement) {
    new bootstrap.Carousel(carouselElement, {
      interval: 5000,
      ride: "carousel",
    });
  }

  // Categories Filter
  const categoryBtns = document.querySelectorAll(".category-btn");

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      categoryBtns.forEach((b) => b.classList.remove("active"));
      // Add active class to clicked button
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");
      console.log(`Filtering by category: ${category}`);
    });
  });

  // Initialize animations on page load
  const sectionTitles = document.querySelectorAll(".section-title");
  sectionTitles.forEach((title, index) => {
    setTimeout(() => {
      title.style.opacity = "1";
      title.style.transform = "translateY(0)";
    }, 300 * index);
  });

  // Trigger scroll event to animate cards that are initially in view
  window.dispatchEvent(new Event("scroll"));
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// events.js - JavaScript for Events Page

document.addEventListener("DOMContentLoaded", function () {
  // Sample events data
  const eventsData = [
    {
      id: 1,
      title: "KPT",
      description: " الماراثون البرمجي للأطفال واليافعين 2019",
      date: "2019-8-26",
      location: "دمشق",
      category: "Educational",
      image:
        "https://www.svuonline.org/sites/default/files/events-images/kpm-2019/69277478_2432792420316683_8519663408004464640_n.jpg",
    },

    {
      id: 2,
      title: "MASAQAT",
      description: " برامج التعلم والتدريب المستمر",
      date: "2025-7-4",
      location: "دمشق",
      category: "Educational",
      image:
        "https://www.svuonline.org/sites/default/files/slideshow-images/-1%D8%A8%D8%AF%D8%A1%20%D8%A7%D9%84%D8%AA%D8%B3%D8%AC%D9%8A%D9%84-01_0.jpg",
    },
    {
      id: 3,
      title: "بطولة الشطرنج الجامعية",
      description:
        "بطولة شطرنج تنافسية مفتوحة لجميع طلاب الجامعة مع جوائز للمراكز الأول",
      date: "2026-11-26",
      location: "مركز النقل الذكي - دمشق",
      category: "Entertaining",
      image:
        "https://cazzacar.com/SVU%20Events%20Guide/assets/img/events/1778347881_19.webp",
    },
    {
      id: 4,
      title: "المسابقات البرمجية",
      description:
        "المسابقة البرمجية للجامعة الافتراضية والمعهد العالي للعلوم التطبيقية والتكنولوجي",
      date: "2018-5-12",
      location: "القاعة الذكية - كلية الهندسة المعلوماتية-دمشق",
      category: "Contests",
      image:
        "https://www.svuonline.org/sites/default/files/styles/large/public/events-images/HIAST-SVU-CPC-2018/IMG_3120.jpg?itok=Q0_atW34",
    },
    {
      id: 5,
      title: "أمسية الأفلام الوثائقية التقنية",
      description:
        "عرض أفلام وثائقية عن تاريخ الحوسبة والذكاء الاصطناعي تليها مناقشة مفتوحة.",
      date: "2026-10-29",
      location: "مركز النقل الذكي - دمشق",
      category: "Entertaining",
      image:
        "https://cazzacar.com/SVU%20Events%20Guide/assets/img/events/1778347668_16.webp",
    },
    {
      id: 6,
      title: "ندوة: مستقبل الحوسبة الكمومية ",
      description:
        " دوة علمية تناقش أحدث التطورات في الحوسبة الكمومية وتأثيرها على أمن المعلومات.",
      date: "2026-11-18",
      location: "القاعة الذكية - كلية الهندسة المعلوماتية-دمشق",
      category: "cultural",
      image:
        "https://cazzacar.com/SVU%20Events%20Guide/assets/img/events/1778347797_18.webp",
    },
    {
      id: 7,
      title: "ورشة عمل: تطوير تطبيقات الويب",
      description:
        "ورشة عملية متقدمة لتطوير تطبيقات ويب كاملة باستخدام PHP وLaravel وMySQL.",
      date: "2026-11-05",
      location: "مختبر الحوسبة السحابية - ITE - دمشق",
      category: "cultural",
      image:
        "https://cazzacar.com/SVU%20Events%20Guide/assets/img/events/1778347738_17.webp",
    },
    {
      id: 8,
      title: "مسابقة الروبوتات الذكية",
      description:
        " سابقة تصميم وبرمجة الروبوتات لتنفيذ مهام محددة باستخدام الذكاء الاصطناعي",
      date: "2026-10-01",
      location: "القاعة الذكية - كلية الهندسة المعلوماتية_دمشق",
      category: "Contests",
      image:
        "https://cazzacar.com/SVU%20Events%20Guide/assets/img/events/1778347416_13.webp",
    },
    {
      id: 9,
      title: "اليوم الترفيهي المفتوح",
      description:
        "يوم ترفيهي مفتوح يشمل ألعاباً جماعية وعروضاً موسيقية ومسابقات ثقافية.",
      date: "2026-10-12",
      location: "الملعب الجامعي",
      category: "Entertaining",
      image:
        "https://cazzacar.com/SVU%20Events%20Guide/assets/img/events/1778347481_14.webp",
    },
    {
      id: 10,
      title: "ماراثون SVU الرياضي",
      description:
        " ماراثون رياضي بمشاركة طلابية واسعة يشمل سباقات 5كم و10كم مع توزيع ميداليات",
      date: "2026-08-16",
      location: "الملعب الجامعي - دمشق",
      category: "Entertaining",
      image:
        "https://cazzacar.com/SVU%20Events%20Guide/assets/img/events/1778346779_7.webp",
    },
    {
      id: 11,
      title: "رحلة استكشاف أنظمة النقل الذكية ",
      description:
        " زيارة ميدانية لمركز التحكم المروري الذكي للاطلاع على أنظمة النقل الحديثة.",
      date: "2026-06-28",
      location: "مركز النقل الذكي - دمشق",
      category: "Entertaining",
      image:
        "https://cazzacar.com/SVU%20Events%20Guide/assets/img/events/1778347119_10.webp",
    },
    {
      id: 12,
      title: "مسابقة المشاريع الريادية",
      description:
        "مسابقة لعرض مشاريع ريادية تقنية أمام لجنة تحكيم من أكاديميين ومستثمرين.",
      date: "2026-09-20",
      location: "مركز النقل الذكي - دمشق",
      category: "Contests",
      image:
        "https://cazzacar.com/SVU%20Events%20Guide/assets/img/events/1778347340_12.webp",
    },
    {
      id: 13,
      title: "مهرجان الطالب المبرمج",
      description:
        "مسابقة برمجة تنافسية بين طلاب كليات الهندسة المعلوماتية على مستوى الجامعات السورية",
      date: "2026-07-28",
      location: "القاعة الذكية - كلية الهندسة المعلوماتية_دمشق",
      category: "cultural",
      image:
        "https://cazzacar.com/SVU%20Events%20Guide/assets/img/events/1778346607_5.webp",
    },
    {
      id: 14,
      title:
        "حلقة بحث معمقة: تشفير العملات الرقمية وتطبيقاتها في الأنظمة المالية",
      description:
        "يقدمها الطالب مؤيد محمد سامر زعويط، تستعرض تقنيات التشفير المستخدمة في البيتكوين والإيثيريوم وخوارزميات التواقيع الرقمية.",
      date: "2026-06-25",
      location: "القاعة الذكية - كلية الهندسة المعلوماتية_دمشق",
      category: "Educational",
      image:
        "https://cazzacar.com/SVU%20Events%20Guide/assets/img/events/1778333986_photo_2026-05-09_16-37-54.webp",
    },
  ];

  // Get elements
  const eventsGrid = document.getElementById("eventsGrid");
  const searchInput = document.getElementById("searchInput");
  const sortFilter = document.getElementById("sortFilter"); // Changed from dateFilter to sortFilter
  const categoryFilter = document.getElementById("categoryFilter");
  const locationFilter = document.getElementById("locationFilter");
  const pagination = document.getElementById("pagination");

  // Current page
  let currentPage = 1;
  const eventsPerPage = 6;

  // Initialize the page
  function initPage() {
    // Set up event listeners
    searchInput.addEventListener("input", filterEvents);
    sortFilter.addEventListener("change", filterEvents); // Changed event listener
    categoryFilter.addEventListener("change", filterEvents);
    locationFilter.addEventListener("change", filterEvents);

    // Display events
    displayEvents();
  }

  // Filter events based on search and filters
  function filterEvents() {
    currentPage = 1; // Reset to first page when filtering
    displayEvents();
  }

  // Get filtered and sorted events
  function getFilteredEvents() {
    const searchTerm = searchInput.value.toLowerCase();
    const sortValue = sortFilter.value; // Get sort value (newest or oldest)
    const categoryValue = categoryFilter.value;
    const locationValue = locationFilter.value;

    // First, filter events
    let filteredEvents = eventsData.filter((event) => {
      // Search filter - البحث يعمل عن طريق مطابقة النص المدخل مع عنوان الفعالية
      // يمكنك كتابة جزء من اسم الفعالية وسيتم عرض جميع الفعاليات التي تحتوي على هذا الجزء
      if (searchTerm && !event.title.toLowerCase().includes(searchTerm)) {
        return false;
      }

      // Category filter
      if (categoryValue && event.category !== categoryValue) {
        return false;
      }

      // Location filter
      if (locationValue && event.location !== locationValue) {
        return false;
      }

      return true;
    });

    // Then, sort events
    filteredEvents.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (sortValue === "newest") {
        // الأحدث أولاً (تاريخ أحدث يعني رقم أكبر)
        return dateB - dateA;
      } else {
        // الأقدم أولاً (تاريخ أقدم يعني رقم أصغر)
        return dateA - dateB;
      }
    });

    return filteredEvents;
  }

  // Display events with pagination
  function displayEvents() {
    const filteredEvents = getFilteredEvents();
    const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

    // Get events for current page
    const startIndex = (currentPage - 1) * eventsPerPage;
    const endIndex = startIndex + eventsPerPage;
    const eventsToDisplay = filteredEvents.slice(startIndex, endIndex);

    // Clear events grid
    eventsGrid.innerHTML = "";

    // Display events
    if (eventsToDisplay.length === 0) {
      eventsGrid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <h3>لا توجد فعاليات مطابقة لمعايير البحث</h3>
                    <p class="mt-3">جرب تعديل معايير البحث أو التصفية</p>
                </div>
            `;
    } else {
      eventsToDisplay.forEach((event) => {
        const eventCard = createEventCard(event);
        const col = document.createElement("div");
        col.className = "col-md-6 col-lg-4 mb-4";
        col.appendChild(eventCard);
        eventsGrid.appendChild(col);
      });
    }

    // Display pagination
    displayPagination(totalPages);
  }

  // Create event card element
  function createEventCard(event) {
    const card = document.createElement("div");
    card.className = "event-card";

    // Format date
    const eventDate = new Date(event.date);
    const formattedDate = `${eventDate.toLocaleDateString("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })}`;

    // Get category Arabic name
    const categoryArabic = getCategoryArabic(event.category);
    const categoryClass = `tag-${event.category}`;

    card.innerHTML = `
            <img src="${event.image}" alt="${event.title}" class="event-image">
            <div class="event-content">
                <h3 class="event-title">${event.title}</h3>
                <div class="event-date"><i class="bi bi-calendar-event"></i> ${formattedDate}</div>
                <div class="event-location"><i class="bi bi-geo-alt"></i> ${event.location}</div>
                <p class="event-description">${event.description}</p>
                <div class="event-tags">
                    <span class="event-tag ${categoryClass}">${categoryArabic}</span>
                </div>
                <a href="details.html" class="btn-details">عرض التفاصيل</a>
            </div>
        `;

    return card;
  }

  // Get Arabic category name
  function getCategoryArabic(category) {
    const categories = {
      cultural: "ثقافي",
      Contests: "مسابقات",
      Entertaining: "ترفيهي",
      Educational: "تعليمي",
    };
    return categories[category] || category;
  }

  // Display pagination
  function displayPagination(totalPages) {
    pagination.innerHTML = "";

    if (totalPages <= 1) {
      return;
    }

    // Previous button
    const prevItem = document.createElement("li");
    prevItem.className = `page-item ${currentPage === 1 ? "disabled" : ""}`;
    prevItem.innerHTML = `<a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>`;
    prevItem.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        displayEvents();
      }
    });
    pagination.appendChild(prevItem);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      const pageItem = document.createElement("li");
      pageItem.className = `page-item ${i === currentPage ? "active" : ""}`;
      pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
      pageItem.addEventListener("click", (e) => {
        e.preventDefault();
        currentPage = i;
        displayEvents();
      });
      pagination.appendChild(pageItem);
    }

    // Next button
    const nextItem = document.createElement("li");
    nextItem.className = `page-item ${
      currentPage === totalPages ? "disabled" : ""
    }`;
    nextItem.innerHTML = `<a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>`;
    nextItem.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage < totalPages) {
        currentPage++;
        displayEvents();
      }
    });
    pagination.appendChild(nextItem);
  }

  // Initialize the page
  initPage();
});

// details.js - JavaScript for Event Details Page
// event-details.js - JavaScript for Event Details Page

// event-details.js - JavaScript for Event Details Page

document.addEventListener("DOMContentLoaded", function () {
  // Sample events data (20 events)
  const eventsData = [
    {
      id: 1,
      title: "KPT",
      description: " الماراثون البرمجي للأطفال واليافعين 2019",
      date: "2019-8-26",
      location: "دمشق",
      category: "Educational",
      image:
        "https://www.svuonline.org/sites/default/files/events-images/kpm-2019/69277478_2432792420316683_8519663408004464640_n.jpg",
      longDescription:
        "يعد الماراثون البرمجي للأطفال واليافعين، الذي تطلقه الجامعة الافتراضية السورية بالتعاون مع هيئة التميز والإبداع، مبادرة تعليمية تهدف إلى اكتشاف المواهب البرمجية في سن مبكرة وتنمية مهارات التفكير المنطقي والحوسبي لدى الناشئة. تعتمد المسابقة على لغة(سكراتش) للأطفال ولغة c++ ومسائل التفكير المنطقي لليافعين عبر مراكز نفاذ الجامعة في مختلف المحافظات",
      organizer: "الجامعة الافتراضية السورية بالتعاون مع هيئة التميز والأبداع",
      contact: "+963 11 234 5678",
      email: "info@SVU-events.com",
      website: "www.info-SVU-events.com",
      address: "مركز الجامعة الأفتراضية-دمشق",
      startTime: "09:00",
      endTime: "12:00",
    },
    {
      id: 2,
      title: "MASAQAT",
      description: " برامج التعلم والتدريب المستمر",
      date: "2025-7-4",
      location: "دمشق",
      category: "Educational",
      image:
        "https://www.svuonline.org/sites/default/files/slideshow-images/-1%D8%A8%D8%AF%D8%A1%20%D8%A7%D9%84%D8%AA%D8%B3%D8%AC%D9%8A%D9%84-01_0.jpg",
      longDescription:
        "يُعد برنامج التعلم والتدريب المستمر  (MASAQAT) مبادرة تدريبية متخصصة تهدف إلى ربط التعليم الأكاديمي بمتطلبات سوق العمل من خلال تقديم دورات تدريبية متكاملة عبر الإنترنت في مجالات متنوعة. تشمل هذه المجالات مساقات الشبكات والاتصالات، الإعلام والتدوين الرقمي، الهندسة المدنية والمعمارية، بالإضافة إلى السياحة والفنادق والتسويق الإلكتروني. ",
      organizer:
        "مركز التعلم مدى الحياة (LLC) التابع للجامعة الافتراضية السوية",
      contact: "+963 21 345 6789",
      email: "info@SVU-events.com",
      website: "www.info-SVU-events.com",
      address: "مركز الجامعة الأفتراضية-دمشق",
      startTime: "08:00",
      endTime: "14:00",
    },
    {
      id: 3,
      title: "بطولة الشطرنج الجامعية",
      description:
        "بطولة شطرنج تنافسية مفتوحة لجميع طلاب الجامعة مع جوائز للمراكز الأول",
      date: "2026-11-26",
      location: " دمشق",
      category: "Entertaining",
      image:
        "https://cazzacar.com/SVU%20Events%20Guide/assets/img/events/1778347881_19.webp",
      longDescription:
        "تعد بطولة الشطرنج الجامعية في الجامعة الافتراضية السورية فعالية رياضية وفكرية تنافسية تُقام بشكل دوري ومفتوحة لجميع طلاب الجامعة. تهدف هذه البطولة إلى تعزيز الأنشطة الرياضية والذهنية، وتنمية مهارات التفكير الاستراتيجي والتركيز لدى الطلاب، إلى جانب خلق بيئة تفاعلية مميزة تجمع بين الذكاء وروح التحدي ,حيث يتم رصد جوائز تكريمية للمراكز الأولى الفائزة بالمسابقة.",
      organizer: "الجامعة الأفتراضية السورية",
      contact: "+963 31 456 7890",
      email: "info@SVU-events.com",
      website: "www.info-SVU-events.com",
      address: "مركز النقل الذكي - دمشق",
      startTime: "09:00",
      endTime: "12:00",
    },
    {
      id: 4,
      title: "المسابقات البرمجية",
      description:
        "المسابقة البرمجية للجامعة الافتراضية والمعهد العالي للعلوم التطبيقية والتكنولوجي",
      date: "2018-5-12",
      location: "دمشق",
      category: "Contests",
      image:
        "https://www.svuonline.org/sites/default/files/styles/large/public/events-images/HIAST-SVU-CPC-2018/IMG_3120.jpg?itok=Q0_atW34",
      longDescription:
        "تُعد المسابقة البرمجية الجامعية في الجامعة الافتراضية السورية (SVUCPC) حدثاً تكنولوجياً سنوياً رائداً يجمع الطلاب الشغوفين بالبرمجة وحل المشكلات ليتنافسوا ضمن فرق بروح تفاعلية عالية. تهدف هذه المسابقة إلى تعزيز التفكير الحوسبي، والقدرة على ابتكار الخوارزميات، وتطوير مهارات العمل الجماعي تحت الضغط، حيث يسعى كل فريق لحل أكبر عدد من المسائل الرياضية والبرمجية المعقدة باستخدام لغات برمجية معتمدة مثل C++ في وقت محدد",
      organizer: "الجامعة الأفتراضية السورية",
      contact: "+963 43 567 8901",
      email: "acm_pd@svuonline.org",
      website: "www.acm_pd-svuonline.org",
      address: "القاعة الذكية - كلية الهندسة المعلوماتية-دمشق",
      startTime: "07:00",
      endTime: "14:00",
    },
    {
      id: 5,
      title: "أمسية الأفلام الوثائقية التقنية",
      description:
        "عرض أفلام وثائقية عن تاريخ الحوسبة والذكاء الاصطناعي تليها مناقشة مفتوحة.",
      date: "2026-10-29",
      location: "دمشق",
      category: "Entertaining",
      image:
        "https://cazzacar.com/SVU%20Events%20Guide/assets/img/events/1778347668_16.webp",
      longDescription:
        "عتبر أمسية الأفلام الوثائقية التقنية مبادرة ثقافية ومعرفية مميزة تنظمها الجامعة الافتراضية السورية بهدف نشر الوعي الرقمي ومواكبة أحدث التطورات في عالم التكنولوجيا. تجمع هذه الفعالية الطلاب والمهتمين في أجواء تفاعلية لعرض ومناقشة أفلام وثائقية تسلط الضوء على قضايا تقنية مفصلية، مثل الذكاء الاصطناعي، تاريخ الحوسبة، الأمن السيبراني، وتأثير الثورة الرقمية على المجتمع",
      organizer: "الجامعة الأفتراضية السورية",
      contact: "+963 41 678 9012",
      email: "info@SVU-events.com",
      website: "www.SVU-events.com",
      address: "مركز النقل الذكي - دمشق",
      startTime: "14:00",
      endTime: "18:30",
    },
    {
      id: 6,
      title: "ندوة: مستقبل الحوسبة الكمومية ",
      description:
        " دوة علمية تناقش أحدث التطورات في الحوسبة الكمومية وتأثيرها على أمن المعلومات.",
      date: "2026-11-18",
      location: "دمشق",
      category: "cultural",
      image:
        "https://cazzacar.com/SVU%20Events%20Guide/assets/img/events/1778347797_18.webp",
      longDescription:
        "هي فعالية علمية وأكاديمية متخصصة تهدف إلى تسليط الضوء على الطفرة التكنولوجية القادمة واستكشاف الآفاق اللامتناهية التي تقدمها تكنولوجيا الكم. تناقش الندوة مبادئ ميكانيكا الكم وتطبيقاتها في معالجة البيانات الفائقة، وتأثيرها المباشر على مجالات الأمن السيبراني، التشفير، الذكاء الاصطناعي، وتحليل البيانات الضخمة، مستشرفةً التحولات الجذرية التي ستحدثها في قطاعات الصناعة والبحث العلمي.",
      organizer: "الجامعة الأفتراضية السورية",
      contact: "+963 11 789 0123",
      email: "info@SVU-events.com",
      website: "WWW.info-SVU-events.com",
      address:
        "مركز المؤتمرات, دمشلقاعة الذكية - كلية الهندسة المعلوماتية-دمشق",
      startTime: "10:00",
      endTime: "17:00",
    },
    {
      id: 7,
      title: "ورشة عمل: تطوير تطبيقات الويب",
      description:
        "ورشة عملية متقدمة لتطوير تطبيقات ويب كاملة باستخدام PHP وLaravel وMySQL.",
      date: "2026-11-05",
      location: "دمشق",
      category: "cultural",
      image:
        "https://cazzacar.com/SVU%20Events%20Guide/assets/img/events/1778347738_17.webp",
      longDescription:
        "تُعد ورشة عمل تطوير تطبيقات الويب برنامجاً تدريبياً وتفاعلياً مكثفاً يهدف إلى تزويد المشاركين بالمهارات العملية اللازمة لتصميم وبناء المواقع والتطبيقات الإلكترونية الحديثة. تغطي الورشة محاور أساسية تشمل تقنيات واجهات المستخدم (Frontend) مثل HTML وCSS وJavaScript، بالإضافة إلى أساسيات تطوير الخوادم وقواعد البيانات (Backend)، مع التركيز على التطبيق العملي وبناء مشاريع حقيقية تواكب متطلبات سوق العمل البرمجي",
      organizer: "الجامعة الأفتراضية السورية",
      contact: "+963 21 890 1234",
      email: "info@SVU-events.com",
      website: "info-SVU-events.com",
      address: "مختبر الحوسبة السحابية - ITE - دمشق",
      startTime: "14:00",
      endTime: "18:00",
    },
    {
      id: 8,
      title: "مسابقة الروبوتات الذكية",
      description:
        " سابقة تصميم وبرمجة الروبوتات لتنفيذ مهام محددة باستخدام الذكاء الاصطناعي",
      date: "2026-10-01",
      location: "دمشق",
      category: "Contests",
      image:
        "https://cazzacar.com/SVU%20Events%20Guide/assets/img/events/1778347416_13.webp",
      longDescription:
        "شكل مسابقة الروبوتات الذكية (مثل مشاركات الطلاب التنافسية في الفعاليات الوطنية والجامعية مثل مسابقة SYROBIX) منصة تقنية تفاعلية تهدف إلى تحفيز مهارات الابتكار، والبرمجة، والتصميم الميكانيكي لدى جيل الشباب والطلاب. تركز هذه المسابقات على وضع المتنافسين أمام تحديات ميدانية حقيقية مثل هندسة وبرمجة الروبوتات القادرة على تجاوز العوائق، وتنفيذ مهام الإنقاذ الذكية، والتحكم الذاتي بالكامل.",
      organizer: "الجامعة الأفتراضية السورية",
      contact: "+963 11 901 2345",
      email: "info@SVU-events.com",
      website: "www.info-SVU-events.com",
      address: "القاعة الذكية - كلية الهندسة المعلوماتية_دمشق",
      ticketPrice: "1500 ل.س للشخص الواحد",
      startTime: "08:00",
      endTime: "13:00",
    },
    {
      id: 9,
      title: "اليوم الترفيهي المفتوح",
      description:
        "يوم ترفيهي مفتوح يشمل ألعاباً جماعية وعروضاً موسيقية ومسابقات ثقافية.",
      date: "2026-10-12",
      location: "دمشق",
      category: "Entertaining",
      image:
        "https://cazzacar.com/SVU%20Events%20Guide/assets/img/events/1778347481_14.webp",
      longDescription:
        "يُعد اليوم الترفيهي المفتوح فعالية اجتماعية وتفاعلية دورية تنظمها الجامعة للترويج عن الطلاب وكسر الروتين الأكاديمي، من خلال خلق بيئة حيوية تجمع بين الترفيه والتعارف خارج أوقات الدراسة. تشمل أنشطة هذا اليوم مسابقات رياضية خفيفة، ألعاباً ذهنية وتنافسية، فقرات فنية وموسيقية، بالإضافة إلى معارض وأنشطة تفاعلية متنوعة تتيح للطلاب وأعضاء الهيئة التدريسية والإدارية فرصة التواصل وبناء علاقات اجتماعية متينة.",
      organizer: "الجامعة الأفتراضية السورية",
      contact: "+963 31 012 3456",
      email: "info@SVU-events.com",
      website: "www.info-SVU-events.com",
      address: "الملعب الجامعي",

      startTime: "10:00",
      endTime: "21:00",
    },
    {
      id: 10,
      title: "ماراثون SVU الرياضي",
      description:
        " ماراثون رياضي بمشاركة طلابية واسعة يشمل سباقات 5كم و10كم مع توزيع ميداليات",
      date: "2026-08-16",
      location: "دمشق",
      category: "Entertaining",
      image:
        "https://cazzacar.com/SVU%20Events%20Guide/assets/img/events/1778346779_7.webp",
      longDescription:
        "يُعد ماراثون SVU الرياضي حدثاً رياضياً سنوياً تنظمه الجامعة الافتراضية السورية بهدف تعزيز النشاط البدني والصحة العامة بين الطلاب وأعضاء الهيئة التدريسية والإدارية. يشمل الماراثون سباقات لمسافات مختلفة، مثل 5 كم و10 كم، ويتيح للمشاركين فرصة التنافس بروح رياضية عالية. يتميز الحدث بتوفير جوائز وميداليات للمراكز الأولى، بالإضافة إلى إقامة فعاليات ترفيهية وموسيقية على هامش السباق لتعزيز التجربة الاجتماعية والرياضية للمشاركين.",
      organizer: "الجامعة الأفتراضية السورية",
      contact: "+963 21 123 4567",
      email: "info@SVU-events.com",
      website: "www.info-SVU-events.com",
      address: "الملعب الجامعي - دمشق",
      startTime: "19:30",
      endTime: "23:00",
    },
    {
      id: 11,
      title: "رحلة استكشاف أنظمة النقل الذكية ",
      description:
        " زيارة ميدانية لمركز التحكم المروري الذكي للاطلاع على أنظمة النقل الحديثة.",
      date: "2026-06-28",
      location: "دمشق",
      category: "Entertaining",
      image:
        "https://cazzacar.com/SVU%20Events%20Guide/assets/img/events/1778347119_10.webp",
      longDescription:
        "تُعد رحلة استكشاف أنظمة النقل الذكية (ITS) مبادرة علمية وميدانية تهدف إلى تعريف الطلاب بالتقنيات الحديثة المستخدمة في إدارة وتطوير قطاع النقل والمواصلات. تركز الرحلة على الجوانب التطبيقية لكيفية دمج الذكاء الاصطناعي، وإنترنت الأشياء (IoT)، والبيانات الضخمة في تحسين السلامة المرورية، وتقليل الازدحام، وتحسين كفاءة الطاقة في الشبكات الطرقية",
      organizer: "الجامعة الأفتراضية السورية",
      contact: "+963 41 234 5678",
      email: "info@SVU-events.com",
      website: "www.info-SVU-events.com",
      address: "مركز النقل الذكي - دمشق",
      startTime: "09:00",
      endTime: "19:00",
    },
    {
      id: 12,
      title: "مسابقة المشاريع الريادية",
      description:
        "مسابقة لعرض مشاريع ريادية تقنية أمام لجنة تحكيم من أكاديميين ومستثمرين.",
      date: "2026-09-20",
      location: "دمشق",
      category: "Contests",
      image:
        "https://cazzacar.com/SVU%20Events%20Guide/assets/img/events/1778347340_12.webp",
      longDescription:
        "تُعد مسابقة المشاريع الريادية في الجامعة الافتراضية السورية (SVU) مبادرة استراتيجية هامة تندرج ضمن أنشطة الجامعة في ريادة الأعمال، وتهدف إلى تشجيع الطلاب والشباب المبتكرين على تحويل أفكارهم الإبداعية إلى نماذج عمل حقيقية وقابلة للتطبيق. تركز المسابقة بشكل رئيسي على المشاريع التقنية والرقمية التي توظف تقنيات متطورة مثل الذكاء الاصطناعي لحل مشكلات واقعية في قطاعات حيوية كالصحة، والتعليم، والتجارة الإلكترونية، والخدمات الذكية. توفر الجامعة من خلال هذه الفعالية بيئة داعمة تتيح للمشاركين عرض مشاريعهم أمام لجان تحكيم متخصصة تضم نخبة من الأكاديميين والمستثمرين",
      organizer: "الجامعة الأفتراضية السورية",
      contact: "+963 11 345 6789",
      email: "info@SVU-events.com",
      website: "www.info-SVU-events.com",
      address: "مركز النقل الذكي - دمشق",
      startTime: "10:00",
      endTime: "16:00",
    },
    {
      id: 13,
      title: "مهرجان الطالب المبرمج",
      description:
        "مسابقة برمجة تنافسية بين طلاب كليات الهندسة المعلوماتية على مستوى الجامعات السورية",
      date: "2026-07-28",
      location: "دمشق",
      category: "cultural",
      image:
        "https://cazzacar.com/SVU%20Events%20Guide/assets/img/events/1778346607_5.webp",
      longDescription:
        "يُعد مهرجان الطالب المبرمج مسابقة برمجة تنافسية رائدة تُقام بين طلاب كليات الهندسة المعلوماتية على مستوى الجامعات السورية. تهدف هذه الفعالية إلى إشعال روح التنافس العلمي بين المبرمجين الشباب، وتطوير قدراتهم الإبداعية في الخوارزميات وحل المشكلات المعقدة تحت ضغط الوقت",
      organizer: "الجامعة الأفتراضية السورية",
      contact: "+963 11 345 6789",
      email: "info@SVU-events.com",
      website: "www.info-SVU-events.com",
      address: "القاعة الذكية - كلية الهندسة المعلوماتية_دمشق",
      startTime: "10:00",
      endTime: "16:00",
    },
    {
      id: 14,
      title:
        "حلقة بحث معمقة: تشفير العملات الرقمية وتطبيقاتها في الأنظمة المالية",
      description:
        "يقدمها الطالب مؤيد محمد سامر زعويط، تستعرض تقنيات التشفير المستخدمة في البيتكوين والإيثيريوم وخوارزميات التواقيع الرقمية.",
      date: "2026-06-25",
      location: "دمشق",
      category: "Educational",
      image:
        "https://cazzacar.com/SVU%20Events%20Guide/assets/img/events/1778333986_photo_2026-05-09_16-37-54.webp",
      longDescription:
        "تُعد حلقة البحث المعمقة حول تشفير العملات الرقمية وتطبيقاتها في الأنظمة المالية ندوة علمية وأكاديمية متقدمة تنظمها الجامعة للبحث في التقنيات الحديثة التي تقود الثورة المالية المعاصرة. تركز الحلقة على استكشاف آليات عمل العملات المشفرة، تقنية السلسلة الرقمية (Blockchain)، العقود الذكية، وتطبيقاتها في الأنظمة والمصارف المالية، إلى جانب مناقشة التحديات الأمنية والقانونية والفرص التي تتيحها هذه التقنيات في تطوير الاقتصاد الرقمي.",
      organizer: "الجامعة الأفتراضية السورية",
      contact: "+963 11 345 6789",
      email: "info@SVU-events.com",
      website: "www.info-SVU-events.com",
      address: "القاعة الذكية - كلية الهندسة المعلوماتية_دمشق",
      startTime: "10:00",
      endTime: "16:00",
    },
  ];

  // Get elements
  const eventsList = document.getElementById("eventsList");
  const eventDetailModal = new bootstrap.Modal(
    document.getElementById("eventDetailModal"),
  );
  const eventDetailContent = document.getElementById("eventDetailContent");
  const relatedEventsGrid = document.getElementById("relatedEventsGrid");

  // Initialize the page
  function initPage() {
    // Display events list
    displayEventsList();

    // Display default related events (first 4 events)
    displayDefaultRelatedEvents();
  }

  // Display events list
  function displayEventsList() {
    // Clear events list
    eventsList.innerHTML = "";

    // Display events
    eventsData.forEach((event) => {
      const eventItem = createEventListItem(event);
      eventsList.appendChild(eventItem);
    });
  }

  // Display default related events
  function displayDefaultRelatedEvents() {
    if (!relatedEventsGrid) return;

    // Clear related events grid
    relatedEventsGrid.innerHTML = "";

    // Get first 4 events as default related events
    const defaultRelatedEvents = eventsData.slice(0, 4);

    // Display related events
    defaultRelatedEvents.forEach((event) => {
      const relatedEventCard = createRelatedEventCard(event);
      relatedEventsGrid.appendChild(relatedEventCard);
    });
  }

  // Create event list item element
  function createEventListItem(event) {
    const listItem = document.createElement("div");
    listItem.className = "event-list-item";
    listItem.setAttribute("data-event-id", event.id);

    // Format date
    const eventDate = new Date(event.date);
    const formattedDate = `${eventDate.toLocaleDateString("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })}`;

    // Get category Arabic name
    const categoryArabic = getCategoryArabic(event.category);
    const categoryClass = `tag-${event.category}`;

    listItem.innerHTML = `
            <div class="event-list-item-content">
                <img src="${event.image}" alt="${event.title}" class="event-list-item-image">
                <div class="event-list-item-info">
                    <h3 class="event-list-item-title">${event.title}</h3>
                    <div class="event-list-item-meta">
                        <div class="event-list-item-date"><i class="bi bi-calendar-event"></i> ${formattedDate}</div>
                        <div class="event-list-item-location"><i class="bi bi-geo-alt"></i> ${event.location}</div>
                        <div class="event-list-item-category ${categoryClass}">${categoryArabic}</div>
                    </div>
                    <p class="event-list-item-description">${event.description}</p>
                </div>
                <div class="event-list-item-arrow">
                    <i class="bi bi-arrow-left"></i>
                </div>
            </div>
        `;

    // Add click event to list item
    listItem.addEventListener("click", function () {
      const eventId = this.getAttribute("data-event-id");
      showEventDetails(eventId);
    });

    return listItem;
  }

  // Show event details in modal
  function showEventDetails(eventId) {
    const event = eventsData.find((e) => e.id == eventId);
    if (!event) return;

    // Format date
    const eventDate = new Date(event.date);
    const formattedDate = `${eventDate.toLocaleDateString("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })}`;

    // Get category Arabic name
    const categoryArabic = getCategoryArabic(event.category);

    // Create event details HTML
    const eventDetailsHTML = `
            <div class="event-detail-header">
                <img src="${event.image}" alt="${event.title}" class="event-detail-image">
                <h2 class="event-detail-title">${event.title}</h2>
                <div class="event-detail-meta">
                    <div class="event-detail-meta-item">
                        <i class="bi bi-calendar-event"></i>
                        <span>${formattedDate}</span>
                    </div>
                    <div class="event-detail-meta-item">
                        <i class="bi bi-geo-alt"></i>
                        <span>${event.location}</span>
                    </div>
                    <div class="event-detail-meta-item">
                        <i class="bi bi-tag"></i>
                        <span>${categoryArabic}</span>
                    </div>
                    <div class="event-detail-meta-item">
                        <i class="bi bi-clock"></i>
                        <span>${event.startTime} - ${event.endTime}</span>
                    </div>
                </div>
            </div>
            
            <div class="event-detail-description">
                ${event.longDescription}
            </div>
            
            <div class="event-detail-additional">
                <h3 class="event-detail-section-title">معلومات إضافية</h3>
                <div class="event-detail-info">
                    <div class="event-detail-info-item">
                        <div class="event-detail-info-label">المنظم:</div>
                        <div class="event-detail-info-value">${event.organizer}</div>
                    </div>
                    <div class="event-detail-info-item">
                        <div class="event-detail-info-label">عنوان الفعالية:</div>
                        <div class="event-detail-info-value">${event.address}</div>
                    </div>
                   
                    <div class="event-detail-info-item">
                        <div class="event-detail-info-label">هاتف الاتصال:</div>
                        <div class="event-detail-info-value">${event.contact}</div>
                    </div>
                    <div class="event-detail-info-item">
                        <div class="event-detail-info-label">البريد الإلكتروني:</div>
                        <div class="event-detail-info-value">${event.email}</div>
                    </div>
                    <div class="event-detail-info-item">
                        <div class="event-detail-info-label">الموقع الإلكتروني:</div>
                        <div class="event-detail-info-value">${event.website}</div>
                    </div>
                </div>
            </div>
            <div class="event-detail-actions">
             <a href="contact.html">
                <button class="event-detail-action-btn event-detail-primary-btn">
                    <i class="bi bi-ticket"></i> المشاركة بالفعالية
                </button>
                </a>
                <button class="event-detail-action-btn event-detail-secondary-btn">
                    <i class="bi bi-share"></i> مشاركة الفعالية
                </button>
                 <button class="event-detail-action-btn event-detail-secondary-btn" data-bs-dismiss="modal">
                    <i class="bi bi-arrow-left"></i> الرجوع إلى القائمة
                </button>
            </div>
        `;

    // Set event details content
    eventDetailContent.innerHTML = eventDetailsHTML;

    // Show related events
    showRelatedEvents(eventId);

    // Show modal
    eventDetailModal.show();

    // Add event listeners to action buttons
    const shareBtn = eventDetailContent.querySelector(
      ".event-detail-secondary-btn:nth-child(2)",
    );
    if (shareBtn) {
      shareBtn.addEventListener("click", function () {
        if (navigator.share) {
          navigator.share({
            title: event.title,
            text: event.description,
            url: window.location.href,
          });
        } else {
          alert("مشاركة الفعالية: " + event.title + "\n" + event.description);
        }
      });
    }
  }

  // Show related events based on current event
  function showRelatedEvents(currentEventId) {
    const currentEvent = eventsData.find((e) => e.id == currentEventId);
    if (!currentEvent) return;

    const relatedEventsGrid = document.getElementById("relatedEventsGrid");
    if (!relatedEventsGrid) return;

    // Clear related events grid
    relatedEventsGrid.innerHTML = "";

    // Get related events (same category, different location, or same location, different category)
    let relatedEvents = eventsData.filter((event) => {
      return (
        event.id != currentEventId &&
        (event.category === currentEvent.category ||
          event.location === currentEvent.location)
      );
    });

    // If we don't have enough related events, add some random ones
    if (relatedEvents.length < 4) {
      const remainingEvents = eventsData.filter(
        (event) =>
          event.id != currentEventId &&
          !relatedEvents.some((re) => re.id === event.id),
      );

      // Shuffle remaining events
      for (let i = remainingEvents.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [remainingEvents[i], remainingEvents[j]] = [
          remainingEvents[j],
          remainingEvents[i],
        ];
      }

      // Add up to 4 more events
      const needed = 4 - relatedEvents.length;
      relatedEvents = relatedEvents.concat(remainingEvents.slice(0, needed));
    }

    // Limit to 4 events
    relatedEvents = relatedEvents.slice(0, 4);

    // Display related events
    relatedEvents.forEach((event) => {
      const relatedEventCard = createRelatedEventCard(event);
      relatedEventsGrid.appendChild(relatedEventCard);
    });
  }

  // Create related event card element
  function createRelatedEventCard(event) {
    const card = document.createElement("div");
    card.className = "related-event-card";
    card.setAttribute("data-event-id", event.id);

    // Format date
    const eventDate = new Date(event.date);
    const formattedDate = `${eventDate.toLocaleDateString("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })}`;

    // Get category Arabic name
    const categoryArabic = getCategoryArabic(event.category);
    const categoryClass = `tag-${event.category}`;

    card.innerHTML = `
            <img src="${event.image}" alt="${event.title}" class="related-event-image">
            <span class="related-event-tag ${categoryClass}">${categoryArabic}</span>
            <div class="related-event-content">
                <h3 class="related-event-title">${event.title}</h3>
                <div class="related-event-date"><i class="bi bi-calendar-event"></i> ${formattedDate}</div>
                <div class="related-event-location"><i class="bi bi-geo-alt"></i> ${event.location}</div>
                <p class="related-event-description">${event.description}</p>
                <button class="related-event-btn view-related-details-btn" data-event-id="${event.id}">عرض التفاصيل</button>
            </div>
        `;

    // Add click event to card
    card.addEventListener("click", function () {
      const eventId = this.getAttribute("data-event-id");
      showEventDetails(eventId);
    });

    // Add click event to button (prevent event bubbling)
    const viewDetailsBtn = card.querySelector(".view-related-details-btn");
    viewDetailsBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      const eventId = this.getAttribute("data-event-id");
      showEventDetails(eventId);
    });

    return card;
  }

  // Get Arabic category name
  function getCategoryArabic(category) {
    const categories = {
      cultural: "ثقافي",
      Contests: "مسابقات",
      Entertaining: "ترفيهي",
      Educational: "تعليمي",
    };
    return categories[category] || category;
  }

  // Initialize the page
  initPage();
});

// about-guide.js - JavaScript for About Guide Page

document.addEventListener("DOMContentLoaded", function () {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "أحمد محمد",
      role: "المؤسس والمدير التنفيذي",
      bio: "خبير في إدارة الفعاليات  مع أكثر من 15 عاماً من الخبرة في تنظيم المهرجانات والفعاليات الكبرى في سوريا.",
      image: "https://nouraldeensuhail.github.io/Syrian-Events/img/team1.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 2,
      name: "ليلى حسن",
      role: "مديرة المحتوى",
      bio: "صحفية وكاتبة متخصصة في المسابقات ، مسؤولة عن تطوير المحتوى وضمان جودة المعلومات المقدمة على المنصة.",
      image: "https://nouraldeensuhail.github.io/Syrian-Events/img/team2.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      name: "محمود علي",
      role: "مدير التكنولوجيا",
      bio: "مهندس برمجيات متخصص في تطوير المنصات الرقمية، مسؤول عن الجانب التقني للمنصة وتطوير ميزاتها الجديدة.",
      image: "https://nouraldeensuhail.github.io/Syrian-Events/img/team3.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 4,
      name: "سارة إبراهيم",
      role: "مديرة التسويق",
      bio: "خبيرة تسويق رقمي مع خبرة في الترويج للفعاليات, مسؤولة عن استراتيجيات التسويق والعلاقات العامة.",
      image: "https://nouraldeensuhail.github.io/Syrian-Events/img/team5.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 5,
      name: "عمر خالد",
      role: "مدير الشراكات",
      bio: "متخصص في بناء الشراكات الاستراتيجية مع المؤسسات الثقافية ، مسؤول عن توسيع شبكة شركاء المنصة.",
      image: "https://nouraldeensuhail.github.io/Syrian-Events/img/team4.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
  ];

  // Get elements
  const teamGrid = document.getElementById("teamGrid");

  // Initialize the page
  function initPage() {
    // Display team members
    displayTeamMembers();

    // Animate elements when they come into view
    animateOnScroll();
  }

  // Display team members
  function displayTeamMembers() {
    // Clear team grid
    teamGrid.innerHTML = "";

    // Display team members
    teamMembers.forEach((member) => {
      const teamMember = createTeamMemberCard(member);
      teamGrid.appendChild(teamMember);
    });
  }

  // Create team member card element
  function createTeamMemberCard(member) {
    const card = document.createElement("div");
    card.className = "team-member";
    card.setAttribute("data-member-id", member.id);

    card.innerHTML = `
            <img src="${member.image}" alt="${member.name}" class="team-member-image">
            <div class="team-member-overlay">
                <h3 class="team-member-name">${member.name}</h3>
                <div class="team-member-role">${member.role}</div>
                <p class="team-member-bio">${member.bio}</p>
                <div class="team-member-social">
                    <a href="${member.social.facebook}" class="team-member-social-link"><i class="bi bi-facebook"></i></a>
                    <a href="${member.social.twitter}" class="team-member-social-link"><i class="bi bi-twitter"></i></a>
                    <a href="${member.social.linkedin}" class="team-member-social-link"><i class="bi bi-linkedin"></i></a>
                    <a href="${member.social.instagram}" class="team-member-social-link"><i class="bi bi-instagram"></i></a>
                </div>
            </div>
        `;

    return card;
  }

  // Animate elements when they come into view
  function animateOnScroll() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe mission cards
    const missionCards = document.querySelectorAll(".mission-card");
    missionCards.forEach((card) => {
      observer.observe(card);
    });

    // Observe value cards
    const valueCards = document.querySelectorAll(".value-card");
    valueCards.forEach((card) => {
      observer.observe(card);
    });

    // Observe team members
    const teamMembers = document.querySelectorAll(".team-member");
    teamMembers.forEach((member) => {
      observer.observe(member);
    });

    // Observe policy cards
    const policyCards = document.querySelectorAll(
      ".policy-card, .general-policy-card",
    );
    policyCards.forEach((card) => {
      observer.observe(card);
    });
  }

  // Initialize the page
  initPage();
});

// contact.js - JavaScript for Contact Page

document.addEventListener("DOMContentLoaded", function () {
  // Sample events data for ticket booking validation
  const validEvents = [
    " الماراثون البرمجي للأطفال واليافعين 2019",
    "برامج التعلم والتدريب المستمر",
    "بطولة الشطرنج الجامعية",
    "المسابقات البرمجية",
    "أمسية الأفلام الوثائقية التقنية",
    "ندوة: مستقبل الحوسبة الكمومية ",
    "ورشة عمل: تطوير تطبيقات الويب",
    "مسابقة الروبوتات الذكية",
    "اليوم الترفيهي المفتوح",
    "ماراثون SVU الرياضي",
    "رحلة استكشاف أنظمة النقل الذكية ",
    "مسابقة المشاريع الريادية",
    "مهرجان الطالب المبرمج",
    "حلقة بحث معمقة: تشفير العملات الرقمية وتطبيقاتها في الأنظمة المالية",
  ];

  // Get form elements
  const contactForm = document.getElementById("contactForm");
  const ticketForm = document.getElementById("ticketForm");
  const eventNameInput = document.getElementById("eventName");

  // Initialize the page
  function initPage() {
    // Add event listeners to forms
    if (contactForm) {
      contactForm.addEventListener("submit", handleContactFormSubmit);
    }

    if (ticketForm) {
      ticketForm.addEventListener("submit", handleTicketFormSubmit);
    }

    // Add input validation for event name
    if (eventNameInput) {
      eventNameInput.addEventListener("input", validateEventName);
    }
  }

  // Handle contact form submission
  function handleContactFormSubmit(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate form
    if (!name || !email || !subject || !message) {
      showAlert("يرجى ملء جميع الحقول المطلوبة", "danger", contactForm);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showAlert("يرجى إدخال بريد إلكتروني صحيح", "danger", contactForm);
      return;
    }

    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML =
      '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> جاري الإرسال...';

    // Simulate form submission with setTimeout
    setTimeout(() => {
      // Reset button state
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;

      // Show success message
      showAlert(
        "تم إرسال رسالتك بنجاح! سنقوم بالرد عليك في أقرب وقت ممكن.",
        "success",
        contactForm,
      );

      // Reset form after success
      contactForm.reset();

      // Remove validation classes
      document
        .getElementById("name")
        .classList.remove("is-valid", "is-invalid");
      document
        .getElementById("email")
        .classList.remove("is-valid", "is-invalid");
      document
        .getElementById("subject")
        .classList.remove("is-valid", "is-invalid");
      document
        .getElementById("message")
        .classList.remove("is-valid", "is-invalid");
    }, 1500);
  }

  // Handle ticket form submission
  function handleTicketFormSubmit(e) {
    e.preventDefault();

    // Get form values
    const eventName = document.getElementById("eventName").value.trim();
    const ticketName = document.getElementById("ticketName").value.trim();
    const ticketEmail = document.getElementById("ticketEmail").value.trim();
    const ticketCount = document.getElementById("ticketCount").value;

    // Validate form
    if (!eventName || !ticketName || !ticketEmail || !ticketCount) {
      showAlert("يرجى ملء جميع الحقول المطلوبة", "danger", ticketForm);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(ticketEmail)) {
      showAlert("يرجى إدخال بريد إلكتروني صحيح", "danger", ticketForm);
      return;
    }

    // Validate event name
    if (!validEvents.includes(eventName)) {
      showAlert(
        "الفعالية المحددة غير موجودة. يرجى اختيار فعالية من القائمة.",
        "danger",
        ticketForm,
      );
      return;
    }

    // Validate ticket count
    if (ticketCount < 1 || ticketCount > 10) {
      showAlert("عدد التذاكر يجب أن يكون بين 1 و 10", "danger", ticketForm);
      return;
    }

    // Show loading state
    const submitButton = ticketForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML =
      '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> جاري الحجز...';

    // Simulate ticket booking with setTimeout
    setTimeout(() => {
      // Reset button state
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;

      // Show success message
      showAlert(
        `تم حجز ${ticketCount} تذكرة لفعالية "${eventName}" بنجاح! سيتم إرسال التفاصيل إلى بريدك الإلكتروني.`,
        "success",
        ticketForm,
      );

      // Reset form after success
      ticketForm.reset();

      // Remove validation classes
      document
        .getElementById("eventName")
        .classList.remove("is-valid", "is-invalid");
      document
        .getElementById("ticketName")
        .classList.remove("is-valid", "is-invalid");
      document
        .getElementById("ticketEmail")
        .classList.remove("is-valid", "is-invalid");
      document
        .getElementById("ticketCount")
        .classList.remove("is-valid", "is-invalid");
    }, 1500);
  }

  // Validate event name as user types
  function validateEventName() {
    const eventName = eventNameInput.value.trim();

    // Clear any previous validation
    eventNameInput.classList.remove("is-valid", "is-invalid");

    if (eventName === "") {
      return;
    }

    // Check if event name exists in valid events
    if (validEvents.includes(eventName)) {
      eventNameInput.classList.add("is-valid");
    } else {
      eventNameInput.classList.add("is-invalid");
    }
  }

  // Show alert message
  function showAlert(message, type, formElement) {
    // Remove any existing alerts
    const existingAlerts = formElement.querySelectorAll(".alert");
    existingAlerts.forEach((alert) => alert.remove());

    // Create alert element
    const alertDiv = document.createElement("div");
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.role = "alert";
    alertDiv.innerHTML = `
            <div class="d-flex align-items-center">
                ${
                  type === "success"
                    ? '<i class="bi bi-check-circle-fill me-2"></i>'
                    : '<i class="bi bi-exclamation-triangle-fill me-2"></i>'
                }
                <div>${message}</div>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;

    // Insert alert after the form header or at the beginning of the form
    const formHeader = formElement.querySelector(".section-header");
    if (formHeader) {
      formHeader.parentNode.insertBefore(alertDiv, formHeader.nextSibling);
    } else {
      formElement.insertBefore(alertDiv, formElement.firstChild);
    }

    // Auto-dismiss after 5 seconds for success messages
    if (type === "success") {
      setTimeout(() => {
        const bsAlert = new bootstrap.Alert(alertDiv);
        bsAlert.close();
      }, 5000);
    }
  }

  // Initialize the page
  initPage();
});
