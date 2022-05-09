import '../styles/Contact.css'

export default function Contact(){
     return(<div id="contact" className="contact"> <div class="contact-section-header">
     <h2>Let's work together...</h2>
     <p>How do you take your coffee?</p>
 </div>
 <div class="contact-links">
     <a href="https://www.facebook.com/goletz.lukasz" target="_blank" rel="noreferrer" class="btn contact-details"><i
             class="fab fa-facebook-square"></i>  Facebook</a>
     <a id="profile-link" href="https://github.com/Cookash" target="_blank" rel="noreferrer" class="btn contact-details"><i
             class="fab fa-github"></i>  GitHub</a>
     <a href="https://www.linkedin.com/in/lukaszgoletz/" target="_blank" rel="noreferrer" class="btn contact-details"><i
             class="fab fa-linkedin"></i>  LinkedIn</a>
     <a href="mailto:goletzlukasz@gmail.com" class="btn contact-details"><i class="fas fa-at"></i>  Send a mail</a>
     <a href="tel:555-555-5555" class="btn contact-details"><i class="fas fa-mobile-alt"></i>  Call me</a>
 </div></div>)
}