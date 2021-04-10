function alerta (){
    Swal.fire({
        title: 'NO OLVIDES REZAR ANTES DE ENTRAR A ALGÚN LINK',
        width: 600,
        padding: '3em',
        background: '#fff url(/img/jesus.jpgs)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/img/gato.gif")
          left top
          no-repeat
        `
      })
}