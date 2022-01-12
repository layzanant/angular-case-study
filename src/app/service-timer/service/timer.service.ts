import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TimerService {

    startPauseEmitter = new BehaviorSubject<{ key: 'p' | 's', date: Date, timer: number }[]>([]);
    timerCountEmit = new BehaviorSubject<number>(0);
    startEmit = new BehaviorSubject<number>(0);
    pauseEmit = new BehaviorSubject<number>(0);

    constructor() { }

    setStartPauseEmitter(val: { key: 'p' | 's', date: Date, timer: number }[]) {
        this.startPauseEmitter.next(val);
    }
    getStartPauseEmitter() {
        return this.startPauseEmitter.asObservable();
    }
    setTimerCountEmit(val: number) {
        this.timerCountEmit.next(val);
    }
    getTimerCountEmit() {
        return this.timerCountEmit.asObservable();
    }
    setStartEmit(val: number) {
        this.startEmit.next(val);
    }
    getStartEmit() {
        return this.startEmit.asObservable();
    }
    setPauseEmit(val: number) {
        this.pauseEmit.next(val);
    }
    getPauseEmit() {
        return this.pauseEmit.asObservable();
    }
}