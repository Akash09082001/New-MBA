const healthWelnessData = [
    {
        "heading": "On Campus Dining",
        "content": "Our campus hosts a fully-equipped canteen that offers a range of healthy food and beverage options to students. Vegetarian as well as non-vegetarian options are available along with a wide variety of snacks and beverages.",
        "image": "https://cdn.itm.edu/assets/campus_dining_fc03d1c52e.webp"
    },
    {
        "heading": "Student Health Insurance",
        "content": "The Student Health Insurance Plan is an integral part of the university's efforts to promote the well-being of our students.",
        "image": "https://cdn.itm.edu/assets/student_health_insurence_44597c2912.webp"
    },
    {
        "heading": "Counseling Services",
        "content": "Sometimes, you just need someone to listen in a supportive and nonjudgmental way. Our qualified psychologists are here to help students clarify issues, explore their feelings, and discuss problem-solving strategies. We're here to support you whenever you need it.",
        "image": "https://cdn.itm.edu/assets/Counseling_Services_714295072e.webp"
    },
    {
        "heading": "On Campus Wellness Centre",
        "content": "We have established a Wellness Centre on campus for both faculty and students—a dedicated space to rejuvenate through prayer, peace, meditation, and other wellness therapies. This retreat, created by our HR Academic Team, offers employees a serene environment to unwind and restore balance. The main objective of the Centre is to ensure the overall health, fitness, and happiness of our entire campus community.",
        "image": "https://cdn.itm.edu/assets/on_campus_welness_center_168b43fea9.webp"
    },
    {
        "heading": "Weekly Meditation",
        "content": "Every Wednesday, we conduct a one-hour meditation session led by a dedicated team of Heartfulness Meditation experts. These sessions are open to both faculty members and students, providing an opportunity to practice mindfulness and inner calm. Additionally, all students are introduced to Heartfulness meditation initiation and HELM, fostering a holistic approach to well-being on campus.",
        "image": "https://cdn.itm.edu/assets/weekly_meditation_b0feed2aa0.webp"
    },
    {
        "heading": "Student Support & Advocacy",
        "content": "We work with students who are struggling with nonacademic challenges, distressing experiences, and crisis situations by providing support and advocacy and connecting students to resources in and outside of the university.",
        "image": "https://cdn.itm.edu/assets/student_support_adovocay_c68c9bc5a5.webp"
    },
    {
        "heading": "Wellness Events",
        "content": "Our Wellness Centre hosts a variety of enriching events designed to promote holistic well-being among students and faculty. These include the Mandala Art Workshop, where participants explore the therapeutic process of creating mandalas, and a Weight Loss Challenge to encourage fitness and teamwork. We also host engaging sessions like a webinar on World Food Day, a vibrant Wellness Carnival during the festive season, and an annual 5km Wellness Run in partnership with esteemed NGOs. Each event fosters community spirit, personal growth, and a commitment to health and wellness.",
        "image": "https://cdn.itm.edu/assets/welness_event_a56da67b8b.webp"
    }
]

let list2 = document.getElementById("health-welness");
list2.innerHTML = healthWelnessData.map(showData2).join("");

function showData2(healthWelnessData) {
    let listItems2 = `
        <div class="swiper-slide h-full w-full flex">
            <div class="border rounded-xl w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6">
            <div class="flex w-full items-center">
                <div class="flex w-full flex-col gap-4">
                <strong class="text-lg md:text-xl lg:text-2xl font-Bebas-Neue text-[#a91d54]">${healthWelnessData.heading}</strong>
                <div class="flex flex-col w-full gap-2">
                    <p class="text-sm md:text-base gap-2">
                        ${healthWelnessData.content}
                    </p>
                </div>
                </div>
            </div>
            <div class="flex h-full w-full">
                <div class="flex h-full w-full border overflow-hidden rounded-xl">
                <img src="${healthWelnessData.image}"
                    alt="${healthWelnessData.heading}" class="flex object-cover h-full w-full">
                </div>
            </div>
            </div>
        </div>
    `;
    return listItems2;
}
