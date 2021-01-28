(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{452:function(t,o,n){"use strict";n.r(o);var i=n(13),r=Object(i.a)({},(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"java-生产环境下性能监控与调优详解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#java-生产环境下性能监控与调优详解"}},[t._v("#")]),t._v(" JAVA 生产环境下性能监控与调优详解")]),t._v(" "),n("h2",{attrs:{id:"必备推荐"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#必备推荐"}},[t._v("#")]),t._v(" 必备推荐")]),t._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://github.com/zq99299/monitor-tuning.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("配套练习项目"),n("OutboundLink")],1)])]),t._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/troubleshoot/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JAVA 平台，标准版故障排除指南"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("里面列出了很多场景下的故障如何排除，比如死锁，内存溢出等")])])]),t._v(" "),n("h2",{attrs:{id:"目录导航"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目录导航"}},[t._v("#")]),t._v(" 目录导航")]),t._v(" "),n("ul",[n("li",[n("p",[n("RouterLink",{attrs:{to:"/monitor-tuning/00.html"}},[t._v("为什么要学习这课程？")])],1)]),t._v(" "),n("li",[n("p",[n("RouterLink",{attrs:{to:"/monitor-tuning/01/"}},[t._v("基于 JDK 命令行工具的监控")])],1),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/monitor-tuning/01/01.html"}},[t._v("JVM 参数类型")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/monitor-tuning/01/02.html"}},[t._v("查看运行时 JVM 参数")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/monitor-tuning/01/03.html"}},[t._v("查看 JVM 统计信息")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/monitor-tuning/01/04.html"}},[t._v("jmap + MAT 实战内存溢出")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/monitor-tuning/01/05.html"}},[t._v("jstack 实战死循环与死锁")])],1)])]),t._v(" "),n("li",[n("p",[n("RouterLink",{attrs:{to:"/monitor-tuning/02/"}},[t._v("基于 JVisualVM 的可视化监控")])],1),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/monitor-tuning/02/01.html"}},[t._v("监控本地 JAVA 进程")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/monitor-tuning/02/02.html"}},[t._v("监控远程 JAVA 进程")])],1)])]),t._v(" "),n("li",[n("p",[n("RouterLink",{attrs:{to:"/monitor-tuning/03/"}},[t._v("基于 Btrace 的监控调试")])],1),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/monitor-tuning/03/01.html"}},[t._v("Btrace 安装使用入门")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/monitor-tuning/03/02.html"}},[t._v("Btrace 使用详解")])],1)])]),t._v(" "),n("li",[n("p",[n("RouterLink",{attrs:{to:"/monitor-tuning/04/"}},[t._v("Tomcat 性能监控与调优")])],1),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/monitor-tuning/04/01.html"}},[t._v("Tomcat 远程 debug")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/monitor-tuning/04/02.html"}},[t._v("Tomcat-manager 监控 Tomcat")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/monitor-tuning/04/03.html"}},[t._v("psi-probe 监控 Tomcat")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/monitor-tuning/04/04.html"}},[t._v("Tomcat 调优")])],1)])]),t._v(" "),n("li",[n("p",[n("RouterLink",{attrs:{to:"/monitor-tuning/05/"}},[t._v("Nginx 性能监控与调优")])],1),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/monitor-tuning/05/01.html"}},[t._v("ngx_http_stub_status 监控链接信息")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/monitor-tuning/05/02.html"}},[t._v("ngxtop 监控请求信息")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/monitor-tuning/05/03.html"}},[t._v("nginx-rrd 图形化监控")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/monitor-tuning/05/04.html"}},[t._v("nginx 调优")])],1)])]),t._v(" "),n("li",[n("p",[n("RouterLink",{attrs:{to:"/monitor-tuning/06/"}},[t._v("JVM 层 GC 调优")])],1),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/monitor-tuning/06/01.html"}},[t._v("JVM 内存结构：基于 JDK 1.8")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/monitor-tuning/06/02.html"}},[t._v("垃圾回收算法")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/monitor-tuning/06/03.html"}},[t._v("垃圾收集器")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/monitor-tuning/06/04.html"}},[t._v("GC 日志格式与可视化日志分析工具")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/monitor-tuning/06/05.html"}},[t._v("Tomcat 的 GC 调优实战")])],1)])])])])}),[],!1,null,null,null);o.default=r.exports}}]);