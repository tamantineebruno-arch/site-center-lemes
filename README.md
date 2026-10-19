# Site Center Lemes

Site institucional da **Center Lemes** — oficina de veículos pesados em Votorantim/SP.
Publicado via GitHub Pages: https://tamantineebruno-arch.github.io/site-center-lemes/

## Estrutura

```
index.html          página única (todas as seções)
assets/site.css     estilos (tokens, layout, responsivo)
assets/site.js      abas de serviço, menu, galeria, formulário → WhatsApp
assets/media/       imagens em WebP otimizado + vídeos
```

## Decisões técnicas

- **Sem framework e sem build**: HTML/CSS/JS puro, carrega direto no Pages.
- **Imagens em WebP** com largura máxima de 1400 px (13 imagens ≈ 1 MB no total).
- **Formulário sem backend**: monta a mensagem e abre o WhatsApp — nenhum dado fica armazenado.
- **Acessibilidade**: skip link, foco visível, abas com navegação por teclado, `prefers-reduced-motion`, alt texts descritivos.
- **SEO**: meta description, Open Graph, `canonical` e JSON-LD `AutoRepair` com endereço, horário e nota.

## Regras de conteúdo

- Nunca usar o nome pessoal do responsável — sempre "Center Lemes" e "a gente/nós".
- Dados de contato, endereço e horário conferidos em 19/10/2026.

## Pendências

- Substituir os clipes laterais da seção de vídeo pelos clipes definitivos (hoje repetem o clipe do pátio).
- Confirmar com o cliente a marca "desde 2011" (usada apenas como etiqueta visual).
