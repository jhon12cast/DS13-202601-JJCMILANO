const $ = (id) => document.getElementById(id);

function parseN(value) {
  const n = Number(value);
  if (!Number.isInteger(n)) return null;
  if (n < 1 || n > 50) return null;
  return n;
}

function getNotaMedia(a, b, c) {
  const arr = [a, b, c].sort((x, y) => x - y);
  return arr[1];
}

function createEstudianteRow(i) {
  const wrapper = document.createElement("div");
  wrapper.className = "estudianteRow";

  const label1 = document.createElement("label");
  label1.className = "field";
  label1.textContent = `Estudiante #${i} - Nota 1`;
  const input1 = document.createElement("input");
  input1.type = "number";
  input1.min = "0";
  input1.max = "100";
  input1.placeholder = "0-100";
  input1.dataset.estudiante = String(i);
  input1.dataset.nota = "1";
  label1.appendChild(input1);

  const label2 = document.createElement("label");
  label2.className = "field";
  label2.textContent = `Nota 2`;
  const input2 = document.createElement("input");
  input2.type = "number";
  input2.min = "0";
  input2.max = "100";
  input2.placeholder = "0-100";
  input2.dataset.estudiante = String(i);
  input2.dataset.nota = "2";
  label2.appendChild(input2);

  const label3 = document.createElement("label");
  label3.className = "field";
  label3.textContent = `Nota 3`;
  const input3 = document.createElement("input");
  input3.type = "number";
  input3.min = "0";
  input3.max = "100";
  input3.placeholder = "0-100";
  input3.dataset.estudiante = String(i);
  input3.dataset.nota = "3";
  label3.appendChild(input3);

  const spanNotaMedia = document.createElement("span");
  spanNotaMedia.className = "notaMedia";
  spanNotaMedia.dataset.estudiante = String(i);
  spanNotaMedia.setAttribute("aria-live", "polite");

  wrapper.appendChild(label1);
  wrapper.appendChild(label2);
  wrapper.appendChild(label3);
  wrapper.appendChild(spanNotaMedia);

  return wrapper;
}

function main() {
  const nInput = $("nInput");
  const btnEvaluar = $("btnEvaluar");
  const btnCalcular = $("btnCalcular");
  const estudiantesContainer = $("estudiantes");
  const msg = $("msg");

  function setMsg(text) {
    msg.textContent = text ?? "";
  }

  function clearEstudiantes() {
    estudiantesContainer.innerHTML = "";
  }

  btnEvaluar.addEventListener("click", () => {
    const n = parseN(nInput.value);
    if (n === null) {
      clearEstudiantes();
      btnCalcular.classList.add("hidden");
      setMsg("Ingresa un número entero N válido entre 1 y 50.");
      return;
    }

    setMsg(`Listo: ${n} estudiante(s). Ingresa las 3 notas por estudiante y presiona Calcular.`);
    clearEstudiantes();

    for (let i = 1; i <= n; i++) {
      estudiantesContainer.appendChild(createEstudianteRow(i));
    }

    btnCalcular.classList.remove("hidden");
  });

  btnCalcular.addEventListener("click", () => {
    const rows = estudiantesContainer.querySelectorAll(".estudianteRow");
    if (rows.length === 0) {
      setMsg("Primero presiona Evaluar para crear los campos de notas.");
      return;
    }

    for (const row of rows) {
      const inputs = row.querySelectorAll('input[data-nota]');
      const spanNotaMedia = row.querySelector(".notaMedia");

      const n1 = Number(inputs[0]?.value) ?? 0;
      const n2 = Number(inputs[1]?.value) ?? 0;
      const n3 = Number(inputs[2]?.value) ?? 0;

      const notaMedia = getNotaMedia(n1, n2, n3);

      spanNotaMedia.textContent = notaMedia;
    }

    setMsg("Notas medias calculadas.");
  });
}

document.addEventListener("DOMContentLoaded", main);
