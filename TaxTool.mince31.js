function ValidateAndFormatNumberControl(n) {
    var t = n.value;
    t = t.replace(/,/g, "");
    t += "";
    x = t.split(".");
    x1 = x[0];
    x2 = x.length > 1 ? "." + x[1] : "";
    for (var i = /(\d+)(\d{3})/, r = 0, f = String(x1).length, u = parseInt(f / 2 - 1); i.test(x1);)
        if (r > 0 ? x1 = x1.replace(i, "$1,$2") : (x1 = x1.replace(i, "$1,$2"), i = /(\d+)(\d{2})/), r++, u--, u == 0) break;
    n.value = x1 + x2
}
function chkIntInput(n, t) {
    try {
        if (n.readOnly == !0) return !0;
        var i, r;
        if (window.event) i = window.event.keyCode;
        else if (t) i = t.which;
        else return !0;
        return i == 46 ? !1 : i == null || i == 0 || i == 8 || i == 13 || i == 27 || i == 46 ? !0 : (r = String.fromCharCode(i), /\d/.test(r) ? (window.status = "", !0) : (window.status = "Field accepts numbers only.", !1))
    } catch (u) {
        alert("An error has occurred: " + u.message)
    }
}

function getNum(n) {
    try {
        var i = n.toString(),
            t = i.replace(/,/g, "");
        return n = t, isNaN(Number(n)) || n == "" ? 0 : Number(n)
    } catch (r) {
        alert("An error has occurred: Module-getNum:" + t + r.message)
    }
}

function addthousandseprator(n) {
    n += "";
    x = n.split(".");
    x1 = x[0];
    x2 = x.length > 1 ? "." + x[1] : "";
    for (var t = /(\d+)(\d{3})/, i = 0, u = String(x1).length, r = parseInt(u / 2 - 1); t.test(x1);)
        if (i > 0 ? x1 = x1.replace(t, "$1,$2") : (x1 = x1.replace(t, "$1,$2"), t = /(\d+)(\d{2})/), i++, r--, r == 0) break;
    return x1 + x2
}
function setStatuscombojs(n, t, i, r, u) {
    n.value == "Individual" ? (t.style.display = "", i == !1 && (r.style.display = "", u.readOnly = !0)) : (t.style.display = "none", i == !1 && (r.style.display = "none", u.readOnly = !1))
}

function calculateDatajs(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot, st, ht, ct, lt, at, vt, yt, pt, wt, bt) {
  n == "2021-22" && calculateData202122(n, t, i, r, u, f, e, o, s, h, c, l, a, v, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot, st, ht, ct, lt, y, p, at, vt, yt, pt, wt, bt)
}

