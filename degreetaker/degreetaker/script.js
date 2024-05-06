
      var navLinks = document.getElementById("navLinks");

      function showMenu() {
        navLinks.style.right = "0";
      }

      function hideMenu() {
        navLinks.style.right = "-200px";
      }
    
      // navbar visibility function
      document.addEventListener('DOMContentLoaded', function() {
        const header = document.getElementById('main-header');
        const heroSection = document.querySelector('.hero');
        const heroSectionHeight = heroSection.offsetHeight;
      
        let prevScrollpos = window.pageYOffset;
      
        function toggleNavbar() {
          const currentScrollPos = window.pageYOffset;
          const isScrollingDown = currentScrollPos > prevScrollpos;
      
          if (currentScrollPos < heroSectionHeight) {
            header.style.backgroundColor = 'transparent';
          } else {
            if (isScrollingDown) {
              header.style.top = `-${header.offsetHeight}px`;
            } else {
              header.style.top = '0';
              header.style.backgroundColor = 'white';
            }
          }
      
          prevScrollpos = currentScrollPos;
        }
      
        toggleNavbar(); // Initial check on page load
      
        window.addEventListener('scroll', toggleNavbar);
      });
      
      
     // show more button

     function showMoreCourses() {
        // Select all elements with the class 'course-hidden'
        var hiddenCourses = document.querySelectorAll('.course-hidden');
        
        // Loop through each hidden course and toggle its display style
        hiddenCourses.forEach(function(course) {
            course.style.display = course.style.display === 'none' ? 'block' : 'none';
        });
    
        // Get the button element
        var btn = document.getElementById('showMoreBtn');
    
        // Update button text based on the current state of hidden courses
        btn.textContent = hiddenCourses[0].style.display === 'none' ? 'Show More Courses' : 'Hide Courses';
    }

    // JavaScript for redirection
document.addEventListener('DOMContentLoaded', function() {
  // Select the course boxes using their IDs
  var agriculture = document.getElementById('agriculture');
  var architecture = document.getElementById('architecture');
 var asian = document.getElementById('asian');
 var criminology = document.getElementById('criminology');
 var engineering = document.getElementById('engineering');
 var forestry = document.getElementById('forestry');
 var homeeco = document.getElementById('homeeco');
 var law = document.getElementById('law');
 var cla = document.getElementById('cla');
 var nursing = document.getElementById('nursing');
 var publicad = document.getElementById('publicad');
 var sports = document.getElementById('sports');
 var science = document.getElementById('science');
 var social = document.getElementById('social');
 var teacher = document.getElementById('teacher');
 var cs = document.getElementById('cs');
  
  // Add event listeners to each course box
  agriculture.addEventListener('click', function() {
    window.location.href = 'agri.html'; // Redirect to the desired page
  });

  architecture.addEventListener('click', function() {
    window.location.href = 'architecture.html'; // Redirect to the desired page
  });

 asian.addEventListener('click', function() {
    window.location.href = 'asian.html'; // Redirect to the desired page
  });

  criminology.addEventListener('click', function() {
    window.location.href = 'crim.html'; // Redirect to the desired page
  });

  engineering.addEventListener('click', function() {
    window.location.href = 'eng.html'; // Redirect to the desired page
  });

  forestry.addEventListener('click', function() {
    window.location.href = 'forestry.html '; // Redirect to the desired page
  });

  homeeco.addEventListener('click', function() {
    window.location.href = 'homeeco.html'; // Redirect to the desired page
  });

  law.addEventListener('click', function() {
    window.location.href = 'law.html'; // Redirect to the desired page
  });

  cla.addEventListener('click', function() {
    window.location.href = 'cla.html'; // Redirect to the desired page
  });

  nursing.addEventListener('click', function() {
    window.location.href = 'nursing.html'; // Redirect to the desired page
  });

  publicad.addEventListener('click', function() {
    window.location.href = 'pub.html'; // Redirect to the desired page
  });

  sports.addEventListener('click', function() {
    window.location.href = 'sports.html'; // Redirect to the desired page
  });

  science.addEventListener('click', function() {
    window.location.href = 'science.html'; // Redirect to the desired page
  });

 social.addEventListener('click', function() {
    window.location.href = 'social.html'; // Redirect to the desired page
  });

  teacher.addEventListener('click', function() {
    window.location.href = 'teacher.html'; // Redirect to the desired page
  });

  cs.addEventListener('click', function() {
    window.location.href = 'cs.html'; // Redirect to the desired page
  });

  
});






    