const bands = {
    punk: 'Green Day',
    rap: 'Run DMC',
    classic: 'Led Zeppelin'
};

for (const property in bands) {
    console.log(`A ${property} band is ${bands[property]}`);
    console.log(property + " " + bands[property]);
};