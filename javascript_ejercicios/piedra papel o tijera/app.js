const OPTIONS = ["ALICE", "BOB", "EMPATE"];

const $ = (id) => document.getElementById(id);

function parseT(value) {
  const n = Number(value);
  if (!Number.isInteger(n)) return null;
  if (n < 1 || n > 100) return null;
  return n;
}

function createSelectRow(i) {
  const wrapper = document.createElement("div");
  wrapper.className = "selectRow";

  const label = document.createElement("label");
  label.className = "field";
  label.textContent = `Juego #${i}`;

  const select = document.createElement("select");
  select.dataset.game = String(i);

  for (const opt of OPTIONS) {
    const option = document.createElement("option");
    option.value = opt;
    option.textContent = opt;
    select.appendChild(option);
  }

  label.appendChild(select);
  wrapper.appendChild(label);
  return wrapper;
}

function calcularGanador(values) {
  let alice = 0;
  let bob = 0;

  for (const v of values) {
    if (v === "ALICE") alice += 2;
    else if (v === "BOB") bob += 2;
    else {
      alice += 1;
      bob += 1;
    }
  }

  if (alice > bob) return "ALICE";
  if (bob > alice) return "BOB";
  return "EMPATE";
}

function main() {
  const tInput = $("tInput");
  const btnJugar = $("btnJugar");
  const btnCalcular = $("btnCalcular");
  const selectsContainer = $("selects");
  const msg = $("msg");

  function setMsg(text) {
    msg.textContent = text ?? "";
  }

  function clearSelects() {
    selectsContainer.innerHTML = "";
  }

  btnJugar.addEventListener("click", () => {
    const t = parseT(tInput.value);
    if (t === null) {
      clearSelects();
      btnCalcular.classList.add("hidden");
      setMsg("Ingresa un número entero T válido entre 1 y 100.");
      return;
    }

    setMsg(`Listo: crea ${t} selects y luego presiona Calcular.`);
    clearSelects();

    for (let i = 1; i <= t; i++) {
      selectsContainer.appendChild(createSelectRow(i));
    }

    btnCalcular.classList.remove("hidden");
  });

  btnCalcular.addEventListener("click", () => {
    const selects = selectsContainer.querySelectorAll("select");
    if (selects.length === 0) {
      setMsg("Primero presiona Jugar para generar los selects.");
      return;
    }

    const values = Array.from(selects, (s) => s.value);
    const ganador = calcularGanador(values);

    // La diapositiva pide imprimir en MAYÚSCULA el ganador o EMPATE.
    alert(ganador);
  });
}

document.addEventListener("DOMContentLoaded", main);

