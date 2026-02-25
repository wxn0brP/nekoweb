const $ = (selector) => document.querySelector(selector);

function getNextWednesday() {
    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    let target = new Date(now);

    // Calculate days until Wednesday (Wednesday = 3)
    let daysUntilWednesday = (3 - currentDay + 7) % 7;

    // If it's Tuesday (day 2) and time is after 15:22, jump to next Wednesday
    if (currentDay === 2 && (currentHour > 15 || (currentHour === 15 && currentMinute > 22))) {
        daysUntilWednesday = 8;
    }

    // If today is Wednesday go to next Wednesday
    if (currentDay === 3) {
        daysUntilWednesday = 7;
    }

    target.setDate(now.getDate() + daysUntilWednesday);
    target.setHours(22, 15, 0, 0);

    return target;
}

function updateCountdown() {
    const target = getNextWednesday();
    const now = new Date();
    const diff = target - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    $("#days").innerHTML = String(days).padStart(2, "0");
    $("#hours").innerHTML = String(hours).padStart(2, "0");
    $("#minutes").innerHTML = String(minutes).padStart(2, "0");
    $("#seconds").innerHTML = String(seconds).padStart(2, "0");

    // Show next event info
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    };
    $("#next-event-info").innerHTML =
        "Next event: " + target.toLocaleDateString("en-US", options);
}

setInterval(updateCountdown, 1000);
updateCountdown();
