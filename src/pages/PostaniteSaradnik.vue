<template>
  <Layout>
    <section class="position-relative z-index-1 height-100vh flex flex-center bg-white">
      <div class="container max-width-adaptive-lg ">
        <div class="grid ">
          <div class="col-6@md padding-y-xl@md padding-y-lg">
            <div class="text-component text-left">
              <h1>Savremeni online business
              </h1>
              <p>Rad od kuće koji pruža finansijsku sigurnost uz više vremena za sebe i svoje najbliže
              </p>
            </div>
          </div>

          <div class="col-6@md">
            <g-image src="~/assets/img/postanite-saradnik.jpg" alt="Image description"></g-image>
          </div>
        </div>
      </div>
    </section>

    <section class="position-relative z-index-1 height-100vh flex flex-center">
      <div class="container position-relative max-width-adaptive-lg z-index-2">
        <div class="grid ">
          <div class="col-6@md">
            <g-image src="~/assets/img/postanite-saradnik-2.jpg" alt="Image description"></g-image>
          </div>
          <div class="col-6@md padding-y-xl@md padding-y-md">
            <div class="text-component text-right">
              <h1 class="text-lg">Stvorimo tvoj izuzetan poslovni kutak
                uz Forever Living
              </h1>
              <a class="btn btn--primary">Pridruži nam se</a>
            </div>
          </div>


        </div>
      </div>

      <div class="
          position-absolute
          inset-0
          z-index-1
          origin-top-left
          scroll-fx
          js-scroll-fx
        " data-scroll-fx="skewY, -7deg, 0deg, 0%, 50%" aria-hidden="true"></div>
    </section>

    <section class="position-relative z-index-1 height-100vh flex flex-center">
      <div class="container position-relative z-index-2">
        <div class="text-component text-center">
          <h1 class="">Section 3</h1>
        </div>
      </div>

      <div class="
          position-absolute
          inset-0
          bg-white
          z-index-1
          origin-top-left
          scroll-fx
          js-scroll-fx
        " data-scroll-fx="skewY, -7deg, 0deg, 0%, 50%" aria-hidden="true"></div>
    </section>

    <section class="position-relative z-index-1 height-100vh flex flex-center">
      <div class="container max-width-adaptive-lg position-relative z-index-2">
        <div class="text-component text-center">
          <h1 class="padding-bottom-lg">4 jednostavna koraka !
          </h1>
        </div>
        <div class="grid gap-sm text-center  items-start">
          <div class="col-3@md">

            <h3>1. korak
            </h3>
              <p>Popunite obrazac u nastavku
              </p>

          </div>
          <div class="col-3@md">
            <h3>2. korak
            </h3>

              <p>Kupovinom Start Your Journey paketa dobijate ulaznicu u naš tim

              </p>
          </div>
          <div class="col-3@md">
            <h3>3. korak
            </h3>
              <p>Upoznajte svoje okruženje sa proizvodima iz Forever-a i poslovnim mogućnostima
              </p>
          </div>
          <div class="col-3@md">
            <h3>4. korak
            </h3>
              <p>Razvijajte svoj poslovni plan sa svojim sponzorom i novim članovima kroz isti ciklus</p>
          </div>

          <div class="col-12 padding-top-lg">
            <a class="btn btn--primary ">Klikni za početak</a>
          </div>


        </div>
      </div>

      <div class="
          position-absolute
          inset-0
          z-index-1
          origin-top-left
          scroll-fx
          js-scroll-fx
        " data-scroll-fx="skewY, -7deg, 0deg, 0%, 50%" aria-hidden="true"></div>
    </section>
  </Layout>
</template>

<script>
  export default {
    metaInfo: {
      title: "Postanite saradnik",
    },

    mounted() {
      let frontEnd = document.createElement("script");
      frontEnd.setAttribute("src", "../main-header.js");
      frontEnd.setAttribute("id", "main-header-js");

      let scrolling = document.createElement("script");
      scrolling.setAttribute("src", "../scrolling-animations.js");
      scrolling.setAttribute("id", "scrolling-animations");

      document.body.appendChild(frontEnd);
      document.body.appendChild(scrolling);
    },
    destroyed() {
      document.getElementById("main-header-js").remove();
      document.getElementById("scrolling-animations").remove();

      // remove the JS code once the component has been destroyed
    },
  };
</script>