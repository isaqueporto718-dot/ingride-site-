function abrirWhatsapp() {
    const telefone = "77999904342"; // número da Ingrid
    const msg = "Olá! Gostaria de agendar um horário 😊";
    window.open(`https://wa.me/${telefone}?text=${encodeURIComponent(msg)}`);
}
