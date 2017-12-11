enter();
function enter() {
    const n = Number(prompt(`Введіть n-число Фібоначчі`));
    document.write(`${n} число Фібоначчі розраховане циклом "for:" =${cycle(n)}`);
    document.write('<br>');
    document.write(`${n} число Фібоначчі розраховане рекурсивним методом =${recursive(n)}`);
    document.write('<br>');
    document.write(`${n} число Фібоначчі розраховане за допомогою масиву =${array(n)}`);
}
function cycle(n) {
    let prev = 1;
    let prePrev = 1;
    let next;
    for (let i=1; i<n; i++) {
        next = prev + prePrev;
        prePrev = prev;
        prev = next;
    }
    return prev;
}

function recursive(n) {
  if (n <= 1) 
  return 1;
  return recursive(n - 1) + recursive(n - 2);
}

function array(n) {
    let farray = [1,1];
    
    for(let i=2; i<=n; i++) {
        farray[i] = farray[i - 1] + farray[i - 2];
    }
    return farray[n];
}
