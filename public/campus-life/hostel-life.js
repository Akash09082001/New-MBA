const hostelLifeData = [
    {
        "heading": "Housing",
        "content": [
            "At ITM Business School, you live and study as part of a diverse community. We provide a secure and supportive environment that eases the transition from home to college. We offer deluxe accommodation at ITM’s hostel, which includes well-furnished twin-sharing rooms, housekeeping facilities, a cafeteria, water coolers, electronic security, power backup, and high-speed wireless Internet access.",
            "Male and female students are housed in separate wings. Reflecting the university's commitment to safety, each residence features 24-hour security coverage and is staffed with a professional hostel warden trained to handle emergencies. On call physicians are available to ensure physical safety and health."
        ],
        "image": "https://cdn.itm.edu/assets/Housing_16a3b3fb5d.webp",
    },
    {
        "heading": "Recreational Facilities",
        "content": [
            "Our hostel offers a range of facilities to enhance your experience, including a dedicated Yoga Hall, an Indoor Game Arena with options like Table Tennis, Carrom Board, Chess, and a Pool Table. Additionally, we have a Study Hall and a fully equipped Gymnasium to support your academic and fitness goals.",
            "Hostel is located close to the campus (approximately less than a kilometer). Bus service is provided between the campus and the hostel for convenience. For students who wish to live off campus, there are plenty of student accommodations available in the vicinity."
        ],
        "image": "https://cdn.itm.edu/assets/Recreational_Facilities_428f8f462a.webp",
    },
    {
        "heading": "Dining",
        "content": [
            "Short term and Annual Meal Plans are available separately. Mess charges are based on actuals and can be paid directly to the vendor upon joining the hostel."
        ],
        "image": "https://cdn.itm.edu/assets/Dining_76d4f46d61.webp",
    }
]

let list1 = document.getElementById("hostel-life");
list1.innerHTML = hostelLifeData.map(showData1).join("");

function showData1(hostelLifeData) {
    let content = hostelLifeData.content.map(p => `<p class="text-sm md:text-base gap-2">${p}</p>`).join("");

    let listItems1 = `
        <div class="swiper-slide h-full w-full flex">
            <div class="border rounded-xl w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6">
            <div class="flex w-full items-center">
                <div class="flex w-full flex-col gap-4">
                <strong class="text-lg md:text-xl lg:text-2xl font-Bebas-Neue text-[#a91d54]">${hostelLifeData.heading}</strong>
                <div class="flex flex-col w-full gap-2">
                    <p class="text-sm md:text-base gap-2">
                        ${content}
                    </p>
                </div>
                </div>
            </div>
            <div class="flex h-full w-full">
                <div class="flex h-full w-full border overflow-hidden rounded-xl">
                <img src="${hostelLifeData.image}"
                    alt="${hostelLifeData.heading}" class="flex object-cover h-full w-full">
                </div>
            </div>
            </div>
        </div>
    `;
    return listItems1;
}
