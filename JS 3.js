function NumberOfDegree (Number = 0, Degree = 0){
    let i= 0;
    let result = 1;
    for (i=0; i < Degree; i++){
        result= result * Number;
    }
    console.log(result)
}
NumberOfDegree(4,3)