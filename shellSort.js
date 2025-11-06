function shellSort(arr) {
    const meuArray = [64, 34, 25, 12, 22, 11, 90];
    /** Ordena 'arr' usando o Shell Sort (sequência de gap n/2, n/4, ...). */
    let n = arr.length;
    // Inicializa o gap (intervalo)
    let gap = Math.floor(n / 2);
  
    // Continua reduzindo o gap até ser 1
    while (gap > 0) {
      // Faz um "insertion sort" para este tamanho de gap.
      // Começa a partir do índice 'gap'
      for (let i = gap; i < n; i++) {
        let temp = arr[i]; // Elemento a ser "inserido"
        let j = i;
  
        // Compara arr[i] com elementos anteriores a 'gap' posições (arr[i-gap])
        // e move os maiores para frente
        while (j >= gap && arr[j - gap] > temp) {
          arr[j] = arr[j - gap];
          j -= gap;
        }
        
        // Insere o 'temp' na sua posição correta
        arr[j] = temp;
      }
      // Reduz o gap para a próxima iteração
      gap = Math.floor(gap / 2);
      console.log("Shell Sort:", shellSort([...meuArray]));
    }
    return arr;
    
  }
  