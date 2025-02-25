document.getElementById("login-btn")
            .addEventListener("click", function (event) {
                event.preventDefault();
                const acountNumber = document.getElementById('acount-number').value;
                const pinNumber = document.getElementById('pin-number').value;
                const convertedPin = parseInt(pinNumber);
                if(acountNumber.length === 11){
                    if(convertedPin === 2255){
                        window.location.href = "./main.html"
                    }
                    else{
                        alert('pin thik nai')
                    }
                }
                else{
                    alert('need valid number')
                }
            })