window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("article");
  const navLinks = document.querySelectorAll(".nav-link");

// Scrollspy using IntersectionObserver Instance:-

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            const activeLink = document.querySelector(
              `.nav-link[href="#${entry.target.id}"]`
            );
            if (activeLink) activeLink.classList.add("active");
          });
        }
      });
    },
    {
      threshold: 0.5,
    }
  );
  sections.forEach((section) => {
    observer.observe(section);
  });

  // ScrollSpy with Scroll event:-

  // function handleScroll() {
  //   const scrollPosition = window.scrollY + window.innerHeight / 2;
  //   sections.forEach((section) => {
  //     const sectionTop = section.offsetTop;
  //     const sectionHeight = section.offsetHeight;
  //     if (
  //       scrollPosition >= sectionTop &&
  //       scrollPosition < sectionTop + sectionHeight
  //     ) {
  //       navLinks.forEach((link) => {
  //         link.classList.remove("active");
  //       });
  //       const activeLink = document.querySelector(
  //         `.nav-link[href="#${section.id}"]`
  //       );
  //       if (activeLink) activeLink.classList.add("active");
  //     }
  //   });
  // }
  // window.addEventListener("scroll", handleScroll);
});
