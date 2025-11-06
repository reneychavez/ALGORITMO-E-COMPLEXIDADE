function mergeSort(arr) {
    /** Ordena 'arr' usando o Merge Sort (recursivo). */
    if (arr.length <= 1) {
      return arr; // Caso base: array com 0 ou 1 elemento já está ordenado
    }
  
    const mid = Math.floor(arr.length / 2); // Encontra o meio do array
    const left = arr.slice(0, mid);       // Sub-array da esquerda
    const right = arr.slice(mid);       // Sub-array da direita
  
    // Chamada recursiva para ordenar as duas metades e intercalá-las
    return _merge(mergeSort(left), mergeSort(right));
  }
  
  function _merge(left, right) {
    /** Função auxiliar que intercala (merge) dois arrays ordenados. */
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    // 1. Intercala 'left' e 'right' em 'resultArray'
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // Move o ponteiro do array da esquerda
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // Move o ponteiro do array da direita
      }
    }
  
    // 2. Concatena os elementos restantes (só um desses arrays terá elementos)
    // Usa concat() para anexar o restante do array 'left' (se houver)
    // e o restante do array 'right' (se houver)
    return resultArray
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));
  }