import React from 'react'

function Footer() {
    return (
        <footer id="footer" class="footer-area">
            <div class="footer-widget">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="footer-logo-support d-md-flex align-items-end justify-content-between">
                                <div class="footer-logo d-flex align-items-end">
                                    <a class="mt-30" href="index.html"><img src="assets/images/logo.svg" alt="Logo" /></a>
                                    <ul class="social mt-30">
                                        <li><a href="/"><i class="lni-facebook-filled"></i></a></li>
                                        <li><a href="/"><i class="lni-twitter-original"></i></a></li>
                                        <li><a href="/"><i class="lni-instagram-original"></i></a></li>
                                        <li><a href="/"><i class="lni-linkedin-original"></i></a></li>
                                    </ul>
                                </div> 
                            </div> 
                        </div>
                    </div> 
                    <div class="row">
                        <div class="col-lg-2 col-md-4 col-sm-6">
                            <div class="footer-link">
                                <h6 class="footer-title">Company</h6>
                                <ul>
                                    <li><a href="/">About</a></li>
                                    <li><a href="/">Contact</a></li>
                                    <li><a href="/">Career</a></li>
                                </ul>
                            </div> 
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="footer-link">
                                <h6 class="footer-title">Product & Services</h6>
                                <ul>
                                    <li><a href="/">Products</a></li>
                                    <li><a href="/">Business</a></li>
                                    <li><a href="/">Developer</a></li>
                                </ul>
                            </div> 
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-5">
                            <div class="footer-link">
                                <h6 class="footer-title">Help & Suuport</h6>
                                <ul>
                                    <li><a href="/">Support Center</a></li>
                                    <li><a href="/">FAQ</a></li>
                                    <li><a href="/">Terms & Conditions</a></li>
                                </ul>
                            </div> 
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-7">
                            <div class="footer-newsletter">
                                <h6 class="footer-title">Subscribe Newsletter</h6>
                                <div class="newsletter">
                                    <form action="/">
                                        <input type="text" placeholder="Your Email" />
                                        <button type="submit"><i class="lni-angle-double-right"></i></button>
                                    </form>
                                </div>
                                <p class="text">Subscribe weekly newsletter to stay upto date. We don’t send spam.</p>
                            </div> 
                        </div>
                    </div> 
                </div> 
            </div> 
            <div class="footer-copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="copyright text-center">
                                <p class="text">Template Crafted by <a rel="nofollow" href="../../index.htm">UIdeck</a> - UI Powered by <a el="nofollow" href="../../index-1.htm">AyroUI</a></p>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div> 
        </footer>
    )
}

export default Footer