document.addEventListener('DOMContentLoaded', () => {
    function updateStyles() {
        const now = new Date();
        let hour = now.getHours(); // retrieve the current hour
        const body = document.body;
        const content = document.getElementById('content');
        const image = document.querySelector('img.flexible');
        const masthead = document.querySelector('.masthead');

        // check the hour grouping and assign background, font, image, and text
        if (hour >= 5 && hour < 12) {
            body.style.backgroundColor = '#FFFAE5';
            content.style.fontFamily = 'Arial, sans-serif';
            image.src = 'images/morning.jpg';
            masthead.textContent = 'Good Morning!';
        } else if (hour >= 12 && hour < 18) {
            body.style.backgroundColor = '#FFE4B5';
            content.style.fontFamily = 'Georgia, serif';
            image.src = 'images/afternoon.jpg';
            masthead.textContent = 'Good Afternoon!';
        } else if (hour >= 18 && hour < 23) {
            body.style.backgroundColor = '#FFDAB9';
            content.style.fontFamily = 'Verdana, sans-serif';
            image.src = 'images/evening.jpg';
            masthead.textContent = 'Good Evening!';
        } else {
            body.style.backgroundColor = '#2F4F4F';
            content.style.fontFamily = 'Courier New, monospace';
            image.src = 'images/night.jpg';
            masthead.textContent = 'Good Night!';
        }

        // Day of the week extra credit
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = daysOfWeek[now.getDay()];
        document.getElementById('day-of-week').textContent = `Today is ${currentDay}.`;
    }

    updateStyles(); // initial call to set the page

    setInterval(updateStyles, 60000); // refresh every minute

    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear; // alter the copyright year to be the current year

});
