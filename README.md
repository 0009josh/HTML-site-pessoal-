<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Consórcio Rodobens</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1>Consórcio Rodobens</h1>
    <h2>Bernardo Júnior - Representante Autorizado</h2>
    <nav>
      <a href="#sobre">Sobre</a>
      <a href="#planos">Planos</a>
      <a href="#contato">Peça uma Simulação</a>
    </nav>
  </header>

  <main>
    <section id="sobre" class="section">
      <h2>Por que escolher o Consórcio RodoBens?</h2>
      <p>
        Oferecemos as melhores oportunidades para você conquistar seu veículo ou imóvel
        com parcelas que cabem no seu bolso. Sem juros e com total transparência, 
        realize com liberdade, economia e todo o suporte de quem tem 75 anos de mercado.
      </p>
    </section>

    <section id="planos" class="section">
      <h2>Nossos Diferenciais</h2>
      <div class="cards">
        <div class="card">
          <h3>Faturamento de Veiculos</h3>
          <p>Clientes com 30% da cota paga estão dispensados da comprovação de renda.</p>
        </div>
        <div class="card">
          <h3>Consórcio de Imóveis</h3>
          <p>Realize o sonho da casa própria sem pagar juros.</p>
        </div>
        <div class="card">
          <h3>Cartas para caminhões de até R$ 1.2M</h3>
          <p>Para grandes investimentos no setor de transporte, com a menor taxa de admnistração do mercado.</p>
          <div class="card">
          <h3>Aquisição e Construção no Próprio Terreno</h3>
          <p>Flexibilidade para adquirir e construir sem necessidade de garantia adicional.</p>
          <div class="card">
          <h3>Parcelamento do Lance em 4x sem juros</h3>
          <p>Facilita o pagamento do lance,o tornando mais acessivel.</p>
          <div class="card">
          <h3>Grupos com Vagas Limitadas</h3>
          <p>Menor número de cotas por grupo, aumentando as chances de comtemplação por sorteio.</p>
          <div class="card">
          <h3>Planos Pontuais para Veiculos Leves e Pesados</h3>
          <p>Previsibilidade na Liberação de crédito.</p>
      </div>
    </section>

    <section id="contato" class="section contato">
      <h2>Fale Conosco</h2>
      <p>Preencha seus dados e entraremos em contato com a melhor proposta para você:</p>

      <!-- Formulário de captação de leads -->
      <form id="form-lead" action="https://formspree.io/f/xjkpoqak" method="POST">
        <label>Nome:</label>
        <input type="text" name="nome" required placeholder="Digite seu nome" /> <br>

        <label>Telefone:</label>
        <input type="tel" name="telefone" required placeholder="(DDD) 90000-0000" /> <br>

        <label>E-mail:</label>
        <input type="email" name="email" required placeholder="exemplo@email.com" />

        <button type="submit">Quero ser Contatado</button>
      </form>

      <p id="mensagem-sucesso" class="hidden"> Entraremos em contato o mais rápido possivel.</p>
    </section>
  </main>

  <footer>
    <p>&copy; Bernardo Júnior<br>jbernardo.jr@gmail.com.<br>Representante Autorizado</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>

<img src="Imagem\foto jr.jpg.jpg" alt="Minha foto" class="minha-foto">
