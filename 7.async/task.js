class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }
    
    addClock(startTime, alarmRinging){               
        if (startTime === null || alarmRinging === undefined){
            throw new Error('Отсутствуют обязательные аргументы');
        }
        
        if (this.alarmCollection.some((alarmUnit) => alarmUnit.time === startTime)){
            console.warn('Уже присутствует звонок на это же время');
        }
        
        this.alarmCollection.push({
            callback: alarmRinging,
            time: startTime,
            canCall: true
        });
    }

    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter((alarmUnit) => alarmUnit.time !== time);
    }

    getCurrentFormattedTime(){
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    start(){
        if (this.intervalId !== null){
            return;
        }       

        this.intervalId = setInterval(
            (function() {           
                this.alarmCollection.forEach(function(alarmUnit) {
                    if (alarmUnit.time === this.getCurrentFormattedTime() && alarmUnit.canCall) {                        
                        alarmUnit.canCall = false;
                        alarmUnit.callback();
                    }
                }.bind(this)); 
            }).bind(this), 1000
        );       
    }   

    stop(){
        clearInterval();
        this.intervalId = null;
    }

    resetAllCalls(){
        this.alarmCollection.forEach(function(alarmUnit){
            alarmUnit.canCall = true;
        })
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }


}