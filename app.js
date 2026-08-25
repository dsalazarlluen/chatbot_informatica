const chat=document.getElementById("chat"),actions=document.getElementById("actions"),form=document.getElementById("form"),input=document.getElementById("input");
let state="name",studentName="",sede="";
function registrarEvento(menu){
  if(typeof window.va==="function"){
    window.va("event",{
      name:"menu_consulta",
      data:{
        menu:menu,
        sede:sede
      }
    });
  }
}
function message(text,type="bot",scrollMode="bottom"){
 const el=document.createElement("div");el.className=`msg ${type}`;el.innerHTML=text;chat.appendChild(el);
 if(scrollMode==="top") requestAnimationFrame(()=>el.scrollIntoView({block:"start",behavior:"smooth"}));
else requestAnimationFrame(()=>chat.scrollTop=chat.scrollHeight);}
function buttons(items){
 actions.innerHTML="";
items.forEach(item=>{
  const b=document.createElement("button");
  b.type="button";
  b.textContent=item.label;
  b.onclick=()=>{
    registrarEvento(item.label);
    message(escapeHtml(item.label),"user");
    item.action();
  }
})}
function askName(){
 state="name";message("👋 <strong>¡Hola!</strong><br>Bienvenido(a) al <strong>Centro de Informática</strong>.");
 message("Para brindarte una mejor atención, por favor escribe tus <strong>APELLIDOS Y NOMBRES</strong>.");
 input.placeholder="Apellidos y nombres...";
}
function elegirSede(){
 state="sede";
 message("Selecciona la sede donde realizarás tus cursos:");
 buttons([
  {label:"📍 Chiclayo",action:()=>seleccionarSede("Chiclayo")},
  {label:"🏢 Filial",action:()=>seleccionarSede("Filial")}
 ]);
 input.placeholder="Selecciona una sede...";
}
function seleccionarSede(nombre){
 sede=nombre;
 menu();
}
function inicio(){
 state="sede";
 message("🏠 <strong>Selecciona nuevamente tu sede:</strong>");
 buttons([
  {label:"📍 Chiclayo",action:()=>seleccionarSede("Chiclayo")},
  {label:"🏢 Filial",action:()=>seleccionarSede("Filial")}
 ]);
 input.placeholder="Selecciona una sede...";
}
function menu(){
 state="menu";
 message(`¡Gracias, <strong>${escapeHtml(studentName)}</strong>! 😊<br><br><strong>Sede seleccionada:</strong> ${escapeHtml(sede)}<br><br>¿Qué información deseas consultar?`);
 buttons([
  {label:"1️⃣ 📚 Conoce tus cursos",action:cursos},
  {label:"2️⃣ 💻 ¿Cómo acredito Computación?",action:computacion},
  {label:"3️⃣ 💰 Costos de los cursos",action:costos},
  {label:"4️⃣ 📅 Horarios",action:horarios},
  {label:"5️⃣ 📝 ¿Cómo me registro?",action:registro},
  {label:"6️⃣ 🔄 Cambio de curso",action:cambioSeccion},
  {label:"7️⃣ 📜 Trámite de constancia o certificado",action:certificado},
  {label:"8️⃣ 🎓 Check para bachiller",action:bachiller},
  {label:"9️⃣ 👥 Equipo CINF",action:equipo},
  {label:"🏠 Volver al inicio (Elegir sede)",action:inicio}
 ]);
 input.placeholder="Selecciona una opción...";
}
function back(){
 buttons([
  {label:"0️⃣ ↩️ Volver al menú",action:menu},
  {label:"🏠 Volver al inicio (Elegir sede)",action:inicio}
 ]);
 input.placeholder="Selecciona una opción...";
}
function section(title,content){state="section";message(`<strong>${title}</strong><br><br>${content}`,"section","top");back()}

