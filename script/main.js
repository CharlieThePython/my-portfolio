window.addEventListener("load", () => {
    const aboutMeArrow = document.getElementById("about-me-arrow");
    const myProjectsArrow = document.getElementById("my-projects-arrow");
    const myContactArrow = document.getElementById("my-contact-arrow");
    const mySkillsArrow = document.getElementById("my-skills-arrow");
    const myMainBox = document.getElementById("main-box");
    const myTextHeader = document.getElementById("main-text-header");
    const aboutMeBox = document.getElementById("about-me-box");
    const mySkillsBox = document.getElementById("my-skills-box");
    const menuClasses = Array.from(document.getElementsByClassName("menu-option"));
    const menuBox = document.getElementById("menu-box");
    const optionSelectedAudio = new Audio('../sounds/option-selected2.mp3');

    let myMenu = menuBox.innerHTML; // Agregar 'let' para evitar una variable global

    // Manejar el evento 'canplaythrough'
    optionSelectedAudio.addEventListener('canplaythrough', () => {
        console.log('El audio se ha cargado completamente.');
    });

    menuClasses.forEach((menuElement) => {
        menuElement.addEventListener("mouseover", () => {
            handleMenuMouseover(menuElement);
        });

        menuElement.addEventListener("mouseout", () => {
            handleMenuMouseout(menuElement);
        });

        menuElement.addEventListener("click", () => {
            handleMenuClick(menuElement);
        });

        menuElement.addEventListener("mousedown", () => {
            handleMenuMousedown(menuElement);
        });

        menuElement.addEventListener("mouseup", () => {
            handleMenuMouseup(menuElement);
        });

    });

    // Funciones para manejar eventos del menú
    function handleMenuMouseover(element) {
        let menuId = element.id;
        switch (menuId) {
            case 'about-me':
                aboutMeArrow.style.display = "";
                break;
            case 'my-projects':
                myProjectsArrow.style.display = "";
                break;
            case 'my-contact':
                myContactArrow.style.display = "";
                break;
            default:
                mySkillsArrow.style.display = "";
        }
        element.style.backgroundColor = "#80B050";
        document.body.style.cursor = "pointer";
    }

    function handleMenuMouseout(element) {
        optionSelectedAudio.pause();
        optionSelectedAudio.currentTime = 0;
        let menuId = element.id;
        switch (menuId) {
            case 'about-me':
                aboutMeArrow.style.display = "none";
                break;
            case 'my-projects':
                myProjectsArrow.style.display = "none";
                break;
            case 'my-contact':
                myContactArrow.style.display = "none";
                break;
            default:
                mySkillsArrow.style.display = "none";
        }
        element.style.backgroundColor = "#B8F878";
    }

    function handleMenuClick(element) {
        optionSelectedAudio.play();
        setTimeout(() => {
            document.body.style.cursor = "";
            $("#menu-box").children().hide();
            resizeBox();

            switch (element.id) {
                case "about-me":
                    myMainBox.innerHTML = aboutMeBox.innerHTML;
                    break;
                case "my-skills":
                    myMainBox.innerHTML = mySkillsBox.innerHTML;
                    break;
            }
            const backMenuBox = document.getElementById("back-menu");
            backMenuBox.addEventListener("click", handleBackMenuClick);
        }, 100);
    }

    function handleMenuMousedown(element) {
        element.style.fontSize = "1.1em";
    }

    function handleMenuMouseup(element) {
        element.style.fontSize = "1em";
    }

    // Funciones adicionales
    function resizeBox() {
        myMainBox.style.width = "90%";
        myMainBox.style.height = "90%";
    }

    function minimizeBox() {
        myMainBox.style.width = "25%";
        myMainBox.style.height = "50%";
    }

    function handleBackMenuClick() {
        optionSelectedAudio.play();
        setTimeout(() => {
            minimizeBox();
            showElements(menuClasses);
            $("#main-box").children().hide();
            myMainBox.innerHTML = myMenu;
        }, 100);
    }

    function hideElements(boxElements) {
        boxElements.forEach((element) => {
            element.style.display = "none";
        });
    }

    function showElements(boxElements) {
        boxElements.forEach((element) => {
            element.style.display = "";
        });
    }



});