function calculateData202122(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot, st, ht, ct, lt, at, vt, yt, pt, wt, bt) {
    var kt = 0,
        gt = 0,
        ti = 0,
        ii = 0,
        ei = 0,
        dt = parseInt(getNum(r.value)),
        fi = 0,
        ri = 0,
        hi, ki, oi, si, ci, vi, ni, b;
    if (b == undefined && (b = 0), hi = ht != undefined ? parseInt(getNum(st.value)) : 0, ki = k != undefined ? parseInt(getNum(k.value)) : 0, t == "Domestic Company") oi = 0, si = 0, v.checked == !0 ? (kt = dt * .25, oi = 2500000, si = 25000000) : c.checked == !0 ? (kt = dt * .25, oi = 2500000, si = 25000000) : l ? (kt = dt * .22, oi = 2500000, si = 25000000) : a ? (kt = dt * .15, oi = 2500000, si = 25000000) : (kt = dt * .3, oi = 3e6, si = 3e7), kt = Math.round(kt, 0), dt > 10000000 && dt <= 100000000 ? (adjustablesurcharge = kt * .07, kt + adjustablesurcharge > oi + (dt - 10000000) ? (marginalrelief = kt + adjustablesurcharge - (oi + (dt - 10000000)), gt = adjustablesurcharge - marginalrelief) : gt = adjustablesurcharge, gt = Math.round(gt, 0)) : dt > 100000000 && (adjustablesurcharge = kt * .12, kt + adjustablesurcharge > si * 1.07 + (dt - 100000000) ? (marginalrelief = kt + adjustablesurcharge - (si * 1.07 + (dt - 100000000)), gt = adjustablesurcharge - marginalrelief) : gt = adjustablesurcharge, gt = Math.round(gt, 0)), l ? gt = kt * .1 : a && (gt = kt * .1), ti = (kt + gt) * 0, ii = (kt + gt) * .04;
    else if (t == "Individual") {
        if (ci = 0, vi = 0, ot == !1) {
            var ui = parseInt(getNum(y.value)),
                li = 0,
                yi = parseInt(getNum(w.value));
            li = ui;
            ui > p && yi > 5e3 && (ui = ui + yi);
            ui = ui - (Math.min(hi, b) + Math.min(parseInt(getNum(k.value)), b) + parseInt(getNum(d.value)) + parseInt(getNum(g.value)) + parseInt(getNum(nt.value)));
            li = li - (Math.min(hi, b) + Math.min(parseInt(getNum(k.value)), b) + parseInt(getNum(d.value)) + parseInt(getNum(g.value)) + parseInt(getNum(nt.value)));
            fi = Math.min(hi, b) + Math.min(parseInt(getNum(k.value)), b) + parseInt(getNum(d.value)) + parseInt(getNum(g.value)) + parseInt(getNum(nt.value));
            ui < 0 && (ui = 0);
            li < 0 && (li = 0);
            tt.value = addthousandseprator(li);
            kt = ui > p && yi > 5e3 ? calcindividualTax202122(ui, n, u, i, ct) - calcindividualTax202122(p + yi, n, u, i, ct) : calcindividualTax202122(ui, n, u, i, ct);
            kt < 0 && (kt = 0);
            kt = Math.round(kt, 0);
            it.value = addthousandseprator(kt);
            ht != undefined ? (kt = kt + parseInt(getNum(rt.value)) + parseInt(getNum(ut.value)) + parseInt(getNum(ft.value)) + parseInt(getNum(et.value)) + parseInt(getNum(ht.value)), ri = parseInt(getNum(rt.value)) + parseInt(getNum(ut.value)) + parseInt(getNum(ft.value)) + parseInt(getNum(et.value)) + parseInt(getNum(ht.value)), ci = parseInt(getNum(at.value)) + parseInt(getNum(vt.value)) + parseInt(getNum(yt.value)) + parseInt(getNum(pt.value)) + parseInt(getNum(wt.value))) : (kt = kt + parseInt(getNum(rt.value)) + parseInt(getNum(ut.value)) + parseInt(getNum(ft.value)) + parseInt(getNum(et.value)), ri = parseInt(getNum(rt.value)) + parseInt(getNum(ut.value)) + parseInt(getNum(ft.value)) + parseInt(getNum(et.value)));
            u != "Non-Resident" && dt <= 500000 && (kt = ht != undefined ? Math.max(kt - parseInt(getNum(ht.value)) - 12500, 0) : Math.max(+kt - 12500, 0), kt = ht != undefined ? kt + parseInt(getNum(ht.value)) : kt)
        } else fi = 0, ri = 0, kt = calcindividualTax202122(dt, n, u, i, ct), u != "Non-Resident" && dt <= 500000 && (kt = ht != undefined ? Math.max(kt - parseInt(getNum(ht.value)) - 12500, 0) : Math.max(+kt - 12500, 0), kt = ht != undefined ? kt + parseInt(getNum(ht.value)) : kt);
        kt < 0 && (kt = 0);
        kt = Math.round(kt, 0);
        var pi = 0,
            wi = 0,
            ai = 0,
            bi = 0;
        f.value = kt;
        dt - (Math.min(hi, b) + Math.min(ki, b)) > 50000000 ? (ei = bt == undefined ? 50000000 : parseInt(getNum(bt.value)), ai = ft == undefined ? ht != undefined ? parseInt(getNum(ht.value)) + parseInt(getNum(ft.value)) : 0 : ht != undefined ? parseInt(getNum(ht.value)) + parseInt(getNum(ft.value)) : parseInt(getNum(ft.value)), bi = kt - ai, pi = ai * .15, wi = bi * .37, vi = yt == undefined ? wt != undefined ? parseInt(getNum(wt.value)) + parseInt(getNum(yt.value)) : 0 : wt != undefined ? parseInt(getNum(wt.value)) + parseInt(getNum(yt.value)) : parseInt(getNum(yt.value)), adjustablesurcharge = pi + wi, ni = kt + adjustablesurcharge, b = (calcindividualTax202122(ei, n, u, i, ct) + (ci - vi)) * 1.25 + vi * 1.15 + (dt - 50000000), ni > b ? (marginalrelief = ni - b, gt = adjustablesurcharge - marginalrelief) : gt = adjustablesurcharge, gt = Math.round(gt, 0)) : dt - (Math.min(hi, b) + Math.min(ki, b)) > 20000000 ? (ei = bt == undefined ? 20000000 : parseInt(getNum(bt.value)), ai = ft == undefined ? ht != undefined ? parseInt(getNum(ht.value)) + parseInt(getNum(ft.value)) : 0 : ht != undefined ? parseInt(getNum(ht.value)) + parseInt(getNum(ft.value)) : parseInt(getNum(ft.value)), bi = kt - ai, pi = ai * .15, wi = bi * .25, adjustablesurcharge = pi + wi, ni = kt + adjustablesurcharge, b = (calcindividualTax202122(ei, n, u, i, ct) + ci) * 1.15 + (dt - 20000000), ni > b ? (marginalrelief = ni - b, gt = adjustablesurcharge - marginalrelief) : gt = adjustablesurcharge, gt = Math.round(gt, 0)) : dt > 10000000 ? (ei = bt == undefined ? 10000000 : parseInt(getNum(bt.value)), adjustablesurcharge = kt * .15, ni = kt + adjustablesurcharge, b = (calcindividualTax202122(ei, n, u, i, ct) + ci) * 1.1 + (dt - 10000000), ni > b ? (marginalrelief = ni - b, gt = adjustablesurcharge - marginalrelief) : gt = adjustablesurcharge, gt = Math.round(gt, 0)) : dt > 5000000 && (ei = bt == undefined ? 5000000 : parseInt(getNum(bt.value)), adjustablesurcharge = kt * .1, ni = kt + adjustablesurcharge, b = calcindividualTax202122(ei, n, u, i, ct) + (dt - 5000000) + ci, ni > b ? (marginalrelief = ni - b, gt = adjustablesurcharge - marginalrelief) : gt = adjustablesurcharge, gt = Math.round(gt, 0));
        ti = (kt + gt) * 0;
        ii = (kt + gt) * .04
    }
    ti = Math.round(ti, 0);
    ii = Math.round(ii, 0);
    f.value = addthousandseprator(kt);
    e.value = addthousandseprator(gt);
    o.value = addthousandseprator(ti);
    s.value = addthousandseprator(ii);
    h.value = addthousandseprator(kt + gt + ti + ii)
}
function lockcontrol() {
    return !1
}

