const culturalEvent = [
    {
        "heading": "Hindi Divas",
        "content": "Hindi Divas at ITM Business School is a celebration of the Hindi language and culture, featuring a range of activities including dance performances, singing, shayari, and speeches. The event fosters unity and appreciation for linguistic diversity, highlighting the cultural richness of Hindi.",
        "image": "https://cdn.itm.edu/assets/Hindi_Divas_f71c15bc50.webp"
    },
    {
        "heading": "Independence Day",
        "content": "ITM Business School's Independence Day celebration is a vibrant event that honors India's freedom. The celebration includes cultural performances, speeches, and patriotic songs, bringing together the student body to commemorate this significant day.",
        "image": "https://cdn.itm.edu/assets/Independence_Day_73e5dd67cf.webp"
    },
    {
        "heading": "Republic Day",
        "content": "Republic Day at ITM Business School is marked by cultural activities, including dance performances, shayari, and poetry recitations. The event celebrates India's Republic and encourages students to reflect on the importance of national unity and democracy.",
        "image": "https://cdn.itm.edu/assets/Republic_Day_459f2e0719.webp"
    },
    {
        "heading": "Teacher’s Day",
        "content": "Teacher’s Day at ITM Business School is a special occasion where students express their gratitude to faculty members through performances, handmade gifts, and fun engagements. The event creates memorable experiences, showcasing the love and respect students have for their teachers.",
        "image": "https://cdn.itm.edu/assets/Teacher_s_Day_7468175904.webp"
    },
    {
        "heading": "Ganadheesh",
        "content": "Ganadheesh is the annual celebration of the Ganesh festival at ITM Business School. The event includes traditional decorations, devotional music, and dance performances, fostering a sense of community and cultural awareness among students.",
        "image": "https://cdn.itm.edu/assets/Ganadheesh_d7fb493426.webp"
    },
    {
        "heading": "Shiv Jayanti",
        "content": "Shiv Jayanti is celebrated with enthusiasm at ITM Business School, honoring the birth of Chhatrapati Shivaji Maharaj. The event includes cultural programs that highlight his contributions to Indian history, encouraging students to learn about leadership and resilience.",
        "image": "https://cdn.itm.edu/assets/Shiv_Jayanti_ea103eef5a.webp"
    },
    {
        "heading": "Onam Celebrations",
        "content": "Onam is celebrated at ITM Business School with traditional dance performances, cultural presentations, and a grand Onam Sadhya. The festival fosters camaraderie and inclusivity, enriching the campus community's understanding of Kerala's cultural heritage.",
        "image": "https://cdn.itm.edu/assets/Onam_Celebrations_bcbddb0c03.webp"
    }
]

let list5 = document.getElementById("cultural-event");
list5.innerHTML = culturalEvent.map(showData5).join("");

function showData5(culturalEvent) {
    let listItems5 = `
        <div class="swiper-slide h-full w-full flex">
            <div class="border rounded-xl w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6">
            <div class="flex w-full items-center">
                <div class="flex w-full flex-col gap-4">
                <strong class="text-lg md:text-xl lg:text-2xl font-Bebas-Neue text-[#a91d54]">${culturalEvent.heading}</strong>
                <div class="flex flex-col w-full gap-2">
                    <p class="text-sm md:text-base gap-2">
                        ${culturalEvent.content}
                    </p>
                </div>
                </div>
            </div>
            <div class="flex h-full w-full">
                <div class="flex h-full w-full border overflow-hidden rounded-xl">
                <img src="${culturalEvent.image}"
                    alt="${culturalEvent.heading}" class="flex object-cover h-full w-full">
                </div>
            </div>
            </div>
        </div>
    `;
    return listItems5;
}
