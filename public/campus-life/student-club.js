const studentClub = [
    {
        "heading": "Cultural Club",
        "content": "The Cultural Club at ITM Business School is dedicated to uncovering and nurturing the diverse talents of its students. It serves as a vibrant platform for budding artists, musicians, and performers, fostering a sense of team spirit and contributing to the overall personality development of its members. This club is a vital part of our commitment to holistic education, enhancing the cultural and creative landscape of our student community.",
        "image": "https://cdn.itm.edu/assets/Recreational_Facilities_428f8f462a.webp"
    },
    {
        "heading": "Social Media Club",
        "content": "The Social Media Club welcomes students with a passion for creative writing, photography, video production, design, and event planning. This club offers a versatile platform for students to capture and cover various campus events, both intercollegiate and intramural. Members can explore content creation, videography, photography, and graphic design, gaining hands-on experience that aligns with their interests and skills. It’s the perfect club for those who want to develop a diverse set of talents in online media.",
        "image": "https://cdn.itm.edu/assets/Social_Media_Club_0a220f57b0.webp"
    },
    {
        "heading": "Digital Brainz Forum",
        "content": "Digital Brainz Forum is a hub for students interested in the fast-evolving field of digital marketing. Through guest sessions, real-world case studies, and workshops led by industry experts, members gain invaluable insights into SEO, SEM, performance marketing, and more. This forum provides a deep dive into the latest digital marketing trends, equipping students with the knowledge and networking opportunities necessary to excel in this dynamic field.",
        "image": "https://cdn.itm.edu/assets/Digital_Brainz_Forum_76f0e0b95c.webp"
    },
    {
        "heading": "Data Minds",
        "content": "Data Minds is a dedicated forum for data enthusiasts at ITM Business School. It aims to empower students with the skills and knowledge needed to excel in business analytics and data science. The forum fosters a vibrant community of innovators who are passionate about contributing to the field through cutting-edge research and practical application. Data Minds is the go-to platform for students looking to develop expertise in one of today’s most in-demand fields.",
        "image": "https://cdn.itm.edu/assets/Data_Minds_39d1f26279.webp"
    },
    {
        "heading": "ITM E-Cell",
        "content": "Established in 2006 in association with the National Entrepreneurship Network (NEN), the ITM E-Cell is dedicated to fostering an entrepreneurial spirit among students. This platform supports aspiring entrepreneurs in developing their ideas, gaining practical experience, and accessing the resources necessary to launch their ventures. The E-Cell is committed to nurturing the next generation of business leaders by providing the tools, mentorship, and support needed for entrepreneurial success.",
        "image": "https://cdn.itm.edu/assets/ITM_E_Cell_eaebac25c6.webp"
    },
    {
        "heading": "Research Wing: Nethra",
        "content": "The Research Wing, known as Nethra, is committed to fostering research acumen and excellence among ITM Business School students. Nethra engages students in rigorous research activities, helping them develop critical thinking and analytical skills. Through structured programs, mentorship, and industry collaboration, Nethra aims to cultivate a research-oriented mindset, empowering students to contribute meaningfully to both academic and industry research.",
        "image": "https://cdn.itm.edu/assets/Research_Wing_Nethra_b2338b6cdf.webp"
    },
    {
        "heading": "Finance Forum",
        "content": "The Finance Forum at ITM Business School is dedicated to cultivating a deep understanding of financial concepts among students. It aims to equip future finance professionals with the knowledge and skills necessary to excel in the finance industry. By fostering a community of finance enthusiasts, the forum ensures that students are well-prepared to navigate the complexities of the financial world.",
        "image": "https://cdn.itm.edu/assets/Finance_Forum_0642d3558c.webp"
    },
    {
        "heading": "FM Tech Forum",
        "content": "The FM Tech Forum focuses on the intersection of finance and technology, preparing students for the rapidly evolving landscape of financial services. This forum bridges the gap between finance and technology, offering students the theoretical knowledge and practical experience needed to excel in fintech. By exploring the latest advancements in financial technology, the FM Tech Forum is dedicated to producing proficient finance professionals who are adept at leveraging technology for innovation.",
        "image": "https://cdn.itm.edu/assets/FM_Tech_Forum_7e725b89a1.webp"
    },
    {
        "heading": "Wellness Centre",
        "content": "The ITM Business School Wellness Centre is a dedicated space on campus for faculty and students to rejuvenate through prayer, peace, meditation, and wellness therapies. Inaugurated in 2019, this retreat, created by our HR Academic Team, focuses on the overall health, fitness, and happiness of the campus community. The Wellness Centre is a testament to our commitment to the holistic well-being of our students and staff.",
        "image": "https://cdn.itm.edu/assets/Wellness_Centre_e4ac8b23b8.webp"
    },
    {
        "heading": "External Event Committee",
        "content": "The External Event Committee is the driving force behind ITM Business School's participation in external competitions and events. Focusing on management, sports, and cultural events, this committee acts as a bridge, connecting students to opportunities beyond campus. By organizing participation in prestigious competitions and ensuring students are well-prepared, the External Event Committee empowers them to excel and bring laurels to the institution. It also plays a key role in enhancing individual growth and elevating the college's reputation through successful participation in events like 'UFEST,' our inter-college fest.",
        "image": "https://cdn.itm.edu/assets/External_Event_Committee_f340c87000.webp"
    }
]

let list3 = document.getElementById("student-club");
list3.innerHTML = studentClub.map(showData3).join("");

function showData3(studentClub) {
    let listItems3 = `
        <div class="swiper-slide h-full w-full flex">
            <div class="border rounded-xl w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6">
            <div class="flex w-full items-center">
                <div class="flex w-full flex-col gap-4">
                <strong class="text-lg md:text-xl lg:text-2xl font-Bebas-Neue text-[#a91d54]">${studentClub.heading}</strong>
                <div class="flex flex-col w-full gap-2">
                    <p class="text-sm md:text-base gap-2">
                        ${studentClub.content}
                    </p>
                </div>
                </div>
            </div>
            <div class="flex h-full w-full">
                <div class="flex h-full w-full border overflow-hidden rounded-xl">
                <img src="${studentClub.image}"
                    alt="${studentClub.heading}" class="flex object-cover h-full w-full">
                </div>
            </div>
            </div>
        </div>
    `;
    return listItems3;
}
