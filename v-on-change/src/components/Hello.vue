ในสัปดาห์ที่ผ่านมา ผมได้มีโอกาศทำโปรเจคแรกโดยใช้ตัว framework ที่ Evan you สร้างขึ้น มันคือ Vue.js
Vue.js มันเป็น  reactive component ซึงเป็นรากฐานของ MVVM JavaScript library  เว็บที่ร่วมสมัย
Vue.js เป็น library ขนาดเล็กสร้างการเชื่อมต่อผู้ใช้แบบการโต้ตอบ ปราศจากการกังวลเกี่ยวกับการจัดการขอ
 Dom และ event listening
1.ง่ายต่อการเริ่มต้น
มันเป็นวิธีที่ง่ายต่อการเริ่มต้นเพียงแค่วาง Vue.js Library ก่อนปิดแท็ก </body> และมันพร้อมที่จะเริ่มทำงาน
ไม่จำเป็นที่จะต้องติดตั้ง Gulp, Grunt หรือ Webpack ไม่จำเป็นที่จะต้องเรียนรู้ถึงตัวแปรใหม่เหมือน TypeScript
ทุกอย่างทำงานโดยการวาง single JS library
2.Component คือรากฐาน
หลักการที่สำคัญของ Vue.js คือ Component ที่เป็นส่วนที่แยกกันอยู่ในตัวของมันเอง และ สามารถนำกลับมาใช้งานใหม่ได้
ผมรู้ว่า Components กำลัง Hot อยู่ในตอนนี้  วิธีของ Vue's component คือ กำหนดและ ใช้การถ่ายข้อมูลแบบจำเพาะ
ของ W3c เป็นองค์ประกอบที่กำหนดเอง ซึ่งมันเป็นส่วนหนึ่งที่ใหม่ของ Web Components Spec ซึ่งมัน
หมายความว่า การใช้ Vue.js และ Component จะเป็นคล้ายกับ การทำงานของเบราว์เซอร์ในอนาคต ในความ
เป็นจริง คุณจะได้กำหนด Component -ของคุณเอง ผมคิดว่ามันเหมาะอย่างน่าทึ่งกับ HTML markup paradigm
มันทำให้ง่ายที่จำให้เหตุผลเกี่ยวกับตำแหน่ง และ องค์ประกอบของ Components ใน Application ของคุณ

คุณสมบัติที่สูงขึ้นเล็กน้อยแต่ไม่มีคุณสมบัติไหนที่น่ากลัวน้อยกว่า Vue.js Components ของมันคือ ไฟล์
Components เดียว การใช้เครื่องมือ เช่น Vueify ช่วยให้คุณสามารถกำหนดแม่แบบ และสามารถจัดแต่ง Components
ของคุณในไฟล์เดียว
3.การแก้ปัญหาที่เหมาะสม
ในระดับทฤษฎี ผมรู้สึกสว่า Vue.js แก้ปัญหาที่เหมาะสมได้สำหรับผมมันไม่ได้แทนที่ทั้งด้วย SPA คุณสามารถใช้
Vue ตามความจำเป็นในส่วนของหน้าเว็บไซต์ของคุณ ซึ่งมัน makes sense สำหรับงานที่ผมกำลังทำอยู่
<hand-wavy-statement>  ยอมรับเถอะว่า ส่วนใหญ่มันพัฒนา front-end  มันไม่ได้ทำงานบน google
หรือ facebook  ที่มีการใช้งานขนาดหลายร้อย Vue.js ไม่ได้บังคับให้คุณเข้าไปในส่วนของการตั้งค่าที่ซับซ้อน
ในการกำหนดโครงสร้างและ Data store  มันจะช่วยให้คุณเริ่มต้นได้อย่างรวดเร็วและเพิ่มคุณสมบัติตามที่คุณต้องการ
4.แหล่งข้อมูลที่ดี
วิธีที่ทำให้ผมได้เรียนรู้เทคโนโ,ยีใหม่ๆ มักจะออกมาในรูปแบบของ วีดีโอ การอ่านหนังสือ และ การพยายามออก Project ขนาดเล็ก
ในการเริ่มต้นทีเริ่มอย่างช้าๆ แต่แล้ววมองไปหาคู่มือของ Vue.js กลายเป็นว่าคู่มือและเอกสารทุกอย่างเป็นสิ่งที่ชัดเจนมาก Vue.js
มี Document ที่ดี มันทำให้กล่ยเป็นเรื่อที่ง่ายที่จะเข้าใจถึงการใช้ Vue.js อีกอย่างหนึ่งที่สำคัญในการพัฒนาของ Vue.js
คือ ข้อความ error ถ้าคุณใช้ non-minified ของ Vue library คุณจะได้รับข้อความอธิบายเออเร่อที่ดีใน Console ของคุณ

