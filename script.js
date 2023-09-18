function btnFun() {
            document.getElementById("form").style.opacity = 1;
            document.getElementById("form").style.margin = "-562px auto";
            document.getElementById("btn").style.transform = "scale(.0)";
        }
        function Event1() {
            let Keydown = document.getElementById("Keydown").value;
            document.getElementById("form").style.background = Keydown;
        }
        function Event2() {
            let Keypress = document.getElementById("Keypress").value;
            document.getElementById("form").style.background = Keypress;
        }
        function Event3() {
            let Keyup = document.getElementById("Keyup").value;
            document.getElementById("form").style.background = Keyup;
        }

