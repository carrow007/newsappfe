window.onload = function () {

var dropDown     = document.getElementById('dropdown');
var goButton     = document.getElementById('goButton');
var favorite     = document.getElementById('favesButton')
var viewALl      = document.getElementById('view-all');
var deleteFavs   = document.getElementById('delete-favs');
var chosenDropDown = document.getElementById('dropdown');

// var url = 'http://localhost/80';
var url = "https://ancient-dawn-48506.herokuapp.com/";
var articles = [];


    function displayContent(response) {
             // Looping to create the div cards and appending to the DOM
          var newsContent = document.getElementById('newsContainer');

            var articlesArr = response.articles
          for(var i = 0; i < articlesArr.length; i++) {
            console.log(articlesArr.length)

          var newsCards = document.createElement('div')
          newsCards.className = 'newsCardsC'

          var authorText = 'Author:' + articlesArr[i].author;
          var authorDiv = document.createElement('div');
          authorDiv.className = 'authorC';
          authorDiv.appendChild(document.createTextNode(authorText));
          newsCards.appendChild(authorDiv);

          var descriptionText = 'Description:' + articlesArr[i].description;
          var descriptionDiv = document.createElement('div');
          descriptionDiv.className = 'descriptionC';
          descriptionDiv.appendChild(document.createTextNode(descriptionText));
          newsCards.appendChild(descriptionDiv);

          var titleText = 'Title:' + articlesArr[i].title;
          var titleDiv = document.createElement('div');
          titleDiv.className ='titleC';
          titleDiv.appendChild(document.createTextNode(titleText));
          newsCards.appendChild(titleDiv);

          var urlText = 'Link:' + articlesArr[i].url;
          var urlDiv = document.createElement('div');
          urlDiv.className ='urlC';
          urlDiv.appendChild(document.createTextNode(urlText));
          newsCards.appendChild(urlDiv);

          var urlToImageText ='<img class= "picture" src ="' + articlesArr[i].urlToImage + '"/>';
          var urlToImageDiv = document.createElement('div');
          urlToImageDiv.className ='imageC';
          urlToImageDiv.innerHTML = urlToImageText
          newsCards.appendChild(urlToImageDiv);

          var checkBox = document.createElement('input');
          checkBox.type= "checkbox";
          checkBox.className = 'favesChecked';
          checkBox.value = articlesArr[i].url;
          newsCards.appendChild(checkBox)




          newsContent.appendChild(newsCards)
        }
}


//// clicking
  document.getElementById('goButton').addEventListener('click', function () {
    event.preventDefault();


    var chosenRadio    = document.querySelector('.news-radio:checked');
      console.log(chosenRadio)
    var endPointUrl       = "https://newsapi.org/v1/articles"
    var sourceQuery       = "?source=" + chosenDropDown.value;
    var sortQuery         = "&sortBy=" + chosenRadio.value;
       console.log(chosenRadio.value)
    var apiPublicKeyQuery = "&apiKey=" + NEWS_API_KEY;
    var fullQuery         = endPointUrl + sourceQuery + sortQuery + apiPublicKeyQuery;


      if (chosenDropDown.value == 'bbcnews' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
          console.log(fullQuery)


      $.ajax({
        url: fullQuery
          }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);



        });

      } else if (chosenDropDown.value == 'bbcsport' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log("choices")

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);

        })

      } else if (chosenDropDown.value == 'bloomberg' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);

        })

      } else if (chosenDropDown.value == 'buzzfeed' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'cnbc' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'cnn' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'espn' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'googlenews' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'hackernews' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'independent' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'mashable' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'recode' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'redditrall' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'reuters' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'techcrunch' && (chosenRadio.value == 'top' || chosenRadio.value == 'latest' || chosenRadio.value == 'popular')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'theguardianuk' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'thehuffingtonpost' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'thenewyorktimes' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'thenextweb' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'theverge' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'thewallstreetjournal' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'thewashingtonpost' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      }
  });



  $(favorite).on("click", function() {  // this saves the article selection
    event.preventDefault();

    // var data = {
    //   link: faveLink
    // }

    var sourcePicked = {url: document.querySelector(".favesChecked:checked").value};
    console.log(sourcePicked)
      $.post('https://ancient-dawn-48506.herokuapp.com/articles', sourcePicked, function(response) {
    console.log(response);
      }).done(function(data){
        console.log(data);
      });

    })

    // } else if (sourcePicked == "bbcsport") {
    //   $.post('https://ancient-dawn-48506.herokuapp.com/articles',  articles, function(response) {
    // console.log(response);
    //   }).done(function(data) {
    //     console.log(data);
    //   });
    // } else if (sourcePicked == "") {
    //   $.post('https://ancient-dawn-48506.herokuapp.com/articles',  articles, function(response) {
    // console.log(response);
    //   }).done(function(data) {
    //     console.log(data);
    //   });
    //   } else if (sourcePicked == "bloomberg") {
    //   $.post('https://ancient-dawn-48506.herokuapp.com/articles',  articles, function(response) {
    // console.log(response);
    //   }).done(function(data) {
    //     console.log(data);
    //   });
    //   } else if (sourcePicked == "buzzfeed") {
    //   $.post('https://ancient-dawn-48506.herokuapp.com/articles',  articles, function(response) {
    // console.log(response);
    //   }).done(function(data) {
    //     console.log(data);
    //   });
    //   } else if (sourcePicked == "cnbc") {
    //   $.post('https://ancient-dawn-48506.herokuapp.com/articles',  articles, function(response) {
    // console.log(response);
    //   }).done(function(data) {
    //     console.log(data);
    //   });
    //   } else if (sourcePicked == "cnn") {
    //   $.post('https://ancient-dawn-48506.herokuapp.com/articles',  articles, function(response) {
    // console.log(response);
    //   }).done(function(data) {
    //     console.log(data);
    //   });
    //   } else if (sourcePicked == "espn") {
    //   $.post('https://ancient-dawn-48506.herokuapp.com/articles',  articles, function(response) {
    // console.log(response);
    //   }).done(function(data) {
    //     console.log(data);
    //   });
    //   } else if (sourcePicked == "googlenews") {
    //   $.post('https://ancient-dawn-48506.herokuapp.com/articles',  articles, function(response) {
    // console.log(response);
    //   }).done(function(data) {
    //     console.log(data);
    //   });
    //   } else if (sourcePicked == "hackernews") {
    //   $.post('https://ancient-dawn-48506.herokuapp.com/articles',  articles, function(response) {
    // console.log(response);
    //   }).done(function(data) {
    //     console.log(data);
    //   });
    //   } else if (sourcePicked == "independent") {
    //   $.post('https://ancient-dawn-48506.herokuapp.com/articles',  articles, function(response) {
    // console.log(response);
    //   }).done(function(data) {
    //     console.log(data);
    //   });
    //   } else if (sourcePicked == "mashable") {
    //   $.post('https://ancient-dawn-48506.herokuapp.com/articles',  articles, function(response) {
    // console.log(response);
    //   }).done(function(data) {
    //     console.log(data);
    //   });
    //   } else if (sourcePicked == "recode") {
    //   $.post('https://ancient-dawn-48506.herokuapp.com/articles',  articles, function(response) {
    // console.log(response);
    //   }).done(function(data) {
    //     console.log(data);
    //   });
    //   } else if (sourcePicked == "redditrall") {
    //   $.post('https://ancient-dawn-48506.herokuapp.com/articles',  articles, function(response) {
    // console.log(response);
    //   }).done(function(data) {
    //     console.log(data);
    //   });
    //   } else if (sourcePicked == "reuters") {
    //   $.post('https://ancient-dawn-48506.herokuapp.com/articles',  articles, function(response) {
    // console.log(response);
    //   }).done(function(data) {
    //     console.log(data);
    //   });
    //   } else if (sourcePicked == "techcrunch") {
    //   $.post('https://ancient-dawn-48506.herokuapp.com/articles',  articles, function(response) {
    // console.log(response);
    //   }).done(function(data) {
    //     console.log(data);
    //   });
    //   } else if (sourcePicked == "theguardianuk") {
    //   $.post('https://ancient-dawn-48506.herokuapp.com/articles',  articles, function(response) {
    // console.log(response);
    //   }).done(function(data) {
    //     console.log(data);
    //   });
    //   } else if (sourcePicked == "thehuffingtonpost") {
    //   $.post('https://ancient-dawn-48506.herokuapp.com/articles',  articles, function(response) {
    // console.log(response);
    //   }).done(function(data) {
    //     console.log(data);
    //   });
    //   } else if (sourcePicked == "thenewyorktimes") {
    //   $.post('https://ancient-dawn-48506.herokuapp.com/articles',  articles, function(response) {
    // console.log(response);
    //   }).done(function(data) {
    //     console.log(data);
    //   });
    //   } else if (sourcePicked == "thenextweb") {
    //   $.post('https://ancient-dawn-48506.herokuapp.com/articles',  articles, function(response) {
    // console.log(response);
    //   }).done(function(data) {
    //     console.log(data);
    //   });
    //   } else if (sourcePicked == "theverge") {
    //   $.post('https://ancient-dawn-48506.herokuapp.com/articles',  articles, function(response) {
    // console.log(response);
    //   }).done(function(data) {
    //     console.log(data);
    //   });
    //   } else if (sourcePicked == "thewallstreetjournal") {
    //   $.post('https://ancient-dawn-48506.herokuapp.com/articles',  articles, function(response) {
    // console.log(response);
    //   }).done(function(data) {
    //     console.log(data);
    //   });
    //   } else if (sourcePicked == "thewashingtonpost") {
    //   $.post('https://ancient-dawn-48506.herokuapp.com/articles',  articles, function(response) {
    // console.log(response);
    //   }).done(function(data) {
    //     console.log(data);
    //   });
    // };




    // seeing all the favorites
    document.getElementById('viewAll').addEventListener('click', function() {
      event.preventDefault();

     $.ajax({
       url: url + 'articles',
       dataType: 'json'
       }).done(function(response){
      console.log('response', response);

        var favorites = document.getElementById('favorites');

            for (var i = 0; i < response.length; i++) {
              var aTag = document.createElement('a');
              aTag.href = response[i].url;
              var faveText = response[i].url;
              faveDiv.appendChild(aTag)
              var faveDiv = document.createElement('div');
              faveDiv.appendChild(document.createTextNode(faveText));
              favorites.appendChild(faveDiv);

             }
         })
     });

      document.getElementById('deleteBtn').addEventListener('click', function() {
        event.preventDefault();

        var deleteById = document.getElementById('deleteById').value.toLowerCase();
        var articles = {

            };

       $.ajax({
         url: url + 'articles',
         dataType: 'json',
         data: articles,
         method: 'delete'
       }).done(function(response){
         console.log(deleteById + " has been deleted.");
       });
    });
  };
