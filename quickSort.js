function quickSort(arr) {
    /**
     * Função principal que inicia a ordenação Quick Sort.
     * Chama a função recursiva auxiliar.
     */
    _quickSortRecursive(arr, 0, arr.length - 1);
    return arr;
  }
  
  function _quickSortRecursive(arr, low, high) {
    /** Função auxiliar recursiva do Quick Sort. */
    if (low < high) {
      // 'pi' é o índice de particionamento, arr[pi] está na posição correta
      let pi = _partition(arr, low, high);
  
      // Ordena recursivamente os elementos antes e depois do pivô
      _quickSortRecursive(arr, low, pi - 1);
      _quickSortRecursive(arr, pi + 1, high);
    }
  }
  
  function _partition(arr, low, high) {
    /**
     * Função de particionamento (Estratégia de Lomuto).
     * Escolhe o último elemento (high) como pivô.
     */
    let pivot = arr[high]; // O pivô
    let i = (low - 1);     // Índice do menor elemento (marca a fronteira)
  
    for (let j = low; j < high; j++) {
      // Se o elemento atual for menor ou igual ao pivô
      if (arr[j] <= pivot) {
        i++; // Avança a fronteira dos "menores"
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Troca
      }
    }
  
    // Coloca o pivô na sua posição correta (após todos os menores)
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return (i + 1); // Retorna o índice onde o pivô agora está
  }