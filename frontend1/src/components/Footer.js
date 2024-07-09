import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
    return (
        <div>
            <footer class="bg-secondary p-3  d-flex flex-wrap">
               <div >
               <ul className="social-icons">
                    <li><a href="https://www.instagram.com/youraccount"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/youraccount"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://twitter.com/youraccount"><i className="fab fa-twitter"></i></a></li>
                </ul>
               </div>
              <div >
              <ul className="social-icons">
                    <li><a href="https://www.instagram.com/youraccount"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/youraccount"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://twitter.com/youraccount"><i className="fab fa-twitter"></i></a></li>
                </ul>
              </div>

            </footer>
        </div>
    );
}

export default Footer;
