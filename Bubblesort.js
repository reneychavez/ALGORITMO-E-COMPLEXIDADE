function bubbleSort(arr) {
    /**
     * Ordena 'arr' usando o Bubble Sort.
     * Otimizado com uma flag 'swapped'.
     */
    let n = arr.length;
    // Percorre o array n vezes
    for (let i = 0; i < n; i++) {
      let swapped = false; // Flag de otimização
  
      // A cada passagem 'i', o i-ésimo maior elemento "flutua" 
      // para o final. Só precisamos comparar até n-i-1.
      for (let j = 0; j < (n - i - 1); j++) {
        // Compara elementos adjacentes
        if (arr[j] > arr[j + 1]) {
          // A troca (swap) usando destructuring assignment do JS
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
        }
      }
  
      // Se nenhuma troca ocorreu nesta passagem, o array já está ordenado.
      if (!swapped) {
        break;
      }
    }
    return arr;
  }