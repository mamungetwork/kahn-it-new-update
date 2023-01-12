// Client Review Slider **************
const mySwipper = document.querySelector(".mySwiper");
const faq = document.querySelector(".faq");
if (mySwipper !== null) {
  var swiper = new Swiper(".mySwiper", { spaceBetween: 30 });
}

/* ******************* Navbar Show Hide on Scroll  ******************* */
let position = $("header").offset().top;
if (position !== 0) {
  $("header").addClass("active");
}

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $("header").addClass("active");
  } else {
    $("header").removeClass("active");
  }
});

/* ******************* Responsive Navbar  ******************* */
const burgerMenu = document.querySelector(".burger_menu");
const navBar = document.querySelector(".nav_links");

burgerMenu.addEventListener("click", () => {
  navBar.classList.toggle("nav_menu_active");
  burgerMenu.classList.toggle("menu_open");
});

/* ******************************* POPUP CALLOUT ******************************* */
const callBtn = document.querySelectorAll("#popup_call"),
  closeBTN = document.querySelectorAll(".fa-xmark"),
  mainPopup = document.querySelectorAll(".popup"),
  popupOverlay = document.querySelectorAll(".popup_overlay"),
  overflow = document.querySelector("body"),
  successMessage = document.querySelector(".form_success"),
  popupFromSubmit = document.querySelector("#popup_form_submit"),
  videoPopup = document.querySelector(".video_popup");

//video Element
const sliderBigPlayBtn = document.querySelector(".big_play_btn"),
  videoFile = document.querySelector(".home_popup_video");

(allFormField = document.querySelectorAll(".p_field")),
  (fullName = document.querySelector("#p_full_name")),
  (emailAddress = document.querySelector("#p_email")),
  (phoneNumber = document.querySelector("#p_phone")),
  (webSite = document.querySelector("#p_website"));

const popupClose = function () {
  mainPopup.forEach((mainPopup) => {
    mainPopup.classList.remove("popup_active");
    overflow.classList.remove("popup_open");
  });
};

const popupOpen = function () {
  mainPopup.forEach((mainPopup) => {
    mainPopup.classList.add("popup_active");
    overflow.classList.add("popup_open");
  });
};

if (callBtn !== null) {
  for (j = 0; j < callBtn.length; j++)
    callBtn[j].addEventListener("click", function (e) {
      e.preventDefault(), popupOpen();
      videoPopup.classList.remove("popup_active");
    });
}

if (mainPopup !== null) {
  closeBTN.forEach((closeBTN) => {
    closeBTN.addEventListener("click", popupClose);
  });
  popupOverlay.forEach((popupOverlay) => {
    popupOverlay.addEventListener("click", popupClose);
  });

  if (popupFromSubmit !== null) {
    popupFromSubmit.addEventListener("click", (e) => {
      e.preventDefault();

      for (var i = 0; i < allFormField.length; i++) {
        if (
          allFormField[i].value === "" &&
          allFormField[i].hasAttribute("required")
        ) {
          allFormField[i].classList.add("required");
          // alert("There are some required fields!");
          return false;
        } else {
          allFormField[i].classList.remove("required");
        }
      }

      popupFromSubmit.classList.add("disabled");
      setTimeout(function () {
        successMessage.classList.add("show");
        fullName.value = "";
        emailAddress.value = "";
        phoneNumber.value = "";
        webSite.value = "";
      }, 1500);

      setTimeout(function () {
        popupClose();
        successMessage.classList.remove("show");
        popupFromSubmit.classList.remove("disabled");
      }, 5000);
    });
  }

  /* ******************************* VIDEO Play Pause ******************************* */
  function pauseVid() {
    videoFile.pause();
  }
}

/* ******************************* VIDEO POPUP CALLOUT ******************************* */
if (sliderBigPlayBtn !== null) {
  sliderBigPlayBtn.addEventListener("click", () => {
    videoPopup.classList.add("popup_active");
    videoFile.play();
  });
}

/******************************** Satisfied Customer Animation ********************************/
root = document.documentElement;

