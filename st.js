/* SCRIPT TUTORIAIS (st) beta Fevereiro 2021 por https://scripttutoriais.blogspot.com */
"use strict";
var st = {};
st.esconder = function (sel) {
    st.esconderElementos(st.pegaElementos(sel));
};
st.esconderElementos = function (elements) {
    var i, l = elements.length;
    for (i = 0; i < l; i++) {
        st.esconderElemento(elements[i]);
    }
};
st.esconderElemento = function (element) {
    st.estiloElemento(element, "display", "none");
};
st.mostrar = function (sel, a) {
    var elements = st.pegaElementos(sel);
    if (a) {st.esconderElementos(elements);}
    st.mostrarElementos(elements);
};
st.mostrarElementos = function (elements) {
    var i, l = elements.length;
    for (i = 0; i < l; i++) {
        st.mostrarElemento(elements[i]);
    }
};
st.mostrarElemento = function (element) {
    st.estiloElemento(element, "display", "block");
};
st.addEstilo = function (sel, prop, val) {
    st.estiloElementos(st.pegaElementos(sel), prop, val);
};
st.estiloElementos = function (elements, prop, val) {
    var i, l = elements.length;
    for (i = 0; i < l; i++) {    
        st.estiloElemento(elements[i], prop, val);
    }
};
st.estiloElemento = function (element, prop, val) {
    element.style.setProperty(prop, val);
};
st.escondermostrar = function (sel) {
    var i, x = st.pegaElementos(sel), l = x.length;
    for (i = 0; i < l; i++) {    
        if (x[i].style.display == "none") {
            st.estiloElemento(x[i], "display", "block");
        } else {
            st.estiloElemento(x[i], "display", "none");
        }
    }
};

st.addClasse = function (sel, name) {
    st.addClasseElementos(st.pegaElementos(sel), name);
};
st.addClasseElementos = function (elements, name) {
    var i, l = elements.length;
    for (i = 0; i < l; i++) {
        st.addClasseElemento(elements[i], name);
    }
};
st.addClasseElemento = function (element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
};
st.removeClasse = function (sel, name) {
    st.removeClasseElementos(st.pegaElementos(sel), name);
};
st.removeClasseElementos = function (elements, name) {
    var i, l = elements.length, arr1, arr2, j;
    for (i = 0; i < l; i++) {
        st.removeClasseElemento(elements[i], name);
    }
  };
st.removeClasseElemento = function (element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
    }
    element.className = arr1.join(" ");
  };
st.addRemoveClasse = function (sel, c1, c2) {
    st.addRemoveClasseElementos(st.pegaElementos(sel), c1, c2);
};
st.addRemoveClasseElementos = function (elements, c1, c2) {
    var i, l = elements.length;
    for (i = 0; i < l; i++) {    
        st.addRemoveClasseElemento(elements[i], c1, c2);
    }
};
st.addRemoveClasseElemento = function (element, c1, c2) {
    var t1, t2, t1Arr, t2Arr, j, arr, allPresent;
    t1 = (c1 || "");
    t2 = (c2 || "");
    t1Arr = t1.split(" ");
    t2Arr = t2.split(" ");
    arr = element.className.split(" ");
    if (t2Arr.length == 0) {
        allPresent = true;
        for (j = 0; j < t1Arr.length; j++) {
            if (arr.indexOf(t1Arr[j]) == -1) {allPresent = false;}
        }
        if (allPresent) {
            st.removeClasseElemento(element, t1);
        } else {
            st.addClasseElemento(element, t1);
        }
        } else {
            allPresent = true;
        for (j = 0; j < t1Arr.length; j++) {
            if (arr.indexOf(t1Arr[j]) == -1) {allPresent = false;}
        }
        if (allPresent) {
            st.removeClasseElemento(element, t1);
            st.addClasseElemento(element, t2);          
        } else {
            st.removeClasseElemento(element, t2);        
            st.addClasseElemento(element, t1);
        }
    }
};

st.pegaElementos = function (id) {
    if (typeof id == "object") {
        return [id];
    } else {
        return document.querySelectorAll(id);
    }
};

st.filtrarHTML = function(id, sel, filter) {
    var a, b, c, i, ii, iii, hit;
    a = st.pegaElementos(id);
    for (i = 0; i < a.length; i++) {
        b = a[i].querySelectorAll(sel);
        for (ii = 0; ii < b.length; ii++) {
            hit = 0;
            if (b[ii].innerText.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
                hit = 1;
            }
            c = b[ii].getElementsByTagName("*");
            for (iii = 0; iii < c.length; iii++) {
                if (c[iii].innerText.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
                    hit = 1;
                }
            }
            if (hit == 1) {
                b[ii].style.display = "";
            } else {
                b[ii].style.display = "none";
            }
        }
    }
};

st.organizarHTML = function(id, sel, sortvalue) {
    var a, b, i, ii, y, bytt, v1, v2, cc, j;
    a = st.pegaElementos(id);
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < 2; j++) {
            cc = 0;
            y = 1;
            while (y == 1) {
                y = 0;
                b = a[i].querySelectorAll(sel);
                for (ii = 0; ii < (b.length - 1); ii++) {
                    bytt = 0;
                    if (sortvalue) {
                        v1 = b[ii].querySelector(sortvalue).innerText;
                        v2 = b[ii + 1].querySelector(sortvalue).innerText;
                    } else {
                        v1 = b[ii].innerText;
                        v2 = b[ii + 1].innerText;
                    }
                    v1 = v1.toLowerCase();
                    v2 = v2.toLowerCase();
                    if ((j == 0 && (v1 > v2)) || (j == 1 && (v1 < v2))) {
                        bytt = 1;
                    break;
                }
            }
            if (bytt == 1) {
                b[ii].parentNode.insertBefore(b[ii + 1], b[ii]);
                y = 1;
                cc++;
            }
        }
            if (cc > 0) {break;}
        }
    }
};
st.slideshow = function (sel, ms, func) {
    var i, ss, x = st.pegaElementos(sel), l = x.length;
    ss = {};
    ss.current = 1;
    ss.x = x;
    ss.ondisplaychange = func;
    if (!isNaN(ms) || ms == 0) {
        ss.milliseconds = ms;
    } else {
        ss.milliseconds = 1000;
    }
    ss.start = function() {
        ss.display(ss.current)
        if (ss.ondisplaychange) {ss.ondisplaychange();}
        if (ss.milliseconds > 0) {
            window.clearTimeout(ss.timeout);
            ss.timeout = window.setTimeout(ss.next, ss.milliseconds);
        }
    };
    ss.proximo = function() {
        ss.current += 1;
        if (ss.current > ss.x.length) {ss.current = 1;}
        ss.start();
    };
    ss.anterior = function() {
        ss.current -= 1;
        if (ss.current < 1) {ss.current = ss.x.length;}
        ss.start();
    };
    ss.display = function (n) {
        st.estiloElementos(ss.x, "display", "none");
        st.estiloElemento(ss.x[n - 1], "display", "block");
    }
    ss.start();
    return ss;
};

st.incluirHTML = function(cb) {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("st-incluir-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Página não encontrada.";}
                    elmnt.removeAttribute("st-incluir-html");
                    st.incluirHTML(cb);
                }
            }      
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
    if (cb) cb();
};