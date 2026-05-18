function showNatureLove(){
    const emojis = ["🌿", "🍃", "🌻", "🌸", "😊", "💛"];
        for (let i = 0; i < 20; i++) {
        let emoji = document.createElement("span");
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        emoji.style.position = "fixed";
        emoji.style.left = Math.random() * window.innerWidth + "px";
        emoji.style.top = Math.random() * window.innerHeight + "px";

        emoji.style.fontSize = "30px";
        emoji.style.animation = "floatUp 2s ease-out forwards";

        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 2000);
    }
}
function viewFlowers() {
    document.querySelector("h2:nth-of-type(2)").scrollIntoView({ behavior: 'smooth' });
}
function viewSunsets() {
    document.querySelector(".viewsunsets").scrollIntoView({ behavior: 'smooth' });
}
function learnMore() {
    document.querySelector("h3").scrollIntoView({ behavior: 'smooth' });
}
