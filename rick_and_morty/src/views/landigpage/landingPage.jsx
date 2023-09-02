import LoginForm from "../../components/loginForm/loginForm";
import style from "./LandingPage.module.css"
function LandingPage({login}){
    return (
        <div className={style.landingContainer}>
            <LoginForm login={login}/>
        </div>
    )
}
export default LandingPage;