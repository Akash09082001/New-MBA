document.addEventListener("DOMContentLoaded", function () {
  const header = `
     <header class="flex w-full">
            <div class="flex max-w-7xl gap-4 mx-auto w-full justify-between px-4 py-2">
                <div class="flex w-fit">
                    <div class="flex w-fit h-10">
                        <img src="https://cdn.itm.edu/assets/b_school_logo_1_e0b96c8bf5.webp" alt="b-school-logo"
                            class="flex h-full w-fit  object-contain object-left">
                    </div>
                </div>
                <nav class="hidden lg:flex flex-1 justify-end items-center">
                    <ul class="flex w-fit gap-2">
                        <li class="flex w-fit">
                            <a href="" class="flex w-fit text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                <span>Admission</span>
                            </a>
                        </li>
                        <li class="flex w-fit">
                            <a href="" class="flex w-fit text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                <span>Placement</span>
                            </a>
                        </li>
                        <li class="flex w-fit">
                            <a href="" class="flex w-fit text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                <span>Program</span>
                            </a>
                        </li>
                        <li class="flex relative group w-fit">
                            <a href=""
                                class="flex gap-2 group-hover:text-[#a91d54] w-fit text-sm items-center px-4 py-2 hover:text-[#a91d54] transition-all">
                                <span>Specializations</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </a>
                            <ul
                                class="flex flex-col opacity-0 invisible rounded-md group-hover:visible group-hover:opacity-100 z-20 absolute border top-full left-0 bg-white w-80 divide-y">
                                <li class="flex w-full">
                                    <a href="" class="flex w-fit text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                        <span>Financial Services</span>
                                    </a>
                                </li>
                                <li class="flex w-full">
                                    <a href="" class="flex w-fit text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                        <span>FinTech</span>
                                    </a>
                                </li>
                                <li class="flex w-full">
                                    <a href="" class="flex w-fit text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                        <span>Digital Marketing and Media Management</span>
                                    </a>
                                </li>
                                <li class="flex w-full">
                                    <a href="" class="flex w-fit text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                        <span>Business Analytics</span>
                                    </a>
                                </li>
                                <li class="flex w-full">
                                    <a href="" class="flex w-fit text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                        <span>Retail Management and e-Commerce</span>
                                    </a>
                                </li>
                                <li class="flex w-full">
                                    <a href="" class="flex w-fit text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                        <span>Marketing Management</span>
                                    </a>
                                </li>
                                <li class="flex w-full">
                                    <a href="" class="flex w-fit text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                        <span>International Business</span>
                                    </a>
                                </li>
                                <li class="flex w-full">
                                    <a href="" class="flex w-fit text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                        <span>Human Resources Management</span>
                                    </a>
                                </li>
                                <li class="flex w-full">
                                    <a href="" class="flex w-fit text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                        <span>Operation and Supply Chain Management</span>
                                    </a>
                                </li>
                                <li class="flex w-full">
                                    <a href="" class="flex w-fit text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                        <span>Finance</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="flex w-fit">
                            <a href="" class="flex w-fit text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                <span>Incubator</span>
                            </a>
                        </li>
                        <li class="flex w-fit">
                            <a href="" class="flex w-fit text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                <span>Campus Life</span>
                            </a>
                        </li>
                        <li class="flex w-fit">
                            <button onclick="openModal()"
                                class="flex w-fit text-sm px-4 py-2 bg-[#a91d54] rounded-md text-white transition-all">
                                <span>Enquire Now</span>
                            </button>
                        </li>

                    </ul>
                </nav>
                <div class="flex w-fit items-center">
                    <button id="open" 
                        class="flex lg:hidden w-fit h-fit text-sm px-2 py-2 bg-[#a91d54] rounded-md text-white transition-all">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="size-5">
                                <path fill-rule="evenodd"
                                    d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>
                    <nav id="mobile-nav"
                        class="hidden lg:hidden flex-col absolute w-full py-1 z-20 gap-2 max-w-sm  right-0 top-0 h-screen bg-white shadow-md">
                        <div class="flex w-full px-2 items-center justify-between">
                            <div class="h-10 w-auto ">
                                <img loading="lazy" class="flex w-full h-full object-contain"
                                    src="https://cdn.itm.edu/assets/b_school_logo_1_e0b96c8bf5.webp" alt="logo">
                            </div>
                            <div class="flex w-auto h-full items-center justify-end">

                                <button id="close" 
                                    class="flex  rounded-md     py-2 px-2 items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="w-6 h-6">
                                        <path fill-rule="evenodd"
                                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <ul class="flex flex-col h-[calc(100%-50px)] overflow-y-scroll w-full gap-2 p-4">
                            <li class="flex w-full">
                                <a href="" class="flex w-full text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                    <span>Admission</span>
                                </a>
                            </li>
                            <li class="flex w-full">
                                <a href="" class="flex w-full text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                    <span>Placement</span>
                                </a>
                            </li>
                            <li class="flex w-full">
                                <a href="" class="flex w-full text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                    <span>Program</span>
                                </a>
                            </li>
                            <li class="flex relative w-full">
                                <details class="flex w-full flex-col">
                                    <summary
                                        class="flex gap-2 justify-between w-full text-sm items-center px-4 py-2 hover:text-[#a91d54] transition-all">
                                        <span class="flex flex-grow">Specializations</span>
                                        <span class="flex flex-grow-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="size-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <ul
                                        class="flex flex-col  rounded-md  border top-full left-0 bg-white w-80 divide-y">
                                        <li class="flex w-full">
                                            <a href=""
                                                class="flex w-full text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                                <span>Financial Services</span>
                                            </a>
                                        </li>
                                        <li class="flex w-full">
                                            <a href=""
                                                class="flex w-full text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                                <span>FinTech</span>
                                            </a>
                                        </li>
                                        <li class="flex w-full">
                                            <a href=""
                                                class="flex w-full text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                                <span>Digital Marketing and Media Management</span>
                                            </a>
                                        </li>
                                        <li class="flex w-full">
                                            <a href=""
                                                class="flex w-full text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                                <span>Business Analytics</span>
                                            </a>
                                        </li>
                                        <li class="flex w-full">
                                            <a href=""
                                                class="flex w-full text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                                <span>Retail Management and e-Commerce</span>
                                            </a>
                                        </li>
                                        <li class="flex w-full">
                                            <a href=""
                                                class="flex w-full text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                                <span>Marketing Management</span>
                                            </a>
                                        </li>
                                        <li class="flex w-full">
                                            <a href=""
                                                class="flex w-full text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                                <span>International Business</span>
                                            </a>
                                        </li>
                                        <li class="flex w-full">
                                            <a href=""
                                                class="flex w-full text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                                <span>Human Resources Management</span>
                                            </a>
                                        </li>
                                        <li class="flex w-full">
                                            <a href=""
                                                class="flex w-full text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                                <span>Operation and Supply Chain Management</span>
                                            </a>
                                        </li>
                                        <li class="flex w-full">
                                            <a href=""
                                                class="flex w-full text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                                <span>Finance</span>
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li class="flex w-full">
                                <a href="" class="flex w-full text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                    <span>Incubator</span>
                                </a>
                            </li>
                            <li class="flex w-full">
                                <a href="" class="flex w-full text-sm px-4 py-2 hover:text-[#a91d54] transition-all">
                                    <span>Campus Life</span>
                                </a>
                            </li>
                            <li class="flex w-full">
                                <button onclick="openModal()"
                                    class="flex w-full text-sm px-4 py-2 bg-[#a91d54] rounded-md text-white transition-all">
                                    <span>Enquire Now</span>
                                </button>
                            </li>

                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    `;

  const headerContainer = document.getElementById("header-container");
  headerContainer.innerHTML = header;

  const mobileMenu = document.getElementById("mobile-nav");
  const openButton = document.getElementById("open");
  const closeButton = document.getElementById("close");

  openButton.addEventListener("click", () => {
    mobileMenu.style.display = "flex";
    openButton.style.display = "none";
    closeButton.style.display = "block";
  });

  closeButton.addEventListener("click", () => {
    mobileMenu.style.display = "none";
    openButton.style.display = "block";
    closeButton.style.display = "none";
  });
});
