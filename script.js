'use strict';
let secret_number = Math.trunc(Math.random() * 20) + 1;

let score = Number(document.querySelector('.score').textContent);

let high_score= 0;

document.querySelector('.check').addEventListener('click', function()
{
    let val = document.querySelector('.guess').value;
    if(!val)
    {
        document.querySelector('.message').textContent = '❌ No Number';
    }else if(val == secret_number)
    {
        document.querySelector('.message').textContent = '✌✔Correct Number';
        document.querySelector('body').style.backgroundColor = 'green';
        
        document.querySelector('.number').textContent = secret_number;
        document.querySelector('.number').style.width = '50rem';
        if(score > high_score)
        {
            high_score = score;
            document.querySelector('.highscore').textContent = high_score;
        }
    }else if(val > secret_number && score != 0)
    {
        document.querySelector('.message').textContent = "⚡Too High";
        score--;
        document.querySelector('.score').textContent = score;
    }
    else if(val < secret_number && score != 0)
    {
        document.querySelector('.message').textContent = "⚡Too Low";
        score--;
        document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.message').textContent = "Better Luck Next Time";
    }
    
})

document.querySelector('.again').addEventListener('click', function()
{
    secret_number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = '20';
    document.querySelector('body').style.backgroundColor = '#222';
    //document.querySelector('.highscore').textContent = '0';
    document.querySelector('.message').textContent = 'Start guessing... ';
    document.querySelector('.guess').value = ' ';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    
})