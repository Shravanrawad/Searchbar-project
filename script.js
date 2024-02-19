let availablesearch = [
        'HTML',
        'Css',
        'Javascript',
        'Full Stack Development',
        'Where to learn Web Development',
        'Code With Harry',
        'Code Aur Chai',
        'How to learn coding',
        'Letest New',
        'Mhj',
        'Tmkoc',
        'Cid',
    ];

    const resultbox = document.querySelector('.resultbox');
    const inputbox = document.getElementById('inputbox');


    inputbox.onkeyup = function(){
        resultbox.style.display = 'block';
        let result = [];
        let input = inputbox.value; 
        if(input.length){
            result = availablesearch.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
            });
        }
        display(result);
    }

    function display(result){
        const content = result.map((list)=>{
              return "<li onclick = selectinput(this)>"  + list  + "</li>";
        });

        resultbox.innerHTML = "<ul>" + content.join('') + "</ul>";
    }
    
    function selectinput(list){
        inputbox.value = list.innerHTML 
    }
