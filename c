[33mcommit 4f768bdf127be114e47c4ead64a1b2ebf19cd2ae[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m, [m[1;31morigin/master[m[33m)[m
Author: xabi <j.alexis.p18@gmail.com>
Date:   Sun Jun 28 01:35:24 2020 -0500

    Components: about, contact, testimonial, landing -- routing

[1mdiff --git a/src/app/app-routing.module.ts b/src/app/app-routing.module.ts[m
[1mnew file mode 100644[m
[1mindex 0000000..a0237c3[m
[1m--- /dev/null[m
[1m+++ b/src/app/app-routing.module.ts[m
[36m@@ -0,0 +1,11 @@[m
[32m+[m[32mimport { NgModule } from '@angular/core';[m
[32m+[m[32mimport { Routes, RouterModule } from '@angular/router';[m
[32m+[m
[32m+[m
[32m+[m[32mconst routes: Routes = [];[m
[32m+[m
[32m+[m[32m@NgModule({[m
[32m+[m[32m  imports: [RouterModule.forRoot(routes)],[m
[32m+[m[32m  exports: [RouterModule][m
[32m+[m[32m})[m
[32m+[m[32mexport class AppRoutingModule { }[m
\ No newline at end of file[m
[1mdiff --git a/src/app/app.component.html b/src/app/app.component.html[m
[1mindex fdb26fb..90c6b64 100644[m
[1m--- a/src/app/app.component.html[m
[1m+++ b/src/app/app.component.html[m
[36m@@ -1,532 +1 @@[m
[31m-<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->[m
[31m-<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->[m
[31m-<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->[m
[31m-<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->[m
[31m-<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->[m
[31m-<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->[m
[31m-<!-- * * * * * * * to get started with your project! * * * * * * * * -->[m
[31m-<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->[m
[31m-[m
[31m-<style>[m
[31m-  :host {[m
[31m-    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";[m
[31m-    font-size: 14px;[m
[31m-    color: #333;[m
[31m-    box-sizing: border-box;[m
[31m-    -webkit-font-smoothing: antialiased;[m
[31m-    -moz-osx-font-smoothing: grayscale;[m
[31m-  }[m
[31m-[m
[31m-  h1,[m
[31m-  h2,[m
[31m-  h3,[m
[31m-  h4,[m
[31m-  h5,[m
[31m-  h6 {[m
[31m-    margin: 8px 0;[m
[31m-  }[m
[31m-[m
[31m-  p {[m
[31m-    margin: 0;[m
[31m-  }[m
[31m-[m
[31m-  .spacer {[m
[31m-    flex: 1;[m
[31m-  }[m
[31m-[m
[31m-  .toolbar {[m
[31m-    position: absolute;[m
[31m-    top: 0;[m
[31m-    left: 0;[m
[31m-    right: 0;[m
[31m-    height: 60px;[m
[31m-    display: flex;[m
[31m-    align-items: center;[m
[31m-    background-color: #1976d2;[m
[31m-    color: white;[m
[31m-    font-weight: 600;[m
[31m-  }[m
[31m-[m
[31m-  .toolbar img {[m
[31m-    margin: 0 16px;[m
[31m-  }[m
[31m-[m
[31m-  .toolbar #twitter-logo {[m
[31m-    height: 40px;[m
[31m-    margin: 0 16px;[m
[31m-  }[m
[31m-[m
[31m-  .toolbar #twitter-logo:hover {[m
[31m-    opacity: 0.8;[m
[31m-  }[m
[31m-[m
[31m-  .content {[m
[31m-    display: flex;[m
[31m-    margin: 82px auto 32px;[m
[31m-    padding: 0 16px;[m
[31m-    max-width: 960px;[m
[31m-    flex-direction: column;[m
[31m-    align-items: center;[m
[31m-  }[m
[31m-[m
[31m-  svg.material-icons {[m
[31m-    height: 24px;[m
[31m-    width: auto;[m
[31m-  }[m
[31m-[m
[31m-  svg.material-icons:not(:last-child) {[m
[31m-    margin-right: 8px;[m
[31m-  }[m
[31m-[m
[31m-  .card svg.material-icons path {[m
[31m-    fill: #888;[m
[31m-  }[m
[31m-[m
[31m-  .card-container {[m
[31m-    display: flex;[m
[31m-    flex-wrap: wrap;[m
[31m-    justify-content: center;[m
[31m-    margin-top: 16px;[m
[31m-  }[m
[31m-[m
[31m-  .card {[m
[31m-    border-radius: 4px;[m
[31m-    border: 1px solid #eee;[m
[31m-    background-color: #fafafa;[m
[31m-    height: 40px;[m
[31m-    width: 200px;[m
[31m-    margin: 0 8px 16px;[m
[31m-    padding: 16px;