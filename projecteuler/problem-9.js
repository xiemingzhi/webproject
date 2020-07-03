/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.
There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.
specialPythagoreanTriplet(24) should return a number.
specialPythagoreanTriplet(24) should return 480.
specialPythagoreanTriplet(120) should return 49920, 55080 or 60000
specialPythagoreanTriplet(1000) should return 31875000.
a+b+c=n
3+4+5=12
3*4*5=60=product
1^2 + 2^2 = 5 (NOT)
1^2 + 3^2 = 10 (NOT)
1^2 + 4^2 = 17 (NOT)
1^2 + 5^2 = 26 (NOT)
https://en.wikipedia.org/wiki/Pythagorean_triple
Euclid's formula
//Every primitive triple arises (after the exchange of a and b, if a is even) from a unique pair of coprime numbers m, n, one of which is even.
a = 2^2 - 1^2 = 3
b = 2*2*1 = 4
c = 2^2 + 1^2 = 5
a = 3^2 - 2^2 = 5
b = 2*3*2 = 12
c = 3^2 + 2^2 = 13
//The triple generated by Euclid's formula is primitive if and only if m and n are coprime and not both odd.
//When both m and n are odd, then a, b, and c will be even, and the triple will not be primitive; however, dividing a, b, and c by 2 will yield a primitive triple 
a = 3^2 - 1^2 = 8
b = 2*3*1 = 6
c =  3^2 + 1^2 = 10
//two integers a and b are said to be coprime if the only positive integer (factor) that divides both of them is 1.
a = 4^2 - 3^2 = 7
b = 2*4*3 = 24
c = 4^2 + 3^2 = 25
7^2 + 24^2 = 49 + 576 = 625 = 25^2
1+11+12=24
7+8+9=24
7*8*9=504
*/
function specialPythagoreanTriplet(n) {
    let sumOfabc = n;
    let abcfound = false;

    let o = 2;
    let p = 1;
    let a = o*o - p*p;
    let b = 2*o*p;
    let c = o*o + p*p;
    //a+b+c=n therefore c<n
    while(c < n) {
        //iterate over all possibilities
        for (let i = p; i < o; i++) {
            //console.log('a', a, 'b', b, 'c', c);
            if ((a+b+c) == n) {
                abcfound = true;
                return a*b*c;
            }
            a = o*o - i*i;
            b = 2*o*i;
            c = o*o + i*i;
        }
        o++;
    }

    // Good luck!
    return -1;

    // let m = 2;
    // let a = 2*m;
    // let b = (m*m - 1);
    // let c = (m*m + 1);
    // while((a+b+c) <= n) {
    //     console.log('a', a, 'b', b, 'c', c);
    //     if ((a+b+c) == n) {
    //         abcfound = true;
    //         return a*b*c;
    //     }
    //     m++;
    //     a = 2*m;
    //     if (a % 2 == 0) {
    //         b = (m*m - 1);
    //         c = (m*m + 1);
    //     } else {
    //         b = (m*m - 1)/2;
    //         c = (m*m + 1)/2;
    //     }
    // }

}
console.log('abc', specialPythagoreanTriplet(12));   
console.log('abc', specialPythagoreanTriplet(24));   
console.log('abc', specialPythagoreanTriplet(120));
console.log('abc', specialPythagoreanTriplet(1000));
   