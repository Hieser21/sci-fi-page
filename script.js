
      let form = document.getElementById('form')
      
      form.addEventListener('submit', function(event) {
       
        event.preventDefault();
        let search = document.getElementById('text').value;
        let arr = search.split(' ').join('+');
        console.log(arr);
       
        if(search.includes('www.') || search.includes('http://') || search.includes('https://') || search.includes('.com') || search.includes('.net') || search.includes('.dev') || search.includes('.org')){
          window.location.href = 'https://' +  search
        } else {
        window.location.href = 'https://google.com/search?q=' + arr
      }
      })