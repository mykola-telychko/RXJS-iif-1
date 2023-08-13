console.clear();
import { fromEvent, iif, of, interval, pipe } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/conditional/iif

// example 1
// const obsOne$ = of('.. R ..');
// const obsTwo$ = of('X');

// interval(1000)
//   .pipe(mergeMap((val) => iif(() => val % 4 === 0, obsOne$, obsTwo$)))
//   .subscribe(console.log);

// example 2
const condition = false; // Change this to true or false

// Define observables for true and false conditions
const trueObservable = of('True Observable').pipe(delay(1000));
const falseObservable = of('False Observable').pipe(delay(1000));

// Use iif to emit values based on the condition
// iif( condition, true, elseFalse );
const source$ = iif(() => condition, trueObservable, falseObservable);

// Subscribe to the source observable
source$.subscribe((value) => {
  console.log(value);
});