function calcindividualTax202122(n, t, i, r, u) {
    try {
        if (n < 0) return n = 0, 0;
        var f = 0;
        return t == "2021-22" && (u == "1" ? n <= 250000 ? f = 0 : n > 250000 && n <= 500000 ? f = (n - 250000) * .05 : n > 500000 && n <= 750000 ? f = (n - 500000) * .1 + 12500 : n > 750000 && n <= 1000000 ? f = (n - 750000) * .15 + 37500 : n > 1000000 && n <= 1250000 ? f = (n - 1000000) * .2 + 75000 : n > 1250000 && n <= 1500000 ? f = (n - 1250000) * .25 + 125000 : n > 1500000 && (f = (n - 1500000) * .3 + 187500) : r == "Senior Citizen" && (i == "Resident" || i == "Not Ordinary Resident") ? n <= 300000 ? f = 0 : n > 300000 && n <= 500000 ? f = (n - 300000) * .05 : n > 500000 && n <= 1000000 ? f = (n - 500000) * .2 + 10000 : n > 1000000 && (f = (n - 1000000) * .3 + 110000) : r == "Super Senior Citizen" && (i == "Resident" || i == "Not Ordinary Resident") ? n <= 500000 ? f = 0 : n > 500000 && n <= 1000000 ? f = (n - 500000) * .2 : n > 1000000 && (f = (n - 1000000) * .3 + 100000) : n <= 250000 ? f = 0 : n > 250000 && n <= 500000 ? f = (n - 250000) * .05 : n > 500000 && n <= 1000000 ? f = (n - 500000) * .2 + 12500 : n > 1000000 && (f = (n - 1000000) * .3 + 112500)), f
    } catch (e) {
        alert("An error has occurred: Module-IndividaulTax :" + e.message)
    }
}

