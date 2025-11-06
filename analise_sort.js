// --- Início: Os 6 Algoritmos de Ordenação ---
// (Necessários para o script funcionar)

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let swapped = false;
    for (let j = 0; j < (n - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return _merge(left, right);
}
function _merge(left, right) {
  let result = [], i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pi = _partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
}
function _partition(arr, low, high) {
  let pivot = arr[high];
  let i = (low - 1);
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return (i + 1);
}

function shellSort(arr) {
  let n = arr.length;
  let gap = Math.floor(n / 2);
  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      let temp = arr[i], j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
}

// --- Fim: Algoritmos ---

// --- Início: Ferramentas de Análise ---

const { performance } = require('perf_hooks'); // Para medição de tempo precisa

/** Gera um array aleatório */
function createRandomList(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * size * 10));
  }
  return arr;
}

/** Gera um array ordenado */
function createSortedList(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(i);
  }
  return arr;
}

/** Gera um array inversamente ordenado */
function createReversedList(size) {
  const arr = [];
  for (let i = size - 1; i >= 0; i--) {
    arr.push(i);
  }
  return arr;
}

/**
 * Mede o tempo de execução de um algoritmo
 */
function measureTime(algoFn, arr) {
  const start = performance.now();
  algoFn(arr);
  const end = performance.now();
  return (end - start).toFixed(4); // Retorna tempo em ms com 4 casas decimais
}

// --- Fim: Ferramentas ---

// --- Início: O "Motor" da Análise ---

async function runAnalysis() {
  const algorithms = {
    "Bubble Sort": bubbleSort,
    "Insertion Sort": insertionSort,
    "Selection Sort": selectionSort,
    "Shell Sort": shellSort,
    "Merge Sort": mergeSort,
    "Quick Sort": quickSort,
  };

  const sizes = [10, 100, 1000, 10000];
  const listTypes = {
    "Aleatória": createRandomList,
    "Ordenada": createSortedList,
    "Invertida": createReversedList,
  };

  // Cabeçalho da tabela
  console.log("| Tipo de Lista | Tamanho (n) | Algoritmo | Tempo (ms) |");
  console.log("|:---|:---|:---|---:|");

  for (const typeName in listTypes) {
    const createList = listTypes[typeName];
    for (const size of sizes) {
      for (const algoName in algorithms) {
        // Pula testes muito lentos (O(n^2) com n=10k)
        if (size >= 10000 && ["Bubble Sort", "Insertion Sort", "Selection Sort"].includes(algoName)) {
          console.log(`| ${typeName} | ${size} | ${algoName} | TIMEOUT (Lento demais) |`);
          continue;
        }

        // Pula o pior caso do QuickSort (lista ordenada) que estoura a pilha
        if (size >= 10000 && algoName === "Quick Sort" && (typeName === "Ordenada" || typeName === "Invertida")) {
          console.log(`| ${typeName} | ${size} | ${algoName} | ESTOURO DE PILHA (Pior Caso) |`);
          continue;
        }

        // Gera uma nova lista a cada teste para garantir
        const arr = createList(size);
        const time = measureTime(algorithms[algoName], arr);
        console.log(`| ${typeName} | ${size} | ${algoName} | ${time} |`);
      }
      console.log(`| ... | ... | ... | ... |`); // Separador
    }
  }
}

// Roda a análise
runAnalysis();