function computacion(){
  const taller = "Taller de Certificación Internacional (Word 2019, Excel 2019, Word 365, Excel 365 o AutoCAD)";
  if(sede==="Chiclayo"){
    section("💻 ¿Cómo acredito Computación?",
    `<strong>🟢 RUTA 1</strong><br><br>
    <strong>3 CURSOS + 1 TALLER DE CERTIFICACIÓN</strong><br><br>
    • Curso 1<br>
    • Curso 2<br>
    • Curso 3<br>
    • ${taller}<br><br>
    <hr>
    <strong>🔵 RUTA 2</strong><br><br>
    <strong>4 CURSOS</strong><br><br>
    • Curso 1<br>
    • Curso 2<br>
    • Curso 3<br>
    • 4.º curso<br><br>
    📍 En esta ruta <strong>no se rinde el Taller de Certificación Internacional</strong>.<br><br>
    <hr>
    <strong>🟠 RUTA 3</strong><br><br>
    <strong>4 TALLERES DE CERTIFICACIÓN</strong><br><br>
    • ${taller}<br>
    • ${taller}<br>
    • ${taller}<br>
    • ${taller}<br><br>
    <hr>
    <strong>📍 MODALIDAD – SEDE CHICLAYO</strong><br><br>
    Los talleres pueden ser <strong>PRESENCIALES o VIRTUALES, según disponibilidad</strong>.<br><br>
    <strong>📝 EXAMEN DE CERTIFICACIÓN</strong><br><br>
    El examen de certificación es <strong>PRESENCIAL</strong>.`)
  }else{
    section("💻 ¿Cómo acredito Computación?",
    `<strong>🟢 RUTA 1</strong><br><br>
    <strong>3 CURSOS + 1 TALLER DE CERTIFICACIÓN</strong><br><br>
    • Curso 1<br>
    • Curso 2<br>
    • Curso 3<br>
    • ${taller}<br><br>
    <hr>
    <strong>🔵 RUTA 2</strong><br><br>
    <strong>4 CURSOS</strong><br><br>
    • Curso 1<br>
    • Curso 2<br>
    • Curso 3<br>
    • 4.º curso<br><br>
    📍 En esta ruta <strong>no se rinde el Taller de Certificación Internacional</strong>.<br><br>
    <hr>
    <strong>🟠 RUTA 3</strong><br><br>
    <strong>4 TALLERES DE CERTIFICACIÓN</strong><br><br>
    • ${taller}<br>
    • ${taller}<br>
    • ${taller}<br>
    • ${taller}<br><br>
    <hr>
    <strong>📍 MODALIDAD – FILIALES</strong><br><br>
    Los talleres son <strong>VIRTUALES</strong>.<br><br>
    <strong>📝 EXAMEN DE CERTIFICACIÓN</strong><br><br>
    El examen de certificación es <strong>PRESENCIAL</strong>.`)
  }
}
function cursos(){section("📚 Conoce tus cursos",
`<strong>📘 AGRUPACIÓN 1</strong><br><br>
<strong>Escuelas:</strong><br>
• Enfermería<br>
• Estomatología<br>
• Medicina Humana<br>
• Tecnología Médica<br><br>
<strong>Cursos:</strong><br>
1. Ofimática Word 365<br>
2. Ofimática Excel 365<br>
3. Diseño con Canva<br>
4. Microsoft Excel Asociado<br>
5. Análisis de datos con SPSS<br>
6. Base de datos científicos y vigilancia tecnológica<br>
7. Taller de Certificación Internacional<br><br>

<hr>
<strong>📘 AGRUPACIÓN 2</strong><br><br>
<strong>Escuelas:</strong><br>
• Derecho<br>
• Psicología<br>
• Trabajo Social<br><br>
<strong>Cursos:</strong><br>
1. Ofimática Word 365<br>
2. Ofimática Excel 365<br>
3. Diseño con Canva<br>
4. Microsoft Word Asociado<br>
5. Microsoft Excel Asociado<br>
6. Análisis de datos con SPSS<br>
7. Taller de Certificación Internacional<br><br>

<hr>
<strong>📘 AGRUPACIÓN 3</strong><br><br>
<strong>Escuelas:</strong><br>
• Administración<br>
• Administración y Emprendimiento<br>
• Administración y Marketing<br>
• Contabilidad<br>
• Contabilidad y Finanzas<br>
• Negocios Internacionales<br>
• Turismo y Negocios<br>
• Ingeniería Agroindustrial y Comercio Exterior<br><br>
<strong>Cursos:</strong><br>
1. Ofimática Word 365<br>
2. Ofimática Excel 365<br>
3. Diseño con Canva<br>
4. Microsoft Excel Asociado<br>
5. Microsoft Project<br>
6. Power BI<br>
7. Taller de Certificación Internacional<br><br>

<hr>
<strong>📘 AGRUPACIÓN 4</strong><br><br>
<strong>Escuelas:</strong><br>
• Arquitectura<br>
• Ingeniería Civil<br>
• Arquitectura y Diseño de Interiores<br><br>
<strong>Cursos:</strong><br>
1. Microsoft Excel Asociado<br>
2. AutoCAD 2D<br>
3. AutoCAD 3D<br>
4. Sketchup<br>
5. Microsoft Project<br>
6. Revit Architecture<br>
7. Taller de Certificación Internacional<br><br>

<hr>
<strong>📘 AGRUPACIÓN 5</strong><br><br>
<strong>Escuelas:</strong><br>
• Ingeniería de Sistemas<br>
• Ingeniería de Software<br>
• Ingeniería Industrial<br><br>
<strong>Cursos:</strong><br>
1. Microsoft Excel Asociado<br>
2. AutoCAD 2D<br>
3. AutoCAD 3D<br>
4. Software Bizagi<br>
5. Diseño Web<br>
6. Power BI<br>
7. Taller de Certificación Internacional<br><br>

<hr>
<strong>📘 AGRUPACIÓN 6</strong><br><br>
<strong>Escuelas:</strong><br>
• Ingeniería Mecánica Eléctrica<br>
• Ingeniería Civil<br>
• Arquitectura<br><br>
<strong>Cursos:</strong><br>
1. Microsoft Excel Asociado<br>
2. AutoCAD 2D<br>
3. AutoCAD 3D<br>
4. SolidWorks<br>
5. MatLab<br>
6. Diseño Mecánico con AutoCAD 3D<br>
7. Taller de Certificación Internacional<br><br>

<hr>
<strong>📘 AGRUPACIÓN 7</strong><br><br>
<strong>Escuelas:</strong><br>
• Artes y Diseño Gráfico Empresarial<br>
• Ciencias de la Comunicación<br>
• Ingeniería de Sistemas<br>
• Ingeniería de Software<br><br>
<strong>Cursos:</strong><br>
1. Ofimática Word 365<br>
2. Ofimática Excel 365<br>
3. Diseño con Canva<br>
4. Microsoft Word Asociado<br>
5. Microsoft Excel Asociado<br>
6. Diseño Web<br>
7. Taller de Certificación Internacional`)}
function costos(){
 if(sede==="Chiclayo"){
  section("💰 Costos de los cursos",
  `<strong>📍 SEDE CHICLAYO</strong><br><br>
  <strong>Ruta de aprendizaje</strong><br>
  1 curso: <strong>S/ 420</strong><br><br>
  <strong>Taller de Certificación Internacional</strong><br>
  1 taller: <strong>S/ 340</strong><br><br>
  <hr>
  <strong>⏱️ MODALIDADES</strong><br><br>
  <strong>Regular:</strong> 3 meses para curso / 1 mes para taller.<br>
  <strong>Intensivo:</strong> 2 meses para curso / 1 mes para taller.<br>
  <strong>Super intensivo:</strong> 1 mes para curso / 1 mes para taller.<br><br>
  <hr>
  <strong>IMPORTANTE</strong><br><br>
  Los costos indicados son por cada curso o taller que el estudiante elija para su acreditación.`)
 }else{
  section("💰 Costos de los cursos",
  `<strong>🌐 FILIALES</strong><br><br>
  <strong>Ruta de aprendizaje</strong><br>
  1 curso: <strong>S/ 240</strong><br><br>
  <strong>Taller de Certificación Internacional</strong><br>
  1 taller: <strong>S/ 280</strong><br><br>
  <hr>
  <strong>⏱️ MODALIDADES</strong><br><br>
  <strong>Regular:</strong> 3 meses para curso / 1 mes para taller.<br>
  <strong>Intensivo:</strong> 2 meses para curso / 1 mes para taller.<br>
  <strong>Super intensivo:</strong> 1 mes para curso / 1 mes para taller.<br><br>
  <hr>
  <strong>IMPORTANTE</strong><br><br>
  Los costos indicados son por cada curso o taller que el estudiante elija para su acreditación.`)
 }
}
function horarios(){
 section("📅 Horarios",
 `<strong>📅 HORARIOS DISPONIBLES</strong><br><br>
 Consulta los horarios disponibles en el siguiente enlace:<br><br>
 <a href="https://canva.link/jedasktsh344wmz" target="_blank" rel="noopener noreferrer">🔗 Ver horarios disponibles</a>`)
}
function registro(){section("📝 ¿Cómo me registro?",
`<strong>1️⃣ HORARIOS</strong><br><br>
Revisa los <strong>horarios disponibles</strong>:<br>
<a href="https://canva.link/jedasktsh344wmz" target="_blank" rel="noopener noreferrer">🔗 Ver horarios</a><br><br>
<hr>
<strong>2️⃣ CAMPUS VIRTUAL</strong><br><br>
Ingresa a tu <strong>Campus Virtual</strong>.<br><br>
<hr>
<strong>3️⃣ MATRÍCULA</strong><br><br>
Ir a <strong>Procesos en Línea → Matrícula en Línea → Centro de Informática</strong>.<br><br>
<hr>
<strong>4️⃣ MODALIDAD</strong><br><br>
Si es <strong>curso</strong>, elige modalidad <strong>virtual</strong>.<br>
Si es <strong>taller de certificación</strong>, elige <strong>presencial</strong>.<br><br>
<hr>
<strong>5️⃣ CURSO Y SECCIÓN</strong><br><br>
Selecciona el <strong>curso</strong> y <strong>sección</strong> según disponibilidad de cupo.<br><br>
<hr>
<strong>6️⃣ PRE MATRÍCULA</strong><br><br>
Clic en <strong>Pre matricular</strong>.`)}
function cambioSeccion(){section("🔄 Cambio de curso",
`<strong>🟢 CICLO REGULAR</strong><br><br>
<strong>Antes de iniciar el curso:</strong><br>✅ Cambio <strong>GRATUITO</strong><br><br>
<strong>Una vez iniciado el curso:</strong><br>⏰ Tienes <strong>5 días calendario</strong> para solicitar el cambio.<br>💰 Derecho de trámite: <strong>S/ 20</strong><br><br>
<hr>
<strong>🟠 CICLO SÚPER INTENSIVO</strong><br><br>
<strong>Antes de iniciar el curso:</strong><br>✅ Cambio <strong>GRATUITO</strong><br><br>
<strong>Una vez iniciado el curso:</strong><br>⏰ Tienes <strong>3 días calendario</strong> para solicitar el cambio.<br>💰 Derecho de trámite: <strong>S/ 20</strong><br><br>
<hr>
<strong>📋 PROCESO PARA EL DERECHO DE TRÁMITE</strong><br><br>
<strong>1️⃣</strong> Ingresa al <strong>Campus Virtual USS</strong>.<br><br>
<strong>2️⃣</strong> Selecciona <strong>Trámites</strong>.<br><br>
<strong>3️⃣</strong> Ingresa a <strong>Programación de servicios</strong>.<br><br>
<strong>4️⃣</strong> Selecciona <strong>Derecho de Trámite CIS</strong>.<br>💰 Importe: <strong>S/ 20.00</strong>.<br><br>
<strong>5️⃣</strong> Haz clic en <strong>Programar</strong>.<br><br>
<strong>6️⃣</strong> Verifica la programación en <strong>Gestión Financiera → Detalle económico</strong>.<br><br>
<hr>
<strong>📩 SOLICITUD DE CAMBIO</strong><br><br>
Remite correo a <strong>katherin.olivos@uss.edu.pe</strong>.<br><br>
⏱️ Se atenderá en un plazo de <strong>24 horas si es de lunes a viernes</strong> y <strong>48 horas si es fin de semana</strong>.`) }
function certificado(){section("📜 Trámite de constancia o certificado",
`<strong>📄 CONSTANCIA CIS DIGITAL</strong><br><br>
<hr>
<strong>1️⃣ CAMPUS VIRTUAL USS</strong><br><br>
Ingresa a tu <strong>Campus Virtual USS</strong>:<br>
<a href="https://www.uss.edu.pe" target="_blank" rel="noopener noreferrer">🌐 www.uss.edu.pe</a><br>
Ingresa con tu <strong>usuario y clave</strong>.<br><br>
<hr>
<strong>2️⃣ TRÁMITES</strong><br><br>
Selecciona <strong>Trámites</strong>.<br><br>
<hr>
<strong>3️⃣ SERVICIO</strong><br><br>
En programación de servicios, selecciona <strong>Constancia CIS Digital</strong>.<br>
<strong>Cantidad:</strong> 1<br>
<strong>Importe:</strong> S/ 25.00<br><br>
Finalmente, <strong>Programar</strong>.<br><br>
<hr>
<strong>📩 ENVÍO O RECOJO DE CONSTANCIA CIS</strong><br><br>
Una vez realizado el pago, remitir a <strong>centros.empresariales@uss.edu.pe</strong>.<br><br>
<strong>1️⃣ DIGITAL:</strong><br>
En un plazo de un (01) día hábil se remitirá la constancia al correo institucional <strong>@uss.edu.pe</strong>.<br><br>
<strong>2️⃣ IMPRESO:</strong><br>
En un plazo de un (01) día hábil puede acercarse a <strong>Elías Aguirre 933, Chiclayo</strong>.<br><br>
<strong>Horario:</strong><br>
Lun a vie:<br>
08:00 – 01:00 pm y 02:00 – 06:00 pm<br><br>

<hr>
<strong>📜 CERTIFICADO CIS DIGITAL</strong><br><br>
<hr>
<strong>1️⃣ CAMPUS VIRTUAL USS</strong><br><br>
Ingresa a tu <strong>Campus Virtual USS</strong>:<br>
<a href="https://www.uss.edu.pe" target="_blank" rel="noopener noreferrer">🌐 www.uss.edu.pe</a><br>
Ingresa con tu <strong>usuario y clave</strong>.<br><br>
<hr>
<strong>2️⃣ TRÁMITES</strong><br><br>
Selecciona <strong>Trámites</strong>.<br><br>
<hr>
<strong>3️⃣ SERVICIO</strong><br><br>
En programación de servicios, selecciona <strong>Certificado CIS Digital</strong>.<br>
<strong>Cantidad:</strong> 1<br>
<strong>Importe:</strong> S/ 35.00<br><br>
Finalmente, <strong>Programar</strong>.<br><br>
<hr>
<strong>📩 ENVÍO O RECOJO DE CERTIFICADO CIS</strong><br><br>
Una vez realizado el pago, remitir a <strong>centros.empresariales@uss.edu.pe</strong>.<br><br>
<strong>1️⃣ DIGITAL:</strong><br>
En un plazo de un (01) día hábil se remitirá el certificado al correo institucional <strong>@uss.edu.pe</strong>.<br><br>
<strong>2️⃣ IMPRESO:</strong><br>
En un plazo de un (01) día hábil puede acercarse a <strong>Elías Aguirre 933, Chiclayo</strong>.<br><br>
<strong>Horario:</strong><br>
Lun a vie:<br>
08:00 – 01:00 pm y 02:00 – 06:00 pm`)}
function equipo(){section("👥 Equipo",
`<strong>Jefe</strong><br>
Mag. Daniel Salazar<br>
📧 <strong>daniel.salazar@uss.edu.pe</strong><br><br>

<hr>
<strong>Especialista</strong><br>
Ing. Katherin Olivos<br>
📧 <strong>katherin.olivos@uss.edu.pe</strong><br><br>

<hr>
<strong>Especialista</strong><br>
Ing. Jessica Vargas<br>
📧 <strong>centro.informatica@uss.edu.pe</strong>`)}

