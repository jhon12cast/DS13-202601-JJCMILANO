const $ = (id) => document.getElementById(id);

function parseN(value) {
  const n = Number(value);
  if (!Number.isInteger(n)) return null;
  if (n < 1 || n > 100) return null;
  return n;
}

function createPartidoRow(i) {
  const wrapper = document.createElement("div");
  wrapper.className = "partidoRow";

  const labelBrasil = document.createElement("label");
  labelBrasil.className = "field";
  labelBrasil.textContent = `Partido #${i} - Brasil`;
  const inputBrasil = document.createElement("input");
  inputBrasil.type = "number";
  inputBrasil.min = "0";
  inputBrasil.placeholder = "Goles Brasil";
  inputBrasil.dataset.partido = String(i);
  inputBrasil.dataset.equipo = "brasil";
  labelBrasil.appendChild(inputBrasil);

  const labelColombia = document.createElement("label");
  labelColombia.className = "field";
  labelColombia.textContent = `Colombia`;
  const inputColombia = document.createElement("input");
  inputColombia.type = "number";
  inputColombia.min = "0";
  inputColombia.placeholder = "Goles Colombia";
  inputColombia.dataset.partido = String(i);
  inputColombia.dataset.equipo = "colombia";
  labelColombia.appendChild(inputColombia);

  const spanResultado = document.createElement("span");
  spanResultado.className = "resultado";
  spanResultado.dataset.partido = String(i);
  spanResultado.setAttribute("aria-live", "polite");

  wrapper.appendChild(labelBrasil);
  wrapper.appendChild(labelColombia);
  wrapper.appendChild(spanResultado);

  return wrapper;
}

function getResultado(golesBrasil, golesColombia) {
  if (golesColombia > golesBrasil) return { texto: "ganamos", clase: "ganamos" };
  if (golesBrasil > golesColombia) return { texto: "perdimos", clase: "perdimos" };
  return { texto: "casi ganamos", clase: "casi" };
}

function main() {
  const nInput = $("nInput");
  const btnGenerar = $("btnGenerar");
  const btnCalcular = $("btnCalcular");
  const partidosContainer = $("partidos");
  const msg = $("msg");

  function setMsg(text) {
    msg.textContent = text ?? "";
  }

  function clearPartidos() {
    partidosContainer.innerHTML = "";
  }

  btnGenerar.addEventListener("click", () => {
    const n = parseN(nInput.value);
    if (n === null) {
      clearPartidos();
      btnCalcular.classList.add("hidden");
      setMsg("Ingresa un número entero N válido entre 1 y 100.");
      return;
    }

    setMsg(`Listo: ${n} partido(s). Ingresa los goles y presiona Calcular.`);
    clearPartidos();

    for (let i = 1; i <= n; i++) {
      partidosContainer.appendChild(createPartidoRow(i));
    }

    btnCalcular.classList.remove("hidden");
  });

  btnCalcular.addEventListener("click", () => {
    const rows = partidosContainer.querySelectorAll(".partidoRow");
    if (rows.length === 0) {
      setMsg("Primero presiona Generar para crear los partidos.");
      return;
    }

    for (const row of rows) {
      const inputBrasil = row.querySelector('input[data-equipo="brasil"]');
      const inputColombia = row.querySelector('input[data-equipo="colombia"]');
      const spanResultado = row.querySelector(".resultado");

      const golesBrasil = Number(inputBrasil?.value) || 0;
      const golesColombia = Number(inputColombia?.value) || 0;

      const { texto, clase } = getResultado(golesBrasil, golesColombia);

      spanResultado.textContent = texto;
      spanResultado.className = `resultado ${clase}`;
    }

    setMsg("Resultados calculados.");
  });
}

document.addEventListener("DOMContentLoaded", main);
