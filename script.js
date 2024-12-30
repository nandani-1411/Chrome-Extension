fetch("https://icanhazdadjoke.com/slack").then((data)=>data.json())
                                     .then((jokedata)=>{
                                        const jokeText=jokedata.attachments[0].text
                                        const jokeElement=document.getElementById("joke")
                                        jokeElement.innerHTML=jokeText
                                     });
