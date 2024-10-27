document.addEventListener('DOMContentLoaded', function () {
  // Get and append header
  const headerElement = document.getElementById('syl-header')
  fetch('./partials/header.html')
    .then((response) => response.text())
    .then((data) => {
      headerElement.innerHTML = data
    })
    .catch((error) => console.error('Error loading header:', error))

  // Get and append footer
  const footerElement = document.getElementById('syl-footer')
  fetch('./partials/footer.html')
    .then((response) => response.text())
    .then((data) => {
      footerElement.innerHTML = data
    })
    .catch((error) => console.error('Error loading footer:', error))

  // Get and append the team
  // const teams = [
  //   {
  //     name: 'Fathia Fairuza',
  //     desc: 'Ritsumeikan APU',
  //     position: 'Founder & President',
  //     level: 'core',
  //     photo: './images/teams/1.png'
  //   }
  // ]

  // const theTeam = document.getElementById('the-teams')
  // fetch('./partials/item-team.html')
  //   .then((response) => response.text())
  //   .then((data) => {
  //     // console.log(data)
  //     // footerElement.innerHTML = data

  //     teams.forEach((team) => {
  //       const card = tempDiv.firstElementChild.cloneNode(true)
  //     })
  //   })
  //   .catch((error) => console.error('Error loading the team:', error))
})

$(document).ready(function () {
  if ($('.partner-slider').length) {
    $('.partner-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      centerPadding: '24px',
      autoplay: true,
      infinite: true,
      variableWidth: true,
      dots: false,
      arrows: false,
      touchMove: true,
      touchThreshold: 100,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      speed: 1000
    })
  }

  // if ($('#tes-teams').length) {
  //   $('#tes-teams').slick({
  //     adaptiveHeight: true
  //   })
  // }

  // // The Teams
  // if ($('#the-teams').length) {
  //   fetch('./utils/teams.json')
  //     .then((response) => response.json())
  //     .then((teams) => {
  //       teams.forEach((team) => {
  //         $('#the-teams').append(`
  //           <div class="col mb-4">
  //             <div class="card rounded-4 h-100 overflow-hidden border-0 shadow-sm">
  //               <img src="${team.photo}" class="card-img-top team__photo" />
  //               <div class="card-body">
  //                 <h3
  //                   class="card-title fw-bold text-dark-blue team__name"
  //                   style="font-size: 30px"
  //                 >${team.name}</h3>
  //                 <p class="card-text mb-4 team__desc">${team.desc}</p>
  //               </div>
  //               <div
  //                 class="card-footer d-flex justify-content-between text-body-secondary py-3"
  //               >
  //                 <div class="team__position">${team.position}</div>
  //                 <div class="team__level">${team.level}</div>
  //               </div>
  //             </div>
  //           </div>
  //         `)
  //       })
  //     })
  //     .catch((error) => console.error('Error fetching teams:', error))
  // }

  // The Teams
  if ($('#the-teams').length) {
    fetch('./utils/teams.json')
      .then((response) => response.json())
      .then((teams) => {
        let slideContent = ''
        teams.forEach((team, index) => {
          slideContent += `
            <div class="col mb-4">
              <div class="card rounded-4 h-100 overflow-hidden border-0 shadow-sm">
                <img src="${team.photo}" class="card-img-top team__photo" />
                <div class="card-body">
                  <h3 class="card-title fw-bold text-dark-blue team__name" style="font-size: 30px">
                    ${team.name}
                  </h3>
                  <p class="card-text mb-4 team__desc">${team.desc}</p>
                </div>
                <div class="card-footer d-flex justify-content-between text-body-secondary py-3">
                  <div class="team__position">${team.position}</div>
                  <div class="team__level">${team.level}</div>
                </div>
              </div>
            </div>
          `

          if ((index + 1) % 12 === 0 || index === teams.length - 1) {
            $('#the-teams').append(
              `<div><div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">${slideContent}</div></div>`
            )
            slideContent = ''
          }
        })

        // if ($('#the-teams').length) {
        //   $('#the-teams').slick({
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     adaptiveHeight: true,
        //     centerMode: false,
        //     centerPadding: '24px',
        //     autoplay: true,
        //     infinite: true,
        //     dots: false,
        //     arrows: false,
        //     touchMove: true,
        //     touchThreshold: 100,
        //     autoplaySpeed: 5000,
        //     pauseOnHover: true,
        //     speed: 1000
        //   })
        // }

        return new Promise((resolve) => {
          $('#the-teams').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            centerMode: false,
            centerPadding: '24px',
            // autoplay: true,
            infinite: true,
            dots: false,
            touchMove: true,
            touchThreshold: 100,
            // autoplaySpeed: 5000,
            pauseOnHover: true,
            speed: 1000
          })

          $('#team-action-slider').append($('.slick-prev, .slick-next'))

          $('.slick-prev')
            .html('<i class="bi bi-arrow-left"></i>')
            .addClass('btn btn-blue-dark px-2 py-1 text-white fw-bold me-1')
          $('.slick-next')
            .html('<i class="bi bi-arrow-right"></i>')
            .addClass('btn btn-blue-dark px-2 py-1 text-white fw-bold')

          resolve()
        })
      })
      .catch((error) => console.error('Error fetching teams:', error))
  }
})
