import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';
import styles from '../styles/pages/Home.module.css';

interface HomeProps {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}
export default function Home(props: HomeProps) {
    // console.log(props)
    return (
        <ChallengesProvider
        level={Number(props.level)} 
        currentExperience={Number(props.currentExperience)}
        challengeCompleted={Number(props.challengesCompleted)}
        >
        <div className={styles.container}>
            <Head>
                <title>Início | move.it</title>
            </Head>
            <ExperienceBar />
            <CountdownProvider>
            <section>
                <div>
                    <Profile />
                    <CompletedChallenges />
                    <Countdown />
                </div>
                <div>
                    <ChallengeBox />
                </div>
            </section>
            </CountdownProvider>
        </div>
        </ChallengesProvider>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    /* Chamad api*/

    const { level, currentExperience, challengesCompleted} = context.req.cookies;
    return {
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted),
        }
    }
}




/* 
Exemplo de execução:
[
    Back-End(ex Ruby);
    Next.JS( Node.js); -> Camada back-end
    Font-end( React);
*/
