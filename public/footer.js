document.addEventListener("DOMContentLoaded", function () {
    const footer = `
            <footer class="bg-[#231f20] text-white w-full py-10">
                <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-10 px-5">
                    <div class="md:col-span-4 lg:col-span-5">
                        <h3 class="font-Bebas-Neue text-2xl font-bold mb-3">ABOUT ITM BUSINESS SCHOOL</h3>
                        <p class="mb-5">
                            is a leading Business School based out of Kharghar, Navi Mumbai, India. We are known for our
                            future-focused
                            business education, strong industry connect, and rigorous student training.
                        </p>
                        <div class="flex space-x-3">
                            <a href="#" class=""><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25"
                                    height="25" viewBox="0,0,256,256">
                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1"
                                        stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                        stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
                                        font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                        <g transform="scale(5.12,5.12)">
                                            <path
                                                d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM37,19h-2c-2.14,0 -3,0.5 -3,2v3h5l-1,5h-4v15h-5v-15h-4v-5h4v-3c0,-4 2,-7 6,-7c2.9,0 4,1 4,1z">
                                            </path>
                                        </g>
                                    </g>
                                </svg></a>
                            <a href="#" class=""><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25"
                                    height="25" viewBox="0,0,256,256">
                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1"
                                        stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                        stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
                                        font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                        <g transform="scale(5.12,5.12)">
                                            <path
                                                d="M11,4c-3.866,0 -7,3.134 -7,7v28c0,3.866 3.134,7 7,7h28c3.866,0 7,-3.134 7,-7v-28c0,-3.866 -3.134,-7 -7,-7zM13.08594,13h7.9375l5.63672,8.00977l6.83984,-8.00977h2.5l-8.21094,9.61328l10.125,14.38672h-7.93555l-6.54102,-9.29297l-7.9375,9.29297h-2.5l9.30859,-10.89648zM16.91306,15l14.10742,20h3.06445l-14.10742,-20z">
                                            </path>
                                        </g>
                                    </g>
                                </svg></a>
                            <a href="#" class=""><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25"
                                    height="25" viewBox="0,0,256,256">
                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1"
                                        stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                        stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
                                        font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                        <g transform="scale(5.12,5.12)">
                                            <path
                                                d="M44.89844,14.5c-0.39844,-2.19922 -2.29687,-3.80078 -4.5,-4.30078c-3.29687,-0.69922 -9.39844,-1.19922 -16,-1.19922c-6.59766,0 -12.79687,0.5 -16.09766,1.19922c-2.19922,0.5 -4.10156,2 -4.5,4.30078c-0.40234,2.5 -0.80078,6 -0.80078,10.5c0,4.5 0.39844,8 0.89844,10.5c0.40234,2.19922 2.30078,3.80078 4.5,4.30078c3.5,0.69922 9.5,1.19922 16.10156,1.19922c6.60156,0 12.60156,-0.5 16.10156,-1.19922c2.19922,-0.5 4.09766,-2 4.5,-4.30078c0.39844,-2.5 0.89844,-6.10156 1,-10.5c-0.20312,-4.5 -0.70312,-8 -1.20312,-10.5zM19,32v-14l12.19922,7z">
                                            </path>
                                        </g>
                                    </g>
                                </svg></a>
                        </div>
                    </div>
                    <!-- Company Section -->
                    <div class="md:col-span-2 lg:col-span-2">
                        <h3 class="font-Bebas-Neue text-2xl font-bold mb-3">COMPANY</h3>
                        <ul class="space-y-3">
                            <li><a href="#" class="hover:underline">Home</a></li>
                            <li><a href="#" class="hover:underline">Ranking</a></li>
                            <li><a href="#" class="hover:underline">Incubator</a></li>
                        </ul>
                    </div>
                    <!-- Other Links Section -->
                    <div class="md:col-span-2 lg:col-span-2">
                        <!-- <h3 class="text-xl font-bold mb-3">COMPANY</h3> -->
                        <ul class="space-y-3 pt-10">
                            <li><a href="#" class="hover:underline">Admission</a></li>
                            <li><a href="#" class="hover:underline">Program</a></li>
                            <li><a href="#" class="hover:underline">Campus Life</a></li>
                        </ul>
                    </div>
                    <!-- Contact Section -->
                    <div class="md:col-span-2 lg:col-span-3">
                        <h3 class="font-Bebas-Neue text-2xl font-bold mb-3">CONTACT US</h3>
                        <ul class="space-y-3">
                            <li class="flex items-center space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                                </svg>
                                <span>08047189266</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 8.25v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V8.25m19.5 0L12 13.5 2.25 8.25M19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25v0" />
                                </svg>
                                <span>itm@itm.edu</span>
                            </li>
                            <li class="flex items-center space-x-3">

                                <span>ITM Skills University Plot 25 & 26, Institutional Area, Sector 4, Kharghar, Navi
                                    Mumbai, Maharashtra 410210</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
                    <p>Copyright © 2024 ITM Skills University All Rights Reserved</p>
                </div>
            </footer>

    `;

    const footerContainer = document.getElementById("footer-container")
    footerContainer.innerHTML = footer;

})