document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const courses = data.courses;
      const instructors = data.instructors;
      const courseList = document.getElementById("course-list");
      const instructorList = document.getElementById("instructor-list");
      const carouselContainer = document.getElementById("carousel-container");

      const exploreBtn = document.querySelector(".btn-primary");
      exploreBtn?.addEventListener("click", () => {
        window.location.href = "courses.html";
      });

      // Populate courses
      courses.forEach((course) => {
        const div = document.createElement("div");
        div.className = "course-card";
        div.innerHTML = `
            <img src="${course.image}" alt="${course.name}" class="course-image">
            <h3 class="course-title">${course.name}</h3>
            <p><strong>Instructor:</strong> ${course.instructor}</p>
            <p>${course.description}</p>
            <button class="enroll-btn">Enroll</button>
          `;

        div.querySelector(".enroll-btn").addEventListener("click", (event) => {
          event.stopPropagation();
          window.location.href = `enroll.html?course=${encodeURIComponent(
            course.name
          )}`;
        });

        courseList?.appendChild(div);
      });

      // Populate instructors
      instructors.forEach((instructor) => {
        const div = document.createElement("div");
        div.className = "instructor-card";
        div.innerHTML = `
            <img src="${instructor.image}" alt="${
          instructor.name
        }" class="instructor-image">
            <h3 class="instructor-title">${instructor.name}</h3>
            <p><strong>Bio:</strong> ${instructor.bio}</p>
            <p><strong>Courses:</strong> ${instructor.courses.join(", ")}</p>
          `;
        instructorList?.appendChild(div);
      });

      // Populate carousel
      courses.forEach((course) => {
        const slide = document.createElement("div");
        slide.className = "carousel-slide";
        slide.innerHTML = `
            <img src="${course.image}" alt="${course.name}" class="carousel-image">
            <h3 class="carousel-title">${course.name}</h3>
          `;
        carouselContainer.appendChild(slide);
      });

      // Carousel functionality
      let index = 0;
      const slides = document.querySelectorAll(".carousel-slide");
      const showSlide = (i) => {
        slides.forEach((slide, idx) => {
          slide.style.display = idx === i ? "block" : "none";
        });
      };

      showSlide(index);

      document.getElementById("prevBtn").addEventListener("click", () => {
        index = index > 0 ? index - 1 : slides.length - 1;
        showSlide(index);
      });

      document.getElementById("nextBtn").addEventListener("click", () => {
        index = index < slides.length - 1 ? index + 1 : 0;
        showSlide(index);
      });
    })
    .catch((error) => console.error("Error loading courses.json:", error));

  function filterCourses() {
    let searchTerm = document.getElementById("search-bar").value.toLowerCase();
    let courses = document.querySelectorAll(".course-card");

    courses.forEach((course) => {
      let title = course
        .querySelector(".course-title")
        .textContent.toLowerCase();
      course.style.display = title.includes(searchTerm) ? "block" : "none";
    });
  }

  document
    .getElementById("search-bar")
    .addEventListener("keyup", filterCourses);
});
