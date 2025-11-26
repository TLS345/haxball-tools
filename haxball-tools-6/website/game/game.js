'use strict';
(function(pa) {

    let sld = true;
    let bjdau = false;
    let sldVar;
    document.addEventListener('keydown', function(event) {
      });
      
      function fpC(args, sendInfo) {
          var usageMessage = "Usage: /ping <off|+-number>";
      
          if (args.length == 2) {
              var value = args[1];
              
              if (value == "off") {
                  window.localStorage.removeItem("fakePing");
                  sendInfo("Fake Ping OFF");
              }
              else {
                  var lastChar = value.slice(-1);
      
                  // Constant ping
                  if (lastChar !== "+" && lastChar !== "-" && !isNaN(parseInt(value))) {
                      window.localStorage.setItem("fakePing", value);
                      sendInfo("Ping " + parseInt(value) + " msec");
                  }
                  // Increase/decrease ping
                  else if ((lastChar === "+" || lastChar === "-") && !isNaN(parseInt(value.slice(0, -1)))) {
                      window.localStorage.setItem("fakePing", value);
                      sendInfo("Ping " + ((lastChar === "+") ? "increased" : "decreased") + " by " + parseInt(value.slice(0, -1)) + " msec");
                  }
                  else {
                      sendInfo(usageMessage);
                  }
              }
          }
          else {
              sendInfo(usageMessage);
          }
      }
      

      function getFakePingValue(truePing) {
          var fakePing = window.localStorage.getItem("fakePing");
      
          if (fakePing == null) {
              return truePing;
          }
      
          var lastChar = fakePing.slice(-1);
          if (lastChar === "+") {
              return truePing + parseInt(fakePing.slice(0, -1));
          }
          else if (lastChar === "-") {
              return truePing - parseInt(fakePing.slice(0, -1));
          }
          else {
              return parseInt(fakePing);
          }
      }
      
      function getFakePingInfo(truePing) {
          var fakePing = window.localStorage.getItem("fakePing");
          
          if (fakePing == null) {
              return truePing.toString();
          }
          
          return truePing + " (" + getFakePingValue(truePing) + ")";
      }
      
      function getChatBubbleValue() {
          var chatIndicator = window.localStorage.getItem("chatBubble");
      
          if (chatIndicator == null) {
              return false;
          }
      
          return true;
      }
          
      function chatBubbleCommand(args, sendInfo) {
          var usageMessage = "Usage: /chatbubble <on|off>";
      
          if (args.length > 0) {
              var value = args[1] ?? window.localStorage.getItem("chatBubble") ? "off" : "on";
              
              if (value == "off") {
                  window.localStorage.removeItem("chatBubble");
                  sendInfo("Chat Desactivado");
              }
              else if (value == "on") {
                  window.localStorage.setItem("chatBubble", "on");
                  sendInfo("Chat Activado");
              }
              else {
                  sendInfo(usageMessage);
              }
          }
          else {
              sendInfo(usageMessage);
          }
      }
      
      function chatBubbleInfo(sendInfo) {
          if (getChatBubbleValue()) {
              sendInfo("Chat bubble Activated - Go to a team and use the Chat bubble");
          }
      }

    function ja() {
        return w.Me(this, "")
    }
    function M(a, b) {
        if (null == b)
            return null;
        null == b.ph && (b.ph = pa.Fj++);
        var c;
        null == a.qj ? a.qj = {} : c = a.qj[b.ph];
        null == c && (c = b.bind(a),
        a.qj[b.ph] = c);
        return c
    }
    function gc(a) {
        return 66 > a ? 66 : 400 < a ? 400 : a
    }
    class qa {
    }
    class ra {
        constructor() {
            this.ed = new Map
        }
        Sa(a, b) {
            this.ed.set(a, b)
        }
        v(a) {
            return this.ed.get(a)
        }
        kr(a) {
            this.ed.delete(a)
        }
        bp(a) {
            let b = []
              , c = this.ed.keys()
              , d = c.next();
            for (; !d.done; ) {
                let e = d.value;
                d = c.next();
                this.ed.get(e) == a && b.push(e)
            }
            return b
        }
        Ae() {
            let a = {}
              , b = this.ed.keys()
              , c = b.next();
            for (; !c.done; ) {
                let d = c.value;
                c = b.next();
                a[d] = this.ed.get(d)
            }
            return JSON.stringify(a)
        }
        static dg(a) {
            let b = new ra
              , c = zc.hn(a)
              , d = 0;
            for (; d < c.length; ) {
                let e = c[d];
                ++d;
                b.ed.set(e, a[e])
            }
            return b
        }
        static Lh(a) {
            return ra.dg(JSON.parse(a))
        }
        static sk() {
            let a = new ra;
            a.Sa("ArrowUp", "Up");
            a.Sa("KeyW", "Up");
            a.Sa("ArrowDown", "Down");
            a.Sa("KeyS", "Down");
            a.Sa("ArrowLeft", "Left");
            a.Sa("KeyA", "Left");
            a.Sa("ArrowRight", "Right");
            a.Sa("KeyD", "Right");
            a.Sa("KeyX", "Kick");
            a.Sa("Space", "Kick");
            a.Sa("ControlLeft", "Kick");
            a.Sa("ControlRight", "Kick");
            a.Sa("ShiftLeft", "Kick");
            a.Sa("ShiftRight", "Kick");
            a.Sa("Numpad0", "Kick");
            return a
        }
    }
    class sa {
        constructor() {
            this.Bc = -1;
            this.xn = null;
            this.fa = u.Oa;
            this.J = null;
            this.Ac = this.Zc = 0;
            this.Yb = !1;
            this.W = this.Y = 0;
            this.D = "Player";
            this.ah = this.Ab = 0;
            this.country = null;
            this.Ud = !1;
            this.Zb = this.Td = null;
            this.Nb = 0;
            this.fb = !1
        }
        wa(a) {
            a.m(this.fb ? 1 : 0);
            a.P(this.Nb);
            a.Fb(this.Zb);
            a.Fb(this.Td);
            a.m(this.Ud ? 1 : 0);
            a.Fb(this.country);
            a.P(this.ah);
            a.Fb(this.D);
            a.P(this.W);
            a.nb(this.Y);
            a.m(this.Yb ? 1 : 0);
            a.hj(this.Ac);
            a.m(this.Zc);
            a.m(this.fa.ba);
            a.hj(null == this.J ? -1 : this.J.Fl)
        }
        xa(a, b) {
            this.fb = 0 != a.F();
            this.Nb = a.N();
            this.Zb = a.Bb();
            this.Td = a.Bb();
            this.Ud = 0 != a.F();
            this.country = a.Bb();
            this.ah = a.N();
            this.D = a.Bb();
            this.W = a.N();
            this.Y = a.Cb();
            this.Yb = 0 != a.F();
            this.Ac = a.vi();
            this.Zc = a.F();
            let c = a.wf();
            this.fa = 1 == c ? u.ia : 2 == c ? u.Da : u.Oa;
            a = a.vi();
            this.J = 0 > a ? null : b[a]
        }
        Rs() {
            let a = qa.Bc
              , b = this.xn;
            this.Bc != a && (null == b && (this.xn = b = new sa),
            this.Bc = a,
            sa.Is(b, this));
            return b
        }
        static Is(a, b) {
            a.fb = b.fb;
            a.Nb = b.Nb;
            a.Zb = b.Zb;
            a.Td = b.Td;
            a.Ud = b.Ud;
            a.country = b.country;
            a.ah = b.ah;
            a.Ab = b.Ab;
            a.D = b.D;
            a.W = b.W;
            a.Y = b.Y;
            a.Yb = b.Yb;
            a.Ac = b.Ac;
            a.Zc = b.Zc;
            a.J = null == b.J ? null : b.J.uc();
            a.fa = b.fa
        }
    }
    class Nb {
        constructor() {
            this.Pc = new Set;
            this.kg = 0;
            window.document.addEventListener("focusout", M(this, this.wl))
        }
        la() {
            window.document.removeEventListener("focusout", M(this, this.wl))
        }
        A() {
            let a = 0;
            this.Pc.has("Up") && (a = 1);
            this.Pc.has("Down") && (a |= 2);
            this.Pc.has("Left") && (a |= 4);
            this.Pc.has("Right") && (a |= 8);
            this.Pc.has("Kick") && (a |= 16);
            if (null != this.yg && a != this.kg) {
                this.kg = a;
                let b = new Aa;
                b.input = a;
                this.yg(b)
            }
        }
        Fa(a) {
            var b = a.code;
            b = m.j.Kd.v().v(b);
            null != b && (a.preventDefault(),
            this.mq(b))
        }
        kd(a) {
            a = m.j.Kd.v().v(a.code);
            null != a && this.bq(a)
        }
        mq(a) {
            this.Pc.has(a) || (this.Pc.add(a),
            this.A(),
            D.i(this.ul, a))
        }
        bq(a) {
            this.Pc.delete(a) && this.A()
        }
        wl() {
            if (null != this.yg && 0 != this.kg) {
                this.Pc.clear();
                this.kg = 0;
                let a = new Aa;
                a.input = 0;
                this.yg(a)
            }
        }
    }
    class gb {
        constructor() {
            this.zk = null;
            this.f = x.Ia(gb.O);
            var a = x.Ba(this.f);
            this.lg = a.get("link");
            let b = a.get("copy");
            a = a.get("close");
            let c = this;
            this.lg.onfocus = function() {
                c.lg.select()
            }
            ;
            b.onclick = function() {
                c.lg.select();
                return window.document.execCommand("Copy")
            }
            ;
            a.onclick = function() {
                H.i(c.rb)
            }
        }
        Sr(a) {
            this.zk != a && (this.zk = a,
            this.lg.value = a)
        }
    }
    class Ra {
        constructor(a, b) {
            this.f = x.Ia(Ra.O);
            let c = x.Ba(this.f);
            this.aq = c.get("ok");
            let d = this;
            this.aq.onclick = function() {
                H.i(d.Wa)
            }
            ;
            this.jm = c.get("replay");
            let e = null != b;
            this.jm.hidden = !e;
            e && (this.jm.onclick = function() {
                Ba.tm(b)
            }
            );
            c.get("reason").textContent = a
        }
    }
    class B {
        static Rp() {
            C.rj(function() {
                B.Ck(B.Zq)
            });
            B.Ip()
        }
        static Ip() {
            let a = m.j.Vj.v();
            null == a ? T.Wo().then(function(b) {
                 b = B.Ue;
                m.j.Vj.ha(b.os())
            }).catch(function() {}) : T.Vo(a).then(function(b) {
                return B.Ue = b
            }).catch(function() {})
            
        }
        static Zo() {
            let a = Ac.ln();
            return null != a ? null != a.getItem("crappy_router") : !1
        }
        static Ck(a) {
            let b = new hb(m.j.ne.v());
            b.yl = function(c) {
                m.j.ne.ha(c);
                m.Pa.om();
                a()
            }
            ;
            C.Na(b.f);
            b.Eb.focus()
        }
        static Dk(a, b) {
            a = new Y(a);
            a.Wa = b;
            C.Na(a.f)
        }
        static Lo(a, b) {
            function c() {
                let f = new Ra("Failed",null);
                f.Wa = function() {
                    B.yb()
                }
                ;
                C.Na(f.f)
            }
            function d(f) {
                f = f.sitekey;
                if (null == f)
                    throw v.C(null);
                B.Dk(f, function(g) {
                    e(a, g)
                })
            }
            C.Na((new Z("Connecting","Connecting...",[])).f);
            let e = null;
            e = function(f, g) {
                aa.Vl(m.Pe + "api/client", "room=" + f + "&rcr=" + g, aa.Hj).then(function(h) {
                    switch (h.action) {
                    case "connect":
                        h = h.token;
                        if (null == h)
                            throw v.C(null);
                        b(h);
                        break;
                    case "recaptcha":
                        d(h);
                        break;
                    default:
                        throw v.C(null);
                    }
                }).catch(function() {
                    c()
                })
            }
            ;
            e(a, "")
        }
        static Zq() {
            let a = Bc.v()
              , b = a.get("c")
              , c = a.get("p");
            a.get("v");
            null != b ? null != c ? B.Hh(b) : B.ag(b) : B.yb()
        }
        static yb() {
            let a = new Sa(m.j.Oh());
            C.Na(a.La);
            a.un = function(b) {
                if (9 != b.Ed.Rd) {
                    let c;
                    9 > b.Ed.Rd ? (b = "Old version room",
                    c = "The room is running an older version, an update must have happened recently.") : (b = "New version",
                    c = "The room is running a new version of haxball, refresh the site to update.");
                    let d = new Z(b,c,["Ok"]);
                    C.Na(d.f);
                    d.Wa = function() {
                        C.Na(a.La);
                        d.Wa = null
                    }
                } else
                    b.Ed.Kb ? B.Hh(b.ba) : B.ag(b.ba)
            }
            ;
            a.dt = function() {
                B.Mo()
            }
            ;
            a.ct = function() {
                B.Ck(B.yb)
            }
            ;
            a.ft = function() {
                B.Fk()
            }
            ;
            a.et = function(b) {
                B.No(b)
            }
        }
        static Fk() {
            let a = new ka(!0)
              , b = window.document.createElement("div");
            b.className = "view-wrapper";
            b.appendChild(a.f);
            C.Na(b);
            a.rb = function() {
                B.yb()
            }
            ;
            a.fq = function() {
                let c = new ib
                  , d = window.document.createElement("div");
                d.className = "view-wrapper";
                d.appendChild(c.f);
                C.Na(d);
                c.rb = function() {
                    B.Fk()
                }
            }
        }
        static gi(a, b) {
            return "" + pa.location.origin + "/play?c=" + a + (b ? "&p=1" : "")
        }
        static Mo() {
            let a = m.j.ne.v()
              , b = new jb("" + a + "'s room");
            C.Na(b.f);
            b.ji = function() {
                B.yb()
            }
            ;
            b.kq = function(c) {
                function d() {
                    if (!c.qt) {
                        var t = new Ob;
                        t.Rd = 9;
                        t.D = g.lc;
                        t.K = g.K.length;
                        t.jf = k.qg + 1;
                        t.vb = f.vb;
                        t.Kb = null != k.Kb;
                        t.Ic = f.Ic;
                        t.Lc = f.Lc;
                        var z = A.ka(16);
                        t.ga(z);
                        k.Oi(z.Rg())
                    }
                }
                C.Na((new Z("Creating room","Connecting...",[])).f);
                let e = null
                  , f = m.j.Oh()
                  , g = new ta;
                g.lc = c.name;
                let h = new sa;
                h.D = a;
                h.fb = !0;
                h.country = f.vb;
                h.Zb = m.j.sh.v();
                g.K.push(h);
                let k = new Pb({
                    iceServers: m.hg,
                    uj: m.Pe + "api/host",
                    state: g,
                    version: 9
                });
                k.qg = c.Zs - 1;
                k.Kb = c.password;
                d();
                let l = new Ba(k)
                  , n = !1;
                k.sf = function(t, z) {
                    B.Dk(t, function(J) {
                        z(J);
                        C.Na(l.l.f);
                        n = !0
                    })
                }
                ;
                let r = window.setInterval(function() {
                    k.ua(Ca.pa(k))
                }, 3E3);
                k.vl = function(t) {
                    null != g.qa(t) && k.ua(la.pa(t, "Bad actor", !1))
                }
                ;
                k.iq = function(t, z) {
                    let J = z.kc();
                    if (25 < J.length)
                        throw v.C("name too long");
                    let N = z.kc();
                    if (3 < N.length)
                        throw v.C("country too long");
                    z = z.Bb();
                    if (null != z && 2 < z.length)
                        throw v.C("avatar too long");
                    k.ua(Da.pa(t, J, N, z));
                    d()
                }
                ;
                k.jq = function(t) {
                    null != g.qa(t) && k.ua(la.pa(t, null, !1))
                }
                ;
                k.vg = function(t) {
                    e = t;
                    l.Kg = B.gi(t, null != k.Kb);
                    n || (n = !0,
                    C.Na(l.l.f))
                }
                ;
                l.Mh.pq = function(t, z, J, N) {
                    k.Ro(t, z, J, N)
                }
                ;
                l.Mh.qq = function() {
                    d()
                }
                ;
                l.l.le = function() {
                    k.la();
                    l.la();
                    B.yb();
                    window.clearInterval(r)
                }
                ;
                l.$f.Ng = function(t) {
                    k.Kb = t;
                    d();
                    null != e && (l.Kg = B.gi(e, null != k.Kb))
                }
                ;
                l.$f.Em = function(t) {
                    k.Ni(t)
                }
                ;
                l.$f.ce = M(k, k.ce)
            }
        }
        static Hh(a) {
            let b = new kb;
            C.Na(b.f);
            b.Wa = function(c) {
                null == c ? B.yb() : B.ag(a, c)
            }
        }
        static No(a) {
            try {
                let b = new hc(new Qb(new Uint8Array(a),new ta,3));
                b.qe.le = function() {
                    b.la();
                    B.yb()
                }
                ;
                C.Na(b.l.f)
            } catch (b) {
                let c = v.Mb(b).Gb();
                if (c instanceof Rb)
                    a = new Z("Incompatible replay version","The replay file is of a different version",["Open player", "Cancel"]),
                    C.Na(a.f),
                    a.Wa = function(d) {
                        0 == d ? (d = window.top.location,
                        window.top.open(d.protocol + "//" + d.hostname + (null != d.port ? ":" + d.port : "") + "/replay?v=" + c.Rd, "_self")) : B.yb()
                    }
                    ;
                else {
                    let d = new Z("Replay error","Couldn't load the file.",["Ok"]);
                    C.Na(d.f);
                    d.Wa = function() {
                        d.Wa = null;
                        B.yb()
                    }
                }
            }
        }
        static ag(a, b, c) {
            try {
                let d = B.Zo()
                  , e = new ta
                  , f = A.ka();
                f.oc(m.j.ne.v());
                f.oc(m.j.Oh().vb);
                f.Fb(m.j.sh.v());
                let g = new Ea(a,{
                    iceServers: m.hg,
                    uj: m.Cs,
                    state: e,
                    version: 9,
                    st: f.Rg(),
                    password: b,
                    zn: d,
                    Dn: c,
                    Ms: B.Ue
                })
                  , h = new lb;
                h.da("Connecting to master...");
                h.xh.onclick = function() {
                    g.Jd = null;
                    g.rf = null;
                    g.la();
                    B.yb()
                }
                ;
                C.Na(h.f);
                let k = function(r, t) {
                    r = new Ra(r,t);
                    r.Wa = function() {
                        B.yb()
                    }
                    ;
                    C.Na(r.f)
                }
                  , l = function() {
                    let r = new Z("Connection Failed","",["Ok"]);
                    r.de.innerHTML = "<p>Failed to connect to room host.</p><p>If this problem persists please see the <a href='https://github.com/haxball/haxball-issues/wiki/Connection-Issues' target='_blank'>troubleshooting guide</a>.</p>";
                    r.Wa = function() {
                        B.yb()
                    }
                    ;
                    C.Na(r.f)
                }
                  , n = function() {
                    let r = new Ba(g);
                    g.zl = function(t) {
                        r.l.Gf.Ur(g.Dg.hh() | 0, g.Dg.max() | 0);
                        r.l.Gf.Jl.Pn(t)
                    }
                    ;
                    r.Kg = B.gi(a, !1);
                    C.Na(r.l.f);
                    r.l.le = function() {
                        g.Jd = null;
                        g.la();
                        r.la();
                        B.yb()
                    }
                    ;
                    g.Jd = function() {
                        g.Jd = null;
                        r.la();
                        let t = null == r.Od ? null : r.Od.stop();
                        k(g.xk, t)
                    }
                };
                g.rf = function(r) {
                    g.rf = null;
                    g.Jd = null;
                    switch (r.pb) {
                    case 1:
                        l();
                        break;
                    case 2:
                        switch (r.reason) {
                        case 4004:
                            B.Lo(a, function(t) {
                                B.ag(a, b, t)
                            });
                            break;
                        case 4101:
                            null == b ? B.Hh(a) : k(Ea.Bh(r), null);
                            break;
                        default:
                            k(Ea.Bh(r), null)
                        }
                        break;
                    default:
                        k(Ea.Bh(r), null)
                    }
                }
                ;
                g.Jd = function(r) {
                    switch (r) {
                    case 1:
                        h.da("Connecting to peer...");
                        break;
                    case 2:
                        h.da("Awaiting state...");
                        break;
                    case 3:
                        n()
                    }
                }
                ;
                g.uq = function() {
                    h.da("Trying reverse connection...")
                }
            } catch (d) {
                c = v.Mb(d).Gb(),
                pa.console.log(c),
                c = new Z("Unexpected Error","",[]),
                c.de.innerHTML = "An error ocurred while attempting to join the room.<br><br>This might be caused by a browser extension, try disabling all extensions and refreshing the site.<br><br>The error has been printed to the inspector console.",
                C.Na(c.f)
            }
        }
    }
    class mb {
        constructor() {
            this.lb = null;
            this.f = x.Ia(mb.O);
            let a = x.Ba(this.f)
              , b = this;
            a.get("cancel").onclick = function() {
                H.i(b.ji)
            }
            ;
            this.oi = a.get("pick");
            this.uk = a.get("delete");
            this.Jk = a.get("export");
            let c = a.get("list")
              , d = a.get("file");
            this.Tg();
            this.oi.onclick = function() {
                null != b.lb && b.lb.Yd().then(function(e) {
                    D.i(b.zg, e)
                })
            }
            ;
            this.uk.onclick = function() {
                if (null != b.lb) {
                    var e = b.lb.gn;
                    null != e && (b.lb.La.remove(),
                    b.lb = null,
                    e(),
                    b.Tg())
                }
            }
            ;
            this.Jk.onclick = function() {
                null != b.lb && b.lb.Yd().then(function(e) {
                    Sb.Er(e.Ae(), e.D + ".hbs")
                })
            }
            ;
            this.si(c);
            this.Yl = nb.ei(c);
            window.setTimeout(function() {
                b.Yl.update()
            }, 0);
            d.onchange = function() {
                var e = d.files;
                if (!(1 > e.length)) {
                    e = e.item(0);
                    var f = new FileReader;
                    f.onload = function() {
                        try {
                            var g = f.result;
                            let h = new q;
                            h.cl(g);
                            D.i(b.zg, h)
                        } catch (h) {
                            g = v.Mb(h).Gb(),
                            g instanceof SyntaxError ? D.i(b.mi, "SyntaxError in line: " + Q.Fe(g.lineNumber)) : g instanceof Ta ? D.i(b.mi, g.Xp) : D.i(b.mi, "Error loading stadium file.")
                        }
                    }
                    ;
                    f.readAsText(e)
                }
            }
        }
        Tg() {
            this.oi.disabled = null == this.lb;
            this.uk.disabled = null == this.lb || null == this.lb.gn;
            this.Jk.disabled = null == this.lb
        }
        jl(a, b, c) {
            let d = window.document.createElement("div");
            d.textContent = a;
            d.className = "elem";
            null != c && d.classList.add("custom");
            let e = {
                La: d,
                Yd: b,
                gn: c
            }
              , f = this;
            d.onclick = function() {
                null != f.lb && f.lb.La.classList.remove("selected");
                f.lb = e;
                d.classList.add("selected");
                f.Tg()
            }
            ;
            d.ondblclick = function() {
                f.lb = e;
                f.Tg();
                return f.oi.onclick()
            }
            ;
            return d
        }
        si(a) {
            let b = q.Nh()
              , c = 0;
            for (; c < b.length; ) {
                let e = b[c];
                ++c;
                a.appendChild(this.jl(e.D, function() {
                    return Promise.resolve(e)
                }, null))
            }
            let d = this;
            ob.getAll().then(function(e) {
                let f = 0;
                for (; f < e.length; ) {
                    let g = e[f];
                    ++f;
                    let h = g.id;
                    a.appendChild(d.jl(g.name, function() {
                        return ob.get(h)
                    }, function() {
                        return ob.delete(h)
                    }))
                }
                d.Yl.update()
            })
        }
    }
    class pb {
        constructor(a) {
            this.f = x.Ia(pb.O);
            x.Ba(this.f).get("features").textContent = a.join(", ")
        }
    }
    class Ua {
        constructor(a, b, c) {
            this.rd = this.ze = null;
            this.xe = [];
            this.tk = 0;
            this.Dl = !1;
            this.gg = [];
            this.bd = [];
            this.Ta = new RTCPeerConnection({
                iceServers: b
            },Ua.xo);
            let d = this;
            this.Vh = new Promise(function(e) {
                d.tp = e
            }
            );
            this.Ta.onicecandidate = function(e) {
                null == e.candidate ? d.tp(d.gg) : (e = e.candidate,
                null != e.candidate && "" != e.candidate && (null != d.ug && d.ug(e),
                d.gg.push(e)))
            }
            ;
            for (b = 0; b < c.length; )
                this.Co(c[b++]);
            this.ba = a
        }
        Wi(a) {
            null == a && (a = 1E4);
            window.clearTimeout(this.ze);
            this.ze = window.setTimeout(M(this, this.rp), a)
        }
        Bo(a, b) {
            let c = this;
            this.vk(this.Ta.setRemoteDescription(a).then(function() {
                return c.Ta.createAnswer()
            }), b, 500)
        }
        Do() {
            this.vk(this.Ta.createOffer(), [], 1E3)
        }
        vk(a, b, c) {
            let d = this;
            a.then(function(e) {
                return d.Ta.setLocalDescription(e).then(function() {
                    return e
                })
            }).then(function(e) {
                function f() {
                    return e
                }
                let g = 0;
                for (; g < b.length; )
                    d.Nj(b[g++]);
                return Gc.js(d.Vh, c).then(f, f)
            }).then(function(e) {
                d.ki(e)
            }).catch(function() {
                d.fg()
            })
        }
        Co(a) {
            let b = {
                id: this.bd.length,
                negotiated: !0,
                ordered: a.ordered
            };
            a.reliable || (b.maxRetransmits = 0);
            a = this.Ta.createDataChannel(a.name, b);
            a.binaryType = "arraybuffer";
            let c = this;
            a.onopen = function() {
                let d = 0
                  , e = c.bd;
                for (; d < e.length; )
                    if ("open" != e[d++].readyState)
                        return;
                null != c.Id && c.Id()
            }
            ;
            a.onclose = function() {
                c.fg()
            }
            ;
            a.onmessage = function() {
                c.fg()
            }
            ;
            this.bd.push(a)
        }
        Nj(a) {
            let b = this;
            window.setTimeout(function() {
                b.Ta.addIceCandidate(a)
            }, this.tk)
        }
        rp() {
            this.fg()
        }
        fg() {
            null != this.jd && this.jd();
            this.la()
        }
        la() {
            this.jk();
            this.Ta.close()
        }
        jk() {
            window.clearTimeout(this.ze);
            this.ki = this.Id = this.ug = this.jd = null;
            this.Ta.onicecandidate = null;
            this.Ta.ondatachannel = null;
            this.Ta.onsignalingstatechange = null;
            this.Ta.oniceconnectionstatechange = null;
            let a = 0
              , b = this.bd;
            for (; a < b.length; ) {
                let c = b[a];
                ++a;
                c.onopen = null;
                c.onclose = null;
                c.onmessage = null
            }
        }
    }

    class kb {
        constructor() {
            this.f = x.Ia(kb.O);
            let a = x.Ba(this.f);
            this.Eb = a.get("input");
            this.nf = a.get("ok");
            let b = this;
            a.get("cancel").onclick = function() {
                null != b.Wa && b.Wa(null)
            }
            ;
            this.Eb.maxLength = 30;
            this.Eb.oninput = function() {
                b.A()
            }
            ;
            this.Eb.onkeydown = function(c) {
                13 == c.keyCode && b.Hc() && null != b.Wa && b.Wa(b.Eb.value)
            }
            ;
            this.nf.onclick = function() {
                b.Hc() && null != b.Wa && b.Wa(b.Eb.value)
            }
            ;
            this.A()
        }
        Hc() {
            let a = this.Eb.value;
            return 30 >= a.length ? 0 < a.length : !1
        }
        A() {
            this.nf.disabled = !this.Hc()
        }
    }
    class Tb {
        constructor(a, b) {
            this.Wj = [];
            this.jr = /[#@][^\s@#]*$/;
            this.Qb = a;
            this.tq = b;
            a.hidden = !0
        }
        Th() {
            this.dj(null)
        }
        fo(a, b) {
            b = this.jr.exec(O.substr(a, 0, b));
            if (null != b) {
                var c = b[0]
                  , d = O.substr(c, 1, null).split("")
                  , e = Tb.To
                  , f = Array(d.length);
                let g = 0
                  , h = d.length;
                for (; g < h; ) {
                    let l = g++;
                    f[l] = e(d[l])
                }
                let k = new RegExp(f.join(".*?"),"i");
                this.Wk = "#" == c.charAt(0);
                this.Ai = b.index;
                this.xr = c.length;
                this.im = a;
                a = function(l) {
                    l = k.exec(l.D);
                    return null == l ? -1 : l.index + l[0].length
                }
                ;
                b = [];
                c = 0;
                for (d = this.Wj; c < d.length; )
                    e = d[c],
                    ++c,
                    f = a(e),
                    0 <= f && b.push({
                        An: f,
                        item: e
                    });
                b.sort(function(l, n) {
                    return l.An - n.An
                });
                this.dj(b)
            } else
                this.dj(null)
        }
        Ek(a) {
            a = this.Wk ? "#" + a.ba : "@" + ba.replace(a.D, " ", "_");
            this.tq(O.substr(this.im, 0, this.Ai) + a + " " + O.substr(this.im, this.Ai + this.xr, null), this.Ai + a.length + 1)
        }
        dj(a) {
            var b = null != a && 0 != a.length;
            this.Qb.hidden || x.Nf(this.Qb);
            this.cd = null;
            this.Qb.hidden = !b;
            if (b) {
                var c = this;
                b = [];
                for (var d = 0; d < a.length; ) {
                    var e = a[d++];
                    let f = window.document.createElement("div")
                      , g = e.item;
                    e = g.D;
                    this.Wk && (e = "(" + g.ba + ") " + e);
                    f.textContent = e;
                    this.Qb.appendChild(f);
                    f.onclick = function() {
                        c.Ek(g)
                    }
                    ;
                    b.push({
                        item: g,
                        La: f
                    })
                }
                this.cd = b;
                this.cd[0].La.classList.toggle("selected", !0);
                this.zc = 0
            }
        }
        ek(a) {
            if (null != this.cd) {
                var b = this.zc;
                this.zc += a;
                a = this.cd.length - 1;
                0 > this.zc ? this.zc = a : this.zc > a && (this.zc = 0);
                a = this.cd[this.zc];
                b != this.zc && (a.La.classList.toggle("selected", !0),
                this.cd[b].La.classList.toggle("selected", !1));
                a = a.La;
                b = a.offsetTop;
                a = b + a.offsetHeight;
                var c = this.Qb.scrollTop + this.Qb.clientHeight;
                b < this.Qb.scrollTop ? this.Qb.scrollTop = b : a > c && (this.Qb.scrollTop = a - this.Qb.clientHeight)
            }
        }
        Oo() {
            null != this.cd && (this.Ek(this.cd[this.zc].item),
            this.Th())
        }
        static To(a) {
            return -1 != ".$^{[(|)*+?\\".indexOf(a) ? "\\" + a : a
        }
    }
    class Ub {
        static parse(a) {
            a.F();
            let b = [];
            for (; 0 != a.s.byteLength - a.a; ) {
                let c = a.pe(a.Sb())
                  , d = a.Zl(a.Sb());
                try {
                    let e = new Ob;
                    e.ma(new K(new DataView(d),!1));
                    let f = new ic;
                    f.Ed = e;
                    f.ba = c;
                    b.push(f)
                } catch (e) {}
            }
            return b
        }
        static Ss(a, b, c, d) {
            return Math.acos(Math.sin(a) * Math.sin(c) + Math.cos(a) * Math.cos(c) * Math.cos(b - d))
        }
        static ot(a, b) {
            let c = a.Ic;
            a = a.Lc;
            let d = 0;
            for (; d < b.length; ) {
                let e = b[d];
                ++d;
                let f = e.Ed;
                e.We = 6378 * Ub.Ss(.017453292519943295 * f.Ic, .017453292519943295 * f.Lc, .017453292519943295 * c, .017453292519943295 * a);
                isFinite(e.We) || (e.We = 22E3)
            }
        }
        static get() {
            return aa.v(m.Pe + "api/list", "arraybuffer").then(function(a) {
                return Ub.parse(new K(new DataView(a),!1))
            })
        }
    }
    class Va {
        constructor() {
            this.list = []
        }
        nn(a) {
            let b = 0
              , c = a.ob
              , d = a.Cc
              , e = 0
              , f = this.list;
            for (; e < f.length; ) {
                var g = f[e];
                ++e;
                let h = g.ob;
                if (h > c)
                    break;
                if (h == c) {
                    g = g.Cc;
                    if (g > d)
                        break;
                    g == d && ++d
                }
                ++b
            }
            a.Cc = d;
            this.list.splice(b, 0, a)
        }
        jt(a) {
            let b = 0
              , c = 0
              , d = this.list;
            for (; c < d.length && !(d[c++].ob >= a); )
                ++b;
            this.list.splice(0, b)
        }
        Js(a, b) {
            let c = this.list;
            for (; 0 < c.length; )
                c.pop();
            Va.at(a.list, b.list, this.list)
        }
        kt(a) {
            let b = 0
              , c = this.list
              , d = 0
              , e = c.length;
            for (; d < e; ) {
                let f = c[d++];
                f.Ce != a && (c[b] = f,
                ++b)
            }
            for (; c.length > b; )
                c.pop()
        }
        Ks(a) {
            let b = 0
              , c = 0
              , d = this.list;
            for (; c < d.length && !(d[c++].ob >= a); )
                ++b;
            return b
        }
        static at(a, b, c) {
            if (0 == a.length)
                for (a = 0; a < b.length; )
                    c.push(b[a++]);
            else if (0 == b.length)
                for (b = 0; b < a.length; )
                    c.push(a[b++]);
            else {
                let d = 0
                  , e = a.length
                  , f = 0
                  , g = b.length;
                for (; ; ) {
                    let h = a[d]
                      , k = b[f];
                    if (h.ob <= k.ob) {
                        if (c.push(h),
                        ++d,
                        d >= e) {
                            for (; f < g; )
                                c.push(b[f++]);
                            break
                        }
                    } else if (c.push(k),
                    ++f,
                    f >= g) {
                        for (; d < e; )
                            c.push(a[d++]);
                        break
                    }
                }
            }
        }
    }
    class jc {
        constructor() {
            this.Ga = 0;
            this.Ak = this.Bk = !1;
            this.Ve = 0;
            this.f = window.document.createElement("div");
            this.f.className = "game-timer-view";
            this.f.appendChild(this.Eq = this.ee("OVERTIME!", "overtime"));
            this.f.appendChild(this.Zp = this.ee("0", "digit"));
            this.f.appendChild(this.Yp = this.ee("0", "digit"));
            this.f.appendChild(this.ee(":", null));
            this.f.appendChild(this.Gr = this.ee("0", "digit"));
            this.f.appendChild(this.Fr = this.ee("0", "digit"))
        }
        ee(a, b) {
            let c = window.document.createElement("span");
            c.textContent = a;
            c.className = b;
            return c
        }
        Xr(a) {
            if (a != this.Ve) {
                let b = a % 60
                  , c = a / 60 | 0;
                this.Fr.textContent = "" + b % 10;
                this.Gr.textContent = "" + (b / 10 | 0) % 10;
                this.Yp.textContent = "" + c % 10;
                this.Zp.textContent = "" + (c / 10 | 0) % 10;
                this.Ve = a
            }
            this.fm();
            this.gm()
        }
        Yr(a) {
            this.Ga = a;
            this.fm();
            this.gm()
        }
        fm() {
            this.Tr(0 != this.Ga && this.Ve > this.Ga)
        }
        gm() {
            this.Zr(this.Ve < this.Ga && this.Ve > this.Ga - 30)
        }
        Tr(a) {
            a != this.Ak && (this.Eq.className = a ? "overtime on" : "overtime",
            this.Ak = a)
        }
        Zr(a) {
            a != this.Bk && (this.f.className = a ? "game-timer-view time-warn" : "game-timer-view",
            this.Bk = a)
        }
    }
    class hc {
        constructor(a) {
            this.gd = window.performance.now();
            this.W = new Nb;
            this.Bd = this.Oe = 0;
            this.za = a;
            this.l = new ua(a.xc);
            let b = new Vb(this.l);
            b.zi(a.U);
            window.document.addEventListener("keydown", M(this, this.Fa));
            window.document.addEventListener("keyup", M(this, this.kd));
            let c = this;
            this.W.ul = function(d) {
                "ToggleChat" == d && c.l.Ka.Wm()
            }
            ;
            window.requestAnimationFrame(M(this, this.pf));
            this.Kh = window.setInterval(function() {
                c.l.Gf.Dm(c.Bd);
                c.Bd = 0
            }, 1E3);
            this.Gm(m.j.Sd.v());
            this.l.f.classList.add("replayer");
            this.qe = new Fa(a);
            this.qe.xq = function() {
                b.ss(a.U)
            }
            ;
            this.qe.wq = function() {
                c.l.ue(null == a.U.M);
                b.zi(a.U)
            }
            ;
            this.qe.Al = function() {
                c.l.ib.gb.zr()
            }
            ;
            this.l.f.appendChild(this.qe.f);
            this.ej = window.setInterval(function() {
                a.A()
            }, 50)
        }
        la() {
            window.document.removeEventListener("keydown", M(this, this.Fa));
            window.document.removeEventListener("keyup", M(this, this.kd));
            window.onbeforeunload = null;
            window.cancelAnimationFrame(this.Oe);
            window.clearInterval(this.Kh);
            window.clearInterval(this.ej);
            this.W.la()
        }
        pf() {
            this.Oe = window.requestAnimationFrame(M(this, this.pf));
            this.za.A();
            this.Qc()
        }
        Qc() {
            this.qe.A();
            let a = window.performance.now();
            1 == m.j.Jh.v() && 28.333333333333336 > a - this.gd || (this.gd = a,
            this.Bd++,
            this.Gm(m.j.Sd.v()),
            0 < this.za.Pd || this.l.A(this.za))
        }
        Fa(a) {
            var b = m.j.Sd;
            let c = null != m.j.Kd.v().v(a.code);
            switch (a.keyCode) {
            case 27:
                this.l.Xk() ? this.l.ab(null) : (b = this.l,
                b.ue(!b.nd));
                a.preventDefault();
                break;
            case 48:
                c ? this.W.Fa(a) : b.ha(0);
                break;
            case 49:
                c ? this.W.Fa(a) : b.ha(1);
                break;
            case 50:
                c ? this.W.Fa(a) : b.ha(2);
                break;
            case 51:
                c ? this.W.Fa(a) : b.ha(3);
                break;
            case 52:
                c ? this.W.Fa(a) : b.ha(4);
                break;
            case 53:
                c ? this.W.Fa(a) : b.ha(5);
                break;
            case 54:
                c ? this.W.Fa(a) : b.ha(6);
                break;
            case 55:
                c ? this.W.Fa(a) : b.ha(7);
                break;
            default:
                this.W.Fa(a)
            }
        }
        kd(a) {
            this.W.kd(a)
        }
        Gm() {
            let a = m.j.Sd.v()
              , b = this.l.ib.gb;
            b.re = m.j.Ei.v();
            b.Sg = 35;
            0 >= a ? b.Md = 610 : (b.Md = 0,
            b.Fg = 1 + .25 * (a - 1))
        }
    }
    class D {
        static i(a, b) {
            null != a && a(b)
        }
    }
    class qb {
        constructor() {
            this.Rb = -1;
            this.gb = new U(m.j.ci.v());
            this.Wc = new jc;
            this.f = x.Ia(qb.O);
            let a = x.Ba(this.f);
            this.Tb = new Wb(a.get("red-score"),0);
            this.Ob = new Wb(a.get("blue-score"),0);
            x.replaceWith(a.get("timer"), this.Wc.f);
            x.replaceWith(a.get("canvas"), this.gb.na)
        }
        A(a) {
            var b = m.j.ci.v();
            if (this.gb.yp != b) {
                let c = this.gb.na;
                this.gb = new U(b);
                x.replaceWith(c, this.gb.na)
            }
            b = a.M;
            null == b ? this.f.hidden = !0 : (this.f.hidden = !1,
            this.Wc.Yr(60 * a.Ga),
            this.Wc.Xr(b.Mc | 0),
            this.Ob.set(b.Ob),
            this.Tb.set(b.Tb),
            this.gb.Qc(a, this.Rb))
        }
    }
    class rb {
        constructor(a) {
            this.f = x.Ia(rb.O);
            let b = x.Ba(this.f);
            this.lf = b.get("title");
            this.wi = b.get("reason");
            this.Un = b.get("ban-btn");
            this.Wn = b.get("ban-text");
            this.bf = b.get("kick");
            this.wd = b.get("close");
            let c = this;
            this.Un.onclick = function() {
                c.Pj(!c.Yj)
            }
            ;
            this.wd.onclick = function() {
                H.i(c.rb)
            }
            ;
            this.bf.onclick = function() {
                c.wi.value = "banned";
                kc.i(c.li, c.Rb, c.wi.value, c.Yj)
            }
            ;
            this.wi.onkeydown = function(d) {
                return d.stopPropagation()
            }
            ;
            this.wi.maxLength = 100;
            this.Rb = a.Y;
            this.lf.textContent = "Kick " + a.D;
            this.Pj(!1)
        }
        Pj(a) {
            this.Yj = a;
            this.Wn.textContent = a ? "Yes" : "No"
        }
    }
    class Cc {
        constructor(a) {
            this.current = 0;
            this.Fs = a
        }
        next() {
            return this.Fs[this.current++]
        }
    }
    class lc {
        constructor(a) {
            function b(d) {
                return new Promise(function(e) {
                    let f = a.file(d).asArrayBuffer();
                    c.c.decodeAudioData(f, e, function() {
                        e(null)
                    })
                }
                )
            }
            this.c = new AudioContext;
            this.ng = this.c.createGain();
            this.yi();
            this.ng.connect(this.c.destination);
            let c = this;
            this.Po = Promise.all([b("sounds/chat.wav").then(function(d) {
                return c.fk = d
            }), b("sounds/highlight.wav").then(function(d) {
                return c.Rk = d
            }), b("sounds/kick.wav").then(function(d) {
                return c.Bp = d
            }), b("sounds/goal.wav").then(function(d) {
                return c.gp = d
            }), b("sounds/join.wav").then(function(d) {
                return c.zp = d
            }), b("sounds/leave.wav").then(function(d) {
                return c.Fp = d
            }), b("sounds/crowd.ogg").then(function(d) {
                c.Fo = d;
                c.pk = new mc(c.Fo,c.c);
                c.pk.connect(c.ng)
            })])
        }
        om() {
            this.c.resume()
        }
        ld(a) {
            let b = this.c.createBufferSource();
            b.buffer = a;
            b.connect(this.ng);
            b.start()
        }
        yi() {
            let a = m.j.Ri.v();
            m.j.ve.v() || (a = 0);
            this.ng.gain.value = a
        }
    }
    class Ga {
    }
    class Dc {
        constructor(a, b) {
            this.x = a;
            this.y = b
        }
    }
    class sb {
        static Hp() {
            if (null != sb.ti)
                return sb.ti;
            sb.ti = new Promise(function(a, b) {
                var c = window.grecaptcha;
                null != c ? a(c) : (c = window.document.createElement("script"),
                c.src = "https://www.google.com/recaptcha/api.js?onload=___recaptchaload&render=explicit",
                window.document.head.appendChild(c),
                window.___recaptchaload = function() {
                    a(window.grecaptcha)
                }
                ,
                c.onerror = function() {
                    b(null)
                }
                )
            }
            );
            return sb.ti
        }
    }
    class Ba {
        constructor(a) {
            this.Zf = null;
            this.$k = this.Dh = !1;
            this.gd = window.performance.now();
            this.Od = null;
            this.Oe = 0;
            this.io = new tb(3,1E3);
            this.W = new Nb;
            this.Kg = "Waiting for link";
            this.Gi = this.wm = !1;
            this.Bd = 0;
            let b = this;
            this.$f = new Xb(a,function(d) {
                b.l.Ka.Ib(d)
            }
            );
            this.za = a;
            a.U.Io = function(d) {
                b.wm != d && (b.wm = d,
                a.ua(Ha.pa(d)))
            }
            ;
            this.l = new ua(a.xc);
            window.top.document.body.classList.add("hb-playing");
            this.Mh = new Vb(this.l,a.U.qa(a.xc).D);
            this.Mh.zi(a.U);
            this.l.Ka.Bl = M(this, this.hq);
            this.l.Ka.tg = M(this, this.gq);
            window.document.addEventListener("keydown", M(this, this.Fa));
            window.document.addEventListener("keyup", M(this, this.kd));
            window.onbeforeunload = function() {
                return "Are you sure you want to leave the room?"
            }
            ;
            this.W.yg = function(d) {
                a.A();
                a.ua(d)
            }
            ;
            this.W.ul = function(d) {
                "ToggleChat" == d && b.l.Ka.Wm()
            }
            ;
            this.l.Xa.Dq = function(d) {
                a.ua(va.pa(1, d))
            }
            ;
            this.l.Xa.vq = function(d) {
                a.ua(va.pa(0, d))
            }
            ;
            this.l.zg = function(d) {
                a.ua(Ia.pa(d))
            }
            ;
            this.l.Xa.Aq = function() {
                a.ua(new Wa)
            }
            ;
            this.l.Xa.Bq = function() {
                a.ua(new Xa)
            }
            ;
            this.l.Xa.oq = function() {
                b.Xm()
            }
            ;
            this.l.Xa.xg = function(d, e) {
                a.ua(fa.pa(d, e))
            }
            ;
            this.l.Xa.me = M(this, this.yr);
            this.l.Xa.eq = function() {
                a.ua(new Ya)
            }
            ;
            this.l.Xa.rq = function() {
                Ba.cr(a)
            }
            ;
            this.l.Xa.Cq = function(d) {
                a.ua(Ja.pa(d))
            }
            ;
            this.l.Xa.tf = function(d) {
                let e = a.U.qa(d);
                if (null != e) {
                    let f = new ub(e,b.Gi);
                    f.rb = function() {
                        b.l.ab(null)
                    }
                    ;
                    f.cq = function(g, h) {
                        a.ua(Ka.pa(g, h))
                    }
                    ;
                    f.li = function() {
                        b.$r(e)
                    }
                    ;
                    b.l.ab(f.f, function() {
                        f.A(a.U, b.Gi)
                    })
                }
            }
            ;
            this.l.Xa.yq = function() {
                let d = new gb;
                d.rb = function() {
                    b.l.ab(null)
                }
                ;
                b.l.ab(d.f, function() {
                    d.Sr(b.Kg)
                })
            }
            ;
            this.l.Xa.sq = function() {
                if (null == b.Od)
                    b.es();
                else {
                    let d = b.Od.stop();
                    b.Od = null;
                    Ba.tm(d)
                }
                b.l.Xa.Vr(null != b.Od)
            }
            ;
            window.requestAnimationFrame(M(this, this.pf));
            this.Kh = window.setInterval(function() {
                b.l.Gf.Dm(b.Bd);
                b.Bd = 0
            }, 1E3);
            this.ej = window.setInterval(function() {
                a.A()
            }, 50);
            var c = m.j.Ad.v();
            // c = -200 > c ? -200 : 1E3 < c ? 1E3 : c;
            if ( 0 != c) {
                var d = m.j.Ad.v();
                a.Cm(d);
                this.l.Ka.Ib("Extrapolation set to " + c + " msec")
            }
            
            chatBubbleInfo(this.l.Ka.Ib.bind(this.l.Ka));
        }
        es() {
            this.Od = new nc(this.za,3)
        }
        $r(a) {
            a = new rb(a);
            let b = this;
            a.rb = function() {
                b.l.ab(null)
            }
            ;
            a.li = function(c, d, e) {
                b.za.ua(la.pa(c, d, e));
                b.l.ab(null)
            }
            ;
            this.l.ab(a.f)
        }
        la() {
            window.document.removeEventListener("keydown", M(this, this.Fa));
            window.document.removeEventListener("keyup", M(this, this.kd));
            window.onbeforeunload = null;
            window.cancelAnimationFrame(this.Oe);
            window.top.document.body.classList.remove("hb-playing");
            this.W.la();
            window.clearInterval(this.Kh);
            window.clearInterval(this.ej);
            window.clearTimeout(this.Zf)
        }
        yr(a) {
            let b = []
              , c = 0
              , d = this.za.U.K;
            for (; c < d.length; ) {
                let e = d[c];
                ++c;
                e.fa == a && b.push(fa.pa(e.Y, u.Oa))
            }
            for (a = 0; a < b.length; )
                this.za.ua(b[a++])
        }
        pf() {
            this.Oe = window.requestAnimationFrame(M(this, this.pf));
            this.W.A();
            this.za.A();
            this.Qc()
        }
        Qc() {
            var a = window.performance.now();
            1 == m.j.Jh.v() && 28.333333333333336 > a - this.gd || (this.gd = a,
            this.Bd++,
            a = this.za.U.qa(this.za.xc),
            null != a && (this.Gi = a.fb),
            this.l.A(this.za))
        }
        hq(a) {
            let b = this;
            this.$f.uf(a) || this.io.yo(function() {
                let c = new Za;
                c.$c = a;
                b.za.ua(c)
            })
        }
        gq(a) {
            var b = this;
            this.Dh = getChatBubbleValue() || a;
            null == this.Zf && (this.Zf = window.setTimeout(function() {
                b.Zf = null;
                b.xm(b.Dh)
            }, 1E3),
            this.xm(this.Dh))
        }
        xm(a) {
            a != this.$k && (this.za.ua(La.pa(a ? 0 : 1)),
            this.$k = a)
        }
        Xm() {
            if (null != this.za.U.M) {
                let a = new $a;
                a.Mf = 120 != this.za.U.M.Ra;
                this.za.ua(a)
            }
        }
        Fa(a) {
            var b = m.j.Sd;
            let c = null != m.j.Kd.v().v(a.code);
            switch (a.keyCode) {
            case 9:
            case 13:
                this.l.Ka.$a.focus({
                    preventScroll: !0
                });
                a.preventDefault();
                break;
            case 27:
                this.l.Xk() ? this.l.ab(null) : (b = this.l,
                b.ue(!b.nd));
                a.preventDefault();
                break;
            case 48:
                c ? this.W.Fa(a) : b.ha(0);
                break;
            case 49:
                c ? this.W.Fa(a) : b.ha(1);
                break;
            case 50:
                c ? this.W.Fa(a) : b.ha(2);
                break;
            case 51:
                c ? this.W.Fa(a) : b.ha(3);
                break;
            case 52:
                c ? this.W.Fa(a) : b.ha(4);
                break;
            case 53:
                c ? this.W.Fa(a) : b.ha(5);
                break;
            case 54:
                c ? this.W.Fa(a) : b.ha(6);
                break;
            case 55:
                c ? this.W.Fa(a) : b.ha(7);
                break;
            case 80:
                this.Xm();
                break;
            default:
                this.W.Fa(a)
            }
        }
        kd(a) {
            this.W.kd(a)
        }
        static tm(a) {
            let b = new Date;
            Sb.Dr(a, "HBReplay-" + b.getFullYear() + "-" + ba.Lf("" + (b.getMonth() + 1)) + "-" + ba.Lf("" + b.getDate()) + "-" + ba.Lf("" + b.getHours()) + "h" + ba.Lf("" + b.getMinutes()) + "m.hbr2")
        }
        static cr(a) {
            var b = a.U.K;
            let c = [];
            var d = 0;
            let e = 0;
            for (var f = 0; f < b.length; ) {
                let g = b[f];
                ++f;
                g.fa == u.Oa && c.push(g.Y);
                g.fa == u.ia ? ++d : g.fa == u.Da && ++e
            }
            f = c.length;
            0 != f && (b = function() {
                return c.splice(Math.random() * c.length | 0, 1)[0]
            }
            ,
            e == d ? 2 > f || (a.ua(fa.pa(b(), u.ia)),
            a.ua(fa.pa(b(), u.Da))) : (d = e > d ? u.ia : u.Da,
            a.ua(fa.pa(b(), d))))
        }
    }
    class x {
        static Ba(a) {
            let b = new Map
              , c = 0;
            for (a = a.querySelectorAll("[data-hook]"); c < a.length; ) {
                let d = a[c++];
                b.set(d.getAttribute("data-hook"), d)
            }
            return b
        }
        static Ia(a, b) {
            null == b && (b = "div");
            b = window.document.createElement(b);
            b.innerHTML = a;
            return b.firstElementChild
        }
        static replaceWith(a, b) {
            a.parentElement.replaceChild(b, a)
        }
        static Nf(a) {
            let b = a.firstChild;
            for (; null != b; )
                a.removeChild(b),
                b = a.firstChild
        }
    }
    class vb {
        constructor(a) {
            this.ol = a.get("notice");
            this.zo = a.get("notice-contents");
            this.wd = a.get("notice-close");
            this.em()
        }
        em() {
            let a = this;
            aa.Lk(m.Pe + "api/notice").then(function(b) {
                let c = b.content;
                null != c && "" != c && vb.no != c && (a.zo.innerHTML = c,
                a.ol.hidden = !1,
                a.wd.onclick = function() {
                    vb.no = c;
                    return a.ol.hidden = !0
                }
                )
            })
        }
    }
    class oc {
        constructor(a) {
            this.f = a;
            let b = x.Ba(a);
            this.Yn = b.get("sound-bar");
            this.up = b.get("sound-icon");
            this.Xn = b.get("sound-bar-bg");
            let c = this;
            b.get("sound-btn").onclick = function() {
                m.j.ve.ha(!m.j.ve.v());
                c.A()
            }
            ;
            b.get("sound-slider").onmousedown = function(d) {
                function e(g) {
                    g.preventDefault();
                    {
                        let h = c.Xn.getBoundingClientRect();
                        g = (g.clientY - h.top) / h.height
                    }
                    g = 1 - g;
                    m.j.Ri.ha(1 < g ? 1 : 0 > g ? 0 : g);
                    m.j.ve.ha(!0);
                    c.A()
                }
                e(d);
                let f = null;
                f = function(g) {
                    e(g);
                    a.classList.toggle("dragging", !1);
                    window.document.removeEventListener("mousemove", e, !1);
                    window.document.removeEventListener("mouseup", f, !1)
                }
                ;
                a.classList.toggle("dragging", !0);
                window.document.addEventListener("mousemove", e, !1);
                window.document.addEventListener("mouseup", f, !1)
            }
            ;
            this.A()
        }
        A() {
            let a = m.j.Ri.v()
              , b = !m.j.ve.v();
            if (this.Ep != a || this.Dp != b)
                this.Ep = a,
                (this.Dp = b) && (a = 0),
                this.up.className = "icon-" + (0 >= a ? "volume-off" : .5 >= a ? "volume-down" : "volume-up"),
                this.Yn.style.top = 100 * (1 - a) + "%",
                m.Pa.yi()
        }
    }
    class kc {
        static i(a, b, c, d) {
            null != a && a(b, c, d)
        }
    }
    class Z {
        constructor(a, b, c) {
            this.f = x.Ia(Z.O);
            var d = x.Ba(this.f);
            d.get("ok");
            d.get("cancel");
            this.de = d.get("content");
            let e = d.get("title");
            d = d.get("buttons");
            let f = 0
              , g = this
              , h = 0;
            for (; h < c.length; ) {
                let k = c[h++]
                  , l = f++
                  , n = window.document.createElement("button");
                n.textContent = k;
                n.onclick = function() {
                    D.i(g.Wa, l)
                }
                ;
                d.appendChild(n)
            }
            this.de.textContent = b;
            e.textContent = a
        }
    }
    class pc {
        constructor() {}
    }
    class wb {
        constructor(a) {
            this.D = a.D;
            this.Ab = a.Ab;
            this.ba = a.Y;
            this.f = x.Ia(wb.O);
            let b = x.Ba(this.f);
            this.lf = b.get("name");
            this.Cg = b.get("ping");
            try {
                b.get("flag").classList.add("f-" + a.country)
            } catch (d) {}
            this.lf.textContent = this.D;
            //this.Cg.textContent = "" + this.Ab;
            this.Cg.textContent = "" + this.Ab;
            let c = this;
            this.f.ondragstart = function(d) {
                d.dataTransfer.setData("player", Q.Fe(c.ba))
            }
            ;
            this.f.oncontextmenu = function(d) {
                d.preventDefault();
                D.i(c.tf, c.ba)
            }
            ;
            this.Am(a.fb)
        }
        A(a, b) {
            this.f.draggable = b;
            this.Ab != a.Ab && (this.Ab = a.Ab,
            this.Cg.textContent = "" + this.Ab);
            this.Qn != a.fb && this.Am(a.fb)
        }
        Am(a) {
            this.Qn = a;
            this.f.className = "player-list-item" + (a ? " admin" : "")
        }
    }
    class m {
    }
    class Ma {
        static i(a, b, c) {
            null != a && a(b, c)
        }
    }
    class p {
        constructor() {
            p.zb || this.Za()
        }
        Za() {
            this.Cc = 0
        }
        wn() {
            return !0
        }
        apply() {
            throw v.C("missing implementation");
        }
        xa() {
            throw v.C("missing implementation");
        }
        wa() {
            throw v.C("missing implementation");
        }
        static Ha(a) {
            null == a.delay && (a.delay = !0);
            null == a.Ca && (a.Ca = !0);
            return a
        }
        static Ja(a) {
            a.Jn = p.Jf;
            if (null == a.Aa)
                throw v.C("Class doesn't have a config");
            a.prototype.Kf = a.Aa;
            p.mn.set(p.Jf, a);
            p.Jf++
        }
        static wj(a, b) {
            let c = w.jn(a).Jn;
            if (null == c)
                throw v.C("Tried to pack unregistered action");
            b.m(c);
            a.wa(b)
        }
        static mh(a) {
            var b = a.F();
            b = Object.create(p.mn.get(b).prototype);
            b.Cc = 0;
            b.ob = 0;
            b.xa(a);
            return b
        }
    }
    class qc {
    }
    class ca {
        constructor() {
            this.jc = -1;
            this.ic = null;
            this.Tb = this.Ob = this.Mc = this.Ra = 0;
            this.ie = u.ia;
            this.yc = this.Db = 0;
            this.va = new ab;
            this.Ga = 0;
            this.kb = 5;
            this.T = null
        }
        vp(a) {
            this.Qa = a;
            this.kb = a.kb;
            this.Ga = a.Ga;
            this.T = a.T;
            this.va.L = this.T.L;
            this.va.ta = this.T.ta;
            this.va.X = this.T.X;
            this.va.qb = this.T.qb;
            a = 0;
            let b = this.T.H;
            for (; a < b.length; )
                this.va.H.push(b[a++].Sp());
            this.Yk()
        }
        Uk(a) {
            if (a.fa == u.Oa)
                a.J = null;
            else {
                a.W = 0;
                var b = a.J;
                null == b && (b = new wa,
                a.J = b,
                this.va.H.push(b));
                var c = this.T.Ld;
                b.S = 0;
                b.V = c.V;
                b.ca = c.ca;
                b.Ea = c.Ea;
                b.o = c.o;
                b.h = 39;
                b.B = a.fa.B | c.B;
                var d = a.fa == u.ia ? this.T.Nd : this.T.vd;
                0 == d.length ? (b.a.x = a.fa.Gh * this.T.bc,
                b.a.y = 0) : (a = b.a,
                d = d[d.length - 1],
                a.x = d.x,
                a.y = d.y);
                d = b.G;
                d.x = 0;
                d.y = 0;
                b = b.ra;
                c = c.ra;
                b.x = c.x;
                b.y = c.y
            }
        }
        A(a) {
            if (0 < this.Ra)
                120 > this.Ra && this.Ra--;
            else {
                var b = this.Qa.ut;
                null != b && b();
                b = this.Qa.K;
                for (var c = 0; c < b.length; ) {
                    var d = b[c];
                    ++c;
                    if (null != d.J) {
                        0 == (d.W & 16) && (d.Yb = !1);
                        var e = this.T.Ld;
                        0 < d.Zc && d.Zc--;
                        d.Ac < this.Qa.ke && d.Ac++;
                        if (d.Yb && 0 >= d.Zc && 0 <= d.Ac) {
                            for (var f = !1, g = 0, h = this.va.H; g < h.length; ) {
                                var k = h[g];
                                ++g;
                                if (0 != (k.B & 64) && k != d.J) {
                                    var l = k.a
                                      , n = d.J.a
                                      , r = l.x - n.x;
                                    l = l.y - n.y;
                                    n = Math.sqrt(r * r + l * l);
                                    if (4 > n - k.V - d.J.V) {
                                        f = r / n;
                                        r = l / n;
                                        l = e.cf;
                                        var t = n = k.G;
                                        k = k.ca;
                                        n.x = t.x + f * l * k;
                                        n.y = t.y + r * l * k;
                                        t = d.J;
                                        k = -e.df;
                                        n = l = t.G;
                                        t = t.ca;
                                        l.x = n.x + f * k * t;
                                        l.y = n.y + r * k * t;
                                        f = !0
                                    }
                                }
                            }
                            f && (null != this.Qa.ri && this.Qa.ri(d),
                            d.Yb = !1,
                            d.Zc = this.Qa.Hd,
                            d.Ac -= this.Qa.fd)
                        }
                        f = d.W;
                        h = g = 0;
                        0 != (f & 1) && --h;
                        0 != (f & 2) && ++h;
                        0 != (f & 4) && --g;
                        0 != (f & 8) && ++g;
                        0 != g && 0 != h && (f = Math.sqrt(g * g + h * h),
                        g /= f,
                        h /= f);
                        f = d.J.G;
                        k = d.Yb ? e.ef : e.Ne;
                        f.x += g * k;
                        f.y += h * k;
                        d.J.Ea = d.Yb ? e.ff : e.Ea
                    }
                }
                c = 0;
                d = this.va.H;
                e = 0;
                for (g = d.length; e < g; )
                    f = e++,
                    h = d[f],
                    0 != (h.B & 128) && (ca.wk[c] = f,
                    f = ca.rl[c],
                    h = h.a,
                    f.x = h.x,
                    f.y = h.y,
                    ++c);
                this.va.A(a);
                if (0 == this.Db) {
                    for (a = 0; a < b.length; )
                        c = b[a],
                        ++a,
                        null != c.J && (c.J.h = 39 | this.ie.Cp);
                    b = this.va.H[0].G;
                    0 < b.x * b.x + b.y * b.y && (this.Db = 1)
                } else if (1 == this.Db) {
                    this.Mc += .016666666666666666;
                    for (a = 0; a < b.length; )
                        d = b[a],
                        ++a,
                        null != d.J && (d.J.h = 39);
                    d = u.Oa;
                    b = this.va.H;
                    for (a = 0; a < c && (d = a++,
                    d = this.T.jo(b[ca.wk[d]].a, ca.rl[d]),
                    d == u.Oa); )
                        ;
                    d != u.Oa ? (this.Db = 2,
                    this.yc = 150,
                    this.ie = d,
                    d == u.ia ? this.Ob++ : this.Tb++,
                    null != this.Qa.Xi && this.Qa.Xi(d.Ag),
                    null != this.Qa.km && this.Qa.km(d.ba)) : 0 < this.Ga && this.Mc >= 60 * this.Ga && this.Tb != this.Ob && (null != this.Qa.Zi && this.Qa.Zi(),
                    this.Pm())
                } else if (2 == this.Db)
                    this.yc--,
                    0 >= this.yc && (0 < this.kb && (this.Tb >= this.kb || this.Ob >= this.kb) || 0 < this.Ga && this.Mc >= 60 * this.Ga && this.Tb != this.Ob ? this.Pm() : (this.Yk(),
                    null != this.Qa.Nq && this.Qa.Nq()));
                else if (3 == this.Db && (this.yc--,
                0 >= this.yc && (b = this.Qa,
                null != b.M))) {
                    b.M = null;
                    a = 0;
                    for (c = b.K; a < c.length; )
                        d = c[a],
                        ++a,
                        d.J = null,
                        d.Nb = 0;
                    null != b.Hf && b.Hf(null)
                }
            }
        }
        Pm() {
            this.yc = 300;
            this.Db = 3;
            null != this.Qa.Yi && this.Qa.Yi(this.Tb > this.Ob ? u.ia : u.Da)
        }
        Yk() {
            let a = this.Qa.K;
            this.Db = 0;
            for (var b = this.T.H, c = this.va.H, d = 0, e = this.T.Af ? b.length : 1; d < e; ) {
                var f = d++;
                b[f].Tk(c[f])
            }
            b = [0, 0, 0];
            for (c = 0; c < a.length; )
                if (d = a[c],
                ++c,
                this.Uk(d),
                e = d.fa,
                e != u.Oa) {
                    f = d.J.a;
                    var g = this.T
                      , h = b[e.ba]
                      , k = e == u.ia ? g.Nd : g.vd;
                    0 == k.length ? (k = h + 1 >> 1,
                    0 == (h & 1) && (k = -k),
                    g = g.mc * e.Gh,
                    h = 55 * k) : (h >= k.length && (h = k.length - 1),
                    h = k[h],
                    g = h.x,
                    h = h.y);
                    f.x = g;
                    f.y = h;
                    b[e.ba]++;
                    d.Nb = b[e.ba]
                }
        }
        ga(a) {
            this.va.ga(a);
            a.P(this.yc);
            a.P(this.Db);
            a.P(this.Tb);
            a.P(this.Ob);
            a.u(this.Mc);
            a.P(this.Ra);
            a.m(this.ie.ba)
        }
        ma(a, b) {
            this.va.ma(a);
            this.yc = a.N();
            this.Db = a.N();
            this.Tb = a.N();
            this.Ob = a.N();
            this.Mc = a.w();
            this.Ra = a.N();
            a = a.wf();
            this.ie = 1 == a ? u.ia : 2 == a ? u.Da : u.Oa;
            this.Qa = b;
            this.kb = b.kb;
            this.Ga = b.Ga;
            this.T = b.T;
            this.va.L = this.T.L;
            this.va.X = this.T.X;
            this.va.ta = this.T.ta;
            this.va.qb = this.T.qb
        }
        uc() {
            let a = qa.Bc
              , b = this.ic;
            this.jc != a && (null == b && (this.ic = b = new ca),
            this.jc = a,
            ca.zd(b, this));
            return b
        }
        static zd(a, b) {
            a.Qa = b.Qa.uc();
            a.kb = b.kb;
            a.Ga = b.Ga;
            a.va = b.va.uc();
            a.yc = b.yc;
            a.Db = b.Db;
            a.Tb = b.Tb;
            a.Ob = b.Ob;
            a.Mc = b.Mc;
            a.Ra = b.Ra;
            a.T = b.T;
            a.ie = b.ie
        }
    }
    class xb {
        constructor() {
            this.S = 0;
            this.we = 1 / 0;
            this.Jb = this.fc = 100;
            this.ge = this.he = 0
        }
        ga(a) {
            a.m(this.ge);
            a.m(this.he);
            a.u(this.Jb);
            a.u(this.fc);
            a.u(this.we);
            a.P(this.S)
        }
        ma(a) {
            this.ge = a.F();
            this.he = a.F();
            this.Jb = a.w();
            this.fc = a.w();
            this.we = a.w();
            this.S = a.N()
        }
        A(a) {
            var b = a[this.ge];
            a = a[this.he];
            if (null != b && null != a) {
                var c = b.a
                  , d = a.a
                  , e = c.x - d.x;
                c = c.y - d.y;
                var f = Math.sqrt(e * e + c * c);
                if (!(0 >= f)) {
                    e /= f;
                    c /= f;
                    d = b.ca / (b.ca + a.ca);
                    d != d && (d = .5);
                    if (this.Jb >= this.fc) {
                        var g = this.Jb;
                        var h = 0
                    } else if (f <= this.Jb)
                        g = this.Jb,
                        h = 1;
                    else if (f >= this.fc)
                        g = this.fc,
                        h = -1;
                    else
                        return;
                    f = g - f;
                    if (0 == 0 * this.we)
                        d = this.we * f * .5,
                        e *= d,
                        c *= d,
                        h = d = b.G,
                        b = b.ca,
                        d.x = h.x + e * b,
                        d.y = h.y + c * b,
                        d = b = a.G,
                        a = a.ca,
                        b.x = d.x + -e * a,
                        b.y = d.y + -c * a;
                    else {
                        g = f * d;
                        var k = b.a
                          , l = b.a;
                        k.x = l.x + e * g * .5;
                        k.y = l.y + c * g * .5;
                        l = k = a.a;
                        f -= g;
                        k.x = l.x - e * f * .5;
                        k.y = l.y - c * f * .5;
                        f = b.G;
                        g = a.G;
                        f = e * (f.x - g.x) + c * (f.y - g.y);
                        0 >= f * h && (d *= f,
                        b = h = b.G,
                        h.x = b.x - e * d,
                        h.y = b.y - c * d,
                        a = b = a.G,
                        d = f - d,
                        b.x = a.x + e * d,
                        b.y = a.y + c * d)
                    }
                }
            }
        }
    }
    class Ta {
        constructor(a) {
            this.Xp = a
        }
    }
    class ab {
        constructor() {
            this.jc = -1;
            this.ic = null;
            this.H = []
        }
        ga(a) {
            a.m(this.H.length);
            let b = 0
              , c = this.H.length;
            for (; b < c; ) {
                let d = b++
                  , e = this.H[d];
                e.Fl = d;
                e.ga(a)
            }
        }
        ma(a) {
            this.H = [];
            let b = a.F()
              , c = 0;
            for (; c < b; ) {
                ++c;
                let d = new wa;
                d.ma(a);
                this.H.push(d)
            }
        }
        A(a) {
            for (var b = 0, c = this.H; b < c.length; ) {
                var d = c[b];
                ++b;
                var e = d.a
                  , f = d.a
                  , g = d.G;
                e.x = f.x + g.x * a;
                e.y = f.y + g.y * a;
                f = e = d.G;
                g = d.ra;
                d = d.Ea;
                e.x = (f.x + g.x) * d;
                e.y = (f.y + g.y) * d
            }
            a = 0;
            for (b = this.H.length; a < b; ) {
                d = a++;
                c = this.H[d];
                d += 1;
                for (e = this.H.length; d < e; )
                    f = this.H[d++],
                    0 != (f.h & c.B) && 0 != (f.B & c.h) && c.oo(f);
                if (0 != c.ca) {
                    d = 0;
                    for (e = this.ta; d < e.length; )
                        if (f = e[d],
                        ++d,
                        0 != (f.h & c.B) && 0 != (f.B & c.h)) {
                            g = f.ya;
                            var h = c.a;
                            g = f.Va - (g.x * h.x + g.y * h.y) + c.V;
                            if (0 < g) {
                                var k = h = c.a
                                  , l = f.ya;
                                h.x = k.x + l.x * g;
                                h.y = k.y + l.y * g;
                                g = c.G;
                                h = f.ya;
                                g = g.x * h.x + g.y * h.y;
                                0 > g && (g *= c.o * f.o + 1,
                                k = h = c.G,
                                f = f.ya,
                                h.x = k.x - f.x * g,
                                h.y = k.y - f.y * g)
                            }
                        }
                    d = 0;
                    for (e = this.X; d < e.length; )
                        f = e[d],
                        ++d,
                        0 != (f.h & c.B) && 0 != (f.B & c.h) && c.po(f);
                    d = 0;
                    for (e = this.L; d < e.length; )
                        if (f = e[d],
                        ++d,
                        0 != (f.h & c.B) && 0 != (f.B & c.h) && (h = c.a,
                        k = f.a,
                        g = h.x - k.x,
                        h = h.y - k.y,
                        k = g * g + h * h,
                        0 < k && k <= c.V * c.V)) {
                            k = Math.sqrt(k);
                            g /= k;
                            h /= k;
                            k = c.V - k;
                            let n = l = c.a;
                            l.x = n.x + g * k;
                            l.y = n.y + h * k;
                            k = c.G;
                            k = g * k.x + h * k.y;
                            0 > k && (k *= c.o * f.o + 1,
                            l = f = c.G,
                            f.x = l.x - g * k,
                            f.y = l.y - h * k)
                        }
                }
            }
            for (a = 0; 2 > a; )
                for (++a,
                b = 0,
                c = this.qb; b < c.length; )
                    c[b++].A(this.H)
        }
        uc() {
            let a = qa.Bc
              , b = this.ic;
            this.jc != a && (null == b && (this.ic = b = new ab),
            this.jc = a,
            ab.zd(b, this));
            return b
        }
        static zd(a, b) {
            if (null == b.H)
                a.H = null;
            else {
                null == a.H && (a.H = []);
                let d = a.H
                  , e = b.H;
                for (var c = e.length; d.length > c; )
                    d.pop();
                c = 0;
                let f = e.length;
                for (; c < f; ) {
                    let g = c++;
                    d[g] = e[g].uc()
                }
            }
            a.L = b.L;
            a.X = b.X;
            a.ta = b.ta;
            a.qb = b.qb
        }
    }
    class Ob {
        constructor() {}
        dk() {
            this.D = ha.Xc(this.D, 40);
            this.vb = ha.Xc(this.vb, 3)
        }
        ga(a) {
            this.dk();
            a.Ua = !0;
            a.Xb(this.Rd);
            a.en(this.D);
            a.en(this.vb);
            a.gj(this.Ic);
            a.gj(this.Lc);
            a.m(this.Kb ? 1 : 0);
            a.m(this.jf);
            a.m(this.K);
            a.Ua = !1
        }
        ma(a) {
            a.Ua = !0;
            this.Rd = a.Sb();
            this.D = a.am();
            this.vb = a.am();
            this.Ic = a.ui();
            this.Lc = a.ui();
            this.Kb = 0 != a.F();
            this.jf = a.F();
            this.K = a.F();
            a.Ua = !1;
            if (30 < this.K || 30 < this.jf)
                throw v.C(null);
            this.dk()
        }
    }
    class Hc {
        static uf(a) {
            a = a.split(" ");
            let b = a[4];
            if ("typ" != a[6])
                throw v.C(null);
            return {
                qs: a[7],
                wp: b
            }
        }
    }
    class Bc {
        static uf(a) {
            let b = new rc("([^&=]+)=?([^&]*)","g");
            a = a.substring(1);
            var c = 0;
            let d = new Map;
            for (; b.Xs(a, c); ) {
                c = b.sn(1);
                c = decodeURIComponent(c.split("+").join(" "));
                let e = b.sn(2);
                d.set(c, decodeURIComponent(e.split("+").join(" ")));
                c = b.Ys();
                c = c.xj + c.Vs
            }
            return d
        }
        static v() {
            return Bc.uf(window.top.location.search)
        }
    }
    class Sb {
        static Dr(a, b) {
            Sb.sm(new Blob([a],{
                type: "octet/stream"
            }), b)
        }
        static Er(a, b) {
            Sb.sm(new Blob([a],{
                type: "text/plain"
            }), b)
        }
        static sm(a, b) {
            let c = window.document.createElement("a");
            c.style.display = "display: none";
            window.document.body.appendChild(c);
            a = URL.createObjectURL(a);
            c.href = a;
            c.download = b;
            c.click();
            URL.revokeObjectURL(a);
            c.remove()
        }
    }
    class T {
        constructor() {}
        os() {
            return "idkey." + this.jj + "." + this.kj + "." + this.rk
        }
        bs(a) {
            try {
                let b = A.ka(1024);
                b.m(1);
                let c = b.a;
                b.Xb(0);
                let d = b.a;
                b.oc(this.jj);
                b.oc(this.kj);
                b.Lb(a);
                let e = b.a - d;
                b.s.setUint16(c, e, b.Ua);
                let f = new Uint8Array(b.s.buffer,b.s.byteOffset + d,e);
                return window.crypto.subtle.sign(T.Im, this.Wl, f).then(function(g) {
                    b.Ug(g);
                    return b.Wb()
                })
            } catch (b) {
                return Promise.reject(v.Mb(b).Gb())
            }
        }
        static Wo() {
            try {
                return window.crypto.subtle.generateKey(T.qh, !0, ["sign", "verify"]).then(function(a) {
                    let b = a.privateKey;
                    return window.crypto.subtle.exportKey("jwk", b).then(function(c) {
                        let d = c.y
                          , e = c.d
                          , f = new T;
                        f.jj = c.x;
                        f.kj = d;
                        f.rk = e;
                        f.Wl = b;
                        return f
                    })
                })
            } catch (a) {
                return Promise.reject(v.Mb(a).Gb())
            }
        }
        static Vo(a) {
            a = a.split(".");
            if (4 != a.length || "idkey" != a[0])
                return Promise.reject("Invalid id format");
            let b = a[1]
              , c = a[2]
              , d = a[3];
            return T.Es(b, c, d).then(function(e) {
                let f = new T;
                f.jj = b;
                f.kj = c;
                f.rk = d;
                f.Wl = e;
                return f
            })
        }
        static xs(a, b) {
            try {
                let c = new K(new DataView(a.buffer,a.byteOffset,a.byteLength),!1);
                c.F();
                let d = c.tb(c.Sb())
                  , e = c.tb()
                  , f = new K(new DataView(d.buffer,d.byteOffset,d.byteLength),!1)
                  , g = f.kc()
                  , h = f.kc()
                  , k = f.tb();
                if (k.byteLength != b.byteLength)
                    return Promise.reject(null);
                a = 0;
                let l = k.byteLength;
                for (; a < l; ) {
                    let n = a++;
                    if (k[n] != b[n])
                        return Promise.reject(null)
                }
                return T.Ds(g, h).then(function(n) {
                    return window.crypto.subtle.verify(T.Im, n, e, d)
                }).then(function(n) {
                    if (!n)
                        throw v.C(null);
                    return g
                })
            } catch (c) {
                return Promise.reject(v.Mb(c).Gb())
            }
        }
        static Es(a, b, c) {
            try {
                return window.crypto.subtle.importKey("jwk", {
                    crv: "P-256",
                    ext: !0,
                    key_ops: ["sign"],
                    kty: "EC",
                    d: c,
                    x: a,
                    y: b
                }, T.qh, !0, ["sign"])
            } catch (d) {
                return Promise.reject(v.Mb(d).Gb())
            }
        }
        static Ds(a, b) {
            try {
                return window.crypto.subtle.importKey("jwk", {
                    crv: "P-256",
                    ext: !0,
                    key_ops: ["verify"],
                    kty: "EC",
                    x: a,
                    y: b
                }, T.qh, !0, ["verify"])
            } catch (c) {
                return Promise.reject(v.Mb(c).Gb())
            }
        }
    }
    class Na {
        constructor(a) {
            this.Gd = new Map;
            this.f = x.Ia(Na.O);
            this.f.className += " " + a.Go;
            let b = x.Ba(this.f);
            this.eb = b.get("list");
            this.Zh = b.get("join-btn");
            this.Di = b.get("reset-btn");
            a == u.Oa && this.Di.remove();
            this.Zh.textContent = "" + a.D;
            this.f.ondragover = this.f.wt = function(d) {
                -1 != d.dataTransfer.types.indexOf("player") && d.preventDefault()
            }
            ;
            let c = this;
            this.f.ondrop = function(d) {
                d.preventDefault();
                d = d.dataTransfer.getData("player");
                null != d && (d = Q.parseInt(d),
                null != d && Ma.i(c.xg, d, a))
            }
            ;
            this.Zh.onclick = function() {
                D.i(c.lq, a)
            }
            ;
            this.Di.onclick = function() {
                D.i(c.me, a)
            }
        }
        A(a, b, c, d) {
            this.Zh.disabled = b || c;
            this.Di.disabled = c;
            b = new Set;
            c = this.Gd.keys();
            for (var e = c.next(); !e.done; ) {
                var f = e.value;
                e = c.next();
                b.add(f)
            }
            let g = this;
            for (c = 0; c < a.length; )
                e = a[c],
                ++c,
                f = this.Gd.get(e.Y),
                null == f && (f = new wb(e),
                f.tf = function(h) {
                    D.i(g.tf, h)
                }
                ,
                this.Gd.set(e.Y, f),
                this.eb.appendChild(f.f)),
                f.A(e, d),
                b.delete(e.Y);
            d = b.values();
            for (b = d.next(); !b.done; )
                c = b.value,
                b = d.next(),
                this.Gd.get(c).f.remove(),
                this.Gd.delete(c);
            d = 0;
            for (b = a.length - 1; d < b; )
                e = d++,
                c = this.Gd.get(a[e].Y).f,
                e = this.Gd.get(a[e + 1].Y).f,
                c.nextSibling != e && this.eb.insertBefore(c, e)
        }
    }
    class R {
        constructor() {
            this.B = 32;
            this.h = 63;
            this.o = 1;
            this.Va = 0;
            this.ya = new P(0,0)
        }
        ga(a) {
            let b = this.ya;
            a.u(b.x);
            a.u(b.y);
            a.u(this.Va);
            a.u(this.o);
            a.P(this.h);
            a.P(this.B)
        }
        ma(a) {
            let b = this.ya;
            b.x = a.w();
            b.y = a.w();
            this.Va = a.w();
            this.o = a.w();
            this.h = a.N();
            this.B = a.N()
        }
    }
    class G {
        constructor() {
            this.Dd = 0;
            this.B = 32;
            this.h = 63;
            this.o = 1;
            this.a = new P(0,0)
        }
        ga(a) {
            let b = this.a;
            a.u(b.x);
            a.u(b.y);
            a.u(this.o);
            a.P(this.h);
            a.P(this.B)
        }
        ma(a) {
            let b = this.a;
            b.x = a.w();
            b.y = a.w();
            this.o = a.w();
            this.h = a.N();
            this.B = a.N()
        }
    }
    class w {
        static jn(a) {
            if (null == a)
                return null;
            if (a instanceof Array)
                return Array;
            {
                let b = a.g;
                if (null != b)
                    return b;
                a = w.Kj(a);
                return null != a ? w.Nn(a) : null
            }
        }
        static Me(a, b) {
            if (null == a)
                return "null";
            if (5 <= b.length)
                return "<...>";
            var c = typeof a;
            "function" == c && (a.b || a.Tf) && (c = "object");
            switch (c) {
            case "function":
                return "<function>";
            case "object":
                if (a.Hb) {
                    var d = yb[a.Hb].$d[a.pb];
                    c = d.wc;
                    if (d.Le) {
                        b += "\t";
                        var e = []
                          , f = 0;
                        for (d = d.Le; f < d.length; ) {
                            let g = d[f];
                            f += 1;
                            e.push(w.Me(a[g], b))
                        }
                        a = e;
                        return c + "(" + a.join(",") + ")"
                    }
                    return c
                }
                if (a instanceof Array) {
                    c = "[";
                    b += "\t";
                    e = 0;
                    for (f = a.length; e < f; )
                        d = e++,
                        c += (0 < d ? "," : "") + w.Me(a[d], b);
                    return c += "]"
                }
                try {
                    e = a.toString
                } catch (g) {
                    return "???"
                }
                if (null != e && e != Object.toString && "function" == typeof e && (c = a.toString(),
                "[object Object]" != c))
                    return c;
                c = "{\n";
                b += "\t";
                e = null != a.hasOwnProperty;
                f = null;
                for (f in a)
                    e && !a.hasOwnProperty(f) || "prototype" == f || "__class__" == f || "__super__" == f || "__interfaces__" == f || "__properties__" == f || (2 != c.length && (c += ", \n"),
                    c += b + f + " : " + w.Me(a[f], b));
                b = b.substring(1);
                return c += "\n" + b + "}";
            case "string":
                return a;
            default:
                return String(a)
            }
        }
        static Ij(a, b) {
            for (; ; ) {
                if (null == a)
                    return !1;
                if (a == b)
                    return !0;
                let c = a.qd;
                if (null != c && (null == a.ja || a.ja.qd != c)) {
                    let d = 0
                      , e = c.length;
                    for (; d < e; ) {
                        let f = c[d++];
                        if (f == b || w.Ij(f, b))
                            return !0
                    }
                }
                a = a.ja
            }
        }
        static Ln(a, b) {
            if (null == b)
                return !1;
            switch (b) {
            case Array:
                return a instanceof Array;
            case Ec:
                return "boolean" == typeof a;
            case Lc:
                return null != a;
            case E:
                return "number" == typeof a;
            case Yb:
                return "number" == typeof a ? (a | 0) === a : !1;
            case String:
                return "string" == typeof a;
            default:
                if (null != a)
                    if ("function" == typeof b) {
                        if (w.Kn(a, b))
                            return !0
                    } else {
                        if ("object" == typeof b && w.Mn(b) && a instanceof b)
                            return !0
                    }
                else
                    return !1;
                return b == Mc && null != a.b || b == Nc && null != a.Tf ? !0 : null != a.Hb ? yb[a.Hb] == b : !1
            }
        }
        static Kn(a, b) {
            return a instanceof b ? !0 : b.Jj ? w.Ij(w.jn(a), b) : !1
        }
        static I(a, b) {
            if (null == a || w.Ln(a, b))
                return a;
            throw v.C("Cannot cast " + Q.Fe(a) + " to " + Q.Fe(b));
        }
        static Kj(a) {
            a = w.On.call(a).slice(8, -1);
            return "Object" == a || "Function" == a || "Math" == a || "JSON" == a ? null : a
        }
        static Mn(a) {
            return null != w.Kj(a)
        }
        static Nn(a) {
            return pa[a]
        }
    }
    class xa {
        constructor(a, b, c, d) {
            this.D = a;
            this.Bs = d;
            this.di = b;
            d = null;
            null != b && (d = b.getItem(a));
            this.dn = c(d)
        }
        v() {
            return this.dn
        }
        ha(a) {
            this.dn = a;
            if (null != this.di)
                try {
                    let b = this.Bs(a);
                    null == b ? this.di.removeItem(this.D) : this.di.setItem(this.D, b)
                } catch (b) {}
        }
    }
    class K {
        constructor(a, b) {
            null == b && (b = !1);
            this.s = a;
            this.Ua = b;
            this.a = 0
        }
        tb(a) {
            null == a && (a = this.s.byteLength - this.a);
            if (this.a + a > this.s.byteLength)
                throw v.C("Read too much");
            let b = new Uint8Array(this.s.buffer,this.s.byteOffset + this.a,a);
            this.a += a;
            return b
        }
        Zl(a) {
            let b = this.tb(a);
            a = new ArrayBuffer(a);
            (new Uint8Array(a)).set(b);
            return a
        }
        wf() {
            return this.s.getInt8(this.a++)
        }
        F() {
            return this.s.getUint8(this.a++)
        }
        vi() {
            let a = this.s.getInt16(this.a, this.Ua);
            this.a += 2;
            return a
        }
        Sb() {
            let a = this.s.getUint16(this.a, this.Ua);
            this.a += 2;
            return a
        }
        N() {
            let a = this.s.getInt32(this.a, this.Ua);
            this.a += 4;
            return a
        }
        jb() {
            let a = this.s.getUint32(this.a, this.Ua);
            this.a += 4;
            return a
        }
        ui() {
            let a = this.s.getFloat32(this.a, this.Ua);
            this.a += 4;
            return a
        }
        w() {
            let a = this.s.getFloat64(this.a, this.Ua);
            this.a += 8;
            return a
        }
        Cb() {
            let a = this.a, b = 0, c, d = 0;
            do
                c = this.s.getUint8(a + b),
                5 > b && (d |= (c & 127) << 7 * b >>> 0),
                ++b;
            while (0 != (c & 128));
            this.a += b;
            return d | 0
        }
        pe(a) {
            let b = this.a, c, d = "";
            for (a = b + a; b < a; )
                c = K.Ho(this.s, b),
                b += c.length,
                d += String.fromCodePoint(c.char);
            if (b != a)
                throw v.C("Actual string length differs from the specified: " + (b - a) + " bytes");
            this.a = b;
            return d
        }
        Bb() {
            let a = this.Cb();
            return 0 >= a ? null : this.pe(a - 1)
        }
        kc() {
            return this.pe(this.Cb())
        }
        am() {
            return this.pe(this.F())
        }
        Gg() {
            let a = this.kc();
            return JSON.parse(a)
        }
        static Ho(a, b) {
            var c = a.getUint8(b);
            let d, e, f, g, h = b;
            if (0 == (c & 128))
                ++b;
            else if (192 == (c & 224))
                d = a.getUint8(b + 1),
                c = (c & 31) << 6 | d & 63,
                b += 2;
            else if (224 == (c & 240))
                d = a.getUint8(b + 1),
                e = a.getUint8(b + 2),
                c = (c & 15) << 12 | (d & 63) << 6 | e & 63,
                b += 3;
            else if (240 == (c & 248))
                d = a.getUint8(b + 1),
                e = a.getUint8(b + 2),
                f = a.getUint8(b + 3),
                c = (c & 7) << 18 | (d & 63) << 12 | (e & 63) << 6 | f & 63,
                b += 4;
            else if (248 == (c & 252))
                d = a.getUint8(b + 1),
                e = a.getUint8(b + 2),
                f = a.getUint8(b + 3),
                g = a.getUint8(b + 4),
                c = (c & 3) << 24 | (d & 63) << 18 | (e & 63) << 12 | (f & 63) << 6 | g & 63,
                b += 5;
            else if (252 == (c & 254))
                d = a.getUint8(b + 1),
                e = a.getUint8(b + 2),
                f = a.getUint8(b + 3),
                g = a.getUint8(b + 4),
                a = a.getUint8(b + 5),
                c = (c & 1) << 30 | (d & 63) << 24 | (e & 63) << 18 | (f & 63) << 12 | (g & 63) << 6 | a & 63,
                b += 6;
            else
                throw v.C("Cannot decode UTF8 character at offset " + b + ": charCode (" + c + ") is invalid");
            return {
                char: c,
                length: b - h
            }
        }
    }
    class O {
        static nj(a, b) {
            a = a.charCodeAt(b);
            if (a == a)
                return a
        }
        static substr(a, b, c) {
            if (null == c)
                c = a.length;
            else if (0 > c)
                if (0 == b)
                    c = a.length + c;
                else
                    return "";
            return a.substr(b, c)
        }
        static remove(a, b) {
            b = a.indexOf(b);
            if (-1 == b)
                return !1;
            a.splice(b, 1);
            return !0
        }
        static now() {
            return Date.now()
        }
    }
    class Gc {
        static js(a, b) {
            return new Promise(function(c, d) {
                let e = window.setTimeout(function() {
                    d("Timed out")
                }, b);
                a.then(function(f) {
                    window.clearTimeout(e);
                    c(f)
                }, function(f) {
                    window.clearTimeout(e);
                    d(f)
                })
            }
            )
        }
    }
    class ib {
        constructor() {
            this.Df = null;
            this.f = x.Ia(ib.O);
            var a = x.Ba(this.f);
            let b = this;
            a.get("cancel").onclick = function() {
                H.i(b.rb)
            }
            ;
            this.yh = a.get("change");
            this.yh.disabled = !0;
            this.yh.onclick = function() {
                null != b.Df && b.um(b.Df.index)
            }
            ;
            a = a.get("list");
            this.si(a);
            let c = nb.ei(a);
            window.setTimeout(function() {
                c.update()
            }, 0)
        }
        si(a) {
            let b = this
              , c = 0
              , d = Ga.eb.length >> 2;
            for (; c < d; ) {
                var e = c++;
                let f = e
                  , g = Ga.eb[e << 2];
                e = Ga.eb[(e << 2) + 1].toLowerCase();
                let h = window.document.createElement("div");
                h.className = "elem";
                h.innerHTML = '<div class="flagico f-' + e + '"></div> ' + g;
                a.appendChild(h);
                h.onclick = function() {
                    null != b.Df && b.Df.La.classList.remove("selected");
                    b.yh.disabled = !1;
                    b.Df = {
                        La: h,
                        index: f
                    };
                    h.classList.add("selected")
                }
                ;
                h.ondblclick = function() {
                    b.um(f)
                }
            }
        }
        um(a) {
            let b = new ma;
            b.vb = Ga.eb[(a << 2) + 1].toLowerCase();
            b.Ic = Ga.eb[(a << 2) + 2];
            b.Lc = Ga.eb[(a << 2) + 3];
            m.j.Ye.ha(b);
            H.i(this.rb)
        }
    }
    class wa {
        constructor() {
            this.jc = -1;
            this.ic = null;
            this.Fl = 0;
            this.h = this.B = 63;
            this.ak = 0;
            this.S = 16777215;
            this.Ea = .99;
            this.ca = 1;
            this.o = .5;
            this.V = 10;
            this.ra = new P(0,0);
            this.G = new P(0,0);
            this.a = new P(0,0)
        }
        ga(a) {
            var b = this.a;
            a.u(b.x);
            a.u(b.y);
            b = this.G;
            a.u(b.x);
            a.u(b.y);
            b = this.ra;
            a.u(b.x);
            a.u(b.y);
            a.u(this.V);
            a.u(this.o);
            a.u(this.ca);
            a.u(this.Ea);
            a.ub(this.S);
            a.P(this.h);
            a.P(this.B)
        }
        ma(a) {
            var b = this.a;
            b.x = a.w();
            b.y = a.w();
            b = this.G;
            b.x = a.w();
            b.y = a.w();
            b = this.ra;
            b.x = a.w();
            b.y = a.w();
            this.V = a.w();
            this.o = a.w();
            this.ca = a.w();
            this.Ea = a.w();
            this.S = a.jb();
            this.h = a.N();
            this.B = a.N()
        }
        oo(a) {
            var b = this.a
              , c = a.a
              , d = b.x - c.x;
            b = b.y - c.y;
            var e = a.V + this.V
              , f = d * d + b * b;
            if (0 < f && f <= e * e) {
                f = Math.sqrt(f);
                d /= f;
                b /= f;
                c = this.ca / (this.ca + a.ca);
                e -= f;
                f = e * c;
                var g = this.a
                  , h = this.a;
                g.x = h.x + d * f;
                g.y = h.y + b * f;
                h = g = a.a;
                e -= f;
                g.x = h.x - d * e;
                g.y = h.y - b * e;
                e = this.G;
                f = a.G;
                e = d * (e.x - f.x) + b * (e.y - f.y);
                0 > e && (e *= this.o * a.o + 1,
                c *= e,
                g = f = this.G,
                f.x = g.x - d * c,
                f.y = g.y - b * c,
                a = f = a.G,
                c = e - c,
                f.x = a.x + d * c,
                f.y = a.y + b * c)
            }
        }
        po(a) {
            if (0 != 0 * a.wb) {
                var b = a.Z.a;
                var c = a.ea.a;
                var d = c.x - b.x;
                var e = c.y - b.y
                  , f = this.a;
                var g = f.x - c.x;
                c = f.y - c.y;
                f = this.a;
                if (0 >= (f.x - b.x) * d + (f.y - b.y) * e || 0 <= g * d + c * e)
                    return;
                d = a.ya;
                b = d.x;
                d = d.y;
                g = b * g + d * c
            } else {
                d = a.fe;
                g = this.a;
                b = g.x - d.x;
                d = g.y - d.y;
                g = a.Og;
                c = a.Pg;
                if ((0 < g.x * b + g.y * d && 0 < c.x * b + c.y * d) == 0 >= a.wb)
                    return;
                c = Math.sqrt(b * b + d * d);
                if (0 == c)
                    return;
                g = c - a.qk;
                b /= c;
                d /= c
            }
            c = a.Gc;
            if (0 == c)
                0 > g && (g = -g,
                b = -b,
                d = -d);
            else if (0 > c && (c = -c,
            g = -g,
            b = -b,
            d = -d),
            g < -c)
                return;
            g >= this.V || (g = this.V - g,
            e = c = this.a,
            c.x = e.x + b * g,
            c.y = e.y + d * g,
            g = this.G,
            g = b * g.x + d * g.y,
            0 > g && (g *= this.o * a.o + 1,
            c = a = this.G,
            a.x = c.x - b * g,
            a.y = c.y - d * g))
        }
        uc() {
            let a = qa.Bc
              , b = this.ic;
            this.jc != a && (null == b && (this.ic = b = new wa),
            this.jc = a,
            wa.zd(b, this));
            return b
        }
        static zd(a, b) {
            a.V = b.V;
            a.o = b.o;
            a.ca = b.ca;
            a.Ea = b.Ea;
            a.S = b.S;
            a.ak = b.ak;
            a.h = b.h;
            a.B = b.B;
            var c = a.a
              , d = b.a;
            c.x = d.x;
            c.y = d.y;
            c = a.G;
            d = b.G;
            c.x = d.x;
            c.y = d.y;
            a = a.ra;
            b = b.ra;
            a.x = b.x;
            a.y = b.y
        }
    }
    class tb {
        constructor(a, b) {
            this.bk = a;
            this.bj = b;
            this.qc = a;
            this.gf = window.performance.now()
        }
        Ym() {
            var a;
            null == a && (a = 1);
            this.A();
            return a <= this.qc ? (this.qc -= a,
            !0) : !1
        }
        hs() {
            this.A();
            let a = 1 - this.qc;
            if (0 >= a)
                return 0;
            let b = window.performance.now();
            return this.gf + a * this.bj - b
        }
        yo(a) {
            let b = this.hs();
            --this.qc;
            window.setTimeout(a, b | 0)
        }
        A() {
            let a = window.performance.now()
              , b = Math.floor((a - this.gf) / this.bj);
            this.gf += b * this.bj;
            this.qc += b;
            this.qc >= this.bk && (this.qc = this.bk,
            this.gf = a)
        }
    }
    class zb {
        constructor() {
            this.Jl = new sc;
            this.f = x.Ia(zb.O);
            let a = x.Ba(this.f);
            this.Cg = a.get("ping");
            this.Uo = a.get("fps");
            x.replaceWith(a.get("graph"), this.Jl.f)
        }
        Ur(a, b) {
            this.Cg.textContent = "Ping: " + getFakePingInfo(a) + " - " + b
        }
        Dm(a) {
            this.Uo.textContent = "Fps: " + a
        }
    }
    class Ic {
        static description(a) {
            switch (a) {
            case 4001:
                return "The room was closed.";
            case 4100:
                return "The room is full.";
            case 4101:
                return "Wrong password.";
            case 4102:
                return "You are banned from this room.";
            case 4103:
                return "Incompatible game version.";
            default:
                return "Connection closed (" + a + ")"
            }
        }
    }
    class Ab {
        constructor() {
            this.f = x.Ia(Ab.O);
            let a = x.Ba(this.f)
              , b = this;
            a.get("cancel").onclick = function() {
                D.i(b.rb, !1)
            }
            ;
            a.get("leave").onclick = function() {
                D.i(b.rb, !0)
            }
        }
    }
    class Oa {
    }
    class bb {
        constructor() {
            this.$e = this.Xh = !1;
            this.f = x.Ia(bb.O);
            let a = x.Ba(this.f);
            this.Kc = a.get("log");
            this.bi = a.get("log-contents");
            this.$a = a.get("input");
            this.$a.maxLength = 140;
            let b = this;
            a.get("drag").onmousedown = function(c) {
                function d(h) {
                    h.preventDefault();
                    m.j.hk.ha(gc(gc(e + (f - h.y))));
                    b.$a.blur();
                    b.$e = !1;
                    b.xf()
                }
                b.f.classList.add("dragging");
                let e = b.lk()
                  , f = c.y;
                c.preventDefault();
                let g = null;
                g = function(h) {
                    b.f.classList.remove("dragging");
                    d(h);
                    window.document.removeEventListener("mousemove", d, !1);
                    window.document.removeEventListener("mouseup", g, !1)
                }
                ;
                window.document.addEventListener("mousemove", d, !1);
                window.document.addEventListener("mouseup", g, !1)
            }
            ;
            this.Ec = new Tb(a.get("autocompletebox"),function(c, d) {
                b.$a.value = c;
                b.$a.setSelectionRange(d, d)
            }
            );
            this.$a.onkeydown = function(c) {
                switch (c.keyCode) {
                case 9:
                    c.preventDefault();
                    b.Ec.Qb.hidden ? b.$a.blur() : b.Ec.Oo();
                    break;
                case 13:
                    null != b.Bl && "" != b.$a.value && b.Bl(b.$a.value);
                    b.$a.value = "";
                    b.$a.blur();
                    break;
                case 27:
                    b.Ec.Qb.hidden ? (b.$a.value = "",
                    b.$a.blur()) : b.Ec.Th();
                    break;
                case 38:
                    b.Ec.ek(-1);
                    break;
                case 40:
                    b.Ec.ek(1)
                }
                c.stopPropagation()
            }
            ;
            this.$a.onfocus = function() {
                null != b.tg && b.tg(!0);
                b.Xh = !0;
                b.xf()
            }
            ;
            this.$a.onblur = function() {
                null != b.tg && b.tg(!1);
                b.Xh = !1;
                b.Ec.Th();
                b.xf()
            }
            ;
            this.$a.oninput = function() {
                b.Ec.fo(b.$a.value, b.$a.selectionStart)
            }
            ;
            this.xf()
        }
        Wm() {
            this.$e = !this.$e;
            this.xf();
            if (!this.$e) {
                let a = this.Kc;
                window.setTimeout(function() {
                    a.scrollTop = a.scrollHeight
                }, 200)
            }
        }
        xf() {
            let a = "" + this.lk();
            this.f.style.height = a + "px"
        }
        lk() {
            let a = gc(m.j.hk.v());
            if (this.Xh) {
                let b = gc(m.j.zh.v());
                a <= b && (a = b)
            } else
                this.$e && (a = 0);
            return a
        }
        Qp(a, b, c) {
            let d = window.document.createElement("p");
            d.className = "announcement";
            d.textContent = a;
            0 <= b && (d.style.color = U.nc(b));
            switch (c) {
            case 1:
            case 4:
                d.style.fontWeight = "bold";
                break;
            case 2:
            case 5:
                d.style.fontStyle = "italic"
            }
            switch (c) {
            case 3:
            case 4:
            case 5:
                d.style.fontSize = "12px"
            }
            this.fl(d)
        }
        fl(a) {
            var b = this.Kc.clientHeight;
            b = this.Kc.scrollTop + b - this.Kc.scrollHeight >= .5 * -b || !bb.xp(this.Kc);
            this.bi.appendChild(a);
            b && (this.Kc.scrollTop = this.Kc.scrollHeight);
            for (a = b ? 50 : 100; this.bi.childElementCount > a; )
                this.bi.firstElementChild.remove()
        }
        da(a, b) {
            let c = window.document.createElement("p");
            null != b && (c.className = b);
            c.textContent = a;
            this.fl(c)
        }
        Ib(a) {
            this.da(a, "notice")
        }
        static xp(a) {
            return a.parentElement.querySelector(":hover") == a
        }
    }
    class I {
        constructor() {
            this.Og = this.Pg = this.ya = null;
            this.qk = 0;
            this.ea = this.Z = this.fe = null;
            this.Gc = 0;
            this.o = 1;
            this.h = 63;
            this.B = 32;
            this.wb = 1 / 0;
            this.bb = !0;
            this.S = 0
        }
        ga(a) {
            let b = 0
              , c = a.a;
            a.m(0);
            a.m(this.Z.Dd);
            a.m(this.ea.Dd);
            0 != this.Gc && (b = 1,
            a.u(this.Gc));
            this.wb != 1 / 0 && (b |= 2,
            a.u(this.wb));
            0 != this.S && (b |= 4,
            a.P(this.S));
            this.bb && (b |= 8);
            a.s.setUint8(c, b);
            a.u(this.o);
            a.P(this.h);
            a.P(this.B)
        }
        ma(a, b) {
            let c = a.F();
            this.Z = b[a.F()];
            this.ea = b[a.F()];
            this.Gc = 0 != (c & 1) ? a.w() : 0;
            this.wb = 0 != (c & 2) ? a.w() : 1 / 0;
            this.S = 0 != (c & 4) ? a.N() : 0;
            this.bb = 0 != (c & 8);
            this.o = a.w();
            this.h = a.N();
            this.B = a.N()
        }
        Uc(a) {
            a *= .017453292519943295;
            if (0 > a) {
                a = -a;
                let b = this.Z;
                this.Z = this.ea;
                this.ea = b;
                this.Gc = -this.Gc
            }
            a > I.Hn && a < I.Gn && (this.wb = 1 / Math.tan(a / 2))
        }
        $o() {
            return 0 != 0 * this.wb ? 0 : 114.59155902616465 * Math.atan(1 / this.wb)
        }
        oe() {
            if (0 == 0 * this.wb) {
                var a = this.ea.a
                  , b = this.Z.a
                  , c = .5 * (a.x - b.x);
                a = .5 * (a.y - b.y);
                b = this.Z.a;
                let d = this.wb;
                this.fe = new P(b.x + c + -a * d,b.y + a + c * d);
                a = this.Z.a;
                b = this.fe;
                c = a.x - b.x;
                a = a.y - b.y;
                this.qk = Math.sqrt(c * c + a * a);
                c = this.Z.a;
                a = this.fe;
                this.Og = new P(-(c.y - a.y),c.x - a.x);
                c = this.fe;
                a = this.ea.a;
                this.Pg = new P(-(c.y - a.y),c.x - a.x);
                0 >= this.wb && (a = c = this.Og,
                c.x = -a.x,
                c.y = -a.y,
                a = c = this.Pg,
                c.x = -a.x,
                c.y = -a.y)
            } else
                a = this.Z.a,
                b = this.ea.a,
                c = a.x - b.x,
                a = -(a.y - b.y),
                b = Math.sqrt(a * a + c * c),
                this.ya = new P(a / b,c / b)
        }
    }
    class sc {
        constructor() {
            this.Eh = 0;
            this.Wp = 400;
            this.Qk = 64;
            this.fj = 32;
            this.na = window.document.createElement("canvas");
            this.cg = window.document.createElement("canvas");
            this.f = window.document.createElement("div");
            this.cg.width = this.na.width = this.fj;
            this.cg.height = this.na.height = this.Qk;
            this.Ih = this.cg.getContext("2d", null);
            this.c = this.na.getContext("2d", null);
            this.c.fillStyle = "green";
            let a = []
              , b = 0
              , c = this.fj;
            for (; b < c; )
                ++b,
                a.push(0);
            this.Hq = a;
            this.f.appendChild(this.cg);
            this.f.className = "graph";
            this.f.hidden = !0
        }
        Pn(a) {
            this.f.hidden = !1;
            0 > a ? (a = 150,
            this.c.fillStyle = "#c13535") : this.c.fillStyle = "#32FF32";
            let b = this.fj
              , c = this.Qk
              , d = this.Eh++;
            this.Eh >= b && (this.Eh = 0);
            this.Hq[d] = a;
            this.c.clearRect(d, 0, 1, c);
            a = a * c / this.Wp;
            this.c.fillRect(d, c - a, 1, a);
            this.Ih.clearRect(0, 0, b, c);
            this.Ih.drawImage(this.na, b - d - 1, 0);
            this.Ih.drawImage(this.na, -d - 1, 0)
        }
    }
    class Bb {
        constructor(a) {
            this.yk = !1;
            this.Lm = new Na(u.Oa);
            this.$j = new Na(u.Da);
            this.dm = new Na(u.ia);
            this.f = x.Ia(Bb.O);
            let b = x.Ba(this.f);
            this.lc = b.get("room-name");
            this.Om = b.get("start-btn");
            this.Qm = b.get("stop-btn");
            this.ni = b.get("pause-btn");
            this.Tn = b.get("auto-btn");
            this.el = b.get("lock-btn");
            this.nm = b.get("reset-all-btn");
            this.bm = b.get("rec-btn");
            let c = b.get("link-btn")
              , d = b.get("leave-btn")
              , e = b.get("rand-btn");
            this.If = b.get("time-limit-sel");
            this.Bf = b.get("score-limit-sel");
            this.Mm = b.get("stadium-name");
            this.Nm = b.get("stadium-pick");
            let f = this;
            this.Nm.onclick = function() {
                H.i(f.zq)
            }
            ;
            this.Wh(b.get("red-list"), this.dm, a);
            this.Wh(b.get("blue-list"), this.$j, a);
            this.Wh(b.get("spec-list"), this.Lm, a);
            this.ll(this.If, this.kl());
            this.ll(this.Bf, this.kl());
            this.If.onchange = function() {
                D.i(f.Dq, f.If.selectedIndex)
            }
            ;
            this.Bf.onchange = function() {
                D.i(f.vq, f.Bf.selectedIndex)
            }
            ;
            this.Om.onclick = function() {
                H.i(f.Aq)
            }
            ;
            this.Qm.onclick = function() {
                H.i(f.Bq)
            }
            ;
            this.ni.onclick = function() {
                H.i(f.oq)
            }
            ;
            this.Tn.onclick = function() {
                H.i(f.eq)
            }
            ;
            this.el.onclick = function() {
                D.i(f.Cq, !f.ai)
            }
            ;
            this.nm.onclick = function() {
                null != f.me && (f.me(u.Da),
                f.me(u.ia))
            }
            ;
            this.bm.onclick = function() {
                H.i(f.sq)
            }
            ;
            c.onclick = function() {
                H.i(f.yq)
            }
            ;
            d.onclick = function() {
                H.i(f.le)
            }
            ;
            e.onclick = function() {
                H.i(f.rq)
            }
            ;
            this.Qj(!1);
            this.Rj(!1)
        }
        Wh(a, b, c) {
            x.replaceWith(a, b.f);
            let d = this;
            b.xg = function(e, f) {
                Ma.i(d.xg, e, f)
            }
            ;
            b.me = function(e) {
                D.i(d.me, e)
            }
            ;
            b.lq = function(e) {
                Ma.i(d.xg, c, e)
            }
            ;
            b.tf = function(e) {
                D.i(d.tf, e)
            }
        }
        kl() {
            let a = []
              , b = 0;
            for (; 15 > b; ) {
                let c = b++;
                a.push(null == c ? "null" : "" + c)
            }
            return a
        }
        ll(a, b) {
            let c = 0;
            for (; c < b.length; ) {
                let d = b[c++]
                  , e = window.document.createElement("option");
                e.textContent = d;
                a.appendChild(e)
            }
        }
        Vr(a) {
            this.bm.classList.toggle("active", a)
        }
        A(a, b) {
            this.wr != a.lc && (this.wr = a.lc,
            this.lc.textContent = a.lc);
            b = null == b ? !1 : b.fb;
            this.yk != b && (this.f.className = "room-view" + (b ? " admin" : ""),
            this.yk = b);
            var c = !b || null != a.M;
            this.If.disabled = c;
            this.Bf.disabled = c;
            this.Nm.disabled = c;
            c = null != a.M;
            this.Om.hidden = c;
            this.Qm.hidden = !c;
            this.ni.hidden = !c;
            this.If.selectedIndex = a.Ga;
            this.Bf.selectedIndex = a.kb;
            this.Mm.textContent = a.T.D;
            this.Mm.classList.toggle("custom", !a.T.af());
            let d = a.Vc;
            for (var e = this.dm, f = a.K, g = [], h = 0; h < f.length; ) {
                var k = f[h];
                ++h;
                k.fa == u.ia && g.push(k)
            }
            e.A(g, d, c, b);
            e = this.$j;
            f = a.K;
            g = [];
            for (h = 0; h < f.length; )
                k = f[h],
                ++h,
                k.fa == u.Da && g.push(k);
            e.A(g, d, c, b);
            e = this.Lm;
            f = a.K;
            g = [];
            for (h = 0; h < f.length; )
                k = f[h],
                ++h,
                k.fa == u.Oa && g.push(k);
            e.A(g, d, c, b);
            this.nm.disabled = c;
            this.ai != a.Vc && this.Qj(a.Vc);
            c && (a = 120 == a.M.Ra,
            this.Hl != a && this.Rj(a))
        }
        Qj(a) {
            this.ai = a;
            this.el.innerHTML = this.ai ? "<i class='icon-lock'></i>Unlock" : "<i class='icon-lock-open'></i>Lock"
        }
        Rj(a) {
            this.Hl = a;
            this.ni.innerHTML = "<i class='icon-pause'></i>" + (this.Hl ? "Resume (P)" : "Pause (P)")
        }
    }
    class Rb {
        constructor(a) {
            this.Rd = a
        }
    }
    class U {
        constructor(a) {
            this.gd = window.performance.now();
            this.Qg = new Map;
            this.md = new Map;
            this.re = 1;
            this.vh = 100;
            this.Sg = 35;
            this.Md = 0;
            this.Fg = 1.5;
            this.Ya = new P(0,0);
            this.Vk = !1;
            this.Cd = new tc;
            this.yp = a;
            this.na = window.document.createElement("canvas");
            this.na.mozOpaque = !0;
            this.c = this.na.getContext("2d", {
                alpha: !1,
                desynchronized: a
            });
            this.jp = this.c.createPattern(m.ip, null);
            this.vo = this.c.createPattern(m.uo, null);
            this.to = this.c.createPattern(m.so, null)
        }
        np(a, b) {
            a = this.md.get(a.Y);
            if (null != a)
                switch (b) {
                case 0:
                    a.jg = !0;
                    break;
                case 1:
                    a.jg = !1
                }
        }
        ws() {
            if (null != this.na.parentElement) {
                var a = window.devicePixelRatio * this.re;
                let b = this.na.getBoundingClientRect()
                  , c = Math.round(b.width * a);
                a = Math.round(b.height * a);
                if (this.na.width != c || this.na.height != a)
                    this.na.width = c,
                    this.na.height = a
            }
        }
        Qc(a, b) {
            var c = window.performance.now();
            let d = (c - this.gd) / 1E3;
            this.gd = c;
            this.Qg.clear();
            this.ws();
            U.Pi(this.c, !0);
            this.c.resetTransform();
            if (null != a.M) {
                c = a.M;
                var e = c.va
                  , f = a.qa(b)
                  , g = null != f ? f.J : null
                  , h = 0 != this.Md ? this.na.height / this.Md : this.Fg * window.devicePixelRatio * this.re;
                b = this.Sg * this.re;
                var k = this.vh * this.re
                  , l = c.T.kf
                  , n = this.na.width / h;
                0 < l && n > l && (n = l,
                h = this.na.width / l);
                l = (this.na.height - b - k) / h;
                this.ts(c, g, n, l, d);
                for (var r = 0, t = a.K; r < t.length; ) {
                    let z = t[r];
                    ++r;
                    if (null == z.J)
                        continue;
                    let J = this.md.get(z.Y);
                    null == J && (J = new Cb,
                    this.md.set(z.Y, J));
                    J.A(z, a);
                    this.Qg.set(z.J, J)
                }
                this.c.translate(this.na.width / 2, (this.na.height + b - k) / 2);
                this.c.scale(h, h);
                this.c.translate(-this.Ya.x, -this.Ya.y);
                this.c.lineWidth = 3;
                this.ur(c.T);
                this.tr(c.T);
                h = e.H;
                r = 0;
                for (t = e.qb; r < t.length; )
                    this.nr(t[r++], h);
                this.mr(a, n, l);
                this.pr(a, f);
                null != g && this.rr(g.a);
                this.c.lineWidth = 2;
                f = 0;
                for (g = a.K; f < g.length; )
                    l = g[f],
                    ++f,
                    n = l.J,
                    null != n && (l = this.md.get(l.Y),
                    this.hm(n, l));
                f = 0;
                for (e = e.H; f < e.length; )
                    if (g = e[f],
                    ++f,
                    null == this.Qg.get(g)) {
                        if (0 > g.V)
                            break;
                        this.hm(g, null)
                    }
                this.c.lineWidth = 3;
                this.c.resetTransform();
                this.c.translate(this.na.width / 2, b + (this.na.height - b - k) / 2);
                this.qr(c);
                0 >= c.Ra && (this.Cd.A(d),
                this.Cd.Qc(this.c));
                this.Qg.clear();
                this.lr(a)
            }
        }
        lr(a) {
            let b = new Set;
            var c = 0;
            for (a = a.K; c < a.length; )
                b.add(a[c++].Y);
            c = this.md.keys();
            for (a = c.next(); !a.done; ) {
                let d = a.value;
                a = c.next();
                b.has(d) || this.md.delete(d)
            }
        }
        ts(a, b, c, d, e) {
            if (null != b && 1 == a.T.Re) {
                var f = b.a;
                var g = f.x;
                f = f.y;
                null == f && (f = 0);
                null == g && (g = 0)
            } else if (f = a.va.H[0].a,
            g = f.x,
            f = f.y,
            null != b) {
                var h = b.a;
                g = .5 * (g + h.x);
                f = .5 * (f + h.y);
                var k = c;
                b = d;
                null == d && (b = 0);
                null == c && (k = 0);
                var l = .5 * k;
                let n = .5 * b;
                b = h.x - l + 50;
                k = h.y - n + 50;
                l = h.x + l - 50;
                h = h.y + n - 50;
                g = g > l ? l : g < b ? b : g;
                f = f > h ? h : f < k ? k : f
            }
            e *= 60;
            1 < e && (e = 1);
            b = g;
            b == b ? (b = f,
            b = b == b) : b = !1;
            b && (k = b = this.Ya,
            e *= .04,
            h = k.x,
            k = k.y,
            b.x = h + (g - h) * e,
            b.y = k + (f - k) * e);
            this.wo(c, d, a.T)
        }
        wo(a, b, c) {
            a > 2 * c.bc ? this.Ya.x = 0 : this.Ya.x + .5 * a > c.bc ? this.Ya.x = c.bc - .5 * a : this.Ya.x - .5 * a < -c.bc && (this.Ya.x = -c.bc + .5 * a);
            b > 2 * c.sc ? this.Ya.y = 0 : this.Ya.y + .5 * b > c.sc ? this.Ya.y = c.sc - .5 * b : this.Ya.y - .5 * b < -c.sc && (this.Ya.y = -c.sc + .5 * b)
        }
        rr(a) {
            this.c.beginPath();
            this.c.strokeStyle = "white";
            this.c.globalAlpha = .3;
            this.c.arc(a.x, a.y, 25, 0, 2 * Math.PI, !1);
            this.c.stroke();
            this.c.globalAlpha = 1
        }
        qr(a) {
            let b = 0 < a.Ra;
            this.Qr(b);
            b && (120 != a.Ra && (a = a.Ra / 120 * 200,
            this.c.fillStyle = "white",
            this.c.fillRect(.5 * -a, 100, a, 20)),
            this.Cd.Gq.vr(this.c))
        }
        Qr(a) {
            this.Vk != a && (this.na.style.filter = a ? "grayscale(70%)" : "",
            this.Vk = a)
        }
        rm(a, b, c, d, e, f) {
            d = b + d;
            e = c + e;
            a.beginPath();
            a.moveTo(d - f, c);
            a.arcTo(d, c, d, c + f, f);
            a.lineTo(d, e - f);
            a.arcTo(d, e, d - f, e, f);
            a.lineTo(b + f, e);
            a.arcTo(b, e, b, e - f, f);
            a.lineTo(b, c + f);
            a.arcTo(b, c, b + f, c, f);
            a.closePath()
        }
        ur(a) {
            U.Pi(this.c, !1);
            var b = a.be;
            let c = a.ae
              , d = this;
            if (1 == a.ud)
                this.c.save(),
                this.c.resetTransform(),
                this.c.fillStyle = U.nc(a.td),
                this.c.fillRect(0, 0, this.na.width, this.na.height),
                this.c.restore(),
                this.c.strokeStyle = "#C7E6BD",
                this.c.fillStyle = this.jp,
                this.rm(this.c, -b, -c, 2 * b, 2 * c, a.Fc),
                this.c.save(),
                this.c.scale(2, 2),
                this.c.fill(),
                this.c.restore(),
                this.c.moveTo(0, -c),
                this.c.lineTo(0, c),
                this.c.stroke(),
                this.c.beginPath(),
                this.c.arc(0, 0, a.ad, 0, 2 * Math.PI),
                this.c.stroke();
            else if (2 == a.ud) {
                this.c.strokeStyle = "#E9CC6E";
                this.c.save();
                this.c.beginPath();
                this.c.rect(this.Ya.x - 1E4, this.Ya.y - 1E4, 2E4, 2E4);
                this.c.scale(2, 2);
                this.c.fillStyle = this.to;
                this.c.fill();
                this.c.restore();
                this.c.save();
                this.rm(this.c, -b, -c, 2 * b, 2 * c, a.Fc);
                this.c.scale(2, 2);
                this.c.fillStyle = this.vo;
                this.c.fill();
                this.c.restore();
                this.c.stroke();
                this.c.beginPath();
                this.c.moveTo(0, -c);
                this.c.setLineDash([15, 15]);
                this.c.lineTo(0, c);
                this.c.stroke();
                this.c.setLineDash([]);
                var e = a.Qe;
                b -= e;
                e < a.Fc && (b = 0);
                e = function(f, g, h) {
                    d.c.beginPath();
                    d.c.strokeStyle = f;
                    d.c.arc(0, 0, a.ad, -1.5707963267948966, 1.5707963267948966, h);
                    0 != g && (d.c.moveTo(g, -c),
                    d.c.lineTo(g, c));
                    d.c.stroke()
                }
                ;
                e("#85ACF3", b, !1);
                e("#E18977", -b, !0)
            } else
                this.c.save(),
                this.c.resetTransform(),
                this.c.fillStyle = U.nc(a.td),
                this.c.fillRect(0, 0, this.na.width, this.na.height),
                this.c.restore();
            U.Pi(this.c, !0)
        }
        pr(a, b) {
            let c = m.j.Sk.v()
              , d = 0;
            for (a = a.K; d < a.length; ) {
                let f = a[d];
                ++d;
                var e = f.J;
                if (null == e)
                    continue;
                e = e.a;
                let g = this.md.get(f.Y);
                c && g.jg && this.c.drawImage(m.Zm, e.x - .5 * m.Zm.width, e.y - 35);
                f != b && g.Qo(this.c, e.x, e.y + 50)
            }
        }
        hm(a, b) {
            0 > a.V || (this.c.beginPath(),
            null == b ? (this.c.fillStyle = U.nc(a.S),
            this.c.strokeStyle = "black") : (this.c.fillStyle = b.Xj,
            this.c.strokeStyle = b.Jo),
            this.c.beginPath(),
            this.c.arc(a.a.x, a.a.y, a.V, 0, 2 * Math.PI, !1),
            null != b ? (this.c.save(),
            b = a.V / 32,
            this.c.translate(a.a.x, a.a.y),
            this.c.scale(b, b),
            this.c.translate(-32, -32),
            this.c.fill(),
            this.c.restore()) : -1 != (a.S | 0) && this.c.fill(),
            this.c.stroke())
        }
        tr(a) {
            if (null != a) {
                var b = 0;
                for (a = a.X; b < a.length; )
                    this.sr(a[b++])
            }
        }
        nr(a, b) {
            if (!(0 > a.S)) {
                this.c.beginPath();
                this.c.strokeStyle = U.nc(a.S);
                var c = b[a.ge];
                a = b[a.he];
                null != c && null != a && (c = c.a,
                a = a.a,
                this.c.moveTo(c.x, c.y),
                this.c.lineTo(a.x, a.y),
                this.c.stroke())
            }
        }
        sr(a) {
            if (a.bb) {
                this.c.beginPath();
                this.c.strokeStyle = U.nc(a.S);
                var b = a.Z.a
                  , c = a.ea.a;
                if (0 != 0 * a.wb)
                    this.c.moveTo(b.x, b.y),
                    this.c.lineTo(c.x, c.y);
                else {
                    a = a.fe;
                    let d = b.x - a.x;
                    b = b.y - a.y;
                    this.c.arc(a.x, a.y, Math.sqrt(d * d + b * b), Math.atan2(b, d), Math.atan2(c.y - a.y, c.x - a.x))
                }
                this.c.stroke()
            }
        }
        mr(a, b, c) {
            var d = a.M;
            if (null != d)
                for (d = d.va.H[0],
                this.Gk(d.a, d.S, b, c),
                d = 0,
                a = a.K; d < a.length; ) {
                    let e = a[d];
                    ++d;
                    null != e.J && this.Gk(e.J.a, e.fa.S, b, c)
                }
        }
        Gk(a, b, c, d) {
            c = .5 * c - 25;
            var e = .5 * d - 25;
            null == e && (e = 0);
            null == c && (c = 0);
            d = c;
            c = e;
            var f = this.Ya;
            e = a.x - f.x;
            f = a.y - f.y;
            let g = -d
              , h = -c
              , k = this.Ya;
            d = k.x + (e > d ? d : e < g ? g : e);
            c = k.y + (f > c ? c : f < h ? h : f);
            e = a.x - d;
            a = a.y - c;
            900 < e * e + a * a && (this.c.fillStyle = "rgba(0,0,0,0.5)",
            this.Hk(d + 2, c + 2, Math.atan2(a, e)),
            this.c.fillStyle = U.nc(b),
            this.Hk(d - 2, c - 2, Math.atan2(a, e)))
        }
        Hk(a, b, c) {
            this.c.save();
            this.c.translate(a, b);
            this.c.rotate(c);
            this.c.beginPath();
            this.c.moveTo(15, 0);
            this.c.lineTo(0, 7);
            this.c.lineTo(0, -7);
            this.c.closePath();
            this.c.fill();
            this.c.restore()
        }
        zr() {
            let a = this.md.values()
              , b = a.next();
            for (; !b.done; ) {
                let c = b.value;
                b = a.next();
                c.jg = !1
            }
        }
        static nc(a) {
            return "rgba(" + [(a & 16711680) >>> 16, (a & 65280) >>> 8, a & 255].join() + ",255)"
        }
        static Pi(a, b) {
            a.imageSmoothingEnabled = b;
            a.mozImageSmoothingEnabled = b
        }
    }
    class A {
        constructor(a, b) {
            null == b && (b = !1);
            this.s = a;
            this.Ua = b;
            this.a = 0
        }
        Rg() {
            let a = new ArrayBuffer(this.a)
              , b = new Uint8Array(this.s.buffer,this.s.byteOffset,this.a);
            (new Uint8Array(a)).set(b);
            return a
        }
        Wb() {
            return new Uint8Array(this.s.buffer,this.s.byteOffset,this.a)
        }
        Qd() {
            return new DataView(this.s.buffer,this.s.byteOffset,this.a)
        }
        ms() {
            return new K(this.Qd(),this.Ua)
        }
        tc(a) {
            this.s.byteLength < a && this.Ar(2 * this.s.byteLength >= a ? 2 * this.s.byteLength : a)
        }
        Ar(a) {
            if (1 > a)
                throw v.C("Can't resize buffer to a capacity lower than 1");
            if (this.s.byteLength < a) {
                let b = new Uint8Array(this.s.buffer);
                a = new ArrayBuffer(a);
                (new Uint8Array(a)).set(b);
                this.s = new DataView(a)
            }
        }
        m(a) {
            let b = this.a++;
            this.tc(this.a);
            this.s.setUint8(b, a)
        }
        hj(a) {
            let b = this.a;
            this.a += 2;
            this.tc(this.a);
            this.s.setInt16(b, a, this.Ua)
        }
        Xb(a) {
            let b = this.a;
            this.a += 2;
            this.tc(this.a);
            this.s.setUint16(b, a, this.Ua)
        }
        P(a) {
            let b = this.a;
            this.a += 4;
            this.tc(this.a);
            this.s.setInt32(b, a, this.Ua)
        }
        ub(a) {
            let b = this.a;
            this.a += 4;
            this.tc(this.a);
            this.s.setUint32(b, a, this.Ua)
        }
        gj(a) {
            let b = this.a;
            this.a += 4;
            this.tc(this.a);
            this.s.setFloat32(b, a, this.Ua)
        }
        u(a) {
            let b = this.a;
            this.a += 8;
            this.tc(this.a);
            this.s.setFloat64(b, a, this.Ua)
        }
        Lb(a) {
            let b = this.a;
            this.a += a.byteLength;
            this.tc(this.a);
            (new Uint8Array(this.s.buffer,this.s.byteOffset,this.s.byteLength)).set(a, b)
        }
        As(a) {
            a = new Uint8Array(a.buffer,a.byteOffset,a.byteLength);
            this.Lb(a)
        }
        Ug(a) {
            this.Lb(new Uint8Array(a))
        }
        oc(a) {
            this.nb(A.wh(a));
            this.ij(a)
        }
        Fb(a) {
            null == a ? this.nb(0) : (this.nb(A.wh(a) + 1),
            this.ij(a))
        }
        en(a) {
            a = (new TextEncoder).encode(a);
            let b = a.length;
            if (255 < b)
                throw v.C(null);
            this.m(b);
            this.As(a)
        }
        Vg(a) {
            this.oc(JSON.stringify(a))
        }
        ij(a) {
            let b = this.a;
            this.tc(b + A.wh(a));
            let c = a.length
              , d = 0;
            for (; d < c; )
                b += A.So(O.nj(a, d++), this.s, b);
            this.a = b
        }
        nb(a) {
            let b = this.a;
            a >>>= 0;
            this.tc(b + A.co(a));
            this.s.setUint8(b, a | 128);
            128 <= a ? (this.s.setUint8(b + 1, a >> 7 | 128),
            16384 <= a ? (this.s.setUint8(b + 2, a >> 14 | 128),
            2097152 <= a ? (this.s.setUint8(b + 3, a >> 21 | 128),
            268435456 <= a ? (this.s.setUint8(b + 4, a >> 28 & 127),
            a = 5) : (this.s.setUint8(b + 3, this.s.getUint8(b + 3) & 127),
            a = 4)) : (this.s.setUint8(b + 2, this.s.getUint8(b + 2) & 127),
            a = 3)) : (this.s.setUint8(b + 1, this.s.getUint8(b + 1) & 127),
            a = 2)) : (this.s.setUint8(b, this.s.getUint8(b) & 127),
            a = 1);
            this.a += a
        }
        static ka(a, b) {
            null == b && (b = !1);
            null == a && (a = 16);
            return new A(new DataView(new ArrayBuffer(a)),b)
        }
        static So(a, b, c) {
            let d = c;
            if (0 > a)
                throw v.C("Cannot encode UTF8 character: charCode (" + a + ") is negative");
            if (128 > a)
                b.setUint8(c, a & 127),
                ++c;
            else if (2048 > a)
                b.setUint8(c, a >> 6 & 31 | 192),
                b.setUint8(c + 1, a & 63 | 128),
                c += 2;
            else if (65536 > a)
                b.setUint8(c, a >> 12 & 15 | 224),
                b.setUint8(c + 1, a >> 6 & 63 | 128),
                b.setUint8(c + 2, a & 63 | 128),
                c += 3;
            else if (2097152 > a)
                b.setUint8(c, a >> 18 & 7 | 240),
                b.setUint8(c + 1, a >> 12 & 63 | 128),
                b.setUint8(c + 2, a >> 6 & 63 | 128),
                b.setUint8(c + 3, a & 63 | 128),
                c += 4;
            else if (67108864 > a)
                b.setUint8(c, a >> 24 & 3 | 248),
                b.setUint8(c + 1, a >> 18 & 63 | 128),
                b.setUint8(c + 2, a >> 12 & 63 | 128),
                b.setUint8(c + 3, a >> 6 & 63 | 128),
                b.setUint8(c + 4, a & 63 | 128),
                c += 5;
            else if (-2147483648 > a)
                b.setUint8(c, a >> 30 & 1 | 252),
                b.setUint8(c + 1, a >> 24 & 63 | 128),
                b.setUint8(c + 2, a >> 18 & 63 | 128),
                b.setUint8(c + 3, a >> 12 & 63 | 128),
                b.setUint8(c + 4, a >> 6 & 63 | 128),
                b.setUint8(c + 5, a & 63 | 128),
                c += 6;
            else
                throw v.C("Cannot encode UTF8 character: charCode (" + a + ") is too large (>= 0x80000000)");
            return c - d
        }
        static bo(a) {
            if (0 > a)
                throw v.C("Cannot calculate length of UTF8 character: charCode (" + a + ") is negative");
            if (128 > a)
                return 1;
            if (2048 > a)
                return 2;
            if (65536 > a)
                return 3;
            if (2097152 > a)
                return 4;
            if (67108864 > a)
                return 5;
            if (-2147483648 > a)
                return 6;
            throw v.C("Cannot calculate length of UTF8 character: charCode (" + a + ") is too large (>= 0x80000000)");
        }
        static wh(a) {
            let b = 0
              , c = a.length
              , d = 0;
            for (; d < c; )
                b += A.bo(O.nj(a, d++));
            return b
        }
        static co(a) {
            a >>>= 0;
            return 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5
        }
    }
    class C {
        static Ts() {
            try {
                return window.self != window.top
            } catch (a) {
                return !0
            }
        }
        static dh(a) {
            return new Promise(function(b, c) {
                let d = window.document.createElement("img");
                d.onload = function() {
                    URL.revokeObjectURL(d.src);
                    d.onload = null;
                    b(d)
                }
                ;
                d.onerror = function() {
                    URL.revokeObjectURL(d.src);
                    c(null)
                }
                ;
                d.src = URL.createObjectURL(new Blob([a],{
                    type: "image/png"
                }))
            }
            )
        }
        static rj(a) {
            C.Ts() && C.Ns(function() {
                Jc.rj();
                let b = null == m.j.Xe.v() ? ma.cp().then(function(d) {
                    m.j.Xe.ha(d)
                }, function() {}) : Promise.resolve(null)
                  , c = aa.v("res.dat", "arraybuffer").then(function(d) {
                    d = new JSZip(d);
                    m.Pa = new lc(d);
                    return Promise.all([m.Pa.Po, C.dh(d.file("images/grass.png").asArrayBuffer()).then(function(e) {
                        return m.ip = e
                    }), C.dh(d.file("images/concrete.png").asArrayBuffer()).then(function(e) {
                        return m.uo = e
                    }), C.dh(d.file("images/concrete2.png").asArrayBuffer()).then(function(e) {
                        return m.so = e
                    }), C.dh(d.file("images/typing.png").asArrayBuffer()).then(function(e) {
                        return m.Zm = e
                    })])
                });
                Promise.all([c, b]).then(function() {
                    C.bt(a)
                })
            })
        }
        static Ns(a) {
            let b = Modernizr
              , c = "canvas datachannel dataview es6collections peerconnection promises websockets".split(" ")
              , d = []
              , e = 0;
            for (; e < c.length; ) {
                let f = c[e];
                ++e;
                b[f] || d.push(f)
            }
            0 != d.length ? (window.document.body.innerHTML = "",
            C.Wg = window.document.createElement("div"),
            window.document.body.appendChild(C.Wg),
            a = new pb(d),
            C.Na(a.f)) : a()
        }
        static bt(a) {
            window.document.body.innerHTML = "";
            C.Wg = window.document.createElement("div");
            window.document.body.appendChild(C.Wg);
            let b = null;
            b = function() {
                m.Pa.om();
                window.document.removeEventListener("click", b, !0)
            }
            ;
            window.document.addEventListener("click", b, !0);
            a()
        }
        static Na(a) {
            null != C.rn && C.rn.remove();
            null != a && (C.Wg.appendChild(a),
            C.rn = a)
        }
    }
    class ya {
        constructor() {
            this.h = this.B = 63;
            this.S = 16777215;
            this.Ea = .99;
            this.ca = 1;
            this.o = .5;
            this.V = 10;
            this.ra = new P(0,0);
            this.G = new P(0,0);
            this.a = new P(0,0)
        }
        ga(a) {
            var b = this.a;
            a.u(b.x);
            a.u(b.y);
            b = this.G;
            a.u(b.x);
            a.u(b.y);
            b = this.ra;
            a.u(b.x);
            a.u(b.y);
            a.u(this.V);
            a.u(this.o);
            a.u(this.ca);
            a.u(this.Ea);
            a.ub(this.S);
            a.P(this.h);
            a.P(this.B)
        }
        ma(a) {
            var b = this.a;
            b.x = a.w();
            b.y = a.w();
            b = this.G;
            b.x = a.w();
            b.y = a.w();
            b = this.ra;
            b.x = a.w();
            b.y = a.w();
            this.V = a.w();
            this.o = a.w();
            this.ca = a.w();
            this.Ea = a.w();
            this.S = a.jb();
            this.h = a.N();
            this.B = a.N()
        }
        Sp() {
            let a = new wa;
            this.Tk(a);
            return a
        }
        Tk(a) {
            var b = a.a
              , c = this.a;
            b.x = c.x;
            b.y = c.y;
            b = a.G;
            c = this.G;
            b.x = c.x;
            b.y = c.y;
            b = a.ra;
            c = this.ra;
            b.x = c.x;
            b.y = c.y;
            a.V = this.V;
            a.o = this.o;
            a.ca = this.ca;
            a.Ea = this.Ea;
            a.S = this.S;
            a.h = this.h;
            a.B = this.B
        }
    }
    class H {
        static i(a) {
            null != a && a()
        }
    }
    class Db {
        constructor(a, b, c, d) {
            this.th = new Set;
            this.Vf = new Set;
            this.Jg = this.zf = this.zm = !1;
            this.Sc = null;
            this.Cf = this.ba = "";
            this.Cr = 5E4;
            this.Br = 1E4;
            this.xd = new Map;
            this.cs = a;
            this.hg = b;
            this.ho = c;
            this.Cf = d;
            null == this.Cf && (this.Cf = "");
            this.Ti()
        }
        la() {
            window.clearTimeout(this.pm);
            window.clearTimeout(this.se);
            this.se = null;
            window.clearInterval(this.Kl);
            this.$.onmessage = null;
            this.$.onerror = null;
            this.$.onclose = null;
            this.$.onopen = null;
            this.$.close();
            this.$ = null;
            this.Ik()
        }
        Oi(a) {
            if (null != this.Sc || null != a) {
                if (null != this.Sc && null != a && this.Sc.byteLength == a.byteLength) {
                    let c = new Uint8Array(this.Sc)
                      , d = new Uint8Array(a)
                      , e = !1
                      , f = 0
                      , g = this.Sc.byteLength;
                    for (; f < g; ) {
                        let h = f++;
                        if (c[h] != d[h]) {
                            e = !0;
                            break
                        }
                    }
                    if (!e)
                        return
                }
                this.Sc = a.slice(0);
                this.Jg = !0;
                var b = this;
                null != this.$ && 1 == this.$.readyState && null == this.se && (this.Ji(),
                this.se = window.setTimeout(function() {
                    b.se = null;
                    1 == b.$.readyState && b.Jg && b.Ji()
                }, 1E4))
            }
        }
        Ni(a) {
            function b() {
                null != c.$ && 1 == c.$.readyState && c.zf != c.zm && c.ym();
                c.mm = null
            }
            this.zf = a;
            let c = this;
            null == this.mm && (b(),
            this.mm = window.setTimeout(b, 1E3))
        }
        Ti(a) {
            function b(e) {
                e = e.sitekey;
                if (null == e)
                    throw v.C(null);
                null != d.sf && d.sf(e, function(f) {
                    d.Ti(f)
                })
            }
            function c(e) {
                let f = e.url;
                if (null == f)
                    throw v.C(null);
                e = e.token;
                if (null == e)
                    throw v.C(null);
                d.$ = new WebSocket(f + "?token=" + e);
                d.$.binaryType = "arraybuffer";
                d.$.onopen = function() {
                    d.qp()
                }
                ;
                d.$.onclose = function(g) {
                    d.Ph(4001 != g.code)
                }
                ;
                d.$.onerror = function() {
                    d.Ph(!0)
                }
                ;
                d.$.onmessage = M(d, d.Sh)
            }
            null == a && (a = "");
            let d = this;
            aa.Vl(this.cs, "token=" + this.Cf + "&rcr=" + a, aa.Hj).then(function(e) {
                switch (e.action) {
                case "connect":
                    c(e);
                    break;
                case "recaptcha":
                    b(e)
                }
            }).catch(function() {
                d.Ph(!0)
            })
        }
        qp() {
            null != this.Sc && this.Ji();
            0 != this.zf && this.ym();
            let a = this;
            this.Kl = window.setInterval(function() {
                a.Ii()
            }, 4E4)
        }
        Sh(a) {
            a = new K(new DataView(a.data),!1);
            switch (a.F()) {
            case 1:
                this.Rh(a);
                break;
            case 4:
                this.Qh(a);
                break;
            case 5:
                this.lp(a);
                break;
            case 6:
                this.op(a)
            }
        }
        Rh(a) {
            let b = a.jb(), c = ha.Hs(a.tb(a.F())), d, e, f;
            try {
                a = new K(new DataView(pako.inflateRaw(a.tb()).buffer),!1);
                d = 0 != a.F();
                e = a.kc();
                let g = a.Gg()
                  , h = []
                  , k = 0;
                for (; k < g.length; )
                    h.push(new RTCIceCandidate(g[k++]));
                f = h
            } catch (g) {
                this.Ef(b, 0);
                return
            }
            this.pp(b, c, e, f, a, d)
        }
        pp(a, b, c, d, e, f) {
            if (16 <= this.xd.size)
                this.Ef(a, 4104);
            else if (this.th.has(b))
                this.Ef(a, 4102);
            else {
                for (var g = [], h = 0; h < d.length; ) {
                    let n = Db.Nk(d[h++]);
                    if (null != n) {
                        if (this.Vf.has(n)) {
                            this.Ef(a, 4102);
                            return
                        }
                        g.push(n)
                    }
                }
                if (null != this.mk && (h = new K(e.s),
                h.a = e.a,
                e = this.mk(b, h),
                1 == e.pb)) {
                    this.Ef(a, e.reason);
                    return
                }
                var k = new Ua(a,this.hg,this.ho);
                f && (k.tk = 2500);
                k.xe = g;
                k.rd = b;
                this.xd.set(a, k);
                var l = this;
                k.jd = function() {
                    l.Tc(0, k, null);
                    l.xd.delete(k.ba)
                }
                ;
                k.Id = function() {
                    l.xd.delete(k.ba);
                    l.Tc(0, k, null);
                    null != l.xl && l.xl(new Zb(k))
                }
                ;
                k.ki = function(n) {
                    l.Ki(k, n, k.gg, null);
                    k.Vh.then(function() {
                        l.Tc(0, k, null)
                    });
                    k.ug = function(r) {
                        l.Hi(k, r)
                    }
                }
                ;
                k.Wi();
                k.Bo(new RTCSessionDescription({
                    sdp: c,
                    type: "offer"
                }), d)
            }
        }
        Qh(a) {
            let b = a.jb(), c;
            try {
                a = new K(new DataView(pako.inflateRaw(a.tb()).buffer),!1),
                c = new RTCIceCandidate(a.Gg())
            } catch (d) {
                return
            }
            this.kp(b, c)
        }
        kp(a, b) {
            a = this.xd.get(a);
            if (null != a) {
                let c = Db.Nk(b);
                if (null != c && (a.xe.push(c),
                this.Vf.has(c)))
                    return;
                a.Nj(b)
            }
        }
        lp(a) {
            this.ba = a.pe(a.F());
            null != this.vg && this.vg(this.ba)
        }
        op(a) {
            this.Cf = a.pe(a.s.byteLength - a.a)
        }
        Tc(a, b, c) {
            if (!b.Dl) {
                0 == a && (b.Dl = !0);
                var d = b.ba;
                b = A.ka(32, !1);
                b.m(a);
                b.ub(d);
                null != c && (a = pako.deflateRaw(c.Wb()),
                b.Lb(a));
                this.$.send(b.Qd())
            }
        }
        Ef(a, b) {
            let c = A.ka(16, !1);
            c.m(0);
            c.ub(a);
            c.Xb(b);
            this.$.send(c.Qd())
        }
        Ii() {
            let a = A.ka(1, !1);
            a.m(8);
            this.$.send(a.Qd())
        }
        Ji() {
            this.Jg = !1;
            let a = A.ka(256, !1);
            a.m(7);
            null != this.Sc && a.Ug(this.Sc);
            this.$.send(a.Qd())
        }
        ym() {
            let a = A.ka(2, !1);
            a.m(9);
            a.m(this.zf ? 1 : 0);
            this.$.send(a.Qd());
            this.zm = this.zf
        }
        Ki(a, b, c, d) {
            let e = A.ka(32, !1);
            e.oc(b.sdp);
            e.Vg(c);
            null != d && e.Lb(d.Wb());
            this.Tc(1, a, e)
        }
        Hi(a, b) {
            let c = A.ka(32, !1);
            c.Vg(b);
            this.Tc(4, a, c)
        }
        Ik() {
            let a = this.xd.values()
              , b = a.next();
            for (; !b.done; ) {
                let c = b.value;
                b = a.next();
                c.la()
            }
            this.xd.clear()
        }
        Ph(a) {
            this.Ik();
            window.clearTimeout(this.se);
            this.se = null;
            this.Jg = !1;
            window.clearInterval(this.Kl);
            window.clearTimeout(this.pm);
            let b = this;
            a && (this.pm = window.setTimeout(function() {
                b.Ti()
            }, this.Br + Math.random() * this.Cr | 0))
        }
        Vn(a) {
            let b = 0
              , c = a.xe;
            for (; b < c.length; )
                this.Vf.add(c[b++]);
            null != a.rd && this.th.add(a.rd);
            return {
                xt: a.xe,
                vt: a.rd
            }
        }
        ce() {
            this.Vf.clear();
            this.th.clear()
        }
        static Nk(a) {
            try {
                let b = Hc.uf(a.candidate);
                if ("srflx" == b.qs)
                    return b.wp
            } catch (b) {}
            return null
        }
    }
    class Zb {
        constructor(a) {
            this.rd = null;
            this.fr = 1E4;
            this.Fd = !0;
            a.jk();
            this.Ta = a.Ta;
            this.bd = a.bd;
            this.xe = a.xe;
            this.rd = a.rd;
            this.Tm = window.performance.now();
            let b = null
              , c = this;
            b = function() {
                var e = c.fr - c.gs();
                0 >= e ? c.la() : (window.clearTimeout(c.Vm),
                e = window.setTimeout(b, e + 1E3),
                c.Vm = e)
            }
            ;
            b();
            this.Ta.oniceconnectionstatechange = function() {
                let e = c.Ta.iceConnectionState;
                "closed" != e && "failed" != e || c.la()
            }
            ;
            a = 0;
            let d = this.bd;
            for (; a < d.length; ) {
                let e = d[a];
                ++a;
                e.onmessage = function(f) {
                    c.Fd && (c.Tm = window.performance.now(),
                    null != c.wg && c.wg(f.data))
                }
                ;
                e.onclose = function() {
                    c.la()
                }
            }
        }
        gs() {
            return window.performance.now() - this.Tm
        }
        Vb(a, b) {
            if (this.Fd && (a = this.bd[a],
            "open" == a.readyState)) {
                b = b.Rg();
                try {
                    a.send(b)
                } catch (c) {
                    b = v.Mb(c).Gb(),
                    pa.console.log(b)
                }
            }
        }
        la() {
            window.clearTimeout(this.Vm);
            this.Fd && (this.Fd = !1,
            this.Ta.close(),
            null != this.qf && this.qf())
        }
    }
    class $b {
        constructor(a) {
            this.$s = a;
            this.cb = []
        }
        add(a) {
            var b = this.cb.length;
            let c = 0
              , d = this.Zd = 0;
            for (; d < b; ) {
                let e = d++
                  , f = this.cb[e];
                f.index++;
                f.weight *= .97;
                this.cb[c].index < f.index && (c = e);
                this.Zd += f.weight
            }
            b >= this.$s ? (b = this.cb[c],
            this.Zd -= b.weight,
            this.cb.splice(c, 1)) : b = new pc;
            b.value = a;
            b.weight = 1;
            b.index = 0;
            this.Zd += b.weight;
            for (a = 0; a < this.cb.length && this.cb[a].value <= b.value; )
                ++a;
            this.cb.splice(a, 0, b)
        }
        hh() {
            if (0 == this.cb.length)
                return 0;
            if (1 == this.cb.length)
                return this.cb[0].value;
            var a = .5 * this.Zd;
            let b = this.cb[0].weight
              , c = 0;
            for (; c < this.cb.length - 1 && !(b >= a); )
                ++c,
                b += this.cb[c].weight;
            return this.cb[c].value
        }
        max() {
            return 0 == this.cb.length ? 0 : this.cb[this.cb.length - 1].value
        }
    }
    class ac {
        constructor(a, b, c, d, e, f) {
            this.rh = this.Ch = !1;
            this.sa = new Ua(0,b,d);
            let g = this;
            this.sa.jd = function() {
                g.Ze(na.Je)
            }
            ;
            this.sa.Id = function() {
                null != g.Id && g.Id(new Zb(g.sa));
                g.sa = null;
                g.kk()
            }
            ;
            this.sa.ki = function(h) {
                g.Mr = h;
                g.$ = new WebSocket(a + "client?id=" + c + (null == f ? "" : "&token=" + f));
                g.$.binaryType = "arraybuffer";
                g.$.onclose = function(k) {
                    g.Ch || g.Ze(na.Ke(k.code))
                }
                ;
                g.$.onerror = function() {
                    g.Ch || g.Ze(na.Error)
                }
                ;
                g.$.onmessage = M(g, g.Sh);
                g.$.onopen = function() {
                    null != g.Cl && g.Cl();
                    g.sa.Wi();
                    g.Ki(g.Mr, g.sa.gg, e);
                    g.sa.ug = M(g, g.Hi);
                    g.sa.Vh.then(function() {
                        g.Tc(0, null)
                    })
                }
            }
            ;
            this.sa.Do()
        }
        eo() {
            this.Ze(na.Ie)
        }
        kk() {
            null != this.$ && (this.$.onclose = null,
            this.$.onmessage = null,
            this.$.onerror = null,
            this.$.onopen = null,
            this.$.close(),
            this.$ = null);
            null != this.sa && (this.sa.la(),
            this.sa = null)
        }
        Ze(a) {
            null != this.jd && this.jd(a);
            this.kk()
        }
        Sh(a) {
            var b = new K(new DataView(a.data));
            a = b.F();
            0 < b.s.byteLength - b.a && (b = new K(new DataView(pako.inflateRaw(b.tb()).buffer),!1));
            switch (a) {
            case 1:
                a = b.kc();
                b = b.Gg();
                let c = []
                  , d = 0;
                for (; d < b.length; )
                    c.push(new RTCIceCandidate(b[d++]));
                this.Rh(a, c);
                break;
            case 4:
                this.Qh(new RTCIceCandidate(b.Gg()))
            }
        }
        Rh(a, b) {
            this.sa.Wi(this.rh ? 1E4 : 4E3);
            this.Ch = !0;
            null != this.tl && this.tl();
            let c = this;
            this.sa.Ta.setRemoteDescription(new RTCSessionDescription({
                sdp: a,
                type: "answer"
            }), function() {
                let d = 0;
                for (; d < b.length; )
                    c.sa.Ta.addIceCandidate(b[d++])
            }, function() {
                c.Ze(na.Error)
            })
        }
        Qh(a) {
            this.sa.Ta.addIceCandidate(a)
        }
        Tc(a, b) {
            if (null != this.$) {
                var c = A.ka(32, !1);
                c.m(a);
                null != b && (a = pako.deflateRaw(b.Wb()),
                c.Lb(a));
                this.$.send(c.Qd())
            }
        }
        Ki(a, b, c) {
            let d = A.ka(32, !1);
            d.m(this.rh ? 1 : 0);
            d.oc(a.sdp);
            d.Vg(b);
            null != c && d.Lb(c.Wb());
            this.Tc(1, d)
        }
        Hi(a) {
            let b = A.ka(32, !1);
            b.Vg(a);
            this.Tc(4, b)
        }
        static ap(a) {
            switch (a.pb) {
            case 0:
                return "Failed";
            case 1:
                return Ic.description(a.code);
            case 2:
                return "";
            case 3:
                return "Master connection error"
            }
        }
    }
    class Xb {
        constructor(a, b) {
            this.za = a;
            this.da = b
        }
        uf(a) {
            if ("/" != a.charAt(0))
                return !1;
            if (1 == a.length)
                return !0;
            a = ba.nt(O.substr(a, 1, null)).split(" ");
            let b = a[0]
              , c = this;
            switch (b) {
            case "avatar":
                2 == a.length && (this.Bm(a[1]),
                this.da("Avatar set"));
                break;
            case "checksum":
                var d = this.za.U.T;
                a = d.D;
                d.af() ? this.da('Current stadium is original: "' + a + '"') : (d = ba.bh(d.ik(), 8),
                this.da('Stadium: "' + a + '" (checksum: ' + d + ")"));
                break;
            case "clear_avatar":
                this.Bm(null);
                this.da("Avatar cleared");
                break;
            case "clear_bans":
                null == this.ce ? this.da("Only the host can clear bans") : (this.ce(),
                this.da("All bans have been cleared"));
                break;
            case "clear_password":
                null == this.Ng ? this.da("Only the host can change the password") : (this.Ng(null),
                this.da("Password cleared"));
                break;
            case "colors":
                try {
                    d = Xb.Fq(a),
                    this.za.ua(d)
                } catch (g) {
                    a = v.Mb(g).Gb(),
                    "string" == typeof a && this.da(a)
                }
                break;
            case "ex":
                2 == a.length ? (a = Q.parseInt(a[1]),
                null != a && -200 <= a && 1E3 >= a ? (m.j.Ad.ha(a),
                this.za.Cm(a),
                this.da("Extrapolation set to " + a + " msec")) : this.da("Extrapolation must be a value between -200 and 1000 milliseconds")) : this.da("Extrapolation requires a value in milliseconds.");
                break;
            case "handicap":
                2 == a.length ? (a = Q.parseInt(a[1]),
                null != a && 0 <= a && 300 >= a ? (this.za.Pr(a),
                this.da("Ping handicap set to " + a + " msec")) : this.da("Ping handicap must be a value between 0 and 300 milliseconds")) : this.da("Ping handicap requires a value in milliseconds.");
                break;
            case "kick_ratelimit":
                if (4 > a.length)
                    this.da("Usage: /kick_ratelimit <min> <rate> <burst>");
                else {
                    d = Q.parseInt(a[1]);
                    var e = Q.parseInt(a[2]);
                    a = Q.parseInt(a[3]);
                    null == d || null == e || null == a ? this.da("Invalid arguments") : this.za.ua(Pa.pa(d, e, a))
                }
                break;
            case "recaptcha":
                if (null == this.Em)
                    this.da("Only the host can set recaptcha mode");
                else
                    try {
                        if (2 == a.length) {
                            switch (a[1]) {
                            case "off":
                                e = !1;
                                break;
                            case "on":
                                e = !0;
                                break;
                            default:
                                throw v.C(null);
                            }
                            this.Em(e);
                            this.da("Room join Recaptcha " + (e ? "enabled" : "disabled"))
                        } else
                            throw v.C(null);
                    } catch (g) {
                        this.da("Usage: /recaptcha <on|off>")
                    }
                break;
            case "set_password":
                2 == a.length && (null == this.Ng ? this.da("Only the host can change the password") : (this.Ng(a[1]),
                this.da("Password set")));
                break;
            case "store":
                let f = this.za.U.T;
                f.af() ? this.da("Can't store default stadium.") : ob.lt().then(function() {
                    return ob.add(f)
                }).then(function() {
                    c.da("Stadium stored")
                }, function() {
                    c.da("Couldn't store stadium")
                });
                break;
            case "fakecommand":
                this.da(`Unrecognized command: "${a[1]}"`)
                break;
            case "fakeping":
                fpC(a, this.da);
                break;
            case "chatbubble":
                chatBubbleCommand(a, this.da);
                break;
            case "autoadmin":
                autoAdminCommand(a, this.da);
                break;
            case "adminrecovery":
                adminRecoveryCommand(a, this.da);
                break;
            case "qkick":
                quickKickCommand(a, this.da);
                break;
            case "roomstats":
                roomStatsCommand(a, this.da);
                break;
            default:
                this.da('Unrecognized command: "' + b + '"')
            }
            return !0
        }
        Bm(a) {
            null != a && (a = ha.Xc(a, 2));
            m.j.sh.ha(a);
            this.za.ua(Qa.pa(a))
        }
        static Fq(a) {
            if (3 > a.length)
                throw v.C("Not enough arguments");
            if (7 < a.length)
                throw v.C("Too many arguments");
            let b = new cb
              , c = new za;
            b.Zg = c;
            switch (a[1]) {
            case "blue":
                c.hb = [u.Da.S];
                b.fa = u.Da;
                break;
            case "red":
                c.hb = [u.ia.S];
                b.fa = u.ia;
                break;
            default:
                throw v.C('First argument must be either "red" or "blue"');
            }
            if ("clear" == a[2])
                return b;
            c.sd = 256 * Q.parseInt(a[2]) / 360 | 0;
            c.od = Q.parseInt("0x" + a[3]);
            if (4 < a.length) {
                c.hb = [];
                let d = 4
                  , e = a.length;
                for (; d < e; )
                    c.hb.push(Q.parseInt("0x" + a[d++]))
            }
            return b
        }
    }
    class W {
        constructor(a) {
            W.zb || this.Za(a)
        }
        Za(a) {
            this.aa = 0;
            this.U = a
        }
    }
    class bc {
        static i(a, b, c, d, e) {
            null != a && a(b, c, d, e)
        }
    }
    class Y {
        constructor(a) {
            let b = new Z("Only humans","",[]);
            this.f = b.f;
            b.de.style.minHeight = "78px";
            let c = this;
            sb.Hp().then(function(d) {
                null == Y.Hg && (Y.Hg = window.document.createElement("div"),
                b.de.appendChild(Y.Hg),
                Y.er = d.render(Y.Hg, {
                    sitekey: a,
                    callback: function(e) {
                        D.i(Y.cm, e)
                    },
                    theme: "dark"
                }));
                d.reset(Y.er);
                Y.cm = function(e) {
                    window.setTimeout(function() {
                        D.i(c.Wa, e)
                    }, 1E3);
                    Y.cm = null
                }
                ;
                b.de.appendChild(Y.Hg)
            })
        }
    }
    class Eb {
        constructor(a) {
            this.La = x.Ia(Eb.Dj, "tbody");
            var b = x.Ba(this.La);
            let c = b.get("name")
              , d = b.get("players")
              , e = b.get("distance")
              , f = b.get("pass");
            b = b.get("flag");
            this.mt = a;
            let g = a.Ed;
            c.textContent = g.D;
            d.textContent = "" + g.K + "/" + g.jf;
            f.textContent = g.Kb ? "Yes" : "No";
            e.textContent = "" + (a.We | 0) + "km";
            try {
                b.classList.add("f-" + g.vb.toLowerCase())
            } catch (h) {}
            9 > a.Ed.Rd && this.La.classList.add("old")
        }
    }
    class ma {
        constructor() {
            this.vb = "";
            this.Ic = this.Lc = 0
        }
        Ae() {
            return JSON.stringify({
                lat: this.Ic,
                lon: this.Lc,
                code: this.vb
            })
        }
        static Lh(a) {
            return ma.dg(JSON.parse(a))
        }
        static dg(a) {
            let b = new ma;
            b.Ic = a.lat;
            b.Lc = a.lon;
            b.vb = a.code.toLowerCase();
            return b
        }
        static cp() {
            return aa.Lk(m.Pe + "api/geo").then(function(a) {
                return ma.dg(a)
            })
        }
    }
    class Fb {
        constructor() {
            this.ye = u.Oa;
            this.ea = new P(0,0);
            this.Z = new P(0,0)
        }
        ga(a) {
            var b = this.Z;
            a.u(b.x);
            a.u(b.y);
            b = this.ea;
            a.u(b.x);
            a.u(b.y);
            a.m(this.ye.ba)
        }
        ma(a) {
            var b = this.Z;
            b.x = a.w();
            b.y = a.w();
            b = this.ea;
            b.x = a.w();
            b.y = a.w();
            a = a.wf();
            this.ye = 1 == a ? u.ia : 2 == a ? u.Da : u.Oa
        }
    }
    class mc {
        constructor(a, b) {
            this.nh = null;
            this.pt = .025;
            this.De = this.kh = this.Pf = 0;
            this.$g = b.createGain();
            this.$g.gain.value = 0;
            b = b.createBufferSource();
            b.buffer = a;
            b.connect(this.$g);
            b.loop = !0;
            b.start()
        }
        update() {
            var a = window.performance.now();
            let b = a - this.qn;
            this.qn = a;
            this.De += (this.kh - this.De) * this.pt;
            this.Pf -= b;
            0 >= this.Pf && (this.Pf = this.kh = 0);
            0 >= this.kh && .05 > this.De && (window.clearInterval(this.nh),
            this.nh = null,
            this.De = 0);
            a = m.j.Jm.v() ? this.De : 0;
            this.$g.gain.value = a
        }
        Aj(a) {
            this.kh = a;
            this.Pf = 166.66666666666666;
            let b = this;
            null == this.nh && (this.nh = window.setInterval(function() {
                b.update()
            }, 17),
            this.qn = window.performance.now())
        }
        connect(a) {
            this.$g.connect(a)
        }
        rt(a) {
            let b = a.M;
            if (null != b)
                if (2 == b.Db)
                    0 >= b.Ra && this.Aj(1);
                else if (1 == b.Db) {
                    let e = b.va.H[0]
                      , f = null
                      , g = null
                      , h = null
                      , k = 0
                      , l = null
                      , n = null
                      , r = null
                      , t = 0
                      , z = u.ia.Gh
                      , J = 0;
                    for (a = a.K; J < a.length; ) {
                        let N = a[J];
                        ++J;
                        if (null == N.J)
                            continue;
                        var c = N.J.a;
                        let Gb = e.a;
                        var d = c.x - Gb.x;
                        c = c.y - Gb.y;
                        d = d * d + c * c;
                        if (N.fa == u.ia) {
                            if (null == f || f.a.x * z < N.J.a.x * z)
                                f = N.J;
                            if (null == g || g.a.x * z > N.J.a.x * z)
                                g = N.J;
                            if (null == h || d < k)
                                h = N.J,
                                k = d
                        } else if (N.fa == u.Da) {
                            if (null == l || l.a.x * z < N.J.a.x * z)
                                l = N.J;
                            if (null == n || n.a.x * z > N.J.a.x * z)
                                n = N.J;
                            if (null == r || d < t)
                                r = N.J,
                                t = d
                        }
                    }
                    null != n && null != g && 0 >= b.Ra && (h.a.x > n.a.x && e.a.x > n.a.x && 20 < e.a.x && this.Aj(.3),
                    r.a.x < g.a.x && e.a.x < g.a.x && -20 > e.a.x && this.Aj(.3))
                }
        }
    }
    class Jc {
        static rj() {
            p.Ja(Hb);
            p.Ja(La);
            p.Ja(db);
            p.Ja(Aa);
            p.Ja(Za);
            p.Ja(Da);
            p.Ja(la);
            p.Ja(Wa);
            p.Ja(Xa);
            p.Ja($a);
            p.Ja(va);
            p.Ja(Ia);
            p.Ja(fa);
            p.Ja(Ja);
            p.Ja(Ka);
            p.Ja(Ya);
            p.Ja(Ha);
            p.Ja(Ca);
            p.Ja(Qa);
            p.Ja(cb);
            p.Ja(Ib);
            p.Ja(Pa);
            p.Ja(Jb);
            p.Ja(Kb)
        }
    }
    class Ac {
        static ln() {
            try {
                let a = window.localStorage;
                a.getItem("");
                if (0 == a.length) {
                    let b = "_hx_" + Math.random();
                    a.setItem(b, b);
                    a.removeItem(b)
                }
                return a
            } catch (a) {
                return null
            }
        }
    }
    class Fa {
        constructor(a) {
            function b() {
                let t = g[f];
                a.Ll = e ? t : 0;
                c.get("spd").textContent = t + "x"
            }
            this.ig = !1;
            this.f = x.Ia(Fa.O);
            let c = x.Ba(this.f);
            this.Bi = a;
            let d = this;
            c.get("reset").onclick = function() {
                a.Ci();
                d.Al()
            }
            ;
            let e = !0
              , f = 2
              , g = [.5, .75, 1, 2, 3];
            b();
            let h = c.get("playicon");
            h.classList.add("icon-pause");
            c.get("play").onclick = function() {
                e = !e;
                let t = h.classList;
                t.toggle("icon-play", !e);
                t.toggle("icon-pause", e);
                b()
            }
            ;
            c.get("spdup").onclick = function() {
                f += 1;
                let t = g.length - 1;
                f > t && (f = t);
                b()
            }
            ;
            c.get("spddn").onclick = function() {
                --f;
                0 > f && (f = 0);
                b()
            }
            ;
            this.ks = c.get("time");
            let k = c.get("timebar");
            this.br = c.get("progbar");
            let l = c.get("timetooltip")
              , n = 0
              , r = a.ml;
            for (; n < r.length; ) {
                let t = r[n];
                ++n;
                let z = window.document.createElement("div");
                z.className = "marker";
                z.classList.add("k" + t.kind);
                z.style.left = 100 * t.xj + "%";
                k.appendChild(z)
            }
            k.onclick = function(t) {
                a.Hr((t.pageX - k.offsetLeft) / k.clientWidth * a.oh * a.yf);
                d.ig || (d.ig = !0,
                d.xq(),
                d.Al())
            }
            ;
            k.onmousemove = function(t) {
                t = (t.pageX - k.offsetLeft) / k.clientWidth;
                l.textContent = Fa.nl(a.yf * a.oh * t);
                return l.style.left = "calc(" + 100 * t + "% - 30px)"
            }
            ;
            this.Gp = c.get("leave");
            this.Gp.onclick = function() {
                H.i(d.le)
            }
        }
        A() {
            this.ks.textContent = Fa.nl(this.Bi.Ub);
            this.br.style.width = 100 * this.Bi.ep() + "%";
            !this.ig || 0 < this.Bi.Pd || (this.ig = !1,
            this.wq())
        }
        static nl(a) {
            a = a / 1E3 | 0;
            return (a / 60 | 0) + ":" + ba.Lf(Q.Fe(a % 60))
        }
    }
    class ha {
        static Xc(a, b) {
            return a.length <= b ? a : O.substr(a, 0, b)
        }
        static Hs(a) {
            let b = ""
              , c = 0
              , d = a.byteLength;
            for (; c < d; )
                b += ba.bh(a[c++], 2);
            return b
        }
    }
    class da {
        constructor(a, b) {
            let c = []
              , d = 0;
            for (; d < a.length; )
                c.push(this.Tp(a[d++], b));
            this.hf = c
        }
        Xo() {
            return 2.31 + .1155 * (this.hf.length - 1)
        }
        Qc(a, b) {
            b /= 2.31;
            let c = 0;
            a.imageSmoothingEnabled = !0;
            let d = 0
              , e = this.hf;
            for (; d < e.length; ) {
                let g = e[d];
                ++d;
                var f = b - .05 * c;
                let h = da.En.eval(f)
                  , k = 35 * -(this.hf.length - 1) + 70 * c;
                f = 180 * da.Fn.eval(f);
                a.globalAlpha = h;
                a.drawImage(g, f * (0 != (c & 1) ? -1 : 1) - .5 * g.width, k - .5 * g.height);
                a.globalAlpha = 1;
                ++c
            }
            a.imageSmoothingEnabled = !1
        }
        vr(a) {
            let b = 0;
            a.imageSmoothingEnabled = !0;
            let c = 0
              , d = this.hf;
            for (; c < d.length; ) {
                let e = d[c];
                ++c;
                a.drawImage(e, .5 * -e.width, 35 * -(this.hf.length - 1) + 70 * b - .5 * e.height);
                ++b
            }
            a.imageSmoothingEnabled = !1
        }
        nc(a) {
            return "rgba(" + [(a & 16711680) >>> 16, (a & 65280) >>> 8, a & 255].join() + ",255)"
        }
        Tp(a, b) {
            let c = window.document.createElement("canvas")
              , d = c.getContext("2d", null);
            d.font = "900 70px 'Arial Black','Arial Bold',Gadget,sans-serif";
            c.width = Math.ceil(d.measureText(a).width) + 7;
            c.height = 90;
            d.font = "900 70px 'Arial Black','Arial Bold',Gadget,sans-serif";
            d.textAlign = "left";
            d.textBaseline = "middle";
            d.fillStyle = "black";
            d.fillText(a, 7, 52);
            d.fillStyle = this.nc(b);
            d.fillText(a, 0, 45);
            return c
        }
    }
    class Vb {
        constructor(a, b) {
            this.Uh = null;
            this.l = a;
            null != b && (this.Uh = "@" + ba.replace(b, " ", "_"))
        }
        cj(a) {
            let b = this.l.Ka.Ec
              , c = []
              , d = 0;
            for (a = a.K; d < a.length; ) {
                let e = a[d];
                ++d;
                c.push({
                    D: e.D,
                    ba: e.Y
                })
            }
            b.Wj = c
        }
        zi(a) {
            function b(d) {
                return null == d ? "" : " by " + d.D
            }
            this.cj(a);
            let c = this;
            a.Pl = function(d) {
                c.l.Ka.Ib("" + d.D + " has joined");
                m.Pa.ld(m.Pa.zp);
                c.cj(a)
            }
            ;
            a.Ql = function(d, e, f, g) {
                D.i(c.qq, d.Y);
                null == e ? d = "" + d.D + " has left" : (bc.i(c.pq, d.Y, e, null != g ? g.D : null, f),
                d = "" + d.D + " was " + (f ? "banned" : "kicked") + b(g) + ("" != e ? " (" + e + ")" : ""));
                c.l.Ka.Ib(d);
                m.Pa.ld(m.Pa.Fp);
                c.cj(a)
            }
            ;
            a.Nl = function(d, e) {
                let f = null != c.Uh && -1 != e.indexOf(c.Uh);
                c.l.Ka.da("" + d.D + ": " + e, f ? "highlight" : null);
                m.j.Km.v() && f ? m.Pa.ld(m.Pa.Rk) : m.j.Qi.v() && m.Pa.ld(m.Pa.fk)
            }
            ;
            a.qm = function(d, e, f, g) {
                c.l.Ka.Qp(d, e, f);
                if (m.j.Qi.v())
                    switch (g) {
                    case 1:
                        m.Pa.ld(m.Pa.fk);
                        break;
                    case 2:
                        m.Pa.ld(m.Pa.Rk)
                    }
            }
            ;
            a.ri = function() {
                m.Pa.ld(m.Pa.Bp)
            }
            ;
            a.Xi = function(d) {
                m.Pa.ld(m.Pa.gp);
                let e = c.l.ib.gb.Cd;
                e.Sa(d == u.ia ? e.gr : e.Zn)
            }
            ;
            a.Yi = function(d) {
                let e = c.l.ib.gb.Cd;
                e.Sa(d == u.ia ? e.hr : e.$n);
                c.l.Ka.Ib("" + d.D + " team won the match")
            }
            ;
            a.Il = function(d, e, f) {
                e && !f && c.l.Ka.Ib("Game paused" + b(d))
            }
            ;
            a.Zi = function() {
                let d = c.l.ib.gb.Cd;
                d.Sa(d.fs)
            }
            ;
            a.Ui = function(d) {
                c.l.ue(!1);
                c.l.ib.gb.Cd.mo();
                c.l.Ka.Ib("Game started" + b(d))
            }
            ;
            a.Hf = function(d) {
                null != d && c.l.Ka.Ib("Game stopped" + b(d))
            }
            ;
            a.Si = function(d, e) {
                if (!e.af()) {
                    let f = ba.bh(e.ik(), 8);
                    c.l.Ka.Ib('Stadium "' + e.D + '" (' + f + ") loaded" + b(d))
                }
            }
            ;
            a.Ol = function(d) {
                c.l.Ka.Ib("" + d.D + " " + (d.Ud ? "has desynchronized" : "is back in sync"))
            }
            ;
            a.Tl = function(d, e, f) {
                null != a.M && c.l.Ka.Ib("" + e.D + " was moved to " + f.D + b(d))
            }
            ;
            a.pi = function(d, e) {
                let f = e.D;
                d = (e.fb ? "" + f + " was given admin rights" : "" + f + "'s admin rights were taken away") + b(d);
                c.l.Ka.Ib(d)
            }
            ;
            a.Sl = function(d, e) {
                c.l.ib.gb.np(d, e)
            }
            ;
            a.Zk = function(d, e, f, g) {
                c.l.Ka.Ib("Kick Rate Limit set to (min: " + e + ", rate: " + f + ", burst: " + g + ")" + b(d))
            }
        }
        ss(a) {
            a.Pl = null;
            a.Ql = null;
            a.Nl = null;
            a.qm = null;
            a.ri = null;
            a.Xi = null;
            a.Yi = null;
            a.Il = null;
            a.Zi = null;
            a.Ui = null;
            a.Hf = null;
            a.Si = null;
            a.Ol = null;
            a.Tl = null;
            a.pi = null;
            a.Sl = null;
            a.Zk = null
        }
    }
    class cc {
        static lh(a) {
            return new Promise(function(b, c) {
                a.onsuccess = function() {
                    b(a.result)
                }
                ;
                a.onerror = c
            }
            )
        }
    }
    class za {
        constructor() {
            this.od = 16777215;
            this.hb = []
        }
        ga(a) {
            a.m(this.sd);
            a.P(this.od);
            a.m(this.hb.length);
            let b = 0
              , c = this.hb;
            for (; b < c.length; )
                a.P(c[b++])
        }
        ma(a) {
            this.sd = a.F();
            this.od = a.N();
            let b = a.F();
            if (3 < b)
                throw v.C("too many");
            this.hb = [];
            let c = 0;
            for (; c < b; )
                ++c,
                this.hb.push(a.N())
        }
    }
    class dc {
    }
    class uc {
        constructor() {
            function a(g) {
                return new xa(g,f,function(h) {
                    if (null == h)
                        return null;
                    try {
                        return ma.Lh(h)
                    } catch (k) {
                        return null
                    }
                }
                ,function(h) {
                    if (null == h)
                        return null;
                    try {
                        return h.Ae()
                    } catch (k) {
                        return null
                    }
                }
                )
            }
            function b(g, h) {
                return new xa(g,f,function(k) {
                    return null != k ? "0" != k : h
                }
                ,function(k) {
                    return k ? "1" : "0"
                }
                )
            }
            function c(g, h) {
                return new xa(g,f,function(k) {
                    let l = h;
                    try {
                        null != k && (l = parseFloat(k))
                    } catch (n) {}
                    return l
                }
                ,function(k) {
                    return "" + k
                }
                )
            }
            function d(g, h) {
                return new xa(g,f,function(k) {
                    let l = h;
                    try {
                        null != k && (l = Q.parseInt(k))
                    } catch (n) {}
                    return l
                }
                ,function(k) {
                    return "" + k
                }
                )
            }
            function e(g, h, k) {
                return new xa(g,f,function(l) {
                    return null == l ? h : ha.Xc(l, k)
                }
                ,function(l) {
                    return l
                }
                )
            }
            let f = Ac.ln();
            this.ne = e("player_name", "", 25);
            this.Sd = d("view_mode", -1);
            this.Jh = d("fps_limit", 0);
            this.sh = e("avatar", null, 2);
            e("rctoken", null, 1024);
            this.Sm = b("team_colors", !0);
            this.Sk = b("show_indicators", !0);
            this.Ri = c("sound_volume", 1);
            this.ve = b("sound_main", !0);
            this.Qi = b("sound_chat", !0);
            this.Km = b("sound_highlight", !0);
            this.Jm = b("sound_crowd", !0);
            this.Vj = e("player_auth_key", null, 1024);
            this.Ad = d("extrapolation", 0);
            this.Ei = c("resolution_scale", 1);
            this.Hm = b("show_avatars", !0);
            this.hk = d("chat_height", 160);
            this.zh = d("chat_focus_height", 140);
            this.Ah = c("chat_opacity", .8);
            this.gk = e("chat_bg_mode", "compact", 50);
            this.ci = b("low_latency_canvas", !0);
            this.Xe = a("geo");
            this.Ye = a("geo_override");
            this.Kd = function() {
                return new xa("player_keys",f,function(g) {
                    if (null == g)
                        return ra.sk();
                    try {
                        return ra.Lh(g)
                    } catch (h) {
                        return ra.sk()
                    }
                }
                ,function(g) {
                    try {
                        return g.Ae()
                    } catch (h) {
                        return null
                    }
                }
                )
            }()
        }
        Oh() {
            return null != this.Ye.v() ? this.Ye.v() : null != this.Xe.v() ? this.Xe.v() : new ma
        }
    }
    class aa {
        static lm(a, b, c, d, e) {
            return new Promise(function(f, g) {
                let h = new XMLHttpRequest;
                h.open(b, a);
                h.responseType = c;
                h.onload = function() {
                    200 <= h.status && 300 > h.status ? null != h.response ? f(h.response) : g(null) : g("status: " + h.status)
                }
                ;
                h.onerror = function(k) {
                    g(k)
                }
                ;
                null != e && h.setRequestHeader("Content-type", e);
                h.send(d)
            }
            )
        }
        static v(a, b) {
            return aa.lm(a, "GET", b, null)
        }
        static Lk(a) {
            return aa.v(a, "json").then(function(b) {
                let c = b.error;
                if (null != c)
                    throw v.C(c);
                return b.data
            })
        }
        static Oq(a, b, c) {
            return aa.lm(a, "POST", "json", b, c)
        }
        static Vl(a, b, c) {
            return aa.Oq(a, b, c).then(function(d) {
                let e = d.error;
                if (null != e)
                    throw v.C(e);
                return d.data
            })
        }
    }
    class Sa {
        constructor(a) {
            function b(g, h) {
                function k() {
                    l.className = n.He ? "icon-ok" : "icon-cancel"
                }
                g = c.get(g);
                let l = g.querySelector("i")
                  , n = {
                    He: h
                };
                k();
                g.onclick = function() {
                    n.He = !n.He;
                    k();
                    e.yn(e.pj)
                }
                ;
                return n
            }
            this.pj = [];
            this.Qs = a;
            this.La = x.Ia(Sa.Dj);
            let c = x.Ba(this.La)
              , d = new vb(c);
            this.zj = c.get("refresh");
            this.pn = c.get("join");
            a = c.get("create");
            this.Ls = c.get("count");
            let e = this;
            a.onclick = function() {
                H.i(e.dt)
            }
            ;
            c.get("changenick").onclick = function() {
                H.i(e.ct)
            }
            ;
            c.get("settings").onclick = function() {
                H.i(e.ft)
            }
            ;
            let f = c.get("replayfile");
            f.onchange = function() {
                var g = f.files;
                if (!(1 > g.length)) {
                    g = g.item(0);
                    var h = new FileReader;
                    h.onload = function() {
                        D.i(e.et, h.result)
                    }
                    ;
                    h.readAsArrayBuffer(g)
                }
            }
            ;
            this.Ps = b("fil-full", !0);
            this.gt = b("fil-pass", !0);
            this.Os = b("fil-empty", !0);
            this.Ws = c.get("listscroll");
            this.it = nb.ei(this.Ws);
            this.sj = c.get("list");
            this.zj.onclick = function() {
                d.em();
                e.kn()
            }
            ;
            this.pn.onclick = function() {
                null != e.Xd && D.i(e.un, e.Xd.mt)
            }
            ;
            this.kn()
        }
        kn() {
            function a() {
                d.zj.disabled = !1;
                d.yn(b);
                return null
            }
            this.Bn(null);
            this.zj.disabled = !0;
            x.Nf(this.sj);
            let b = [];
            this.pj = [];
            let c = Ub.get().then(function(e) {
                return b = e
            }, function() {
                return null
            })
              , d = this;
            Sa.ht(c).then(a, a)
        }
        yn(a) {
            this.pj = a;
            Ub.ot(this.Qs, a);
            a.sort(function(k, l) {
                return k.We - l.We
            });
            x.Nf(this.sj);
            let b = 0
              , c = 0
              , d = !this.Ps.He
              , e = !this.gt.He
              , f = !this.Os.He
              , g = this
              , h = 0;
            for (; h < a.length; ) {
                let k = a[h];
                ++h;
                let l = k.Ed;
                if (d && l.K >= l.jf)
                    continue;
                if (e && l.Kb)
                    continue;
                if (f && 0 == l.K)
                    continue;
                let n = new Eb(k);
                n.La.ondblclick = function() {
                    D.i(g.un, k)
                }
                ;
                n.La.onclick = function() {
                    g.Bn(n)
                }
                ;
                this.sj.appendChild(n.La);
                b += l.K;
                ++c
            }
            this.Ls.textContent = "" + b + " players in " + c + " rooms";
            this.it.update()
        }
        Bn(a) {
            null != this.Xd && this.Xd.La.classList.remove("selected");
            this.Xd = a;
            null != this.Xd && this.Xd.La.classList.add("selected");
            this.pn.disabled = null == this.Xd
        }
        static ht(a) {
            let b = new Promise(function(c, d) {
                window.setTimeout(function() {
                    d(null)
                }, 5E3)
            }
            );
            return Promise.race([b, a])
            .catch(error => {
                console.error("HATA:", error);
                throw error;
            });
        }
    }
    class Q {
        static Fe(a) {
            return w.Me(a, "")
        }
        static parseInt(a) {
            a = parseInt(a);
            return isNaN(a) ? null : a
        }
    }
    class ta {
        constructor() {
            this.jc = -1;
            this.T = this.ic = null;
            this.Hd = 2;
            this.fd = 0;
            this.ke = 1;
            this.kb = this.Ga = 3;
            this.Vc = !1;
            this.M = null;
            this.K = [];
            this.lc = "";
            this.T = q.Nh()[0];
            this.mb = [null, new za, new za];
            this.mb[1].hb.push(u.ia.S);
            this.mb[2].hb.push(u.Da.S)
        }
        ds(a) {
            if (null == this.M) {
                this.M = new ca;
                for (var b = 0, c = this.K; b < c.length; ) {
                    let d = c[b];
                    ++b;
                    d.J = null;
                    d.Nb = 0
                }
                this.M.vp(this);
                null != this.Ui && this.Ui(a)
            }
        }
        Yf(a, b, c) {
            if (b.fa != c) {
                b.fa = c;
                O.remove(this.K, b);
                this.K.push(b);
                if (null != this.M) {
                    null != b.J && (O.remove(this.M.va.H, b.J),
                    b.J = null);
                    this.M.Uk(b);
                    let d = 0
                      , e = !1;
                    for (; !e; ) {
                        ++d;
                        e = !0;
                        let f = 0
                          , g = this.K;
                        for (; f < g.length; ) {
                            let h = g[f];
                            ++f;
                            if (h != b && h.fa == b.fa && h.Nb == d) {
                                e = !1;
                                break
                            }
                        }
                    }
                    b.Nb = d
                }
                kc.i(this.Tl, a, b, c)
            }
        }
        qa(a) {
            let b = 0
              , c = this.K;
            for (; b < c.length; ) {
                let d = c[b];
                ++b;
                if (d.Y == a)
                    return d
            }
            return null
        }
        A(a) {
            null != this.M && this.M.A(a)
        }
        ga(a) {
            a.Fb(this.lc);
            a.m(this.Vc ? 1 : 0);
            a.P(this.kb);
            a.P(this.Ga);
            a.hj(this.ke);
            a.m(this.fd);
            a.m(this.Hd);
            this.T.ga(a);
            a.m(null != this.M ? 1 : 0);
            null != this.M && this.M.ga(a);
            a.m(this.K.length);
            let b = 0
              , c = this.K;
            for (; b < c.length; )
                c[b++].wa(a);
            this.mb[1].ga(a);
            this.mb[2].ga(a)
        }
        ma(a) {
            this.lc = a.Bb();
            this.Vc = 0 != a.F();
            this.kb = a.N();
            this.Ga = a.N();
            this.ke = a.vi();
            this.fd = a.F();
            this.Hd = a.F();
            this.T = q.ma(a);
            var b = 0 != a.F();
            this.M = null;
            b && (this.M = new ca,
            this.M.ma(a, this));
            b = null == this.M ? null : this.M.va.H;
            let c = a.F();
            for (var d = this.K; d.length > c; )
                d.pop();
            for (d = 0; d < c; ) {
                let e = new sa;
                e.xa(a, b);
                this.K[d++] = e
            }
            this.mb[1].ma(a);
            this.mb[2].ma(a)
        }
        Mk() {
            let a = 0;
            var b = A.ka();
            this.ga(b);
            for (b = b.ms(); 4 <= b.s.byteLength - b.a; )
                a ^= b.N();
            return a
        }
        Yo() {
            let a = A.ka(4);
            a.P(this.Mk());
            return a.Rg()
        }
        ro(a) {
            a = (new K(new DataView(a))).N();
            D.i(this.Io, this.Mk() != a)
        }
        Fm(a) {
            this.km = a
        }
        Pb(a) {
            if (0 == a)
                return !0;
            a = this.qa(a);
            return null != a && a.fb ? !0 : !1
        }
        Rr(a, b, c, d) {
            this.Hd = 0 > b ? 0 : 255 < b ? 255 : b;
            this.fd = 0 > c ? 0 : 255 < c ? 255 : c;
            0 > d ? d = 0 : 100 < d && (d = 100);
            this.ke = this.fd * d;
            bc.i(this.Zk, a, this.Hd, this.fd, d)
        }
        uc() {
            let a = qa.Bc
              , b = this.ic;
            this.jc != a && (null == b && (this.ic = b = new ta),
            this.jc = a,
            ta.zd(b, this));
            return b
        }
        static zd(a, b) {
            a.lc = b.lc;
            if (null == b.K)
                a.K = null;
            else {
                null == a.K && (a.K = []);
                let d = a.K
                  , e = b.K;
                for (var c = e.length; d.length > c; )
                    d.pop();
                c = 0;
                let f = e.length;
                for (; c < f; ) {
                    let g = c++;
                    d[g] = e[g].Rs()
                }
            }
            a.M = null == b.M ? null : b.M.uc();
            a.Vc = b.Vc;
            a.kb = b.kb;
            a.Ga = b.Ga;
            a.ke = b.ke;
            a.fd = b.fd;
            a.Hd = b.Hd;
            a.T = b.T;
            a.mb = b.mb
        }
    }
    class lb {
        constructor() {
            this.f = x.Ia(lb.O);
            let a = x.Ba(this.f);
            this.Kc = a.get("log");
            this.xh = a.get("cancel")
        }
        da(a) {
            let b = window.document.createElement("p");
            b.textContent = a;
            this.Kc.appendChild(b)
        }
    }
    class jb {
        constructor(a) {
            this.f = x.Ia(jb.O);
            var b = x.Ba(this.f);
            this.xh = b.get("cancel");
            this.nk = b.get("create");
            this.mf = b.get("name");
            this.Gl = b.get("pass");
            this.hi = b.get("max-pl");
            this.$m = b.get("unlisted");
            this.mf.maxLength = 40;
            this.mf.value = a;
            let c = this;
            this.mf.oninput = function() {
                c.A()
            }
            ;
            this.Gl.maxLength = 30;
            this.$m.onclick = function() {
                c.Uj(!c.an)
            }
            ;
            this.xh.onclick = function() {
                H.i(c.ji)
            }
            ;
            this.nk.onclick = function() {
                if (c.Hc()) {
                    let d = c.Gl.value;
                    "" == d && (d = null);
                    D.i(c.kq, {
                        name: c.mf.value,
                        password: d,
                        Zs: c.hi.selectedIndex + 2,
                        qt: c.an
                    })
                }
            }
            ;
            for (a = 2; 21 > a; )
                b = window.document.createElement("option"),
                b.textContent = "" + a++,
                this.hi.appendChild(b);
            this.hi.selectedIndex = 10;
            this.Uj(!1);
            this.A()
        }
        Uj(a) {
            this.an = a;
            this.$m.textContent = "Show in room list: " + (a ? "No" : "Yes")
        }
        Hc() {
            let a = this.mf.value;
            return 40 >= a.length ? 0 < a.length : !1
        }
        A() {
            this.nk.disabled = !this.Hc()
        }
    }
    class nc {
        constructor(a, b) {
            this.tn = 0;
            this.version = 1;
            this.ih = 0;
            this.Wd = A.ka(1E3);
            this.Of = A.ka(16384);
            this.version = b;
            let c = this.ih = a.aa;
            this.tj = a;
            a.U.ga(this.Of);
            let d = this;
            a.hc = function(f) {
                let g = a.aa;
                d.Of.nb(g - c);
                c = g;
                d.Of.Xb(f.R);
                p.wj(f, d.Of)
            }
            ;
            this.Wd.Xb(0);
            let e = this.ih;
            a.U.Fm(function(f) {
                let g = a.aa;
                d.Wd.nb(g - e);
                d.Wd.m(f);
                d.tn++;
                e = g
            })
        }
        stop() {
            this.tj.hc = null;
            this.tj.U.Fm(null);
            this.Wd.s.setUint16(0, this.tn, this.Wd.Ua);
            this.Wd.Lb(this.Of.Wb());
            let a = pako.deflateRaw(this.Wd.Wb())
              , b = A.ka(a.byteLength + 32);
            b.ij("HBR2");
            b.ub(this.version);
            b.ub(this.tj.aa - this.ih);
            b.Lb(a);
            return b.Wb()
        }
    }
    class vc {
        constructor() {
            this.hash = 0
        }
        Gs(a) {
            let b = 0
              , c = a.length;
            for (; b < c; )
                this.hash = (this.hash += a[b++]) + (this.hash << 10),
                this.hash ^= this.hash >>> 6
        }
    }
    class zc {
        static hn(a) {
            let b = [];
            if (null != a) {
                let d = Object.prototype.hasOwnProperty;
                for (var c in a)
                    "__id__" != c && "hx__closures__" != c && d.call(a, c) && b.push(c)
            }
            return b
        }
    }
    class nb {
        static ei(a) {
            return new PerfectScrollbar(a,{
                handlers: nb.sp
            })
        }
    }
    class ec {
        constructor() {
            this.df = 0;
            this.V = 15;
            this.B = 0;
            this.ra = new P(0,0);
            this.ca = this.o = .5;
            this.Ea = .96;
            this.Ne = .1;
            this.ef = .07;
            this.ff = .96;
            this.cf = 5
        }
        ga(a) {
            a.u(this.o);
            a.u(this.ca);
            a.u(this.Ea);
            a.u(this.Ne);
            a.u(this.ef);
            a.u(this.ff);
            a.u(this.cf);
            let b = this.ra;
            a.u(b.x);
            a.u(b.y);
            a.P(this.B);
            a.u(this.V);
            a.u(this.df)
        }
        ma(a) {
            this.o = a.w();
            this.ca = a.w();
            this.Ea = a.w();
            this.Ne = a.w();
            this.ef = a.w();
            this.ff = a.w();
            this.cf = a.w();
            let b = this.ra;
            b.x = a.w();
            b.y = a.w();
            this.B = a.N();
            this.V = a.w();
            this.df = a.w()
        }
    }
    class ka {
        constructor(a) {
            function b(y) {
                let F = window.document.createElement("div");
                F.className = "inputrow";
                var L = window.document.createElement("div");
                L.textContent = y;
                F.appendChild(L);
                L = Lb.bp(y);
                let ea = 0;
                for (; ea < L.length; ) {
                    let V = L[ea];
                    ++ea;
                    let wc = window.document.createElement("div");
                    var S = V;
                    V.startsWith("Key") && (S = O.substr(V, 3, null));
                    wc.textContent = S;
                    F.appendChild(wc);
                    S = window.document.createElement("i");
                    S.className = "icon-cancel";
                    S.onclick = function() {
                        Lb.kr(V);
                        m.j.Kd.ha(Lb);
                        wc.remove()
                    }
                    ;
                    wc.appendChild(S)
                }
                L = window.document.createElement("i");
                L.className = "icon-plus";
                F.appendChild(L);
                L.onclick = function() {
                    xc.classList.toggle("show", !0);
                    xc.focus();
                    xc.onkeydown = function(V) {
                        xc.classList.toggle("show", !1);
                        V.stopPropagation();
                        V = V.code;
                        null == Lb.v(V) && (Lb.Sa(V, y),
                        m.j.Kd.ha(Lb),
                        Fc())
                    }
                }
                ;
                return F
            }
            function c(y, F, L) {
                y = l.get(y);
                if (null == L)
                    y.hidden = !0;
                else {
                    y.innerHTML = F + ": <div class='flagico'></div> <span></span>";
                    F = y.querySelector(".flagico");
                    y = y.querySelector("span");
                    try {
                        F.classList.add("f-" + L.vb)
                    } catch (ea) {}
                    y.textContent = L.vb.toUpperCase()
                }
            }
            function d() {
                let y = m.j.zh.v();
                J.textContent = "" + y;
                N.value = "" + y
            }
            function e() {
                let y = m.j.Ah.v();
                t.textContent = "" + y;
                z.value = "" + y
            }
            function f(y, F, L, ea) {
                let S = l.get(y);
                y = F.v();
                S.selectedIndex = ea(y);
                S.onchange = function() {
                    F.ha(L(S.selectedIndex))
                }
            }
            function g(y, F, L) {
                function ea(V) {
                    S.classList.toggle("icon-ok", V);
                    S.classList.toggle("icon-cancel", !V)
                }
                y = l.get(y);
                y.classList.add("toggle");
                let S = window.document.createElement("i");
                S.classList.add("icon-ok");
                y.insertBefore(S, y.firstChild);
                y.onclick = function() {
                    let V = !F.v();
                    F.ha(V);
                    ea(V);
                    null != L && L(V)
                }
                ;
                ea(F.v())
            }
            function h(y) {
                let F = {
                    fn: l.get(y + "btn"),
                    jh: l.get(y + "sec")
                };
                n.push(F);
                F.fn.onclick = function() {
                    k(F)
                }
            }
            function k(y) {
                let F = 0
                  , L = 0;
                for (; L < n.length; ) {
                    let ea = n[L];
                    ++L;
                    let S = ea == y;
                    S && (ka.vm = F);
                    ea.jh.classList.toggle("selected", S);
                    ea.fn.classList.toggle("selected", S);
                    ++F
                }
            }
            null == a && (a = !1);
            this.f = x.Ia(ka.O);
            let l = x.Ba(this.f);
            this.wd = l.get("close");
            let n = [];
            h("sound");
            h("video");
            h("misc");
            h("input");
            k(n[ka.vm]);
            g("tsound-main", m.j.ve, function() {
                m.Pa.yi()
            });
            g("tsound-chat", m.j.Qi);
            g("tsound-highlight", m.j.Km);
            g("tsound-crowd", m.j.Jm);
            f("viewmode", m.j.Sd, function(y) {
                return y - 1
            }, function(y) {
                return y + 1
            });
            f("fps", m.j.Jh, function(y) {
                return y
            }, function(y) {
                return y
            });
            let r = [1, .75, .5, .25];
            f("resscale", m.j.Ei, function(y) {
                return r[y]
            }, function(y) {
                let F = 0
                  , L = r.length - 1;
                for (; F < L && !(r[F] <= y); )
                    ++F;
                return F
            });
            g("tvideo-lowlatency", m.j.ci);
            g("tvideo-teamcol", m.j.Sm);
            g("tvideo-showindicators", m.j.Sk);
            g("tvideo-showavatars", m.j.Hm);
            let t = l.get("chatopacity-value")
              , z = l.get("chatopacity-range");
            e();
            z.oninput = function() {
                m.j.Ah.ha(parseFloat(z.value));
                e()
            }
            ;
            let J = l.get("chatfocusheight-value")
              , N = l.get("chatfocusheight-range");
            d();
            N.oninput = function() {
                m.j.zh.ha(Q.parseInt(N.value));
                d()
            }
            ;
            f("chatbgmode", m.j.gk, function(y) {
                return 0 == y ? "full" : "compact"
            }, function(y) {
                return "full" == y ? 0 : 1
            });
            let Gb = null
              , Kc = this;
            Gb = function() {
                let y = m.j.Ye.v();
                c("loc", "Detected location", m.j.Xe.v());
                c("loc-ovr", "Location override", y);
                let F = l.get("loc-ovr-btn");
                F.disabled = !a;
                null == y ? (F.textContent = "Override location",
                F.onclick = function() {
                    H.i(Kc.fq)
                }
                ) : (F.textContent = "Remove override",
                F.onclick = function() {
                    m.j.Ye.ha(null);
                    Gb()
                }
                )
            }
            ;
            Gb();
            let Lb = m.j.Kd.v()
              , xc = l.get("presskey")
              , Fc = null
              , eb = l.get("inputsec");
            Fc = function() {
                x.Nf(eb);
                eb.appendChild(b("Up"));
                eb.appendChild(b("Down"));
                eb.appendChild(b("Left"));
                eb.appendChild(b("Right"));
                eb.appendChild(b("Kick"));
                eb.appendChild(b("ToggleChat"))
            }
            ;
            Fc();
            this.wd.onclick = function() {
                H.i(Kc.rb)
            }
        }
    }
    class ba {
        static Us(a, b) {
            a = O.nj(a, b);
            return 8 < a && 14 > a ? !0 : 32 == a
        }
        static nt(a) {
            let b = a.length
              , c = 0;
            for (; c < b && ba.Us(a, b - c - 1); )
                ++c;
            return 0 < c ? O.substr(a, 0, b - c) : a
        }
        static Lf(a) {
            var b;
            let c = "";
            for (b = 2 - a.length; c.length < b; )
                c += "0";
            return c + (null == a ? "null" : "" + a)
        }
        static replace(a, b, c) {
            return a.split(b).join(c)
        }
        static bh(a, b) {
            let c = "";
            do
                c = "0123456789ABCDEF".charAt(a & 15) + c,
                a >>>= 4;
            while (0 < a);
            if (null != b)
                for (; c.length < b; )
                    c = "0" + c;
            return c
        }
    }
    class ob {
        static delete(a) {
            return null == window.indexedDB ? Promise.reject("IndexedDB not supported by browser.") : new Promise(function(b, c) {
                let d = window.indexedDB.open("stadiums", 1);
                d.onblocked = d.onerror = c;
                d.onupgradeneeded = function(e) {
                    let f = d.result;
                    f.onerror = c;
                    1 > e.oldVersion && (f.createObjectStore("files", {
                        autoIncrement: !0
                    }),
                    f.createObjectStore("meta", {
                        keyPath: "id"
                    }))
                }
                ;
                d.onsuccess = function() {
                    let e = d.result;
                    e.onerror = c;
                    let f = e.transaction(["meta", "files"], "readwrite");
                    f.onerror = f.onabort = function(g) {
                        c(g);
                        e.close()
                    }
                    ;
                    f.oncomplete = function() {
                        b(0);
                        e.close()
                    }
                    ;
                    f.objectStore("files").delete(a);
                    f.objectStore("meta").delete(a)
                }
            }
            )
        }
        static get(a) {
            return null == window.indexedDB ? Promise.reject("IndexedDB not supported by browser.") : new Promise(function(b, c) {
                let d = window.indexedDB.open("stadiums", 1);
                d.onblocked = d.onerror = c;
                d.onupgradeneeded = function(e) {
                    let f = d.result;
                    f.onerror = c;
                    1 > e.oldVersion && (f.createObjectStore("files", {
                        autoIncrement: !0
                    }),
                    f.createObjectStore("meta", {
                        keyPath: "id"
                    }))
                }
                ;
                d.onsuccess = function() {
                    let e = d.result;
                    e.onerror = c;
                    let f = e.transaction(["files"]);
                    f.onerror = f.onabort = function(g) {
                        c(g);
                        e.close()
                    }
                    ;
                    f.oncomplete = function() {
                        e.close()
                    }
                    ;
                    cc.lh(f.objectStore("files").get(a)).then(function(g) {
                        try {
                            let h = new q;
                            h.cl(g);
                            b(h)
                        } catch (h) {
                            g = v.Mb(h).Gb(),
                            c(g)
                        }
                    }, c)
                }
            }
            )
        }
        static getAll() {
            return null == window.indexedDB ? Promise.reject("IndexedDB not supported by browser.") : new Promise(function(a, b) {
                let c = window.indexedDB.open("stadiums", 1);
                c.onblocked = c.onerror = b;
                c.onupgradeneeded = function(d) {
                    let e = c.result;
                    e.onerror = b;
                    1 > d.oldVersion && (e.createObjectStore("files", {
                        autoIncrement: !0
                    }),
                    e.createObjectStore("meta", {
                        keyPath: "id"
                    }))
                }
                ;
                c.onsuccess = function() {
                    let d = c.result;
                    d.onerror = b;
                    let e = d.transaction(["meta"]);
                    e.onerror = e.onabort = function(f) {
                        b(f);
                        d.close()
                    }
                    ;
                    e.oncomplete = function() {
                        d.close()
                    }
                    ;
                    cc.lh(e.objectStore("meta").getAll()).then(a, b)
                }
            }
            )
        }
        static lt() {
            let a = pa.navigator.storage;
            if (null == a || null == a.persist)
                return Promise.resolve(!1);
            try {
                return a.persisted().then(function(b) {
                    return b ? !0 : a.persist()
                }).catch(function() {
                    return !1
                })
            } catch (b) {
                return Promise.resolve(!1)
            }
        }
        static add(a) {
            return null == window.indexedDB ? Promise.reject("IndexedDB not supported by browser.") : new Promise(function(b, c) {
                let d = window.indexedDB.open("stadiums", 1);
                d.onblocked = d.onerror = c;
                d.onupgradeneeded = function(e) {
                    let f = d.result;
                    f.onerror = c;
                    1 > e.oldVersion && (f.createObjectStore("files", {
                        autoIncrement: !0
                    }),
                    f.createObjectStore("meta", {
                        keyPath: "id"
                    }))
                }
                ;
                d.onsuccess = function() {
                    let e = d.result;
                    e.onerror = c;
                    let f = e.transaction(["files", "meta"], "readwrite");
                    f.onerror = f.onabort = function(g) {
                        c(g);
                        e.close()
                    }
                    ;
                    f.oncomplete = function() {
                        b(0);
                        e.close()
                    }
                    ;
                    try {
                        cc.lh(f.objectStore("files").add(a.Ae())).then(function(g) {
                            g = {
                                name: a.D,
                                id: g
                            };
                            return cc.lh(f.objectStore("meta").add(g))
                        }).catch(c)
                    } catch (g) {
                        c(0)
                    }
                }
            }
            )
        }
    }
    class q {
        constructor() {
            this.L = [];
            this.X = [];
            this.ta = [];
            this.vc = [];
            this.H = [];
            this.qb = [];
            this.Nd = [];
            this.vd = [];
            this.Ld = new ec;
            this.Fh = 255;
            this.Re = this.kf = 0;
            this.Xf = !0;
            this.Af = !1
        }
        og() {
            let a = new ya;
            a.S = 16777215;
            a.h = 63;
            a.B = 193;
            a.V = 10;
            a.Ea = .99;
            a.ca = 1;
            a.o = .5;
            return a
        }
        ga(a) {
            a.m(this.Fh);
            if (!this.af()) {
                a.Fb(this.D);
                a.P(this.ud);
                a.u(this.be);
                a.u(this.ae);
                a.u(this.ad);
                a.u(this.Fc);
                a.u(this.Qe);
                a.P(this.td);
                a.u(this.bc);
                a.u(this.sc);
                a.u(this.mc);
                this.Ld.ga(a);
                a.Xb(this.kf);
                a.m(this.Re);
                a.m(this.Xf ? 1 : 0);
                a.m(this.Af ? 1 : 0);
                a.m(this.L.length);
                for (var b = 0, c = this.L.length; b < c; ) {
                    var d = b++;
                    let e = this.L[d];
                    e.Dd = d;
                    e.ga(a)
                }
                a.m(this.X.length);
                b = 0;
                for (c = this.X; b < c.length; )
                    c[b++].ga(a);
                a.m(this.ta.length);
                b = 0;
                for (c = this.ta; b < c.length; )
                    c[b++].ga(a);
                a.m(this.vc.length);
                b = 0;
                for (c = this.vc; b < c.length; )
                    c[b++].ga(a);
                a.m(this.H.length);
                b = 0;
                for (c = this.H; b < c.length; )
                    c[b++].ga(a);
                a.m(this.qb.length);
                b = 0;
                for (c = this.qb; b < c.length; )
                    c[b++].ga(a);
                a.m(this.Nd.length);
                b = 0;
                for (c = this.Nd; b < c.length; )
                    d = c[b],
                    ++b,
                    a.u(d.x),
                    a.u(d.y);
                a.m(this.vd.length);
                b = 0;
                for (c = this.vd; b < c.length; )
                    d = c[b],
                    ++b,
                    a.u(d.x),
                    a.u(d.y)
            }
        }
        rs(a) {
            function b() {
                let f = []
                  , g = a.F()
                  , h = 0;
                for (; h < g; ) {
                    ++h;
                    let k = new P(0,0);
                    k.x = a.w();
                    k.y = a.w();
                    f.push(k)
                }
                return f
            }
            this.D = a.Bb();
            this.ud = a.N();
            this.be = a.w();
            this.ae = a.w();
            this.ad = a.w();
            this.Fc = a.w();
            this.Qe = a.w();
            this.td = a.N();
            this.bc = a.w();
            this.sc = a.w();
            this.mc = a.w();
            this.Ld.ma(a);
            this.kf = a.Sb();
            this.Re = a.F();
            this.Xf = 0 != a.F();
            this.Af = 0 != a.F();
            this.L = [];
            for (var c = a.F(), d = 0; d < c; ) {
                var e = new G;
                e.ma(a);
                e.Dd = d++;
                this.L.push(e)
            }
            this.X = [];
            c = a.F();
            for (d = 0; d < c; )
                ++d,
                e = new I,
                e.ma(a, this.L),
                this.X.push(e);
            this.ta = [];
            c = a.F();
            for (d = 0; d < c; )
                ++d,
                e = new R,
                e.ma(a),
                this.ta.push(e);
            this.vc = [];
            c = a.F();
            for (d = 0; d < c; )
                ++d,
                e = new Fb,
                e.ma(a),
                this.vc.push(e);
            this.H = [];
            c = a.F();
            for (d = 0; d < c; )
                ++d,
                e = new ya,
                e.ma(a),
                this.H.push(e);
            this.qb = [];
            c = a.F();
            for (d = 0; d < c; )
                ++d,
                e = new xb,
                e.ma(a),
                this.qb.push(e);
            this.Nd = b();
            this.vd = b();
            this.oe();
            if (!this.cn())
                throw v.C(new Ta("Invalid stadium"));
        }
        cn() {
            return 0 >= this.H.length || 0 > this.Fc || 0 > this.ad || 0 > this.Ld.V ? !1 : !0
        }
        oe() {
            let a = 0
              , b = this.X;
            for (; a < b.length; )
                b[a++].oe()
        }
        af() {
            return 255 != this.Fh
        }
        je(a, b) {
            a = a[b];
            return null != a ? w.I(a, E) : 0
        }
        Pp(a) {
            a = a.canBeStored;
            return null != a ? w.I(a, Ec) : !0
        }
        Ae() {
            return JSON.stringify(this.ns())
        }
        ns() {
            if (!this.Xf)
                throw v.C(0);
            let a = {};
            for (var b = 0, c = [], d = 0, e = this.L; d < e.length; ) {
                var f = e[d];
                ++d;
                f.Dd = b++;
                c.push(q.zs(f))
            }
            d = new I;
            b = [];
            e = 0;
            for (f = this.X; e < f.length; )
                b.push(q.Ir(f[e++], d));
            d = [];
            e = 0;
            for (f = this.ta; e < f.length; )
                d.push(q.Iq(f[e++]));
            e = [];
            f = 0;
            for (var g = this.vc; f < g.length; )
                e.push(q.hp(g[f++]));
            f = q.Lq(this.Ld);
            var h = new ya;
            g = [];
            for (var k = 0, l = this.H; k < l.length; )
                g.push(q.Ko(l[k++], h));
            h = [];
            k = 0;
            for (l = this.qb; k < l.length; )
                h.push(q.Ap(l[k++]));
            k = [];
            l = 0;
            for (var n = this.Nd; l < n.length; ) {
                var r = n[l];
                ++l;
                k.push([r.x, r.y])
            }
            l = [];
            n = 0;
            for (r = this.vd; n < r.length; ) {
                let t = r[n];
                ++n;
                l.push([t.x, t.y])
            }
            c = {
                name: this.D,
                width: this.bc,
                height: this.sc,
                bg: a,
                vertexes: c,
                segments: b,
                planes: d,
                goals: e,
                discs: g,
                playerPhysics: f,
                ballPhysics: "disc0"
            };
            q.oa(c, "maxViewWidth", this.kf, 0);
            q.oa(c, "cameraFollow", 1 == this.Re ? "player" : "", "");
            q.oa(c, "spawnDistance", this.mc, 200);
            0 != h.length && (c.joints = h);
            0 != k.length && (c.redSpawnPoints = k);
            0 != l.length && (c.blueSpawnPoints = l);
            q.oa(c, "kickOffReset", this.Af ? "full" : "partial", "partial");
            switch (this.ud) {
            case 1:
                b = "grass";
                break;
            case 2:
                b = "hockey";
                break;
            default:
                b = "none"
            }
            q.oa(a, "type", b, "none");
            q.oa(a, "width", this.be, 0);
            q.oa(a, "height", this.ae, 0);
            q.oa(a, "kickOffRadius", this.ad, 0);
            q.oa(a, "cornerRadius", this.Fc, 0);
            q.Bg(a, this.td, 7441498);
            q.oa(a, "goalLine", this.Qe, 0);
            return c
        }
        cl(a) {
            function b(h) {
                let k = w.I(h[0], E);
                h = w.I(h[1], E);
                null == h && (h = 0);
                null == k && (k = 0);
                return new P(k,h)
            }
            function c(h, k, l, n) {
                null == n && (n = !1);
                var r = d[k];
                if (!n || null != r)
                    if (n = w.I(r, Array),
                    null != n)
                        for (r = 0; r < n.length; ) {
                            let t = n[r];
                            ++r;
                            try {
                                q.Sn(t, f),
                                h.push(l(t))
                            } catch (z) {
                                throw v.C(new Ta('Error in "' + k + '" index: ' + h.length));
                            }
                        }
            }
            let d = JSON5.parse(a);
            this.L = [];
            this.X = [];
            this.ta = [];
            this.vc = [];
            this.H = [];
            this.qb = [];
            this.D = w.I(d.name, String);
            this.bc = w.I(d.width, E);
            this.sc = w.I(d.height, E);
            this.kf = this.je(d, "maxViewWidth") | 0;
            "player" == d.cameraFollow && (this.Re = 1);
            this.mc = 200;
            a = d.spawnDistance;
            null != a && (this.mc = w.I(a, E));
            a = d.bg;
            let e;
            switch (a.type) {
            case "grass":
                e = 1;
                break;
            case "hockey":
                e = 2;
                break;
            default:
                e = 0
            }
            this.ud = e;
            this.be = this.je(a, "width");
            this.ae = this.je(a, "height");
            this.ad = this.je(a, "kickOffRadius");
            this.Fc = this.je(a, "cornerRadius");
            this.td = 7441498;
            null != a.color && (this.td = q.mg(a.color));
            this.Qe = this.je(a, "goalLine");
            this.Xf = this.Pp(d);
            this.Af = "full" == d.kickOffReset;
            let f = d.traits;
            a = d.ballPhysics;
            "disc0" != a && (null != a ? (a = q.dl(a, this.og()),
            a.B |= 192,
            this.H.push(a)) : this.H.push(this.og()));
            c(this.L, "vertexes", q.Op);
            let g = this;
            c(this.X, "segments", function(h) {
                return q.Np(h, g.L)
            });
            c(this.vc, "goals", q.Jp);
            c(this.H, "discs", function(h) {
                return q.dl(h, new ya)
            });
            c(this.ta, "planes", q.Lp);
            c(this.qb, "joints", function(h) {
                return q.Kp(h, g.H)
            }, !0);
            c(this.Nd, "redSpawnPoints", b, !0);
            c(this.vd, "blueSpawnPoints", b, !0);
            a = d.playerPhysics;
            null != a && (this.Ld = q.Mp(a));
            if (255 < this.L.length || 255 < this.X.length || 255 < this.ta.length || 255 < this.vc.length || 255 < this.H.length)
                throw v.C("Error");
            this.oe();
            if (!this.cn())
                throw v.C(new Ta("Invalid stadium"));
        }
        ik() {
            let a = q.ls;
            a.a = 0;
            this.ga(a);
            let b = new vc;
            b.Gs(a.Wb());
            b.hash = (b.hash += b.hash << 3) ^ b.hash >>> 11;
            b.hash += b.hash << 15;
            return b.hash | 0
        }
        jo(a, b) {
            let c = 0
              , d = this.vc;
            for (; c < d.length; ) {
                let h = d[c];
                ++c;
                var e = h.Z
                  , f = h.ea
                  , g = b.x - a.x;
                let k = b.y - a.y;
                0 < -(e.y - a.y) * g + (e.x - a.x) * k == 0 < -(f.y - a.y) * g + (f.x - a.x) * k ? e = !1 : (g = f.x - e.x,
                f = f.y - e.y,
                e = 0 < -(a.y - e.y) * g + (a.x - e.x) * f == 0 < -(b.y - e.y) * g + (b.x - e.x) * f ? !1 : !0);
                if (e)
                    return h.ye
            }
            return u.Oa
        }
        hd(a, b, c, d, e, f, g, h) {
            null == h && (h = 0);
            this.D = a;
            this.H.push(this.og());
            this.bc = b;
            this.sc = c;
            this.ud = 1;
            this.td = 7441498;
            this.be = d;
            this.ae = e;
            this.ad = g;
            this.Fc = h;
            this.mc = .75 * d;
            400 < this.mc && (this.mc = 400);
            a = new R;
            var k = a.ya;
            k.x = 0;
            k.y = 1;
            a.Va = -c;
            a.o = 0;
            this.ta.push(a);
            a = new R;
            k = a.ya;
            k.x = 0;
            k.y = -1;
            a.Va = -c;
            a.o = 0;
            this.ta.push(a);
            a = new R;
            k = a.ya;
            k.x = 1;
            k.y = 0;
            a.Va = -b;
            a.o = 0;
            this.ta.push(a);
            a = new R;
            k = a.ya;
            k.x = -1;
            k.y = 0;
            a.Va = -b;
            a.o = 0;
            this.ta.push(a);
            this.pg(d, 1, f, 13421823, u.Da);
            this.pg(-d, -1, f, 16764108, u.ia);
            this.il(g, c);
            b = new R;
            c = b.ya;
            c.x = 0;
            c.y = 1;
            b.Va = -e;
            b.h = 1;
            this.ta.push(b);
            b = new R;
            c = b.ya;
            c.x = 0;
            c.y = -1;
            b.Va = -e;
            b.h = 1;
            this.ta.push(b);
            b = new G;
            c = b.a;
            c.x = -d;
            c.y = -e;
            b.h = 0;
            c = new G;
            g = c.a;
            g.x = d;
            g.y = -e;
            c.h = 0;
            g = new G;
            a = g.a;
            a.x = d;
            a.y = -f;
            g.h = 0;
            a = new G;
            k = a.a;
            k.x = d;
            k.y = f;
            a.h = 0;
            k = new G;
            var l = k.a;
            l.x = d;
            l.y = e;
            k.h = 0;
            l = new G;
            var n = l.a;
            n.x = -d;
            n.y = e;
            l.h = 0;
            n = new G;
            var r = n.a;
            r.x = -d;
            r.y = f;
            n.h = 0;
            r = new G;
            var t = r.a;
            t.x = -d;
            t.y = -f;
            r.h = 0;
            f = new I;
            f.Z = c;
            f.ea = g;
            f.h = 1;
            f.bb = !1;
            t = new I;
            t.Z = a;
            t.ea = k;
            t.h = 1;
            t.bb = !1;
            let z = new I;
            z.Z = l;
            z.ea = n;
            z.h = 1;
            z.bb = !1;
            let J = new I;
            J.Z = r;
            J.ea = b;
            J.h = 1;
            J.bb = !1;
            this.L.push(b);
            this.L.push(c);
            this.L.push(g);
            this.L.push(a);
            this.L.push(k);
            this.L.push(l);
            this.L.push(n);
            this.L.push(r);
            this.X.push(f);
            this.X.push(t);
            this.X.push(z);
            this.X.push(J);
            this.gl(d, e, h);
            this.oe()
        }
        hl(a, b, c, d, e, f, g, h) {
            this.D = a;
            this.H.push(this.og());
            this.bc = b;
            this.sc = c;
            this.ud = 2;
            this.be = d;
            this.ae = e;
            this.ad = 75;
            this.Fc = h;
            this.Qe = g;
            this.mc = .75 * (d - g);
            400 < this.mc && (this.mc = 400);
            a = new R;
            var k = a.ya;
            k.x = 0;
            k.y = 1;
            a.Va = -c;
            a.o = 0;
            this.ta.push(a);
            a = new R;
            k = a.ya;
            k.x = 0;
            k.y = -1;
            a.Va = -c;
            a.o = 0;
            this.ta.push(a);
            a = new R;
            k = a.ya;
            k.x = 1;
            k.y = 0;
            a.Va = -b;
            a.o = 0;
            this.ta.push(a);
            a = new R;
            k = a.ya;
            k.x = -1;
            k.y = 0;
            a.Va = -b;
            a.o = 0;
            this.ta.push(a);
            this.pg(d - g, 1, f, 13421823, u.Da, 63);
            this.pg(-d + g, -1, f, 16764108, u.ia, 63);
            this.il(75, c);
            b = new R;
            c = b.ya;
            c.x = 0;
            c.y = 1;
            b.Va = -e;
            b.h = 1;
            this.ta.push(b);
            b = new R;
            c = b.ya;
            c.x = 0;
            c.y = -1;
            b.Va = -e;
            b.h = 1;
            this.ta.push(b);
            b = new R;
            c = b.ya;
            c.x = 1;
            c.y = 0;
            b.Va = -d;
            b.h = 1;
            this.ta.push(b);
            b = new R;
            c = b.ya;
            c.x = -1;
            c.y = 0;
            b.Va = -d;
            b.h = 1;
            this.ta.push(b);
            this.gl(d, e, h);
            this.oe()
        }
        pg(a, b, c, d, e, f) {
            var g;
            null == g && (g = 32);
            null == f && (f = 1);
            var h = new G
              , k = h.a;
            k.x = a + 8 * b;
            k.y = -c;
            k = new G;
            var l = k.a;
            l.x = a + 8 * b;
            l.y = c;
            let n = new G;
            l = n.a;
            l.x = h.a.x + 22 * b;
            l.y = h.a.y + 22;
            let r = new G;
            l = r.a;
            l.x = k.a.x + 22 * b;
            l.y = k.a.y - 22;
            l = new I;
            l.Z = h;
            l.ea = n;
            l.Uc(90 * b);
            let t = new I;
            t.Z = r;
            t.ea = n;
            let z = new I;
            z.Z = r;
            z.ea = k;
            z.Uc(90 * b);
            b = this.L.length;
            this.L.push(h);
            this.L.push(k);
            this.L.push(n);
            this.L.push(r);
            h = b;
            for (b = this.L.length; h < b; )
                k = h++,
                this.L[k].h = f,
                this.L[k].B = g,
                this.L[k].o = .1;
            b = this.X.length;
            this.X.push(l);
            this.X.push(t);
            this.X.push(z);
            h = b;
            for (b = this.X.length; h < b; )
                k = h++,
                this.X[k].h = f,
                this.X[k].B = g,
                this.X[k].o = .1;
            f = new ya;
            g = f.a;
            g.x = a;
            g.y = -c;
            f.ca = 0;
            f.V = 8;
            f.S = d;
            this.H.push(f);
            f = new ya;
            g = f.a;
            g.x = a;
            g.y = c;
            f.ca = 0;
            f.V = 8;
            f.S = d;
            this.H.push(f);
            d = new Fb;
            f = d.Z;
            f.x = a;
            f.y = -c;
            f = d.ea;
            f.x = a;
            f.y = c;
            d.ye = e;
            this.vc.push(d)
        }
        il(a, b) {
            let c = new G;
            var d = c.a;
            d.x = 0;
            d.y = -b;
            c.o = .1;
            c.B = 24;
            c.h = 6;
            d = new G;
            var e = d.a;
            e.x = 0;
            e.y = -a;
            d.o = .1;
            d.B = 24;
            d.h = 6;
            e = new G;
            var f = e.a;
            f.x = 0;
            f.y = a;
            e.o = .1;
            e.B = 24;
            e.h = 6;
            a = new G;
            f = a.a;
            f.x = 0;
            f.y = b;
            a.o = .1;
            a.B = 24;
            a.h = 6;
            b = new I;
            b.Z = c;
            b.ea = d;
            b.B = 24;
            b.h = 6;
            b.bb = !1;
            b.o = .1;
            f = new I;
            f.Z = e;
            f.ea = a;
            f.B = 24;
            f.h = 6;
            f.bb = !1;
            f.o = .1;
            let g = new I;
            g.Z = d;
            g.ea = e;
            g.B = 8;
            g.h = 6;
            g.bb = !1;
            g.Uc(180);
            g.o = .1;
            let h = new I;
            h.Z = e;
            h.ea = d;
            h.B = 16;
            h.h = 6;
            h.bb = !1;
            h.Uc(180);
            h.o = .1;
            this.L.push(c);
            this.L.push(d);
            this.L.push(e);
            this.L.push(a);
            this.X.push(b);
            this.X.push(f);
            this.X.push(g);
            this.X.push(h)
        }
        gl(a, b, c) {
            if (!(0 >= c)) {
                var d = new G
                  , e = d.a;
                e.x = -a + c;
                e.y = -b;
                d.h = 0;
                e = new G;
                var f = e.a;
                f.x = -a;
                f.y = -b + c;
                e.h = 0;
                f = new G;
                var g = f.a;
                g.x = -a + c;
                g.y = b;
                f.h = 0;
                g = new G;
                var h = g.a;
                h.x = -a;
                h.y = b - c;
                g.h = 0;
                h = new G;
                var k = h.a;
                k.x = a - c;
                k.y = b;
                h.h = 0;
                k = new G;
                var l = k.a;
                l.x = a;
                l.y = b - c;
                k.h = 0;
                l = new G;
                var n = l.a;
                n.x = a - c;
                n.y = -b;
                l.h = 0;
                n = new G;
                var r = n.a;
                r.x = a;
                r.y = -b + c;
                n.h = 0;
                a = new I;
                a.Z = d;
                a.ea = e;
                a.h = 1;
                a.bb = !1;
                a.o = 1;
                a.Uc(-90);
                b = new I;
                b.Z = f;
                b.ea = g;
                b.h = 1;
                b.bb = !1;
                b.o = 1;
                b.Uc(90);
                c = new I;
                c.Z = h;
                c.ea = k;
                c.h = 1;
                c.bb = !1;
                c.o = 1;
                c.Uc(-90);
                r = new I;
                r.Z = l;
                r.ea = n;
                r.h = 1;
                r.bb = !1;
                r.o = 1;
                r.Uc(90);
                this.L.push(d);
                this.L.push(e);
                this.L.push(f);
                this.L.push(g);
                this.L.push(h);
                this.L.push(k);
                this.L.push(l);
                this.L.push(n);
                this.X.push(a);
                this.X.push(b);
                this.X.push(c);
                this.X.push(r)
            }
        }
        static ma(a) {
            var b = a.F();
            return 255 == b ? (b = new q,
            b.rs(a),
            b) : q.Nh()[b]
        }
        static Nh() {
            if (null == q.xb) {
                q.xb = [];
                var a = new q;
                a.hd("Classic", 420, 200, 370, 170, 64, 75);
                q.xb.push(a);
                a = new q;
                a.hd("Easy", 420, 200, 370, 170, 90, 75);
                q.xb.push(a);
                a = new q;
                a.hd("Small", 420, 200, 320, 130, 55, 70);
                q.xb.push(a);
                a = new q;
                a.hd("Big", 600, 270, 550, 240, 80, 80);
                q.xb.push(a);
                a = new q;
                a.hd("Rounded", 420, 200, 370, 170, 64, 75, 75);
                q.xb.push(a);
                a = new q;
                a.hl("Hockey", 420, 204, 398, 182, 68, 120, 100);
                q.xb.push(a);
                a = new q;
                a.hl("Big Hockey", 600, 270, 550, 240, 90, 160, 150);
                q.xb.push(a);
                a = new q;
                a.hd("Big Easy", 600, 270, 550, 240, 95, 80);
                q.xb.push(a);
                a = new q;
                a.hd("Big Rounded", 600, 270, 550, 240, 80, 75, 100);
                q.xb.push(a);
                a = new q;
                a.hd("Huge", 750, 350, 700, 320, 100, 80);
                q.xb.push(a);
                a = 0;
                let b = q.xb.length;
                for (; a < b; ) {
                    let c = a++;
                    q.xb[c].Fh = c
                }
            }
            return q.xb
        }
        static Sn(a, b) {
            if (null != a.trait && (b = b[w.I(a.trait, String)],
            null != b)) {
                let c = 0
                  , d = zc.hn(b);
                for (; c < d.length; ) {
                    let e = d[c];
                    ++c;
                    null == a[e] && (a[e] = b[e])
                }
            }
        }
        static ao(a) {
            if (63 == a)
                return ["all"];
            let b = [];
            0 != (a & 2) && b.push("red");
            0 != (a & 4) && b.push("blue");
            0 != (a & 1) && b.push("ball");
            0 != (a & 8) && b.push("redKO");
            0 != (a & 16) && b.push("blueKO");
            0 != (a & 32) && b.push("wall");
            0 != (a & 64) && b.push("kick");
            0 != (a & 128) && b.push("score");
            0 != (a & 268435456) && b.push("c0");
            0 != (a & 536870912) && b.push("c1");
            0 != (a & 1073741824) && b.push("c2");
            0 != (a & -2147483648) && b.push("c3");
            return b
        }
        static Jc(a) {
            a = w.I(a, Array);
            let b = 0
              , c = 0;
            for (; c < a.length; )
                switch (a[c++]) {
                case "all":
                    b |= 63;
                    break;
                case "ball":
                    b |= 1;
                    break;
                case "blue":
                    b |= 4;
                    break;
                case "blueKO":
                    b |= 16;
                    break;
                case "c0":
                    b |= 268435456;
                    break;
                case "c1":
                    b |= 536870912;
                    break;
                case "c2":
                    b |= 1073741824;
                    break;
                case "c3":
                    b |= -2147483648;
                    break;
                case "kick":
                    b |= 64;
                    break;
                case "red":
                    b |= 2;
                    break;
                case "redKO":
                    b |= 8;
                    break;
                case "score":
                    b |= 128;
                    break;
                case "wall":
                    b |= 32
                }
            return b
        }
        static Oc(a, b, c, d) {
            c != d && (a[b] = q.ao(c))
        }
        static Bg(a, b, c) {
            b != c && (a.color = q.qo(b))
        }
        static qo(a) {
            a |= 0;
            return 0 > a ? "transparent" : ba.bh(a)
        }
        static mg(a) {
            if ("transparent" == a)
                return -1;
            if ("string" == typeof a)
                return Q.parseInt("0x" + Q.Fe(a));
            if (a instanceof Array)
                return ((a[0] | 0) << 16) + ((a[1] | 0) << 8) + (a[2] | 0);
            throw v.C("Bad color");
        }
        static zs(a) {
            let b = {
                x: a.a.x,
                y: a.a.y
            };
            q.oa(b, "bCoef", a.o, 1);
            q.Oc(b, "cMask", a.h, 63);
            q.Oc(b, "cGroup", a.B, 32);
            return b
        }
        static Op(a) {
            let b = new G;
            b.a.x = w.I(a.x, E);
            b.a.y = w.I(a.y, E);
            var c = a.bCoef;
            null != c && (b.o = w.I(c, E));
            c = a.cMask;
            null != c && (b.h = q.Jc(c));
            a = a.cGroup;
            null != a && (b.B = q.Jc(a));
            return b
        }
        static Ir(a, b) {
            let c = {
                v0: a.Z.Dd,
                v1: a.ea.Dd
            };
            q.oa(c, "bias", a.Gc, b.Gc);
            q.oa(c, "bCoef", a.o, b.o);
            let d = a.$o();
            q.oa(c, "curve", d, 0);
            0 != d && (c.curveF = a.wb);
            q.oa(c, "vis", a.bb, b.bb);
            q.Oc(c, "cMask", a.h, b.h);
            q.Oc(c, "cGroup", a.B, b.B);
            q.Bg(c, a.S, b.S);
            return c
        }
        static Np(a, b) {
            let c = new I;
            var d = w.I(a.v1, Yb);
            c.Z = b[w.I(a.v0, Yb)];
            c.ea = b[d];
            b = a.bias;
            d = a.bCoef;
            let e = a.curve
              , f = a.curveF
              , g = a.vis
              , h = a.cMask
              , k = a.cGroup;
            a = a.color;
            null != b && (c.Gc = w.I(b, E));
            null != d && (c.o = w.I(d, E));
            null != f ? c.wb = w.I(f, E) : null != e && c.Uc(w.I(e, E));
            null != g && (c.bb = w.I(g, Ec));
            null != h && (c.h = q.Jc(h));
            null != k && (c.B = q.Jc(k));
            null != a && (c.S = q.mg(a));
            return c
        }
        static Ap(a) {
            let b = {
                d0: a.ge,
                d1: a.he,
                length: a.Jb >= a.fc ? a.Jb : [a.Jb, a.fc]
            };
            q.Bg(b, a.S, 0);
            q.oa(b, "strength", a.we, 1 / 0);
            return b
        }
        static Kp(a, b) {
            let c = new xb;
            var d = w.I(a.d0, Yb)
              , e = w.I(a.d1, Yb);
            let f = a.color
              , g = a.strength;
            a = a.length;
            if (d >= b.length || 0 > d)
                throw v.C(null);
            if (e >= b.length || 0 > e)
                throw v.C(null);
            c.ge = d;
            c.he = e;
            null == a ? (d = b[d],
            e = b[e],
            null == d || null == e ? c.fc = c.Jb = 100 : (b = d.a,
            d = e.a,
            e = b.x - d.x,
            b = b.y - d.y,
            c.fc = c.Jb = Math.sqrt(e * e + b * b))) : a instanceof Array ? (c.Jb = w.I(a[0], E),
            c.fc = w.I(a[1], E)) : c.fc = c.Jb = w.I(a, E);
            c.we = null == g || "rigid" == g ? 1 / 0 : w.I(g, E);
            null != f && (c.S = q.mg(f));
            return c
        }
        static Iq(a) {
            let b = {
                normal: [a.ya.x, a.ya.y],
                dist: a.Va
            };
            q.oa(b, "bCoef", a.o, 1);
            q.Oc(b, "cMask", a.h, 63);
            q.Oc(b, "cGroup", a.B, 32);
            return b
        }
        static Lp(a) {
            let b = new R;
            var c = w.I(a.normal, Array)
              , d = w.I(c[0], E)
              , e = w.I(c[1], E);
            c = b.ya;
            let f = d;
            var g = e;
            null == e && (g = 0);
            null == d && (f = 0);
            d = f;
            e = Math.sqrt(d * d + g * g);
            c.x = d / e;
            c.y = g / e;
            b.Va = w.I(a.dist, E);
            c = a.bCoef;
            d = a.cMask;
            a = a.cGroup;
            null != c && (b.o = w.I(c, E));
            null != d && (b.h = q.Jc(d));
            null != a && (b.B = q.Jc(a));
            return b
        }
        static hp(a) {
            return {
                p0: [a.Z.x, a.Z.y],
                p1: [a.ea.x, a.ea.y],
                team: a.ye == u.ia ? "red" : "blue"
            }
        }
        static Jp(a) {
            let b = new Fb;
            var c = w.I(a.p0, Array);
            let d = w.I(a.p1, Array)
              , e = b.Z;
            e.x = c[0];
            e.y = c[1];
            c = b.ea;
            c.x = d[0];
            c.y = d[1];
            switch (a.team) {
            case "blue":
                a = u.Da;
                break;
            case "red":
                a = u.ia;
                break;
            default:
                throw v.C("Bad team value");
            }
            b.ye = a;
            return b
        }
        static Lq(a) {
            let b = {};
            q.oa(b, "bCoef", a.o, .5);
            q.oa(b, "invMass", a.ca, .5);
            q.oa(b, "damping", a.Ea, .96);
            q.oa(b, "acceleration", a.Ne, .1);
            q.oa(b, "kickingAcceleration", a.ef, .07);
            q.oa(b, "kickingDamping", a.ff, .96);
            q.oa(b, "kickStrength", a.cf, 5);
            q.Oc(b, "cGroup", a.B, 0);
            if (0 != a.ra.x || 0 != a.ra.y)
                b.gravity = [a.ra.x, a.ra.y];
            q.oa(b, "radius", a.V, 15);
            q.oa(b, "kickback", a.df, 0);
            return b
        }
        static Mp(a) {
            let b = new ec;
            var c = a.bCoef
              , d = a.invMass;
            let e = a.damping
              , f = a.acceleration
              , g = a.kickingAcceleration
              , h = a.kickingDamping
              , k = a.kickStrength
              , l = a.gravity
              , n = a.cGroup
              , r = a.radius;
            a = a.kickback;
            null != c && (b.o = w.I(c, E));
            null != d && (b.ca = w.I(d, E));
            null != e && (b.Ea = w.I(e, E));
            null != f && (b.Ne = w.I(f, E));
            null != g && (b.ef = w.I(g, E));
            null != h && (b.ff = w.I(h, E));
            null != k && (b.cf = w.I(k, E));
            null != l && (c = b.ra,
            d = w.I(l[1], E),
            c.x = w.I(l[0], E),
            c.y = d);
            null != n && (b.B = q.Jc(n));
            null != r && (b.V = w.I(r, E));
            null != a && (b.df = w.I(a, E));
            return b
        }
        static Ko(a, b) {
            let c = {};
            if (a.a.x != b.a.x || a.a.y != b.a.y)
                c.pos = [a.a.x, a.a.y];
            if (a.G.x != b.G.x || a.G.y != b.G.y)
                c.speed = [a.G.x, a.G.y];
            if (a.ra.x != b.ra.x || a.ra.y != b.ra.y)
                c.gravity = [a.ra.x, a.ra.y];
            q.oa(c, "radius", a.V, b.V);
            q.oa(c, "bCoef", a.o, b.o);
            q.oa(c, "invMass", a.ca, b.ca);
            q.oa(c, "damping", a.Ea, b.Ea);
            q.Bg(c, a.S, b.S);
            q.Oc(c, "cMask", a.h, b.h);
            q.Oc(c, "cGroup", a.B, b.B);
            return c
        }
        static dl(a, b) {
            var c = a.pos
              , d = a.speed;
            let e = a.gravity
              , f = a.radius
              , g = a.bCoef
              , h = a.invMass
              , k = a.damping
              , l = a.color
              , n = a.cMask;
            a = a.cGroup;
            if (null != c) {
                let r = b.a;
                r.x = c[0];
                r.y = c[1]
            }
            null != d && (c = b.G,
            c.x = d[0],
            c.y = d[1]);
            null != e && (d = b.ra,
            d.x = e[0],
            d.y = e[1]);
            null != f && (b.V = w.I(f, E));
            null != g && (b.o = w.I(g, E));
            null != h && (b.ca = w.I(h, E));
            null != k && (b.Ea = w.I(k, E));
            null != l && (b.S = q.mg(l));
            null != n && (b.h = q.Jc(n));
            null != a && (b.B = q.Jc(a));
            return b
        }
        static oa(a, b, c, d) {
            c != d && (a[b] = c)
        }
    }
    class tc {
        constructor() {
            this.Wc = 0;
            this.eb = [];
            this.fs = new da(["Time is", "Up!"],16777215);
            this.hr = new da(["Red is", "Victorious!"],15035990);
            this.gr = new da(["Red", "Scores!"],15035990);
            this.$n = new da(["Blue is", "Victorious!"],625603);
            this.Zn = new da(["Blue", "Scores!"],625603);
            this.Gq = new da(["Game", "Paused"],16777215)
        }
        Sa(a) {
            this.eb.push(a)
        }
        mo() {
            this.eb = [];
            this.Wc = 0
        }
        A(a) {
            0 < this.eb.length && (this.Wc += a) > this.eb[0].Xo() && (this.Wc = 0,
            this.eb.shift())
        }
        Qc(a) {
            0 < this.eb.length && this.eb[0].Qc(a, this.Wc)
        }
    }
    class fc {
        constructor(a) {
            this.$b = a.slice()
        }
        eval(a) {
            var b = this.$b.length - 1;
            if (a <= this.$b[0])
                return this.$b[1];
            if (a >= this.$b[b])
                return this.$b[b - 2];
            var c = 0;
            b = b / 5 | 0;
            do {
                var d = b + c >>> 1;
                a > this.$b[5 * d] ? c = d + 1 : b = d - 1
            } while (c <= b);
            c = 5 * b;
            b = this.$b[c];
            a = (a - b) / (this.$b[c + 5] - b);
            b = a * a;
            d = b * a;
            return (2 * d - 3 * b + 1) * this.$b[c + 1] + (d - 2 * b + a) * this.$b[c + 2] + (-2 * d + 3 * b) * this.$b[c + 3] + (d - b) * this.$b[c + 4]
        }
    }
    class ub {
        constructor(a, b) {
            this.f = x.Ia(ub.O);
            let c = x.Ba(this.f);
            this.lf = c.get("name");
            this.Uf = c.get("admin");
            this.bf = c.get("kick");
            this.wd = c.get("close");
            let d = this;
            this.Uf.onclick = function() {
                Ma.i(d.cq, d.Rb, !d.Ml)
            }
            ;
            this.bf.onclick = function() {
                D.i(d.li, d.Rb)
            }
            ;
            this.wd.onclick = function() {
                H.i(d.rb)
            }
            ;
            this.Rb = a.Y;
            this.Tj(a.D);
            this.Sj(a.fb);
            this.Uf.disabled = !b || 0 == this.Rb;
            this.bf.disabled = !b || 0 == this.Rb
        }
        A(a, b) {
            a = a.qa(this.Rb);
            null == a ? H.i(this.rb) : (this.us(a),
            this.Uf.disabled = !b || 0 == this.Rb,
            this.bf.disabled = !b || 0 == this.Rb)
        }
        us(a) {
            this.ne != a.D && this.Tj(a.D);
            this.Ml != a.fb && this.Sj(a.fb)
        }
        Tj(a) {
            this.ne = a;
            this.lf.textContent = a
        }
        Sj(a) {
            this.Ml = a;
            this.Uf.textContent = a ? "Remove Admin" : "Give Admin"
        }
    }
    class rc {
        constructor(a, b) {
            this.r = new RegExp(a,b.split("u").join(""))
        }
        match(a) {
            this.r.global && (this.r.lastIndex = 0);
            this.r.pc = this.r.exec(a);
            this.r.jh = a;
            return null != this.r.pc
        }
        sn(a) {
            if (null != this.r.pc && 0 <= a && a < this.r.pc.length)
                return this.r.pc[a];
            throw v.C("EReg::matched");
        }
        Ys() {
            if (null == this.r.pc)
                throw v.C("No string matched");
            return {
                xj: this.r.pc.index,
                Vs: this.r.pc[0].length
            }
        }
        Xs(a, b) {
            var c;
            null == c && (c = -1);
            if (this.r.global) {
                this.r.lastIndex = b;
                this.r.pc = this.r.exec(0 > c ? a : O.substr(a, 0, b + c));
                if (b = null != this.r.pc)
                    this.r.jh = a;
                return b
            }
            if (c = this.match(0 > c ? O.substr(a, b, null) : O.substr(a, b, c)))
                this.r.jh = a,
                this.r.pc.index += b;
            return c
        }
    }
    class Wb {
        constructor(a, b) {
            this.La = a;
            this.value = b;
            a.textContent = "" + b
        }
        set(a) {
            this.value != a && (this.value = a,
            this.La.textContent = "" + this.value)
        }
    }
    class yc {
        constructor(a) {
            this.Mj = new Map;
            this.fp = new tb(100,16);
            this.Ig = !1;
            this.Ab = 0;
            this.sa = a;
            a = A.ka(8);
            a.u(Math.random());
            this.Se = a.Wb()
        }
        Vb(a, b) {
            null == b && (b = 0);
            this.sa.Vb(b, a)
        }
    }
    class hb {
        constructor(a) {
            function b() {
                d.Hc() && null != d.yl && d.yl(d.Eb.value)
            }
            this.f = x.Ia(hb.O);
            let c = x.Ba(this.f);
            this.Eb = c.get("input");
            this.nf = c.get("ok");
            let d = this;
            this.Eb.maxLength = 25;
            this.Eb.value = a;
            this.Eb.oninput = function() {
                d.A()
            }
            ;
            this.Eb.onkeydown = function(e) {
                13 == e.keyCode && b()
            }
            ;
            this.nf.onclick = b;
            this.A()
        }
        Hc() {
            let a = this.Eb.value;
            return 25 >= a.length ? 0 < a.length : !1
        }
        A() {
            this.nf.disabled = !this.Hc()
        }
    }
    class ua {
        constructor(a) {
            this.ql = this.pl = this.sl = null;
            this.ib = new qb;
            this.nd = !1;
            this.Gf = new zb;
            this.Ka = new bb;
            this.Xa = new Bb(a);
            this.ib.Rb = a;
            this.f = x.Ia(ua.O);
            a = x.Ba(this.f);
            this.ps = a.get("top-section");
            this.vf = a.get("popups");
            this.vf.style.display = "none";
            a.get("gameplay").appendChild(this.ib.f);
            x.replaceWith(a.get("chatbox"), this.Ka.f);
            x.replaceWith(a.get("stats"), this.Gf.f);
            this.ii = a.get("menu");
            let b = this;
            this.ii.onclick = function() {
                b.ue(!b.nd);
                b.ii.blur()
            }
            ;
            new oc(a.get("sound"));
            a.get("settings").onclick = function() {
                let c = new ka;
                c.rb = function() {
                    b.ab(null)
                }
                ;
                b.ab(c.f)
            }
            ;
            this.Xa.le = function() {
                let c = new Ab;
                c.rb = function(d) {
                    b.ab(null);
                    d && H.i(b.le)
                }
                ;
                b.ab(c.f)
            }
            ;
            this.Xa.zq = function() {
                let c = new mb;
                c.ji = function() {
                    b.ab(null)
                }
                ;
                c.zg = function(d) {
                    D.i(b.zg, d);
                    b.ab(null)
                }
                ;
                c.mi = function(d) {
                    d = new Z("Error loading stadium",d,["Ok"]);
                    d.Wa = function() {
                        b.ab(null)
                    }
                    ;
                    b.ab(d.f)
                }
                ;
                b.ab(c.f)
            }
        }
        Or(a) {
            this.ql != a && (this.ql = a,
            this.f.style.setProperty("--chat-opacity", "" + a))
        }
        Nr(a) {
            this.pl != a && (this.pl = a,
            this.f.classList.toggle("chat-bg-full", a))
        }
        Wr(a) {
            this.sl != a && (this.sl = a,
            this.ib.f.classList.toggle("restricted", a))
        }
        A(a) {
            null == a.U.M && this.ue(!0);
            this.nd && this.Xa.A(a.U, a.U.qa(a.xc));
            H.i(this.Ul);
            this.ii.disabled = null == a.U.M;
            let b = m.j.Sd.v()
              , c = this.ib.gb;
            c.re = m.j.Ei.v();
            this.Or(m.j.Ah.v());
            this.Nr("full" == m.j.gk.v());
            this.Wr(0 == b);
            let d = this.Ka.f.getBoundingClientRect().height;
            0 == b ? (c.Fg = 1,
            c.Md = 0,
            c.Sg = 0,
            this.ib.gb.vh = 0,
            this.ib.f.style.paddingBottom = d + "px") : (c.Sg = 35,
            0 >= b ? c.Md = 610 : (c.Md = 0,
            c.Fg = 1 + .25 * (b - 1)),
            this.ib.gb.vh = d * window.devicePixelRatio,
            this.ib.f.style.paddingBottom = "0");
            a = a.eg();
            this.ib.A(a);
            m.Pa.pk.rt(a)
        }
        ue(a) {
            this.nd != a && (this.nd = a,
            this.f.classList.toggle("showing-room-view", this.nd),
            this.nd ? this.ps.appendChild(this.Xa.f) : this.Xa.f.remove())
        }
        Xk() {
            return null != ua.Mq
        }
        ab(a, b) {
            x.Nf(this.vf);
            ua.Mq = a;
            null != a ? (this.vf.style.display = "flex",
            this.vf.appendChild(a),
            this.Ul = b) : (this.vf.style.display = "none",
            this.Ul = null)
        }
    }
    class P {
        constructor(a, b) {
            this.x = a;
            this.y = b
        }
    }
    class u {
        constructor(a, b, c, d, e, f, g, h) {
            this.Ag = null;
            this.ba = a;
            this.S = b;
            this.Gh = c;
            this.Cp = d;
            this.D = e;
            this.Go = f;
            this.B = h;
            this.Rm = new za;
            this.Rm.hb.push(b)
        }
    }
    class Cb {
        constructor() {
            this.jg = !1;
            this.D = "";
            this.uh = 0;
            this.Wf = "";
            this.mb = new za;
            let a = window.document.createElement("canvas");
            a.width = 64;
            a.height = 64;
            this.sb = a.getContext("2d", null);
            this.Xj = this.sb.createPattern(this.sb.canvas, "no-repeat");
            this.Eo()
        }
        Eo() {
            let a = window.document.createElement("canvas");
            a.width = 160;
            a.height = 34;
            this.Rl = a.getContext("2d", null)
        }
        vs() {
            let a = this.Rl;
            a.resetTransform();
            a.clearRect(0, 0, 160, 34);
            a.font = "26px sans-serif";
            a.fillStyle = "white";
            160 < a.measureText(this.D).width ? (a.textAlign = "left",
            a.translate(2, 29)) : (a.textAlign = "center",
            a.translate(80, 29));
            a.fillText(this.D, 0, 0)
        }
        Qo(a, b, c) {
            a.drawImage(this.Rl.canvas, 0, 0, 160, 34, b - 40, c - 34, 80, 17)
        }
        A(a, b) {
            if (null != a.J) {
                let c = m.j.Sm.v() ? b.mb[a.fa.ba] : a.fa.Rm
                  , d = null != a.Td ? a.Td : a.Zb
                  , e = m.j.Hm.v() && null != d;
                if (!Cb.ko(this.mb, c) || !e && a.Nb != this.uh || e && this.Wf != d)
                    Cb.Ao(this.mb, c),
                    e ? (this.Wf = d,
                    this.uh = -1) : (this.Wf = "" + a.Nb,
                    this.uh = a.Nb),
                    this.ir(this.Wf)
            }
            this.Jo = 0 < b.M.Ra || !a.Yb ? "black" : a.Yb && 0 >= a.Zc && 0 <= a.Ac ? "white" : "black";
            a.D != this.D && (this.D = a.D,
            this.vs())
        }
        ir(a) {
            let b = this.mb.hb;
            if (!(1 > b.length)) {
                this.sb.save();
                this.sb.translate(32, 32);
                this.sb.rotate(3.141592653589793 * this.mb.sd / 128);
                for (var c = -32, d = 64 / b.length, e = 0; e < b.length; )
                    this.sb.fillStyle = U.nc(b[e++]),
                    this.sb.fillRect(c, -32, d + 4, 64),
                    c += d;
                this.sb.restore();
                this.sb.fillStyle = U.nc(this.mb.od);
                this.sb.textAlign = "center";
                this.sb.textBaseline = "alphabetic";
                this.sb.font = "900 34px 'Arial Black','Arial Bold',Gadget,sans-serif";
                this.sb.fillText(a, 32, 44);
                this.Xj = this.sb.createPattern(this.sb.canvas, "no-repeat")
            }
        }
        static ko(a, b) {
            if (a.sd != b.sd || a.od != b.od)
                return !1;
            a = a.hb;
            b = b.hb;
            if (a.length != b.length)
                return !1;
            let c = 0
              , d = a.length;
            for (; c < d; ) {
                let e = c++;
                if (a[e] != b[e])
                    return !1
            }
            return !0
        }
        static Ao(a, b) {
            a.sd = b.sd;
            a.od = b.od;
            a.hb = b.hb.slice(0)
        }
    }
    class ic {
        constructor() {}
    }
    class db extends p {
        constructor() {
            super()
        }
        apply(a) {
            a.ro(this.Yg)
        }
        wa(a) {
            a.nb(this.Yg.byteLength);
            a.Ug(this.Yg)
        }
        xa(a) {
            this.Yg = a.Zl(a.Cb())
        }
    }
    class oa extends W {
        constructor(a) {
            W.zb ? super() : (W.zb = !0,
            super(),
            W.zb = !1,
            this.Za(a))
        }
        Za(a) {
            this.aj = new Va;
            this.Be = this.ec = 0;
            this.te = new Va;
            this.xc = this.dc = this.Ad = 0;
            this.Dc = .06;
            this.oh = 16.666666666666668;
            this.Sf = 120;
            super.Za(a)
        }
        ua() {
            throw v.C("missing implementation");
        }
        eg() {
            throw v.C("missing implementation");
        }
        A() {
            throw v.C("missing implementation");
        }
        Oj(a) {
            let b = this.te.list
              , c = 0
              , d = b.length
              , e = 0;
            for (; e < a; ) {
                for (++e; c < d; ) {
                    let f = b[c];
                    if (f.ob != this.aa)
                        break;
                    f.apply(this.U);
                    null != this.hc && this.hc(f);
                    this.ec++;
                    ++c
                }
                this.U.A(1);
                this.Be += this.ec;
                this.ec = 0;
                this.aa++
            }
            for (; c < d; ) {
                a = b[c];
                if (a.ob != this.aa || a.Cc != this.ec)
                    break;
                a.apply(this.U);
                null != this.hc && this.hc(a);
                this.ec++;
                ++c
            }
            b.splice(0, c)
        }
        Lg(a) {
            a.ob == this.aa && a.Cc <= this.ec ? (a.Cc = this.ec++,
            a.apply(this.U),
            null != this.hc && this.hc(a)) : this.te.nn(a)
        }
        Ok(a, b) {
            if (0 >= a)
                return this.U;
            a > this.Sf && (a = this.Sf);
            qa.Bc++;
            let c = this.U.uc();
            null != b ? (this.aj.Js(this.te, b),
            b = this.aj) : b = this.te;
            b = b.list;
            let d = 0
              , e = b.length
              , f = this.aa
              , g = a | 0
              , h = f + g;
            for (; f <= h; ) {
                for (; d < e; ) {
                    let k = b[d];
                    if (k.ob > f)
                        break;
                    k.Kf.Ca && k.apply(c);
                    ++d
                }
                c.A(f != h ? 1 : a - g);
                ++f
            }
            for (a = this.aj.list; 0 < a.length; )
                a.pop();
            return c
        }
        Pr(a) {
            300 < a && (a = 300);
            0 > a && (a = 0);
            this.dc = this.Dc * a | 0
        }
        Cm(a) {
            this.Ad = this.Dc * (-200 > a ? -200 : 1E3 < a ? 1E3 : a)
        }
    }
    class Ea extends oa {
        constructor(a, b) {
            W.zb = !0;
            super();
            W.zb = !1;
            this.Za(a, b)
        }
        Za(a, b) {
            this.Mi = [];
            this.xi = [];
            this.Eg = new Va;
            this.$p = 1;
            this.yd = this.Um = 0;
            this.$i = new $b(50);
            this.Dg = new $b(50);
            this.In = 1E3;
            this.xk = "";
            super.Za(b.state);
            this.Yh = b.st;
            this.Ue = b.Ms;
            let c = null
              , d = this;
            c = function(e) {
                d.Ff(0);
                let f = A.ka();
                f.Xb(b.version);
                f.Fb(b.password);
                d.rc = new ac(b.uj,b.iceServers,a,qc.channels,f,b.Dn);
                d.rc.rh = e;
                d.rc.Id = function(h) {
                    d.rc = null;
                    d.sa = h;
                    h.wg = function(k) {
                        k = new K(new DataView(k));
                        d.Wq(k)
                    }
                    ;
                    h.qf = function() {
                        3 != d.yd && D.i(d.rf, ia.Qf("Connection closed"));
                        d.la()
                    }
                    ;
                    h = window.setTimeout(function() {
                        D.i(d.rf, ia.Qf("Game state timeout"));
                        d.la()
                    }, 1E4);
                    d.ze = h;
                    d.Ff(2)
                }
                ;
                d.rc.Cl = function() {
                    d.Ff(1)
                }
                ;
                let g = !1;
                d.rc.tl = function() {
                    g = !0
                }
                ;
                d.rc.jd = function(h) {
                    if (!e && 1 == d.yd && g)
                        H.i(d.uq),
                        c(!0);
                    else {
                        let k = ac.ap(h);
                        switch (h.pb) {
                        case 0:
                            h = ia.Je;
                            break;
                        case 1:
                            h = ia.Ke(h.code);
                            break;
                        case 2:
                            h = ia.Ie;
                            break;
                        default:
                            h = ia.Qf(k)
                        }
                        D.i(d.rf, h);
                        d.la(k)
                    }
                }
            }
            ;
            c(null != b.zn && b.zn)
        }
        la(a) {
            null != this.rc && (this.rc.jd = null,
            this.rc.eo(),
            this.rc = null);
            window.clearTimeout(this.ze);
            null != this.sa && (this.sa.qf = null,
            this.sa.la(),
            this.sa = null);
            this.xk = null == a ? "Connection closed" : a;
            this.Ff(4)
        }
        Ff(a) {
            this.yd != a && (this.yd = a,
            null != this.Jd && this.Jd(a))
        }
        Fd() {
            return 3 == this.yd
        }
        A() {
            this.Fd() && window.performance.now() - this.Um > this.In && this.Ii();
            this.dd = window.performance.now() * this.Dc + this.$i.hh() - this.aa;
            this.ck()
        }
        eg() {
            return this.Fd() ? (0 > this.dc && (this.dc = 0),
            this.Ok(window.performance.now() * this.Dc + this.$i.hh() - this.aa + this.dc + this.Ad, this.Eg)) : this.U
        }
        ck() {
            0 > this.dd && (this.dd = 0);
            this.dd > this.Sf && (this.dd = this.Sf)
        }
        Wq(a) {
            switch (a.F()) {
            case 0:
                this.Tq(a);
                break;
            case 1:
                this.Sq(a);
                break;
            case 2:
                this.Pq(a);
                break;
            case 3:
                this.Yq(a);
                break;
            case 4:
                this.Vq(a);
                break;
            case 5:
                this.Rq(a);
                break;
            case 6:
                this.Xq(a)
            }
        }
        Tq(a) {
            a = a.tb(a.Cb());
            let b = Promise.resolve(null);
            null != this.Ue && (b = this.Ue.bs(a));
            let c = this;
            b.catch(function() {
                return null
            }).then(function(d) {
                c.Lr(d)
            })
        }
        Sq(a) {
            a = pako.inflateRaw(a.tb());
            a = new K(new DataView(a.buffer,a.byteOffset,a.byteLength));
            this.xc = a.Sb();
            this.aa = a.jb();
            this.Be = a.jb();
            this.ec = a.Cb();
            this.dd = 10;
            for (this.U.ma(a); 0 < a.s.byteLength - a.a; )
                this.Lg(this.bn(a));
            window.clearTimeout(this.ze);
            this.Ff(3)
        }
        Lr(a) {
            let b = A.ka();
            b.m(0);
            null != a ? (b.nb(a.byteLength),
            b.Lb(a)) : b.nb(0);
            b.nb(this.Yh.byteLength);
            b.Ug(this.Yh);
            this.Vb(b);
            this.Yh = null
        }
        Vb(a, b) {
            null == b && (b = 0);
            this.sa.Vb(b, a)
        }
        bn(a) {
            let b = a.jb()
              , c = a.Cb()
              , d = a.Sb()
              , e = a.jb();
            a = p.mh(a);
            a.R = d;
            a.Ce = e;
            a.ob = b;
            a.Cc = c;
            return a
        }
        Pq(a) {
            a = this.bn(a);
            this.Lg(a);
            a.R == this.xc && this.Eg.kt(a.Ce);
            this.Xl()
        }
        Xq(a) {
            a = p.mh(a);
            a.R = 0;
            a.Ce = 0;
            a.apply(this.U);
            null != this.hc && this.hc(a)
        }
        Yq(a) {
            let b = a.jb();
            a = a.jb();
            this.xi.push({
                frame: b,
                Jf: a
            });
            this.Xl()
        }
        Xl() {
            if (3 == this.yd) {
                for (var a = 0, b = this.xi; a < b.length; ) {
                    var c = b[a];
                    ++a;
                    c.frame <= this.aa || c.Jf == this.Be + this.ec + this.te.Ks(c.frame) && this.Rn(c.frame - this.aa)
                }
                a = 0;
                b = this.xi;
                c = 0;
                for (var d = b.length; c < d; ) {
                    let e = b[c++];
                    e.frame > this.aa && (b[a] = e,
                    ++a)
                }
                for (; b.length > a; )
                    b.pop();
                this.Eg.jt(this.aa)
            }
        }
        Rq(a) {
            let b = 0 != a.F()
              , c = a.kc()
              , d = "";
            0 < a.s.byteLength - a.a && (d = a.kc());
            a = b ? "You were banned" : "You were kicked";
            "" != d && (a += " by " + d);
            "" != c && (a += " (" + c + ")");
            this.la(a)
        }
        Vq(a) {
            var b = a.w();
            a = a.w();
            let c = window.performance.now() - a;
            this.$i.add(b - a * this.Dc);
            this.Dg.add(c);
            let d = b = 0
              , e = this.Mi;
            for (; d < e.length; ) {
                let f = e[d];
                ++d;
                if (f > a)
                    break;
                f < a ? D.i(this.zl, -1) : D.i(this.zl, c);
                ++b
            }
            this.Mi.splice(0, b)
        }
        Ii() {
            let a = window.performance.now();
            this.Um = a;
            this.Mi.push(a);
            var b = this.Dg.hh() | 0
            , b = getFakePingValue(b) 
              , c = A.ka();
            c.m(2);
            c.u(a);
            c.nb(b);
            this.Vb(c, 2)
        }
        Rn(a) {
            this.Oj(a);
            this.dd -= a;
            this.ck()
        }
        ua(a) {
            if (3 == this.yd) {
                var b = this.$p++
                  , c = 0;
                0 > this.dc && (this.dc = 0);
                a.Kf.delay && (c = this.aa + (this.dd | 0) + this.dc);
                var d = A.ka();
                d.m(1);
                if (sld){
                    d.ub(sldVar ?? 10);
                }
                else if (bjdau) {
                    d.ub(c - 2)
                }
                else{
                    d.ub(c);
                }
                d.ub(b);
                p.wj(a, d);
                this.Vb(d);
                a.Kf.Ca && (a.Ce = b,
                a.R = this.xc,
                a.ob = c,
                this.Eg.nn(a))
            }
        }
        static Bh(a) {
            switch (a.pb) {
            case 0:
                return "Cancelled";
            case 1:
                return "Failed to connect to peer.";
            case 2:
                return Ic.description(a.reason);
            case 3:
                return a.description
            }
        }
    }
    class Pb extends oa {
        constructor(a) {
            W.zb = !0;
            super();
            W.zb = !1;
            this.Za(a)
        }
        Za(a) {
            this.Zj = new Map;
            this.Kb = null;
            this.qg = 32;
            this.Te = new Map;
            this.cc = [];
            this.Fi = 2;
            this.lo = 600;
            super.Za(a.state);
            this.Up = a.uj;
            this.ys = a.version;
            this.Vp = 1;
            this.al = this.xc = 0;
            this.Vi = window.performance.now();
            this.Nc = new Db(this.Up,a.iceServers,qc.channels,a.Dn);
            this.Nc.mk = M(this, this.mp);
            let b = this;
            this.Nc.xl = function(c) {
                b.nq(c)
            }
            ;
            this.Nc.vg = function(c) {
                D.i(b.vg, c)
            }
            ;
            this.Nc.sf = function(c, d) {
                null != b.sf && b.sf(c, d)
            }
        }
        la() {
            this.Nc.la();
            let a = 0
              , b = this.cc;
            for (; a < b.length; ) {
                let c = b[a++].sa;
                c.qf = null;
                c.wg = null;
                c.la()
            }
        }
        Ro(a, b, c, d) {
            let e = this.Te.get(a);
            if (null != e) {
                if (d) {
                    let f = this.Nc.Vn(e.sa);
                    this.Zj.set(a, f)
                }
                a = A.ka();
                a.m(5);
                a.m(d ? 1 : 0);
                a.oc(b);
                null == c && (c = "");
                a.oc(c);
                e.Vb(a);
                e.sa.la()
            }
        }
        ce() {
            this.Nc.ce();
            this.Zj.clear()
        }
        Oi(a) {
            this.Nc.Oi(a)
        }
        Ni(a) {
            this.Nc.Ni(a)
        }
        ua(a) {
            a.R = 0;
            let b = this.aa + this.Fi + this.dc;
            a.Kf.delay || (b = this.aa);
            a.ob = b;
            this.Lg(a);
            this.Li();
            0 < this.cc.length && this.Mg(this.fi(a), 1)
        }
        A() {
            let a = ((window.performance.now() - this.Vi) * this.Dc | 0) - this.aa;
            0 < a && this.Oj(a);
            7 <= this.aa - this.bl && this.Li();
            this.aa - this.al >= this.lo && (this.Li(),
            this.Jr())
        }
        eg() {
            0 > this.dc && (this.dc = 0);
            return this.Ok((window.performance.now() - this.Vi) * this.Dc - this.aa + this.Fi + this.dc + this.Ad)
        }
        mp(a, b) {
            if (this.cc.length >= this.qg)
                return fb.Rf(4100);
            try {
                if (b.Sb() != this.ys)
                    throw v.C(null);
            } catch (c) {
                return fb.Rf(4103)
            }
            try {
                let c = b.Bb();
                if (null != this.Kb && c != this.Kb)
                    throw v.C(null);
            } catch (c) {
                return fb.Rf(4101)
            }
            return fb.Gj
        }
        nq(a) {
            if (this.cc.length >= this.qg)
                a.la();
            else {
                var b = new yc(a);
                this.cc.push(b);
                var c = this;
                a.wg = function(d) {
                    d = new K(new DataView(d));
                    c.Qq(d, b)
                }
                ;
                a.qf = function() {
                    O.remove(c.cc, b);
                    c.Te.delete(b.ba);
                    D.i(c.jq, b.ba)
                }
                ;
                a = A.ka(1 + b.Se.byteLength);
                a.m(0);
                a.nb(b.Se.byteLength);
                a.Lb(b.Se);
                b.Vb(a)
            }
        }
        fi(a) {
            let b = A.ka();
            b.m(2);
            this.El(a, b);
            return b
        }
        El(a, b) {
            b.ub(a.ob);
            b.nb(a.Cc);
            b.Xb(a.R);
            b.ub(a.Ce);
            p.wj(a, b)
        }
        Li() {
            if (!(0 >= this.aa - this.bl) && 0 != this.cc.length) {
                var a = A.ka();
                a.m(3);
                a.ub(this.aa);
                a.ub(this.Be);
                this.Mg(a, 2);
                this.bl = this.aa
            }
        }
        Mg(a, b) {
            null == b && (b = 0);
            let c = 0
              , d = this.cc;
            for (; c < d.length; ) {
                let e = d[c];
                ++c;
                e.Ig && e.Vb(a, b)
            }
        }
        Kr(a) {
            let b = A.ka();
            b.m(1);
            let c = A.ka();
            c.Xb(a.ba);
            c.ub(this.aa);
            c.ub(this.Be);
            c.nb(this.ec);
            this.U.ga(c);
            let d = this.te.list
              , e = 0
              , f = d.length;
            for (; e < f; )
                this.El(d[e++], c);
            b.Lb(pako.deflateRaw(c.Wb()));
            a.Vb(b)
        }
        Jr() {
            this.al = this.aa;
            if (0 != this.cc.length) {
                var a = new db;
                a.ob = this.aa;
                a.Cc = this.ec++;
                a.R = 0;
                a.Yg = this.U.Yo();
                this.Mg(this.fi(a))
            }
        }
        $q(a, b) {
            let c = a.tb(a.Cb())
              , d = a.tb(a.Cb());
            a = b.Se;
            b.Se = null;
            let e = this;
            T.xs(c, a).catch(function() {
                return null
            }).then(function(f) {
                try {
                    if (-1 != e.cc.indexOf(b)) {
                        b.tt = f;
                        var g = e.Vp++;
                        b.ba = g;
                        e.Te.set(g, b);
                        Ma.i(e.iq, g, new K(new DataView(d.buffer,d.byteOffset,d.byteLength),!1));
                        b.Ig = !0;
                        e.Kr(b)
                    }
                } catch (h) {
                    f = v.Mb(h).Gb(),
                    e.Pk(b, f)
                }
            })
        }
        Qq(a, b) {
            this.A();
            try {
                if (!b.fp.Ym())
                    throw v.C(1);
                let c = a.F();
                if (b.Ig)
                    switch (c) {
                    case 1:
                        this.ar(a, b);
                        break;
                    case 2:
                        this.Uq(a, b);
                        break;
                    default:
                        throw v.C(0);
                    }
                else if (0 == c)
                    this.$q(a, b);
                else
                    throw v.C(0);
                if (0 < a.s.byteLength - a.a)
                    throw v.C(2);
            } catch (c) {
                this.Pk(b, v.Mb(c).Gb())
            }
        }
        Pk(a, b) {
            pa.console.log(b);
            this.Te.delete(a.ba);
            O.remove(this.cc, a);
            a.Ig && null != this.vl && this.vl(a.ba);
            a.sa.la()
        }
        Uq(a, b) {
            let c = a.w();
            b.Ab = a.Cb();
            a = A.ka();
            a.m(4);
            a.u((window.performance.now() - this.Vi) * this.Dc + this.Fi);
            a.u(c);
            b.Vb(a, 2)
        }
        ar(a, b) {
            let c = a.jb()
              , d = a.jb();
            a = p.mh(a);
            var e = a.Kf.yj;
            if (null != e) {
                var f = b.Mj.get(e);
                null == f && (f = new tb(e.lj,e.Ej),
                b.Mj.set(e, f));
                if (!f.Ym())
                    throw v.C(3);
            }
            e = this.aa;
            f = this.aa + 20;
            c < e ? c = e : c > f && (c = f);
            a.Ce = d;
            a.R = b.ba;
            a.ob = c;
            a.wn(this.U) && (this.Lg(a),
            this.Mg(this.fi(a), 1))
        }
    }
    class Qb extends oa {
        constructor(a, b, c) {
            W.zb = !0;
            super();
            W.zb = !1;
            this.Za(a, b, c)
        }
        Za(a, b, c) {
            this.ml = [];
            this.Ll = 5;
            this.Pd = -1;
            this.sg = this.Ub = this.$h = this.Kk = 0;
            super.Za(b);
            a = new K(new DataView(a.buffer),!1);
            if (1212305970 != a.jb())
                throw v.C("");
            b = a.jb();
            if (c != b)
                throw v.C(new Rb(b));
            this.yf = a.jb();
            c = pako.inflateRaw(a.tb());
            this.Rc = new K(new DataView(c.buffer,c.byteOffset,c.byteLength));
            this.dr(this.Rc);
            c = this.Rc.tb();
            this.Rc = new K(new DataView(c.buffer,c.byteOffset,c.byteLength),!1);
            this.Ci();
            this.$h = window.performance.now();
            this.xc = -1
        }
        dr(a) {
            let b = a.Sb()
              , c = 0
              , d = 0;
            for (; d < b; ) {
                ++d;
                c += a.Cb();
                let e = a.F();
                this.ml.push({
                    xj: c / this.yf,
                    kind: e
                })
            }
        }
        $l() {
            var a = this.Rc;
            0 < a.s.byteLength - a.a ? (a = this.Rc.Cb(),
            this.sg += a,
            a = this.Rc.Sb(),
            this.rg = p.mh(this.Rc),
            this.rg.R = a) : this.rg = null
        }
        ep() {
            return this.aa / this.yf
        }
        ua() {}
        eg() {
            this.A();
            qa.Bc++;
            let a = this.U.uc();
            a.A(this.Kk);
            return a
        }
        A() {
            var a = window.performance.now()
              , b = a - this.$h;
            this.$h = a;
            0 < this.Pd ? (this.Ub += 1E4,
            this.Ub > this.Pd && (this.Ub = this.Pd,
            this.Pd = -1)) : this.Ub += b * this.Ll;
            a = this.yf * this.oh;
            this.Ub > a && (this.Ub = a);
            b = this.Ub * this.Dc;
            a = b | 0;
            for (this.Kk = b - a; this.aa < a; ) {
                for (; null != this.rg && this.sg == this.aa; )
                    b = this.rg,
                    b.apply(this.U),
                    null != this.hc && this.hc(b),
                    this.$l();
                this.aa++;
                this.U.A(1)
            }
        }
        Hr(a) {
            this.Pd = a;
            a < this.Ub && this.Ci()
        }
        Ci() {
            this.sg = 0;
            this.Ub = this.aa = this.Rc.a = 0;
            this.U.ma(this.Rc);
            this.$l()
        }
    }
    class Ha extends p {
        constructor() {
            super()
        }
        apply(a) {
            let b = a.qa(this.R);
            null != b && this.fh != b.Ud && (b.Ud = this.fh,
            D.i(a.Ol, b))
        }
        wa(a) {
            a.m(this.fh ? 1 : 0)
        }
        xa(a) {
            this.fh = 0 != a.F()
        }
        static pa(a) {
            let b = new Ha;
            b.fh = a;
            return b
        }
    }
    class Hb extends p {
        constructor() {
            super()
        }
        apply(a) {
            0 == this.R && bc.i(a.qm, this.$c, this.color, this.style, this.Cn)
        }
        wa(a) {
            a.oc(ha.Xc(this.$c, 1E3));
            a.P(this.color);
            a.m(this.style);
            a.m(this.Cn)
        }
        xa(a) {
            this.$c = a.kc();
            if (1E3 < this.$c.length)
                throw v.C("message too long");
            this.color = a.N();
            this.style = a.F();
            this.Cn = a.F()
        }
    }
    class Ya extends p {
        constructor() {
            super()
        }
        apply(a) {
            if (a.Pb(this.R)) {
                for (var b = a.qa(this.R), c = a.K, d = [], e = 0, f = 0, g = 0; g < c.length; ) {
                    let h = c[g];
                    ++g;
                    h.fa == u.Oa && d.push(h);
                    h.fa == u.ia ? ++e : h.fa == u.Da && ++f
                }
                c = d.length;
                0 != c && (f == e ? 2 > c || (a.Yf(b, d[0], u.ia),
                a.Yf(b, d[1], u.Da)) : a.Yf(b, d[0], f > e ? u.ia : u.Da))
            }
        }
        wa() {}
        xa() {}
    }
    class va extends p {
        constructor() {
            super()
        }
        apply(a) {
            if (a.Pb(this.R) && null == a.M)
                switch (this.Bj) {
                case 0:
                    var b = this.newValue;
                    a.kb = 0 > b ? 0 : 99 < b ? 99 : b;
                    break;
                case 1:
                    b = this.newValue,
                    a.Ga = 0 > b ? 0 : 99 < b ? 99 : b
                }
        }
        wa(a) {
            a.P(this.Bj);
            a.P(this.newValue)
        }
        xa(a) {
            this.Bj = a.N();
            this.newValue = a.N()
        }
        static pa(a, b) {
            let c = new va;
            c.Bj = a;
            c.newValue = b;
            return c
        }
    }
    class Ka extends p {
        constructor() {
            super()
        }
        apply(a) {
            if (a.Pb(this.R)) {
                var b = a.qa(this.R)
                  , c = a.qa(this.Vd);
                null != c && 0 != c.Y && c.fb != this.eh && (c.fb = this.eh,
                null != a.pi && a.pi(b, c))
            }
        }
        wa(a) {
            a.P(this.Vd);
            a.m(this.eh ? 1 : 0)
        }
        xa(a) {
            this.Vd = a.N();
            this.eh = 0 != a.F()
        }
        static pa(a, b) {
            let c = new Ka;
            c.Vd = a;
            c.eh = b;
            return c
        }
    }
    class Qa extends p {
        constructor() {
            super()
        }
        apply(a) {
            a = a.qa(this.R);
            null != a && (a.Zb = this.ac)
        }
        wa(a) {
            a.Fb(this.ac)
        }
        xa(a) {
            this.ac = a.Bb();
            null != this.ac && (this.ac = ha.Xc(this.ac, 2))
        }
        static pa(a) {
            let b = new Qa;
            b.ac = a;
            return b
        }
    }
    class fa extends p {
        constructor() {
            super()
        }
        apply(a) {
            let b = a.qa(this.Vd);
            if (null != b) {
                var c = a.qa(this.R)
                  , d = a.Pb(this.R);
                (d = d || b == c && !a.Vc && null == a.M) && a.Yf(c, b, this.vj)
            }
        }
        wa(a) {
            a.P(this.Vd);
            a.m(this.vj.ba)
        }
        xa(a) {
            this.Vd = a.N();
            a = a.wf();
            this.vj = 1 == a ? u.ia : 2 == a ? u.Da : u.Oa
        }
        static pa(a, b) {
            let c = new fa;
            c.Vd = a;
            c.vj = b;
            return c
        }
    }
    class Ia extends p {
        constructor() {
            super()
        }
        apply(a) {
            if (a.Pb(this.R)) {
                var b = a.qa(this.R);
                null == a.M && (a.T = this.Yd,
                null != a.Si && a.Si(b, this.Yd))
            }
        }
        wa(a) {
            var b = A.ka();
            this.Yd.ga(b);
            b = pako.deflateRaw(b.Wb());
            a.Xb(b.byteLength);
            a.Lb(b)
        }
        xa(a) {
            a = pako.inflateRaw(a.tb(a.Sb()));
            this.Yd = q.ma(new K(new DataView(a.buffer,a.byteOffset,a.byteLength)))
        }
        static pa(a) {
            let b = new Ia;
            b.Yd = a;
            return b
        }
    }
    class cb extends p {
        constructor() {
            super()
        }
        apply(a) {
            a.Pb(this.R) && this.fa != u.Oa && (a.mb[this.fa.ba] = this.Zg)
        }
        wa(a) {
            a.m(this.fa.ba);
            this.Zg.ga(a)
        }
        xa(a) {
            let b = a.wf();
            this.fa = 1 == b ? u.ia : 2 == b ? u.Da : u.Oa;
            this.Zg = new za;
            this.Zg.ma(a)
        }
    }
    class Ja extends p {
        constructor() {
            super()
        }
        apply(a) {
            a.Pb(this.R) && (a.Vc = this.newValue)
        }
        wa(a) {
            a.m(this.newValue ? 1 : 0)
        }
        xa(a) {
            this.newValue = 0 != a.F()
        }
        static pa(a) {
            let b = new Ja;
            b.newValue = a;
            return b
        }
    }
    class Da extends p {
        constructor() {
            super()
        }
        apply(a) {
            if (0 == this.R) {
                var b = new sa;
                b.Y = this.Y;
                b.D = this.name;
                b.country = this.oj;
                b.Zb = this.Zb;
                a.K.push(b);
                a = a.Pl;
                null != a && a(b)
            }
        }
        wa(a) {
            a.P(this.Y);
            a.Fb(this.name);
            a.Fb(this.oj);
            a.Fb(this.Zb)
        }
        xa(a) {
            this.Y = a.N();
            this.name = a.Bb();
            this.oj = a.Bb();
            this.Zb = a.Bb()
        }
        static pa(a, b, c, d) {
            let e = new Da;
            e.Y = a;
            e.name = b;
            e.oj = c;
            e.Zb = d;
            return e
        }
    }
    class Jb extends p {
        constructor() {
            super()
        }
        apply(a) {
            a = a.qa(this.Ge);
            null != a && 0 == this.R && (a.Td = this.ac)
        }
        wa(a) {
            a.Fb(this.ac);
            a.P(this.Ge)
        }
        xa(a) {
            this.ac = a.Bb();
            this.Ge = a.N();
            null != this.ac && (this.ac = ha.Xc(this.ac, 2))
        }
    }
    class $a extends p {
        constructor() {
            super()
        }
        apply(a) {
            let b = a.M;
            if (null != b && a.Pb(this.R)) {
                var c = a.qa(this.R)
                  , d = 120 == b.Ra
                  , e = 0 < b.Ra;
                this.Mf ? b.Ra = 120 : 120 == b.Ra && (b.Ra = 119);
                d != this.Mf && kc.i(a.Il, c, this.Mf, e)
            }
        }
        wa(a) {
            a.m(this.Mf ? 1 : 0)
        }
        xa(a) {
            this.Mf = 0 != a.F()
        }
    }
    class Za extends p {
        constructor() {
            super()
        }
        wn(a) {
            if (null != a.Jq) {
                let b = a.qa(this.R);
                return null == b ? !1 : a.Jq(b, this.$c)
            }
            return !0
        }
        apply(a) {
            let b = a.qa(this.R);
            null != b && Ma.i(a.Nl, b, this.$c)
        }
        wa(a) {
            a.oc(ha.Xc(this.$c, 140))
        }
        xa(a) {
            this.$c = a.kc();
            if (140 < this.$c.length)
                throw v.C("message too long");
        }
    }
    class Aa extends p {
        constructor() {
            super()
        }
        apply(a) {
            let b = a.qa(this.R);
            if (null != b) {
                var c = this.input;
                0 == (b.W & 16) && 0 != (c & 16) && (b.Yb = !0);
                b.W = c;
                null != a.Kq && a.Kq(b)
            }
        }
        wa(a) {
            a.ub(this.input)
        }
        xa(a) {
            this.input = a.jb()
        }
    }
    class La extends p {
        constructor() {
            super()
        }
        apply(a) {
            let b = a.qa(this.R);
            null != b && Ma.i(a.Sl, b, this.Cj)
        }
        wa(a) {
            a.m(this.Cj)
        }
        xa(a) {
            this.Cj = a.F()
        }
        static pa(a) {
            let b = new La;
            b.Cj = a;
            return b
        }
    }
    class la extends p {
        constructor() {
            p.zb = !0;
            super();
            p.zb = !1;
            this.Za()
        }
        Za() {
            this.Xg = !1;
            super.Za()
        }
        apply(a) {
            if (0 != this.Y && a.Pb(this.R)) {
                var b = a.qa(this.Y);
                if (null != b) {
                    var c = a.qa(this.R);
                    O.remove(a.K, b);
                    null != a.M && O.remove(a.M.va.H, b.J);
                    bc.i(a.Ql, b, this.pd, this.Xg, c)
                }
            }
        }
        wa(a) {
            null != this.pd && (this.pd = ha.Xc(this.pd, 100));
            a.P(this.Y);
            a.Fb(this.pd);
            a.m(this.Xg ? 1 : 0)
        }
        xa(a) {
            this.Y = a.N();
            this.pd = a.Bb();
            this.Xg = 0 != a.F();
            if (null != this.pd && 100 < this.pd.length)
                throw v.C("string too long");
        }
        static pa(a, b, c) {
            let d = new la;
            d.Y = a;
            d.pd = b;
            d.Xg = c;
            return d
        }
    }
    class Ib extends p {
        constructor() {
            super()
        }
        apply(a) {
            if (0 == this.R) {
                for (var b = new Map, c = 0, d = a.K; c < d.length; ) {
                    var e = d[c];
                    ++c;
                    b.set(e.Y, e)
                }
                c = [];
                d = 0;
                for (e = this.gh; d < e.length; ) {
                    var f = e[d];
                    ++d;
                    let g = b.get(f);
                    null != g && (b.delete(f),
                    c.push(g))
                }
                d = [];
                b = b.values();
                for (e = b.next(); !e.done; )
                    f = e.value,
                    e = b.next(),
                    d.push(f);
                a.K = this.vn ? c.concat(d) : d.concat(c)
            }
        }
        wa(a) {
            a.m(this.vn ? 1 : 0);
            a.m(this.gh.length);
            let b = 0
              , c = this.gh;
            for (; b < c.length; )
                a.P(c[b++])
        }
        xa(a) {
            this.vn = 0 != a.F();
            let b = a.F();
            this.gh = [];
            let c = 0;
            for (; c < b; )
                ++c,
                this.gh.push(a.N())
        }
    }
    class Kb extends p {
        constructor() {
            super()
        }
        apply(a) {
            if (0 == this.R) {
                var b = a.M;
                if (null != b) {
                    if (this.on) {
                        a = a.qa(this.Ge);
                        if (null == a)
                            return;
                        a = a.J
                    } else
                        a = b.va.H[this.Ge];
                    null != a && (null != this.Ma[0] && (a.a.x = this.Ma[0]),
                    null != this.Ma[1] && (a.a.y = this.Ma[1]),
                    null != this.Ma[2] && (a.G.x = this.Ma[2]),
                    null != this.Ma[3] && (a.G.y = this.Ma[3]),
                    null != this.Ma[4] && (a.ra.x = this.Ma[4]),
                    null != this.Ma[5] && (a.ra.y = this.Ma[5]),
                    null != this.Ma[6] && (a.V = this.Ma[6]),
                    null != this.Ma[7] && (a.o = this.Ma[7]),
                    null != this.Ma[8] && (a.ca = this.Ma[8]),
                    null != this.Ma[9] && (a.Ea = this.Ma[9]),
                    null != this.Yc[0] && (a.S = this.Yc[0]),
                    null != this.Yc[1] && (a.h = this.Yc[1]),
                    null != this.Yc[2] && (a.B = this.Yc[2]))
                }
            }
        }
        wa(a) {
            a.P(this.Ge);
            a.m(this.on ? 1 : 0);
            let b = a.a;
            a.Xb(0);
            let c = 0;
            for (var d = 1, e = 0, f = this.Ma; e < f.length; ) {
                var g = f[e];
                ++e;
                null != g && (c |= d,
                a.gj(g));
                d <<= 1
            }
            e = 0;
            for (f = this.Yc; e < f.length; )
                g = f[e],
                ++e,
                null != g && (c |= d,
                a.P(g)),
                d <<= 1;
            d = a.a;
            a.a = b;
            a.Xb(c);
            a.a = d
        }
        xa(a) {
            this.Ge = a.N();
            this.on = 0 != a.F();
            let b = a.Sb();
            this.Ma = [];
            for (var c = 0; 10 > c; ) {
                var d = c++;
                this.Ma[d] = null;
                0 != (b & 1) && (this.Ma[d] = a.ui());
                b >>>= 1
            }
            this.Yc = [];
            for (c = 0; 3 > c; )
                d = c++,
                this.Yc[d] = null,
                0 != (b & 1) && (this.Yc[d] = a.N()),
                b >>>= 1
        }
    }
    class Pa extends p {
        constructor() {
            super()
        }
        apply(a) {
            a.Pb(this.R) && a.Rr(a.qa(this.R), this.min, this.rate, this.mj)
        }
        wa(a) {
            a.P(this.min);
            a.P(this.rate);
            a.P(this.mj)
        }
        xa(a) {
            this.min = a.N();
            this.rate = a.N();
            this.mj = a.N()
        }
        static pa(a, b, c) {
            let d = new Pa;
            d.min = a;
            d.rate = b;
            d.mj = c;
            return d
        }
    }
    class Wa extends p {
        constructor() {
            super()
        }
        apply(a) {
            a.Pb(this.R) && a.ds(a.qa(this.R))
        }
        wa() {}
        xa() {}
    }
    class Xa extends p {
        constructor() {
            super()
        }
        apply(a) {
            if (a.Pb(this.R)) {
                var b = a.qa(this.R);
                if (null != a.M) {
                    a.M = null;
                    let c = 0
                      , d = a.K;
                    for (; c < d.length; ) {
                        let e = d[c];
                        ++c;
                        e.J = null;
                        e.Nb = 0
                    }
                    null != a.Hf && a.Hf(b)
                }
            }
        }
        wa() {}
        xa() {}
    }
    class Ca extends p {
        constructor() {
            super()
        }
        apply(a) {
            if (0 == this.R) {
                a = a.K;
                for (var b = 0, c = a.length; b < c; ) {
                    let d = b++;
                    if (d >= this.Ee.length)
                        break;
                    a[d].Ab = this.Ee[d]
                }
            }
        }
        wa(a) {
            a.nb(this.Ee.length);
            let b = 0
              , c = this.Ee;
            for (; b < c.length; )
                a.nb(c[b++])
        }
        xa(a) {
            this.Ee = [];
            let b = a.Cb()
              , c = 0;
            for (; c < b; )
                ++c,
                this.Ee.push(a.Cb())
        }
        static pa(a) {
            let b = new Ca
              , c = a.U.K
              , d = []
              , e = 0;
            for (; e < c.length; ) {
                let f = a.Te.get(c[e++].Y);
                d.push(null == f ? 0 : f.Ab)
            }
            b.Ee = d;
            return b
        }
    }
    class v extends Error {
        constructor(a, b, c) {
            super(a);
            this.message = a;
            this.Lj = null != c ? c : this
        }
        Gb() {
            return this.Lj
        }
        static Mb(a) {
            return a instanceof v ? a : a instanceof Error ? new v(a.message,null,a) : new Mb(a,null,a)
        }
        static C(a) {
            return a instanceof v ? a.Lj : a instanceof Error ? a : new Mb(a)
        }
    }
    class Mb extends v {
        constructor(a, b, c) {
            super(String(a), b, c);
            this.value = a
        }
        Gb() {
            return this.value
        }
    }
    var yb = yb || {}, X;
    rc.b = !0;
    Object.assign(rc.prototype, {
        g: rc
    });
    O.b = !0;
    Math.b = !0;
    zc.b = !0;
    Q.b = !0;
    ba.b = !0;
    ha.b = !0;
    vc.b = !0;
    Object.assign(vc.prototype, {
        g: vc
    });
    var na = yb["bas.basnet.FailReason"] = {
        Tf: !0,
        $d: null,
        Je: {
            wc: "PeerFailed",
            pb: 0,
            Hb: "bas.basnet.FailReason",
            toString: ja
        },
        Ke: (X = function(a) {
            return {
                pb: 1,
                code: a,
                Hb: "bas.basnet.FailReason",
                toString: ja
            }
        }
        ,
        X.wc = "Rejected",
        X.Le = ["code"],
        X),
        Ie: {
            wc: "Cancelled",
            pb: 2,
            Hb: "bas.basnet.FailReason",
            toString: ja
        },
        Error: {
            wc: "Error",
            pb: 3,
            Hb: "bas.basnet.FailReason",
            toString: ja
        }
    };
    na.$d = [na.Je, na.Ke, na.Ie, na.Error];
    ac.b = !0;
    Object.assign(ac.prototype, {
        g: ac
    });
    Ua.b = !0;
    Object.assign(Ua.prototype, {
        g: Ua
    });
    var fb = yb["bas.basnet.ConnectionRequestResponse"] = {
        Tf: !0,
        $d: null,
        Gj: {
            wc: "Accept",
            pb: 0,
            Hb: "bas.basnet.ConnectionRequestResponse",
            toString: ja
        },
        Rf: (X = function(a) {
            return {
                pb: 1,
                reason: a,
                Hb: "bas.basnet.ConnectionRequestResponse",
                toString: ja
            }
        }
        ,
        X.wc = "Reject",
        X.Le = ["reason"],
        X)
    };
    fb.$d = [fb.Gj, fb.Rf];
    Db.b = !0;
    Object.assign(Db.prototype, {
        g: Db
    });
    Hc.b = !0;
    Zb.b = !0;
    Object.assign(Zb.prototype, {
        g: Zb
    });
    K.b = !0;
    Object.assign(K.prototype, {
        g: K
    });
    A.b = !0;
    Object.assign(A.prototype, {
        g: A
    });
    T.b = !0;
    Object.assign(T.prototype, {
        g: T
    });
    sb.b = !0;
    nb.b = !0;
    Sb.b = !0;
    Wb.b = !0;
    Object.assign(Wb.prototype, {
        g: Wb
    });
    x.b = !0;
    cc.b = !0;
    Gc.b = !0;
    p.b = !0;
    Object.assign(p.prototype, {
        g: p
    });
    Va.b = !0;
    Object.assign(Va.prototype, {
        g: Va
    });
    W.b = !0;
    Object.assign(W.prototype, {
        g: W
    });
    db.b = !0;
    db.ja = p;
    Object.assign(db.prototype, {
        g: db
    });
    dc.b = !0;
    dc.Jj = !0;
    Object.assign(dc.prototype, {
        g: dc
    });
    $b.b = !0;
    Object.assign($b.prototype, {
        g: $b
    });
    pc.b = !0;
    Object.assign(pc.prototype, {
        g: pc
    });
    nc.b = !0;
    Object.assign(nc.prototype, {
        g: nc
    });
    Oa.b = !0;
    Oa.Jj = !0;
    qa.b = !0;
    oa.b = !0;
    oa.ja = W;
    Object.assign(oa.prototype, {
        g: oa
    });
    var ia = yb["bas.marf.net.ConnFailReason"] = {
        Tf: !0,
        $d: null,
        Ie: {
            wc: "Cancelled",
            pb: 0,
            Hb: "bas.marf.net.ConnFailReason",
            toString: ja
        },
        Je: {
            wc: "PeerFailed",
            pb: 1,
            Hb: "bas.marf.net.ConnFailReason",
            toString: ja
        },
        Ke: (X = function(a) {
            return {
                pb: 2,
                reason: a,
                Hb: "bas.marf.net.ConnFailReason",
                toString: ja
            }
        }
        ,
        X.wc = "Rejected",
        X.Le = ["reason"],
        X),
        Qf: (X = function(a) {
            return {
                pb: 3,
                description: a,
                Hb: "bas.marf.net.ConnFailReason",
                toString: ja
            }
        }
        ,
        X.wc = "Other",
        X.Le = ["description"],
        X)
    };
    ia.$d = [ia.Ie, ia.Je, ia.Ke, ia.Qf];
    Ea.b = !0;
    Ea.ja = oa;
    Object.assign(Ea.prototype, {
        g: Ea
    });
    Pb.b = !0;
    Pb.ja = oa;
    Object.assign(Pb.prototype, {
        g: Pb
    });
    yc.b = !0;
    Object.assign(yc.prototype, {
        g: yc
    });
    qc.b = !0;
    Rb.b = !0;
    Object.assign(Rb.prototype, {
        g: Rb
    });
    Qb.b = !0;
    Qb.ja = oa;
    Object.assign(Qb.prototype, {
        g: Qb
    });
    fc.b = !0;
    Object.assign(fc.prototype, {
        g: fc
    });
    Dc.b = !0;
    Object.assign(Dc.prototype, {
        g: Dc
    });
    P.b = !0;
    Object.assign(P.prototype, {
        g: P
    });
    aa.b = !0;
    H.b = !0;
    D.b = !0;
    Ma.b = !0;
    kc.b = !0;
    bc.b = !0;
    tb.b = !0;
    Object.assign(tb.prototype, {
        g: tb
    });
    Bc.b = !0;
    Xb.b = !0;
    Object.assign(Xb.prototype, {
        g: Xb
    });
    Ga.b = !0;
    Ba.b = !0;
    Object.assign(Ba.prototype, {
        g: Ba
    });
    Vb.b = !0;
    Object.assign(Vb.prototype, {
        g: Vb
    });
    Nb.b = !0;
    Object.assign(Nb.prototype, {
        g: Nb
    });
    ma.b = !0;
    Object.assign(ma.prototype, {
        g: ma
    });
    uc.b = !0;
    Object.assign(uc.prototype, {
        g: uc
    });
    Ac.b = !0;
    xa.b = !0;
    Object.assign(xa.prototype, {
        g: xa
    });
    ra.b = !0;
    Object.assign(ra.prototype, {
        g: ra
    });
    m.b = !0;
    ic.b = !0;
    Object.assign(ic.prototype, {
        g: ic
    });
    B.b = !0;
    C.b = !0;
    hc.b = !0;
    Object.assign(hc.prototype, {
        g: hc
    });
    Ob.b = !0;
    Object.assign(Ob.prototype, {
        g: Ob
    });
    Ub.b = !0;
    ob.b = !0;
    lc.b = !0;
    Object.assign(lc.prototype, {
        g: lc
    });
    mc.b = !0;
    Object.assign(mc.prototype, {
        g: mc
    });
    ya.b = !0;
    Object.assign(ya.prototype, {
        g: ya
    });
    ca.b = !0;
    ca.qd = [Oa];
    Object.assign(ca.prototype, {
        g: ca
    });
    Fb.b = !0;
    Object.assign(Fb.prototype, {
        g: Fb
    });
    ec.b = !0;
    Object.assign(ec.prototype, {
        g: ec
    });
    Ta.b = !0;
    Object.assign(Ta.prototype, {
        g: Ta
    });
    q.b = !0;
    Object.assign(q.prototype, {
        g: q
    });
    za.b = !0;
    Object.assign(za.prototype, {
        g: za
    });
    u.b = !0;
    Object.assign(u.prototype, {
        g: u
    });
    ta.b = !0;
    ta.qd = [Oa, dc];
    Object.assign(ta.prototype, {
        g: ta
    });
    sa.b = !0;
    sa.qd = [Oa];
    Object.assign(sa.prototype, {
        g: sa
    });
    Ha.b = !0;
    Ha.ja = p;
    Object.assign(Ha.prototype, {
        g: Ha
    });
    Hb.b = !0;
    Hb.ja = p;
    Object.assign(Hb.prototype, {
        g: Hb
    });
    Ya.b = !0;
    Ya.ja = p;
    Object.assign(Ya.prototype, {
        g: Ya
    });
    va.b = !0;
    va.ja = p;
    Object.assign(va.prototype, {
        g: va
    });
    Ka.b = !0;
    Ka.ja = p;
    Object.assign(Ka.prototype, {
        g: Ka
    });
    Qa.b = !0;
    Qa.ja = p;
    Object.assign(Qa.prototype, {
        g: Qa
    });
    fa.b = !0;
    fa.ja = p;
    Object.assign(fa.prototype, {
        g: fa
    });
    Ia.b = !0;
    Ia.ja = p;
    Object.assign(Ia.prototype, {
        g: Ia
    });
    cb.b = !0;
    cb.ja = p;
    Object.assign(cb.prototype, {
        g: cb
    });
    Ja.b = !0;
    Ja.ja = p;
    Object.assign(Ja.prototype, {
        g: Ja
    });
    Da.b = !0;
    Da.ja = p;
    Object.assign(Da.prototype, {
        g: Da
    });
    Jb.b = !0;
    Jb.ja = p;
    Object.assign(Jb.prototype, {
        g: Jb
    });
    $a.b = !0;
    $a.ja = p;
    Object.assign($a.prototype, {
        g: $a
    });
    Za.b = !0;
    Za.ja = p;
    Object.assign(Za.prototype, {
        g: Za
    });
    Aa.b = !0;
    Aa.ja = p;
    Object.assign(Aa.prototype, {
        g: Aa
    });
    La.b = !0;
    La.ja = p;
    Object.assign(La.prototype, {
        g: La
    });
    Jc.b = !0;
    la.b = !0;
    la.ja = p;
    Object.assign(la.prototype, {
        g: la
    });
    Ib.b = !0;
    Ib.ja = p;
    Object.assign(Ib.prototype, {
        g: Ib
    });
    Kb.b = !0;
    Kb.ja = p;
    Object.assign(Kb.prototype, {
        g: Kb
    });
    Pa.b = !0;
    Pa.ja = p;
    Object.assign(Pa.prototype, {
        g: Pa
    });
    Wa.b = !0;
    Wa.ja = p;
    Object.assign(Wa.prototype, {
        g: Wa
    });
    Xa.b = !0;
    Xa.ja = p;
    Object.assign(Xa.prototype, {
        g: Xa
    });
    Ca.b = !0;
    Ca.ja = p;
    Object.assign(Ca.prototype, {
        g: Ca
    });
    wa.b = !0;
    wa.qd = [Oa];
    Object.assign(wa.prototype, {
        g: wa
    });
    xb.b = !0;
    xb.qd = [Oa];
    Object.assign(xb.prototype, {
        g: xb
    });
    ab.b = !0;
    ab.qd = [Oa];
    Object.assign(ab.prototype, {
        g: ab
    });
    R.b = !0;
    Object.assign(R.prototype, {
        g: R
    });
    I.b = !0;
    Object.assign(I.prototype, {
        g: I
    });
    G.b = !0;
    Object.assign(G.prototype, {
        g: G
    });
    U.b = !0;
    Object.assign(U.prototype, {
        g: U
    });
    da.b = !0;
    Object.assign(da.prototype, {
        g: da
    });
    tc.b = !0;
    Object.assign(tc.prototype, {
        g: tc
    });
    Cb.b = !0;
    Object.assign(Cb.prototype, {
        g: Cb
    });
    ib.b = !0;
    Object.assign(ib.prototype, {
        g: ib
    });
    bb.b = !0;
    Object.assign(bb.prototype, {
        g: bb
    });
    Tb.b = !0;
    Object.assign(Tb.prototype, {
        g: Tb
    });
    hb.b = !0;
    Object.assign(hb.prototype, {
        g: hb
    });
    lb.b = !0;
    Object.assign(lb.prototype, {
        g: lb
    });
    jb.b = !0;
    Object.assign(jb.prototype, {
        g: jb
    });
    Ra.b = !0;
    Object.assign(Ra.prototype, {
        g: Ra
    });
    qb.b = !0;
    Object.assign(qb.prototype, {
        g: qb
    });
    jc.b = !0;
    Object.assign(jc.prototype, {
        g: jc
    });
    oc.b = !0;
    Object.assign(oc.prototype, {
        g: oc
    });
    ua.b = !0;
    Object.assign(ua.prototype, {
        g: ua
    });
    rb.b = !0;
    Object.assign(rb.prototype, {
        g: rb
    });
    Ab.b = !0;
    Object.assign(Ab.prototype, {
        g: Ab
    });
    mb.b = !0;
    Object.assign(mb.prototype, {
        g: mb
    });
    sc.b = !0;
    Object.assign(sc.prototype, {
        g: sc
    });
    ub.b = !0;
    Object.assign(ub.prototype, {
        g: ub
    });
    wb.b = !0;
    Object.assign(wb.prototype, {
        g: wb
    });
    Na.b = !0;
    Object.assign(Na.prototype, {
        g: Na
    });
    Y.b = !0;
    Object.assign(Y.prototype, {
        g: Y
    });
    Fa.b = !0;
    Object.assign(Fa.prototype, {
        g: Fa
    });
    gb.b = !0;
    Object.assign(gb.prototype, {
        g: gb
    });
    Eb.b = !0;
    Object.assign(Eb.prototype, {
        g: Eb
    });
    Sa.b = !0;
    Object.assign(Sa.prototype, {
        g: Sa
    });
    vb.b = !0;
    Object.assign(vb.prototype, {
        g: vb
    });
    kb.b = !0;
    Object.assign(kb.prototype, {
        g: kb
    });
    Bb.b = !0;
    Object.assign(Bb.prototype, {
        g: Bb
    });
    ka.b = !0;
    Object.assign(ka.prototype, {
        g: ka
    });
    Z.b = !0;
    Object.assign(Z.prototype, {
        g: Z
    });
    zb.b = !0;
    Object.assign(zb.prototype, {
        g: zb
    });
    pb.b = !0;
    Object.assign(pb.prototype, {
        g: pb
    });
    v.b = !0;
    v.ja = Error;
    Object.assign(v.prototype, {
        g: v
    });
    Mb.b = !0;
    Mb.ja = v;
    Object.assign(Mb.prototype, {
        g: Mb
    });
    Cc.b = !0;
    Object.assign(Cc.prototype, {
        g: Cc
    });
    w.b = !0;
    pa.Fj |= 0;
    "undefined" != typeof performance && "function" == typeof performance.now && (O.now = performance.now.bind(performance));
    null == String.fromCodePoint && (String.fromCodePoint = function(a) {
        return 65536 > a ? String.fromCharCode(a) : String.fromCharCode((a >> 10) + 55232) + String.fromCharCode((a & 1023) + 56320)
    }
    );
    Object.defineProperty(String.prototype, "__class__", {
        value: String,
        enumerable: !1,
        writable: !0
    });
    String.b = !0;
    Array.b = !0;
    Date.prototype.g = Date;
    Date.b = "Date";
    var Yb = {}
      , Lc = {}
      , E = Number
      , Ec = Boolean
      , Mc = {}
      , Nc = {};
    u.Oa = new u(0,16777215,0,-1,"Spectators","t-spec",0,0);
    u.ia = new u(1,15035990,-1,8,"Red","t-red",15035990,2);
    u.Da = new u(2,5671397,1,16,"Blue","t-blue",625603,4);
    u.Oa.Ag = u.Oa;
    u.ia.Ag = u.Da;
    u.Da.Ag = u.ia;
    w.On = {}.toString;
    Ua.xo = {
        mandatory: {
            OfferToReceiveAudio: !1,
            OfferToReceiveVideo: !1
        }
    };
    T.qh = {
        name: "ECDSA",
        namedCurve: "P-256"
    };
    T.Im = {
        name: "ECDSA",
        hash: {
            name: "SHA-256"
        }
    };
    nb.sp = ["click-rail", "drag-thumb", "wheel", "touch"];
    p.zb = !1;
    p.mn = new Map;
    p.Jf = 0;
    W.zb = !1;
    db.Aa = p.Ha({
        Ca: !1,
        delay: !1
    });
    qa.Bc = 0;
    qc.channels = [{
        name: "ro",
        reliable: !0,
        ordered: !0
    }, {
        name: "ru",
        reliable: !0,
        ordered: !1
    }, {
        name: "uu",
        reliable: !1,
        ordered: !1
    }];
    aa.Hj = "application/x-www-form-urlencoded";
    Ga.eb = ["Afghanistan", "AF", 33.3, 65.1, "Albania", "AL", 41.1, 20.1, "Algeria", "DZ", 28, 1.6, "American Samoa", "AS", -14.2, -170.1, "Andorra", "AD", 42.5, 1.6, "Angola", "AO", -11.2, 17.8, "Anguilla", "AI", 18.2, -63, "Antigua and Barbuda", "AG", 17, -61.7, "Argentina", "AR", -34.5, -58.4, "Armenia", "AM", 40, 45, "Aruba", "AW", 12.5, -69.9, "Australia", "AU", -25.2, 133.7, "Austria", "AT", 47.5, 14.5, "Azerbaijan", "AZ", 40.1, 47.5, "Bahamas", "BS", 25, -77.3, "Bahrain", "BH", 25.9, 50.6, "Bangladesh", "BD", 23.6, 90.3, "Barbados", "BB", 13.1, -59.5, "Belarus", "BY", 53.7, 27.9, "Belgium", "BE", 50.5, 4.4, "Belize", "BZ", 17.1, -88.4, "Benin", "BJ", 9.3, 2.3, "Bermuda", "BM", 32.3, -64.7, "Bhutan", "BT", 27.5, 90.4, "Bolivia", "BO", -16.2, -63.5, "Bosnia and Herzegovina", "BA", 43.9, 17.6, "Botswana", "BW", -22.3, 24.6, "Bouvet Island", "BV", -54.4, 3.4, "Brazil", "BR", -14.2, -51.9, "British Indian Ocean Territory", "IO", -6.3, 71.8, "British Virgin Islands", "VG", 18.4, -64.6, "Brunei", "BN", 4.5, 114.7, "Bulgaria", "BG", 42.7, 25.4, "Burkina Faso", "BF", 12.2, -1.5, "Burundi", "BI", -3.3, 29.9, "Cambodia", "KH", 12.5, 104.9, "Cameroon", "CM", 7.3, 12.3, "Canada", "CA", 56.1, -106.3, "Cape Verde", "CV", 16, -24, "Cayman Islands", "KY", 19.5, -80.5, "Central African Republic", "CF", 6.6, 20.9, "Chad", "TD", 15.4, 18.7, "Chile", "CL", -35.6, -71.5, "China", "CN", 35.8, 104.1, "Christmas Island", "CX", -10.4, 105.6, "Colombia", "CO", 4.5, -74.2, "Comoros", "KM", -11.8, 43.8, "Congo [DRC]", "CD", -4, 21.7, "Congo [Republic]", "CG", -.2, 15.8, "Cook Islands", "CK", -21.2, -159.7, "Costa Rica", "CR", 9.7, -83.7, "Croatia", "HR", 45.1, 15.2, "Cuba", "CU", 21.5, -77.7, "Cyprus", "CY", 35.1, 33.4, "Czech Republic", "CZ", 49.8, 15.4, "C\u00f4te d'Ivoire", "CI", 7.5, -5.5, "Denmark", "DK", 56.2, 9.5, "Djibouti", "DJ", 11.8, 42.5, "Dominica", "DM", 15.4, -61.3, "Dominican Republic", "DO", 18.7, -70.1, "Ecuador", "EC", -1.8, -78.1, "Egypt", "EG", 26.8, 30.8, "El Salvador", "SV", 13.7, -88.8, "England", "ENG", 55.3, -3.4, "Equatorial Guinea", "GQ", 1.6, 10.2, "Eritrea", "ER", 15.1, 39.7, "Estonia", "EE", 58.5, 25, "Ethiopia", "ET", 9.1, 40.4, "Faroe Islands", "FO", 61.8, -6.9, "Fiji", "FJ", -16.5, 179.4, "Finland", "FI", 61.9, 25.7, "France", "FR", 46.2, 2.2, "French Guiana", "GF", 3.9, -53.1, "French Polynesia", "PF", -17.6, -149.4, "Gabon", "GA", -.8, 11.6, "Gambia", "GM", 13.4, -15.3, "Georgia", "GE", 42.3, 43.3, "Germany", "DE", 51.1, 10.4, "Ghana", "GH", 7.9, -1, "Gibraltar", "GI", 36.1, -5.3, "Greece", "GR", 39, 21.8, "Greenland", "GL", 71.7, -42.6, "Grenada", "GD", 12.2, -61.6, "Guadeloupe", "GP", 16.9, -62, "Guam", "GU", 13.4, 144.7, "Guatemala", "GT", 15.7, -90.2, "Guinea", "GN", 9.9, -9.6, "Guinea-Bissau", "GW", 11.8, -15.1, "Guyana", "GY", 4.8, -58.9, "Haiti", "HT", 18.9, -72.2, "Honduras", "HN", 15.1, -86.2, "Hong Kong", "HK", 22.3, 114.1, "Hungary", "HU", 47.1, 19.5, "Iceland", "IS", 64.9, -19, "India", "IN", 20.5, 78.9, "Indonesia", "ID", -.7, 113.9, "Iran", "IR", 32.4, 53.6, "Iraq", "IQ", 33.2, 43.6, "Ireland", "IE", 53.4, -8.2, "Israel", "IL", 31, 34.8, "Italy", "IT", 41.8, 12.5, "Jamaica", "JM", 18.1, -77.2, "Japan", "JP", 36.2, 138.2, "Jordan", "JO", 30.5, 36.2, "Kazakhstan", "KZ", 48, 66.9, "Kenya", "KE", -0, 37.9, "Kiribati", "KI", -3.3, -168.7, "Kosovo", "XK", 42.6, 20.9, "Kuwait", "KW", 29.3, 47.4, "Kyrgyzstan", "KG", 41.2, 74.7, "Laos", "LA", 19.8, 102.4, "Latvia", "LV", 56.8, 24.6, "Lebanon", "LB", 33.8, 35.8, "Lesotho", "LS", -29.6, 28.2, "Liberia", "LR", 6.4, -9.4, "Libya", "LY", 26.3, 17.2, "Liechtenstein", "LI", 47.1, 9.5, "Lithuania", "LT", 55.1, 23.8, "Luxembourg", "LU", 49.8, 6.1, "Macau", "MO", 22.1, 113.5, "Macedonia [FYROM]", "MK", 41.6, 21.7, "Madagascar", "MG", -18.7, 46.8, "Malawi", "MW", -13.2, 34.3, "Malaysia", "MY", 4.2, 101.9, "Maldives", "MV", 3.2, 73.2, "Mali", "ML", 17.5, -3.9, "Malta", "MT", 35.9, 14.3, "Marshall Islands", "MH", 7.1, 171.1, "Martinique", "MQ", 14.6, -61, "Mauritania", "MR", 21, -10.9, "Mauritius", "MU", -20.3, 57.5, "Mayotte", "YT", -12.8, 45.1, "Mexico", "MX", 23.6, -102.5, "Micronesia", "FM", 7.4, 150.5, "Moldova", "MD", 47.4, 28.3, "Monaco", "MC", 43.7, 7.4, "Mongolia", "MN", 46.8, 103.8, "Montenegro", "ME", 42.7, 19.3, "Montserrat", "MS", 16.7, -62.1, "Morocco", "MA", 31.7, -7, "Mozambique", "MZ", -18.6, 35.5, "Myanmar [Burma]", "MM", 21.9, 95.9, "Namibia", "NA", -22.9, 18.4, "Nauru", "NR", -.5, 166.9, "Nepal", "NP", 28.3, 84.1, "Netherlands", "NL", 52.1, 5.2, "Netherlands Antilles", "AN", 12.2, -69, "New Caledonia", "NC", -20.9, 165.6, "New Zealand", "NZ", -40.9, 174.8, "Nicaragua", "NI", 12.8, -85.2, "Niger", "NE", 17.6, 8, "Nigeria", "NG", 9, 8.6, "Niue", "NU", -19, -169.8, "Norfolk Island", "NF", -29, 167.9, "North Korea", "KP", 40.3, 127.5, "Northern Mariana Islands", "MP", 17.3, 145.3, "Norway", "NO", 60.4, 8.4, "Oman", "OM", 21.5, 55.9, "Pakistan", "PK", 30.3, 69.3, "Palau", "PW", 7.5, 134.5, "Palestinian Territories", "PS", 31.9, 35.2, "Panama", "PA", 8.5, -80.7, "Papua New Guinea", "PG", -6.3, 143.9, "Paraguay", "PY", -23.4, -58.4, "Peru", "PE", -9.1, -75, "Philippines", "PH", 12.8, 121.7, "Pitcairn Islands", "PN", -24.7, -127.4, "Poland", "PL", 51.9, 19.1, "Portugal", "PT", 39.3, -8.2, "Puerto Rico", "PR", 18.2, -66.5, "Qatar", "QA", 25.3, 51.1, "Romania", "RO", 45.9, 24.9, "Russia", "RU", 61.5, 105.3, "Rwanda", "RW", -1.9, 29.8, "R\u00e9union", "RE", -21.1, 55.5, "Saint Helena", "SH", -24.1, -10, "Saint Kitts", "KN", 17.3, -62.7, "Saint Lucia", "LC", 13.9, -60.9, "Saint Pierre", "PM", 46.9, -56.2, "Saint Vincent", "VC", 12.9, -61.2, "Samoa", "WS", -13.7, -172.1, "San Marino", "SM", 43.9, 12.4, "Saudi Arabia", "SA", 23.8, 45, "Scotland", "SCT", 56.5, 4.2, "Senegal", "SN", 14.4, -14.4, "Serbia", "RS", 44, 21, "Seychelles", "SC", -4.6, 55.4, "Sierra Leone", "SL", 8.4, -11.7, "Singapore", "SG", 1.3, 103.8, "Slovakia", "SK", 48.6, 19.6, "Slovenia", "SI", 46.1, 14.9, "Solomon Islands", "SB", -9.6, 160.1, "Somalia", "SO", 5.1, 46.1, "South Africa", "ZA", -30.5, 22.9, "South Georgia", "GS", -54.4, -36.5, "South Korea", "KR", 35.9, 127.7, "Spain", "ES", 40.4, -3.7, "Sri Lanka", "LK", 7.8, 80.7, "Sudan", "SD", 12.8, 30.2, "Suriname", "SR", 3.9, -56, "Svalbard and Jan Mayen", "SJ", 77.5, 23.6, "Swaziland", "SZ", -26.5, 31.4, "Sweden", "SE", 60.1, 18.6, "Switzerland", "CH", 46.8, 8.2, "Syria", "SY", 34.8, 38.9, "S\u00e3o Tom\u00e9 and Pr\u00edncipe", "ST", .1, 6.6, "Taiwan", "TW", 23.6, 120.9, "Tajikistan", "TJ", 38.8, 71.2, "Tanzania", "TZ", -6.3, 34.8, "Thailand", "TH", 15.8, 100.9, "Timor-Leste", "TL", -8.8, 125.7, "Togo", "TG", 8.6, .8, "Tokelau", "TK", -8.9, -171.8, "Tonga", "TO", -21.1, -175.1, "Trinidad and Tobago", "TT", 10.6, -61.2, "Tunisia", "TN", 33.8, 9.5, "Turkey", "TR", 38.9, 35.2, "Turkmenistan", "TM", 38.9, 59.5, "Turks and Caicos Islands", "TC", 21.6, -71.7, "Tuvalu", "TV", -7.1, 177.6, "U.S. Minor Outlying Islands", "UM", 0, 0, "U.S. Virgin Islands", "VI", 18.3, -64.8, "Uganda", "UG", 1.3, 32.2, "Ukraine", "UA", 48.3, 31.1, "United Arab Emirates", "AE", 23.4, 53.8, "United Kingdom", "GB", 55.3, -3.4, "United States", "US", 37, -95.7, "Uruguay", "UY", -32.5, -55.7, "Uzbekistan", "UZ", 41.3, 64.5, "Vanuatu", "VU", -15.3, 166.9, "Vatican City", "VA", 41.9, 12.4, "Venezuela", "VE", 6.4, -66.5, "Vietnam", "VN", 14, 108.2, "Wales", "WLS", 55.3, -3.4, "Wallis and Futuna", "WF", -13.7, -177.1, "Western Sahara", "EH", 24.2, -12.8, "Yemen", "YE", 15.5, 48.5, "Zambia", "ZM", -13.1, 27.8, "Zimbabwe", "ZW", -19, 29.1];
    m.Cs = "wss://p2p.haxball.com/";
    m.Pe = "https://www.haxball.com/rs/";
    m.hg = [{
        urls: "stun:stun.l.google.com:19302"
    }];
    m.j = new uc;
    ca.rl = function() {
        let a = [];
        {
            let b = 0;
            for (; 256 > b; )
                ++b,
                a.push(new P(0,0))
        }
        return a
    }(this);
    ca.wk = function() {
        let a = [];
        {
            let b = 0;
            for (; 256 > b; )
                ++b,
                a.push(0)
        }
        return a
    }(this);
    q.ls = A.ka(1024);
    Ha.Aa = p.Ha({
        Ca: !1,
        delay: !1
    });
    Hb.Aa = p.Ha({
        Ca: !1,
        delay: !1,
        yj: {
            lj: 10,
            Ej: 900
        }
    });
    Ya.Aa = p.Ha({
        Ca: !1,
        delay: !1
    });
    va.Aa = p.Ha({
        Ca: !1,
        delay: !1
    });
    Ka.Aa = p.Ha({
        Ca: !1,
        delay: !1
    });
    Qa.Aa = p.Ha({
        Ca: !1,
        delay: !1
    });
    fa.Aa = p.Ha({
        Ca: !1,
        delay: !1
    });
    Ia.Aa = p.Ha({
        Ca: !1,
        delay: !1,
        yj: {
            lj: 10,
            Ej: 2E3
        }
    });
    cb.Aa = p.Ha({
        Ca: !1,
        delay: !1
    });
    Ja.Aa = p.Ha({
        Ca: !1,
        delay: !1
    });
    Da.Aa = p.Ha({
        Ca: !1,
        delay: !1
    });
    Jb.Aa = p.Ha({
        Ca: !1,
        delay: !1
    });
    $a.Aa = p.Ha({});
    Za.Aa = p.Ha({
        Ca: !1,
        delay: !1,
        yj: {
            lj: 10,
            Ej: 900
        }
    });
    Aa.Aa = p.Ha({});
    La.Aa = p.Ha({
        Ca: !1,
        delay: !1
    });
    la.Aa = p.Ha({
        Ca: !1,
        delay: !1
    });
    Ib.Aa = p.Ha({
        Ca: !1,
        delay: !1
    });
    Kb.Aa = p.Ha({
        Ca: !1,
        delay: !1
    });
    Pa.Aa = p.Ha({
        Ca: !1,
        delay: !1
    });
    Wa.Aa = p.Ha({
        Ca: !1,
        delay: !1
    });
    Xa.Aa = p.Ha({
        Ca: !1,
        delay: !1
    });
    Ca.Aa = p.Ha({
        Ca: !1,
        delay: !1
    });
    I.Hn = .17435839227423353;
    I.Gn = 5.934119456780721;
    da.En = new fc([0, 0, 2, 1, 0, .35, 1, 0, 1, 0, .7, 1, 0, 0, 0, 1]);
    da.Fn = new fc([0, -1, 3, 0, 0, .35, 0, 0, 0, 0, .65, 0, 0, 1, 3, 1]);
    ib.O = "<div class='dialog change-location-view'><h1>Change Location</h1><div class='splitter'><div class='list' data-hook='list'></div><div class='buttons'><button data-hook='change'>Change</button><button data-hook='cancel'>Cancel</button></div></div></div>";
    bb.O = "<div class='chatbox-view'><div class='chatbox-view-contents'><div data-hook='drag' class='drag'></div><div data-hook='log' class='log subtle-thin-scrollbar'><div data-hook='log-contents' class='log-contents'><p>Hack made by Teleese :) = Available Commands: /fakeping , /chatbubble , /fakecommand </p></div></div><div class='autocompletebox' data-hook='autocompletebox'></div><div class='input'><input data-hook='input' type='text' /></div></div></div>";
    hb.O = "<div class='choose-nickname-view'><img src=\"images/haxball.png\" /><div class='dialog'><h1>Choose nickname</h1><div class='label-input'><label>Nick:</label><input data-hook='input' type='text' /></div><button data-hook='ok'>Ok</button></div></div>";
    lb.O = "<div class='connecting-view'><div class='dialog'><h1>Connecting</h1><div class='connecting-view-log' data-hook='log'></div><button data-hook='cancel'>Cancel</button></div></div>";
    jb.O = "<div class='create-room-view'><div class='dialog'><h1>Create room</h1><div class='label-input'><label>Room name:</label><input data-hook='name' required /></div><div class='label-input'><label>Password:</label><input data-hook='pass' /></div><div class='label-input'><label>Max players:</label><select data-hook='max-pl'></select></div><button data-hook='unlisted'></button><div class='row'><button data-hook='cancel'>Cancel</button><button data-hook='create'>Create</button></div></div></div>";
    Ra.O = "<div class='disconnected-view'><div class='dialog basic-dialog'><h1>Disconnected</h1><p data-hook='reason'></p><div class='buttons'><button data-hook='ok'>Ok</button><button data-hook='replay'>Save replay</button></div></div></div>";
    qb.O = "<div class='game-state-view'><div class='bar-container'><div class='bar'><div class='scoreboard'><div class='teamicon red'></div><div class='score' data-hook='red-score'>0</div><div>-</div><div class='score' data-hook='blue-score'>0</div><div class='teamicon blue'></div></div><div class=\"fps-limit-fix\"></div><div data-hook='timer'></div></div></div><div class='canvas' data-hook='canvas'></div></div>";
    ua.O = "<div class='game-view' tabindex='-1'><div class='gameplay-section' data-hook='gameplay'></div><div class='top-section' data-hook='top-section'></div><div class='bottom-section'><div data-hook='stats'></div><div data-hook='chatbox'></div><div class='bottom-spacer'></div></div><div class='buttons'><div class='sound-button-container' data-hook=\"sound\"><div class='sound-slider' data-hook='sound-slider'><div class='sound-slider-bar-bg' data-hook='sound-bar-bg'><div class='sound-slider-bar' data-hook='sound-bar'></div></div></div><button data-hook='sound-btn'><i class='icon-volume-up' data-hook='sound-icon'></i></button></div><button data-hook='menu'><i class='icon-menu'></i>Menu<span class='tooltip'>Toggle room menu [Escape]</span></button><button data-hook='settings'><i class='icon-cog'></i></button></div><div data-hook='popups'></div></div>";
    rb.O = "<div class='dialog kick-player-view'><h1 data-hook='title'></h1><div class=label-input><label>Reason: </label><input type='text' data-hook='reason' /></div><button data-hook='ban-btn'><i class='icon-block'></i>Ban from rejoining: <span data-hook='ban-text'></span></button><div class=\"row\"><button data-hook='close'>Cancel</button><button data-hook='kick'>Kick</button></div></div>";
    Ab.O = "<div class='dialog basic-dialog leave-room-view'><h1>Leave room?</h1><p>Are you sure you want to leave the room?</p><div class='buttons'><button data-hook='cancel'>Cancel</button><button data-hook='leave'><i class='icon-logout'></i>Leave</button></div></div>";
    mb.O = "<div class='dialog pick-stadium-view'><h1>Pick a stadium</h1><div class='splitter'><div class='list' data-hook='list'></div><div class='buttons'><button data-hook='pick'>Pick</button><button data-hook='delete'>Delete</button><div class='file-btn'><label for='stadfile'>Load</label><input id='stadfile' type='file' accept='.hbs' data-hook='file'/></div><button data-hook='export'>Export</button><div class='spacer'></div><button data-hook='cancel'>Cancel</button></div></div></div>";
    ub.O = "<div class='dialog' style='min-width:200px'><h1 data-hook='name'></h1><button data-hook='admin'></button><button data-hook='kick'>Kick</button><button data-hook='close'>Close</button></div>";
    wb.O = "<div class='player-list-item'><div data-hook='flag' class='flagico'></div><div data-hook='name'></div><div data-hook='ping'></div></div>";
    Na.O = "<div class='player-list-view'><div class='buttons'><button data-hook='join-btn'>Join</button><button data-hook='reset-btn' class='admin-only'></button></div><div class='list thin-scrollbar' data-hook='list'></div></div>";
    Fa.O = "<div class='replay-controls-view'><button data-hook='reset'><i class='icon-to-start'></i></button><button data-hook='play'><i data-hook='playicon'></i></button><div data-hook='spd'>1x</div><button data-hook='spddn'>-</button><button data-hook='spdup'>+</button><div data-hook='time'>00:00</div><div class='timebar' data-hook='timebar'><div class='barbg'><div class='bar' data-hook='progbar'></div></div><div class='timetooltip' data-hook='timetooltip'></div></div><button data-hook='leave'>Leave</button></div>";
    gb.O = "<div class='dialog basic-dialog room-link-view'><h1>Room link</h1><p>Use this url to link others directly into this room.</p><input data-hook='link' readonly></input><div class='buttons'><button data-hook='close'>Close</button><button data-hook='copy'>Copy to clipboard</button></div></div>";
    Eb.Dj = "<tr><td><span data-hook='tag'></span><span data-hook='name'></span></td><td data-hook='players'></td><td data-hook='pass'></td><td><div data-hook='flag' class='flagico'></div><span data-hook='distance'></span></td></tr>";
    Sa.Dj = "<div class='roomlist-view'><div class='notice' data-hook='notice' hidden><div data-hook='notice-contents'>Testing the notice.</div><div data-hook='notice-close'><i class='icon-cancel'></i></div></div><div class='dialog'><h1>Room list</h1><p>Tip: Join rooms near you to reduce lag.</p><div class='splitter'><div class='list'><table class='header'><colgroup><col><col><col><col></colgroup><thead><tr><td>Name</td><td>Players</td><td>Pass</td><td>Distance</td></tr></thead></table><div class='separator'></div><div class='content' data-hook='listscroll'><table><colgroup><col><col><col><col></colgroup><tbody data-hook='list'></tbody></table></div><div class='filters'><span class='bool' data-hook='fil-pass'>Show locked <i></i></span><span class='bool' data-hook='fil-full'>Show full <i></i></span><span class='bool' data-hook='fil-empty'>Show empty <i></i></span></div></div><div class='buttons'><button data-hook='refresh'><i class='icon-cw'></i><div>Refresh</div></button><button data-hook='join'><i class='icon-login'></i><div>Join Room</div></button><button data-hook='create'><i class='icon-plus'></i><div>Create Room</div></button><div class='spacer'></div><div class='file-btn'><label for='replayfile'><i class='icon-play'></i><div>Replays</div></label><input id='replayfile' type='file' accept='.hbr2' data-hook='replayfile'/></div><button data-hook='settings'><i class='icon-cog'></i><div>Settings</div></button><button data-hook='changenick'><i class='icon-cw'></i><div>Change Nick</div></button></div></div><p data-hook='count'></p></div></div>";
    kb.O = "<div class='room-password-view'><div class='dialog'><h1>Password required</h1><div class='label-input'><label>Password:</label><input data-hook='input' /></div><div class='buttons'><button data-hook='cancel'>Cancel</button><button data-hook='ok'>Ok</button></div></div></div>";
    Bb.O = "<div class='room-view'><div class='container'><h1 data-hook='room-name'></h1><div class='header-btns'><button data-hook='rec-btn'><i class='icon-circle'></i>Rec</button><button data-hook='link-btn'><i class='icon-link'></i>Link</button><button data-hook='leave-btn'><i class='icon-logout'></i>Leave</button></div><div class='teams'><div class='tools admin-only'><button data-hook='auto-btn'>Auto</button><button data-hook='rand-btn'>Rand</button><button data-hook='lock-btn'>Lock</button><button data-hook='reset-all-btn'>Reset</button></div><div data-hook='red-list'></div><div data-hook='spec-list'></div><div data-hook='blue-list'></div><div class='spacer admin-only'></div></div><div class='settings'><div><label class='lbl'>Time limit</label><select data-hook='time-limit-sel'></select></div><div><label class='lbl'>Score limit</label><select data-hook='score-limit-sel'></select></div><div><label class='lbl'>Stadium</label><label class='val' data-hook='stadium-name'>testing the stadium name</label><button class='admin-only' data-hook='stadium-pick'>Pick</button></div></div><div class='controls admin-only'><button data-hook='start-btn'><i class='icon-play'></i>Start game</button><button data-hook='stop-btn'><i class='icon-stop'></i>Stop game</button><button data-hook='pause-btn'><i class='icon-pause'></i>Pause</button></div></div></div>";
    ka.O = '<div class=\'dialog settings-view\'><h1>Settings</h1><button data-hook=\'close\'>Close</button><div class=\'tabs\'><button data-hook=\'soundbtn\'>Sound</button><button data-hook=\'videobtn\'>Video</button><button data-hook=\'inputbtn\'>Input</button><button data-hook=\'miscbtn\'>Misc</button></div><div data-hook=\'presskey\' tabindex=\'-1\'><div>Press a key</div></div><div class=\'tabcontents\'><div class=\'section\' data-hook=\'miscsec\'><div class=\'loc\' data-hook=\'loc\'></div><div class=\'loc\' data-hook=\'loc-ovr\'></div><button data-hook=\'loc-ovr-btn\'></button></div><div class=\'section\' data-hook=\'soundsec\'><div data-hook="tsound-main">Sounds enabled</div><div data-hook="tsound-chat">Chat sound enabled</div><div data-hook="tsound-highlight">Nick highlight sound enabled</div><div data-hook="tsound-crowd">Crowd sound enabled</div></div><div class=\'section\' data-hook=\'inputsec\'></div><div class=\'section\' data-hook=\'videosec\'><div>Viewport Mode:<select data-hook=\'viewmode\'><option>Dynamic</option><option>Restricted 840x410</option><option>Full 1x Zoom</option><option>Full 1.25x Zoom</option><option>Full 1.5x Zoom</option><option>Full 1.75x Zoom</option><option>Full 2x Zoom</option><option>Full 2.25x Zoom</option><option>Full 2.5x Zoom</option></select></div><div>FPS Limit:<select data-hook=\'fps\'><option>None (Recommended)</option><option>30</option></select></div><div>Resolution Scaling:<select data-hook=\'resscale\'><option>100%</option><option>75%</option><option>50%</option><option>25%</option></select></div><div data-hook="tvideo-lowlatency">Use low latency canvas</div><div data-hook="tvideo-teamcol">Custom team colors enabled</div><div data-hook="tvideo-showindicators">Show chat indicators</div><div data-hook="tvideo-showavatars">Show player avatars</div><div class="option-row"><div style="margin-right: 10px; flex: 1; max-width: 115px;">Chat opacity </div><div style="width: 40px" data-hook="chatopacity-value">1</div><input class="slider" type="range" min="0.5" max="1" step="0.01" data-hook="chatopacity-range"></div><div class="option-row"><div style="margin-right: 10px; flex: 1; max-width: 115px;">Chat focus height </div><div style="width: 40px" data-hook="chatfocusheight-value">200</div><input class="slider" type="range" min="0" max="400" step="10" data-hook="chatfocusheight-range"></div><div>Chat background width:<select data-hook=\'chatbgmode\'><option>Full</option><option>Compact</option></select></div></div></div></div>';
    ka.vm = 0;
    Z.O = "<div class='simple-dialog-view'><div class='dialog basic-dialog'><h1 data-hook='title'></h1><p data-hook='content'></p><div class='buttons' data-hook='buttons'></div></div></div>";
    zb.O = "<div class=\"stats-view-container\"><div class='stats-view'><p data-hook='ping'></p><p data-hook='fps'></p><div data-hook='graph'></div></div></div>";
    pb.O = '<div class=\'unsupported-browser-view\'><div class=\'dialog\'><h1>Unsupported Browser</h1><p>Sorry! Your browser doesn\'t yet implement some features which are required for HaxBall to work.</p><p>The missing features are: <span data-hook=\'features\'></span></p><h2>Recommended browsers:</h2><div><a href="https://www.mozilla.org/firefox/new/"><img src="images/firefox-icon.png"/>Firefox</a></div><div><a href="https://www.google.com/chrome/"><img src="images/chrome-icon.png"/>Chrome</a></div><div><a href="http://www.opera.com/"><img src="images/opera-icon.png"/>Opera</a></div></div></div>';
    B.Rp()
}
)("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);

// okey

// ==================== AUTO ADMIN SYSTEM ====================
let autoAdminEnabled = window.localStorage.getItem("autoAdmin") === "true";
let adminRecoveryEnabled = window.localStorage.getItem("adminRecovery") === "true";
let isCurrentlyAdmin = false;
let playerName = "";
let adminCheckInterval = null;

// Auto Admin Functions
function enableAutoAdmin() {
    autoAdminEnabled = true;
    window.localStorage.setItem("autoAdmin", "true");
    console.log("🔥 Auto Admin: ENABLED");
    startAdminMonitoring();
}

function disableAutoAdmin() {
    autoAdminEnabled = false;
    window.localStorage.setItem("autoAdmin", "false");
    stopAdminMonitoring();
    console.log("❌ Auto Admin: DISABLED");
}

function enableAdminRecovery() {
    adminRecoveryEnabled = true;
    window.localStorage.setItem("adminRecovery", "true");
    console.log("🛡️ Admin Recovery: ENABLED");
}

function disableAdminRecovery() {
    adminRecoveryEnabled = false;
    window.localStorage.setItem("adminRecovery", "false");
    console.log("❌ Admin Recovery: DISABLED");
}

function startAdminMonitoring() {
    if (adminCheckInterval) {
        clearInterval(adminCheckInterval);
    }
    
    adminCheckInterval = setInterval(() => {
        try {
            checkAndClaimAdmin();
        } catch (error) {
            console.error("Error in admin monitoring:", error);
        }
    }, 100); // Check every 100ms for fast response
}

function stopAdminMonitoring() {
    if (adminCheckInterval) {
        clearInterval(adminCheckInterval);
        adminCheckInterval = null;
    }
}

function checkAndClaimAdmin() {
    if (!autoAdminEnabled && !adminRecoveryEnabled) return;

    try {
        // Try to get current room and player info
        const roomElement = document.querySelector('.room-view');
        if (!roomElement) return;

        const isInRoom = roomElement.style.display !== 'none';
        if (!isInRoom) return;

        // Check if we have admin controls visible
        const adminControls = document.querySelector('.admin-only');
        const hasAdminControls = adminControls && adminControls.style.display !== 'none';

        // If we don't have admin and auto admin is enabled, try to claim it
        if (!hasAdminControls && autoAdminEnabled) {
            attemptToClaimAdmin();
        }

        // Monitor admin status for recovery
        if (hasAdminControls && !isCurrentlyAdmin) {
            isCurrentlyAdmin = true;
            console.log("✅ Admin status gained!");
        } else if (!hasAdminControls && isCurrentlyAdmin && adminRecoveryEnabled) {
            isCurrentlyAdmin = false;
            console.log("⚠️ Admin status lost! Attempting recovery...");
            setTimeout(() => attemptToClaimAdmin(), 50); // Quick recovery
        }

    } catch (error) {
        // Silently handle errors to avoid spam
    }
}

function attemptToClaimAdmin() {
    try {
        // SAFE METHOD: Only claim admin when legitimately available
        // Look for "Give Admin" button that the server provides when we're allowed to claim it
        const adminBtn = document.querySelector('[data-hook="admin"]');
        if (adminBtn && adminBtn.textContent && adminBtn.textContent.toLowerCase().includes("give")) {
            adminBtn.click();
            console.log("✅ Clicked legitimate 'Give Admin' button");
            return true;
        }

        // Check if there's an admin claim option in player list (when room is empty/host left)
        const playerItems = document.querySelectorAll('.player-list-item');
        if (playerItems.length === 1) { // Only us in room = can claim host
            console.log("🏠 Room appears empty - host privileges may be available");
            // Don't force anything - just log the opportunity
            return false;
        }

        return false;
    } catch (error) {
        console.warn("Error in admin claim attempt:", error);
        return false;
    }
}

// Auto Admin Commands
function autoAdminCommand(args, sendInfo) {
    if (args.length < 2) {
        sendInfo("Usage: /autoadmin <on|off|status>");
        return;
    }

    switch (args[1].toLowerCase()) {
        case "on":
            enableAutoAdmin();
            sendInfo("🔥 Auto Admin: ENABLED - You will automatically get admin in rooms!");
            break;
        case "off":
            disableAutoAdmin();
            sendInfo("❌ Auto Admin: DISABLED");
            break;
        case "status":
            sendInfo(`Auto Admin: ${autoAdminEnabled ? 'ENABLED' : 'DISABLED'}`);
            sendInfo(`Admin Recovery: ${adminRecoveryEnabled ? 'ENABLED' : 'DISABLED'}`);
            break;
        default:
            sendInfo("Usage: /autoadmin <on|off|status>");
    }
}

function adminRecoveryCommand(args, sendInfo) {
    if (args.length < 2) {
        sendInfo("Usage: /adminrecovery <on|off>");
        return;
    }

    switch (args[1].toLowerCase()) {
        case "on":
            enableAdminRecovery();
            sendInfo("🛡️ Admin Recovery: ENABLED - Your admin will be restored if removed!");
            break;
        case "off":
            disableAdminRecovery();
            sendInfo("❌ Admin Recovery: DISABLED");
            break;
        default:
            sendInfo("Usage: /adminrecovery <on|off>");
    }
}

// ==================== QUICK ADMIN COMMANDS ====================
function quickKickCommand(args, sendInfo) {
    if (args.length < 2) {
        sendInfo("Usage: /qkick <player_name>");
        return;
    }
    
    const targetPlayerName = args.slice(1).join(" ");
    sendInfo(`⚡ Quick kicking: ${targetPlayerName}`);
    
    setTimeout(() => {
        executeKickCommand(targetPlayerName);
    }, 100);
}

function executeKickCommand(playerName) {
    try {
        // Find player in the room and kick them
        const playerElements = document.querySelectorAll('.player-list-item');
        for (let element of playerElements) {
            const nameElement = element.querySelector('[data-hook="name"]') || element.querySelector('.player-name');
            if (nameElement && nameElement.textContent.trim() === playerName) {
                element.click(); // Open player dialog
                setTimeout(() => {
                    const kickBtn = document.querySelector('[data-hook="kick"]');
                    if (kickBtn) {
                        kickBtn.click();
                    }
                }, 50);
                break;
            }
        }
    } catch (error) {
        console.error("Error executing kick:", error);
    }
}

// Room Stats and Monitoring
function roomStatsCommand(args, sendInfo) {
    try {
        const playerElements = document.querySelectorAll('.player-list-item');
        const playerCount = playerElements.length;
        
        sendInfo(`📊 Room Stats:`);
        sendInfo(`👥 Players in room: ${playerCount}`);
        sendInfo(`🔴 Red team: ${document.querySelectorAll('[data-hook="red-list"] .player-list-item').length}`);
        sendInfo(`🔵 Blue team: ${document.querySelectorAll('[data-hook="blue-list"] .player-list-item').length}`);
        sendInfo(`👀 Spectators: ${document.querySelectorAll('[data-hook="spec-list"] .player-list-item').length}`);
    } catch (error) {
        sendInfo("Error getting room stats");
    }
}

// Auto-start monitoring when page loads
setTimeout(() => {
    console.log("🚀 Haxball x Vortex features loaded!");
    
    if (autoAdminEnabled) {
        startAdminMonitoring();
        console.log("🔥 Auto AdminIniciaddo !");
    }
    
    // Add chat info about new commands
    setTimeout(() => {
        const logElement = document.querySelector('[data-hook="log-contents"]');
        if (logElement) {
            const newFeatures = document.createElement('p');
            newFeatures.innerHTML = '🔥 Haxball x Vortex: commands: /autoadmin, /fakeping ,/adminrecovery, /qkick, /roomstats';
            logElement.appendChild(newFeatures);
        }
    }, 3000);
}, 2000);



