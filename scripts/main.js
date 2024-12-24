window.addEventListener("DOMContentLoaded", () => {
        loadPageContent();
    }
);

let loadPageContainer = document.querySelector('.pageContent');
function loadPageContent() {
    loadPageContainer.innerHTML = `
        <div class="container my-2">
            <h1 class="text-center py-3 text-primary">New Release</h1>
            <h3 class="text-center py-3 text-white">Version 1.0.1</h3>
            <h4 class="text-center py-3 text-white">Release Date: 2024-12-21</h4>
            <h1 class="text-center py-3 text-danger">Useful AI Tool Collection</h1>
            <p class="text-center p-4 "><a href="./extend.html" class="bg-white p-4 rounded-3 text-dark text-decoration-none ">Visit AI Tool Collection</a></p>
        </div>
        <h1 class="text-center py-3 h1 text-primary ">Front-End Development</h1>
        <hr/>
        <div class="row d-flex justify-content-center align-items-center gap-3" >
            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column text-white">
                    <div class="d-flex justify-content-center align-items-center flex-column py-2">
                        <h3 class="text-center" >Public API's</h3>
                        <p><a rel="noopener" href="https://github.com/public-apis/public-apis" target="_blank">Public API's git hub repository</a></p>
                    </div>
                    
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <h3 class="text-center" target="_blank">JavaScript Service Provide  Library</h3>
                        <p><a rel="noopener" href="https://www.emailjs.com/" target="_blank">emailJs</a></p>
                        <p><a rel="noopener" href="https://cdnjs.com/libraries/animejs" target="_blank">AnimeJs</a></p>
                        <p><a rel="noopener" href="https://davidshimjs.github.io/qrcodejs/" target="_blank">qrcode.js</a></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column text-white">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <h3 class="text-center">Color Generator</h3>
                        <p><a rel="noopener" href="https://maketintsandshades.com" target="_blank">Tint and Shade Generator</a></p>
                        <p><a rel="noopener" href="https://uicolors.app/create" target="_blank">Tailwind CSS Color Generator</a></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column text-white">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <h3>Icons Resources I</h3>
                        <p><a rel="noopener" href="https://lucide.dev/icons/" target="_blank">Lucide Icons</a></p>
                        <p><a rel="noopener" href="https://heroicons.com/" target="_blank">Heroicons</a></p>
                        <p><a rel="noopener" href="https://akveo.github.io/eva-icons/" target="_blank">Eva Icons</a></p>
                        <p><a rel="noopener" href="https://tabler.io/icons" target="_blank">Tabler Icons</a></p>
                        <p><a href="https://iconsax.io/" >iconsax icons library</a></p>
                        <!-- <p><a rel="noopener" href="" target="_blank"></a></p> -->
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column text-white">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <h3 class="text-white">Icons Resources II</h3>
                        <p><a href="https://feathericons.com/">Simply beautiful open source icons</a></p>
                        <p><a href="https://lordicon.com/">Lordicon is a growing library</a></p>
                        <h3>atlas icons</h3>
                        <p><a href="https://github.com/Vectopus/Atlas-icons-font">View in Github</a></p>
                        <p><a rel="noopener" href="https://atlasicons.vectopus.com/">View in Web Site</a></p> <br/>
                        <p><a href="https://thenounproject.com/">Noun-Project Icons and Photos For Everything</a></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column text-white">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <h3 class="text-white">Images Resources I</h3>
                        <p ><a  href="https://www.stickpng.com" target="_blank"> Free Transparent PNG Images, Stickers & No Background Clipart - StickPNG
                        </a></p>
                        <p><a href="https://www.unsplash.com" target="_blank">Unsplash Web-The internet's source for visuals.
                        Powered by creators everywhere.</a></p>
                        <p><a href="https://www.pexels.com/" target="_blank">The best free stock photos, royalty free images & videos shared by creators.</a></p>
                        <p><a href="https://www.kaboompics.com/" target="_blank">Let's find the perfect
                            free photo for you</a></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column text-white">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <h3 class="text-white">Images Resources II</h3>
                        <p><a href="https://www.pixabay.com/" target="_blank">Stunning royalty-free images & royalty-free stock
                            Over 5.1 million+ high quality stock images, videos and music shared by our talented community.</a></p>
                        
                        <p><a href="https://www.freepik.com/" target="_blank">High-quality photos, videos, vectors, PSD, AI images, icons... to go from ideas to outstanding designs</a></p>
                        <p><a href="https://www.burst.shopify.com/" target="_blank">Free stock photos and royalty-free images
                            Download stunning photos for websites and commercial use</a></p>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column text-white">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <h3 class="text-white">Images Resources III</h3>
                        <p><a href="https://www.stockvault.net/" target="_blank">FREE STOCK IMAGES
                            NEW PHOTOS, TEXTURES & ILLUSTRATIONS ADDED EVERY DAY!</a></p>
                        <p><a href="https://www.freeimages.com/icon
                            " target="_blank">Free Icons & Icon Packs | SVG, PNG, ICO, ICNS | FreeImages </a></p>
                            <p><a href="https://www.pixabay.com/" target="_blank">Stunning royalty-free images & royalty-free stock
                                Over 5.1 million+ high quality stock images, videos and music shared by our talented community.</a></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column text-white">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <h3 class="text-white">Images Resources IV</h3>
                        <p><a href="https://www.cleanpng.com
                            " target="_blank">CleanPNG - HD png images and illustrations. Free unlimited download. - CleanPNG / KissPNG </a></p>
                            <p><a href="https://app.haikei.app
                            " target="_blank">Haikei </a></p>
                            <p><a href="https://bgjar.com/#google_vignette
                            " target="_blank">BGJar | Free svg background image generator for your websites
                            </a></p>
                            <p><a href="https://meshgradient.in
                            " target="_blank">Generate Mesh Gradients | Customize & Free Export PNG
                            </a></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column ">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <h3 class="text-white">Images Resources V</h3>
                        <p><a href="https://coolbackgrounds.io" target="_blank">Cool Backgrounds </a></p>
    
                        <p><a href="https://meshgradient.in
                        " target="_blank">Generate Mesh Gradients | Customize & Free Export PNG
                        </a></p>
                        <p><a href="https://icons8.com
                        " target="_blank">Free Icons, Clipart Illustrations, Photos, and Music
                        </a></p>
                        <p><a href="https://shapes.framer.website/" target="_blank">Shapes SVG File Resources</a></p>
                        <p><a href="https://openart.ai/home" target="_blank">Openart.ai - AI image generator for free</a></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column text-white">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <h3 style="text-align:center;">Illustrations</h3>
                        <p><a href="https://illustrationkit.com/illustrations/
                        " target="_blank">Yippy Illustrations | Illustration Kit </a></p>
                        <p><a href="https://www.opendoodles.com/">A Free Set of Open-Source Illustrations! </a></p>
                        <p><a href="https://www.humaaans.com/">Mix-&-match illustrations of people with a design library</a></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column text-white">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <h3 style="text-align:center;">3D Packs</h3>
                    <p><a href="https://ui8.net/">Join a growing family of 842,231 designers and makers from around the world. </a></p>
                    <p><a href="https://gumroad.com/3d/animating">gumroad.com </a></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column text-white">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <h3 style="text-align:center">CSS Properties Resources</h3>
                        <p><a href="https://animate.style
                        " target="_blank">Animate.css | A cross-browser library of CSS animations.
                        </a></p>
                        <p><a href="https://animate.style">animate.css framework</p>
                        <p><a href="https://bennettfeely.com/clippy/
                        " target="_blank">Clippy — CSS clip-path maker</a></p>
                        <p><a href="https://iconscout.com/lottie-animations/
                        " target="_blank">Hover Animations - Free Download in Lottie JSON, GIF, MP4 | IconScout
                        </a></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column text-white">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <h3 style="text-align:center;">Inspirations</h3>
                        <p><a href="https://www.mobbin.com/">Featuring over 300,000 screens and 1,000 iOS, Android & Web apps — New content weekly. </a></p>
                        <p><a href="https://www.behance.net/"> Behance</a></p>
                        <p><a href="https://www.awwwards.com/">FUNKHAUS STUDIO </a></p>
                        <p><a href="https://www.pinterest.com/">Pinterest.com </a></p>
                        <p><a href="https://www.uplabs.com/">UpLabs.com </a></p>
                        <p><a href="https://www.dribbble.com/">Get inspired by the work of millions of top-rated designers & agencies around the world. </a></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column text-white">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <h3 style="text-align:center;">Colors</h3>
                        <p><a href="https://coolors.co/bd5d1a">Get useful color information like conversion, combinations, blindness simulation and more. </a></p>
                        <p><a href="https://www.khroma.co/">Khroma uses AI to learn which colors you like and creates limitless palettes for you to discover, search, and save. </a></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column text-white">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <h3 style="text-align:center">Content Generators</h3>
                        <p><a href="https://picsart.com/ai-content-generator/
                        " target="_blank">Free AI Content Generator - Generate AI Content | Picsart
                        </a></p>
                        <p><a href="https://www.lipsum.com
                        " target="_blank">Lorem Ipsum - All the facts - Lipsum generator
                        </a></p>
                        <p><a href="https://inkpx.com/word-art-generator
                        " target="_blank">Word Art Text Graphic Generator · InkPx
                        </a></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column text-white">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <h3 style="text-align:center">Useful Github Repositories</h3>
                        <p>
                            <a href="https://github.com/EbookFoundation/free-programming-books" target="_blank">Free Programming Books
                            </a>
                        </p>
                        <span>
                            It provides a huge selection of publicly accessible programming books,podcasts, adn even various types of online courses.
                        </span>
                        <p>
                            <a href="https://github.com/LeCoupa/awesome-cheatsheets" target="_blank">Awesome Cheatsheets
                            </a>
                            
                        </p>
                        <span>
                            For well-known programming languages, frameworks and development tools, this repository contains  amazing cheatsheets.
                        </span>
                        <p>
                            <a href="https://github.com/kamranahmedse/developer-roadmap" target="_blank">Developer Roadmaps
                            </a>
                            
                        </p>
                        <span>
                            You can choose from a variety of developer roadmaps in thes repository to study and technology you choose.
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column">
                    <div class="d-flex justify-content-center align-items-center flex-column text-white">
                        <h4>Continue..</h4>
                        <p>
                            <a href="https://github.com/thedaviddias/Front-End-Checklist" target="_blank">Front-End-Checklist
                            </a>
                            
                        </p>
                        <span>
                            A comprehensive list of essential elements to ensure a smooth launch and production of our website or HTML page.
                        </span>
                        <p>
                            <a href="https://github.com/practical-tutorials/project-based-learning" target="_blank">Project Based Learning
                            </a>
                            
                        </p>
                        <span>
                            This repository contains a collection of links to various online projects that can help you advance your programming knowledge in many fields.
                        </span>
                        <p>
                            <a href="https://github.com/TheAlgorithms" target="_blank">The Algorithms
                            </a>
                            
                        </p>
                        <span>
                            It is one of the best github repositories for learning data structures and algorithms using different languages.
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column">
                    <div class="d-flex justify-content-center align-items-center flex-column text-white">
                        <h3 class="text-center">Other Resources</h3>
                        <p><a href="https://rahuldkjain.github.io/gh-profile-readme-generator/
                        " target="_blank">GitHub Profile Readme Generator | GitHub Profile Readme Generator
                        </a></p>
    
                        <p><a href="https://github.com/durgeshsamariya/awesome-github-profile-readme-templates" target="_blank">GitHub Profile readme file template collection</a></p>
                    </div>
                </div>
            </div>
        </div>
    `
}