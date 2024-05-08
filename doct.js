async function fetchurl() {
    const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=';
    // D:\api new\doct.js
    try {
        let input = document.getElementById('inp');
        let button = document.querySelector('#btn');

        let def = document.querySelector('.def');

        button.addEventListener("click", async () => {
            try {
                let inpVal = input.value;
                let resp = await fetch(url + inpVal, {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '67d9b4011emshe451b567bf5f60ep124c93jsnb5d262c7267c',
                        'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
                    }
                });
                if (!resp.ok) {
                    throw new Error('Network response was not ok');
                }
                let data = await resp.json();
                wordheading.innerHTML = data.word;

                // Splitting the definition into an array of points
                if (data.definition == '') {
                    def.innerHTML='defenation not found';
                } else{
                    // Joining the points with line breaks
                    def.innerHTML = data.definition.replace('1.','<br>1.').replace('2.','<br>2.').replace('3.','<br>3.').replace('4.','<br>4.').replace('5.','<br>5.').replace('6.','<br>6.').replace('7.','<br>7.').replace('8.','<br>8.').replace('9.','<br>9.').replace('10.','<br>10.');
                }

            } catch (error) {
                console.error(error);
            }
        });
    } catch (error) {
        console.error(error);
    }
}

fetchurl();




