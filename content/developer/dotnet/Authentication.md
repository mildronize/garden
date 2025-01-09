
## IdentityServer

ราคา license IdentityServer ครับ credit เทพเรย์

เกี่ยวกับ 5 client applications:

ปกติ client mobile app ที่ user ใช้งานจะมี 1 client id ที่ได้หลักจาก register client application ที่ ID server

ถ้า mobile app เดิมที่ user คนอื่นใช้ ไม่ต้อง register client ใหม่ที่ authorization server แล้ว ใช้ client id เดิมเลย

mobile app ถ้าเป็น application เดียวกัน จะมี client id และ client secret เดียวกัน

ให้ใช้ได้เพียง 5 client application ก็ถือว่าเพียงพอครับ

เพราะโดยทั่วไปเราก็ทำ 1 client application กับ 1 identity server

แต่ถ้าจะวางระบบให้รองรับ client application หลายตัวให้เชื่อมกับ identity server การรองรับ 5 client applications คงไม่พอ

![[Pasted image 20250101210252.png]]

[https://www.facebook.com/groups/dotnetthailand/permalink/3675093575909806/](https://www.facebook.com/groups/dotnetthailand/permalink/3675093575909806/)

## Openiddict - Open Source

Sample: [https://github.com/openiddict/openiddict-samples](https://github.com/openiddict/openiddict-samples)

OrchardCore CMS ใช้ OpenIddict library (Identity, JWT) ในการจัดการกับ Login, Authentication, JWT

ในตัว OrchardCore ได้มี OrchardCore.OpenId module มาให้

ทำให้เราสามารถใช้ JWT ร่วมกับ Angular, React, Vue, Blazor app ได้เลย

ตัวอย่าง video Orchard Core และ OpenId

Orchard Core OpenID Connect Code Flow with Blazing Orchard

[](https://www.youtube.com/watch?v=C4GYNVlxU30&fbclid=IwAR2sw4yXmS3jBS3rtazBpBwIhspM9B3BsR7kv8aeVKQ5vLcoiSJZhEdy3wY)[https://www.youtube.com/watch?v=C4GYNVlxU30](https://www.youtube.com/watch?v=C4GYNVlxU30)

Orchard Core OpenID Connect Code Flow Api Authorization With A BlazorWASM Client CRUD App

[](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DC3-_51u9IlU%26fbclid%3DIwAR2zrf3fQJ_8PpGoqT2q8CkjZ-_GFCWJxZQwyCYWAAaqTDHyz-lg2R6Eqys&h=AT08pYuDCg0oa-OIofGYDs2JyMJuAHNiE6D9xzB2RWLAtvyoNLvrD8qDaQjl3vrsB0JUhYDewnWEPPKP17LhYqevIC6Cra3k2y1LLRybMQpihqUNjoN7Q_9ljxq8zlzlVyng1fg1XzXglH5FAQ&__tn__=-UK-R&c%5B0%5D=AT0L-kMHTHpVkFTZD5zU3xo9_T50Wh9t2tppyh9lv0SYzKLp07zHLZLHEYeTzcwzYGwuuT2eeYjGGV0eME_lLy_WAe4ZaKEYdu1_hGQPAcab-vRrJm4-nytxmA4qfewxc8dmM_IUUCZMwEoAADlG-oVqNvQHJZUoOG4zI-JpIy1nWdc)[https://www.youtube.com/watch?v=C3-_51u9IlU](https://www.youtube.com/watch?v=C3-_51u9IlU)

Orchard Core OpenID Connect Code Flow API Authorization with a React Client CRUD Application

[](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-MCjLcu-eOE%26fbclid%3DIwAR29WHwKtfYWyOPrISJN3aXkOiQVX-q5hihURrdCBek2-cPV0wMyWw_Uzpo&h=AT1toZhMj5Mr8FYsUAg-hfZ4kHwy75eKdnveKM6kv_jzBvgCMBwVpV8VjodlsvFP175g5C0Okn2bsoufbXaV7T3cHZK2TAcNfQwAofOhAZj4n3HAP7dcsWqSuxwEvU_-pwmsNU5Ai_xyHRTGeg&__tn__=-UK-R&c%5B0%5D=AT0L-kMHTHpVkFTZD5zU3xo9_T50Wh9t2tppyh9lv0SYzKLp07zHLZLHEYeTzcwzYGwuuT2eeYjGGV0eME_lLy_WAe4ZaKEYdu1_hGQPAcab-vRrJm4-nytxmA4qfewxc8dmM_IUUCZMwEoAADlG-oVqNvQHJZUoOG4zI-JpIy1nWdc)[https://www.youtube.com/watch?v=-MCjLcu-eOE](https://www.youtube.com/watch?v=-MCjLcu-eOE)

Orchard Core OpenID Connect Code Flow API Authorization with a Vue.js Client CRUD Application

[](https://www.youtube.com/watch?v=k1xje-reHIY&fbclid=IwAR35VJCU9Q_BvaZM8KgrubIAS5Y3wfeSCozse-_NlfhoF_g0UpkItlDr0r4)[https://www.youtube.com/watch?v=k1xje-reHIY](https://www.youtube.com/watch?v=k1xje-reHIY)

OpenID Connect Authorization in a Blazor WebAssembly Application

[](https://www.youtube.com/watch?v=ZxZJ3BtDAxU&fbclid=IwAR1Q9hhcGMJY2Lq1WmaJQ9JO-Xo74KFhDZYrD_FGT_60wUgXdd6e3VmObP4)[https://www.youtube.com/watch?v=ZxZJ3BtDAxU](https://www.youtube.com/watch?v=ZxZJ3BtDAxU)

Orchard Core OpenID Connect Code Flow API Authorization with an Angular Client CRUD Application

[](https://www.youtube.com/watch?v=q687F0ltGJo&fbclid=IwAR1Hx5lbKHOt_lvuOMgpDgUAs1lzqmdkZ2ZZ_Zl5VI2xiVKt65H-KvBo5Vc)[https://www.youtube.com/watch?v=q687F0ltGJo](https://www.youtube.com/watch?v=q687F0ltGJo)

ตอนขอ access token จะใช้ URL /connect/token

เราจะไม่เจอ ConnectController และ Token action method

ใน OrchardCMS เนื่องจาก OrchardCore จะไปเรียกใช้ผ่าน OpenIddict ครับ

Link อื่นๆ ที่มีประโยชน์

OpenId VS OAuth

[](https://l.facebook.com/l.php?u=https%3A%2F%2Fstackoverflow.com%2Fa%2F1087071%2F1872200%3Ffbclid%3DIwAR2zrf3fQJ_8PpGoqT2q8CkjZ-_GFCWJxZQwyCYWAAaqTDHyz-lg2R6Eqys&h=AT1jshbZUOBxO4Mb3Vp3yjZddD2ulEj1MrOc2PufUBj_zoIPkxaFs98X4F2fFcWjAsrjeuc4mMeJuD1tQznrNA9se8BDmfPu9MakB9z3aMioO99Ih65CIVq9R7Q_U0k3_pNAkbMmdjglRYUEYw&__tn__=-UK-R&c%5B0%5D=AT0L-kMHTHpVkFTZD5zU3xo9_T50Wh9t2tppyh9lv0SYzKLp07zHLZLHEYeTzcwzYGwuuT2eeYjGGV0eME_lLy_WAe4ZaKEYdu1_hGQPAcab-vRrJm4-nytxmA4qfewxc8dmM_IUUCZMwEoAADlG-oVqNvQHJZUoOG4zI-JpIy1nWdc)[https://stackoverflow.com/a/1087071/1872200](https://stackoverflow.com/a/1087071/1872200)

OpenIddict library

[](https://github.com/openiddict/openiddict-core?fbclid=IwAR1P2ul4JifgsCTOVF1u74Huk-4DAONoW80OgESjflDuhS3G-MLRrCpumf4)[https://github.com/openiddict/openiddict-core](https://github.com/openiddict/openiddict-core)

Setting up an Authorization Server with OpenIddict - Part 1 - 6

[](https://dev.to/robinvanderknaap/setting-up-an-authorization-server-with-openiddict-part-i-introduction-4jid?fbclid=IwAR29WHwKtfYWyOPrISJN3aXkOiQVX-q5hihURrdCBek2-cPV0wMyWw_Uzpo)[https://dev.to/.../setting-up-an-authorization-server](https://dev.to/.../setting-up-an-authorization-server)...

[](https://dev.to/robinvanderknaap/setting-up-an-authorization-server-with-openiddict-part-ii-create-aspnet-project-4949?fbclid=IwAR1_TBHYQLXbIaOIne3EiqCvOTNgNJzMCzx-f_B-ZEw6cy5fiEm_IZH4k7c)[https://dev.to/.../setting-up-an-authorization-server](https://dev.to/.../setting-up-an-authorization-server)...

[](https://dev.to/robinvanderknaap/setting-up-an-authorization-server-with-openiddict-part-iii-client-credentials-flow-55lp?fbclid=IwAR2O5SgB4BaA4wLwRsx2kNUoUACP0XqDOmnpMC42ReSOb26OJ-m3ImX1c2E)[https://dev.to/.../setting-up-an-authorization-server](https://dev.to/.../setting-up-an-authorization-server)...

[](https://dev.to/robinvanderknaap/setting-up-an-authorization-server-with-openiddict-part-iv-authorization-code-flow-3eh8?fbclid=IwAR0jLDgpiafp50Oe1EIjncV-A7RsigIxWRO4iG6J8pYpYY1mf16Sdv8r4gs)[https://dev.to/.../setting-up-an-authorization-server](https://dev.to/.../setting-up-an-authorization-server)...

[](https://dev.to/robinvanderknaap/setting-up-an-authorization-server-with-openiddict-part-v-openid-connect-a8j?fbclid=IwAR2jYkNffApAoI32iFusCAQa-4lhVgXS_AydjL5V_q2-RZz9bk22DqpcnpU)[https://dev.to/.../setting-up-an-authorization-server](https://dev.to/.../setting-up-an-authorization-server)...

[](https://dev.to/robinvanderknaap/setting-up-an-authorization-server-with-openiddict-part-vi-refresh-tokens-5669?fbclid=IwAR3g6oJZ2LEyHdgA33z12x2yXPJQm_DXllbbaYu5nNT4JQyAxyFIdtNwpRY)[https://dev.to/.../setting-up-an-authorization-server](https://dev.to/.../setting-up-an-authorization-server)...

credit admin ป้องครับ Wittawat Karpkrikaew

Other resource

[Using the OrchardCore OpenID management feature with an existing OpenIddict deployment](https://kevinchalet.com/2020/10/03/using-the-orchardcore-openid-management-feature-with-an-existing-openiddict-deployment/)

[Implementing an OpenIddict Authorization server: Social Login with GitHub](https://www.jerriepelser.com/blog/implementing-openiddict-authorization-server-part-2/)

[Implementing an OpenIddict Authorization server: A Basic Authorization Server](https://www.jerriepelser.com/blog/implementing-openiddict-authorization-server-part-1)

[Creating an OpenID Connect server proxy with OpenIddict 3.0's degraded mode](https://kevinchalet.com/2020/02/18/creating-an-openid-connect-server-proxy-with-openiddict-3-0-s-degraded-mode/?fbclid=IwAR1XnLTNeBi5cFEhcNRHOgNt8d1LwzL753GHFcbxoyocb_mmxvkqlWQnb5Q)