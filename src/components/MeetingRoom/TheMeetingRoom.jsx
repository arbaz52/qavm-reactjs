const TheMeetingRoom=(props)=>{
    return (
        <section class="fdb-block">
        <div class="container">
            <div class="row text-center">
            <div class="col-12">
                <h1>There is a feature for everyone</h1>
                <p class="lead"><a href="https://www.froala.com">See all features <i class="fas fa-angle-right"></i></a>
                </p>
            </div>
            </div>

            <div class="row text-center justify-content-center mt-5">
            <div class="col-10 col-sm-3">
                <img alt="image" class="img-fluid rounded" src="./imgs/hero/blue.svg"/>
                <h3><strong>Feature One</strong></h3>
            </div>
            <div class="col-10 col-sm-3 pt-5 pt-sm-0">
                <img alt="image" class="img-fluid rounded" src="./imgs/hero/red.svg"/>
                <h3><strong>Feature Two</strong></h3>
            </div>

            <div class="col-10 col-sm-3 pt-5 pt-sm-0">
                <img alt="image" class="img-fluid rounded" src="./imgs/hero/purple.svg"/>
                <h3><strong>Feature Three</strong></h3>
            </div>

            <div class="col-10 col-sm-3 pt-5 pt-sm-0">
                <img alt="image" class="img-fluid rounded" src="./imgs/hero/yellow.svg"/>
                <h3><strong>Feature Four</strong></h3>
            </div>
            </div>
        </div>
        
        </section>
        );
    };
export default TheMeetingRoom;