import Navbar from '../../components/nav/nav';
import sy from './index.module.css';



const Home = () => {

    return (
        <div className={sy.main}>
            <img
                className={sy.bg}
                src="https://images.unsplash.com/photo-1709432450696-a2bbea3df0fa?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Politicality"
            />
            <div>
                <Navbar/>
            </div>
            <div className={sy.page}>
                {/* Main Content */}
                <div className={sy.hero}>
                    <h1>POLITICALITY</h1>
                    <p>
                        {/* Politicality is a place where top end media API's meets curious minds.
                        Utilizing the power of the internet and programming to bring the latest 
                        Donald Trump tweet, or the latest news from CNN, or even the latest event. 
                        It is a political research motivated place. No biases, No oversaturated reporting 
                        for certain events or industries. Just the facts, and the latest news, and what matters. */}
                        It could be storming soon...
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;