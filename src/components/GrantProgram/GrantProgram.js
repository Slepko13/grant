import React from 'react';
import { Link } from 'react-scroll';
import './GrantProgram.scss';

function GrantProgram() {
    return (
        <section id="grantProgram" className="GrantProgram">
            <div className="container">
                <div className="wrapper row">
                    <h2 className="title col-12">Наша грантова програма</h2>
                    <div className="contentLeft col-12 col-md-7">
                    </div>
                    <div className="contentRight col-12 col-md-5 border">
                        <div className="text border">Світ змінився під час пандемії. Все навчання перейшло в онлайн формат. Ми знаємо наскільки важко галузі освіти освоїти формат онлайн-навчання, тому Івано-Франківський ІТ Cluster та IT Cluster Academy створили міні курси для викладачів та працівників галузі освіти, щоб поділитися досвідом та допомогти автоматизувати процеси навчання максимально швидко та легко.
                        Час відкривати для себе нові технології!</div>
                    </div>
                    <h2 className="title col-12 mt-5
                     border">Участь у програмі</h2>
                    <div className="contentLeft col-12 col-md-7">
                    </div>
                    <div className="contentRight col-12 col-md-5">
                        <div className="text border">Грантова програма створена для викладачів та працівників освітніх закладів України.
                        Навчання проходить протягом 3 тижнів та є абсолютно безкоштовним.
                        Залиште заявку і ми підтвердимо Вашу участь протягом 2 робочих днів.</div>
                        <div className="registrationButton ">
                            <Link
                                className="registrationLink"
                                to="signUp"
                                duration={500}
                                smooth={true}
                                offset={-80}
                            >Реєстрація</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GrantProgram;
