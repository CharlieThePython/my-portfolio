window.addEventListener("load", () => {
    const aboutMeArrow = document.getElementById("about-me-arrow");
    const myProjectsArrow = document.getElementById("my-projects-arrow");
    const myContactArrow = document.getElementById("my-contact-arrow");
    const mySkillsArrow = document.getElementById("my-skills-arrow");
    const myMainBox = document.getElementById("main-box");
    const myTextHeader = document.getElementById("main-text-header");
    const aboutMeBox = document.getElementById("about-me-box");
    const mySkillsBox = document.getElementById("my-skills-box");
    const myProyectBox = document.getElementById("my-project-box");
    const myContactBox = document.getElementById("my-contact-box");
    const menuClasses = Array.from(document.getElementsByClassName("menu-option"));
    const menuBox = document.getElementById("menu-box");
    const optionSelectedAudio = new Audio('../sounds/option-selected.mp3');

    let myDynamicTitle = document.getElementById("dynamicTitle");
    let myMenu = menuBox.innerHTML; // Agregar 'let' para evitar una variable global


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
        setTimeout(() => {
            document.body.style.cursor = "";
            $("#menu-box").children().hide();

            switch (element.id) {
                case "about-me":
                    optionSelectedAudio.play();
                    resizeBox();
                    myMainBox.innerHTML = aboutMeBox.innerHTML;
                    document.getElementById('my-favicon').href = 'images/M.png';
                    myDynamicTitle.innerText = "About Me";
                    break;
                case "my-skills":
                    resizeBox();
                    myMainBox.innerHTML = mySkillsBox.innerHTML;
                    document.getElementById('my-favicon').href = 'images/S.png';
                    myDynamicTitle.innerText = "My Skills";
                    break;
                case "my-projects":
                    resizeBox();
                    myMainBox.innerHTML = myProyectBox.innerHTML;
                    document.getElementById('my-favicon').href = 'images/P.png';
                    myDynamicTitle.innerText = "My Projects";
                    break;
                case "my-contact":
                    resizeTinyBox();
                    myMainBox.innerHTML = myContactBox.innerHTML;
                    document.getElementById('my-favicon').href = 'images/C.png';
                    myDynamicTitle.innerText = "My Contact";
                    break;
            }
        }, 50);
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
    function resizeTinyBox() {
        myMainBox.style.width = "50%";
        myMainBox.style.height = "75%";
    }

    function minimizeBox() {
        myMainBox.style.width = "25%";
        myMainBox.style.height = "50%";
    }

    function handleBackMenuClick() {
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







