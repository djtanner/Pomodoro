
        //Selectors and variables
        const submitButton = document.querySelector('.submit');
        const worktimeInput = document.getElementById('worktime');
        const breaktimeInput = document.getElementById('breaktime');
        const timerEl = document.getElementById('timer');
        const worktype = document.getElementById('worktype');
        const resetEl = document.getElementById('reset');
        let worktimeMinutes;
        let breaktimeMinutes;
        let workflag = 1; //workflag 0 means break
        var interval;


        
        //Event Listeners
        submitButton.addEventListener('click', startTimer);
        
        submitButton.disabled = true;

        worktimeInput.addEventListener('input', (event) => {
            console.log('type');
            if (worktimeInput.value === "" || breaktimeInput.value === ""){
            submitButton.disabled = true;} else {submitButton.disabled = false;}
            
          });

        breaktimeInput.addEventListener('input', (event) => {
            console.log('type');
            if (worktimeInput.value === "" || breaktimeInput.value === ""){
                submitButton.disabled = true;} else {submitButton.disabled = false;}
          });



        //Functions

        function startTimer(event){
        event.preventDefault();
        if (workflag === 0) {worktype.innerHTML === 'Start break';} else {worktype.innerHTML = 'Start work';}
        worktimeMinutes = Number(worktimeInput.value) * 60 ;
        breaktimeMinutes = Number(breaktimeInput.value) * 60 ;
        interval = setInterval(updateCountdown, 1000);
        submitButton.disabled = true;
        
      
        
}   

        function updateCountdown() {  
        
        const minutes = Math.floor(worktimeMinutes/60);
        let seconds = worktimeMinutes % 60
        if (seconds < 10) {timerEl.innerHTML = `${minutes} : 0${seconds}`;} 
            else {timerEl.innerHTML = `${minutes} : ${seconds}`}
            
            worktimeMinutes--;
            resetEl.innerHTML = `<button class="button1" onclick = "resetTimer()">Reset</button>`;

            if (worktimeMinutes === -1){
          
                if(workflag === 1){
                    workflag = 0;
                    worktype.innerHTML = 'Start break';
                    worktimeMinutes = Number(breaktimeInput.value) * 60; 
                   
                }
                else{
                    worktype.innerHTML = 'Start work';
                    workflag = 1;
                    worktimeMinutes = Number(worktimeInput.value) * 60; 
                    
            }

            
        }

        }
  
        function resetTimer(){
            clearInterval(interval);
            workflag = 1;
            minutes = 0;
            seconds = 0;
            timerEl.innerHTML = `${minutes} : 0${seconds}`;
            submitButton.disabled = false;

        }
       
      
      

