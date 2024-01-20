window.addEventListener("load", () => {
    const aboutMeArrow = document.getElementById("about-me-arrow");
    const myProjectsArrow = document.getElementById("my-projects-arrow");
    const myContactArrow = document.getElementById("my-contact-arrow");
    const mySkillsArrow = document.getElementById("my-skills-arrow");
    const myMainBox = document.getElementById("main-box");
    const myTextHeader = document.getElementById("main-text-header");
    const aboutMeBox = document.getElementById("about-me-box");
    const menuClasses = Array.from(document.getElementsByClassName("menu-option"));
    const mainMenu = Array.from(document.getElementsByClassName("my-main-menu"));
    const menuBox = document.getElementById("menu-box");
    const optionSelectedAudio = new Audio('../sounds/option-selected2.mp3');

    myMenu = menuBox.innerHTML;
    // Manejar el evento canplaythrough
    optionSelectedAudio.addEventListener('canplaythrough', () => {
        console.log('El audio se ha cargado completamente.');
    });

    menuClasses.forEach((menuElement) => {
        menuElement.addEventListener("mouseover", () => {
            let menuId = menuElement.id;
            switch(menuId){
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
            menuElement.style.backgroundColor = "#80B050";
            document.body.style.cursor = "pointer";
        });

        menuElement.addEventListener("mouseout", () => {
            optionSelectedAudio.pause();
            optionSelectedAudio.currentTime = 0; // Reiniciar la reproducción al principio
            let menuId = menuElement.id;
            switch(menuId){
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
            menuElement.style.backgroundColor = "#B8F878";
        });
        menuElement.addEventListener("click", () => {
            optionSelectedAudio.play();
            setTimeout(() => {
                document.body.style.cursor = "";
                $("#menu-box").children().hide();
                resizeBox();
        
                // Condicional que cambiará el contenido dependiendo del ID
                switch (menuElement.id) {
                    case "about-me":
                        myMainBox.innerHTML = aboutMeBox.innerHTML;
                        break;
                }
        
                const backMenuBox = document.getElementById("back-menu");
                backMenuBox.addEventListener("click", handleBackMenuClick);
            }, 900);
        
            function handleBackMenuClick() {
                optionSelectedAudio.play();
                setTimeout(() => {
                    minimizeBox();
                    showElements(menuClasses);
                    $("#main-box").children().hide();
                    myMainBox.innerHTML = myMenu;
                }, 900);
            }
        });
        
        

        menuElement.addEventListener("mousedown",()=>{
            menuElement.style.fontSize = "1.1em";
        });
        menuElement.addEventListener("mouseup",()=>{
            menuElement.style.fontSize = "1em";
        });

// ...


        //FUNCIONES
        //Vamos a hacer una función para redimensionar la caja
        function resizeBox(){
            myMainBox.style.width = "90%";
            myMainBox.style.height = "90%";
        }

        //Creamos otra función, pero para minimizar la caja y volver al menu original
        function minimizeBox(){
            myMainBox.style.width = "25%";
            myMainBox.style.height = "50%";
        }
        function hideElements(boxElements){
            boxElements.forEach((element) => {
                element.style.display = "none";
            });
        }
        function showElements(boxElements){
            boxElements.forEach((element) => {
                element.style.display = "";
            });
        }
    });
});