function calcHPjs(n, t, i, r, u, f, e, o, s, h, c, l) {
    t.value = addthousandseprator(parseInt(getNum(i.value)) * -1);
    var a = parseInt(getNum(t.value));
    r.value = addthousandseprator(parseInt(getNum(u.value)) - (parseInt(getNum(f.value)) + parseInt(getNum(e.value))));
    o.value = addthousandseprator(parseInt(getNum(r.value)) * .3);
    o.value < 0 && (o.value = 0);
    s.value = addthousandseprator(parseInt(getNum(r.value)) - (parseInt(getNum(o.value)) + parseInt(getNum(h.value))));
    n == "2021-22" ? a < -200000 && (a = -200000) : a < -150000 && (a = -150000);
    c.value = l == "1" && parseInt(getNum(s.value)) < 0 ? 0 : addthousandseprator(a + parseInt(getNum(s.value)))
}

function calcCGjs(n, t, i, r, u, f) {
    n.value = addthousandseprator(parseInt(getNum(t.value)) + parseInt(getNum(i.value)) + parseFloat(getNum(r.value)) + parseFloat(getNum(u.value)) + parseFloat(getNum(f.value)))
}

function calcOSjs(n, t, i, r, u) {
    n.value = u === undefined ? addthousandseprator(parseInt(getNum(t.value)) + parseFloat(getNum(i.value)) + parseFloat(getNum(r.value))) : addthousandseprator(parseInt(getNum(t.value)) + parseFloat(getNum(i.value)) + parseFloat(getNum(r.value)) + parseFloat(getNum(u.value)))
}

function calcdeductionjs(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot, st, ht, ct, lt, at) {
    var yt = 0,
        ri = 0,
        ci = n.value,
        vt = t.value,
        pt, wt;
    typeof vt == "undefined" && (vt = "2021-22");
    var ni = parseInt(getNum(i.value)),
        kt = parseInt(getNum(r.value)),
        bt = parseInt(getNum(u.value)),
        ti = parseInt(getNum(f.value)),
        ui = parseInt(getNum(e.value)),
        dt = parseInt(getNum(o.value)),
        oi = parseInt(getNum(s.value)),
        si = parseInt(getNum(h.value)),
        ii = parseInt(getNum(ot.value)),
        gt = parseInt(getNum(st.value)),
        hi = parseInt(getNum(lt.value)),
        fi = parseInt(getNum(ht.value)),
        ei = parseInt(getNum(ct.value));
    (vt == "2020-21" || vt == "2021-22") && fi > 150000 && (fi = 150000);
    (vt == "2020-21" || vt == "2021-22") && ei > 150000 && (ei = 150000);
    vt == "2020-21" || vt == "2021-22" || vt == "2022-23" ? ii > 50000 && (ii = 50000) : ii = 0;
    vt == "2020-21" || vt == "2021-22" || vt == "2022-23" ? gt > 8e4 && (gt = 8e4) : gt > 60000 && (gt = 60000);
    ni > 20000 && (ni = 20000);
    vt == "2020-21" || vt == "2021-22" ? ri = 1200000 : vt == "2013-14" && (ri = 1000000);
    kt = at <= ri ? kt * .5 > 25000 ? 25000 : Math.round(kt * .5) : 0;
    vt == "2019-20" || vt == "2020-21" || vt == "2021-22" ? bt > 100000 && (bt = 100000) : vt == "2016-17" || vt == "2017-18" || vt == "2018-19" ? bt > 60000 && (bt = 60000) : bt > 4e4 && (bt = 4e4);
    ti > 10000 && (ti = 10000);
    (vt == "2019-20" || vt == "2020-21" || vt == "2021-22") && ui > 50000 && (ui = 50000);
    ci == "Non-Resident" && (oi = 0, si = 0, kt = 0, gt = 0);
    vt != "2020-21" && vt != "2021-22" && (dt = 0);
    vt == "2020-21" || vt == "2021-22" ? dt > 50000 && (dt = 50000) : dt > 100000 && (dt = 100000);
    vt == "2019-20" || vt == "2020-21" || vt == "2021-22" || vt == "2022-23" ? (pt = getNum(nt.value), pt > 150000 && (pt = 150000), wt = parseInt(getNum(d.value)), wt > 150000 && (wt = 150000), yt = parseInt(getNum(c.value)) + parseInt(getNum(l.value)) + parseInt(getNum(a.value)) + parseInt(getNum(v.value)) + parseInt(getNum(y.value)) + parseInt(getNum(p.value)) + parseInt(getNum(w.value)) + parseInt(getNum(b.value)) + parseInt(getNum(k.value)) + parseInt(getNum(wt)) + parseInt(getNum(g.value)) + parseInt(getNum(pt)) + parseInt(getNum(hi)), yt > 150000 && (yt = 150000), yt = yt + parseInt(getNum(tt.value))) : (yt = parseInt(getNum(c.value)) + parseInt(getNum(l.value)) + parseInt(getNum(a.value)) + parseInt(getNum(v.value)) + parseInt(getNum(y.value)) + parseInt(getNum(p.value)) + parseInt(getNum(w.value)) + parseInt(getNum(b.value)) + parseInt(getNum(k.value)) + parseInt(getNum(d.value)) + parseInt(getNum(nt.value)) + parseInt(getNum(g.value)) + parseInt(getNum(tt.value)), yt > 100000 && (yt = 100000));
    it.value = addthousandseprator(yt + ni + kt + ii);
    rt.value = addthousandseprator(parseInt(getNum(it.value)) + bt + ti + ui + parseInt(getNum(ut.value)) + oi + parseInt(getNum(ft.value)) + si + dt + gt + fi + ei + parseInt(getNum(et.value)))
}

