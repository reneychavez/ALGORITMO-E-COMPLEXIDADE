function insertionSort(arr) {
    /** Ordena 'arr' usando o Insertion Sort. */
    let n = arr.length;
    // Começa do segundo elemento (índice 1),
    // considerando o primeiro (índice 0) como a sub-lista ordenada inicial.
    for (let i = 1; i < n; i++) {
      let key = arr[i]; // O elemento que queremos inserir na sub-lista ordenada
      let j = i - 1;    // O último índice da sub-lista ordenada
  
      // Move os elementos da sub-lista ordenada (arr[0..i-1]) 
      // que são maiores que 'key', uma posição para frente
      // para abrir espaço para a 'key'.
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      
      // Insere a 'key' na sua posição correta (após o elemento
      // que é menor ou igual a ela).
      arr[j + 1] = key;
    }
    return arr;
  }