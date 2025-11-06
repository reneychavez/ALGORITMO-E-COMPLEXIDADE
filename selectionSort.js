function selectionSort(arr) {
    /** Ordena 'arr' usando o Selection Sort. */
    let n = arr.length;
    // Itera por todo o array. 'i' marca o início da sub-lista não ordenada.
    for (let i = 0; i < n; i++) {
      // Assume que o primeiro elemento da sub-lista não ordenada é o menor
      let minIdx = i;
  
      // Procura pelo menor elemento no restante do array (a sub-lista não ordenada)
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
  
      // Após encontrar o menor elemento, troca-o com o elemento
      // na posição 'i' (o início da sub-lista não ordenada).
      if (minIdx !== i) { // Otimização: só troca se o índice for diferente
          [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      }
    }
    return arr;
  }