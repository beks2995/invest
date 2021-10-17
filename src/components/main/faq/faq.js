import React from 'react';
import './faq.scss'

const Faq = () => {
    const accordion = [
        {
            question: 'Как начать зарабатывать?',
            answer: 'Для того, чтобы начать работу с компанией, Вам следует пройти простую процедуру регистрации на нашем сайте. Далее необходимо внести свой первый депозит, выбрав соответствующий раздел в личном кабинете, после чего вся инвестиционная работа будет проводиться нашей компанией, а Вы, в свою очередь, будете получать с этого ежедневный доход.'
        },
        {question: 'Минимальная и макисальная сумма депозита?', answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut autem consectetur, consequatur deleniti enim eum eveniet exercitationem expedita facilis fugit hic in laudantium minima molestiae praesentium quae quas qui saepe sunt tempore tenetur ut voluptatem! Aliquam architecto consectetur consequatur culpa deleniti dolore, dolorum earum eos et explicabo hic id illo incidunt magnam maxime necessitatibus nostrum provident quibusdam quis quod ratione repellat suscipit vel velit veniam veritatis vero? Adipisci aperiam aspernatur autem corporis doloribus dolorum ducimus ea eos est fuga harum, illo impedit incidunt labore laborum laudantium molestias mollitia numquam obcaecati officiis perspiciatis quo ratione recusandae similique unde ut veniam!'},
        {question: 'Какие существуют риски?', answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut autem consectetur, consequatur deleniti enim eum eveniet exercitationem expedita facilis fugit hic in laudantium minima molestiae praesentium quae quas qui saepe sunt tempore tenetur ut voluptatem! Aliquam architecto consectetur consequatur culpa deleniti dolore, dolorum earum eos et explicabo hic id illo incidunt magnam maxime necessitatibus nostrum provident quibusdam quis quod ratione repellat suscipit vel velit veniam veritatis vero? Adipisci aperiam aspernatur autem corporis doloribus dolorum ducimus ea eos est fuga harum, illo impedit incidunt labore laborum laudantium molestias mollitia numquam obcaecati officiis perspiciatis quo ratione recusandae similique unde ut veniam!'}
    ];
    const accHandler = (e) => {
        if(e.target.className === 'faq__question'){
            e.target.parentNode.classList.toggle('active')
        }
        if(e.target.className === 'faq__answer'){
            e.target.parentNode.classList.toggle('active')
        }
        if(e.target.className.includes('faq__accordion')) {
            e.target.classList.toggle('active')
        }
        console.log(e.target.className)
    };
    return (
        <div className='faq' id='faq'>
            <div className="container">
                <h2 className="faq__title">Часто задаваемые</h2>
                <h3 className="faq__subtitle">Вопросы / Ответы</h3>
                {accordion.map((el, idx) => (
                    <div className='faq__accordion' onClick={accHandler} key={idx}>
                        <div className="faq__question">{el.question}</div>
                        <div className="faq__answer">{el.answer}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;