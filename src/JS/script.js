function mostrarData(mostrar) {
    const div = document.getElementById("data-parada");
    div.style.display = mostrar ? "block" : "none";
  }
  
  document.querySelectorAll("input[name='gerou-parada']").forEach(radio => {
    radio.addEventListener("change", function () {
      mostrarData(this.value === "Sim");
    });
  });
  
  function exportarCSV() {
    const valores = {
      cia: document.getElementById("cia").value,
      setor: document.getElementById("setor").value,
      tag: document.getElementById("tag").value,
      report: document.getElementById("report").value,
      data: document.getElementById("data").value,
      local: document.getElementById("local").value,
      gerouParada: document.querySelector("input[name='gerou-parada']:checked")?.value || "",
      dataParada: document.getElementById("dataParada").value,
      especialidade: document.getElementById("especialidade").value
    };
  
    const cabecalho = Object.keys(valores).join(";");
    const dados = Object.values(valores).join(";");
  
    const csv = cabecalho + "\n" + dados;
  
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "formulario.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  