if (document.querySelector(".customer") !== null) {
  // SlideOne****************************
  const slideOneItems = document.querySelectorAll(".track_one .slide_logo"),
    slideOneTrack = document.querySelector(".track_one"),
    slideOneGap = (slideOneItems.length - 1) * 60;

  let slideOneWidth = 0;
  slideOneItems.forEach((width) => {
    slideOneWidth += width.offsetWidth;
  });
  slideOneWidth += slideOneGap;
  slideOneTrack.style.width = `${slideOneWidth}px`;

  root.style.setProperty("--change", -(slideOneWidth / 2) + "px");
  root.style.setProperty(
    "--animationSpeeds1",
    slideOneItems.length * 1.6 + "s"
  );

  // SlideTwo****************************
  const slideTwoItems = document.querySelectorAll(".track_two .slide_logo"),
    slideTwoTrack = document.querySelector(".track_two"),
    slideTwoGap = (slideTwoItems.length - 1) * 60;

  let slideTwoWidth = 0;
  slideTwoItems.forEach((width) => {
    slideTwoWidth += width.offsetWidth;
  });
  slideTwoWidth += slideTwoGap;
  slideTwoTrack.style.width = `${slideTwoWidth}px`;

  root.style.setProperty("--change", -(slideTwoWidth / 2) + "px");
  root.style.setProperty(
    "--animationSpeeds2",
    slideTwoItems.length * 1.6 + "s"
  );

  // SlideThree****************************
  const slideThreeItems = document.querySelectorAll(".track_three .slide_logo"),
    slideThreeTrack = document.querySelector(".track_three"),
    slideThreeGap = (slideThreeItems.length - 1) * 60;

  let slideThreeWidth = 0;
  slideThreeItems.forEach((width) => {
    slideThreeWidth += width.offsetWidth;
  });
  slideThreeWidth += slideThreeGap;
  slideThreeTrack.style.width = `${slideThreeWidth}px`;

  root.style.setProperty("--change", -(slideThreeWidth / 2) + "px");
  root.style.setProperty(
    "--animationSpeeds3",
    slideThreeItems.length * 1.6 + "s"
  );
}

// NEW JS START *********************************
// Service Page Happy Client **************
const slickSlider = document.querySelector(".owl-carousel");
if (slickSlider !== null) {
  $(".owl-one").owlCarousel({
    items: 7,
    loop: true,
    margin: 40,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    autoWidth: true,
    nav: true,
    dots: false,
    smartSpeed: 2000,
    animateIn: "linear",
    animateOut: "linear",
  });

  // Service Page Happy Client **************
  $(".owl-two").owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    // autoplay: true,
    // autoplayTimeout: 2000,
    autoplayHoverPause: false,
    // autoWidth: true,
    nav: true,
    dots: false,
  });
}

$(".demo").expander({
  slicePoint: 680,
});

// FAQ Accordion **************
if (faq !== null) {
  const faqItem = document.querySelectorAll(".faq_content");

  for (const faq of faqItem) {
    faq.addEventListener("click", function () {
      for (item of faqItem) {
        if (item) {
          item.classList.remove("active");
        }
      }
      faq.classList.toggle("active");
    });
  }
}

// BUSINESS SEO FAQ Accordion **************
const businessSEO = document.querySelector(".business_seo");
if (businessSEO !== null) {
  // ---- ---- Const ---- ---- //
  const accordionContent = document.querySelectorAll(".accordion-content");

  // ---- ---- Class .open ---- ---- //
  accordionContent.forEach((item, index) => {
    let header = item.querySelector(".header");
    header.addEventListener("click", () => {
      item.classList.toggle("open");

      // ---- ---- Height Description and Change Icon ---- ---- //
      let description = item.querySelector(".description");
      if (item.classList.contains("open")) {
        description.style.height = `${description.scrollHeight}px`;
        item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        if (description.scrollHeight > 260) {
          description.style.overflowY = "scroll";
        }
      } else {
        description.style.height = "0px";
        item.querySelector("i").classList.replace("fa-minus", "fa-plus");
      }
      removeOpen(index);
    });
  });

  function removeOpen(index1) {
    accordionContent.forEach((item2, index2) => {
      if (index1 != index2) {
        item2.classList.remove("open");
        let descr = item2.querySelector(".description");
        descr.style.height = "0px";
        item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
      }
    });
  }
}
