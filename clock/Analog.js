clr = setInterval(() => {
    let dates = new Date();
    hr = dates.getHours();
    mn = dates.getMinutes();
    sc = dates.getSeconds();
    hrRot = 30 * hr + mn / 2 + sc / 120;
    mnRot = 6 * mn + sc / 10;
    scRot = 6 * sc;
    hour.style.transform = `rotate(${hrRot}deg)`;
    min.style.transform = `rotate(${mnRot}deg)`;
    sec.style.transform = `rotate(${scRot}deg)`;
    let date = new Date();
    let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    appnd.innerHTML = "<h2>Time = " + time + "<br>" + "Date = " + date.toLocaleDateString();
    if (date.getSeconds() % 3 == 0) {
        headings.style.color = "springgreen";
        appnd.style.color = "springgreen";
    } else if (date.getSeconds() % 3 == 1) {
        headings.style.color = "greenyellow";
        appnd.style.color = "greenyellow";
    } else if (date.getSeconds() % 3 == 2) {
        headings.style.color = "yellow";
        appnd.style.color = "yellow";
    }
}, 1000);