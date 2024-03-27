function transporMatriz(A) {
    console.log("Matriz original:");
    for (let i = 0; i < A.length; i++) {
        console.log(A[i].join(" "));
    }
    const transposta = [];
    for (let i = 0; i < A[0].length; i++) {
        transposta[i] = [];
        for (let j = 0; j < A.length; j++) {
            transposta[i][j] = A[j][i];
        }
    }

    console.log("\nMatriz transposta:");
    for (let i = 0; i < transposta.length; i++) {
        console.log(transposta[i].join(" "));
    }
}

const matrizOriginal = [
    [1, 3, 5],
    [2, 4, 6]
];

transporMatriz(matrizOriginal);
