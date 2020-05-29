import React from 'react';
import './ProgramPlan.scss';
import softServe from "../../assets/images/logo/softserve.png";
import eleks from "../../assets/images/logo/Eleks.png";


function ProgramPlan() {
    return (
        <section id="programPlan" className="ProgramPlan">
            <div className="container">
                <div className="wrapper">
                    <h2 className="title">План навчання</h2>
                    <div className="items">
                        <div className="item">Тема 1: Знайомство. Оцінюємо ринок освіти.</div>
                        <div className="item">Тема 2: Говоримо про ефективне навчання в 2020 році.</div>
                        <div className="item">Тема 3: Процеси навчання. Як перенести навчання в формат онлайн та автоматизувати його.</div>
                        <div className="item">Тема 4: Технічна сторона навчання. Оцінювання курсу.</div>
                        <div className="item">Тема 5: Практика</div>
                        <div className="item">Тема 6: Мотивація працівників та студентів. Як працювати дистанційно не втрачаючи якість навчання.</div>
                        <div className="item">Тема 7: Практика</div>
                        <div className="item"> Тема 8: Брей ринг</div>
                        <div className="item">Тема 9: Захист проектів. Випуск</div>
                    </div>
                    <h2 className="title mt-5">Викладачі</h2>
                    <div className="teachers row">
                        <div className="teacher col-12 col-lg-6">
                            <div className=""><img src={softServe} alt="" className="teacherImage" /></div>
                            <h3 className="name">Любомир Ходак</h3>
                            <div className="position">Delivery Center Director в SoftServe</div>
                        </div>
                        <div className="teacher col-12 col-lg-6">
                            <div className=""><img src={eleks} alt="" className="teacherImage" /></div>
                            <h3 className="name">Наталія Мухітдінова</h3>
                            <div className="position">Керівник департаменту в ELEKS</div>

                        </div>
                    </div>
                </div>
            </div >

        </section >
    )
}

export default ProgramPlan
