import React from 'react';
import  './styles.css';


const Contact = () => 

<div className="container__personalizado">


<div id="contact-form" className="bg-form form_area "> 
<form action="">

  <input type="text" placeholder="*Nome: Informe seu nome" required/>

  <input type="text" placeholder="*E-mail: Informe seu e-mail" required/>

  <input type="text" placeholder="*Telefone: (__) _____-____" required/>

  <textarea className="text-area-class"
   rows="5" placeholder="*Mensagem: Escreva aqui" required></textarea>

  <a href="enviar" type="" id="btn-submit">  ENVIAR </a>

</form> 

</div>



</div>


export default Contact;