5.เครื่องมือที่น่ากลัว
เครื่องมือที่อ่อนเป็นสิ่งที่จริงจริงใน  JavaScript ecosystem แต่มันมีประสิทธิภาพมากกว่าถ้าคณมีเครื่องมือที่จะทำให้งานของคุณ
สำเร็จ มันเซอร์ไพร์สำหรับผมมาก  Vue.js มีชุดของ Tool ที่สมบูรณ์ ที่จะช่วยคุณ มันน่าประหลาดใจที่มันถูกสร้างขึ้นจาก
Evan you และ กลุ่มนักพัฒนาเล็กๆ โดยปราศจากการสนับสนุนขององค์กร บางส่วนของเครื่องมือ ที่ได้รับความสนใจจากผมคือ
vue-cli สำหรับ scaffolding ที่รวดเร็ว Vue-router สำหรับการทำ Http และ Ajax requsts  vue-validator สำหรับ
การตรวจสอบข้อมูล vuexสำหรับโครงสร้างของ flux-inspired  แต่เครื่องมือที่ผมใช้มากที่สุดในวันนี้ของ Vue คือ vue-devtool
เป็น extention ของ Chome ที่ช่วยในการตรวจสอบ และ ตอบโต้การเขียน Vue
6.Minimal Overhead
ในแง่ของการ Leftpad debacle ทีผ่านมา ผมก็ได้ระมัดระวังการอ้างอิงที่ต้องยกเลิกในโปรเจคนี้ Vue.js ไม่ผิดหวังเลย
ในส่วนนี้ มันถูกออกแบบมาให้กระจ่าง และ ไม่มีการอ้างอิงถึงบุลคลที่สาม นี่คือสิ่งที่ชัดเจนสำหรับ Vue และนี้เป็นสิ่งที่ทำให้
Vueได้รับการปรับปรุงอย่างมีประสิธิภาพการทำงานที่ดี และ การรักษาเสถียรภาพของ API นอกจากนี้ Vue.js
เล่นได้ โดยปราศจาก libraly ตัวอื่นๆ จำเป็นต้องนำมาใช้ใน JQuery และ Bootstrap ไม่มีปัญหาสำหรับ Vueที่จะเล่น
กับพวกเขาเหล่านี้
7.Future Facing
หนึ่งในข้อเปรียบเทียบที่ทำให้เห็นถึงความแต่กต่างที่ใหญ่ที่สุด สิ่งผมสามารถดูได้กับ Vue.js คือขนาดของทีมที่
ทุ่มเทให้กับมัน มันไม่ได้มีกองทุนอย่าง Facebook หรือ google และเนื่องจากคนสร้าง Vue คือ ผู้ชายนั้นไม่ใช่
ปัจจัยในการทำงานกับ Vue ซึ่งเป็นสิ่งที่เขาโปรดปราน  Evan  พูดถึงความมั่นคงอย่าจริงจัง Vue.js มีการ
เจริญเติบโตและ ผู้อุปถัมภ์ที่แข็งแกร่ง มีสิ่งที่ดีมากสำหรับหรับ Vue อยู่หลายสิ่ง สำหรับ Vue 2.0 ที่เป็นเวอร์ชั่นใหม่
ขณะนี้ใน RC sate และ มันมีการปรับปรุงประสิทธิภาพจำนวนมากที่ทำงานกับ Virtual DOM.

สหกิจ
1.นายกิติศักดิ์ สุขมา     sec C
2.นายศิวกร ประนมศรี   sec B
3.นายศิวกรณ์ เพียงเพ็ญจันทร์    sec A
4.นายพนมกร นกน้อย    sec A
ฝึกงาน
1.นายภูอนันต์  วรรณสุทธิพงศ์  sec B
