import React from 'react';
import './AboutUs.scss';

function AboutUs(props) {
    return (
        <section id="aboutUs" className="AboutUs">
            <div className="container">
                <div className="wrapper row">
                    <h2 className="title col-12">Про нас</h2>
                    <div className="contentLeft col-12 col-md-7">
                    </div>
                    <div className="contentRight col-12 col-md-5 ">
                        <div className="text ">ІТ Cluster Academy — один з найуспішніших проектів створених Івано-Франківським ІТ кластером в 2016 році. Головною метою академії є забезпечення українських компаній компетентними спеціалістами та розвиток ІТ- індустрії України. Наразі Айті Кластер бере активну участь у допомозі працевлаштування для ветеранів АТО / ООС, влаштуванні спортивних марафонів та підтримці лікарень під час Пандемії COVID-19.</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
