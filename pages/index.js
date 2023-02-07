import Layout from "../components/Layout";

const Index = () => (
    <Layout>

        {/** header card */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="profile.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <h1 className="fw-light">Carlos Enrique Agüero</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, mollitia tenetur. Molestias harum cupiditate, neque, tempora quis mollitia sunt, recusandae odit aspernatur vero error. Facere perferendis ex nobis voluptatibus animi!</p>
                            <a href="/hireme">Hire Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>



    </Layout>
)

export default Index;
