var vec = []
for (i = 0; i<=999; i++){
    vec[i]=true
}

for (i = 2; i <= 999; i++){
        for(np = 2; i * np <= 999; np++){
            vec[i*np] = false
        }

    if(vec[i]==true){

        console.log(i)
    }
}