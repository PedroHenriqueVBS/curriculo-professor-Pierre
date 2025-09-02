// FUncionalidade de Modal
document.addEventListener('DOMContentLoaded', function() {
    const imagensProjetos = document.querySelectorAll('#projetos img');

    imagensProjetos.forEach(imagem => {
        imagem.addEventListener('click', function() {
            // Fundo do modal
            const fundoModal = document.createElement('div');
            fundoModal.className = 'modal-img-bg';
            fundoModal.style.opacity = '0';
            setTimeout(() => fundoModal.style.opacity = '1', 10);

            // Imagem dentro do modal
            const imagemModal = document.createElement('img');
            imagemModal.className = 'modal-content-img';
            imagemModal.src = this.src;
            imagemModal.alt = this.alt;

            // Botão de fechar modal
            const botaoFechar = document.createElement('span');
            botaoFechar.className = 'modal-close';
            botaoFechar.innerHTML = '&times;';
            botaoFechar.addEventListener('click', fecharModal);

            // Adicionar elementos no DOM
            fundoModal.appendChild(imagemModal);
            fundoModal.appendChild(botaoFechar);
            document.body.appendChild(fundoModal);

            // Fechar modal ao clicar no fundo
            fundoModal.addEventListener('click', function(evento) {
                if (evento.target === fundoModal) {
                    fecharModal();
                }
            });

            // Fechar modal ao pressionar ESC
            document.addEventListener('keydown', function(evento) {
                if (evento.key === 'Escape') {
                    fecharModal();
                }
            });

            function fecharModal() {
                fundoModal.style.opacity = '0';
                setTimeout(() => {
                    if (document.body.contains(fundoModal)) {
                        document.body.removeChild(fundoModal);
                    }
                }, 200);
            }
        });
    });
    // Botão Voltar ao Topo
    (function iniciarVoltarTopo(){
        if(document.getElementById('backToTop')) return; // evita duplicar
        const botaoVoltarTopo = document.createElement('button');
        botaoVoltarTopo.id = 'backToTop';
        botaoVoltarTopo.type = 'button';
        botaoVoltarTopo.setAttribute('aria-label','Voltar ao topo');
        botaoVoltarTopo.innerHTML = '↑';
        document.body.appendChild(botaoVoltarTopo);

        const exibirEm = 320; // px de scroll para aparecer
        let atualizando = false;

        function aoRolar(){
            if(!atualizando){
                window.requestAnimationFrame(()=>{
                    const scrollAtual = window.scrollY || document.documentElement.scrollTop;
                    if(scrollAtual > exibirEm) botaoVoltarTopo.classList.add('show'); else botaoVoltarTopo.classList.remove('show');
                    atualizando = false;
                });
                atualizando = true;
            }
        }
        window.addEventListener('scroll', aoRolar, {passive:true});
        aoRolar();

        botaoVoltarTopo.addEventListener('click', ()=>{
            // Rolagem suave manual para melhor compatibilidade
            const inicio = window.scrollY || document.documentElement.scrollTop;
            const duracao = 560;
            const tempoInicio = performance.now();
            function desaceleracaoCubica(t){ return 1 - Math.pow(1 - t, 3); }
            function quadro(agora){
                const decorrido = agora - tempoInicio;
                const progresso = Math.min(1, decorrido / duracao);
                const suavizado = desaceleracaoCubica(progresso);
                window.scrollTo(0, inicio * (1 - suavizado));
                if(progresso < 1) requestAnimationFrame(quadro);
            }
            requestAnimationFrame(quadro);
        });

        // Acessibilidade: atalho Alt+SetaCima
        document.addEventListener('keydown', (evento)=>{
            if(evento.altKey && evento.key === 'ArrowUp'){
                botaoVoltarTopo.click();
            }
        });
    })();
});
