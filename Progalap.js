1.Feladat =================
// String
const konstans = 'Gabor';
const konstans2 = '123';
// number
const num = 1;
// boolean
const bool = true;
const bool = false;
// fugveny
const fugveny = () => {};
// object
const player = {
  pos: x
};
// tomb
const tomb = [1, 2, 3];



2.Feladat =================
a const értéke az fix és nem tudjuk megváltoztatni
a letet megváltoztathatjuk útközben
let name = 'Gizi';
console.log(name);
// kiirja h gizi
name = 'Pisti';
console.log(name);
// kiirja h pisti
const madar = 'csipp';
console.log(madar);
//kiirja csipp
madar = 'karr';
console.log(madar);
//hibát ir ki


3.Feladat =================
// szerinti
    //a k egy tömböt vár és adunk neki egy számot
    //viszont nem változtatjuk meg másra
const fgv = (k) => {
    k.push(1);
    };
    let k = [];
    fgv(k);
    console.log(k);
};

    //érték szerinti
    //az a-nak már van értéke, viszont a fügvény ezt az értéket megváltoztatja
    const fgv = (k) => {
        k = 10;
        };
        let a = 1;
        fgv(a);
        console.log(a);
    };
        


4.Feladat =================
const tomb = [1,2,3,4];
const szam = 3;

const containsElemnts = (tomb, szam) => {
    for(let i = 0; i< tomb.length; i++) {
        if (szam === tomb[i]) {
            return 'szerepel a szam benne';
        }
    }
};

console.log(containsElemnts(tomb, szam));


5.Feladat===========================
const containsElemnts = (object) => {
    let temp = ;
    for(let i = 0; i< object.length; i++) {
        if (object[i].age > temp) {
            
        }
    }
};

6.Feladat===========================
cont positive = () => {
    for(let i = 10; i < 100; i++) {
        if(i % 2 === 0) {
            console.log(i);
        }
    }
}



7.Feladat===========================
const metszet = (tomb1, tomb2) => {
    const res = [];
    for (let i = 0; i < tomb1.length; i++) {
        for (let j = 0; j < tomb2.length; j++) {
            if (tomb1[i] === tomb2[j]) {
                res.push(tomb[i]);
            }
        }
    }
    return res;
}

8.Feladat===========================

const ossze = (a,b) => {
    return a+b;
}
const szorzas = (a,b) => {
    return a*b;
}
const hatvany = (a,b) => {
    return a*(b);
}

module.exports = {
    ossze,
    szorzas,
    hatvany
}



9.Feladat ===================================
const feladat = (height, weidth) => {
    const arr = new Array(weidth);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(height);
      for(let j =0; j < arr[i].length; j++) {
          arr[i][j] = i*j;
      }
    }
    return arr;
  };