function calc80ddjs(n, t, i, r) {
    try {
        var u = n.value;
        typeof u == "undefined" && (u = "2020-21");
        r.value = t.checked == !0 ? i.checked == !0 ? u == "2022-23" || u == "2021-22" || u == "2020-21" || u == "2019-20" ? addthousandseprator(125000) : addthousandseprator(100000) : u == "2022-23" || u == "2021-22" || u == "2020-21" || u == "2019-20" ? addthousandseprator(75000) : addthousandseprator(50000) : 0
    } catch (f) {
        alert("An error has occurred: Module-80DD :" + f.message)
    }
}

function calc80ujs(n, t, i, r) {
    try {
        var u = n.value;
        typeof u == "undefined" && (u = "2021-22");
        r.value = t.checked == !0 ? i.checked == !0 ? u == "2022-23" || u == "2021-22" || u == "2020-21" || u == "2019-20" ? addthousandseprator(125000) : addthousandseprator(100000) : u == "2022-23" || u == "2021-22" || u == "2020-21" || u == "2019-20" ? addthousandseprator(75000) : addthousandseprator(50000) : 0
    } catch (f) {
        alert("An error has occurred: Module-80U :" + f.message)
    }
}

function calcTotalIncomejs(n, t, i, r, u, f, e) {
    try {
        var o = 0;
        return o = f - (parseInt(getNum(t.value)) + parseInt(getNum(i.value)) + parseInt(getNum(r.value)) + parseInt(getNum(e.value)) + parseInt(getNum(n.value))), y = parseInt(getNum(u.value)), o > y ? f - y : f - o
    } catch (s) {
        alert("An error has occurred: Module-calcTotalIncome:" + s.message)
    }
}

function exemptionlimit(n, t, i, r) {
    try {
      
        if (t == "2021-22" && r == "1") {
            if (n == "Resident" || n == "Not Ordinary Resident") return 250000
        } else if (t == "2020-21" || t == "2021-22") return i == "Senior Citizen" && (n == "Resident" || n == "Not Ordinary Resident") ? 300000 : i == "Super Senior Citizen" && (n == "Resident" || n == "Not Ordinary Resident") ? 500000 : 250000
    } catch (u) {
        alert("An error has occurred: Module-ExemptionLimit:" + u.message)
    }
}

function calcYjs(n, t, i, r, u, f) {
    var o = parseInt(getNum(n.value)),
        s = parseInt(getNum(t.value)),
        e = parseInt(getNum(i.value)),
        h = parseInt(getNum(r.value)) + parseInt(getNum(u.value));
    return f - (e + Math.min(h + o + s, f - e))
}

