/* =====================================
   Smooth Scrolling Navigation
===================================== */


document.querySelectorAll('a[href^="#"]').forEach(anchor => {


    anchor.addEventListener(
        "click",
        function(event){


            event.preventDefault();


            const target =
                document.querySelector(
                    this.getAttribute("href")
                );


            if(target){

                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }


        }

    );


});









/* =====================================
   Active Navigation Highlight
===================================== */


const sections =
document.querySelectorAll("section");


const navLinks =
document.querySelectorAll("nav a");



window.addEventListener(
"scroll",
()=>{


    let current = "";


    sections.forEach(section=>{


        const sectionTop =
        section.offsetTop - 120;


        const sectionHeight =
        section.clientHeight;


        if(
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ){

            current = section.id;

        }


    });



    navLinks.forEach(link=>{


        link.classList.remove(
            "active"
        );


        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add(
                "active"
            );

        }


    });



});









/* =====================================
   Fade-in Animation On Scroll
===================================== */


const observer =
new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add(
                "show"
            );


        }


    });


},


{

threshold:0.15

}

);




const animatedElements =
document.querySelectorAll(
    "section, .card, .project, .experience"
);



animatedElements.forEach(element=>{


    element.classList.add(
        "hidden"
    );


    observer.observe(
        element
    );


});









/* =====================================
   Auto Update Footer Year
===================================== */


const footer =
document.querySelector("footer p");



if(footer){


    const year =
    new Date().getFullYear();


    footer.innerHTML =
    `© ${year} Yiheng Lyu`;


}