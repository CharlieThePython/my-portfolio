window.addEventListener("load", () => {
    //DEFINCIÓN DE CONSTANTES

        //DEFINICIÓN DE CONSTANTES DE FLECHA
    const aboutMeArrow = document.getElementById("about-me-arrow");
    const myProjectsArrow = document.getElementById("my-projects-arrow");
    const myContactArrow = document.getElementById("my-contact-arrow");
    const mySkillsArrow = document.getElementById("my-skills-arrow");

        //DEFINICIÓN DE CAJAS
    const myMainBox = document.getElementById("main-box");
    const aboutMeBox = document.getElementById("about-me-box");
    const mySkillsBox = document.getElementById("my-skills-box");
    const myProyectBox = document.getElementById("my-project-box");
    const myContactBox = document.getElementById("my-contact-box");
        //DEFINICIÓN DE LAS DIFERENTES OPCIONES DEL MENÚ
    const menuClasses = Array.from(document.getElementsByClassName("menu-option"));
    const menuBox = document.getElementById("menu-box");

    //PARA CAMBIAR EL TÍTULO DINÁMICAMENTE
    let myDynamicTitle = document.getElementById("dynamicTitle");



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

    // Funciones para manejar eventos del menú con respecto al ratón
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
    }

    function handleMenuClick(element) {
        setTimeout(() => {
            document.body.style.cursor = "";
            $("#menu-box").children().hide();
            optionSelectedAudio.play();
            switch (element.id) {
                case "about-me":
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

});