function calcSpecialIncomeTaxjs(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft) {
    var et, p, li;
    try {
        var st = 0,
            ai = 0,
            ai = parseInt(getNum(n.value)),
            ii = 0,
            ri = 0,
            ui = 0,
            fi = 0,
            ei = 0,
            si = 0,
            ot = 0,
            vi = 0,
            v = 0,
            ht = 0,
            ct = 0,
            pt = 0,
            hi = 0,
            wt = 0,
            ci = 0,
            bt = 0,
            kt = 0,
            lt = 0,
            at = 0,
            vt = 0,
            yt = 0;
        wt = parseInt(getNum(t.value));
        ci = parseInt(getNum(k.value));
        et = b - (parseInt(getNum(k.value)) + parseInt(getNum(t.value)) + parseInt(getNum(r.value)) + parseInt(getNum(u.value)) + parseInt(getNum(n.value)));
        kt = parseInt(getNum(r.value));
        bt = parseInt(getNum(u.value));
        vi = parseInt(getNum(k.value)) + parseInt(getNum(t.value)) + parseInt(getNum(r.value)) + parseInt(getNum(u.value)) + parseInt(getNum(n.value));
        var oi = 0,
            dt = 0,
            gt = 0,
            ni = 0,
            ti = 0;
        b > 50000000 ? st = 50000000 : b > 20000000 ? st = 20000000 : b > 10000000 ? st = 10000000 : b > 5000000 && (st = 5000000);
        st > 0 ? (ii = b - st, oi = Math.max(parseInt(getNum(n.value)) - ii, 0), ri = Math.max(ii - parseInt(getNum(n.value)), 0), ot = Math.max(parseInt(et) - ri, 0), ui = Math.max(ri - et, 0), dt = Math.max(parseInt(getNum(r.value)) - ui, 0), fi = Math.max(ui - kt, 0), gt = Math.max(parseInt(getNum(t.value)) - fi, 0), ei = Math.max(fi - wt, 0), ni = Math.max(parseInt(getNum(u.value)) - ei, 0), si = Math.max(ei - bt, 0), ti = Math.max(parseInt(getNum(k.value)) - si, 0)) : (oi = parseInt(getNum(n.value)), ot = et, dt = parseInt(getNum(r.value)), gt = parseInt(getNum(t.value)), ni = parseInt(getNum(u.value)), ti = parseInt(getNum(k.value)));
        p = p;
        et < 0 && (et = 0);
        f.value = ai;
        w == "Resident" || w == "Not Ordinary Resident" ? et < y ? (ht = y - et, v = Math.max(ht - kt, 0), ct = Math.max(v - wt, 0), pt = Math.max(ct - bt, 0)) : (ht = 0, v = 0, ct = 0, pt = 0) : (ht = 0, v = 0, ct = 0, pt = 0);
        p = p;
        ot < 0 && (ot = 0);
        w == "Resident" || w == "Not Ordinary Resident" ? ot < y ? (lt = y - ot, at = Math.max(lt - dt, 0), vt = Math.max(at - gt, 0), yt = Math.max(vt - ni, 0)) : (lt = 0, at = 0, vt = 0, yt = 0) : (lt = 0, at = 0, vt = 0, yt = 0);
        h.value = addthousandseprator(Math.round(parseInt(getNum(f.value)) * .3, 0));
        nt.value = addthousandseprator(Math.round(parseInt(getNum(oi)) * .3, 0));
        o.value = addthousandseprator(Math.max(bt - ct, 0));
        li = addthousandseprator(Math.max(ni - vt, 0));
        c.value = addthousandseprator(Math.round(parseInt(getNum(o.value)) * .1, 0));
        tt.value = addthousandseprator(Math.round(parseInt(getNum(li)) * .1, 0));
        e.value = Math.max(wt - v, 0);
        l.value = addthousandseprator(Math.round(parseInt(getNum(e.value)) * .15, 0));
        it.value = addthousandseprator(Math.round(parseInt(getNum(Math.max(gt - at, 0))) * .15, 0));
        s.value = Math.max(kt - ht, 0);
        a.value = addthousandseprator(Math.round(parseInt(getNum(s.value)) * .2, 0));
        rt.value = addthousandseprator(Math.round(parseInt(getNum(Math.max(dt - lt, 0))) * .2, 0));
        d.value = Math.max(ci - pt, 0);
        hi = Math.round(parseInt(getNum(d.value))) - Math.min(100000, Math.round(parseInt(getNum(d.value))));
        g.value = addthousandseprator(Math.round(parseInt(hi) * .1, 0));
        ut.value = addthousandseprator(Math.round(parseInt(Math.round(parseInt(getNum(Math.max(ti - yt, 0)))) - Math.min(100000, Math.round(parseInt(getNum(Math.max(ti - yt, 0)))))) * .1, 0));
        ft.value = ot
    } catch (yi) {
        alert("An error has occurred: Module-Special Income:" + yi.message)
    }
}
