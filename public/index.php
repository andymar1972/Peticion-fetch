<?php include('_head.php') ?>
<title>Test-Ajax</title>
<meta name="description" content="Test Ajax">
</head>

<body>
  <!-- HEADER -->
  <?php include('_header.php') ?>

  <!-- MAIN -->
  <main class="main">
    <div class="buscador">
      <div class="buscador__container container">
        <p class="buscador__title">Consulta API-Users</p>
        <p class="buscador__text"><a href="https://jsonplaceholder.typicode.com/" target="_blank">JsonPlaceHolder</a></p>
        <form class="buscador__form" action="#">
          <div>
            <input id="buscador" class="buscador__form__input" type="text" placeholder="Buscar">
          </div>
          <ul id="busqueda" class="buscador__form__list">
          </ul>
        </form>
      </div>
    </div>
    <div class="contenido">
      <div class="contenido__container container">
        <button id="btn-data" class="contenido__button button">Consultar Usuarios</button>
        <div id="contenido" class="contenido__grid"></div>
      </div>
    </div>
  </main>
  <!-- FOOTER -->
  <?php include('_footer.php') ?>
</body>

</html>