function bachiller(){section("🎓 Check para bachiller",
`Si ya terminaste la universidad y estás haciendo trámite de bachiller, remite correo a <strong>acredita.informatica@uss.edu.pe</strong> con copia a <strong>acredita_computacion@uss.edu.pe</strong>.<br><br>
Se atenderá en un plazo de <strong>24 horas si es de lunes a viernes</strong> y <strong>48 horas si es fin de semana</strong>.`)}

function handle(text){
 const value=text.trim().toLowerCase();
 if(!value)return;
 message(escapeHtml(text),"user");

 if(state==="name"){
  studentName=text.trim();
  return elegirSede();
 }

 if(state==="sede"){
  if(value==="1"||value.includes("chiclayo"))return seleccionarSede("Chiclayo");
  if(value==="2"||value.includes("filial"))return seleccionarSede("Filial");
  message("Por favor, selecciona <strong>Chiclayo</strong> o <strong>Filial</strong>.");
  return;
 }

 if(state==="menu"){
  const map={
   "1":cursos,"2":computacion,"3":costos,"4":horarios,
   "5":registro,"6":cambioSeccion,"7":certificado,"8":bachiller,"9":equipo,"9":equipo
  };
  if(map[value])return map[value]();
  if(value==="inicio"||value.includes("elegir sede")||value.includes("cambiar sede"))return inicio();
  if(value==="0"||value==="menu"||value.includes("volver al menú")||value.includes("volver al menu"))return menu();
  message("Por favor, selecciona una opción del <strong>1 al 8</strong>.");
  return;
 }

 if(value==="inicio"||value.includes("elegir sede")||value.includes("cambiar sede"))return inicio();
 if(value==="0"||value==="menu"||value.includes("volver al menú")||value.includes("volver al menu")||value.includes("volver"))return menu();

 message("Selecciona una opción para continuar.");
 back();
}
function escapeHtml(value){return value.replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[ch]))}
form.addEventListener("submit",e=>{e.preventDefault();handle(input.value);input.value="";input.focus()});
askName();
