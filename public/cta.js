document.addEventListener("DOMContentLoaded", function () {
  const cta = `
            <section class="flex w-full bg-[#a61c55]">
                <div class="w-full text-center py-20">
                    <h1 class="font-Bebas-Neue text-white text-3xl md:text-[40px] mb-6">TAKE THE NEXT STEP</h1>
                    <div class="flex flex-col md:flex-row justify-center gap-4 px-4">
                        <button
                            class="bg-orange-400 text-white  py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                            Enquire Now
                        </button>
                        <button
                            class="bg-orange-400 text-white  py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                            Schedule Callback
                        </button>
                        <button
                            class="bg-orange-400 text-white  py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                            Apply
                        </button>
                    </div>
                </div>
            </section>
    `;

  const ctaContainer = document.getElementById("cta-container");
  ctaContainer.innerHTML = cta;
});
