window.addEventListener("DOMContentLoaded", () => {
    renderAIToolsContent();
});

let aiToolsContainer = document.querySelector('.aitoolscontainer');
function renderAIToolsContent() {
    aiToolsContainer.innerHTML = `
        <div class="row d-flex justify-content-between align-items-center py-1">
            <div>
                <h1 class="text-white text-center py-4">AI Tools Collection</h1>
            </div>
            <div class="d-flex justify-content-end">
                <a href="./index.html" class="btn btn-lg px-5 btn-warning">Back</a>
            </div>
        </div>
        <div class="row d-flex justify-content-center align-items-center gap-3 mt-5 p-4" >
            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column text-white">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <h3 class="text-center">Research</h3>
                        <p><a rel="noopener" href="https://openai.com/index/chatgpt/" target="_blank">Open AI Chat GPT</a></p>
                        <p><a rel="noopener" href="https://about.you.com/youchat/" target="_blank">YouChat Research PlatForm</a></p>
                        <p><a rel="noopener" href="https://www.kognitos.com/business-process-automation/" target="_blank">Transform Your Business Process Automation with Kognitos</a></p>
                        <p><a rel="noopener" href="https://www.perplexity.ai/" target="_blank">Perplexity AI</a></p>
                        <p><a rel="noopener" href="https://www.copilotai.com/" target="_blank">Copilotai AI</a></p>
                        <p><a rel="noopener" href="https://gemini.google.com/" target="_blank">Google Gemini</a></p>
                    </div>
                </div>
            </div>
        
        
            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column text-white">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <h3 class="text-center">Generate Images</h3>
                        <p><a rel="noopener" href="https://www.fotor.com/images/create" target="_blank">Fotor AI Image Generator</a></p>
                        <p><a rel="noopener" href="https://stability.ai/" target="_blank">Stability AI</a></p>
                        <p><a rel="noopener" href="https://www.midjourney.com/home" target="_blank">Midjourney AI</a></p>
                        <p><a rel="noopener" href="https://designer.microsoft.com/" target="_blank">Microsoft Designer</a></p>
                        
                    </div>
                </div>
            </div>
        
        
            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column text-white">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <h3 class="text-center">CopyWriting</h3>
                        <p><a rel="noopener" href="https://rytr.me/" target="_blank">Rytr AI</a></p>
                        <p><a rel="noopener" href="https://www.copy.ai/" target="_blank">Copy.ai</a></p>
                        <p><a rel="noopener" href="https://writesonic.com/" target="_blank">Writesonic AI(for Business Environment)</a></p>
                        <p><a rel="noopener" href="https://www.plai.io/" target="_blank">plai.io(whitelabel facebook and good ad tool)</a></p>
                        
                    </div>
                </div>
            </div>
        
        
            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column text-white">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <h3 class="text-center">Writing</h3>
                        <p><a rel="noopener" href="https://writer.com/" target="_blank">Writer.com</a></p>
                        <p><a rel="noopener" href="https://writer.hix.ai/" target="_blank">HIX Writer(Free AI Writer & AI Writing Assistant | HIX Writer)</a></p>
                        <p><a rel="noopener" href="https://jenni.ai/" target="_blank">The AI-powered workspace to help you read, write, and organize research with ease.</a></p>
                        <p><a rel="noopener" href="https://blaze.today/" target="_blank">Easy-to-use templates with endless customizability and powerful automation.</a></p>
                        <p><a rel="noopener" href="https://quillbot.com/" target="_blank">We use AI to strengthen writing and boost productivity—without sacrificing authenticity.</a></p>
                    </div>
                </div>
            </div>
    
        
            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column text-white">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <h3 class="text-center">WebSites</h3>
                        <p><a rel="noopener" href="https://10web.io/" target="_blank">Create a website using AI Website Builder, host it on 10Web Hosting, and optimize it with PageSpeed Booster.</a></p>
                        <p><a rel="noopener" href="https://durable.co/" target="_blank">Get your business online in 30 seconds with the #1 AI website builder and marketing platform.</a></p>
                        <p><a rel="noopener" href="https://www.framer.com/?via=architect99&gad_source=1" target="_blank">Design and publish modern sites at any scale with Framer's web builder.</a></p>
                        <p><a rel="noopener" href="https://usestyle.ai/" target="_blank">Usestyle AI</a></p>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-3 col-md-5 main-contents" data-aos="fade-zoomIn" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div class="d-flex flex-column text-white">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <h3 class="text-center">Video Editing</h3>
                        <p><a rel="noopener" href="https://klap.app/" target="_blank">Create TikToks, Reels, Shorts from your long videos in just one click.</a></p>
                        <p><a rel="noopener" href="https://opus.ai/" target="_blank">Opus AI with Generate Video</a></p>
                        <p><a rel="noopener" href="https://eightify.app/" target="_blank">Eightify App</a></p>
                        <p><a rel="noopener" href="https://invideo.io/perf/ga-ai-video-generator-web/" target="_blank">Transform your imagination into eye-catching videos. </a></p>
                        <p><a rel="noopener" href="https://www.heygen.com/" target="_blank">Create and translate videos with HeyGen's AI Video Generator</a></p>
                        <p><a rel="noopener" href="https://runwayml.com/" target="_blank">A new frontier for fast, high-fidelity, controllable video generation.</a></p>
                        <p><a rel="noopener" href="https://www.imagine.art/" target="_blank">Create AI Art and turn your imaginations into reality with Imagine's AI Art Generator and produce stunning visuals to cover up your artistic thoughts.</a></p>
                    </div>
                </div>
            </div>
        </div>
    `
    
}