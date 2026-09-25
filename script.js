function openPortal(subject) {

    const portal =
        document.getElementById("portal");

    const portalSubject =
        document.getElementById("portalSubject");


    portalSubject.textContent = subject;


    portal.classList.add("active");


    setTimeout(function() {

        portal.classList.remove("active");

    }, 1400);

}
