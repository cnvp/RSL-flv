! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).EzuikitFlv = t()
}(this, (function() {
  "use strict";

  function e(e, t, i) {
    return (t = function(e) {
      var t = function(e, t) {
        if ("object" != typeof e || null === e) return e;
        var i = e[Symbol.toPrimitive];
        if (void 0 !== i) {
          var s = i.call(e, t || "default");
          if ("object" != typeof s) return s;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
      }(e, "string");
      return "symbol" == typeof t ? t : String(t)
    }(t)) in e ? Object.defineProperty(e, t, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = i, e
  }
  var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

  function i(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
  }
  var s = {
    exports: {}
  };
  ! function(e, i) {
    var s;
    s = "undefined" != typeof self ? self : t, e.exports = function(e) {
      var t = e || {},
        i = void 0 !== e.navigator ? e.navigator : {},
        s = function(e, t) {
          var s = i.mimeTypes;
          for (var n in s)
            if (s[n][e] == t) return !0;
          return !1
        },
        n = null;
      return void 0 !== i.userAgentData && i.userAgentData.getHighEntropyValues(["platformVersion"]).then((function(e) {
          if ("Windows" === i.userAgentData.platform) {
            const t = parseInt(e.platformVersion.split(".")[0]);
            n = t >= 13 ? 11 : 10
          }
        })),
        function(e) {
          var r = e || i.userAgent || "",
            a = {},
            o = {
              Trident: r.indexOf("Trident") > -1 || r.indexOf("NET CLR") > -1,
              Presto: r.indexOf("Presto") > -1,
              WebKit: r.indexOf("AppleWebKit") > -1,
              Gecko: r.indexOf("Gecko/") > -1,
              KHTML: r.indexOf("KHTML/") > -1,
              Safari: r.indexOf("Safari") > -1,
              Chrome: r.indexOf("Chrome") > -1 || r.indexOf("CriOS") > -1,
              IE: r.indexOf("MSIE") > -1 || r.indexOf("Trident") > -1,
              Edge: r.indexOf("Edge") > -1 || r.indexOf("Edg/") > -1 || r.indexOf("EdgA") > -1 || r.indexOf("EdgiOS") > -1,
              Firefox: r.indexOf("Firefox") > -1 || r.indexOf("FxiOS") > -1,
              "Firefox Focus": r.indexOf("Focus") > -1,
              Chromium: r.indexOf("Chromium") > -1,
              Opera: r.indexOf("Opera") > -1 || r.indexOf("OPR") > -1,
              Vivaldi: r.indexOf("Vivaldi") > -1,
              Yandex: r.indexOf("YaBrowser") > -1,
              Brave: !!i.brave,
              Arora: r.indexOf("Arora") > -1,
              Lunascape: r.indexOf("Lunascape") > -1,
              QupZilla: r.indexOf("QupZilla") > -1,
              "Coc Coc": r.indexOf("coc_coc_browser") > -1,
              Kindle: r.indexOf("Kindle") > -1 || r.indexOf("Silk/") > -1,
              Iceweasel: r.indexOf("Iceweasel") > -1,
              Konqueror: r.indexOf("Konqueror") > -1,
              Iceape: r.indexOf("Iceape") > -1,
              SeaMonkey: r.indexOf("SeaMonkey") > -1,
              Epiphany: r.indexOf("Epiphany") > -1,
              360: r.indexOf("QihooBrowser") > -1 || r.indexOf("QHBrowser") > -1,
              "360EE": r.indexOf("360EE") > -1,
              "360SE": r.indexOf("360SE") > -1,
              UC: r.indexOf("UCBrowser") > -1 || r.indexOf(" UBrowser") > -1 || r.indexOf("UCWEB") > -1,
              QQBrowser: r.indexOf("QQBrowser") > -1,
              QQ: r.indexOf("QQ/") > -1,
              Baidu: r.indexOf("Baidu") > -1 || r.indexOf("BIDUBrowser") > -1 || r.indexOf("baidubrowser") > -1 || r.indexOf("baiduboxapp") > -1 || r.indexOf("BaiduHD") > -1,
              Maxthon: r.indexOf("Maxthon") > -1,
              Sogou: r.indexOf("MetaSr") > -1 || r.indexOf("Sogou") > -1,
              Liebao: r.indexOf("LBBROWSER") > -1 || r.indexOf("LieBaoFast") > -1,
              "2345Explorer": r.indexOf("2345Explorer") > -1 || r.indexOf("Mb2345Browser") > -1 || r.indexOf("2345chrome") > -1,
              "115Browser": r.indexOf("115Browser") > -1,
              TheWorld: r.indexOf("TheWorld") > -1,
              Quark: r.indexOf("Quark") > -1,
              Qiyu: r.indexOf("Qiyu") > -1,
              XiaoMi: r.indexOf("MiuiBrowser") > -1,
              Huawei: r.indexOf("HuaweiBrowser") > -1 || r.indexOf("HUAWEI/") > -1 || r.indexOf("HONOR") > -1 || r.indexOf("HBPC/") > -1,
              Vivo: r.indexOf("VivoBrowser") > -1,
              OPPO: r.indexOf("HeyTapBrowser") > -1,
              Wechat: r.indexOf("MicroMessenger") > -1,
              WechatWork: r.indexOf("wxwork/") > -1,
              Taobao: r.indexOf("AliApp(TB") > -1,
              Alipay: r.indexOf("AliApp(AP") > -1,
              Weibo: r.indexOf("Weibo") > -1,
              Douban: r.indexOf("com.douban.frodo") > -1,
              Suning: r.indexOf("SNEBUY-APP") > -1,
              iQiYi: r.indexOf("IqiyiApp") > -1,
              DingTalk: r.indexOf("DingTalk") > -1,
              Douyin: r.indexOf("aweme") > -1,
              Googlebot: r.indexOf("Googlebot") > -1,
              Baiduspider: r.indexOf("Baiduspider") > -1,
              Sogouspider: r.match(/Sogou (\S+) Spider/i),
              Bingbot: r.indexOf("bingbot") > -1,
              "360Spider": r.indexOf("360Spider") > -1 || r.indexOf("HaosouSpider") > -1,
              Bytespider: r.indexOf("Bytespider") > -1,
              YisouSpider: r.indexOf("YisouSpider") > -1,
              YodaoBot: r.indexOf("YodaoBot") > -1,
              YandexBot: r.indexOf("YandexBot") > -1,
              Windows: r.indexOf("Windows") > -1,
              Linux: r.indexOf("Linux") > -1 || r.indexOf("X11") > -1,
              "Mac OS": r.indexOf("Macintosh") > -1,
              Android: r.indexOf("Android") > -1 || r.indexOf("Adr") > -1,
              HarmonyOS: r.indexOf("HarmonyOS") > -1,
              Ubuntu: r.indexOf("Ubuntu") > -1,
              FreeBSD: r.indexOf("FreeBSD") > -1,
              Debian: r.indexOf("Debian") > -1,
              "Windows Phone": r.indexOf("IEMobile") > -1 || r.indexOf("Windows Phone") > -1,
              BlackBerry: r.indexOf("BlackBerry") > -1 || r.indexOf("RIM") > -1,
              MeeGo: r.indexOf("MeeGo") > -1,
              Symbian: r.indexOf("Symbian") > -1,
              iOS: r.indexOf("like Mac OS X") > -1,
              "Chrome OS": r.indexOf("CrOS") > -1,
              WebOS: r.indexOf("hpwOS") > -1,
              Mobile: r.indexOf("Mobi") > -1 || r.indexOf("iPh") > -1 || r.indexOf("480") > -1,
              Tablet: r.indexOf("Tablet") > -1 || r.indexOf("Pad") > -1 || r.indexOf("Nexus 7") > -1 || "MacIntel" === i.platform && i.maxTouchPoints > 1,
              isWebview: r.indexOf("; wv)") > -1
            },
            d = !1;
          if (t.chrome) {
            var l = r.replace(/^.*Chrome\/([\d]+).*$/, "$1");
            t.chrome.adblock2345 || t.chrome.common2345 ? o["2345Explorer"] = !0 : s("type", "application/360softmgrplugin") || s("type", "application/mozilla-npqihooquicklogin") || l > 36 && t.showModalDialog ? d = !0 : l > 45 && !(d = s("type", "application/vnd.chromium.remoting-viewer")) && l >= 69 && (d = s("type", "application/hwepass2001.installepass2001") || s("type", "application/asx"))
          }
          o.Mobile ? o.Mobile = !(r.indexOf("iPad") > -1) : d && (s("type", "application/gameplugin") || i && void 0 !== i.connection && void 0 === i.connection.saveData ? o["360SE"] = !0 : o["360EE"] = !0), o.Baidu && o.Opera ? o.Baidu = !1 : o.iOS && (o.Safari = !0);
          var h = {
            engine: ["WebKit", "Trident", "Gecko", "Presto", "KHTML"],
            browser: ["Safari", "Chrome", "Edge", "IE", "Firefox", "Firefox Focus", "Chromium", "Opera", "Vivaldi", "Yandex", "Brave", "Arora", "Lunascape", "QupZilla", "Coc Coc", "Kindle", "Iceweasel", "Konqueror", "Iceape", "SeaMonkey", "Epiphany", "XiaoMi", "Vivo", "OPPO", "360", "360SE", "360EE", "UC", "QQBrowser", "QQ", "Huawei", "Baidu", "Maxthon", "Sogou", "Liebao", "2345Explorer", "115Browser", "TheWorld", "Quark", "Qiyu", "Wechat", "WechatWork", "Taobao", "Alipay", "Weibo", "Douban", "Suning", "iQiYi", "DingTalk", "Douyin", "Googlebot", "Baiduspider", "Sogouspider", "Bingbot", "360Spider", "Bytespider", "YisouSpider", "YodaoBot", "YandexBot"],
            system: ["Windows", "Linux", "Mac OS", "Android", "HarmonyOS", "Ubuntu", "FreeBSD", "Debian", "iOS", "Windows Phone", "BlackBerry", "MeeGo", "Symbian", "Chrome OS", "WebOS"],
            device: ["Mobile", "Tablet"]
          };
          for (var c in a.device = "PC", a.language = function() {
              var e = i.browserLanguage || i.language;
              if ("string" != typeof e) return "Unknown language";
              var t = e.split("-");
              return t[1] && (t[1] = t[1].toUpperCase()), t.join("_")
            }(), h)
            for (var u = 0; u < h[c].length; u++) {
              var A = h[c][u];
              o[A] && (a[c] = A)
            }
          var _ = {
            Windows: function() {
              var e = r.replace(/^Mozilla\/\d.0 \(Windows NT ([\d.]+)[;)].*$/, "$1");
              return {
                10: "10",
                6.4: "10",
                6.3: "8.1",
                6.2: "8",
                6.1: "7",
                "6.0": "Vista",
                5.2: "XP",
                5.1: "XP",
                "5.0": "2000"
              } [e] || e
            },
            Android: function() {
              return r.replace(/^.*Android ([\d.]+);.*$/, "$1")
            },
            HarmonyOS: function() {
              return {
                10: "2",
                12: "3"
              } [r.replace(/^Mozilla.*Android ([\d.]+)[;)].*$/, "$1")] || ""
            },
            iOS: function() {
              return r.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, ".")
            },
            Debian: function() {
              return r.replace(/^.*Debian\/([\d.]+).*$/, "$1")
            },
            "Windows Phone": function() {
              return r.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2")
            },
            "Mac OS": function() {
              return r.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, ".")
            },
            WebOS: function() {
              return r.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1")
            }
          };
          a.systemVersion = "", _[a.system] && (a.systemVersion = _[a.system](), a.systemVersion == r && (a.systemVersion = "")), "Windows" == a.system && n && (a.systemVersion = n), a.platform = i.platform, a.isWebview = o.isWebview, a.isBot = ["Googlebot", "Baiduspider", "Sogouspider", "Bingbot", "360Spider", "Bytespider", "YandexBot"].some((function(e) {
            return o[e]
          }));
          var m = {
            Safari: function() {
              return r.replace(/^.*Version\/([\d.]+).*$/, "$1")
            },
            Chrome: function() {
              return r.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1")
            },
            IE: function() {
              return r.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1")
            },
            Edge: function() {
              return r.replace(/^.*Edge\/([\d.]+).*$/, "$1").replace(/^.*Edg\/([\d.]+).*$/, "$1").replace(/^.*EdgA\/([\d.]+).*$/, "$1").replace(/^.*EdgiOS\/([\d.]+).*$/, "$1")
            },
            Firefox: function() {
              return r.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1")
            },
            "Firefox Focus": function() {
              return r.replace(/^.*Focus\/([\d.]+).*$/, "$1")
            },
            Chromium: function() {
              return r.replace(/^.*Chromium\/([\d.]+).*$/, "$1")
            },
            Opera: function() {
              return r.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1")
            },
            Vivaldi: function() {
              return r.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1")
            },
            Yandex: function() {
              return r.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1")
            },
            Brave: function() {
              return r.replace(/^.*Chrome\/([\d.]+).*$/, "$1")
            },
            Arora: function() {
              return r.replace(/^.*Arora\/([\d.]+).*$/, "$1")
            },
            Lunascape: function() {
              return r.replace(/^.*Lunascape[\/\s]([\d.]+).*$/, "$1")
            },
            QupZilla: function() {
              return r.replace(/^.*QupZilla[\/\s]([\d.]+).*$/, "$1")
            },
            "Coc Coc": function() {
              return r.replace(/^.*coc_coc_browser\/([\d.]+).*$/, "$1")
            },
            Kindle: function() {
              return r.replace(/^.*Version\/([\d.]+).*$/, "$1")
            },
            Iceweasel: function() {
              return r.replace(/^.*Iceweasel\/([\d.]+).*$/, "$1")
            },
            Konqueror: function() {
              return r.replace(/^.*Konqueror\/([\d.]+).*$/, "$1")
            },
            Iceape: function() {
              return r.replace(/^.*Iceape\/([\d.]+).*$/, "$1")
            },
            SeaMonkey: function() {
              return r.replace(/^.*SeaMonkey\/([\d.]+).*$/, "$1")
            },
            Epiphany: function() {
              return r.replace(/^.*Epiphany\/([\d.]+).*$/, "$1")
            },
            360: function() {
              return r.replace(/^.*QihooBrowser(HD)?\/([\d.]+).*$/, "$2")
            },
            "360SE": function() {
              return {
                108: "14.0",
                86: "13.0",
                78: "12.0",
                69: "11.0",
                63: "10.0",
                55: "9.1",
                45: "8.1",
                42: "8.0",
                31: "7.0",
                21: "6.3"
              } [r.replace(/^.*Chrome\/([\d]+).*$/, "$1")] || ""
            },
            "360EE": function() {
              return {
                95: "21",
                86: "13.0",
                78: "12.0",
                69: "11.0",
                63: "9.5",
                55: "9.0",
                50: "8.7",
                30: "7.5"
              } [r.replace(/^.*Chrome\/([\d]+).*$/, "$1")] || ""
            },
            Maxthon: function() {
              return r.replace(/^.*Maxthon\/([\d.]+).*$/, "$1")
            },
            QQBrowser: function() {
              return r.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1")
            },
            QQ: function() {
              return r.replace(/^.*QQ\/([\d.]+).*$/, "$1")
            },
            Baidu: function() {
              return r.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1").replace(/^.*baiduboxapp\/([\d.]+).*$/, "$1")
            },
            UC: function() {
              return r.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1")
            },
            Sogou: function() {
              return r.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1")
            },
            Liebao: function() {
              var e = "";
              r.indexOf("LieBaoFast") > -1 && (e = r.replace(/^.*LieBaoFast\/([\d.]+).*$/, "$1"));
              var t = {
                  57: "6.5",
                  49: "6.0",
                  46: "5.9",
                  42: "5.3",
                  39: "5.2",
                  34: "5.0",
                  29: "4.5",
                  21: "4.0"
                },
                i = r.replace(/^.*Chrome\/([\d]+).*$/, "$1");
              return e || t[i] || ""
            },
            "2345Explorer": function() {
              return {
                69: "10.0",
                55: "9.9"
              } [navigator.userAgent.replace(/^.*Chrome\/([\d]+).*$/, "$1")] || r.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1").replace(/^.*Mb2345Browser\/([\d.]+).*$/, "$1")
            },
            "115Browser": function() {
              return r.replace(/^.*115Browser\/([\d.]+).*$/, "$1")
            },
            TheWorld: function() {
              return r.replace(/^.*TheWorld ([\d.]+).*$/, "$1")
            },
            XiaoMi: function() {
              return r.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1")
            },
            Vivo: function() {
              return r.replace(/^.*VivoBrowser\/([\d.]+).*$/, "$1")
            },
            OPPO: function() {
              return r.replace(/^.*HeyTapBrowser\/([\d.]+).*$/, "$1")
            },
            Quark: function() {
              return r.replace(/^.*Quark\/([\d.]+).*$/, "$1")
            },
            Qiyu: function() {
              return r.replace(/^.*Qiyu\/([\d.]+).*$/, "$1")
            },
            Wechat: function() {
              return r.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1")
            },
            WechatWork: function() {
              return r.replace(/^.*wxwork\/([\d.]+).*$/, "$1")
            },
            Taobao: function() {
              return r.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1")
            },
            Alipay: function() {
              return r.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1")
            },
            Weibo: function() {
              return r.replace(/^.*weibo__([\d.]+).*$/, "$1")
            },
            Douban: function() {
              return r.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1")
            },
            Suning: function() {
              return r.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1")
            },
            iQiYi: function() {
              return r.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1")
            },
            DingTalk: function() {
              return r.replace(/^.*DingTalk\/([\d.]+).*$/, "$1")
            },
            Douyin: function() {
              return r.replace(/^.*app_version\/([\d.]+).*$/, "$1")
            },
            Huawei: function() {
              return r.replace(/^.*Version\/([\d.]+).*$/, "$1").replace(/^.*HuaweiBrowser\/([\d.]+).*$/, "$1").replace(/^.*HBPC\/([\d.]+).*$/, "$1")
            },
            Googlebot: function() {
              return r.replace(/^.*Googlebot\/([\d.]+).*$/, "$1")
            },
            Baiduspider: function() {
              return r.replace(/^.*Baiduspider(-render)?\/([\d.]+).*$/, "$1")
            },
            Sogouspider: function() {
              return r.replace(/^.*Sogou (\S+) Spider\/([\d.]+).*$/i, "$2")
            },
            Bingbot: function() {
              return r.replace(/^.*bingbot\/([\d.]+).*$/, "$1")
            },
            "360Spider": function() {
              return ""
            },
            Bytespider: function() {
              return ""
            },
            YisouSpider: function() {
              return r.replace(/^.*YisouSpider\/([\d.]+).*$/, "$1")
            },
            YodaoBot: function() {
              return r.replace(/^.*YodaoBot\/([\d.]+).*$/, "$1")
            },
            YandexBot: function() {
              return r.replace(/^.*YandexBot\/([\d.]+).*$/, "$1")
            }
          };
          return a.version = "", m[a.browser] && (a.version = m[a.browser](), a.version == r && (a.version = "")), "Chrome" == a.browser && r.match(/\S+Browser/) && (a.browser = r.match(/\S+Browser/)[0], a.version = r.replace(/^.*Browser\/([\d.]+).*$/, "$1")), "Edge" == a.browser ? a.engine = parseInt(a.version) > 75 ? "Blink" : "EdgeHTML" : (o.Chrome && "WebKit" == a.engine && parseInt(m.Chrome()) > 27 || "Opera" == a.browser && parseInt(a.version) > 12 || "Yandex" == a.browser) && (a.engine = "Blink"), a
        }
    }(s)
  }(s);
  var n = i(s.exports);
  const r = 0,
    a = 1,
    o = "flv",
    d = "m7s",
    l = {
      videoBuffer: 200,
      videoBufferDelay: 1e3,
      scaleMode: 1,
      debug: !1,
      loadingTimeout: 10,
      heartTimeout: 5,
      timeout: 10,
      loadingTimeoutReplay: !0,
      heartTimeoutReplay: !0,
      loadingTimeoutReplayTimes: 3,
      heartTimeoutReplayTimes: 3,
      keepScreenOn: !1,
      isNotMute: !1,
      hasAudio: !0,
      hasVideo: !0,
      decoder: "decoder.js",
      url: "",
      rotate: 0,
      forceNoOffscreen: !0,
      protocol: a,
      demuxType: o,
      useMSE: !1,
      autoWasm: !0,
      wasmDecodeErrorReplay: !0,
      openWebglAlignment: !1,
      wasmDecodeAudioSyncVideo: !1,
      useWebFullScreen: !0
    },
    h = "init",
    c = "initVideo",
    u = "render",
    A = "playAudio",
    _ = "initAudio",
    m = "audioCode",
    p = "videoCode",
    f = "wasmError",
    g = "Invalid NAL unit size",
    v = 1,
    y = 2,
    E = 8,
    S = 9,
    b = "init",
    w = "decode",
    T = "audioDecode",
    R = "close",
    C = "updateConfig",
    B = {
      fullscreen: "fullscreen$2",
      webFullscreen: "webFullscreen",
      decoderWorkerInit: "decoderWorkerInit",
      play: "play",
      playing: "playing",
      pause: "pause",
      mute: "mute",
      load: "load",
      loading: "loading",
      videoInfo: "videoInfo",
      timeUpdate: "timeUpdate",
      audioInfo: "audioInfo",
      log: "log",
      error: "error",
      kBps: "kBps",
      timeout: "timeout",
      delayTimeout: "delayTimeout",
      loadingTimeout: "loadingTimeout",
      stats: "stats",
      performance: "performance",
      buffer: "buffer",
      videoFrame: "videoFrame",
      start: "start",
      metadata: "metadata",
      resize: "resize",
      streamEnd: "streamEnd",
      streamSuccess: "streamSuccess",
      streamMessage: "streamMessage",
      streamError: "streamError",
      volumechange: "volumechange",
      destroy: "destroy",
      mseSourceOpen: "mseSourceOpen",
      mseSourceClose: "mseSourceClose",
      mseSourceBufferError: "mseSourceBufferError",
      mseSourceBufferBusy: "mseSourceBufferBusy",
      mseSourceBufferFull: "mseSourceBufferFull",
      videoWaiting: "videoWaiting",
      videoTimeUpdate: "videoTimeUpdate",
      videoSyncAudio: "videoSyncAudio",
      playToRenderTimes: "playToRenderTimes"
    },
    k = {
      load: B.load,
      timeUpdate: B.timeUpdate,
      videoInfo: B.videoInfo,
      audioInfo: B.audioInfo,
      error: B.error,
      kBps: B.kBps,
      log: B.log,
      start: B.start,
      timeout: B.timeout,
      loadingTimeout: B.loadingTimeout,
      delayTimeout: B.delayTimeout,
      fullscreen: "fullscreen",
      webFullscreen: B.webFullscreen,
      play: B.play,
      pause: B.pause,
      mute: B.mute,
      stats: B.stats,
      volumechange: B.volumechange,
      performance: B.performance,
      playToRenderTimes: B.playToRenderTimes
    },
    I = {
      playError: "playIsNotPauseOrUrlIsNull",
      fetchError: "NetworkError",
      websocketError: "websocketError",
      webcodecsH265NotSupport: "webcodecsH265NotSupport",
      webcodecsDecodeError: "webcodecsDecodeError",
      webcodecsWidthOrHeightChange: "webcodecsWidthOrHeightChange",
      mediaSourceH265NotSupport: "mediaSourceH265NotSupport",
      mediaSourceFull: B.mseSourceBufferFull,
      mseSourceBufferError: B.mseSourceBufferError,
      mediaSourceAppendBufferError: "mediaSourceAppendBufferError",
      mediaSourceBufferListLarge: "mediaSourceBufferListLarge",
      mediaSourceAppendBufferEndTimeout: "mediaSourceAppendBufferEndTimeout",
      wasmDecodeError: "wasmDecodeError",
      webglAlignmentError: "webglAlignmentError"
    },
    O = "notConnect",
    D = "open",
    L = "close",
    x = "error",
    M = {
      download: "download",
      base64: "base64",
      blob: "blob"
    },
    P = {
      7: "H264(AVC)",
      12: "H265(HEVC)"
    },
    U = {
      10: "AAC",
      7: "ALAW",
      8: "MULAW"
    },
    F = {
      full: 0,
      auto: 1,
      fullAuto: 2
    },
    V = "webcodecs",
    N = "webgl",
    Z = "offscreen",
    G = 1e3,
    $ = "The user aborted a request",
    W = "AbortError",
    Q = "AbortError";
  var H = {
    exports: {}
  };
  /*!
   * screenfull
   * v5.1.0 - 2020-12-24
   * (c) Sindre Sorhus; MIT License
   */
  ! function(e) {
    ! function() {
      var t = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
        i = e.exports,
        s = function() {
          for (var e, i = [
              ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
              ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
              ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
              ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
              ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ], s = 0, n = i.length, r = {}; s < n; s++)
            if ((e = i[s]) && e[1] in t) {
              for (s = 0; s < e.length; s++) r[i[0][s]] = e[s];
              return r
            } return !1
        }(),
        n = {
          change: s.fullscreenchange,
          error: s.fullscreenerror
        },
        r = {
          request: function(e, i) {
            return new Promise(function(n, r) {
              var a = function() {
                this.off("change", a), n()
              }.bind(this);
              this.on("change", a);
              var o = (e = e || t.documentElement)[s.requestFullscreen](i);
              o instanceof Promise && o.then(a).catch(r)
            }.bind(this))
          },
          exit: function() {
            return new Promise(function(e, i) {
              if (this.isFullscreen) {
                var n = function() {
                  this.off("change", n), e()
                }.bind(this);
                this.on("change", n);
                var r = t[s.exitFullscreen]();
                r instanceof Promise && r.then(n).catch(i)
              } else e()
            }.bind(this))
          },
          toggle: function(e, t) {
            return this.isFullscreen ? this.exit() : this.request(e, t)
          },
          onchange: function(e) {
            this.on("change", e)
          },
          onerror: function(e) {
            this.on("error", e)
          },
          on: function(e, i) {
            var s = n[e];
            s && t.addEventListener(s, i, !1)
          },
          off: function(e, i) {
            var s = n[e];
            s && t.removeEventListener(s, i, !1)
          },
          raw: s
        };
      s ? (Object.defineProperties(r, {
        isFullscreen: {
          get: function() {
            return Boolean(t[s.fullscreenElement])
          }
        },
        element: {
          enumerable: !0,
          get: function() {
            return t[s.fullscreenElement]
          }
        },
        isEnabled: {
          enumerable: !0,
          get: function() {
            return Boolean(t[s.fullscreenEnabled])
          }
        }
      }), i ? e.exports = r : window.screenfull = r) : i ? e.exports = {
        isEnabled: !1
      } : window.screenfull = {
        isEnabled: !1
      }
    }()
  }(H);
  var z = i(H.exports);

  function j() {}

  function q(e = "") {
    const t = e.split(","),
      i = atob(t[1]),
      s = t[0].replace("data:", "").replace(";base64", "");
    let n = i.length;
    const r = new Uint8Array(n);
    for (; n--;) r[n] = i.charCodeAt(n);
    return new File([r], "file", {
      type: s
    })
  }

  function Y() {
    return (new Date).getTime()
  }

  function X(e, t, i) {
    if (e) return "object" == typeof t && Object.keys(t).forEach((i => {
      X(e, i, t[i])
    })), e.style[t] = i, e
  }

  function K() {
    return performance && "function" == typeof performance.now ? performance.now() : Date.now()
  }

  function J(e) {
    let t = 0,
      i = K();
    return s => {
      t += s;
      const n = K(),
        r = n - i;
      r >= 1e3 && (e(t / r * 1e3), i = n, t = 0)
    }
  }

  function ee() {
    return /phone|pad|pod|iphone|ipod|ios|ipad|android|mobile|blackberry|iemobile|mqqbrowser|juc|wosbrowser|webos|symbian|windows phone|opera mini|huaweibrowser/i.test(window.navigator.userAgent.toLowerCase())
  }

  function te() {
    return z.isFullscreen
  }

  function ie(e) {
    return null == e
  }

  function se(e) {
    return !ie(e)
  }

  function ne(e) {
    const t = e || window.event;
    return t.target || t.srcElement
  }(() => {
    try {
      if ("object" == typeof WebAssembly && "function" == typeof WebAssembly.instantiate) {
        const e = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
        if (e instanceof WebAssembly.Module) return new WebAssembly.Instance(e) instanceof WebAssembly.Instance
      }
    } catch (e) {}
  })();
  class re {
    constructor() {}
    on(e, t, i) {
      const s = this.e || (this.e = {});
      return (s[e] || (s[e] = [])).push({
        fn: t,
        ctx: i
      }), this
    }
    once(e, t, i) {
      const s = this;

      function n(...r) {
        s.off(e, n), t.apply(i, r)
      }
      return n._ = t, this.on(e, n, i)
    }
    emit(e, ...t) {
      const i = ((this.e || (this.e = {}))[e] || []).slice();
      for (let e = 0; e < i.length; e += 1) i[e].fn.apply(i[e].ctx, t);
      return this
    }
    off(e, t) {
      const i = this.e || (this.e = {});
      if (!e) return Object.keys(i).forEach((e => {
        delete i[e]
      })), void delete this.e;
      const s = i[e],
        n = [];
      if (s && t)
        for (let e = 0, i = s.length; e < i; e += 1) s[e].fn !== t && s[e].fn._ !== t && n.push(s[e]);
      return n.length ? i[e] = n : delete i[e], this
    }
  }
  let ae = class extends re {
    constructor() {
      super(), this.init = !1
    }
    resetInit() {
      this.init = !1, this.videoInfo = {
        width: "",
        height: "",
        encType: "",
        encTypeCode: ""
      }
    }
    destroy() {
      this.resetInit(), this.player.$container.removeChild(this.$videoElement), this.off()
    }
    updateVideoInfo(e) {
      e.encTypeCode && (this.videoInfo.encType = P[e.encTypeCode]), e.width && (this.videoInfo.width = e.width), e.height && (this.videoInfo.height = e.height), this.videoInfo.encType && this.videoInfo.height && this.videoInfo.width && !this.init && (this.player.emit(B.videoInfo, this.videoInfo), this.init = !0)
    }
    play() {}
    pause() {}
    clearView() {}
  };
  const oe = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0;

  function de(e, t, i) {
    const s = new XMLHttpRequest;
    s.open("GET", e), s.responseType = "blob", s.onload = function() {
      ue(s.response, t, i)
    }, s.onerror = function() {}, s.send()
  }

  function le(e) {
    const t = new XMLHttpRequest;
    t.open("HEAD", e, !1);
    try {
      t.send()
    } catch (e) {}
    return t.status >= 200 && t.status <= 299
  }

  function he(e) {
    try {
      e.dispatchEvent(new MouseEvent("click"))
    } catch (t) {
      const i = document.createEvent("MouseEvents");
      i.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(i)
    }
  }
  const ce = oe.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent);
  var ue = "object" != typeof window || window !== oe ? function() {} : "download" in HTMLAnchorElement.prototype && !ce ? function(e, t, i) {
    const s = oe.URL || oe.webkitURL,
      n = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    t = t || e.name || "download", n.download = t, n.rel = "noopener", "string" == typeof e ? (n.href = e, n.origin !== location.origin ? le(n.href) ? de(e, t, i) : he(n, n.target = "_blank") : he(n)) : (n.href = s.createObjectURL(e), setTimeout((function() {
      s.revokeObjectURL(n.href)
    }), 4e4), setTimeout((function() {
      he(n)
    }), 0))
  } : "msSaveOrOpenBlob" in navigator ? function(e, t, i) {
    if (t = t || e.name || "download", "string" == typeof e)
      if (le(e)) de(e, t, i);
      else {
        const t = document.createElement("a");
        t.href = e, t.target = "_blank", setTimeout((function() {
          he(t)
        }))
      }
    else navigator.msSaveOrOpenBlob(function(e, t) {
      return void 0 === t ? t = {
        autoBom: !1
      } : "object" != typeof t && (t = {
        autoBom: !t
      }), t.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], {
        type: e.type
      }) : e
    }(e, i), t)
  } : function(e, t, i, s) {
    if ((s = s || open("", "_blank")) && (s.document.title = s.document.body.innerText = "downloading..."), "string" == typeof e) return de(e, t, i);
    const n = "application/octet-stream" === e.type,
      r = /constructor/i.test(oe.HTMLElement) || oe.safari,
      a = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((a || n && r || ce) && "undefined" != typeof FileReader) {
      const t = new FileReader;
      t.onloadend = function() {
        let e = t.result;
        e = a ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), s ? s.location.href = e : location = e, s = null
      }, t.readAsDataURL(e)
    } else {
      const t = oe.URL || oe.webkitURL,
        i = t.createObjectURL(e);
      s ? s.location = i : location.href = i, s = null, setTimeout((function() {
        t.revokeObjectURL(i)
      }), 4e4)
    }
  };
  class Ae extends ae {
    constructor(e) {
      super(), this.player = e;
      const t = document.createElement("canvas");
      t.style.position = "absolute", t.style.top = 0, t.style.left = 0, this.$videoElement = t, e.$container.appendChild(this.$videoElement), this.context2D = null, this.contextGl = null, this.contextGlRender = null, this.contextGlDestroy = null, this.bitmaprenderer = null, this.renderType = null, this.videoInfo = {
        width: "",
        height: "",
        encType: ""
      }, this._initCanvasRender(), this._contextmenuEvent = e => {
        e.target === this.$videoElement && e.preventDefault()
      }, document.addEventListener("contextmenu", this._contextmenuEvent), this.player.debug.log("CanvasVideo", "init")
    }
    destroy() {
      super.destroy(), this.contextGl && (this.contextGl = null), this.context2D && (this.context2D = null), this.contextGlRender && (this.contextGlDestroy && this.contextGlDestroy(), this.contextGlDestroy = null, this.contextGlRender = null), this.bitmaprenderer && (this.bitmaprenderer = null), this._contextmenuEvent && (document.removeEventListener("contextmenu", this._contextmenuEvent), this._contextmenuEvent = null), this.renderType = null, this.player.debug.log("CanvasVideoLoader", "destroy")
    }
    _initContextGl() {
      this.contextGl = function(e) {
        let t = null;
        const i = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];
        let s = 0;
        for (; !t && s < i.length;) {
          const n = i[s];
          try {
            const i = {
              preserveDrawingBuffer: !0
            };
            t = e.getContext(n, i)
          } catch (e) {
            t = null
          }
          t && "function" == typeof t.getParameter || (t = null), ++s
        }
        return t
      }(this.$videoElement);
      const e = ((e, t) => {
        var i = ["attribute vec4 vertexPos;", "attribute vec4 texturePos;", "varying vec2 textureCoord;", "void main()", "{", "gl_Position = vertexPos;", "textureCoord = texturePos.xy;", "}"].join("\n"),
          s = ["precision highp float;", "varying highp vec2 textureCoord;", "uniform sampler2D ySampler;", "uniform sampler2D uSampler;", "uniform sampler2D vSampler;", "const mat4 YUV2RGB = mat4", "(", "1.1643828125, 0, 1.59602734375, -.87078515625,", "1.1643828125, -.39176171875, -.81296875, .52959375,", "1.1643828125, 2.017234375, 0, -1.081390625,", "0, 0, 0, 1", ");", "void main(void) {", "highp float y = texture2D(ySampler,  textureCoord).r;", "highp float u = texture2D(uSampler,  textureCoord).r;", "highp float v = texture2D(vSampler,  textureCoord).r;", "gl_FragColor = vec4(y, u, v, 1) * YUV2RGB;", "}"].join("\n");
        t && e.pixelStorei(e.UNPACK_ALIGNMENT, 1);
        var n = e.createShader(e.VERTEX_SHADER);
        e.shaderSource(n, i), e.compileShader(n), e.getShaderParameter(n, e.COMPILE_STATUS);
        var r = e.createShader(e.FRAGMENT_SHADER);
        e.shaderSource(r, s), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS);
        var a = e.createProgram();
        e.attachShader(a, n), e.attachShader(a, r), e.linkProgram(a), e.getProgramParameter(a, e.LINK_STATUS), e.useProgram(a);
        var o = e.createBuffer();
        e.bindBuffer(e.ARRAY_BUFFER, o), e.bufferData(e.ARRAY_BUFFER, new Float32Array([1, 1, -1, 1, 1, -1, -1, -1]), e.STATIC_DRAW);
        var d = e.getAttribLocation(a, "vertexPos");
        e.enableVertexAttribArray(d), e.vertexAttribPointer(d, 2, e.FLOAT, !1, 0, 0);
        var l = e.createBuffer();
        e.bindBuffer(e.ARRAY_BUFFER, l), e.bufferData(e.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), e.STATIC_DRAW);
        var h = e.getAttribLocation(a, "texturePos");

        function c(t, i) {
          var s = e.createTexture();
          return e.bindTexture(e.TEXTURE_2D, s), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.bindTexture(e.TEXTURE_2D, null), e.uniform1i(e.getUniformLocation(a, t), i), s
        }
        e.enableVertexAttribArray(h), e.vertexAttribPointer(h, 2, e.FLOAT, !1, 0, 0);
        var u = c("ySampler", 0),
          A = c("uSampler", 1),
          _ = c("vSampler", 2);
        return {
          render: function(t, i, s, n, r) {
            e.viewport(0, 0, t, i), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, u), e.texImage2D(e.TEXTURE_2D, 0, e.LUMINANCE, t, i, 0, e.LUMINANCE, e.UNSIGNED_BYTE, s), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, A), e.texImage2D(e.TEXTURE_2D, 0, e.LUMINANCE, t / 2, i / 2, 0, e.LUMINANCE, e.UNSIGNED_BYTE, n), e.activeTexture(e.TEXTURE2), e.bindTexture(e.TEXTURE_2D, _), e.texImage2D(e.TEXTURE_2D, 0, e.LUMINANCE, t / 2, i / 2, 0, e.LUMINANCE, e.UNSIGNED_BYTE, r), e.drawArrays(e.TRIANGLE_STRIP, 0, 4)
          },
          destroy: function() {
            try {
              e.deleteProgram(a), e.deleteBuffer(o), e.deleteBuffer(l), e.deleteTexture(u), e.deleteTexture(A), e.deleteTexture(_)
            } catch (e) {}
          }
        }
      })(this.contextGl, this.player._opt.openWebglAlignment);
      this.contextGlRender = e.render, this.contextGlDestroy = e.destroy
    }
    _initContext2D() {
      this.context2D = this.$videoElement.getContext("2d")
    }
    _initCanvasRender() {
      this._supportOffscreen() ? (this.renderType = Z, this._bindOffscreen()) : (this.renderType = N, this._initContextGl())
    }
    _supportOffscreen() {
      return "function" == typeof this.$videoElement.transferControlToOffscreen && this.player._opt.useOffscreen
    }
    _bindOffscreen() {
      this.bitmaprenderer = this.$videoElement.getContext("bitmaprenderer")
    }
    initCanvasViewSize() {
      this.$videoElement.width = this.videoInfo.width, this.$videoElement.height = this.videoInfo.height, this.resize()
    }
    render(e) {
      switch (this.player.videoTimestamp = e.ts, this.renderType) {
        case Z:
          this.bitmaprenderer.transferFromImageBitmap(e.buffer);
          break;
        case N:
          this.contextGlRender(this.$videoElement.width, this.$videoElement.height, e.output[0], e.output[1], e.output[2]);
          break;
        case V:
          this.context2D.drawImage(e.videoFrame, 0, 0, this.$videoElement.width, this.$videoElement.height), (t = e.videoFrame).close ? t.close() : t.destroy && t.destroy()
      }
      var t
    }
    screenshot(e, t, i, s) {
      e = e || Y(), s = s || M.download;
      const n = {
        png: "image/png",
        jpeg: "image/jpeg",
        webp: "image/webp"
      };
      let r = .92;
      !n[t] && M[t] && (s = t, t = "png", i = void 0), "string" == typeof i && (s = i, i = void 0), void 0 !== i && (r = Number(i));
      const a = this.$videoElement.toDataURL(n[t] || n.png, r);
      if (s === M.base64) return a; {
        const t = q(a);
        if (s === M.blob) return t;
        s === M.download && ue(t, e)
      }
    }
    clearView() {
      switch (this.renderType) {
        case Z:
          (function(e, t) {
            const i = document.createElement("canvas");
            return i.width = e, i.height = t, window.createImageBitmap(i, 0, 0, e, t)
          })(this.$videoElement.width, this.$videoElement.height).then((e => {
            this.bitmaprenderer.transferFromImageBitmap(e)
          }));
          break;
        case N:
          this.contextGl.clear(this.contextGl.COLOR_BUFFER_BIT);
          break;
        case V:
          this.context2D.clearRect(0, 0, this.$videoElement.width, this.$videoElement.height)
      }
    }
    resize() {
      this.player.debug.log("canvasVideo", "resize");
      const e = this.player._opt,
        t = this.player.width,
        i = this.player.height;
      let s = this.$videoElement.width,
        n = this.$videoElement.height;
      const r = e.rotate,
        a = (t - s) / 2,
        o = (i - n) / 2;
      270 !== r && 90 !== r || (s = this.$videoElement.height, n = this.$videoElement.width);
      const d = t / s,
        l = i / n;
      let h = d > l ? l : d;
      e.scaleMode !== F.auto && d !== l && (h = d + "," + l), e.scaleMode === F.fullAuto && (h = d > l ? d : l);
      let c = "scale(" + h + ")";
      r && (c += " rotate(" + r + "deg)"), this.$videoElement.style.transform = c, this.$videoElement.style.left = a + "px", this.$videoElement.style.top = o + "px"
    }
  }
  class _e extends re {
    constructor(e) {
      super(), this.bufferList = [], this.player = e, this.scriptNode = null, this.hasInitScriptNode = !1, this.audioContextChannel = null, this.audioContext = new(window.AudioContext || window.webkitAudioContext), this.gainNode = this.audioContext.createGain();
      const t = this.audioContext.createBufferSource();
      t.buffer = this.audioContext.createBuffer(1, 1, 22050), t.connect(this.audioContext.destination), t.noteOn ? t.noteOn(0) : t.start(0), this.audioBufferSourceNode = t, this.mediaStreamAudioDestinationNode = this.audioContext.createMediaStreamDestination(), this.audioEnabled(!0), this.gainNode.gain.value = 0, this.playing = !1, this.audioSyncVideoOption = {
        diff: null
      }, this.audioInfo = {
        encType: "",
        channels: "",
        sampleRate: ""
      }, this.init = !1, this.hasAudio = !1, this.on(B.videoSyncAudio, (e => {
        this.audioSyncVideoOption = e
      })), this.player.debug.log("AudioContext", "init")
    }
    resetInit() {
      this.init = !1, this.audioInfo = {
        encType: "",
        channels: "",
        sampleRate: ""
      }
    }
    destroy() {
      this.closeAudio(), this.resetInit(), this.audioContext.close(), this.audioContext = null, this.gainNode = null, this.hasAudio = !1, this.playing = !1, this.scriptNode && (this.scriptNode.onaudioprocess = j, this.scriptNode = null), this.audioBufferSourceNode = null, this.mediaStreamAudioDestinationNode = null, this.hasInitScriptNode = !1, this.audioSyncVideoOption = {
        diff: null
      }, this.off(), this.player.debug.log("AudioContext", "destroy")
    }
    updateAudioInfo(e) {
      e.encTypeCode && (this.audioInfo.encType = U[e.encTypeCode]), e.channels && (this.audioInfo.channels = e.channels), e.sampleRate && (this.audioInfo.sampleRate = e.sampleRate), this.audioInfo.sampleRate && this.audioInfo.channels && this.audioInfo.encType && !this.init && (this.player.emit(B.audioInfo, this.audioInfo), this.init = !0)
    }
    get isPlaying() {
      return this.playing
    }
    get isMute() {
      return 0 === this.gainNode.gain.value
    }
    get volume() {
      return this.gainNode.gain.value
    }
    get bufferSize() {
      return this.bufferList.length
    }
    initScriptNode() {
      if (this.playing = !0, this.hasInitScriptNode) return;
      const e = this.audioInfo.channels,
        t = this.audioContext.createScriptProcessor(1024, 0, e);
      t.onaudioprocess = t => {
        const i = t.outputBuffer;
        if (this.bufferList.length && this.playing) {
          if (!this.player._opt.useWCS && !this.player._opt.useMSE && this.player._opt.wasmDecodeAudioSyncVideo) {
            if (this.audioSyncVideoOption.diff > G) return void this.player.debug.warn("AudioContext", `audioSyncVideoOption more than diff :${this.audioSyncVideoOption.diff}, waiting`);
            if (this.audioSyncVideoOption.diff < -1e3) {
              this.player.debug.warn("AudioContext", `audioSyncVideoOption less than diff :${this.audioSyncVideoOption.diff}, dropping`);
              let e = this.bufferList.shift();
              for (; e.ts - this.player.videoTimestamp < -1e3 && this.bufferList.length > 0;) e = this.bufferList.shift();
              if (0 === this.bufferList.length) return
            }
          }
          if (0 === this.bufferList.length) return;
          const t = this.bufferList.shift();
          t && t.ts && (this.player.audioTimestamp = t.ts);
          for (let s = 0; s < e; s++) {
            const e = t.buffer[s],
              n = i.getChannelData(s);
            for (let t = 0; t < 1024; t++) n[t] = e[t] || 0
          }
        }
      }, t.connect(this.gainNode), this.scriptNode = t, this.gainNode.connect(this.audioContext.destination), this.gainNode.connect(this.mediaStreamAudioDestinationNode), this.hasInitScriptNode = !0
    }
    mute(e) {
      e ? (this.isMute || this.player.emit(B.mute, e), this.setVolume(0), this.clear()) : (this.isMute && this.player.emit(B.mute, e), this.setVolume(.5))
    }
    setVolume(e) {
      e = parseFloat(e).toFixed(2), isNaN(e) || (this.audioEnabled(!0), e = function(e, t, i) {
        return Math.max(Math.min(e, Math.max(t, i)), Math.min(t, i))
      }(e, 0, 1), this.gainNode.gain.value = e, this.gainNode.gain.setValueAtTime(e, this.audioContext.currentTime), this.player.emit(B.volumechange, this.player.volume))
    }
    closeAudio() {
      this.hasInitScriptNode && (this.scriptNode && this.scriptNode.disconnect(this.gainNode), this.gainNode && this.gainNode.disconnect(this.audioContext.destination), this.gainNode && this.gainNode.disconnect(this.mediaStreamAudioDestinationNode)), this.clear()
    }
    audioEnabled(e) {
      e ? "suspended" === this.audioContext.state && this.audioContext.resume() : "running" === this.audioContext.state && this.audioContext.suspend()
    }
    isStateRunning() {
      return "running" === this.audioContext.state
    }
    isStateSuspended() {
      return "suspended" === this.audioContext.state
    }
    clear() {
      this.bufferList = []
    }
    play(e, t) {
      this.isMute || (this.hasAudio = !0, this.bufferList.push({
        buffer: e,
        ts: t
      }), this.bufferList.length > 20 && (this.player.debug.warn("AudioContext", `bufferList is large: ${this.bufferList.length}`), this.bufferList.length > 50 && this.bufferList.shift()))
    }
    pause() {
      this.audioSyncVideoOption = {
        diff: null
      }, this.playing = !1, this.clear()
    }
    resume() {
      this.playing = !0
    }
  }
  class me {
    constructor(e) {
      return new(me.getLoaderFactory())(e)
    }
    static getLoaderFactory() {
      return _e
    }
  }
  class pe extends re {
    constructor(e) {
      super(), this.player = e, this.playing = !1, this.abortController = new AbortController, this.streamRate = J((e => {})), e.debug.log("FetchStream", "init")
    }
    destroy() {
      this.abort(), this.off(), this.streamRate = null, this.player.debug.log("FetchStream", "destroy")
    }
    fetchStream(e, t = {}) {
      const {
        demux: i
      } = this.player;
      this.player._times.streamStart = Y();
      const s = Object.assign({
        signal: this.abortController.signal
      }, {
        headers: t.headers || {}
      });
      fetch(e, s).then((e => {
        const t = e.body.getReader();
        this.emit(B.streamSuccess);
        const s = () => {
          t.read().then((({
            done: e,
            value: t
          }) => {
            e ? i.close() : (this.streamRate && this.streamRate(t.byteLength), i.dispatch(t), s())
          })).catch((e => {
            i.close();
            const s = e.toString(); - 1 === s.indexOf($) && -1 === s.indexOf(W) && e.name !== Q && (this.abort(), t.cancel(), this.emit(I.fetchError, e), this.player.emit(B.error, I.fetchError))
          }))
        };
        s()
      })).catch((e => {
        "AbortError" !== e.name && (i.close(), this.abort(), this.emit(I.fetchError, e), this.player.emit(B.error, I.fetchError))
      }))
    }
    abort() {
      this.abortController && (this.abortController.abort(), this.abortController = null)
    }
  }
  class fe extends re {
    constructor(e) {
      super(), this.player = e, this.socket = null, this.socketStatus = O, this.wsUrl = null, this.streamRate = J((e => {})), e.debug.log("WebsocketLoader", "init")
    }
    destroy() {
      this.socket && (this.socket.close(1e3, "Client disconnecting"), this.socket = null), this.socketStatus = O, this.streamRate = null, this.wsUrl = null, this.off(), this.player.debug.log("websocketLoader", "destroy")
    }
    _createWebSocket() {
      const e = this.player,
        {
          debug: t,
          events: {
            proxy: i
          },
          demux: s
        } = e;
      this.socket = new WebSocket(this.wsUrl), this.socket.binaryType = "arraybuffer", i(this.socket, "open", (() => {
        this.emit(B.streamSuccess), t.log("websocketLoader", "socket open"), this.socketStatus = D
      })), i(this.socket, "message", (e => {
        this.streamRate && this.streamRate(e.data.byteLength), this._handleMessage(e.data)
      })), i(this.socket, "close", (() => {
        t.log("websocketLoader", "socket close"), this.emit(B.streamEnd), this.socketStatus = L
      })), i(this.socket, "error", (e => {
        t.log("websocketLoader", "socket error"), this.emit(I.websocketError, e), this.player.emit(B.error, I.websocketError), this.socketStatus = x, s.close(), t.log("websocketLoader", "socket error:", e)
      }))
    }
    _handleMessage(e) {
      const {
        demux: t
      } = this.player;
      t ? t.dispatch(e) : this.player.debug.warn("websocketLoader", "websocket handle message demux is null")
    }
    fetchStream(e, t) {
      this.player._times.streamStart = Y(), this.wsUrl = e, this._createWebSocket()
    }
  }
  class ge {
    constructor(e) {
      return new(ge.getLoaderFactory(e._opt.protocol))(e)
    }
    static getLoaderFactory(e) {
      return e === a ? pe : e === r ? fe : void 0
    }
  }
  class ve {
    constructor(e) {
      this.player = e, this.decoderWorker = new Worker(e._opt.decoder), this._initDecoderWorker(), e.debug.log("decoderWorker", "init")
    }
    destroy() {
      this.decoderWorker.postMessage({
        cmd: R
      }), this.decoderWorker.terminate(), this.decoderWorker = null, this.player.debug.log("decoderWorker", "destroy")
    }
    _initDecoderWorker() {
      const {
        debug: e,
        events: {
          proxy: t
        }
      } = this.player;
      this.decoderWorker.onmessage = t => {
        const i = t.data;
        switch (i.cmd) {
          case h:
            e.log("decoderWorker", "onmessage:", h), this.player.loaded || this.player.emit(B.load), this.player.emit(B.decoderWorkerInit), this._initWork();
            break;
          case p:
            e.log("decoderWorker", "onmessage:", p, i.code), this.player._times.decodeStart || (this.player._times.decodeStart = Y()), this.player.video.updateVideoInfo({
              encTypeCode: i.code
            });
            break;
          case m:
            e.log("decoderWorker", "onmessage:", m, i.code), this.player.audio && this.player.audio.updateAudioInfo({
              encTypeCode: i.code
            });
            break;
          case c:
            if (e.log("decoderWorker", "onmessage:", c, `width:${i.w},height:${i.h}`), this.player.video.updateVideoInfo({
                width: i.w,
                height: i.h
              }), !this.player._opt.openWebglAlignment && i.w / 2 % 4 != 0) return void this.player.emit(I.webglAlignmentError);
            this.player.video.initCanvasViewSize();
            break;
          case _:
            e.log("decoderWorker", "onmessage:", _, `channels:${i.channels},sampleRate:${i.sampleRate}`), this.player.audio && (this.player.audio.updateAudioInfo(i), this.player.audio.initScriptNode(i));
            break;
          case u:
            this.player.handleRender(), this.player.video.render(i), this.player.emit(B.timeUpdate, i.ts), this.player.updateStats({
              fps: !0,
              ts: i.ts,
              buf: i.delay
            }), this.player._times.videoStart || (this.player._times.videoStart = Y(), this.player.handlePlayToRenderTimes());
            break;
          case A:
            this.player.playing && this.player.audio && this.player.audio.play(i.buffer, i.ts);
            break;
          case f:
            i.message && -1 !== i.message.indexOf(g) && this.player.emitError(I.wasmDecodeError);
            break;
          default:
            this.player[i.cmd] && this.player[i.cmd](i)
        }
      }
    }
    _initWork() {
      const e = {
        debug: this.player._opt.debug,
        useOffscreen: this.player._opt.useOffscreen,
        useWCS: this.player._opt.useWCS,
        videoBuffer: this.player._opt.videoBuffer,
        videoBufferDelay: this.player._opt.videoBufferDelay,
        openWebglAlignment: this.player._opt.openWebglAlignment
      };
      this.decoderWorker.postMessage({
        cmd: b,
        opt: JSON.stringify(e),
        sampleRate: this.player.audio && this.player.audio.audioContext.sampleRate || 0
      })
    }
    decodeVideo(e, t, i) {
      const s = {
        type: y,
        ts: Math.max(t, 0),
        isIFrame: i
      };
      this.decoderWorker.postMessage({
        cmd: w,
        buffer: e,
        options: s
      }, [e.buffer])
    }
    decodeAudio(e, t) {
      this.player._opt.useWCS || this.player._opt.useMSE ? this._decodeAudioNoDelay(e, t) : this._decodeAudio(e, t)
    }
    _decodeAudio(e, t) {
      const i = {
        type: v,
        ts: Math.max(t, 0)
      };
      this.decoderWorker.postMessage({
        cmd: w,
        buffer: e,
        options: i
      }, [e.buffer])
    }
    _decodeAudioNoDelay(e, t) {
      this.decoderWorker.postMessage({
        cmd: T,
        buffer: e,
        ts: Math.max(t, 0)
      }, [e.buffer])
    }
    updateWorkConfig(e) {
      this.decoderWorker.postMessage({
        cmd: C,
        key: e.key,
        value: e.value
      })
    }
  }
  class ye extends re {
    constructor(e) {
      super(), this.player = e, this.stopId = null, this.firstTimestamp = null, this.startTimestamp = null, this.delay = -1, this.bufferList = [], this.dropping = !1, this.initInterval()
    }
    destroy() {
      this.stopId && (clearInterval(this.stopId), this.stopId = null), this.firstTimestamp = null, this.startTimestamp = null, this.delay = -1, this.bufferList = [], this.dropping = !1, this.off(), this.player.debug.log("CommonDemux", "destroy")
    }
    getDelay(e) {
      if (!e) return -1;
      if (this.firstTimestamp) {
        if (e) {
          const t = Date.now() - this.startTimestamp,
            i = e - this.firstTimestamp;
          this.delay = t >= i ? t - i : i - t
        }
      } else this.firstTimestamp = e, this.startTimestamp = Date.now(), this.delay = -1;
      return this.delay
    }
    resetDelay() {
      this.firstTimestamp = null, this.startTimestamp = null, this.delay = -1, this.dropping = !1
    }
    initInterval() {
      this.player.debug.log("common dumex", "init Interval");
      const e = () => {
        let e;
        const t = this.player._opt.videoBuffer,
          i = this.player._opt.videoBufferDelay;
        if (this.bufferList.length)
          if (this.dropping) {
            for (e = this.bufferList.shift(), e.type === v && 0 === e.payload[1] && this._doDecoderDecode(e); !e.isIFrame && this.bufferList.length;) e = this.bufferList.shift(), e.type === v && 0 === e.payload[1] && this._doDecoderDecode(e);
            e.isIFrame && this.getDelay(e.ts) <= Math.min(t, 200) && (this.dropping = !1, this._doDecoderDecode(e))
          } else e = this.bufferList[0], -1 === this.getDelay(e.ts) ? (this.bufferList.shift(), this._doDecoderDecode(e)) : this.delay > t + i ? (this.resetDelay(), this.dropping = !0) : (e = this.bufferList[0], this.getDelay(e.ts) > t && (this.bufferList.shift(), this._doDecoderDecode(e)))
      };
      e(), this.stopId = setInterval(e, 10)
    }
    _doDecode(e, t, i, s, n) {
      const r = this.player,
        a = {
          ts: i,
          cts: n,
          type: t,
          isIFrame: !1
        };
      r._opt.useWCS && !r._opt.useOffscreen ? (t === y && (a.isIFrame = s), this.pushBuffer(e, a)) : t === y ? r.decoderWorker && r.decoderWorker.decodeVideo(e, i, s) : t === v && r._opt.hasAudio && r.decoderWorker && r.decoderWorker.decodeAudio(e, i)
    }
    _doDecoderDecode(e) {
      const t = this.player;
      e.type === v ? t._opt.hasAudio && t.decoderWorker && t.decoderWorker.decodeAudio(e.payload, e.ts) : e.type
    }
    pushBuffer(e, t) {
      t.type === v ? this.bufferList.push({
        ts: t.ts,
        payload: e,
        type: v
      }) : t.type === y && this.bufferList.push({
        ts: t.ts,
        cts: t.cts,
        payload: e,
        type: y,
        isIFrame: t.isIFrame
      })
    }
    close() {}
  }
  class Ee extends ye {
    constructor(e) {
      super(e), this.input = this._inputFlv(), this.flvDemux = this.dispatchFlvData(this.input), e.debug.log("FlvDemux", "init")
    }
    destroy() {
      super.destroy(), this.input = null, this.flvDemux = null, this.player.debug.log("FlvDemux", "destroy")
    }
    dispatch(e) {
      this.flvDemux(e)
    }* _inputFlv() {
      yield 9;
      const e = new ArrayBuffer(4),
        t = new Uint8Array(e),
        i = new Uint32Array(e),
        s = this.player;
      for (;;) {
        t[3] = 0;
        const e = yield 15, n = e[4];
        t[0] = e[7], t[1] = e[6], t[2] = e[5];
        const r = i[0];
        t[0] = e[10], t[1] = e[9], t[2] = e[8];
        let a = i[0];
        16777215 === a && (t[3] = e[11], a = i[0]);
        const o = yield r;
        switch (n) {
          case E:
            s._opt.hasAudio && (s.updateStats({
              abps: o.byteLength
            }), o.byteLength > 0 && this._doDecode(o, v, a));
            break;
          case S:
            if (s._times.demuxStart || (s._times.demuxStart = Y()), s._opt.hasVideo) {
              s.updateStats({
                vbps: o.byteLength
              });
              const e = o[0] >> 4 == 1;
              if (o.byteLength > 0) {
                i[0] = o[4], i[1] = o[3], i[2] = o[2], i[3] = 0;
                const t = i[0];
                this._doDecode(o, y, a, e, t)
              }
            }
        }
      }
    }
    dispatchFlvData(e) {
      let t = e.next(),
        i = null;
      return s => {
        let n = new Uint8Array(s);
        if (i) {
          const e = new Uint8Array(i.length + n.length);
          e.set(i), e.set(n, i.length), n = e, i = null
        }
        for (; n.length >= t.value;) {
          const i = n.slice(t.value);
          t = e.next(n.slice(0, t.value)), n = i
        }
        n.length > 0 && (i = n)
      }
    }
    close() {
      this.input && this.input.return(null)
    }
  }
  class Se extends ye {
    constructor(e) {
      super(e), e.debug.log("M7sDemux", "init")
    }
    destroy() {
      super.destroy(), this.player.debug.log("M7sDemux", "destroy"), this.player = null
    }
    dispatch(e) {
      const t = this.player,
        i = new DataView(e),
        s = i.getUint8(0),
        n = i.getUint32(1, !1);
      switch (s) {
        case v:
          if (t._opt.hasAudio) {
            const i = new Uint8Array(e, 5);
            t.updateStats({
              abps: i.byteLength
            }), i.byteLength > 0 && this._doDecode(i, s, n)
          }
          break;
        case y:
          if (t._opt.hasVideo)
            if (t._times.demuxStart || (t._times.demuxStart = Y()), i.byteLength > 5) {
              const r = new Uint8Array(e, 5),
                a = i.getUint8(5) >> 4 == 1;
              t.updateStats({
                vbps: r.byteLength
              }), r.byteLength > 0 && this._doDecode(r, s, n, a)
            } else this.player.debug.warn("M7sDemux", "dispatch", "dv byteLength is", i.byteLength)
      }
    }
  }
  class be {
    constructor(e) {
      return new(be.getLoaderFactory(e._opt.demuxType))(e)
    }
    static getLoaderFactory(e) {
      return e === d ? Se : e === o ? Ee : void 0
    }
  }
  const we = () => "undefined" != typeof navigator && parseFloat(("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) < 10 && !window.MSStream,
    Te = () => "wakeLock" in navigator;
  class Re {
    constructor(e) {
      if (this.player = e, this.enabled = !1, Te()) {
        this._wakeLock = null;
        const e = () => {
          null !== this._wakeLock && "visible" === document.visibilityState && this.enable()
        };
        document.addEventListener("visibilitychange", e), document.addEventListener("fullscreenchange", e)
      } else we() ? this.noSleepTimer = null : (this.noSleepVideo = document.createElement("video"), this.noSleepVideo.setAttribute("title", "No Sleep"), this.noSleepVideo.setAttribute("playsinline", ""), this._addSourceToVideo(this.noSleepVideo, "webm", "data:video/webm;base64,GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4EEQoWBAhhTgGcBAAAAAAAVkhFNm3RALE27i1OrhBVJqWZTrIHfTbuMU6uEFlSua1OsggEwTbuMU6uEHFO7a1OsghV17AEAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAAEUq17GDD0JATYCNTGF2ZjU1LjMzLjEwMFdBjUxhdmY1NS4zMy4xMDBzpJBlrrXf3DCDVB8KcgbMpcr+RImIQJBgAAAAAAAWVK5rAQAAAAAAD++uAQAAAAAAADLXgQFzxYEBnIEAIrWcg3VuZIaFVl9WUDiDgQEj44OEAmJaAOABAAAAAAAABrCBsLqBkK4BAAAAAAAPq9eBAnPFgQKcgQAitZyDdW5khohBX1ZPUkJJU4OBAuEBAAAAAAAAEZ+BArWIQOdwAAAAAABiZIEgY6JPbwIeVgF2b3JiaXMAAAAAAoC7AAAAAAAAgLUBAAAAAAC4AQN2b3JiaXMtAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAxMDExMDEgKFNjaGF1ZmVudWdnZXQpAQAAABUAAABlbmNvZGVyPUxhdmM1NS41Mi4xMDIBBXZvcmJpcyVCQ1YBAEAAACRzGCpGpXMWhBAaQlAZ4xxCzmvsGUJMEYIcMkxbyyVzkCGkoEKIWyiB0JBVAABAAACHQXgUhIpBCCGEJT1YkoMnPQghhIg5eBSEaUEIIYQQQgghhBBCCCGERTlokoMnQQgdhOMwOAyD5Tj4HIRFOVgQgydB6CCED0K4moOsOQghhCQ1SFCDBjnoHITCLCiKgsQwuBaEBDUojILkMMjUgwtCiJqDSTX4GoRnQXgWhGlBCCGEJEFIkIMGQcgYhEZBWJKDBjm4FITLQagahCo5CB+EIDRkFQCQAACgoiiKoigKEBqyCgDIAAAQQFEUx3EcyZEcybEcCwgNWQUAAAEACAAAoEiKpEiO5EiSJFmSJVmSJVmS5omqLMuyLMuyLMsyEBqyCgBIAABQUQxFcRQHCA1ZBQBkAAAIoDiKpViKpWiK54iOCISGrAIAgAAABAAAEDRDUzxHlETPVFXXtm3btm3btm3btm3btm1blmUZCA1ZBQBAAAAQ0mlmqQaIMAMZBkJDVgEACAAAgBGKMMSA0JBVAABAAACAGEoOogmtOd+c46BZDppKsTkdnEi1eZKbirk555xzzsnmnDHOOeecopxZDJoJrTnnnMSgWQqaCa0555wnsXnQmiqtOeeccc7pYJwRxjnnnCateZCajbU555wFrWmOmkuxOeecSLl5UptLtTnnnHPOOeecc84555zqxekcnBPOOeecqL25lpvQxTnnnE/G6d6cEM4555xzzjnnnHPOOeecIDRkFQAABABAEIaNYdwpCNLnaCBGEWIaMulB9+gwCRqDnELq0ehopJQ6CCWVcVJKJwgNWQUAAAIAQAghhRRSSCGFFFJIIYUUYoghhhhyyimnoIJKKqmooowyyyyzzDLLLLPMOuyssw47DDHEEEMrrcRSU2011lhr7jnnmoO0VlprrbVSSimllFIKQkNWAQAgAAAEQgYZZJBRSCGFFGKIKaeccgoqqIDQkFUAACAAgAAAAABP8hzRER3RER3RER3RER3R8RzPESVREiVREi3TMjXTU0VVdWXXlnVZt31b2IVd933d933d+HVhWJZlWZZlWZZlWZZlWZZlWZYgNGQVAAACAAAghBBCSCGFFFJIKcYYc8w56CSUEAgNWQUAAAIACAAAAHAUR3EcyZEcSbIkS9IkzdIsT/M0TxM9URRF0zRV0RVdUTdtUTZl0zVdUzZdVVZtV5ZtW7Z125dl2/d93/d93/d93/d93/d9XQdCQ1YBABIAADqSIymSIimS4ziOJElAaMgqAEAGAEAAAIriKI7jOJIkSZIlaZJneZaomZrpmZ4qqkBoyCoAABAAQAAAAAAAAIqmeIqpeIqoeI7oiJJomZaoqZoryqbsuq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq4LhIasAgAkAAB0JEdyJEdSJEVSJEdygNCQVQCADACAAAAcwzEkRXIsy9I0T/M0TxM90RM901NFV3SB0JBVAAAgAIAAAAAAAAAMybAUy9EcTRIl1VItVVMt1VJF1VNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVN0zRNEwgNWQkAkAEAkBBTLS3GmgmLJGLSaqugYwxS7KWxSCpntbfKMYUYtV4ah5RREHupJGOKQcwtpNApJq3WVEKFFKSYYyoVUg5SIDRkhQAQmgHgcBxAsixAsiwAAAAAAAAAkDQN0DwPsDQPAAAAAAAAACRNAyxPAzTPAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAA0DwP8DwR8EQRAAAAAAAAACzPAzTRAzxRBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAAsDwP8EQR0DwRAAAAAAAAACzPAzxRBDzRAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEOAAABBgIRQasiIAiBMAcEgSJAmSBM0DSJYFTYOmwTQBkmVB06BpME0AAAAAAAAAAAAAJE2DpkHTIIoASdOgadA0iCIAAAAAAAAAAAAAkqZB06BpEEWApGnQNGgaRBEAAAAAAAAAAAAAzzQhihBFmCbAM02IIkQRpgkAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAGHAAAAgwoQwUGrIiAIgTAHA4imUBAIDjOJYFAACO41gWAABYliWKAABgWZooAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAYcAAACDChDBQashIAiAIAcCiKZQHHsSzgOJYFJMmyAJYF0DyApgFEEQAIAAAocAAACLBBU2JxgEJDVgIAUQAABsWxLE0TRZKkaZoniiRJ0zxPFGma53meacLzPM80IYqiaJoQRVE0TZimaaoqME1VFQAAUOAAABBgg6bE4gCFhqwEAEICAByKYlma5nmeJ4qmqZokSdM8TxRF0TRNU1VJkqZ5niiKommapqqyLE3zPFEURdNUVVWFpnmeKIqiaaqq6sLzPE8URdE0VdV14XmeJ4qiaJqq6roQRVE0TdNUTVV1XSCKpmmaqqqqrgtETxRNU1Vd13WB54miaaqqq7ouEE3TVFVVdV1ZBpimaaqq68oyQFVV1XVdV5YBqqqqruu6sgxQVdd1XVmWZQCu67qyLMsCAAAOHAAAAoygk4wqi7DRhAsPQKEhKwKAKAAAwBimFFPKMCYhpBAaxiSEFEImJaXSUqogpFJSKRWEVEoqJaOUUmopVRBSKamUCkIqJZVSAADYgQMA2IGFUGjISgAgDwCAMEYpxhhzTiKkFGPOOScRUoox55yTSjHmnHPOSSkZc8w556SUzjnnnHNSSuacc845KaVzzjnnnJRSSuecc05KKSWEzkEnpZTSOeecEwAAVOAAABBgo8jmBCNBhYasBABSAQAMjmNZmuZ5omialiRpmud5niiapiZJmuZ5nieKqsnzPE8URdE0VZXneZ4oiqJpqirXFUXTNE1VVV2yLIqmaZqq6rowTdNUVdd1XZimaaqq67oubFtVVdV1ZRm2raqq6rqyDFzXdWXZloEsu67s2rIAAPAEBwCgAhtWRzgpGgssNGQlAJABAEAYg5BCCCFlEEIKIYSUUggJAAAYcAAACDChDBQashIASAUAAIyx1lprrbXWQGettdZaa62AzFprrbXWWmuttdZaa6211lJrrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmstpZRSSimllFJKKaWUUkoppZRSSgUA+lU4APg/2LA6wknRWGChISsBgHAAAMAYpRhzDEIppVQIMeacdFRai7FCiDHnJKTUWmzFc85BKCGV1mIsnnMOQikpxVZjUSmEUlJKLbZYi0qho5JSSq3VWIwxqaTWWoutxmKMSSm01FqLMRYjbE2ptdhqq7EYY2sqLbQYY4zFCF9kbC2m2moNxggjWywt1VprMMYY3VuLpbaaizE++NpSLDHWXAAAd4MDAESCjTOsJJ0VjgYXGrISAAgJACAQUooxxhhzzjnnpFKMOeaccw5CCKFUijHGnHMOQgghlIwx5pxzEEIIIYRSSsaccxBCCCGEkFLqnHMQQgghhBBKKZ1zDkIIIYQQQimlgxBCCCGEEEoopaQUQgghhBBCCKmklEIIIYRSQighlZRSCCGEEEIpJaSUUgohhFJCCKGElFJKKYUQQgillJJSSimlEkoJJYQSUikppRRKCCGUUkpKKaVUSgmhhBJKKSWllFJKIYQQSikFAAAcOAAABBhBJxlVFmGjCRcegEJDVgIAZAAAkKKUUiktRYIipRikGEtGFXNQWoqocgxSzalSziDmJJaIMYSUk1Qy5hRCDELqHHVMKQYtlRhCxhik2HJLoXMOAAAAQQCAgJAAAAMEBTMAwOAA4XMQdAIERxsAgCBEZohEw0JweFAJEBFTAUBigkIuAFRYXKRdXECXAS7o4q4DIQQhCEEsDqCABByccMMTb3jCDU7QKSp1IAAAAAAADADwAACQXAAREdHMYWRobHB0eHyAhIiMkAgAAAAAABcAfAAAJCVAREQ0cxgZGhscHR4fICEiIyQBAIAAAgAAAAAggAAEBAQAAAAAAAIAAAAEBB9DtnUBAAAAAAAEPueBAKOFggAAgACjzoEAA4BwBwCdASqwAJAAAEcIhYWIhYSIAgIABhwJ7kPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99YAD+/6tQgKOFggADgAqjhYIAD4AOo4WCACSADqOZgQArADECAAEQEAAYABhYL/QACIBDmAYAAKOFggA6gA6jhYIAT4AOo5mBAFMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAGSADqOFggB6gA6jmYEAewAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAj4AOo5mBAKMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAKSADqOFggC6gA6jmYEAywAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAz4AOo4WCAOSADqOZgQDzADECAAEQEAAYABhYL/QACIBDmAYAAKOFggD6gA6jhYIBD4AOo5iBARsAEQIAARAQFGAAYWC/0AAiAQ5gGACjhYIBJIAOo4WCATqADqOZgQFDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggFPgA6jhYIBZIAOo5mBAWsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAXqADqOFggGPgA6jmYEBkwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIBpIAOo4WCAbqADqOZgQG7ADECAAEQEAAYABhYL/QACIBDmAYAAKOFggHPgA6jmYEB4wAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIB5IAOo4WCAfqADqOZgQILADECAAEQEAAYABhYL/QACIBDmAYAAKOFggIPgA6jhYICJIAOo5mBAjMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAjqADqOFggJPgA6jmYECWwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYICZIAOo4WCAnqADqOZgQKDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggKPgA6jhYICpIAOo5mBAqsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCArqADqOFggLPgA6jmIEC0wARAgABEBAUYABhYL/QACIBDmAYAKOFggLkgA6jhYIC+oAOo5mBAvsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAw+ADqOZgQMjADECAAEQEAAYABhYL/QACIBDmAYAAKOFggMkgA6jhYIDOoAOo5mBA0sAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA0+ADqOFggNkgA6jmYEDcwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIDeoAOo4WCA4+ADqOZgQObADECAAEQEAAYABhYL/QACIBDmAYAAKOFggOkgA6jhYIDuoAOo5mBA8MAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA8+ADqOFggPkgA6jhYID+oAOo4WCBA+ADhxTu2sBAAAAAAAAEbuPs4EDt4r3gQHxghEr8IEK"), this._addSourceToVideo(this.noSleepVideo, "mp4", "data:video/mp4;base64,AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw"), this.noSleepVideo.addEventListener("loadedmetadata", (() => {
        this.noSleepVideo.duration <= 1 ? this.noSleepVideo.setAttribute("loop", "") : this.noSleepVideo.addEventListener("timeupdate", (() => {
          this.noSleepVideo.currentTime > .5 && (this.noSleepVideo.currentTime = Math.random())
        }))
      })))
    }
    _addSourceToVideo(e, t, i) {
      const s = document.createElement("source");
      s.src = i, s.type = `video/${t}`, e.appendChild(s)
    }
    get isEnabled() {
      return this.enabled
    }
    enable() {
      const e = this.player.debug;
      if (Te()) return navigator.wakeLock.request("screen").then((t => {
        this._wakeLock = t, this.enabled = !0, e.log("wakeLock", "Wake Lock active."), this._wakeLock.addEventListener("release", (() => {
          e.log("wakeLock", "Wake Lock released.")
        }))
      })).catch((t => {
        throw this.enabled = !1, e.error("wakeLock", `${t.name}, ${t.message}`), t
      }));
      if (we()) return this.disable(), this.noSleepTimer = window.setInterval((() => {
        document.hidden || (window.location.href = window.location.href.split("#")[0], window.setTimeout(window.stop, 0))
      }), 15e3), this.enabled = !0, Promise.resolve();
      return this.noSleepVideo.play().then((e => (this.enabled = !0, e))).catch((e => {
        throw this.enabled = !1, e
      }))
    }
    disable() {
      const e = this.player.debug;
      Te() ? (this._wakeLock && this._wakeLock.release(), this._wakeLock = null) : we() ? this.noSleepTimer && (e.warn("wakeLock", "NoSleep now disabled for older iOS devices."), window.clearInterval(this.noSleepTimer), this.noSleepTimer = null) : this.noSleepVideo.pause(), this.enabled = !1
    }
  }
  class Ce {
    constructor(e) {
      this.master = e
    }
    log(e, ...t) {
      this.master._opt.debug && console.log(`[${e}]`, ...t)
    }
    warn(e, ...t) {
      this.master._opt.debug && console.warn(`[${e}]`, ...t)
    }
    error(e, ...t) {
      console.error(`[${e}]`, ...t)
    }
  }
  class Be {
    constructor(e) {
      this.destroys = [], this.proxy = this.proxy.bind(this), this.master = e
    }
    proxy(e, t, i, s = {}) {
      if (!e) return;
      if (Array.isArray(t)) return t.map((t => this.proxy(e, t, i, s)));
      e.addEventListener(t, i, s);
      const n = () => e.removeEventListener(t, i, s);
      return this.destroys.push(n), n
    }
    destroy() {
      this.master.debug && this.master.debug.log("Events", "destroy"), this.destroys.forEach((e => e()))
    }
  }
  class ke {
    constructor(e) {
      this.player = e, ((e, t) => {
        const {
          events: {
            proxy: i
          }
        } = e, s = document.createElement("object");
        s.setAttribute("aria-hidden", "true"), s.setAttribute("tabindex", -1), s.type = "text/html", s.data = "about:blank", X(s, {
          display: "block",
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          width: "100%",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: "-1"
        });
        let n = e.width,
          r = e.height;
        i(s, "load", (() => {
          i(s.contentDocument.defaultView, "resize", (() => {
            e.width === n && e.height === r || (n = e.width, r = e.height, e.emit(B.resize), o())
          }))
        })), e.$container.appendChild(s), e.on(B.destroy, (() => {
          e.$container.removeChild(s)
        }));
        const a = i => {
            const s = !0 === (n = i) || !1 === n ? i : e.fullscreen;
            var n;
            X(t.$fullscreenExit, "display", s ? "flex" : "none"), X(t.$fullscreen, "display", s ? "none" : "flex")
          },
          o = () => {
            ee() && e._opt.useWebFullScreen
          };
        try {
          z.on("change", a), e.events.destroys.push((() => {
            z.off("change", a)
          }))
        } catch (e) {}
        e.on(B.webFullscreen, (e => {
          a(e), o()
        }))
      })(e, this)
    }
  }
  class Ie extends re {
    constructor(e, t, i) {
      var s;
      super(), this.$container = e, this._opt = t, this.debug = new Ce(this), this._loading = !1, this._playing = !1, this._hasLoaded = !1, this._checkHeartTimeout = null, this._checkLoadingTimeout = null, this._checkStatsInterval = null, this._startBpsTime = null, this._isPlayingBeforePageHidden = !1, this._stats = {
        buf: 0,
        fps: 0,
        abps: 0,
        vbps: 0,
        ts: 0
      }, this._times = {
        playInitStart: "",
        playStart: "",
        streamStart: "",
        streamResponse: "",
        demuxStart: "",
        decodeStart: "",
        videoStart: "",
        playTimestamp: "",
        streamTimestamp: "",
        streamResponseTimestamp: "",
        demuxTimestamp: "",
        decodeTimestamp: "",
        videoTimestamp: "",
        allTimestamp: ""
      }, this._videoTimestamp = 0, this._audioTimestamp = 0, s = this, Object.defineProperty(s, "rect", {
        get: () => {
          const e = s.$container.getBoundingClientRect();
          return e.width = Math.max(e.width, s.$container.clientWidth), e.height = Math.max(e.height, s.$container.clientHeight), e
        }
      }), ["bottom", "height", "left", "right", "top", "width"].forEach((e => {
        Object.defineProperty(s, e, {
          get: () => s.rect[e]
        })
      })), this.events = new Be(this), this.video = new i(this), (e => {
        try {
          const t = t => {
            ne(t) === e.$container && (e.emit(k.fullscreen, e.fullscreen), e.fullscreen ? e._opt.useMSE && e.resize() : e.resize())
          };
          z.on("change", t), e.events.destroys.push((() => {
            z.off("change", t)
          }))
        } catch (e) {}
        e.on(B.decoderWorkerInit, (() => {
          e.debug.log("player", "has loaded"), e.loaded = !0
        })), e.on(B.play, (() => {
          e.loading = !1
        })), e.on(B.fullscreen, (t => {
          if (t) try {
            z.request(e.$container).then((() => {})).catch((t => {
              ee() && e._opt.useWebFullScreen && (e.webFullscreen = !0)
            }))
          } catch (t) {
            ee() && e._opt.useWebFullScreen && (e.webFullscreen = !0)
          } else try {
            z.exit().then((() => {
              e.webFullscreen && (e.webFullscreen = !1)
            })).catch((() => {
              e.webFullscreen = !1
            }))
          } catch (t) {
            e.webFullscreen = !1
          }
        })), ee() && e.on(B.webFullscreen, (t => {
          t ? e.$container.classList.add("flv-fullscreen-web") : e.$container.classList.remove("flv-fullscreen-web"), e._opt.useWebFullScreen && X(e.$container, t ? {
            position: "fixed",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            height: "100%",
            width: "100%"
          } : {
            position: "relative",
            top: "",
            left: "",
            right: "",
            bottom: "",
            height: "",
            width: ""
          }), e.emit(k.fullscreen, e.fullscreen)
        })), e.on(B.resize, (() => {
          e.video && e.video.resize()
        }));
        const t = [B.timeUpdate];
        Object.keys(B).forEach((i => {
          e.on(B[i], (s => {
            t.includes(i) || e.debug.log("player events", B[i], s)
          }))
        })), Object.keys(I).forEach((t => {
          e.on(I[t], (i => {
            e.debug.log("player event error", I[t], i)
          }))
        }))
      })(this), (e => {
        const {
          _opt: t,
          debug: i,
          events: {
            proxy: s
          }
        } = e;
        t.supportDblclickFullscreen && s(e.$container, "dblclick", (t => {
          const i = ne(t).nodeName.toLowerCase();
          "canvas" !== i && "video" !== i || (e.fullscreen = !e.fullscreen)
        })), s(document, "visibilitychange", (() => {
          t.hiddenAutoPause && (i.log("visibilitychange", document.visibilityState, e._isPlayingBeforePageHidden), "visible" === document.visibilityState ? e._isPlayingBeforePageHidden && e.play() : (e._isPlayingBeforePageHidden = e.playing, e.playing && e.pause()))
        })), s(window, "fullscreenchange", (() => {
          null !== e.keepScreenOn && "visible" === document.visibilityState && e.enableWakeLock && e.enableWakeLock()
        }))
      })(this), this.control = new ke(this)
    }
    updateOption(e) {
      this._opt = Object.assign({}, this._opt, e)
    }
  }
  class Oe {
    static get JS_ERROR() {
      return "js_error"
    }
    static get RESOURCE_ERROR() {
      return "resource_error"
    }
    static get VUE_ERROR() {
      return "vue_error"
    }
    static get PROMISE_ERROR() {
      return "promise_error"
    }
    static get AJAX_ERROR() {
      return "ajax_error"
    }
    static get CONSOLE_INFO() {
      return "console_info"
    }
    static get CONSOLE_WARN() {
      return "console_warn"
    }
    static get CONSOLE_ERROR() {
      return "console_error"
    }
    static get CROSS_SCRIPT_ERROR() {
      return "cross_srcipt_error"
    }
    static get UNKNOW_ERROR() {
      return "unknow_error"
    }
    static get PERFORMANCE() {
      return "performance"
    }
    static get BUSINESS() {
      return "business"
    }
  }
  class De {
    static get ERROR() {
      return "Error"
    }
    static get WARN() {
      return "Warning"
    }
    static get INFO() {
      return "Info"
    }
  }
  class Le {
    static get FETCH() {
      return "fetch"
    }
    static get DEFAULT() {
      return "default"
    }
  }
  var xe = function() {
      var e = "undefined" != typeof self ? self : this,
        t = e || {},
        i = {
          navigator: void 0 !== e.navigator ? e.navigator : {},
          infoMap: {
            engine: ["WebKit", "Trident", "Gecko", "Presto"],
            browser: ["Safari", "Chrome", "Edge", "IE", "Firefox", "Firefox Focus", "Chromium", "Opera", "Vivaldi", "Yandex", "Arora", "Lunascape", "QupZilla", "Coc Coc", "Kindle", "Iceweasel", "Konqueror", "Iceape", "SeaMonkey", "Epiphany", "360", "360SE", "360EE", "UC", "QQBrowser", "QQ", "Baidu", "Maxthon", "Sogou", "LBBROWSER", "2345Explorer", "TheWorld", "XiaoMi", "Quark", "Qiyu", "Wechat", "Taobao", "Alipay", "Weibo", "Douban", "Suning", "iQiYi"],
            os: ["Windows", "Linux", "Mac OS", "Android", "Ubuntu", "FreeBSD", "Debian", "iOS", "Windows Phone", "BlackBerry", "MeeGo", "Symbian", "Chrome OS", "WebOS"],
            device: ["Mobile", "Tablet", "iPad"]
          }
        },
        s = {
          getMatchMap: function(e) {
            return {
              Trident: e.indexOf("Trident") > -1 || e.indexOf("NET CLR") > -1,
              Presto: e.indexOf("Presto") > -1,
              WebKit: e.indexOf("AppleWebKit") > -1,
              Gecko: e.indexOf("Gecko/") > -1,
              Safari: e.indexOf("Safari") > -1,
              Chrome: e.indexOf("Chrome") > -1 || e.indexOf("CriOS") > -1,
              IE: e.indexOf("MSIE") > -1 || e.indexOf("Trident") > -1,
              Edge: e.indexOf("Edge") > -1,
              Firefox: e.indexOf("Firefox") > -1 || e.indexOf("FxiOS") > -1,
              "Firefox Focus": e.indexOf("Focus") > -1,
              Chromium: e.indexOf("Chromium") > -1,
              Opera: e.indexOf("Opera") > -1 || e.indexOf("OPR") > -1,
              Vivaldi: e.indexOf("Vivaldi") > -1,
              Yandex: e.indexOf("YaBrowser") > -1,
              Arora: e.indexOf("Arora") > -1,
              Lunascape: e.indexOf("Lunascape") > -1,
              QupZilla: e.indexOf("QupZilla") > -1,
              "Coc Coc": e.indexOf("coc_coc_browser") > -1,
              Kindle: e.indexOf("Kindle") > -1 || e.indexOf("Silk/") > -1,
              Iceweasel: e.indexOf("Iceweasel") > -1,
              Konqueror: e.indexOf("Konqueror") > -1,
              Iceape: e.indexOf("Iceape") > -1,
              SeaMonkey: e.indexOf("SeaMonkey") > -1,
              Epiphany: e.indexOf("Epiphany") > -1,
              360: e.indexOf("QihooBrowser") > -1 || e.indexOf("QHBrowser") > -1,
              "360EE": e.indexOf("360EE") > -1,
              "360SE": e.indexOf("360SE") > -1,
              UC: e.indexOf("UC") > -1 || e.indexOf(" UBrowser") > -1,
              QQBrowser: e.indexOf("QQBrowser") > -1,
              QQ: e.indexOf("QQ/") > -1,
              Baidu: e.indexOf("Baidu") > -1 || e.indexOf("BIDUBrowser") > -1,
              Maxthon: e.indexOf("Maxthon") > -1,
              Sogou: e.indexOf("MetaSr") > -1 || e.indexOf("Sogou") > -1,
              LBBROWSER: e.indexOf("LBBROWSER") > -1,
              "2345Explorer": e.indexOf("2345Explorer") > -1,
              TheWorld: e.indexOf("TheWorld") > -1,
              XiaoMi: e.indexOf("MiuiBrowser") > -1,
              Quark: e.indexOf("Quark") > -1,
              Qiyu: e.indexOf("Qiyu") > -1,
              Wechat: e.indexOf("MicroMessenger") > -1,
              Taobao: e.indexOf("AliApp(TB") > -1,
              Alipay: e.indexOf("AliApp(AP") > -1,
              Weibo: e.indexOf("Weibo") > -1,
              Douban: e.indexOf("com.douban.frodo") > -1,
              Suning: e.indexOf("SNEBUY-APP") > -1,
              iQiYi: e.indexOf("IqiyiApp") > -1,
              Windows: e.indexOf("Windows") > -1,
              Linux: e.indexOf("Linux") > -1 || e.indexOf("X11") > -1,
              "Mac OS": e.indexOf("Macintosh") > -1,
              Android: e.indexOf("Android") > -1 || e.indexOf("Adr") > -1,
              Ubuntu: e.indexOf("Ubuntu") > -1,
              FreeBSD: e.indexOf("FreeBSD") > -1,
              Debian: e.indexOf("Debian") > -1,
              "Windows Phone": e.indexOf("IEMobile") > -1 || e.indexOf("Windows Phone") > -1,
              BlackBerry: e.indexOf("BlackBerry") > -1 || e.indexOf("RIM") > -1,
              MeeGo: e.indexOf("MeeGo") > -1,
              Symbian: e.indexOf("Symbian") > -1,
              iOS: e.indexOf("like Mac OS X") > -1,
              "Chrome OS": e.indexOf("CrOS") > -1,
              WebOS: e.indexOf("hpwOS") > -1,
              Mobile: e.indexOf("Mobi") > -1 || e.indexOf("iPh") > -1 || e.indexOf("480") > -1,
              Tablet: e.indexOf("Tablet") > -1 || e.indexOf("Nexus 7") > -1,
              iPad: e.indexOf("iPad") > -1
            }
          },
          matchInfoMap: function(e) {
            var t = i.navigator.userAgent || {},
              n = s.getMatchMap(t);
            for (var r in i.infoMap)
              for (var a = 0; a < i.infoMap[r].length; a++) {
                var o = i.infoMap[r][a];
                n[o] && (e[r] = o)
              }
          },
          getOS: function() {
            return s.matchInfoMap(this), this.os
          },
          getOSVersion: function() {
            var e = this,
              t = i.navigator.userAgent || {};
            e.osVersion = "";
            var s = {
              Windows: function() {
                var e = t.replace(/^.*Windows NT ([\d.]+);.*$/, "$1");
                return {
                  6.4: "10",
                  6.3: "8.1",
                  6.2: "8",
                  6.1: "7",
                  "6.0": "Vista",
                  5.2: "XP",
                  5.1: "XP",
                  "5.0": "2000"
                } [e] || e
              },
              Android: function() {
                return t.replace(/^.*Android ([\d.]+);.*$/, "$1")
              },
              iOS: function() {
                return t.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, ".")
              },
              Debian: function() {
                return t.replace(/^.*Debian\/([\d.]+).*$/, "$1")
              },
              "Windows Phone": function() {
                return t.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2")
              },
              "Mac OS": function() {
                return t.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, ".")
              },
              WebOS: function() {
                return t.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1")
              }
            };
            return s[e.os] && (e.osVersion = s[e.os](), e.osVersion == t && (e.osVersion = "")), e.osVersion
          },
          getOrientationStatu: function() {
            return window.matchMedia("(orientation: portrait)").matches ? "竖屏" : "横屏"
          },
          getDeviceType: function() {
            var e = this;
            return e.device = "PC", s.matchInfoMap(e), e.device
          },
          getNetwork: function() {
            return navigator && navigator.connection && navigator.connection.effectiveType
          },
          getLanguage: function() {
            var e;
            return this.language = ((e = (i.navigator.browserLanguage || i.navigator.language).split("-"))[1] && (e[1] = e[1].toUpperCase()), e.join("_")), this.language
          },
          createFingerprint: function(e) {
            var t = document.createElement("canvas"),
              i = t.getContext("2d"),
              s = e || window.location.host;
            i.textBaseline = "top", i.font = "14px 'Arial'", i.textBaseline = "tencent", i.fillStyle = "#f60", i.fillRect(125, 1, 62, 20), i.fillStyle = "#069", i.fillText(s, 2, 15), i.fillStyle = "rgba(102, 204, 0, 0.7)", i.fillText(s, 4, 17);
            var n = t.toDataURL().replace("data:image/png;base64,", ""),
              r = function(e) {
                var t, i, s, n = "";
                for (t = 0, i = (e += "").length; t < i; t++) n += (s = e.charCodeAt(t).toString(16)).length < 2 ? "0" + s : s;
                return n
              }(atob(n).slice(-16, -12));
            return r
          },
          getBrowserInfo: function() {
            var e = this;
            s.matchInfoMap(e);
            var n = i.navigator.userAgent || {},
              r = function(e, t) {
                var s = i.navigator.mimeTypes;
                for (var n in s)
                  if (s[n][e] == t) return !0;
                return !1
              },
              a = s.getMatchMap(n),
              o = !1;
            if (t.chrome) {
              var d = n.replace(/^.*Chrome\/([\d]+).*$/, "$1");
              d > 36 && t.showModalDialog ? o = !0 : d > 45 && (o = r("type", "application/vnd.chromium.remoting-viewer"))
            }
            if (a.Baidu && a.Opera && (a.Baidu = !1), a.Mobile && (a.Mobile = !(n.indexOf("iPad") > -1)), o && (r("type", "application/gameplugin") || i.navigator && void 0 === i.navigator.connection.saveData ? a["360SE"] = !0 : a["360EE"] = !0), a.IE || a.Edge) switch (window.screenTop - window.screenY) {
              case 71:
              case 74:
              case 99:
              case 75:
              case 74:
              case 105:
                break;
              case 102:
                a["360EE"] = !0;
                break;
              case 104:
                a["360SE"] = !0
            }
            var l = {
              Safari: function() {
                return n.replace(/^.*Version\/([\d.]+).*$/, "$1")
              },
              Chrome: function() {
                return n.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1")
              },
              IE: function() {
                return n.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1")
              },
              Edge: function() {
                return n.replace(/^.*Edge\/([\d.]+).*$/, "$1")
              },
              Firefox: function() {
                return n.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1")
              },
              "Firefox Focus": function() {
                return n.replace(/^.*Focus\/([\d.]+).*$/, "$1")
              },
              Chromium: function() {
                return n.replace(/^.*Chromium\/([\d.]+).*$/, "$1")
              },
              Opera: function() {
                return n.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1")
              },
              Vivaldi: function() {
                return n.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1")
              },
              Yandex: function() {
                return n.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1")
              },
              Arora: function() {
                return n.replace(/^.*Arora\/([\d.]+).*$/, "$1")
              },
              Lunascape: function() {
                return n.replace(/^.*Lunascape[\/\s]([\d.]+).*$/, "$1")
              },
              QupZilla: function() {
                return n.replace(/^.*QupZilla[\/\s]([\d.]+).*$/, "$1")
              },
              "Coc Coc": function() {
                return n.replace(/^.*coc_coc_browser\/([\d.]+).*$/, "$1")
              },
              Kindle: function() {
                return n.replace(/^.*Version\/([\d.]+).*$/, "$1")
              },
              Iceweasel: function() {
                return n.replace(/^.*Iceweasel\/([\d.]+).*$/, "$1")
              },
              Konqueror: function() {
                return n.replace(/^.*Konqueror\/([\d.]+).*$/, "$1")
              },
              Iceape: function() {
                return n.replace(/^.*Iceape\/([\d.]+).*$/, "$1")
              },
              SeaMonkey: function() {
                return n.replace(/^.*SeaMonkey\/([\d.]+).*$/, "$1")
              },
              Epiphany: function() {
                return n.replace(/^.*Epiphany\/([\d.]+).*$/, "$1")
              },
              360: function() {
                return n.replace(/^.*QihooBrowser\/([\d.]+).*$/, "$1")
              },
              "360SE": function() {
                return {
                  63: "10.0",
                  55: "9.1",
                  45: "8.1",
                  42: "8.0",
                  31: "7.0",
                  21: "6.3"
                } [n.replace(/^.*Chrome\/([\d]+).*$/, "$1")] || ""
              },
              "360EE": function() {
                return {
                  69: "11.0",
                  63: "9.5",
                  55: "9.0",
                  50: "8.7",
                  30: "7.5"
                } [n.replace(/^.*Chrome\/([\d]+).*$/, "$1")] || ""
              },
              Maxthon: function() {
                return n.replace(/^.*Maxthon\/([\d.]+).*$/, "$1")
              },
              QQBrowser: function() {
                return n.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1")
              },
              QQ: function() {
                return n.replace(/^.*QQ\/([\d.]+).*$/, "$1")
              },
              Baidu: function() {
                return n.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1")
              },
              UC: function() {
                return n.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1")
              },
              Sogou: function() {
                return n.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1")
              },
              LBBROWSER: function() {
                return {
                  57: "6.5",
                  49: "6.0",
                  46: "5.9",
                  42: "5.3",
                  39: "5.2",
                  34: "5.0",
                  29: "4.5",
                  21: "4.0"
                } [navigator.userAgent.replace(/^.*Chrome\/([\d]+).*$/, "$1")] || ""
              },
              "2345Explorer": function() {
                return n.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1")
              },
              TheWorld: function() {
                return n.replace(/^.*TheWorld ([\d.]+).*$/, "$1")
              },
              XiaoMi: function() {
                return n.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1")
              },
              Quark: function() {
                return n.replace(/^.*Quark\/([\d.]+).*$/, "$1")
              },
              Qiyu: function() {
                return n.replace(/^.*Qiyu\/([\d.]+).*$/, "$1")
              },
              Wechat: function() {
                return n.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1")
              },
              Taobao: function() {
                return n.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1")
              },
              Alipay: function() {
                return n.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1")
              },
              Weibo: function() {
                return n.replace(/^.*weibo__([\d.]+).*$/, "$1")
              },
              Douban: function() {
                return n.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1")
              },
              Suning: function() {
                return n.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1")
              },
              iQiYi: function() {
                return n.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1")
              }
            };
            return e.browserVersion = "", l[e.browser] && (e.browserVersion = l[e.browser](), e.browserVersion == n && (e.browserVersion = "")), "Edge" == e.browser && (e.engine = "EdgeHTML"), "Chrome" == e.browser && parseInt(e.browserVersion) > 27 && (e.engine = "Blink"), "Opera" == e.browser && parseInt(e.browserVersion) > 12 && (e.engine = "Blink"), "Yandex" == e.browser && (e.engine = "Blink"), e.browser + "（版本: " + e.browserVersion + "&nbsp;&nbsp;内核: " + e.engine + "）"
          }
        },
        n = {
          DeviceInfoObj: function(e) {
            e = e || {
              domain: ""
            };
            var n = {
              deviceType: s.getDeviceType(),
              OS: s.getOS(),
              OSVersion: s.getOSVersion(),
              screenHeight: t.screen.height,
              screenWidth: t.screen.width,
              language: s.getLanguage(),
              netWork: s.getNetwork(),
              orientation: s.getOrientationStatu(),
              browserInfo: s.getBrowserInfo(),
              fingerprint: s.createFingerprint(e.domain),
              userAgent: i.navigator.userAgent
            };
            if (!e.info || 0 == e.info.length) return n;
            var r = {};
            for (var a in n) e.info.forEach((function(e) {
              e.toLowerCase() == a.toLowerCase() && (r[e = a] = n[e])
            }));
            return r
          }
        };
      return {
        getDeviceInfo: function(e) {
          return n.DeviceInfoObj(e)
        }
      }
    }(),
    Me = {
      type: e => Object.prototype.toString.call(e).replace(/\[object\s|\]/g, ""),
      isFunction(e) {
        return "Function" === this.type(e)
      },
      isArray(e) {
        return "Array" === this.type(e)
      },
      isNull: e => null == e || "" == e || null == e,
      objectIsNull: e => "{}" === JSON.stringify(e),
      isObject(e) {
        return "Object" === this.type(e)
      }
    };
  class Pe {
    toReport(e, t) {
      try {
        let s = JSON.stringify(t);
        var i = new XMLHttpRequest;
        i.open("POST", e, !0), i.setRequestHeader("Content-Type", "application/json"), i.send(s)
      } catch (e) {
        console.log(e)
      }
    }
  }
  class Ue {
    toReport(e, t) {
      try {
        let i = JSON.stringify(t);
        fetch(e, {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: i,
          mode: "same-origin",
          keepalive: !0
        })
      } catch (i) {
        (new Pe).toReport(e, t), console.log("fetch请求异常", i)
      }
    }
  }
  class Fe {
    toReport(e, t) {
      try {
        (new Image).src = e + "?st=" + (new Date).getTime() + "&" + this.formatParams(t)
      } catch (e) {
        console.log(e)
      }
    }
    formatParams(e) {
      var t = [];
      for (var i in e) t.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
      return t.join("&")
    }
  }
  class Ve {
    toReport(e, t) {
      try {
        t.st = (new Date).getTime(), navigator.sendBeacon && navigator.sendBeacon(e, this.formatParamsByURLSearchParams(t))
      } catch (e) {
        console.log(e)
      }
    }
    formatParamsByFormData(e) {
      const t = new FormData;
      for (var i in e) t.append(i, e[i]);
      return t
    }
    formatParamsByURLSearchParams(e) {
      const t = new URLSearchParams;
      for (var i in e) "object" == typeof e[i] && (e[i] = JSON.stringify(e[i])), t.append(i, e[i]);
      return t
    }
    formatParams(e) {
      var t = [];
      for (var i in e) t.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
      return t.join("&")
    }
  }
  class Ne {
    constructor(e) {
      this.url = e
    }
    report(e, t) {
      t = t || {
        isFetch: !1,
        isXHR: !1,
        isImg: !1,
        isNavigator: !1
      }, this.checkUrl(this.url) ? this.sendInfo(e, t) : console.log("上报信息url地址格式不正确,url=", this.url)
    }
    sendInfo(e, t = {}) {
      let i = new Ue,
        s = new Fe,
        n = new Pe,
        r = new Ve;
      t.isImg ? s.toReport(this.url, e) : t.isFetch ? i.toReport(this.url, e) : t.isXHR ? n.toReport(this.url, e) : t.isNavigator ? r.toReport(this.url, e) : !!(t.isFetch && t.isImg && t.isXHR && t.isNavigator) || r.toReport(this.url, e)
    }
    checkUrl(e) {
      if (!e) return !1;
      return /^[hH][tT][tT][pP]([sS]?):\/\//.test(e)
    }
  }
  var Ze = {
    isStop: !0,
    queues: [],
    add: function(e, t) {
      this.queues.push({
        reportUrl: e,
        data: t
      })
    },
    fire: function() {
      if (!this.queues || 0 === this.queues.length) return void(this.isStop = !0);
      this.isStop = !1;
      let e = this.queues[0];
      e.reportUrl && new Ne(e.reportUrl).report(e.data), this.queues.splice(0, 1), this.fire()
    }
  };
  class Ge {
    constructor(e) {
      this.category = Oe.UNKNOW_ERROR, this.level = De.INFO, this.msg = "", this.url = "", this.line = "", this.col = "", this.errorObj = "", this.reportUrl = e.reportUrl, this.extendsInfo = e.extendsInfo
    }
    recordError() {
      this.handleRecordError(), Ze.isStop && Ze.fire()
    }
    handleRecordError() {
      try {
        if (!this.msg) return;
        if (this.reportUrl && this.url && this.url.toLowerCase().indexOf(this.reportUrl.toLowerCase()) >= 0) return void console.log("统计错误接口异常", this.msg);
        let e = this.handleErrorInfo();
        Ze.add(this.reportUrl, e)
      } catch (e) {
        console.log(e)
      }
    }
    handleErrorInfo() {
      let e = this.getExtendsInfo(),
        t = "",
        i = 0;
      switch (this.category) {
        case Oe.BUSINESS:
          if (!this.msg.textKey) return e = Object.assign({}, e, this.msg), e.l = window.location.href, e;
          t = JSON.stringify(this.msg), i = 1, e.textKey = this.msg.textKey, this.msg.h && (e.h = this.msg.h), this.msg.text && (e.text = this.msg.text);
          break;
        case Oe.PERFORMANCE:
          t = JSON.stringify(this.msg), i = 1e3, e.clientInfo = this.getDeviceInfo();
          break;
        case Oe.AJAX_ERROR:
          t = JSON.stringify(this.msg), i = 100;
          break;
        case Oe.RESOURCE_ERROR:
          const s = {
            msg: this.msg,
            url: encodeURIComponent(this.url)
          };
          t = JSON.stringify(s), i = 101;
          break;
        case Oe.JS_ERROR:
          t = "错误类别: " + this.category + "\r\n", t += "日志信息: " + this.msg + "\r\n", t += "url: " + encodeURIComponent(this.url) + "\r\n", t += "错误行号: " + this.line + "\r\n", t += "错误列号: " + this.col + "\r\n", this.errorObj && this.errorObj.stack && (t += "错误栈: " + this.errorObj.stack + "\r\n"), i = 102;
          break;
        default:
          t = this.msg, i = 106
      }
      return e.logInfo = t, e.l = window.location.pathname, e.action = i, e
    }
    getExtendsInfo() {
      try {
        let t, i = {},
          s = this.extendsInfo || {};
        for (var e in Me.isFunction(s.getDynamic) && (t = s.getDynamic()), Me.isObject(t) && (s = {
            ...s,
            ...t
          }), s) Me.isFunction(s[e]) || (i[e] = s[e]);
        return i
      } catch (e) {
        return console.log("call getExtendsInfo error", e), {}
      }
    }
    getDeviceInfo() {
      try {
        let e = xe.getDeviceInfo();
        return JSON.stringify(e)
      } catch (e) {
        return console.log(e), ""
      }
    }
  }

  function $e(e, t) {
    if (!e) return !0;
    if ("string" == typeof e) {
      if (t.startsWith("/")) {
        if (window.location.hostname.endsWith(e)) return !0
      } else {
        if (new URL(t).hostname.endsWith(e)) return !0
      }
      return !1
    }
    if ("object" == typeof e && e instanceof Array) {
      let i = !1;
      return e.forEach((e => {
        if ("string" == typeof e)
          if (t.startsWith("/")) window.location.hostname.endsWith(e) && (i = !0);
          else {
            new URL(t).hostname.endsWith(e) && (i = !0)
          }
      })), i
    }
    return !1
  }
  class We {
    constructor(e) {
      this.params = e
    }
    handleError(e) {
      switch (e) {
        case Le.FETCH:
          new Qe(this.params).handleError();
          break;
        case Le.DEFAULT:
          new He(this.params).handleError();
          break;
        default:
          new Qe(this.params).handleError(), new He(this.params).handleError()
      }
    }
  }
  class Qe extends Ge {
    constructor(e) {
      super(e), this.ajaxDomain = e.ajaxDomain
    }
    handleError() {
      if (!window.fetch) return;
      this.level = De.WARN, this.category = Oe.AJAX_ERROR;
      let e = this,
        t = window.fetch;
      window.fetch = function() {
        let i = arguments,
          s = (new Date).getTime(),
          n = null;
        return t.apply(this, arguments).then((function(t) {
          try {
            const r = t.headers ? t.headers.get("content-type") : "";
            if ("string" == typeof r && r.includes("application/json")) {
              const r = t.clone();
              n = r.status;
              let a = (new Date).getTime() - s;
              r.json().then((function(t) {
                const r = {
                  fetchStart: s,
                  url: i[0],
                  requestOptions: i[1],
                  status: n,
                  responseBody: t,
                  loadTime: a
                };
                e.msg = r, $e(e.ajaxDomain, r.url) && e.recordError()
              }))
            } else {
              const r = t.clone();
              n = r.status;
              let a = (new Date).getTime() - s;
              r.text().then((function(t) {
                try {
                  t = JSON.parse(t)
                } catch (e) {
                  console.log("JSON.parse 失败")
                }
                const r = {
                  fetchStart: s,
                  url: i[0],
                  requestOptions: i[1],
                  status: n,
                  responseBody: t,
                  loadTime: a
                };
                e.msg = r, $e(e.ajaxDomain, r.url) && e.recordError()
              }))
            }
          } catch (e) {
            console.log("获取响应数据上报异常"), console.log(e)
          }
          return t
        })).catch((function(e) {
          console.log("获取响应数据上报异常"), console.log(e)
        }))
      }
    }
  }
  class He extends Ge {
    constructor(e) {
      super(e), this.ajaxDomain = e.ajaxDomain
    }
    handleError() {
      if (!window.XMLHttpRequest) return;
      this.level = De.WARN, this.category = Oe.AJAX_ERROR;
      let e = this,
        t = XMLHttpRequest.prototype.open,
        i = XMLHttpRequest.prototype.send;
      XMLHttpRequest.prototype.open = function(e, i, s) {
        return this._url = "string" == typeof i ? i : i.href, this._method = e, t.call(this, e, this._url, "boolean" != typeof s || s)
      }, XMLHttpRequest.prototype.send = function() {
        let t = (new Date).getTime();
        return this.addEventListener && this.addEventListener("readystatechange", (function() {
          if (4 === this.readyState)
            if (this.status >= 200 && this.status < 300) {
              let i = (new Date).getTime() - t;
              const s = {
                  method: this._method
                },
                n = {
                  fetchStart: t,
                  url: this._url,
                  requestOptions: s,
                  responseBody: this.response,
                  status: this.status,
                  loadTime: i
                };
              e.msg = n, $e(e.ajaxDomain, n.url) && e.recordError()
            } else {
              let i = (new Date).getTime() - t;
              const s = {
                  method: this._method
                },
                n = {
                  fetchStart: t,
                  url: this._url,
                  requestOptions: s,
                  status: this.status,
                  loadTime: i
                };
              e.msg = n, $e(e.ajaxDomain, n.url) && e.recordError()
            }
        })), i.apply(this, arguments)
      }
    }
  }
  class ze extends Ge {
    constructor(e) {
      super(e)
    }
    handleError() {
      this.registerInfo(), this.registerWarn(), this.registerError()
    }
    registerInfo() {
      let e = this;
      console.tInfo = function() {
        e.handleLog(De.INFO, Oe.CONSOLE_INFO, arguments)
      }
    }
    registerWarn() {
      let e = this;
      console.tWarn = function() {
        e.handleLog(De.WARN, Oe.CONSOLE_WARN, arguments)
      }
    }
    registerError() {
      let e = this;
      console.tError = function() {
        e.handleLog(De.ERROR, Oe.CONSOLE_ERROR, arguments)
      }
    }
    handleLog(e, t, i) {
      try {
        this.level = e;
        let s = [...i];
        this.msg = s.join("\r\n"), this.url = location.href, this.category = t, this.recordError()
      } catch (t) {
        console.log("console统计错误异常", e, t)
      }
    }
  }! function() {
    window.console || (window.console = {});
    ["tInfo", "tWarn", "tError"].forEach(((e, t) => {
      console[e] || (console[e] = function() {})
    }))
  }();
  class je extends Ge {
    constructor(e) {
      super(e)
    }
    handleError() {
      window.onerror = (e, t, i, s, n) => {
        console.log("monitor onerror");
        try {
          this.level = De.WARN, this.category = Oe.JS_ERROR, this.msg = e, this.url = t, this.line = i, this.col = s, this.errorObj = n, this.recordError()
        } catch (n) {
          console.log("js错误异常", n)
        }
      }
    }
  }
  class qe extends Ge {
    constructor(e) {
      super(e)
    }
    handleError() {
      window.addEventListener("unhandledrejection", (e => {
        try {
          if (!e || !e.reason) return;
          e.reason.config && e.reason.config.url && (this.url = e.reason.config.url), this.level = De.WARN, this.category = Oe.PROMISE_ERROR, this.msg = e.reason, this.recordError()
        } catch (e) {
          console.log(e)
        }
      }), !0)
    }
  }
  class Ye extends Ge {
    constructor(e) {
      super(e)
    }
    handleError() {
      window.addEventListener("error", (e => {
        console.log("monitor addEventListener error");
        try {
          if (!e) return;
          this.category = Oe.RESOURCE_ERROR;
          let t = e.target || e.srcElement;
          if (!(t instanceof HTMLScriptElement || t instanceof HTMLLinkElement || t instanceof HTMLImageElement)) return;
          this.level = "IMG" === t.tagName.toUpperCase() ? De.WARN : De.ERROR, this.msg = "加载 " + t.tagName + " 资源错误", this.url = t.src || t.href, this.errorObj = t, this.recordError()
        } catch (e) {
          console.log("资源加载收集异常", e)
        }
      }), !0)
    }
  }
  var Xe, Ke, Je, et, tt = -1,
    it = function(e) {
      addEventListener("pageshow", (function(t) {
        t.persisted && (tt = t.timeStamp, e(t))
      }), !0)
    },
    st = function() {
      return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
    },
    nt = function() {
      var e = st();
      return e && e.activationStart || 0
    },
    rt = function(e, t) {
      var i = st(),
        s = "navigate";
      return tt >= 0 ? s = "back-forward-cache" : i && (document.prerendering || nt() > 0 ? s = "prerender" : document.wasDiscarded ? s = "restore" : i.type && (s = i.type.replace(/_/g, "-"))), {
        name: e,
        value: void 0 === t ? -1 : t,
        rating: "good",
        delta: 0,
        entries: [],
        id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
        navigationType: s
      }
    },
    at = function(e, t, i) {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
          var s = new PerformanceObserver((function(e) {
            Promise.resolve().then((function() {
              t(e.getEntries())
            }))
          }));
          return s.observe(Object.assign({
            type: e,
            buffered: !0
          }, i || {})), s
        }
      } catch (e) {}
    },
    ot = function(e, t, i, s) {
      var n, r;
      return function(a) {
        t.value >= 0 && (a || s) && ((r = t.value - (n || 0)) || void 0 === n) && (n = t.value, t.delta = r, t.rating = function(e, t) {
          return e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good"
        }(t.value, i), e(t))
      }
    },
    dt = function(e) {
      requestAnimationFrame((function() {
        return requestAnimationFrame((function() {
          return e()
        }))
      }))
    },
    lt = function(e) {
      var t = function(t) {
        "pagehide" !== t.type && "hidden" !== document.visibilityState || e(t)
      };
      addEventListener("visibilitychange", t, !0), addEventListener("pagehide", t, !0)
    },
    ht = function(e) {
      var t = !1;
      return function(i) {
        t || (e(i), t = !0)
      }
    },
    ct = -1,
    ut = function() {
      return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
    },
    At = function(e) {
      "hidden" === document.visibilityState && ct > -1 && (ct = "visibilitychange" === e.type ? e.timeStamp : 0, mt())
    },
    _t = function() {
      addEventListener("visibilitychange", At, !0), addEventListener("prerenderingchange", At, !0)
    },
    mt = function() {
      removeEventListener("visibilitychange", At, !0), removeEventListener("prerenderingchange", At, !0)
    },
    pt = function() {
      return ct < 0 && (ct = ut(), _t(), it((function() {
        setTimeout((function() {
          ct = ut(), _t()
        }), 0)
      }))), {
        get firstHiddenTime() {
          return ct
        }
      }
    },
    ft = function(e) {
      document.prerendering ? addEventListener("prerenderingchange", (function() {
        return e()
      }), !0) : e()
    },
    gt = [1800, 3e3],
    vt = function(e, t) {
      t = t || {}, ft((function() {
        var i, s = pt(),
          n = rt("FCP"),
          r = at("paint", (function(e) {
            e.forEach((function(e) {
              "first-contentful-paint" === e.name && (r.disconnect(), e.startTime < s.firstHiddenTime && (n.value = Math.max(e.startTime - nt(), 0), n.entries.push(e), i(!0)))
            }))
          }));
        r && (i = ot(e, n, gt, t.reportAllChanges), it((function(s) {
          n = rt("FCP"), i = ot(e, n, gt, t.reportAllChanges), dt((function() {
            n.value = performance.now() - s.timeStamp, i(!0)
          }))
        })))
      }))
    },
    yt = [.1, .25],
    Et = {
      passive: !0,
      capture: !0
    },
    St = new Date,
    bt = function(e, t) {
      Xe || (Xe = t, Ke = e, Je = new Date, Rt(removeEventListener), wt())
    },
    wt = function() {
      if (Ke >= 0 && Ke < Je - St) {
        var e = {
          entryType: "first-input",
          name: Xe.type,
          target: Xe.target,
          cancelable: Xe.cancelable,
          startTime: Xe.timeStamp,
          processingStart: Xe.timeStamp + Ke
        };
        et.forEach((function(t) {
          t(e)
        })), et = []
      }
    },
    Tt = function(e) {
      if (e.cancelable) {
        var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
        "pointerdown" == e.type ? function(e, t) {
          var i = function() {
              bt(e, t), n()
            },
            s = function() {
              n()
            },
            n = function() {
              removeEventListener("pointerup", i, Et), removeEventListener("pointercancel", s, Et)
            };
          addEventListener("pointerup", i, Et), addEventListener("pointercancel", s, Et)
        }(t, e) : bt(t, e)
      }
    },
    Rt = function(e) {
      ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
        return e(t, Tt, Et)
      }))
    },
    Ct = [100, 300],
    Bt = [2500, 4e3],
    kt = {},
    It = [800, 1800],
    Ot = function e(t) {
      document.prerendering ? ft((function() {
        return e(t)
      })) : "complete" !== document.readyState ? addEventListener("load", (function() {
        return e(t)
      }), !0) : setTimeout(t, 0)
    },
    Dt = function(e, t) {
      t = t || {};
      var i = rt("TTFB"),
        s = ot(e, i, It, t.reportAllChanges);
      Ot((function() {
        var n = st();
        if (n) {
          var r = n.responseStart;
          if (r <= 0 || r > performance.now()) return;
          i.value = Math.max(r - nt(), 0), i.entries = [n], s(!0), it((function() {
            i = rt("TTFB", 0), (s = ot(e, i, It, t.reportAllChanges))(!0)
          }))
        }
      }))
    };
  class Lt extends Ge {
    constructor(e) {
      super(e || {}), this.category = Oe.PERFORMANCE, this.reportUrl = e.reportUrl || "", this.performanceData = {}, this.saveData = this.saveData.bind(this), vt(this.saveData),
        function(e, t) {
          t = t || {}, ft((function() {
            var i, s = pt(),
              n = rt("FID"),
              r = function(e) {
                e.startTime < s.firstHiddenTime && (n.value = e.processingStart - e.startTime, n.entries.push(e), i(!0))
              },
              a = function(e) {
                e.forEach(r)
              },
              o = at("first-input", a);
            i = ot(e, n, Ct, t.reportAllChanges), o && lt(ht((function() {
              a(o.takeRecords()), o.disconnect()
            }))), o && it((function() {
              var s;
              n = rt("FID"), i = ot(e, n, Ct, t.reportAllChanges), et = [], Ke = -1, Xe = null, Rt(addEventListener), s = r, et.push(s), wt()
            }))
          }))
        }(this.saveData),
        function(e, t) {
          t = t || {}, ft((function() {
            var i, s = pt(),
              n = rt("LCP"),
              r = function(e) {
                var t = e[e.length - 1];
                t && t.startTime < s.firstHiddenTime && (n.value = Math.max(t.startTime - nt(), 0), n.entries = [t], i())
              },
              a = at("largest-contentful-paint", r);
            if (a) {
              i = ot(e, n, Bt, t.reportAllChanges);
              var o = ht((function() {
                kt[n.id] || (r(a.takeRecords()), a.disconnect(), kt[n.id] = !0, i(!0))
              }));
              ["keydown", "click"].forEach((function(e) {
                addEventListener(e, o, !0)
              })), lt(o), it((function(s) {
                n = rt("LCP"), i = ot(e, n, Bt, t.reportAllChanges), dt((function() {
                  n.value = performance.now() - s.timeStamp, kt[n.id] = !0, i(!0)
                }))
              }))
            }
          }))
        }(this.saveData),
        function(e, t) {
          t = t || {}, vt(ht((function() {
            var i, s = rt("CLS", 0),
              n = 0,
              r = [],
              a = function(e) {
                e.forEach((function(e) {
                  if (!e.hadRecentInput) {
                    var t = r[0],
                      i = r[r.length - 1];
                    n && e.startTime - i.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (n += e.value, r.push(e)) : (n = e.value, r = [e])
                  }
                })), n > s.value && (s.value = n, s.entries = r, i())
              },
              o = at("layout-shift", a);
            o && (i = ot(e, s, yt, t.reportAllChanges), lt((function() {
              a(o.takeRecords()), i(!0)
            })), it((function() {
              n = 0, s = rt("CLS", 0), i = ot(e, s, yt, t.reportAllChanges), dt((function() {
                return i()
              }))
            })), setTimeout(i, 0))
          })))
        }(this.saveData), Dt(this.saveData)
    }
    saveData(e) {
      this.performanceData[e.name] = e.value, "LCP" === e.name && this.record(this.performanceData)
    }
    record(e) {
      this.msg = e, this.recordError()
    }
    reset
  }
  const xt = "common_a",
    Mt = /((<(A|B|BUTTON|DIV|H1|H2|H3|H4|H5|H6|P|IMG|SPAN|TABLE|TD|TEXTAREA|VIDEO)([^<>])*>)([^<>])+(<\/(A|B|BUTTON|DIV|H1|H2|H3|H4|H5|H6|P|IMG|SPAN|TABLE|TD|TEXTAREA|VIDEO)>)|(<(IMG|VIDEO)(.)+>))/i;

  function Pt(e) {
    var t = e.nodeName,
      i = "";
    if (e.hasAttribute("data-monitor") && e.getAttribute("data-monitor")) return `${i=e.getAttribute("data-monitor")}`.slice(0, 20);
    var s = e.outerHTML.match(Mt);
    if (s && s.length > 0)
      if ("IMG" === t) i = e.getAttribute("alt");
      else i = (i = s[0].match(/>[^<>]+<\//) ? s[0].match(/>[^<>]+<\//)[0] : "").replace(/[^A-Za-z0-9\u4e00-\u9fa5]/g, "");
    return `${i}`.slice(0, 20)
  }
  class Ut extends Ge {
    constructor(e) {
      super(e || {}), this.category = Oe.BUSINESS, this.reportUrl = e.reportUrl || "";
      const t = e.keyName || "textkey",
        i = this;
      window.addEventListener("click", (function(e) {
        let s = e.target;
        if (!s) return !1;
        let n = s.getAttribute(t),
          r = s.getAttribute("link") || s.getAttribute("href");
        if (n || r) {
          const e = {
            textKey: n || xt
          };
          r && (e.h = r);
          const t = Pt(s);
          t && (e.text = t), i.record(e)
        } else {
          for (; !n && !r && s.parentNode;) s = s.parentNode, s.getAttribute && (n = s.getAttribute(t), r = s.getAttribute("link") || s.getAttribute("href"));
          if (n || r) {
            const e = {
              textKey: n || xt
            };
            r && (e.h = r);
            const t = Pt(s);
            t && (e.text = t), i.record(e)
          }
        }
      }))
    }
    record(e) {
      this.msg = e, this.recordError()
    }
  }
  class Ft extends Ge {
    constructor(e) {
      super(e || {}), this.category = Oe.BUSINESS, this.reportUrl = e.reportUrl || ""
    }
    record(e) {
      this.msg = e, this.recordError()
    }
  }
  Date.prototype.format = function(e) {
    let t = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12,
        "H+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
      },
      i = {
        0: "/u65e5",
        1: "/u4e00",
        2: "/u4e8c",
        3: "/u4e09",
        4: "/u56db",
        5: "/u4e94",
        6: "/u516d"
      };
    /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))), /(E+)/.test(e) && (e = e.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468" : "") + i[this.getDay() + ""]));
    for (let i in t) new RegExp("(" + i + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[i] : ("00" + t[i]).substr(("" + t[i]).length)));
    return e
  };
  class Vt {
    constructor(e) {
      this.jsError = !0, this.promiseError = !0, this.resourceError = !0, this.ajaxError = !0, this.ajaxDomain = null, this.isReportHref = !1, this.consoleError = !1, e = e || {}, this.jsError = !(!1 === e.jsError), this.promiseError = !(!1 === e.promiseError), this.resourceError = !(!1 === e.resourceError), this.consoleError = !0 === e.consoleError, this.ajaxError = !(!1 === e.ajaxError), this.ajaxDomain = e.ajaxDomain || this.ajaxDomain, this.isReportHref = e.isReportHref || this.isReportHref, this.business = !(!1 === e.business), this.reportUrl = e.url, this.performace = !(!1 === e.performace), this.extendsInfo = e.extendsInfo || {};
      let t = {
        reportUrl: this.reportUrl,
        extendsInfo: this.extendsInfo
      };
      if (this.jsError && new je(t).handleError(), this.promiseError && new qe(t).handleError(), this.resourceError && new Ye(t).handleError(), this.ajaxError) {
        let e = Object.assign({}, t, {
          ajaxDomain: this.ajaxDomain
        });
        new We(e).handleError()
      }
      this.consoleError && new ze(t).handleError(), this.performace && new Lt(t), this.business && new Ut(t), this.manual = new Ft(t)
    }
    report(e) {
      return this.manual && this.manual.record(e), this
    }
  }
  const Nt = {
      h264: 1,
      h265: 2,
      h266: 4,
      vp8: 8,
      vp9: 16,
      av1: 32
    },
    Zt = ["h264", "h265"],
    Gt = () => Zt.reduce(((e, t) => e + (Nt[t] || 0)), 0),
    $t = e => {
      const t = e.split("?"),
        i = new URLSearchParams(t[1]);
      return i.delete("vc"), t[0] + "?" + i.toString()
    };

  function Wt(e) {
    if (/http[s]?:\/\/|ws[s]?:\/\//.test(e)) {
      const t = e.split("?")[1],
        i = t ? t.split("&") : [],
        s = {};
      for (let e = 0; e < i.length; ++e) {
        const [t, n] = i[e].split("=");
        s[t] = s[t] || decodeURIComponent(n)
      }
      try {
        const t = e.split(".flv")[0].split("/"),
          i = t[t.length - 1].split("_");
        t.length > 0 && i[0] && i[1] && i[2] && (s.serial = i[0], s.no = i[1], s.bitstream = i[2])
      } catch (e) {}
      return s
    }
    return {}
  }
  class Qt {
    static initMonitor() {
      this.monitor = new Vt({
        url: "https://log.ys7.com/statistics.do/opensdk_ezuikit",
        jsError: !1,
        promiseError: !1,
        resourceError: !1,
        extendsInfo: {
          getDynamic: () => ({})
        }
      })
    }
    static report(e, t = {}) {
      this.monitor || Qt.initMonitor();
      try {
        const i = Wt(Qt.url);
        this.monitor.report({
          protocol: "flv",
          url: Qt.url,
          st: (new Date).getTime(),
          v: "1.0.0",
          serial: i.serial,
          no: i.no,
          action: e,
          logInfo: t
        })
      } catch (e) {}
    }
  }
  e(Qt, "vc", Gt()), e(Qt, "url", "");
  class Ht extends Ie {
    constructor(e, t) {
      super(e, t, Ae), this._opt.useMSE = !1, this._opt.hasAudio && (this.audio = new me(this)), this.decoderWorker = new ve(this), this.stream = null, this.demux = null, this._lastVolume = null, ee() && (this.keepScreenOn = new Re(this))
    }
    destroy() {
      this._loading = !1, this._playing = !1, this._hasLoaded = !1, this._lastVolume = null, this._times = {
        playInitStart: "",
        playStart: "",
        streamStart: "",
        streamResponse: "",
        demuxStart: "",
        decodeStart: "",
        videoStart: "",
        playTimestamp: "",
        streamTimestamp: "",
        streamResponseTimestamp: "",
        demuxTimestamp: "",
        decodeTimestamp: "",
        videoTimestamp: "",
        allTimestamp: ""
      }, this.decoderWorker && (this.decoderWorker.destroy(), this.decoderWorker = null), this.video && (this.video.destroy(), this.video = null), this.audio && (this.audio.destroy(), this.audio = null), this.stream && (this.stream.destroy(), this.stream = null), this.demux && (this.demux.destroy(), this.demux = null), this.events && (this.events.destroy(), this.events = null), this.clearCheckHeartTimeout(), this.clearCheckLoadingTimeout(), this.clearStatsInterval(), this.releaseWakeLock(), this.keepScreenOn = null, this.resetStats(), this._audioTimestamp = 0, this._videoTimestamp = 0, this.emit("destroy"), this.off(), this.debug.log("play", "destroy end")
    }
    set fullscreen(e) {
      ee() && this._opt.useWebFullScreen ? (this.emit(B.webFullscreen, e), setTimeout((() => {
        this.updateOption({
          rotate: e ? 270 : 0
        }), this.resize()
      }), 10)) : this.emit(B.fullscreen, e)
    }
    get fullscreen() {
      return te() || this.webFullscreen
    }
    set webFullscreen(e) {
      this.emit(B.webFullscreen, e)
    }
    get webFullscreen() {
      return this.$container.classList.contains("flv-fullscreen-web")
    }
    set loaded(e) {
      this._hasLoaded = e
    }
    get loaded() {
      return this._hasLoaded
    }
    set playing(e) {
      e && (this.loading = !1), this.playing !== e && (this._playing = e, this.emit(B.playing, e), this.emit(B.volumechange, this.volume), e ? this.emit(B.play) : this.emit(B.pause))
    }
    get playing() {
      return this._playing
    }
    get volume() {
      return this.audio && this.audio.volume || 0
    }
    set volume(e) {
      e !== this.volume && (this.audio && this.audio.setVolume(e), this._lastVolume = e)
    }
    get lastVolume() {
      return this._lastVolume
    }
    set loading(e) {
      this.loading !== e && (this._loading = e, this.emit(B.loading, this._loading))
    }
    get loading() {
      return this._loading
    }
    set audioTimestamp(e) {
      null !== e && (this._audioTimestamp = e)
    }
    get audioTimestamp() {
      return this._audioTimestamp
    }
    set videoTimestamp(e) {
      null !== e && (this._videoTimestamp = e, this._opt.useWCS || this._opt.useMSE || this.audioTimestamp && this.videoTimestamp && this.audio && this.audio.emit(B.videoSyncAudio, {
        audioTimestamp: this.audioTimestamp,
        videoTimestamp: this.videoTimestamp,
        diff: this.audioTimestamp - this.videoTimestamp
      }))
    }
    get videoTimestamp() {
      return this._videoTimestamp
    }
    get isDebug() {
      return !0 === this._opt.debug
    }
    init() {
      return new Promise(((e, t) => {
        this.stream || (this.stream = new ge(this)), this.audio || this._opt.hasAudio && (this.audio = new me(this)), this.demux || (this.demux = new be(this)), this.decoderWorker ? e() : (this.decoderWorker = new ve(this), this.once(B.decoderWorkerInit, (() => {
          e()
        })))
      }))
    }
    play(e) {
      return this._opt = Object.assign({}, this._opt, e || {}), this.clearCheckHeartTimeout(), new Promise(((e, t) => {
        if (!this._opt.url) return t();
        this.loading = !0, this.playing = !1, this._times.playInitStart = Y(), this.init().then((() => {
          this._times.playStart = Y(), this._opt.isNotMute && this.mute(!1), this.enableWakeLock();
          try {
            this.stream.fetchStream(this._opt.url, this._opt)
          } catch (e) {}
          this.checkLoadingTimeout(), this.stream.once(I.fetchError, (e => {
            t(e)
          })), this.stream.once(I.websocketError, (e => {
            t(e)
          })), this.stream.once(B.streamEnd, (() => {
            t()
          })), this.stream.once(B.streamSuccess, (() => {
            e(), this._times.streamResponse = Y(), this.video.play(), this.checkStatsInterval()
          }))
        })).catch((e => {
          t(e)
        })), this._resumeAudioAfterPause()
      }))
    }
    close() {
      return new Promise((e => {
        this._close().then((() => {
          this.video && this.video.clearView(), e()
        }))
      }))
    }
    _resumeAudioAfterPause() {
      this.lastVolume && (this.volume = this.lastVolume)
    }
    _close() {
      return new Promise((e => {
        this.stream && (this.stream.destroy(), this.stream = null), this.demux && (this.demux.destroy(), this.demux = null), this.decoderWorker && (this.decoderWorker.destroy(), this.decoderWorker = null), this.audio && (this.audio.destroy(), this.audio = null), this.clearCheckHeartTimeout(), this.clearCheckLoadingTimeout(), this.clearStatsInterval(), this.playing = !1, this.loading = !1, this.video && (this.video.resetInit(), this.video.pause(!0)), this.releaseWakeLock(), this.resetStats(), this._audioTimestamp = 0, this._videoTimestamp = 0, this._times = {
          playInitStart: "",
          playStart: "",
          streamStart: "",
          streamResponse: "",
          demuxStart: "",
          decodeStart: "",
          videoStart: "",
          playTimestamp: "",
          streamTimestamp: "",
          streamResponseTimestamp: "",
          demuxTimestamp: "",
          decodeTimestamp: "",
          videoTimestamp: "",
          allTimestamp: ""
        }, setTimeout((() => {
          e()
        }), 0)
      }))
    }
    pause(e = !1) {
      return e ? this.close() : this._close()
    }
    mute(e) {
      this.volume = e ? 0 : .5, this.audio && this.audio.mute(e)
    }
    resize() {
      this.video.resize()
    }
    _onlyMseOrWcsVideo() {
      return !1 === this._opt.hasAudio && (this._opt.useMSE || this._opt.useWCS && !this._opt.useOffscreen)
    }
    checkHeart() {
      this.clearCheckHeartTimeout(), this.checkHeartTimeout()
    }
    checkHeartTimeout() {
      this._checkHeartTimeout && this.clearCheckHeartTimeout(), this._checkHeartTimeout = setTimeout((() => {
        if (this._checkHeartTimeout && this.clearCheckHeartTimeout(), this.playing) {
          if (0 !== this._stats.fps) return;
          this.pause().then((() => {
            this.emit(B.timeout, B.delayTimeout), this.emit(B.delayTimeout)
          }))
        }
      }), 1e3 * this._opt.heartTimeout)
    }
    checkStatsInterval() {
      this._checkStatsInterval = setInterval((() => {
        this.updateStats()
      }), 1e3)
    }
    clearCheckHeartTimeout() {
      this._checkHeartTimeout && (clearTimeout(this._checkHeartTimeout), this._checkHeartTimeout = null)
    }
    checkLoadingTimeout() {
      this._checkLoadingTimeout = setTimeout((() => {
        this.playing || (this.clearCheckLoadingTimeout(), this.pause().then((() => {
          this.emit(B.timeout, B.loadingTimeout), this.emit(B.loadingTimeout)
        })).catch((() => {})))
      }), 1e3 * this._opt.loadingTimeout)
    }
    clearCheckLoadingTimeout() {
      this._checkLoadingTimeout && (clearTimeout(this._checkLoadingTimeout), this._checkLoadingTimeout = null)
    }
    clearStatsInterval() {
      this._checkStatsInterval && (clearInterval(this._checkStatsInterval), this._checkStatsInterval = null)
    }
    handleRender() {
      this.loading && (this.emit(B.start), this.loading = !1), this.clearCheckLoadingTimeout(), this.playing || (this.playing = !0), this.checkHeart()
    }
    updateStats(e) {
      e = e || {}, this._startBpsTime || (this._startBpsTime = Y()), se(e.ts) && (this._stats.ts = e.ts), se(e.buf) && (this._stats.buf = e.buf), e.fps && (this._stats.fps += 1), e.abps && (this._stats.abps += e.abps), e.vbps && (this._stats.vbps += e.vbps);
      const t = Y();
      t - this._startBpsTime < 1e3 || (this.emit(B.stats, this._stats), this._stats.fps = 0, this._stats.abps = 0, this._stats.vbps = 0, this._startBpsTime = t)
    }
    resetStats() {
      this._startBpsTime = null, this._stats = {
        buf: 0,
        fps: 0,
        abps: 0,
        vbps: 0,
        ts: 0
      }
    }
    enableWakeLock() {
      this._opt.keepScreenOn && this.keepScreenOn && this.keepScreenOn.enable()
    }
    releaseWakeLock() {
      this._opt.keepScreenOn && this.keepScreenOn && this.keepScreenOn.disable()
    }
    handlePlayToRenderTimes() {
      const e = this._times;
      e.playTimestamp = e.playStart - e.playInitStart, e.streamTimestamp = e.streamStart - e.playStart, e.streamResponseTimestamp = e.streamResponse - e.streamStart, e.demuxTimestamp = e.demuxStart - e.streamResponse, e.decodeTimestamp = e.decodeStart - e.demuxStart, e.videoTimestamp = e.videoStart - e.decodeStart, e.allTimestamp = e.videoStart - e.playInitStart, this.emit(B.playToRenderTimes, e)
    }
    getOption() {
      return this._opt
    }
    emitError(e, t = "") {
      Qt.report(51, {
        event: e,
        value: t
      }), this.emit(B.error, e, t), this.emit(e, t)
    }
  }
  var zt = {
    exports: {}
  };
  ! function(e, t) {
    ! function(t, i) {
      e.exports = i()
    }(globalThis, (() => (() => {
      var e = {
          99: e => {
            var t, i = "object" == typeof Reflect ? Reflect : null,
              s = i && "function" == typeof i.apply ? i.apply : function(e, t, i) {
                return Function.prototype.apply.call(e, t, i)
              };
            t = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function(e) {
              return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
            } : function(e) {
              return Object.getOwnPropertyNames(e)
            };
            var n = Number.isNaN || function(e) {
              return e != e
            };

            function r() {
              r.init.call(this)
            }
            e.exports = r, e.exports.once = function(e, t) {
              return new Promise((function(i, s) {
                function n(i) {
                  e.removeListener(t, r), s(i)
                }

                function r() {
                  "function" == typeof e.removeListener && e.removeListener("error", n), i([].slice.call(arguments))
                }
                m(e, t, r, {
                  once: !0
                }), "error" !== t && function(e, t, i) {
                  "function" == typeof e.on && m(e, "error", t, {
                    once: !0
                  })
                }(e, n)
              }))
            }, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._eventsCount = 0, r.prototype._maxListeners = void 0;
            var a = 10;

            function o(e) {
              if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
            }

            function d(e) {
              return void 0 === e._maxListeners ? r.defaultMaxListeners : e._maxListeners
            }

            function l(e, t, i, s) {
              var n, r, a;
              if (o(i), void 0 === (r = e._events) ? (r = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== r.newListener && (e.emit("newListener", t, i.listener ? i.listener : i), r = e._events), a = r[t]), void 0 === a) a = r[t] = i, ++e._eventsCount;
              else if ("function" == typeof a ? a = r[t] = s ? [i, a] : [a, i] : s ? a.unshift(i) : a.push(i), (n = d(e)) > 0 && a.length > n && !a.warned) {
                a.warned = !0;
                var l = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                l.name = "MaxListenersExceededWarning", l.emitter = e, l.type = t, l.count = a.length
              }
              return e
            }

            function h() {
              if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }

            function c(e, t, i) {
              var s = {
                  fired: !1,
                  wrapFn: void 0,
                  target: e,
                  type: t,
                  listener: i
                },
                n = h.bind(s);
              return n.listener = i, s.wrapFn = n, n
            }

            function u(e, t, i) {
              var s = e._events;
              if (void 0 === s) return [];
              var n = s[t];
              return void 0 === n ? [] : "function" == typeof n ? i ? [n.listener || n] : [n] : i ? function(e) {
                for (var t = new Array(e.length), i = 0; i < t.length; ++i) t[i] = e[i].listener || e[i];
                return t
              }(n) : _(n, n.length)
            }

            function A(e) {
              var t = this._events;
              if (void 0 !== t) {
                var i = t[e];
                if ("function" == typeof i) return 1;
                if (void 0 !== i) return i.length
              }
              return 0
            }

            function _(e, t) {
              for (var i = new Array(t), s = 0; s < t; ++s) i[s] = e[s];
              return i
            }

            function m(e, t, i, s) {
              if ("function" == typeof e.on) s.once ? e.once(t, i) : e.on(t, i);
              else {
                if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
                e.addEventListener(t, (function n(r) {
                  s.once && e.removeEventListener(t, n), i(r)
                }))
              }
            }
            Object.defineProperty(r, "defaultMaxListeners", {
              enumerable: !0,
              get: function() {
                return a
              },
              set: function(e) {
                if ("number" != typeof e || e < 0 || n(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                a = e
              }
            }), r.init = function() {
              void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, r.prototype.setMaxListeners = function(e) {
              if ("number" != typeof e || e < 0 || n(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
              return this._maxListeners = e, this
            }, r.prototype.getMaxListeners = function() {
              return d(this)
            }, r.prototype.emit = function(e) {
              for (var t = [], i = 1; i < arguments.length; i++) t.push(arguments[i]);
              var n = "error" === e,
                r = this._events;
              if (void 0 !== r) n = n && void 0 === r.error;
              else if (!n) return !1;
              if (n) {
                var a;
                if (t.length > 0 && (a = t[0]), a instanceof Error) throw a;
                var o = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
                throw o.context = a, o
              }
              var d = r[e];
              if (void 0 === d) return !1;
              if ("function" == typeof d) s(d, this, t);
              else {
                var l = d.length,
                  h = _(d, l);
                for (i = 0; i < l; ++i) s(h[i], this, t)
              }
              return !0
            }, r.prototype.addListener = function(e, t) {
              return l(this, e, t, !1)
            }, r.prototype.on = r.prototype.addListener, r.prototype.prependListener = function(e, t) {
              return l(this, e, t, !0)
            }, r.prototype.once = function(e, t) {
              return o(t), this.on(e, c(this, e, t)), this
            }, r.prototype.prependOnceListener = function(e, t) {
              return o(t), this.prependListener(e, c(this, e, t)), this
            }, r.prototype.removeListener = function(e, t) {
              var i, s, n, r, a;
              if (o(t), void 0 === (s = this._events)) return this;
              if (void 0 === (i = s[e])) return this;
              if (i === t || i.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete s[e], s.removeListener && this.emit("removeListener", e, i.listener || t));
              else if ("function" != typeof i) {
                for (n = -1, r = i.length - 1; r >= 0; r--)
                  if (i[r] === t || i[r].listener === t) {
                    a = i[r].listener, n = r;
                    break
                  } if (n < 0) return this;
                0 === n ? i.shift() : function(e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop()
                }(i, n), 1 === i.length && (s[e] = i[0]), void 0 !== s.removeListener && this.emit("removeListener", e, a || t)
              }
              return this
            }, r.prototype.off = r.prototype.removeListener, r.prototype.removeAllListeners = function(e) {
              var t, i, s;
              if (void 0 === (i = this._events)) return this;
              if (void 0 === i.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== i[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete i[e]), this;
              if (0 === arguments.length) {
                var n, r = Object.keys(i);
                for (s = 0; s < r.length; ++s) "removeListener" !== (n = r[s]) && this.removeAllListeners(n);
                return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
              }
              if ("function" == typeof(t = i[e])) this.removeListener(e, t);
              else if (void 0 !== t)
                for (s = t.length - 1; s >= 0; s--) this.removeListener(e, t[s]);
              return this
            }, r.prototype.listeners = function(e) {
              return u(this, e, !0)
            }, r.prototype.rawListeners = function(e) {
              return u(this, e, !1)
            }, r.listenerCount = function(e, t) {
              return "function" == typeof e.listenerCount ? e.listenerCount(t) : A.call(e, t)
            }, r.prototype.listenerCount = A, r.prototype.eventNames = function() {
              return this._eventsCount > 0 ? t(this._events) : []
            }
          },
          994: (e, t, i) => {
            i.d(t, {
              Z: () => s
            });
            const s = class {
              constructor() {
                this.mimeType = null, this.duration = null, this.hasAudio = null, this.hasVideo = null, this.audioCodec = null, this.videoCodec = null, this.audioDataRate = null, this.videoDataRate = null, this.audioSampleRate = null, this.audioChannelCount = null, this.width = null, this.height = null, this.fps = null, this.profile = null, this.level = null, this.refFrames = null, this.chromaFormat = null, this.sarNum = null, this.sarDen = null, this.metadata = null, this.segments = null, this.segmentCount = null, this.hasKeyframesIndex = null, this.keyframesIndex = null
              }
              isComplete() {
                return !this.hasAudio || this.hasAudio && null != this.audioCodec && null != this.audioSampleRate && this.audioChannelCount, !this.hasVideo || this.hasVideo && null != this.videoCodec && null != this.width && null != this.height && null != this.fps && null != this.profile && null != this.level && null != this.refFrames && null != this.chromaFormat && null != this.sarNum && this.sarDen, null != this.mimeType
              }
              isSeekable() {
                return this.hasKeyframesIndex
              }
              getNearestKeyframe(e) {
                if (null == this.keyframesIndex) return null;
                const t = this.keyframesIndex,
                  i = this._search(t.times, e);
                return {
                  index: i,
                  milliseconds: t.times[i],
                  fileposition: t.filepositions[i]
                }
              }
              _search(e, t) {
                let i = 0;
                const s = e.length - 1;
                let n = 0,
                  r = 0,
                  a = s;
                for (t < e[0] && (i = 0, r = a + 1); r <= a;) {
                  if (n = r + Math.floor((a - r) / 2), n === s || t >= e[n] && t < e[n + 1]) {
                    i = n;
                    break
                  }
                  e[n] < t ? r = n + 1 : a = n - 1
                }
                return i
              }
            }
          },
          68: (e, t, i) => {
            i.d(t, {
              J1: () => a,
              Vn: () => r,
              Wk: () => s,
              Yy: () => n
            });
            class s {
              constructor(e, t, i, s, n) {
                this.dts = e, this.pts = t, this.duration = i, this.originalDts = s, this.isSyncPoint = n, this.fileposition = null
              }
            }
            class n {
              constructor() {
                this.beginDts = 0, this.endDts = 0, this.beginPts = 0, this.endPts = 0, this.originalBeginDts = 0, this.originalEndDts = 0, this.syncPoints = [], this.firstSample = null, this.lastSample = null
              }
              appendSyncPoint(e) {
                e.isSyncPoint = !0, this.syncPoints.push(e)
              }
            }
            class r {
              constructor() {
                this._list = []
              }
              clear() {
                this._list = []
              }
              appendArray(e) {
                const t = this._list;
                0 !== e.length && (t.length > 0 && e[0].originalDts < t[t.length - 1].originalDts && this.clear(), Array.prototype.push.apply(t, e))
              }
              getLastSyncPointBeforeDts(e) {
                if (0 === this._list.length) return null;
                const t = this._list;
                let i = 0;
                const s = t.length - 1;
                let n = 0,
                  r = 0,
                  a = s;
                for (e < t[0].dts && (i = 0, r = a + 1); r <= a;) {
                  if (n = r + Math.floor((a - r) / 2), n === s || e >= t[n].dts && e < t[n + 1].dts) {
                    i = n;
                    break
                  }
                  t[n].dts < e ? r = n + 1 : a = n - 1
                }
                return this._list[i]
              }
            }
            class a {
              constructor(e) {
                this._type = e, this._list = [], this._lastAppendLocation = -1
              }
              get type() {
                return this._type
              }
              get length() {
                return this._list.length
              }
              isEmpty() {
                return 0 === this._list.length
              }
              clear() {
                this._list = [], this._lastAppendLocation = -1
              }
              _searchNearestSegmentBefore(e) {
                var t;
                const i = this._list;
                if (0 === i.length) return -2;
                const s = i.length - 1;
                let n = 0,
                  r = 0,
                  a = s,
                  o = 0;
                if (e < i[0].originalBeginDts) return o = -1, o;
                for (; r <= a;) {
                  if (n = r + Math.floor((a - r) / 2), n === s || e > ((null === (t = i[n].lastSample) || void 0 === t ? void 0 : t.originalDts) || 0) && e < i[n + 1].originalBeginDts) {
                    o = n;
                    break
                  }
                  i[n].originalBeginDts < e ? r = n + 1 : a = n - 1
                }
                return o
              }
              _searchNearestSegmentAfter(e) {
                return this._searchNearestSegmentBefore(e) + 1
              }
              append(e) {
                var t, i;
                const s = this._list,
                  n = e,
                  r = this._lastAppendLocation;
                let a = 0; - 1 !== r && r < s.length && n.originalBeginDts >= ((null === (i = null === (t = s[r]) || void 0 === t ? void 0 : t.lastSample) || void 0 === i ? void 0 : i.originalDts) || 0) && (r === s.length - 1 || r < s.length - 1 && n.originalBeginDts < s[r + 1].originalBeginDts) ? a = r + 1 : s.length > 0 && (a = this._searchNearestSegmentBefore(n.originalBeginDts) + 1), this._lastAppendLocation = a, this._list.splice(a, 0, n)
              }
              getLastSegmentBefore(e) {
                const t = this._searchNearestSegmentBefore(e);
                return t >= 0 ? this._list[t] : null
              }
              getLastSampleBefore(e) {
                const t = this.getLastSegmentBefore(e);
                return null != t ? t.lastSample : null
              }
              getLastSyncPointBefore(e) {
                let t = this._searchNearestSegmentBefore(e),
                  i = this._list[t].syncPoints;
                for (; 0 === i.length && t > 0;) t--, i = this._list[t].syncPoints;
                return i.length > 0 ? i[i.length - 1] : null
              }
            }
          },
          943: (e, t, i) => {
            i.d(t, {
              Z: () => Oe
            });
            var s = i(99),
              n = i(645),
              r = i(479),
              a = i(994);

            function o(e, t, i) {
              const s = e;
              if (t + i < s.length) {
                for (; i--;)
                  if (128 != (192 & s[++t])) return !1;
                return !0
              }
              return !1
            }
            const d = function(e) {
              const t = [],
                i = e;
              let s = 0;
              const n = e.length;
              for (; s < n;)
                if (i[s] < 128) t.push(String.fromCharCode(i[s])), ++s;
                else {
                  if (i[s] < 192);
                  else if (i[s] < 224) {
                    if (o(i, s, 1)) {
                      const e = (31 & i[s]) << 6 | 63 & i[s + 1];
                      if (e >= 128) {
                        t.push(String.fromCharCode(65535 & e)), s += 2;
                        continue
                      }
                    }
                  } else if (i[s] < 240) {
                    if (o(i, s, 2)) {
                      const e = (15 & i[s]) << 12 | (63 & i[s + 1]) << 6 | 63 & i[s + 2];
                      if (e >= 2048 && 55296 != (63488 & e)) {
                        t.push(String.fromCharCode(65535 & e)), s += 3;
                        continue
                      }
                    }
                  } else if (i[s] < 248 && o(i, s, 3)) {
                    let e = (7 & i[s]) << 18 | (63 & i[s + 1]) << 12 | (63 & i[s + 2]) << 6 | 63 & i[s + 3];
                    if (e > 65536 && e < 1114112) {
                      e -= 65536, t.push(String.fromCharCode(e >>> 10 | 55296)), t.push(String.fromCharCode(1023 & e | 56320)), s += 4;
                      continue
                    }
                  }
                  t.push(String.fromCharCode(65533)), ++s
                } return t.join("")
            };
            var l = i(411);
            const h = function() {
              const e = new ArrayBuffer(2);
              return new DataView(e).setInt16(0, 256, !0), 256 === new Int16Array(e)[0]
            }();
            class c {
              static parseScriptData(e, t, i) {
                const s = {};
                try {
                  const n = c.parseValue(e, t, i),
                    r = c.parseValue(e, t + n.size, i - n.size);
                  s[n.data] = r.data
                } catch (e) {
                  n.Z.e("AMF", e.toString())
                }
                return s
              }
              static parseObject(e, t, i) {
                if (i < 3) throw new l.rT("Data not enough when parse ScriptDataObject");
                const s = c.parseString(e, t, i),
                  n = c.parseValue(e, t + s.size, i - s.size),
                  r = n.objectEnd;
                return {
                  data: {
                    name: s.data,
                    value: n.data
                  },
                  size: s.size + n.size,
                  objectEnd: r
                }
              }
              static parseVariable(e, t, i) {
                return c.parseObject(e, t, i)
              }
              static parseString(e, t, i) {
                if (i < 2) throw new l.rT("Data not enough when parse String");
                const s = new DataView(e, t, i).getUint16(0, !h);
                let n;
                return n = s > 0 ? d(new Uint8Array(e, t + 2, s)) : "", {
                  data: n,
                  size: 2 + s
                }
              }
              static parseLongString(e, t, i) {
                if (i < 4) throw new l.rT("Data not enough when parse LongString");
                const s = new DataView(e, t, i).getUint32(0, !h);
                let n;
                return n = s > 0 ? d(new Uint8Array(e, t + 4, s)) : "", {
                  data: n,
                  size: 4 + s
                }
              }
              static parseDate(e, t, i) {
                if (i < 10) throw new l.rT("Data size invalid when parse Date");
                const s = new DataView(e, t, i);
                let n = s.getFloat64(0, !h);
                return n += 60 * s.getInt16(8, !h) * 1e3, {
                  data: new Date(n),
                  size: 10
                }
              }
              static parseValue(e, t, i) {
                if (i < 1) throw new l.rT("Data not enough when parse Value");
                const s = new DataView(e, t, i);
                let r = 1;
                const a = s.getUint8(0);
                let o, d = !1;
                try {
                  switch (a) {
                    case 0:
                      o = s.getFloat64(1, !h), r += 8;
                      break;
                    case 1:
                      o = !!s.getUint8(1), r += 1;
                      break;
                    case 2: {
                      const s = c.parseString(e, t + 1, i - 1);
                      o = s.data, r += s.size;
                      break
                    }
                    case 3: {
                      o = {};
                      let n = 0;
                      for (9 == (16777215 & s.getUint32(i - 4, !h)) && (n = 3); r < i - 4;) {
                        const s = c.parseObject(e, t + r, i - r - n);
                        if (s.objectEnd) break;
                        o[s.data.name] = s.data.value, r += s.size
                      }
                      r <= i - 3 && 9 == (16777215 & s.getUint32(r - 1, !h)) && (r += 3);
                      break
                    }
                    case 8: {
                      o = {}, r += 4;
                      let n = 0;
                      for (9 == (16777215 & s.getUint32(i - 4, !h)) && (n = 3); r < i - 8;) {
                        const s = c.parseVariable(e, t + r, i - r - n);
                        if (s.objectEnd) break;
                        o[s.data.name] = s.data.value, r += s.size
                      }
                      r <= i - 3 && 9 == (16777215 & s.getUint32(r - 1, !h)) && (r += 3);
                      break
                    }
                    case 9:
                      o = void 0, r = 1, d = !0;
                      break;
                    case 10: {
                      o = [];
                      const n = s.getUint32(1, !h);
                      r += 4;
                      for (let s = 0; s < n; s++) {
                        const s = c.parseValue(e, t + r, i - r);
                        o.push(s.data), r += s.size
                      }
                      break
                    }
                    case 11: {
                      const s = c.parseDate(e, t + 1, i - 1);
                      o = s.data, r += s.size;
                      break
                    }
                    case 12: {
                      const s = c.parseString(e, t + 1, i - 1);
                      o = s.data, r += s.size;
                      break
                    }
                    default:
                      r = i, n.Z.w("AMF", "Unsupported AMF value type " + a.toString())
                  }
                } catch (e) {
                  n.Z.e("AMF", e.toString())
                }
                return {
                  data: o,
                  size: r,
                  objectEnd: d
                }
              }
            }
            const u = c,
              A = class {
                constructor(e) {
                  this.TAG = "ExpGolomb", this._buffer = e, this._buffer_index = 0, this._total_bytes = e.byteLength, this._total_bits = 8 * e.byteLength, this._current_word = 0, this._current_word_bits_left = 0
                }
                destroy() {
                  this._buffer = null
                }
                _fillCurrentWord() {
                  var e;
                  const t = this._total_bytes - this._buffer_index;
                  if (t <= 0) throw new l.rT("ExpGolomb: _fillCurrentWord() but no bytes available");
                  const i = Math.min(4, t),
                    s = new Uint8Array(4);
                  s.set(null === (e = this._buffer) || void 0 === e ? void 0 : e.subarray(this._buffer_index, this._buffer_index + i)), this._current_word = new DataView(s.buffer).getUint32(0, !1), this._buffer_index += i, this._current_word_bits_left = 8 * i
                }
                readBits(e) {
                  if (e > 32) throw new l.OC("ExpGolomb: readBits() bits exceeded max 32bits!");
                  if (e <= this._current_word_bits_left) {
                    const t = this._current_word >>> 32 - e;
                    return this._current_word <<= e, this._current_word_bits_left -= e, t
                  }
                  let t = this._current_word_bits_left ? this._current_word : 0;
                  t >>>= 32 - this._current_word_bits_left;
                  const i = e - this._current_word_bits_left;
                  this._fillCurrentWord();
                  const s = Math.min(i, this._current_word_bits_left),
                    n = this._current_word >>> 32 - s;
                  return this._current_word <<= s, this._current_word_bits_left -= s, t = t << s | n, t
                }
                readBool() {
                  return 1 === this.readBits(1)
                }
                readByte() {
                  return this.readBits(8)
                }
                _skipLeadingZero() {
                  let e;
                  for (e = 0; e < this._current_word_bits_left; e++)
                    if (0 != (this._current_word & 2147483648 >>> e)) return this._current_word <<= e, this._current_word_bits_left -= e, e;
                  return this._fillCurrentWord(), e + this._skipLeadingZero()
                }
                readUEG() {
                  const e = this._skipLeadingZero();
                  return this.readBits(e + 1) - 1
                }
                readSEG() {
                  const e = this.readUEG();
                  return 1 & e ? e + 1 >>> 1 : -1 * (e >>> 1)
                }
              };
            class _ {
              static _ebsp2rbsp(e) {
                const t = e,
                  i = t.byteLength,
                  s = new Uint8Array(i);
                let n = 0;
                for (let e = 0; e < i; e++) e >= 2 && 3 === t[e] && 0 === t[e - 1] && 0 === t[e - 2] || (s[n] = t[e], n++);
                return new Uint8Array(s.buffer, 0, n)
              }
              static parseSPS(e) {
                const t = e.subarray(1, 4);
                let i = "avc1.";
                for (let e = 0; e < 3; e++) {
                  let s = t[e].toString(16);
                  s.length < 2 && (s = "0" + s), i += s
                }
                const s = _._ebsp2rbsp(e);
                let n = new A(s);
                n.readByte();
                const r = n.readByte();
                n.readByte();
                const a = n.readByte();
                n.readUEG();
                const o = _.getProfileString(r),
                  d = _.getLevelString(a);
                let l = 1,
                  h = 420;
                let c = 8,
                  u = 8;
                if ((100 === r || 110 === r || 122 === r || 244 === r || 44 === r || 83 === r || 86 === r || 118 === r || 128 === r || 138 === r || 144 === r) && (l = n.readUEG(), 3 === l && n.readBits(1), l <= 3 && (h = [0, 420, 422, 444][l]), c = n.readUEG() + 8, u = n.readUEG() + 8, n.readBits(1), n.readBool())) {
                  const e = 3 !== l ? 8 : 12;
                  for (let t = 0; t < e; t++) n.readBool() && (t < 6 ? _._skipScalingList(n, 16) : _._skipScalingList(n, 64))
                }
                n.readUEG();
                const m = n.readUEG();
                if (0 === m) n.readUEG();
                else if (1 === m) {
                  n.readBits(1), n.readSEG(), n.readSEG();
                  const e = n.readUEG();
                  for (let t = 0; t < e; t++) n.readSEG()
                }
                const p = n.readUEG();
                n.readBits(1);
                const f = n.readUEG(),
                  g = n.readUEG(),
                  v = n.readBits(1);
                0 === v && n.readBits(1), n.readBits(1);
                let y = 0,
                  E = 0,
                  S = 0,
                  b = 0;
                n.readBool() && (y = n.readUEG(), E = n.readUEG(), S = n.readUEG(), b = n.readUEG());
                let w = 1,
                  T = 1,
                  R = 0,
                  C = !0,
                  B = 0,
                  k = 0;
                if (n.readBool()) {
                  if (n.readBool()) {
                    const e = n.readByte();
                    e > 0 && e < 16 ? (w = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][e - 1], T = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][e - 1]) : 255 === e && (w = n.readByte() << 8 | n.readByte(), T = n.readByte() << 8 | n.readByte())
                  }
                  if (n.readBool() && n.readBool(), n.readBool() && (n.readBits(4), n.readBool() && n.readBits(24)), n.readBool() && (n.readUEG(), n.readUEG()), n.readBool()) {
                    const e = n.readBits(32),
                      t = n.readBits(32);
                    C = n.readBool(), B = t, k = 2 * e, R = B / k
                  }
                }
                let I = 1;
                1 === w && 1 === T || (I = w / T);
                let O = 0,
                  D = 0;
                0 === l ? (O = 1, D = 2 - v) : (O = 3 === l ? 1 : 2, D = (1 === l ? 2 : 1) * (2 - v));
                let L = 16 * (f + 1),
                  x = 16 * (g + 1) * (2 - v);
                L -= (y + E) * O, x -= (S + b) * D;
                const M = Math.ceil(L * I);
                return n.destroy(), n = null, {
                  codec_mimetype: i,
                  profile_idc: r,
                  level_idc: a,
                  profile_string: o,
                  level_string: d,
                  chroma_format_idc: l,
                  bit_depth: c,
                  bit_depth_luma: c,
                  bit_depth_chroma: u,
                  ref_frames: p,
                  chroma_format: h,
                  chroma_format_string: _.getChromaFormatString(h),
                  frame_rate: {
                    fixed: C,
                    fps: R,
                    fps_den: k,
                    fps_num: B
                  },
                  sar_ratio: {
                    width: w,
                    height: T
                  },
                  codec_size: {
                    width: L,
                    height: x
                  },
                  present_size: {
                    width: M,
                    height: x
                  }
                }
              }
              static _skipScalingList(e, t) {
                let i = 8,
                  s = 8,
                  n = 0;
                for (let r = 0; r < t; r++) 0 !== s && (n = e.readSEG(), s = (i + n + 256) % 256), i = 0 === s ? i : s
              }
              static getProfileString(e) {
                switch (e) {
                  case 66:
                    return "Baseline";
                  case 77:
                    return "Main";
                  case 88:
                    return "Extended";
                  case 100:
                    return "High";
                  case 110:
                    return "High10";
                  case 122:
                    return "High422";
                  case 244:
                    return "High444";
                  default:
                    return "Unknown"
                }
              }
              static getLevelString(e) {
                return (e / 10).toFixed(1)
              }
              static getChromaFormatString(e) {
                switch (e) {
                  case 420:
                    return "4:2:0";
                  case 422:
                    return "4:2:2";
                  case 444:
                    return "4:4:4";
                  default:
                    return "Unknown"
                }
              }
            }
            const m = _;
            var p = i(898);
            class f {
              static _ebsp2rbsp(e) {
                const t = e,
                  i = t.byteLength,
                  s = new Uint8Array(i);
                let n = 0;
                for (let e = 0; e < i; e++) e >= 2 && 3 === t[e] && 0 === t[e - 1] && 0 === t[e - 2] || (s[n] = t[e], n++);
                return new Uint8Array(s.buffer, 0, n)
              }
              static parseVPS(e) {
                const t = f._ebsp2rbsp(e),
                  i = new A(t);
                return i.readByte(), i.readByte(), i.readBits(4), i.readBits(2), i.readBits(6), {
                  num_temporal_layers: i.readBits(3) + 1,
                  temporal_id_nested: i.readBool()
                }
              }
              static parseSPS(e) {
                const t = f._ebsp2rbsp(e);
                let i = new A(t);
                i.readByte(), i.readByte();
                let s = 0,
                  n = 0,
                  r = 0,
                  a = 0;
                i.readBits(4);
                const o = i.readBits(3),
                  d = (i.readBool(), i.readBits(2)),
                  l = i.readBool(),
                  h = i.readBits(5),
                  c = i.readByte(),
                  u = i.readByte(),
                  _ = i.readByte(),
                  m = i.readByte(),
                  p = i.readByte(),
                  g = i.readByte(),
                  v = i.readByte(),
                  y = i.readByte(),
                  E = i.readByte(),
                  S = i.readByte(),
                  b = i.readByte(),
                  w = [],
                  T = [];
                for (let e = 0; e < o; e++) w.push(i.readBool()), T.push(i.readBool());
                if (o > 0)
                  for (let e = o; e < 8; e++) i.readBits(2);
                for (let e = 0; e < o; e++) w[e] && (i.readByte(), i.readByte(), i.readByte(), i.readByte(), i.readByte(), i.readByte(), i.readByte(), i.readByte(), i.readByte(), i.readByte(), i.readByte()), T[e] && i.readByte();
                i.readUEG();
                const R = i.readUEG();
                3 === R && i.readBits(1);
                const C = i.readUEG(),
                  B = i.readUEG();
                i.readBool() && (s += i.readUEG(), n += i.readUEG(), r += i.readUEG(), a += i.readUEG());
                const k = i.readUEG(),
                  I = i.readUEG(),
                  O = i.readUEG();
                for (let e = i.readBool() ? 0 : o; e <= o; e++) i.readUEG(), i.readUEG(), i.readUEG();
                if (i.readUEG(), i.readUEG(), i.readUEG(), i.readUEG(), i.readUEG(), i.readUEG(), i.readBool() && i.readBool())
                  for (let e = 0; e < 4; e++)
                    for (let t = 0; t < (3 === e ? 2 : 6); t++)
                      if (i.readBool()) {
                        const t = Math.min(64, 1 << 4 + (e << 1));
                        e > 1 && i.readSEG();
                        for (let e = 0; e < t; e++) i.readSEG()
                      } else i.readUEG();
                i.readBool(), i.readBool(), i.readBool() && (i.readByte(), i.readUEG(), i.readUEG(), i.readBool());
                const D = i.readUEG();
                let L = 0;
                for (let e = 0; e < D; e++) {
                  let t = !1;
                  if (0 !== e && (t = i.readBool()), t) {
                    e === D && i.readUEG(), i.readBool(), i.readUEG();
                    let t = 0;
                    for (let e = 0; e <= L; e++) {
                      const e = i.readBool();
                      let s = !1;
                      e || (s = i.readBool()), (e || s) && t++
                    }
                    L = t
                  } else {
                    const e = i.readUEG(),
                      t = i.readUEG();
                    L = e + t;
                    for (let t = 0; t < e; t++) i.readUEG(), i.readBool();
                    for (let e = 0; e < t; e++) i.readUEG(), i.readBool()
                  }
                }
                if (i.readBool()) {
                  const e = i.readUEG();
                  for (let t = 0; t < e; t++) {
                    for (let e = 0; e < O + 4; e++) i.readBits(1);
                    i.readBits(1)
                  }
                }
                let x = !1,
                  M = 0,
                  P = 1,
                  U = 1,
                  F = !1,
                  V = 1,
                  N = 1;
                if (i.readBool(), i.readBool(), i.readBool()) {
                  if (i.readBool()) {
                    const e = i.readByte();
                    e > 0 && e <= 16 ? (P = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][e - 1], U = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][e - 1]) : 255 === e && (P = i.readBits(16), U = i.readBits(16))
                  }
                  if (i.readBool() && i.readBool(), i.readBool() && (i.readBits(3), i.readBool(), i.readBool() && (i.readByte(), i.readByte(), i.readByte())), i.readBool() && (i.readUEG(), i.readUEG()), i.readBool(), i.readBool(), i.readBool(), x = i.readBool(), x && (i.readUEG(), i.readUEG(), i.readUEG(), i.readUEG()), i.readBool() && (V = i.readBits(32), N = i.readBits(32), i.readBool() && i.readUEG(), i.readBool())) {
                    let e = !1,
                      t = !1,
                      s = !1;
                    e = i.readBool(), t = i.readBool(), (e || t) && (s = i.readBool(), s && (i.readByte(), i.readBits(5), i.readBool(), i.readBits(5)), i.readBits(4), i.readBits(4), s && i.readBits(4), i.readBits(5), i.readBits(5), i.readBits(5));
                    for (let n = 0; n <= o; n++) {
                      const n = i.readBool();
                      F = n;
                      let r = !1,
                        a = 1;
                      n || (r = i.readBool());
                      let o = !1;
                      if (r ? i.readSEG() : o = i.readBool(), o || (a = i.readUEG() + 1), e)
                        for (let e = 0; e < a; e++) i.readUEG(), i.readUEG(), s && (i.readUEG(), i.readUEG());
                      if (t)
                        for (let e = 0; e < a; e++) i.readUEG(), i.readUEG(), s && (i.readUEG(), i.readUEG())
                    }
                  }
                  i.readBool() && (i.readBool(), i.readBool(), i.readBool(), M = i.readUEG(), i.readUEG(), i.readUEG(), i.readUEG(), i.readUEG())
                }
                i.readBool();
                const Z = `hvc1.${h}.1.L${b}.B0`,
                  G = C - (s + n) * (1 === R || 2 === R ? 2 : 1),
                  $ = B - (r + a) * (1 === R ? 2 : 1);
                let W = 1;
                return 1 !== P && 1 !== U && (W = P / U), i.destroy(), i = null, {
                  codec_mimetype: Z,
                  level_string: f.getLevelString(b),
                  profile_idc: h,
                  bit_depth: k + 8,
                  ref_frames: 1,
                  chroma_format: R,
                  chroma_format_string: f.getChromaFormatString(R),
                  general_level_idc: b,
                  general_profile_space: d,
                  general_tier_flag: l,
                  general_profile_idc: h,
                  general_profile_compatibility_flags_1: c,
                  general_profile_compatibility_flags_2: u,
                  general_profile_compatibility_flags_3: _,
                  general_profile_compatibility_flags_4: m,
                  general_constraint_indicator_flags_1: p,
                  general_constraint_indicator_flags_2: g,
                  general_constraint_indicator_flags_3: v,
                  general_constraint_indicator_flags_4: y,
                  general_constraint_indicator_flags_5: E,
                  general_constraint_indicator_flags_6: S,
                  min_spatial_segmentation_idc: M,
                  constant_frame_rate: 0,
                  chroma_format_idc: R,
                  bit_depth_luma_minus8: k,
                  bit_depth_chroma_minus8: I,
                  frame_rate: {
                    fixed: F,
                    fps: N / V,
                    fps_den: V,
                    fps_num: N
                  },
                  sar_ratio: {
                    width: P,
                    height: U
                  },
                  codec_size: {
                    width: G,
                    height: $
                  },
                  present_size: {
                    width: G * W,
                    height: $
                  }
                }
              }
              static parsePPS(e) {
                const t = f._ebsp2rbsp(e),
                  i = new A(t);
                i.readByte(), i.readByte(), i.readUEG(), i.readUEG(), i.readBool(), i.readBool(), i.readBits(3), i.readBool(), i.readBool(), i.readUEG(), i.readUEG(), i.readSEG(), i.readBool(), i.readBool(), i.readBool() && i.readUEG(), i.readSEG(), i.readSEG(), i.readBool(), i.readBool(), i.readBool(), i.readBool();
                const s = i.readBool(),
                  n = i.readBool();
                let r = 1;
                return n && s ? r = 0 : n ? r = 3 : s && (r = 2), {
                  parallelismType: r
                }
              }
              static getChromaFormatString(e) {
                switch (e) {
                  case 0:
                    return "4:0:0";
                  case 1:
                    return "4:2:0";
                  case 2:
                    return "4:2:2";
                  case 3:
                    return "4:4:4";
                  default:
                    return "Unknown"
                }
              }
              static getProfileString(e) {
                switch (e) {
                  case 1:
                    return "Main";
                  case 2:
                    return "Main10";
                  case 3:
                    return "MainSP";
                  case 4:
                    return "Rext";
                  case 9:
                    return "SCC";
                  default:
                    return "Unknown"
                }
              }
              static getLevelString(e) {
                return (e / 30).toFixed(1)
              }
            }
            const g = f;

            function v(e) {
              return e.byteOffset % 2 == 0 && e.byteLength % 2 == 0
            }

            function y(e) {
              return e.byteOffset % 4 == 0 && e.byteLength % 4 == 0
            }

            function E(e, t) {
              for (let i = 0; i < e.length; i++)
                if (e[i] !== t[i]) return !1;
              return !0
            }
            const S = function(e, t) {
              return e.byteLength === t.byteLength && (y(e) && y(t) ? function(e, t) {
                return E(new Uint32Array(e.buffer, e.byteOffset, e.byteLength / 4), new Uint32Array(t.buffer, t.byteOffset, t.byteLength / 4))
              }(e, t) : v(e) && v(t) ? function(e, t) {
                return E(new Uint16Array(e.buffer, e.byteOffset, e.byteLength / 2), new Uint16Array(t.buffer, t.byteOffset, t.byteLength / 2))
              }(e, t) : function(e, t) {
                return E(e, t)
              }(e, t))
            };
            class b {
              static parseOBUs(e) {
                let t = null;
                for (let i = 0; i < e.byteLength;) {
                  e[i];
                  const s = (120 & e[i]) >> 3,
                    n = 0 != (4 & e[i]),
                    r = 0 != (2 & e[i]);
                  e[i], i += 1, n && (i += 1);
                  let a = Number.POSITIVE_INFINITY;
                  if (r) {
                    a = 0;
                    for (let t = 0; a |= (127 & e[i]) << 7 * t, i += 1, 0 != (128 & e[i]); t++);
                  }
                  1 === s && (t = b.parseSeuqneceHeader(e.subarray(i, i + a))), i += a
                }
                return t
              }
              static parseSeuqneceHeader(e) {
                let t = new A(e);
                const i = t.readBits(3),
                  s = (t.readBool(), t.readBool());
                let n = !0,
                  r = 0,
                  a = 0;
                const o = [];
                if (s) o.push({
                  operating_point_idc: 0,
                  level: t.readBits(5),
                  tier: 0
                });
                else {
                  if (t.readBool()) {
                    const e = t.readBits(32),
                      i = t.readBits(32),
                      s = t.readBool();
                    if (s) {
                      let e = 0;
                      for (; 0 === t.readBits(1);) e += 1;
                      e >= 32 || t.readBits(e)
                    }
                    a = e, r = i, n = s, t.readBool() && (t.readBits(5), t.readBits(32), t.readBits(5), t.readBits(5))
                  }
                  const e = t.readBool(),
                    i = t.readBits(5);
                  for (let s = 0; s <= i; s++) {
                    const i = t.readBits(12),
                      s = t.readBits(5),
                      n = s > 7 ? t.readBits(1) : 0;
                    o.push({
                      operating_point_idc: i,
                      level: s,
                      tier: n
                    }), e && t.readBool() && t.readBits(4)
                  }
                }
                const {
                  level: d,
                  tier: l
                } = o[0], h = t.readBits(4), c = t.readBits(4), u = t.readBits(h + 1) + 1, _ = t.readBits(c + 1) + 1;
                let m = !1;
                s || (m = t.readBool()), m && (t.readBits(4), t.readBits(4)), t.readBool(), t.readBool(), t.readBool();
                let p = !1,
                  f = 2;
                s || (t.readBool(), t.readBool(), t.readBool(), t.readBool(), p = t.readBool(), p && (t.readBool(), t.readBool()), f = t.readBool() ? 2 : t.readBits(1), f && (t.readBool() || t.readBits(1)), p && t.readBits(3)), t.readBool(), t.readBool(), t.readBool();
                const g = t.readBool();
                let v = 8;
                v = 2 === i && g ? t.readBool() ? 12 : 10 : g ? 10 : 8;
                let y = !1;
                1 !== i && (y = t.readBool()), t.readBool() && (t.readBits(8), t.readBits(8), t.readBits(8));
                let E = 1,
                  S = 1;
                return y ? (t.readBits(1), E = 1, S = 1) : (t.readBits(1), 0 === i ? (E = 1, S = 1) : 1 === i ? (E = 0, S = 0) : 12 === v ? t.readBits(1) && t.readBits(1) : (E = 1, S = 0), E && S && t.readBits(2), t.readBits(1)), t.readBool(), t.destroy(), t = null, {
                  codec_mimetype: `av01.${i}.${b.getLevelString(d,l)}.${v.toString(10).padStart(2,"0")}`,
                  level: d,
                  tier: l,
                  level_string: b.getLevelString(d, l),
                  profile_idc: i,
                  profile_string: `${i}`,
                  bit_depth: v,
                  ref_frames: 1,
                  chroma_format: b.getChromaFormat(y, E, S),
                  chroma_format_string: b.getChromaFormatString(y, E, S),
                  frame_rate: {
                    fixed: n,
                    fps: r / a,
                    fps_den: a,
                    fps_num: r
                  },
                  sar_ratio: {
                    width: 1,
                    height: 1
                  },
                  codec_size: {
                    width: u,
                    height: _
                  },
                  present_size: {
                    width: 1 * u,
                    height: _
                  }
                }
              }
              static getLevelString(e, t) {
                return `${e.toString(10).padStart(2,"0")}${0===t?"M":"H"}`
              }
              static getChromaFormat(e, t, i) {
                return e ? 0 : 0 === t && 0 === i ? 3 : 1 === t && 0 === i ? 2 : 1 === t && 1 === i ? 1 : Number.NaN
              }
              static getChromaFormatString(e, t, i) {
                return e ? "4:0:0" : 0 === t && 0 === i ? "4:4:4" : 1 === t && 0 === i ? "4:2:2" : 1 === t && 1 === i ? "4:2:0" : "Unknown"
              }
            }
            const w = b;
            class T {
              constructor(e, t) {
                this.TAG = "FLVDemuxer", this._config = t, this._onError = null, this._onMediaInfo = null, this._onMetaDataArrived = null, this._onScriptDataArrived = null, this._onTrackMetadata = null, this._onDataAvailable = null, this._dataOffset = e.dataOffset, this._firstParse = !0, this._dispatch = !1, this._hasAudio = e.hasAudioTrack, this._hasVideo = e.hasVideoTrack, this._hasAudioFlagOverrided = !1, this._hasVideoFlagOverrided = !1, this._audioInitialMetadataDispatched = !1, this._videoInitialMetadataDispatched = !1, this._mediaInfo = new a.Z, this._mediaInfo.hasAudio = this._hasAudio, this._mediaInfo.hasVideo = this._hasVideo, this._metadata = null, this._audioMetadata = null, this._videoMetadata = null, this._naluLengthSize = 4, this._timestampBase = 0, this._timescale = 1e3, this._duration = 0, this._durationOverrided = !1, this._referenceFrameRate = {
                  fixed: !0,
                  fps: 23.976,
                  fps_num: 23976,
                  fps_den: 1e3
                }, this._flvSoundRateTable = [5500, 11025, 22050, 44100, 48e3], this._mpegSamplingRates = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], this._mpegAudioV10SampleRateTable = [44100, 48e3, 32e3, 0], this._mpegAudioV20SampleRateTable = [22050, 24e3, 16e3, 0], this._mpegAudioV25SampleRateTable = [11025, 12e3, 8e3, 0], this._mpegAudioL1BitRateTable = [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1], this._mpegAudioL2BitRateTable = [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1], this._mpegAudioL3BitRateTable = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1], this._videoTrack = {
                  type: "video",
                  id: 1,
                  sequenceNumber: 0,
                  samples: [],
                  length: 0
                }, this._audioTrack = {
                  type: "audio",
                  id: 2,
                  sequenceNumber: 0,
                  samples: [],
                  length: 0
                }, this._littleEndian = function() {
                  const e = new ArrayBuffer(2);
                  return new DataView(e).setInt16(0, 256, !0), 256 === new Int16Array(e)[0]
                }()
              }
              destroy() {
                this._mediaInfo = null, this._metadata = null, this._audioMetadata = null, this._videoMetadata = null, this._videoTrack = null, this._audioTrack = null, this._onError = null, this._onMediaInfo = null, this._onMetaDataArrived = null, this._onScriptDataArrived = null, this._onTrackMetadata = null, this._onDataAvailable = null
              }
              static probe(e) {
                const t = new Uint8Array(e);
                if (t.byteLength < 9) return {
                  needMoreData: !0
                };
                const i = {
                  match: !1
                };
                if (70 !== t[0] || 76 !== t[1] || 86 !== t[2] || 1 !== t[3]) return i;
                const s = (4 & t[4]) >>> 2 != 0,
                  n = 0 != (1 & t[4]),
                  r = (a = t)[5] << 24 | a[6] << 16 | a[7] << 8 | a[8];
                var a;
                return r < 9 ? i : {
                  match: !0,
                  consumed: r,
                  dataOffset: r,
                  hasAudioTrack: s,
                  hasVideoTrack: n
                }
              }
              bindDataSource(e) {
                return e.onDataArrival = this.parseChunks.bind(this), this
              }
              get onTrackMetadata() {
                return this._onTrackMetadata
              }
              set onTrackMetadata(e) {
                this._onTrackMetadata = e
              }
              get onMediaInfo() {
                return this._onMediaInfo
              }
              set onMediaInfo(e) {
                this._onMediaInfo = e
              }
              get onMetaDataArrived() {
                return this._onMetaDataArrived
              }
              set onMetaDataArrived(e) {
                this._onMetaDataArrived = e
              }
              get onScriptDataArrived() {
                return this._onScriptDataArrived
              }
              set onScriptDataArrived(e) {
                this._onScriptDataArrived = e
              }
              get onError() {
                return this._onError
              }
              set onError(e) {
                this._onError = e
              }
              get onDataAvailable() {
                return this._onDataAvailable
              }
              set onDataAvailable(e) {
                this._onDataAvailable = e
              }
              get timestampBase() {
                return this._timestampBase
              }
              set timestampBase(e) {
                this._timestampBase = e
              }
              get overridedDuration() {
                return this._duration
              }
              set overridedDuration(e) {
                this._durationOverrided = !0, this._duration = e, this._mediaInfo && (this._mediaInfo.duration = e)
              }
              set overridedHasAudio(e) {
                this._hasAudioFlagOverrided = !0, this._hasAudio = e, this._mediaInfo && (this._mediaInfo.hasAudio = e)
              }
              set overridedHasVideo(e) {
                this._hasVideoFlagOverrided = !0, this._hasVideo = e, this._mediaInfo && (this._mediaInfo.hasVideo = e)
              }
              resetMediaInfo() {
                this._mediaInfo = new a.Z
              }
              _isInitialMetadataDispatched() {
                return this._hasAudio && this._hasVideo ? this._audioInitialMetadataDispatched && this._videoInitialMetadataDispatched : this._hasAudio && !this._hasVideo ? this._audioInitialMetadataDispatched : !(this._hasAudio || !this._hasVideo) && this._videoInitialMetadataDispatched
              }
              parseChunks(e, t) {
                var i, s;
                if (!(this._onError && this._onMediaInfo && this._onTrackMetadata && this._onDataAvailable)) throw new l.rT("Flv: onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified");
                let r = 0;
                const a = this._littleEndian;
                if (0 === t) {
                  if (!(e.byteLength > 13)) return 0; {
                    const t = T.probe(e);
                    r = (null == t ? void 0 : t.dataOffset) || 0
                  }
                }
                for (this._firstParse && (this._firstParse = !1, t + r !== this._dataOffset && n.Z.w(this.TAG, "First time parsing but chunk byteStart invalid!"), 0 !== new DataView(e, r).getUint32(0, !a) && n.Z.w(this.TAG, "PrevTagSize0 !== 0 !!!"), r += 4); r < e.byteLength;) {
                  this._dispatch = !0;
                  const i = new DataView(e, r);
                  if (r + 11 + 4 > e.byteLength) break;
                  const s = i.getUint8(0),
                    o = 16777215 & i.getUint32(0, !a);
                  if (r + 11 + o + 4 > e.byteLength) break;
                  if (8 !== s && 9 !== s && 18 !== s) {
                    n.Z.w(this.TAG, `Unsupported tag type ${s}, skipped`), r += 11 + o + 4;
                    continue
                  }
                  const d = i.getUint8(4),
                    l = i.getUint8(5),
                    h = i.getUint8(6) | l << 8 | d << 16 | i.getUint8(7) << 24;
                  0 != (16777215 & i.getUint32(7, !a)) && n.Z.w(this.TAG, "Meet tag which has StreamID != 0!");
                  const c = r + 11;
                  switch (s) {
                    case 8:
                      this._parseAudioData(e, c, o, h);
                      break;
                    case 9:
                      this._parseVideoData(e, c, o, h, t + r);
                      break;
                    case 18:
                      this._parseScriptData(e, c, o)
                  }
                  const u = i.getUint32(11 + o, !a);
                  u !== 11 + o && n.Z.w(this.TAG, `Invalid PrevTagSize ${u}`), r += 11 + o + 4
                }
                return this._isInitialMetadataDispatched() && this._dispatch && ((null === (i = this._audioTrack) || void 0 === i ? void 0 : i.length) || (null === (s = this._videoTrack) || void 0 === s ? void 0 : s.length)) && this._onDataAvailable(this._audioTrack, this._videoTrack), r
              }
              _parseScriptData(e, t, i) {
                var s, r, a;
                const o = u.parseScriptData(e, t, i);
                if (o.hasOwnProperty("onMetaData")) {
                  if (null == o.onMetaData || "object" != typeof o.onMetaData) return void n.Z.w(this.TAG, "Invalid onMetaData structure!");
                  this._metadata && n.Z.w(this.TAG, "Found another onMetaData tag!"), this._metadata = o;
                  const e = null === (s = this._metadata) || void 0 === s ? void 0 : s.onMetaData;
                  if (this._onMetaDataArrived && this._onMetaDataArrived(Object.assign({}, e)), "boolean" == typeof(null == e ? void 0 : e.hasAudio) && (this._hasAudioFlagOverrided || (this._hasAudio = e.hasAudio, this._mediaInfo && (this._mediaInfo.hasAudio = this._hasAudio))), "boolean" == typeof(null == e ? void 0 : e.hasVideo) && (this._hasVideoFlagOverrided || (this._hasVideo = e.hasVideo, this._mediaInfo && (this._mediaInfo.hasVideo = this._hasVideo))), "number" == typeof(null == e ? void 0 : e.audiodatarate) && this._mediaInfo && (this._mediaInfo.audioDataRate = e.audiodatarate), "number" == typeof(null == e ? void 0 : e.videodatarate) && this._mediaInfo && (this._mediaInfo.videoDataRate = e.videodatarate), "number" == typeof(null == e ? void 0 : e.width) && this._mediaInfo && (this._mediaInfo.width = e.width), "number" == typeof(null == e ? void 0 : e.height) && this._mediaInfo && (this._mediaInfo.height = e.height), "number" == typeof(null == e ? void 0 : e.duration)) {
                    if (!this._durationOverrided) {
                      const t = Math.floor(e.duration * this._timescale);
                      this._duration = t, this._mediaInfo && (this._mediaInfo.duration = t)
                    }
                  } else this._mediaInfo && (this._mediaInfo.duration = 0);
                  if ("number" == typeof(null == e ? void 0 : e.framerate)) {
                    const t = Math.floor(1e3 * e.framerate);
                    if (t > 0) {
                      const e = t / 1e3;
                      this._referenceFrameRate.fixed = !0, this._referenceFrameRate.fps = e, this._referenceFrameRate.fps_num = t, this._referenceFrameRate.fps_den = 1e3, this._mediaInfo && (this._mediaInfo.fps = e)
                    }
                  }
                  if ("object" == typeof(null == e ? void 0 : e.keyframes)) {
                    this._mediaInfo && (this._mediaInfo.hasKeyframesIndex = !0);
                    const t = e.keyframes;
                    this._mediaInfo && (this._mediaInfo.keyframesIndex = this._parseKeyframesIndex(t)), e.keyframes = null
                  } else this._mediaInfo && (this._mediaInfo.hasKeyframesIndex = !1);
                  this._dispatch = !1, this._mediaInfo && (this._mediaInfo.metadata = e), n.Z.v(this.TAG, "Parsed onMetaData"), (null === (r = this._mediaInfo) || void 0 === r ? void 0 : r.isComplete()) && (null === (a = this._onMediaInfo) || void 0 === a || a.call(this, this._mediaInfo))
                }
                Object.keys(o).length > 0 && this._onScriptDataArrived && this._onScriptDataArrived(Object.assign({}, o))
              }
              _parseKeyframesIndex(e) {
                const t = [],
                  i = [];
                for (let s = 1; s < e.times.length; s++) {
                  const n = this._timestampBase + Math.floor(1e3 * e.times[s]);
                  t.push(n), i.push(e.filepositions[s])
                }
                return {
                  times: t,
                  filepositions: i
                }
              }
              _parseAudioData(e, t, i, s) {
                var r, a, o, d, l, h, c, u, A, _;
                if (i <= 1) return void n.Z.w(this.TAG, "Flv: Invalid audio packet, missing SoundData payload!");
                if (this._hasAudioFlagOverrided && !1 === this._hasAudio) return;
                this._littleEndian;
                const m = new DataView(e, t, i).getUint8(0),
                  f = m >>> 4;
                if (2 !== f && 10 !== f) return void(null === (r = this._onError) || void 0 === r || r.call(this, p.Z.CODEC_UNSUPPORTED, "Flv: Unsupported audio codec idx: " + f));
                let g = 0;
                const v = (12 & m) >>> 2;
                if (!(v >= 0 && v <= 4)) return void(null === (a = this._onError) || void 0 === a || a.call(this, p.Z.FORMAT_ERROR, "Flv: Invalid audio sample rate idx: " + v));
                g = this._flvSoundRateTable[v];
                const y = 1 & m;
                let E = this._audioMetadata;
                const b = this._audioTrack;
                if (E || (!1 !== this._hasAudio || this._hasAudioFlagOverrided || (this._hasAudio = !0, this._mediaInfo && (this._mediaInfo.hasAudio = !0)), E = this._audioMetadata = {}, E.type = "audio", E.id = null == b ? void 0 : b.id, E.timescale = this._timescale, E.duration = this._duration, E.audioSampleRate = g, E.channelCount = 0 === y ? 1 : 2), 10 === f) {
                  const r = this._parseAACAudioData(e, t + 1, i - 1);
                  if (void 0 === r) return;
                  if (0 === (null == r ? void 0 : r.packetType)) {
                    if (null == E ? void 0 : E.config) {
                      if (S(r.data.config, null == E ? void 0 : E.config)) return;
                      n.Z.w(this.TAG, "AudioSpecificConfig has been changed, re-generate initialization segment")
                    }
                    const e = r.data;
                    E.audioSampleRate = null == e ? void 0 : e.samplingRate, E.channelCount = null == e ? void 0 : e.channelCount, E.codec = null == e ? void 0 : e.codec, E.originalCodec = null == e ? void 0 : e.originalCodec, E.config = null == e ? void 0 : e.config, E.refSampleDuration = 1024 / E.audioSampleRate * E.timescale, n.Z.v(this.TAG, "Parsed AudioSpecificConfig"), this._isInitialMetadataDispatched() ? this._dispatch && ((null === (o = this._audioTrack) || void 0 === o ? void 0 : o.length) || (null === (d = this._videoTrack) || void 0 === d ? void 0 : d.length)) && (null === (l = this._onDataAvailable) || void 0 === l || l.call(this, this._audioTrack, this._videoTrack)) : this._audioInitialMetadataDispatched = !0, this._dispatch = !1, null === (h = this._onTrackMetadata) || void 0 === h || h.call(this, "audio", E);
                    const t = this._mediaInfo;
                    t.audioCodec = E.originalCodec || "", t.audioSampleRate = E.audioSampleRate, t.audioChannelCount = E.channelCount, t.hasVideo ? null != t.videoCodec && (t.mimeType = 'video/x-flv; codecs="' + t.videoCodec + "," + t.audioCodec + '"') : t.mimeType = 'video/x-flv; codecs="' + t.audioCodec + '"', (null == t ? void 0 : t.isComplete()) && (null === (c = this._onMediaInfo) || void 0 === c || c.call(this, t))
                  } else if (1 === r.packetType) {
                    const e = this._timestampBase + s,
                      t = {
                        unit: r.data,
                        length: r.data.byteLength,
                        dts: e,
                        pts: e
                      };
                    b && (null == b || b.samples.push(t), b.length += (null === (u = null == r ? void 0 : r.data) || void 0 === u ? void 0 : u.length) || 0)
                  } else n.Z.e(this.TAG, `Flv: Unsupported AAC data type ${r.packetType}`)
                } else if (2 === f) {
                  if (!E.codec) {
                    const s = this._parseMP3AudioData(e, t + 1, i - 1, !0);
                    if (void 0 === s) return;
                    E.audioSampleRate = s.samplingRate, E.channelCount = s.channelCount, E.codec = s.codec, E.originalCodec = s.originalCodec, E.refSampleDuration = 1152 / E.audioSampleRate * E.timescale, n.Z.v(this.TAG, "Parsed MPEG Audio Frame Header"), this._audioInitialMetadataDispatched = !0, null === (A = this._onTrackMetadata) || void 0 === A || A.call(this, "audio", E);
                    const r = this._mediaInfo;
                    r.audioCodec = E.codec, r.audioSampleRate = E.audioSampleRate, r.audioChannelCount = E.channelCount, r.audioDataRate = s.bitRate, (null == r ? void 0 : r.hasVideo) ? null != r.videoCodec && (r.mimeType = 'video/x-flv; codecs="' + r.videoCodec + "," + r.audioCodec + '"') : r.mimeType = 'video/x-flv; codecs="' + r.audioCodec + '"', r.isComplete() && (null === (_ = this._onMediaInfo) || void 0 === _ || _.call(this, r))
                  }
                  const r = this._parseMP3AudioData(e, t + 1, i - 1, !1);
                  if (void 0 === r) return;
                  const a = this._timestampBase + s,
                    o = {
                      unit: r,
                      length: r.byteLength,
                      dts: a,
                      pts: a
                    };
                  null == b || b.samples.push(o), b && (b.length += r.length)
                }
              }
              _parseAACAudioData(e, t, i) {
                if (i <= 1) return void n.Z.w(this.TAG, "Flv: Invalid AAC packet, missing AACPacketType or/and Data!");
                const s = {},
                  r = new Uint8Array(e, t, i);
                return s.packetType = r[0], 0 === r[0] ? s.data = this._parseAACAudioSpecificConfig(e, t + 1, i - 1) : s.data = r.subarray(1), s
              }
              _parseAACAudioSpecificConfig(e, t, i) {
                var s, n;
                const r = new Uint8Array(e, t, i);
                let a = null,
                  o = 0,
                  d = 0,
                  l = 0,
                  h = null;
                if (o = d = r[0] >>> 3, l = (7 & r[0]) << 1 | r[1] >>> 7, l < 0 || l >= this._mpegSamplingRates.length) return void(null === (s = this._onError) || void 0 === s || s.call(this, p.Z.FORMAT_ERROR, "Flv: AAC invalid sampling frequency index!"));
                const c = this._mpegSamplingRates[l],
                  u = (120 & r[1]) >>> 3;
                if (u < 0 || u >= 8) return void(null === (n = this._onError) || void 0 === n || n.call(this, p.Z.FORMAT_ERROR, "Flv: AAC invalid channel configuration"));
                5 === o && (h = (7 & r[1]) << 1 | r[2] >>> 7, r[2]);
                const A = self.navigator.userAgent.toLowerCase();
                return A.includes("firefox") ? l >= 6 ? (o = 5, a = new Array(4), h = l - 3) : (o = 2, a = new Array(2), h = l) : A.includes("android") ? (o = 2, a = new Array(2), h = l) : (o = 5, h = l, a = new Array(4), l >= 6 ? h = l - 3 : 1 === u && (o = 2, a = new Array(2), h = l)), a[0] = o << 3, a[0] |= (15 & l) >>> 1, a[1] = (15 & l) << 7, a[1] |= (15 & u) << 3, 5 === o && (a[1] |= (15 & h) >>> 1, a[2] = (1 & h) << 7, a[2] |= 8, a[3] = 0), {
                  config: a,
                  samplingRate: c,
                  channelCount: u,
                  codec: "mp4a.40." + o,
                  originalCodec: "mp4a.40." + d
                }
              }
              _parseMP3AudioData(e, t, i, s) {
                if (i < 4) return void n.Z.w(this.TAG, "Flv: Invalid MP3 packet, header missing!");
                this._littleEndian;
                const r = new Uint8Array(e, t, i);
                let a;
                if (s) {
                  if (255 !== r[0]) return;
                  const e = r[1] >>> 3 & 3,
                    t = (6 & r[1]) >> 1,
                    i = (240 & r[2]) >>> 4,
                    s = (12 & r[2]) >>> 2,
                    n = 3 != (r[3] >>> 6 & 3) ? 2 : 1;
                  let o = 0,
                    d = 0;
                  const l = "mp3";
                  switch (e) {
                    case 0:
                      o = this._mpegAudioV25SampleRateTable[s];
                      break;
                    case 2:
                      o = this._mpegAudioV20SampleRateTable[s];
                      break;
                    case 3:
                      o = this._mpegAudioV10SampleRateTable[s]
                  }
                  switch (t) {
                    case 1:
                      i < this._mpegAudioL3BitRateTable.length && (d = this._mpegAudioL3BitRateTable[i]);
                      break;
                    case 2:
                      i < this._mpegAudioL2BitRateTable.length && (d = this._mpegAudioL2BitRateTable[i]);
                      break;
                    case 3:
                      i < this._mpegAudioL1BitRateTable.length && (d = this._mpegAudioL1BitRateTable[i])
                  }
                  a = {
                    bitRate: d,
                    samplingRate: o,
                    channelCount: n,
                    codec: l,
                    originalCodec: l
                  }
                } else a = r;
                return a
              }
              _parseVideoData(e, t, i, s, r) {
                var a, o;
                if (i <= 1) return void n.Z.w(this.TAG, "Flv: Invalid video packet, missing VideoData payload!");
                if (this._hasVideoFlagOverrided && !1 === this._hasVideo) return;
                const d = new Uint8Array(e, t, i)[0],
                  l = (112 & d) >>> 4;
                if (0 != (128 & d)) {
                  const n = 15 & d,
                    a = String.fromCharCode(...new Uint8Array(e, t, i).slice(1, 5));
                  "hvc1" === a ? this._parseEnhancedHEVCVideoPacket(e, t + 5, i - 5, s, r, l, n) : "av01" === a ? this._parseEnhancedAV1VideoPacket(e, t + 5, i - 5, s, r, l, n) : null === (o = this._onError) || void 0 === o || o.call(this, p.Z.CODEC_UNSUPPORTED, `Flv: Unsupported codec in video frame: ${a}`)
                } else {
                  const n = 15 & d;
                  7 === n ? this._parseAVCVideoPacket(e, t + 1, i - 1, s, r, l) : 12 === n ? this._parseHEVCVideoPacket(e, t + 1, i - 1, s, r, l) : null === (a = this._onError) || void 0 === a || a.call(this, p.Z.CODEC_UNSUPPORTED, `Flv: Unsupported codec in video frame: ${n}`)
                }
              }
              _parseAVCVideoPacket(e, t, i, s, r, a) {
                var o;
                if (i < 4) return void n.Z.w(this.TAG, "Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime");
                const d = this._littleEndian,
                  l = new DataView(e, t, i),
                  h = l.getUint8(0),
                  c = (16777215 & l.getUint32(0, !d)) << 8 >> 8;
                0 === h ? this._parseAVCDecoderConfigurationRecord(e, t + 4, i - 4) : 1 === h ? this._parseAVCVideoData(e, t + 4, i - 4, s, r, a, c) : 2 === h || null === (o = this._onError) || void 0 === o || o.call(this, p.Z.FORMAT_ERROR, `Flv: Invalid video packet type ${h}`)
              }
              _parseHEVCVideoPacket(e, t, i, s, r, a) {
                var o;
                if (i < 4) return void n.Z.w(this.TAG, "Flv: Invalid HEVC packet, missing HEVCPacketType or/and CompositionTime");
                const d = this._littleEndian,
                  l = new DataView(e, t, i),
                  h = l.getUint8(0),
                  c = (16777215 & l.getUint32(0, !d)) << 8 >> 8;
                0 === h ? this._parseHEVCDecoderConfigurationRecord(e, t + 4, i - 4) : 1 === h ? this._parseHEVCVideoData(e, t + 4, i - 4, s, r, a, c) : 2 === h || null === (o = this._onError) || void 0 === o || o.call(this, p.Z.FORMAT_ERROR, `Flv: Invalid video packet type ${h}`)
              }
              _parseEnhancedHEVCVideoPacket(e, t, i, s, n, r, a) {
                var o;
                const d = this._littleEndian,
                  l = new DataView(e, t, i);
                if (0 === a) this._parseHEVCDecoderConfigurationRecord(e, t, i);
                else if (1 === a) {
                  const a = (4294967040 & l.getUint32(0, !d)) >> 8;
                  this._parseHEVCVideoData(e, t + 3, i - 3, s, n, r, a)
                } else 3 === a ? this._parseHEVCVideoData(e, t, i, s, n, r, 0) : 2 === a || null === (o = this._onError) || void 0 === o || o.call(this, p.Z.FORMAT_ERROR, `Flv: Invalid video packet type ${a}`)
              }
              _parseEnhancedAV1VideoPacket(e, t, i, s, n, r, a) {
                var o, d;
                this._littleEndian, 0 === a ? this._parseAV1CodecConfigurationRecord(e, t, i) : 1 === a ? this._parseAV1VideoData(e, t, i, s, n, r, 0) : 5 === a ? null === (o = this._onError) || void 0 === o || o.call(this, p.Z.FORMAT_ERROR, `Flv: Not Suported MP2T AV1 video packet type ${a}`) : 2 === a || null === (d = this._onError) || void 0 === d || d.call(this, p.Z.FORMAT_ERROR, `Flv: Invalid video packet type ${a}`)
              }
              _parseAVCDecoderConfigurationRecord(e, t, i) {
                var s, r, a, o, d, l, h, c, u, A, _;
                if (i < 7) return void n.Z.w(this.TAG, "Flv: Invalid AVCDecoderConfigurationRecord, lack of data!");
                let f = this._videoMetadata;
                const g = this._videoTrack,
                  v = this._littleEndian,
                  y = new DataView(e, t, i);
                if (f) {
                  if (void 0 !== f.avcc) {
                    const s = new Uint8Array(e, t, i);
                    if (S(s, f.avcc)) return;
                    n.Z.w(this.TAG, "AVCDecoderConfigurationRecord has been changed, re-generate initialization segment")
                  }
                } else !1 !== this._hasVideo || this._hasVideoFlagOverrided || (this._hasVideo = !0, this._mediaInfo && (this._mediaInfo.hasVideo = !0)), f = this._videoMetadata = {}, f.type = "video", f.id = null == g ? void 0 : g.id, f.timescale = this._timescale, f.duration = this._duration;
                const E = y.getUint8(0),
                  b = y.getUint8(1);
                if (y.getUint8(2), y.getUint8(3), 1 !== E || 0 === b) return void(null === (s = this._onError) || void 0 === s || s.call(this, p.Z.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord"));
                if (this._naluLengthSize = 1 + (3 & y.getUint8(4)), 3 !== this._naluLengthSize && 4 !== this._naluLengthSize) return void(null === (r = this._onError) || void 0 === r || r.call(this, p.Z.FORMAT_ERROR, "Flv: Strange NaluLengthSizeMinusOne: " + (this._naluLengthSize - 1)));
                const w = 31 & y.getUint8(5);
                if (0 === w) return void(null === (a = this._onError) || void 0 === a || a.call(this, p.Z.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No SPS"));
                w > 1 && n.Z.w(this.TAG, `Flv: Strange AVCDecoderConfigurationRecord: SPS Count = ${w}`);
                let T = 6;
                for (let i = 0; i < w; i++) {
                  const s = y.getUint16(T, !v);
                  if (T += 2, 0 === s) continue;
                  const n = new Uint8Array(e, t + T, s);
                  T += s;
                  const r = m.parseSPS(n);
                  if (0 !== i) continue;
                  f.codecWidth = r.codec_size.width, f.codecHeight = r.codec_size.height, f.presentWidth = r.present_size.width, f.presentHeight = r.present_size.height, f.profile = r.profile_string, f.level = r.level_string, f.bitDepth = r.bit_depth, f.chromaFormat = r.chroma_format, f.sarRatio = r.sar_ratio, f.frameRate = r.frame_rate, r.frame_rate.fixed && 0 !== r.frame_rate.fps_num && 0 !== r.frame_rate.fps_den || (f.frameRate = this._referenceFrameRate);
                  const a = null === (o = f.frameRate) || void 0 === o ? void 0 : o.fps_den,
                    h = null === (d = f.frameRate) || void 0 === d ? void 0 : d.fps_num;
                  f.refSampleDuration = f.timescale * (a / h);
                  const c = n.subarray(1, 4);
                  let u = "avc1.";
                  for (let e = 0; e < 3; e++) {
                    let t = c[e].toString(16);
                    t.length < 2 && (t = "0" + t), u += t
                  }
                  f.codec = u;
                  const A = this._mediaInfo;
                  A.width = f.codecWidth, A.height = f.codecHeight, A.fps = f.frameRate.fps, A.profile = f.profile, A.level = f.level, A.refFrames = r.ref_frames, A.chromaFormat = r.chroma_format_string, A.sarNum = f.sarRatio.width, A.sarDen = f.sarRatio.height, A.videoCodec = u, A.hasAudio ? null != A.audioCodec && (A.mimeType = 'video/x-flv; codecs="' + A.videoCodec + "," + A.audioCodec + '"') : A.mimeType = 'video/x-flv; codecs="' + A.videoCodec + '"', A.isComplete() && (null === (l = this._onMediaInfo) || void 0 === l || l.call(this, A))
                }
                const R = y.getUint8(T);
                if (0 !== R) {
                  R > 1 && n.Z.w(this.TAG, `Flv: Strange AVCDecoderConfigurationRecord: PPS Count = ${R}`), T++;
                  for (let e = 0; e < R; e++) {
                    const e = y.getUint16(T, !v);
                    T += 2, 0 !== e && (T += e)
                  }
                  f.avcc = new Uint8Array(i), f.avcc.set(new Uint8Array(e, t, i), 0), n.Z.v(this.TAG, "Parsed AVCDecoderConfigurationRecord"), this._isInitialMetadataDispatched() ? this._dispatch && ((null === (c = this._audioTrack) || void 0 === c ? void 0 : c.length) || (null === (u = this._videoTrack) || void 0 === u ? void 0 : u.length)) && (null === (A = this._onDataAvailable) || void 0 === A || A.call(this, this._audioTrack, this._videoTrack)) : this._videoInitialMetadataDispatched = !0, this._dispatch = !1, null === (_ = this._onTrackMetadata) || void 0 === _ || _.call(this, "video", f)
                } else null === (h = this._onError) || void 0 === h || h.call(this, p.Z.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No PPS")
              }
              _parseHEVCDecoderConfigurationRecord(e, t, i) {
                var s, r, a, o, d, l, h;
                if (i < 22) return void n.Z.w(this.TAG, "Flv: Invalid HEVCDecoderConfigurationRecord, lack of data!");
                let c = this._videoMetadata;
                const u = this._videoTrack,
                  A = this._littleEndian,
                  _ = new DataView(e, t, i);
                if (c) {
                  if (void 0 !== c.hvcc) {
                    const s = new Uint8Array(e, t, i);
                    if (S(s, c.hvcc)) return;
                    n.Z.w(this.TAG, "HEVCDecoderConfigurationRecord has been changed, re-generate initialization segment")
                  }
                } else !1 !== this._hasVideo || this._hasVideoFlagOverrided || (this._hasVideo = !0, this._mediaInfo && (this._mediaInfo.hasVideo = !0)), c = this._videoMetadata = {}, c.type = "video", c.id = null == u ? void 0 : u.id, c.timescale = this._timescale, c.duration = this._duration;
                const m = _.getUint8(0),
                  f = 31 & _.getUint8(1);
                if (1 !== m || 0 === f) return void(null === (s = this._onError) || void 0 === s || s.call(this, p.Z.FORMAT_ERROR, "Flv: Invalid HEVCDecoderConfigurationRecord"));
                if (this._naluLengthSize = 1 + (3 & _.getUint8(21)), 3 !== this._naluLengthSize && 4 !== this._naluLengthSize) return void(null === (r = this._onError) || void 0 === r || r.call(this, p.Z.FORMAT_ERROR, "Flv: Strange NaluLengthSizeMinusOne: " + (this._naluLengthSize - 1)));
                const v = _.getUint8(22);
                for (let i = 0, s = 23; i < v; i++) {
                  const i = 63 & _.getUint8(s + 0),
                    n = _.getUint16(s + 1, !A);
                  s += 3;
                  for (let r = 0; r < n; r++) {
                    const n = _.getUint16(s + 0, !A);
                    if (0 === r)
                      if (33 === i) {
                        s += 2;
                        const i = new Uint8Array(e, t + s, n),
                          r = g.parseSPS(i);
                        c.codecWidth = r.codec_size.width, c.codecHeight = r.codec_size.height, c.presentWidth = r.present_size.width, c.presentHeight = r.present_size.height, c.profile = null == r ? void 0 : r.profile_string, c.level = r.level_string, c.bitDepth = r.bit_depth, c.chromaFormat = r.chroma_format, c.sarRatio = r.sar_ratio, c.frameRate = r.frame_rate, r.frame_rate.fixed && 0 !== r.frame_rate.fps_num && 0 !== r.frame_rate.fps_den || (c.frameRate = this._referenceFrameRate);
                        const o = c.frameRate.fps_den,
                          d = c.frameRate.fps_num;
                        c.refSampleDuration = c.timescale * (o / d), c.codec = r.codec_mimetype;
                        const l = this._mediaInfo;
                        l.width = c.codecWidth, l.height = c.codecHeight, l.fps = c.frameRate.fps, l.profile = c.profile, l.level = c.level, l.refFrames = r.ref_frames, l.chromaFormat = r.chroma_format_string, l.sarNum = c.sarRatio.width, l.sarDen = c.sarRatio.height, l.videoCodec = r.codec_mimetype, l.hasAudio ? null != l.audioCodec && (l.mimeType = 'video/x-flv; codecs="' + l.videoCodec + "," + l.audioCodec + '"') : l.mimeType = 'video/x-flv; codecs="' + l.videoCodec + '"', l.isComplete() && (null === (a = this._onMediaInfo) || void 0 === a || a.call(this, l)), s += n
                      } else s += 2 + n;
                    else s += 2 + n
                  }
                }
                c.hvcc = new Uint8Array(i), c.hvcc.set(new Uint8Array(e, t, i), 0), n.Z.v(this.TAG, "Parsed HEVCDecoderConfigurationRecord"), this._isInitialMetadataDispatched() ? this._dispatch && ((null === (o = this._audioTrack) || void 0 === o ? void 0 : o.length) || (null === (d = this._videoTrack) || void 0 === d ? void 0 : d.length)) && (null === (l = this._onDataAvailable) || void 0 === l || l.call(this, this._audioTrack, this._videoTrack)) : this._videoInitialMetadataDispatched = !0, this._dispatch = !1, null === (h = this._onTrackMetadata) || void 0 === h || h.call(this, "video", c)
              }
              _parseAV1CodecConfigurationRecord(e, t, i) {
                var s, r, a, o, d, l, h, c, u, A, _;
                if (i < 4) return void n.Z.w(this.TAG, "Flv: Invalid AV1CodecConfigurationRecord, lack of data!");
                let m = this._videoMetadata;
                const f = this._videoTrack,
                  g = (this._littleEndian, new DataView(e, t, i));
                m ? void 0 !== m.av1c && n.Z.w(this.TAG, "Found another AV1CodecConfigurationRecord!") : (!1 !== this._hasVideo || this._hasVideoFlagOverrided || (this._hasVideo = !0, this._mediaInfo && (this._mediaInfo.hasVideo = !0)), m = this._videoMetadata = {}, m.type = "video", m.id = null == f ? void 0 : f.id, m.timescale = this._timescale, m.duration = this._duration);
                const v = 127 & g.getUint8(0);
                if (g.getUint8(1), g.getUint8(1), g.getUint8(2), 1 !== v) return void(null === (s = this._onError) || void 0 === s || s.call(this, p.Z.FORMAT_ERROR, "Flv: Invalid AV1CodecConfigurationRecord"));
                const y = w.parseOBUs(new Uint8Array(e, t + 4, i - 4));
                if (null == y) return void(null === (r = this._onError) || void 0 === r || r.call(this, p.Z.FORMAT_ERROR, "Flv: Invalid AV1CodecConfigurationRecord"));
                m.codecWidth = null === (a = null == y ? void 0 : y.codec_size) || void 0 === a ? void 0 : a.width, m.codecHeight = null === (o = null == y ? void 0 : y.codec_size) || void 0 === o ? void 0 : o.height, m.presentWidth = null === (d = null == y ? void 0 : y.present_size) || void 0 === d ? void 0 : d.width, m.presentHeight = null === (l = null == y ? void 0 : y.present_size) || void 0 === l ? void 0 : l.height, m.profile = y.profile_string, m.level = y.level_string, m.bitDepth = y.bit_depth, m.chromaFormat = y.chroma_format, m.sarRatio = y.sar_ratio, m.frameRate = y.frame_rate, y.frame_rate.fixed && 0 !== y.frame_rate.fps_num && 0 !== y.frame_rate.fps_den || (m.frameRate = this._referenceFrameRate);
                const E = m.frameRate.fps_den,
                  S = m.frameRate.fps_num;
                m.refSampleDuration = m.timescale * (E / S), m.codec = y.codec_mimetype;
                const b = this._mediaInfo;
                b.width = m.codecWidth, b.height = m.codecHeight, b.fps = m.frameRate.fps, b.profile = m.profile, b.level = m.level, b.refFrames = y.ref_frames, b.chromaFormat = y.chroma_format_string, b.sarNum = m.sarRatio.width, b.sarDen = m.sarRatio.height, b.videoCodec = y.codec_mimetype, b.hasAudio ? null != b.audioCodec && (b.mimeType = 'video/x-flv; codecs="' + b.videoCodec + "," + b.audioCodec + '"') : b.mimeType = 'video/x-flv; codecs="' + b.videoCodec + '"', b.isComplete() && (null === (h = this._onMediaInfo) || void 0 === h || h.call(this, b)), m.av1c = new Uint8Array(i), m.av1c.set(new Uint8Array(e, t, i), 0), n.Z.v(this.TAG, "Parsed AV1CodecConfigurationRecord"), this._isInitialMetadataDispatched() ? this._dispatch && ((null === (c = this._audioTrack) || void 0 === c ? void 0 : c.length) || (null === (u = this._videoTrack) || void 0 === u ? void 0 : u.length)) && (null === (A = this._onDataAvailable) || void 0 === A || A.call(this, this._audioTrack, this._videoTrack)) : this._videoInitialMetadataDispatched = !0, this._dispatch = !1, null === (_ = this._onTrackMetadata) || void 0 === _ || _.call(this, "video", m)
              }
              _parseAVCVideoData(e, t, i, s, r, a, o) {
                const d = this._littleEndian,
                  l = new DataView(e, t, i),
                  h = [];
                let c = 0,
                  u = 0;
                const A = this._naluLengthSize,
                  _ = this._timestampBase + s;
                let m = 1 === a;
                for (; u < i;) {
                  if (u + 4 >= i) {
                    n.Z.w(this.TAG, `Malformed Nalu near timestamp ${_}, offset = ${u}, dataSize = ${i}`);
                    break
                  }
                  let s = l.getUint32(u, !d);
                  if (3 === A && (s >>>= 8), s > i - A) return void n.Z.w(this.TAG, `Malformed Nalus near timestamp ${_}, NaluSize > DataSize!`);
                  const r = 31 & l.getUint8(u + A);
                  5 === r && (m = !0);
                  const a = new Uint8Array(e, t + u, A + s),
                    o = {
                      type: r,
                      data: a
                    };
                  h.push(o), c += a.byteLength, u += A + s
                }
                if (h.length) {
                  const e = this._videoTrack,
                    t = {
                      units: h,
                      length: c,
                      isKeyframe: m,
                      dts: _,
                      cts: o,
                      pts: _ + o
                    };
                  m && (t.fileposition = r), e && (e.samples.push(t), e.length += c)
                }
              }
              _parseHEVCVideoData(e, t, i, s, r, a, o) {
                const d = this._littleEndian,
                  l = new DataView(e, t, i),
                  h = [];
                let c = 0,
                  u = 0;
                const A = this._naluLengthSize,
                  _ = this._timestampBase + s;
                let m = 1 === a;
                for (; u < i;) {
                  if (u + 4 >= i) {
                    n.Z.w(this.TAG, `Malformed Nalu near timestamp ${_}, offset = ${u}, dataSize = ${i}`);
                    break
                  }
                  let s = l.getUint32(u, !d);
                  if (3 === A && (s >>>= 8), s > i - A) return void n.Z.w(this.TAG, `Malformed Nalus near timestamp ${_}, NaluSize > DataSize!`);
                  const r = 31 & l.getUint8(u + A);
                  19 !== r && 20 !== r || (m = !0);
                  const a = new Uint8Array(e, t + u, A + s),
                    o = {
                      type: r,
                      data: a
                    };
                  h.push(o), c += a.byteLength, u += A + s
                }
                if (h.length) {
                  const e = this._videoTrack,
                    t = {
                      units: h,
                      length: c,
                      isKeyframe: m,
                      dts: _,
                      cts: o,
                      pts: _ + o
                    };
                  m && (t.fileposition = r), e && (null == e || e.samples.push(t), e.length += c)
                }
              }
              _parseAV1VideoData(e, t, i, s, n, r, a) {
                this._littleEndian;
                const o = [];
                let d = 0;
                const l = this._timestampBase + s,
                  h = 1 === r;
                if (d = i, o.push({
                    unitType: 0,
                    data: new Uint8Array(e, t + 0, i)
                  }), o.length) {
                  const e = this._videoTrack,
                    t = {
                      units: o,
                      length: d,
                      isKeyframe: h,
                      dts: l,
                      cts: a,
                      pts: l + a
                    };
                  h && (t.fileposition = n), e && (null == e || e.samples.push(t), e.length += d)
                }
              }
            }
            const R = T;
            class C {
              constructor() {}
              destroy() {
                this.onError = null, this.onMediaInfo = null, this.onMetaDataArrived = null, this.onTrackMetadata = null, this.onDataAvailable = null, this.onTimedID3Metadata = null, this.onSMPTE2038Metadata = null, this.onSCTE35Metadata = null, this.onPESPrivateData = null, this.onPESPrivateDataDescriptor = null
              }
            }
            class B {
              constructor() {
                this.program_pmt_pid = {}
              }
            }
            var k, I, O, D;
            ! function(e) {
              e[e.kMPEG1Audio = 3] = "kMPEG1Audio", e[e.kMPEG2Audio = 4] = "kMPEG2Audio", e[e.kPESPrivateData = 6] = "kPESPrivateData", e[e.kADTSAAC = 15] = "kADTSAAC", e[e.kLOASAAC = 17] = "kLOASAAC", e[e.kAC3 = 129] = "kAC3", e[e.kEAC3 = 135] = "kEAC3", e[e.kID3 = 21] = "kID3", e[e.kSCTE35 = 134] = "kSCTE35", e[e.kH264 = 27] = "kH264", e[e.kH265 = 36] = "kH265"
            }(k || (k = {}));
            class L {
              constructor() {
                this.pid_stream_type = {}, this.common_pids = {
                  h264: void 0,
                  h265: void 0,
                  adts_aac: void 0,
                  loas_aac: void 0,
                  opus: void 0,
                  ac3: void 0,
                  eac3: void 0,
                  mp3: void 0
                }, this.pes_private_data_pids = {}, this.timed_id3_pids = {}, this.scte_35_pids = {}, this.smpte2038_pids = {}
              }
            }
            class x {}
            class M {}
            class P {
              constructor() {
                this.slices = [], this.total_length = 0, this.expected_length = 0, this.file_position = 0, this.random_access_indicator = 0
              }
            }! function(e) {
              e[e.kUnspecified = 0] = "kUnspecified", e[e.kSliceNonIDR = 1] = "kSliceNonIDR", e[e.kSliceDPA = 2] = "kSliceDPA", e[e.kSliceDPB = 3] = "kSliceDPB", e[e.kSliceDPC = 4] = "kSliceDPC", e[e.kSliceIDR = 5] = "kSliceIDR", e[e.kSliceSEI = 6] = "kSliceSEI", e[e.kSliceSPS = 7] = "kSliceSPS", e[e.kSlicePPS = 8] = "kSlicePPS", e[e.kSliceAUD = 9] = "kSliceAUD", e[e.kEndOfSequence = 10] = "kEndOfSequence", e[e.kEndOfStream = 11] = "kEndOfStream", e[e.kFiller = 12] = "kFiller", e[e.kSPSExt = 13] = "kSPSExt", e[e.kReserved0 = 14] = "kReserved0"
            }(I || (I = {}));
            class U {}
            class F {
              constructor(e) {
                const t = e.data.byteLength;
                this.type = e.type, this.data = new Uint8Array(4 + t), new DataView(this.data.buffer).setUint32(0, t), this.data.set(e.data, 4)
              }
            }
            class V {
              constructor(e) {
                this.TAG = "H264AnnexBParser", this.current_startcode_offset_ = 0, this.eof_flag_ = !1, this.data_ = e, this.current_startcode_offset_ = this.findNextStartCodeOffset(0), this.eof_flag_ && n.Z.e(this.TAG, "Could not find H264 startcode until payload end!")
              }
              findNextStartCodeOffset(e) {
                let t = e;
                const i = this.data_;
                for (;;) {
                  if (t + 3 >= i.byteLength) return this.eof_flag_ = !0, i.byteLength;
                  const e = i[t + 0] << 24 | i[t + 1] << 16 | i[t + 2] << 8 | i[t + 3],
                    s = i[t + 0] << 16 | i[t + 1] << 8 | i[t + 2];
                  if (1 === e || 1 === s) return t;
                  t++
                }
              }
              readNextNaluPayload() {
                const e = this.data_;
                let t = null;
                for (; null == t && !this.eof_flag_;) {
                  let i = this.current_startcode_offset_;
                  i += 1 == (e[i] << 24 | e[i + 1] << 16 | e[i + 2] << 8 | e[i + 3]) ? 4 : 3;
                  const s = 31 & e[i],
                    n = (128 & e[i]) >>> 7,
                    r = this.findNextStartCodeOffset(i);
                  if (this.current_startcode_offset_ = r, s >= I.kReserved0) continue;
                  if (0 !== n) continue;
                  const a = e.subarray(i, r);
                  t = new U, t.type = s, t.data = a
                }
                return t
              }
            }
            class N {
              constructor(e, t, i) {
                let s = 8 + e.byteLength + 1 + 2 + t.byteLength,
                  n = !1;
                66 !== e[3] && 77 !== e[3] && 88 !== e[3] && (n = !0, s += 4);
                const r = this.data = new Uint8Array(s);
                r[0] = 1, r[1] = e[1], r[2] = e[2], r[3] = e[3], r[4] = 255, r[5] = 225;
                const a = e.byteLength;
                r[6] = a >>> 8, r[7] = 255 & a;
                let o = 8;
                r.set(e, 8), o += a, r[o] = 1;
                const d = t.byteLength;
                r[o + 1] = d >>> 8, r[o + 2] = 255 & d, r.set(t, o + 3), o += 3 + d, n && (r[o] = 252 | i.chroma_format_idc, r[o + 1] = 248 | i.bit_depth_luma - 8, r[o + 2] = 248 | i.bit_depth_chroma - 8, r[o + 3] = 0, o += 4)
              }
              getData() {
                return this.data
              }
            }! function(e) {
              e[e.kNull = 0] = "kNull", e[e.kAACMain = 1] = "kAACMain", e[e.kAAC_LC = 2] = "kAAC_LC", e[e.kAAC_SSR = 3] = "kAAC_SSR", e[e.kAAC_LTP = 4] = "kAAC_LTP", e[e.kAAC_SBR = 5] = "kAAC_SBR", e[e.kAAC_Scalable = 6] = "kAAC_Scalable", e[e.kLayer1 = 32] = "kLayer1", e[e.kLayer2 = 33] = "kLayer2", e[e.kLayer3 = 34] = "kLayer3"
            }(O || (O = {})),
            function(e) {
              e[e.k96000Hz = 0] = "k96000Hz", e[e.k88200Hz = 1] = "k88200Hz", e[e.k64000Hz = 2] = "k64000Hz", e[e.k48000Hz = 3] = "k48000Hz", e[e.k44100Hz = 4] = "k44100Hz", e[e.k32000Hz = 5] = "k32000Hz", e[e.k24000Hz = 6] = "k24000Hz", e[e.k22050Hz = 7] = "k22050Hz", e[e.k16000Hz = 8] = "k16000Hz", e[e.k12000Hz = 9] = "k12000Hz", e[e.k11025Hz = 10] = "k11025Hz", e[e.k8000Hz = 11] = "k8000Hz", e[e.k7350Hz = 12] = "k7350Hz"
            }(D || (D = {}));
            const Z = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
            class G {}
            class $ extends G {}
            class W {
              constructor(e) {
                this.TAG = "AACADTSParser", this.data_ = e, this.current_syncword_offset_ = this.findNextSyncwordOffset(0), this.eof_flag_ && n.Z.e(this.TAG, "Could not found ADTS syncword until payload end")
              }
              findNextSyncwordOffset(e) {
                let t = e;
                const i = this.data_;
                for (;;) {
                  if (t + 7 >= i.byteLength) return this.eof_flag_ = !0, i.byteLength;
                  if (4095 == (i[t + 0] << 8 | i[t + 1]) >>> 4) return t;
                  t++
                }
              }
              readNextAACFrame() {
                const e = this.data_;
                let t = null;
                for (; null == t && !this.eof_flag_;) {
                  let i = this.current_syncword_offset_;
                  const s = (8 & e[i + 1]) >>> 3,
                    n = (6 & e[i + 1]) >>> 1,
                    r = 1 & e[i + 1],
                    a = (192 & e[i + 2]) >>> 6,
                    o = (60 & e[i + 2]) >>> 2,
                    d = (1 & e[i + 2]) << 2 | (192 & e[i + 3]) >>> 6,
                    l = (3 & e[i + 3]) << 11 | e[i + 4] << 3 | (224 & e[i + 5]) >>> 5;
                  if (e[i + 6], i + l > this.data_.byteLength) {
                    this.eof_flag_ = !0, this.has_last_incomplete_data = !0;
                    break
                  }
                  const h = 1 === r ? 7 : 9,
                    c = l - h;
                  i += h;
                  const u = this.findNextSyncwordOffset(i + c);
                  if (this.current_syncword_offset_ = u, 0 !== s && 1 !== s || 0 !== n) continue;
                  const A = e.subarray(i, i + c);
                  t = new G, t.audio_object_type = a + 1, t.sampling_freq_index = o, t.sampling_frequency = Z[o], t.channel_config = d, t.data = A
                }
                return t
              }
              hasIncompleteData() {
                return this.has_last_incomplete_data
              }
              getIncompleteData() {
                return this.has_last_incomplete_data ? this.data_.subarray(this.current_syncword_offset_) : null
              }
            }
            class Q {
              constructor(e) {
                this.TAG = "AACLOASParser", this.data_ = e, this.current_syncword_offset_ = this.findNextSyncwordOffset(0), this.eof_flag_ && n.Z.e(this.TAG, "Could not found LOAS syncword until payload end")
              }
              findNextSyncwordOffset(e) {
                let t = e;
                const i = this.data_;
                for (;;) {
                  if (t + 1 >= i.byteLength) return this.eof_flag_ = !0, i.byteLength;
                  if (695 == (i[t + 0] << 3 | i[t + 1] >>> 5)) return t;
                  t++
                }
              }
              getLATMValue(e) {
                const t = e.readBits(2);
                let i = 0;
                for (let s = 0; s <= t; s++) i <<= 8, i |= e.readByte();
                return i
              }
              readNextAACFrame(e) {
                const t = this.data_;
                let i = null;
                for (; null == i && !this.eof_flag_;) {
                  const s = this.current_syncword_offset_,
                    r = (31 & t[s + 1]) << 8 | t[s + 2];
                  if (s + 3 + r >= this.data_.byteLength) {
                    this.eof_flag_ = !0, this.has_last_incomplete_data = !0;
                    break
                  }
                  const a = new A(t.subarray(s + 3, s + 3 + r));
                  let o = null;
                  if (a.readBool()) {
                    if (null == e) {
                      n.Z.w(this.TAG, "StreamMuxConfig Missing"), this.current_syncword_offset_ = this.findNextSyncwordOffset(s + 3 + r), a.destroy();
                      continue
                    }
                    o = e
                  } else {
                    const e = a.readBool();
                    if (e && a.readBool()) {
                      n.Z.e(this.TAG, "audioMuxVersionA is Not Supported"), a.destroy();
                      break
                    }
                    if (e && this.getLATMValue(a), !a.readBool()) {
                      n.Z.e(this.TAG, "allStreamsSameTimeFraming zero is Not Supported"), a.destroy();
                      break
                    }
                    if (0 !== a.readBits(6)) {
                      n.Z.e(this.TAG, "more than 2 numSubFrames Not Supported"), a.destroy();
                      break
                    }
                    if (0 !== a.readBits(4)) {
                      n.Z.e(this.TAG, "more than 2 numProgram Not Supported"), a.destroy();
                      break
                    }
                    if (0 !== a.readBits(3)) {
                      n.Z.e(this.TAG, "more than 2 numLayer Not Supported"), a.destroy();
                      break
                    }
                    let t = e ? this.getLATMValue(a) : 0;
                    const i = a.readBits(5);
                    t -= 5;
                    const s = a.readBits(4);
                    t -= 4;
                    const r = a.readBits(4);
                    t -= 4, a.readBits(3), t -= 3, t > 0 && a.readBits(t);
                    const d = a.readBits(3);
                    if (0 !== d) {
                      n.Z.e(this.TAG, `frameLengthType = ${d}. Only frameLengthType = 0 Supported`), a.destroy();
                      break
                    }
                    a.readByte();
                    const l = a.readBool();
                    if (l)
                      if (e) this.getLATMValue(a);
                      else {
                        let e = 0;
                        for (;;) {
                          e <<= 8;
                          const t = a.readBool();
                          if (e += a.readByte(), !t) break
                        }
                      } a.readBool() && a.readByte(), o = new $, o.audio_object_type = i, o.sampling_freq_index = s, o.sampling_frequency = Z[o.sampling_freq_index], o.channel_config = r, o.other_data_present = l
                  }
                  let d = 0;
                  for (;;) {
                    const e = a.readByte();
                    if (d += e, 255 !== e) break
                  }
                  const l = new Uint8Array(d);
                  for (let e = 0; e < d; e++) l[e] = a.readByte();
                  i = new $, i.audio_object_type = o.audio_object_type, i.sampling_freq_index = o.sampling_freq_index, i.sampling_frequency = Z[o.sampling_freq_index], i.channel_config = o.channel_config, i.other_data_present = o.other_data_present, i.data = l, this.current_syncword_offset_ = this.findNextSyncwordOffset(s + 3 + r)
                }
                return i
              }
              hasIncompleteData() {
                return this.has_last_incomplete_data
              }
              getIncompleteData() {
                return this.has_last_incomplete_data ? this.data_.subarray(this.current_syncword_offset_) : null
              }
            }
            class H {
              constructor(e) {
                let t = [];
                const i = e.audio_object_type;
                let s = e.audio_object_type;
                const n = e.sampling_freq_index,
                  r = e.channel_config;
                let a = 0;
                const o = navigator.userAgent.toLowerCase();
                o.includes("firefox") ? n >= 6 ? (s = 5, t = new Array(4), a = n - 3) : (s = 2, t = new Array(2), a = n) : o.includes("android") ? (s = 2, t = new Array(2), a = n) : (s = 5, a = n, t = new Array(4), n >= 6 ? a = n - 3 : 1 === r && (s = 2, t = new Array(2), a = n)), t[0] = s << 3, t[0] |= (15 & n) >>> 1, t[1] = (15 & n) << 7, t[1] |= (15 & r) << 3, 5 === s && (t[1] |= (15 & a) >>> 1, t[2] = (1 & a) << 7, t[2] |= 8, t[3] = 0), this.config = t, this.sampling_rate = Z[n], this.channel_count = r, this.codec_mimetype = "mp4a.40." + s.toString(), this.original_codec_mimetype = "mp4a.40." + i.toString()
              }
            }
            class z {}
            class j {}
            var q;
            ! function(e) {
              e[e.kSpliceNull = 0] = "kSpliceNull", e[e.kSpliceSchedule = 4] = "kSpliceSchedule", e[e.kSpliceInsert = 5] = "kSpliceInsert", e[e.kTimeSignal = 6] = "kTimeSignal", e[e.kBandwidthReservation = 7] = "kBandwidthReservation", e[e.kPrivateCommand = 255] = "kPrivateCommand"
            }(q || (q = {}));
            const Y = e => {
                const t = e.readBool();
                return t ? (e.readBits(6), {
                  time_specified_flag: t,
                  pts_time: 4 * e.readBits(31) + e.readBits(2)
                }) : (e.readBits(7), {
                  time_specified_flag: t
                })
              },
              X = e => {
                const t = e.readBool();
                return e.readBits(6), {
                  auto_return: t,
                  duration: 4 * e.readBits(31) + e.readBits(2)
                }
              },
              K = (e, t) => {
                const i = t.readBits(8);
                return e ? {
                  component_tag: i
                } : {
                  component_tag: i,
                  splice_time: Y(t)
                }
              },
              J = e => ({
                component_tag: e.readBits(8),
                utc_splice_time: e.readBits(32)
              }),
              ee = e => {
                const t = e.readBits(32),
                  i = e.readBool();
                e.readBits(7);
                const s = {
                  splice_event_id: t,
                  splice_event_cancel_indicator: i
                };
                if (i) return s;
                if (s.out_of_network_indicator = e.readBool(), s.program_splice_flag = e.readBool(), s.duration_flag = e.readBool(), e.readBits(5), s.program_splice_flag) s.utc_splice_time = e.readBits(32);
                else {
                  s.component_count = e.readBits(8), s.components = [];
                  for (let t = 0; t < s.component_count; t++) s.components.push(J(e))
                }
                return s.duration_flag && (s.break_duration = X(e)), s.unique_program_id = e.readBits(16), s.avail_num = e.readBits(8), s.avails_expected = e.readBits(8), s
              },
              te = (e, t, i, s) => ({
                descriptor_tag: e,
                descriptor_length: t,
                identifier: i,
                provider_avail_id: s.readBits(32)
              }),
              ie = (e, t, i, s) => {
                const n = s.readBits(8),
                  r = s.readBits(3);
                s.readBits(5);
                let a = "";
                for (let e = 0; e < r; e++) a += String.fromCharCode(s.readBits(8));
                return {
                  descriptor_tag: e,
                  descriptor_length: t,
                  identifier: i,
                  preroll: n,
                  dtmf_count: r,
                  DTMF_char: a
                }
              },
              se = e => {
                const t = e.readBits(8);
                return e.readBits(7), {
                  component_tag: t,
                  pts_offset: 4 * e.readBits(31) + e.readBits(2)
                }
              },
              ne = (e, t, i, s) => {
                const n = s.readBits(32),
                  r = s.readBool();
                s.readBits(7);
                const a = {
                  descriptor_tag: e,
                  descriptor_length: t,
                  identifier: i,
                  segmentation_event_id: n,
                  segmentation_event_cancel_indicator: r
                };
                if (r) return a;
                if (a.program_segmentation_flag = s.readBool(), a.segmentation_duration_flag = s.readBool(), a.delivery_not_restricted_flag = s.readBool(), a.delivery_not_restricted_flag ? s.readBits(5) : (a.web_delivery_allowed_flag = s.readBool(), a.no_regional_blackout_flag = s.readBool(), a.archive_allowed_flag = s.readBool(), a.device_restrictions = s.readBits(2)), !a.program_segmentation_flag) {
                  a.component_count = s.readBits(8), a.components = [];
                  for (let e = 0; e < a.component_count; e++) a.components.push(se(s))
                }
                a.segmentation_duration_flag && (a.segmentation_duration = s.readBits(40)), a.segmentation_upid_type = s.readBits(8), a.segmentation_upid_length = s.readBits(8); {
                  const e = new Uint8Array(a.segmentation_upid_length);
                  for (let t = 0; t < a.segmentation_upid_length; t++) e[t] = s.readBits(8);
                  a.segmentation_upid = e.buffer
                }
                return a.segmentation_type_id = s.readBits(8), a.segment_num = s.readBits(8), a.segments_expected = s.readBits(8), 52 !== a.segmentation_type_id && 54 !== a.segmentation_type_id && 56 !== a.segmentation_type_id && 58 !== a.segmentation_type_id || (a.sub_segment_num = s.readBits(8), a.sub_segments_expected = s.readBits(8)), a
              },
              re = (e, t, i, s) => ({
                descriptor_tag: e,
                descriptor_length: t,
                identifier: i,
                TAI_seconds: s.readBits(48),
                TAI_ns: s.readBits(32),
                UTC_offset: s.readBits(16)
              }),
              ae = e => ({
                component_tag: e.readBits(8),
                ISO_code: String.fromCharCode(e.readBits(8), e.readBits(8), e.readBits(8)),
                Bit_Stream_Mode: e.readBits(3),
                Num_Channels: e.readBits(4),
                Full_Srvc_Audio: e.readBool()
              }),
              oe = (e, t, i, s) => {
                const n = s.readBits(4),
                  r = [];
                for (let e = 0; e < n; e++) r.push(ae(s));
                return {
                  descriptor_tag: e,
                  descriptor_length: t,
                  identifier: i,
                  audio_count: n,
                  components: r
                }
              };
            var de;
            ! function(e) {
              e[e.kSliceIDR_W_RADL = 19] = "kSliceIDR_W_RADL", e[e.kSliceIDR_N_LP = 20] = "kSliceIDR_N_LP", e[e.kSliceCRA_NUT = 21] = "kSliceCRA_NUT", e[e.kSliceVPS = 32] = "kSliceVPS", e[e.kSliceSPS = 33] = "kSliceSPS", e[e.kSlicePPS = 34] = "kSlicePPS", e[e.kSliceAUD = 35] = "kSliceAUD"
            }(de || (de = {}));
            class le {}
            class he {
              constructor(e) {
                const t = e.data.byteLength;
                this.type = e.type, this.data = new Uint8Array(4 + t), new DataView(this.data.buffer).setUint32(0, t), this.data.set(e.data, 4)
              }
            }
            class ce {
              constructor(e) {
                this.TAG = "H265AnnexBParser", this.current_startcode_offset_ = 0, this.eof_flag_ = !1, this.data_ = e, this.current_startcode_offset_ = this.findNextStartCodeOffset(0), this.eof_flag_ && n.Z.e(this.TAG, "Could not find H265 startcode until payload end!")
              }
              findNextStartCodeOffset(e) {
                let t = e;
                const i = this.data_;
                for (;;) {
                  if (t + 3 >= i.byteLength) return this.eof_flag_ = !0, i.byteLength;
                  const e = i[t + 0] << 24 | i[t + 1] << 16 | i[t + 2] << 8 | i[t + 3],
                    s = i[t + 0] << 16 | i[t + 1] << 8 | i[t + 2];
                  if (1 === e || 1 === s) return t;
                  t++
                }
              }
              readNextNaluPayload() {
                const e = this.data_;
                let t = null;
                for (; null == t && !this.eof_flag_;) {
                  let i = this.current_startcode_offset_;
                  i += 1 == (e[i] << 24 | e[i + 1] << 16 | e[i + 2] << 8 | e[i + 3]) ? 4 : 3;
                  const s = e[i] >> 1 & 63,
                    n = (128 & e[i]) >>> 7,
                    r = this.findNextStartCodeOffset(i);
                  if (this.current_startcode_offset_ = r, 0 !== n) continue;
                  const a = e.subarray(i, r);
                  t = new le, t.type = s, t.data = a
                }
                return t
              }
            }
            class ue {
              constructor(e, t, i, s) {
                const n = 23 + (5 + e.byteLength) + (5 + t.byteLength) + (5 + i.byteLength),
                  r = this.data = new Uint8Array(n);
                r[0] = 1, r[1] = (3 & s.general_profile_space) << 6 | (s.general_tier_flag ? 1 : 0) << 5 | 31 & s.general_profile_idc, r[2] = s.general_profile_compatibility_flags_1, r[3] = s.general_profile_compatibility_flags_2, r[4] = s.general_profile_compatibility_flags_3, r[5] = s.general_profile_compatibility_flags_4, r[6] = s.general_constraint_indicator_flags_1, r[7] = s.general_constraint_indicator_flags_2, r[8] = s.general_constraint_indicator_flags_3, r[9] = s.general_constraint_indicator_flags_4, r[10] = s.general_constraint_indicator_flags_5, r[11] = s.general_constraint_indicator_flags_6, r[12] = s.general_level_idc, r[13] = 240 | (3840 & s.min_spatial_segmentation_idc) >> 8, r[14] = 255 & s.min_spatial_segmentation_idc, r[15] = 252 | 3 & s.parallelismType, r[16] = 252 | 3 & s.chroma_format_idc, r[17] = 248 | 7 & s.bit_depth_luma_minus8, r[18] = 248 | 7 & s.bit_depth_chroma_minus8, r[19] = 0, r[20] = 0, r[21] = (3 & s.constant_frame_rate) << 6 | (7 & s.num_temporal_layers) << 3 | (s.temporal_id_nested ? 1 : 0) << 2 | 3, r[22] = 3, r[23] = 128 | de.kSliceVPS, r[24] = 0, r[25] = 1, r[26] = (65280 & e.byteLength) >> 8, r[27] = (255 & e.byteLength) >> 0, r.set(e, 28), r[23 + (5 + e.byteLength) + 0] = 128 | de.kSliceSPS, r[23 + (5 + e.byteLength) + 1] = 0, r[23 + (5 + e.byteLength) + 2] = 1, r[23 + (5 + e.byteLength) + 3] = (65280 & t.byteLength) >> 8, r[23 + (5 + e.byteLength) + 4] = (255 & t.byteLength) >> 0, r.set(t, 23 + (5 + e.byteLength) + 5), r[23 + (5 + e.byteLength + 5 + t.byteLength) + 0] = 128 | de.kSlicePPS, r[23 + (5 + e.byteLength + 5 + t.byteLength) + 1] = 0, r[23 + (5 + e.byteLength + 5 + t.byteLength) + 2] = 1, r[23 + (5 + e.byteLength + 5 + t.byteLength) + 3] = (65280 & i.byteLength) >> 8, r[23 + (5 + e.byteLength + 5 + t.byteLength) + 4] = (255 & i.byteLength) >> 0, r.set(i, 23 + (5 + e.byteLength + 5 + t.byteLength) + 5)
              }
              getData() {
                return this.data
              }
            }
            class Ae {}
            class _e {}
            class me {}
            const pe = [
              [64, 64, 80, 80, 96, 96, 112, 112, 128, 128, 160, 160, 192, 192, 224, 224, 256, 256, 320, 320, 384, 384, 448, 448, 512, 512, 640, 640, 768, 768, 896, 896, 1024, 1024, 1152, 1152, 1280, 1280],
              [69, 70, 87, 88, 104, 105, 121, 122, 139, 140, 174, 175, 208, 209, 243, 244, 278, 279, 348, 349, 417, 418, 487, 488, 557, 558, 696, 697, 835, 836, 975, 976, 1114, 1115, 1253, 1254, 1393, 1394],
              [96, 96, 120, 120, 144, 144, 168, 168, 192, 192, 240, 240, 288, 288, 336, 336, 384, 384, 480, 480, 576, 576, 672, 672, 768, 768, 960, 960, 1152, 1152, 1344, 1344, 1536, 1536, 1728, 1728, 1920, 1920]
            ];
            class fe {
              constructor(e) {
                this.TAG = "AC3Parser", this.data_ = e, this.current_syncword_offset_ = this.findNextSyncwordOffset(0), this.eof_flag_ && n.Z.e(this.TAG, "Could not found AC3 syncword until payload end")
              }
              findNextSyncwordOffset(e) {
                let t = e;
                const i = this.data_;
                for (;;) {
                  if (t + 7 >= i.byteLength) return this.eof_flag_ = !0, i.byteLength;
                  if (2935 == (i[t + 0] << 8 | i[t + 1] << 0)) return t;
                  t++
                }
              }
              readNextAC3Frame() {
                const e = this.data_;
                let t = null;
                for (; null == t && !this.eof_flag_;) {
                  const i = this.current_syncword_offset_,
                    s = e[i + 4] >> 6,
                    n = [48e3, 44200, 33e3][s],
                    r = 63 & e[i + 4],
                    a = 2 * pe[s][r];
                  if (i + a > this.data_.byteLength) {
                    this.eof_flag_ = !0, this.has_last_incomplete_data = !0;
                    break
                  }
                  const o = this.findNextSyncwordOffset(i + a);
                  this.current_syncword_offset_ = o;
                  const d = e[i + 5] >> 3,
                    l = 7 & e[i + 5],
                    h = e[i + 6] >> 5;
                  let c = 0;
                  0 != (1 & h) && 1 !== h && (c += 2), 0 != (4 & h) && (c += 2), 2 === h && (c += 2);
                  const u = (e[i + 6] << 8 | e[i + 7] << 0) >> 12 - c & 1,
                    A = [2, 1, 2, 3, 3, 4, 4, 5][h] + u;
                  t = new me, t.sampling_frequency = n, t.channel_count = A, t.channel_mode = h, t.bit_stream_identification = d, t.low_frequency_effects_channel_on = u, t.bit_stream_mode = l, t.frame_size_code = r, t.data = e.subarray(i, i + a)
                }
                return t
              }
              hasIncompleteData() {
                return this.has_last_incomplete_data
              }
              getIncompleteData() {
                return this.has_last_incomplete_data ? this.data_.subarray(this.current_syncword_offset_) : null
              }
            }
            class ge {
              constructor(e) {
                let t = [];
                t = [e.sampling_rate_code << 6 | e.bit_stream_identification << 1 | e.bit_stream_mode >> 2, (3 & e.bit_stream_mode) << 6 | e.channel_mode << 3 | e.low_frequency_effects_channel_on << 2 | e.frame_size_code >> 4, e.frame_size_code << 4 & 224], this.config = t, this.sampling_rate = e.sampling_frequency, this.bit_stream_identification = e.bit_stream_identification, this.bit_stream_mode = e.bit_stream_mode, this.low_frequency_effects_channel_on = e.low_frequency_effects_channel_on, this.channel_count = e.channel_count, this.channel_mode = e.channel_mode, this.codec_mimetype = "ac-3", this.original_codec_mimetype = "ac-3"
              }
            }
            class ve {}
            class ye {
              constructor(e) {
                this.TAG = "EAC3Parser", this.data_ = e, this.current_syncword_offset_ = this.findNextSyncwordOffset(0), this.eof_flag_ && n.Z.e(this.TAG, "Could not found AC3 syncword until payload end")
              }
              findNextSyncwordOffset(e) {
                let t = e;
                const i = this.data_;
                for (;;) {
                  if (t + 7 >= i.byteLength) return this.eof_flag_ = !0, i.byteLength;
                  if (2935 == (i[t + 0] << 8 | i[t + 1] << 0)) return t;
                  t++
                }
              }
              readNextEAC3Frame() {
                const e = this.data_;
                let t = null;
                for (; null == t && !this.eof_flag_;) {
                  const i = this.current_syncword_offset_,
                    s = new A(e.subarray(i + 2)),
                    n = (s.readBits(2), s.readBits(3), s.readBits(11) + 1 << 1);
                  let r = s.readBits(2),
                    a = null,
                    o = null;
                  3 === r ? (r = s.readBits(2), a = [24e3, 22060, 16e3][r], o = 3) : (a = [48e3, 44100, 32e3][r], o = s.readBits(2));
                  const d = s.readBits(3),
                    l = s.readBits(1),
                    h = s.readBits(5);
                  if (i + n > this.data_.byteLength) {
                    this.eof_flag_ = !0, this.has_last_incomplete_data = !0;
                    break
                  }
                  const c = this.findNextSyncwordOffset(i + n);
                  this.current_syncword_offset_ = c;
                  const u = [2, 1, 2, 3, 3, 4, 4, 5][d] + l;
                  s.destroy(), t = new ve, t.sampling_frequency = a, t.channel_count = u, t.channel_mode = d, t.bit_stream_identification = h, t.low_frequency_effects_channel_on = l, t.frame_size = n, t.num_blks = [1, 2, 3, 6][o], t.data = e.subarray(i, i + n)
                }
                return t
              }
              hasIncompleteData() {
                return this.has_last_incomplete_data
              }
              getIncompleteData() {
                return this.has_last_incomplete_data ? this.data_.subarray(this.current_syncword_offset_) : null
              }
            }
            class Ee {
              constructor(e) {
                let t = [];
                const i = Math.floor(e.frame_size * e.sampling_frequency / (16 * e.num_blks));
                t = [255 & i, 248 & i, e.sampling_rate_code << 6 | e.bit_stream_identification << 1 | 0, 0 | e.channel_mode << 1 | e.low_frequency_effects_channel_on << 0, 0], this.config = t, this.sampling_rate = e.sampling_frequency, this.bit_stream_identification = e.bit_stream_identification, this.num_blks = e.num_blks, this.low_frequency_effects_channel_on = e.low_frequency_effects_channel_on, this.channel_count = e.channel_count, this.channel_mode = e.channel_mode, this.codec_mimetype = "ec-3", this.original_codec_mimetype = "ec-3"
              }
            }
            const Se = class extends C {
                constructor(e, t) {
                  super(), this.TAG = "TSDemuxer", this.first_parse_ = !0, this.media_info_ = new a.Z, this.timescale_ = 90, this.duration_ = 0, this.current_pmt_pid_ = -1, this.program_pmt_map_ = {}, this.pes_slice_queues_ = {}, this.section_slice_queues_ = {}, this.video_metadata_ = {
                    vps: void 0,
                    sps: void 0,
                    pps: void 0,
                    details: void 0
                  }, this.audio_metadata_ = {
                    codec: void 0,
                    audio_object_type: void 0,
                    sampling_freq_index: void 0,
                    sampling_frequency: void 0,
                    channel_config: void 0
                  }, this.aac_last_sample_pts_ = void 0, this.aac_last_incomplete_data_ = null, this.has_video_ = !1, this.has_audio_ = !1, this.video_init_segment_dispatched_ = !1, this.audio_init_segment_dispatched_ = !1, this.video_metadata_changed_ = !1, this.audio_metadata_changed_ = !1, this.loas_previous_frame = null, this.video_track_ = {
                    type: "video",
                    id: 1,
                    sequenceNumber: 0,
                    samples: [],
                    length: 0
                  }, this.audio_track_ = {
                    type: "audio",
                    id: 2,
                    sequenceNumber: 0,
                    samples: [],
                    length: 0
                  }, this.ts_packet_size_ = e.ts_packet_size, this.sync_offset_ = e.sync_offset, this.config_ = t
                }
                destroy() {
                  this.media_info_ = null, this.pes_slice_queues_ = null, this.section_slice_queues_ = null, this.video_metadata_ = null, this.audio_metadata_ = null, this.aac_last_incomplete_data_ = null, this.video_track_ = null, this.audio_track_ = null, super.destroy()
                }
                static probe(e) {
                  const t = new Uint8Array(e);
                  let i = -1,
                    s = 188;
                  if (t.byteLength <= 3 * s) return {
                    needMoreData: !0
                  };
                  for (; - 1 === i;) {
                    const e = Math.min(1e3, t.byteLength - 3 * s);
                    for (let n = 0; n < e;) {
                      if (71 === t[n] && 71 === t[n + s] && 71 === t[n + 2 * s]) {
                        i = n;
                        break
                      }
                      n++
                    }
                    if (-1 === i)
                      if (188 === s) s = 192;
                      else {
                        if (192 !== s) break;
                        s = 204
                      }
                  }
                  return -1 === i ? {
                    match: !1
                  } : (192 === s && i >= 4 ? (n.Z.v("TSDemuxer", "ts_packet_size = 192, m2ts mode"), i -= 4) : 204 === s && n.Z.v("TSDemuxer", "ts_packet_size = 204, RS encoded MPEG2-TS stream"), {
                    match: !0,
                    consumed: 0,
                    ts_packet_size: s,
                    sync_offset: i
                  })
                }
                bindDataSource(e) {
                  return e.onDataArrival = this.parseChunks.bind(this), this
                }
                resetMediaInfo() {
                  this.media_info_ = new a.Z
                }
                parseChunks(e, t) {
                  var i;
                  if (!(this.onError && this.onMediaInfo && this.onTrackMetadata && this.onDataAvailable)) throw new l.rT("onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified");
                  let s = 0;
                  for (this.first_parse_ && (this.first_parse_ = !1, s = this.sync_offset_); s + this.ts_packet_size_ <= e.byteLength;) {
                    const r = t + s;
                    192 === this.ts_packet_size_ && (s += 4);
                    const a = new Uint8Array(e, s, 188),
                      o = a[0];
                    if (71 !== o) {
                      n.Z.e(this.TAG, `sync_byte = ${o}, not 0x47`);
                      break
                    }
                    const d = (64 & a[1]) >>> 6,
                      l = (a[1], (31 & a[1]) << 8 | a[2]),
                      h = (48 & a[3]) >>> 4,
                      c = 15 & a[3];
                    let u = {},
                      A = 4;
                    if (2 === h || 3 === h) {
                      const t = a[4];
                      if (5 + t === 188) {
                        s += 188, 204 === this.ts_packet_size_ && (s += 16);
                        continue
                      }
                      t > 0 && (u = this.parseAdaptationField(e, s + 4, 1 + t)), A = 5 + t
                    }
                    if (1 === h || 3 === h)
                      if (0 === l || l === this.current_pmt_pid_ || void 0 !== this.pmt_ && this.pmt_.pid_stream_type[l] === k.kSCTE35) {
                        const t = 188 - A;
                        this.handleSectionSlice(e, s + A, t, {
                          pid: l,
                          file_position: r,
                          payload_unit_start_indicator: d,
                          continuity_conunter: c,
                          random_access_indicator: u.random_access_indicator
                        })
                      } else if (void 0 !== (null === (i = this.pmt_) || void 0 === i ? void 0 : i.pid_stream_type[l])) {
                      const t = 188 - A,
                        i = this.pmt_.pid_stream_type[l];
                      (l === this.pmt_.common_pids.h264 || l === this.pmt_.common_pids.h265 || l === this.pmt_.common_pids.adts_aac || l === this.pmt_.common_pids.loas_aac || l === this.pmt_.common_pids.ac3 || l === this.pmt_.common_pids.eac3 || l === this.pmt_.common_pids.opus || l === this.pmt_.common_pids.mp3 || this.pmt_.pes_private_data_pids[l] || this.pmt_.timed_id3_pids[l]) && this.handlePESSlice(e, s + A, t, {
                        pid: l,
                        stream_type: i,
                        file_position: r,
                        payload_unit_start_indicator: d,
                        continuity_conunter: c,
                        random_access_indicator: u.random_access_indicator
                      })
                    }
                    s += 188, 204 === this.ts_packet_size_ && (s += 16)
                  }
                  return this.dispatchAudioVideoMediaSegment(), s
                }
                parseAdaptationField(e, t, i) {
                  const s = new Uint8Array(e, t, i),
                    r = s[0];
                  return r > 0 ? r > 183 ? (n.Z.w(this.TAG, `Illegal adaptation_field_length: ${r}`), {}) : {
                    discontinuity_indicator: (128 & s[1]) >>> 7,
                    random_access_indicator: (64 & s[1]) >>> 6,
                    elementary_stream_priority_indicator: (32 & s[1]) >>> 5
                  } : {}
                }
                handleSectionSlice(e, t, i, s) {
                  const n = new Uint8Array(e, t, i);
                  let r = this.section_slice_queues_ ? this.section_slice_queues_[s.pid] : {};
                  if (s.payload_unit_start_indicator) {
                    const a = n[0];
                    if (void 0 !== r && 0 !== (null == r ? void 0 : r.total_length)) {
                      const n = new Uint8Array(e, t + 1, Math.min(i, a));
                      r.slices.push(n), r.total_length += n.byteLength, r.total_length === r.expected_length ? this.emitSectionSlices(r, s) : this.clearSlices(r, s)
                    }
                    for (let o = 1 + a; o < n.byteLength && 255 !== n[o + 0];) {
                      const a = (15 & n[o + 1]) << 8 | n[o + 2];
                      this.section_slice_queues_ && (this.section_slice_queues_[s.pid] = new P, r = this.section_slice_queues_[s.pid]), r.expected_length = a + 3, r.file_position = s.file_position, r.random_access_indicator = s.random_access_indicator;
                      const d = new Uint8Array(e, t + o, Math.min(i - o, r.expected_length - r.total_length));
                      r.slices.push(d), r.total_length += d.byteLength, r.total_length === r.expected_length ? this.emitSectionSlices(r, s) : r.total_length >= r.expected_length && this.clearSlices(r, s), o += d.byteLength
                    }
                  } else if (void 0 !== r && 0 !== r.total_length) {
                    const n = new Uint8Array(e, t, Math.min(i, r.expected_length - r.total_length));
                    r.slices.push(n), r.total_length += n.byteLength, r.total_length === r.expected_length ? this.emitSectionSlices(r, s) : r.total_length >= r.expected_length && this.clearSlices(r, s)
                  }
                }
                handlePESSlice(e, t, i, s) {
                  const r = new Uint8Array(e, t, i),
                    a = r[0] << 16 | r[1] << 8 | r[2],
                    o = (r[3], r[4] << 8 | r[5]);
                  if (s.payload_unit_start_indicator) {
                    if (1 !== a) return void n.Z.e(this.TAG, `handlePESSlice: packet_start_code_prefix should be 1 but with value ${a}`);
                    const e = this.pes_slice_queues_[s.pid];
                    e && (0 === e.expected_length || e.expected_length === e.total_length ? this.emitPESSlices(e, s) : this.clearSlices(e, s)), this.pes_slice_queues_ && (this.pes_slice_queues_[s.pid] = new P, this.pes_slice_queues_[s.pid].file_position = s.file_position, this.pes_slice_queues_[s.pid].random_access_indicator = s.random_access_indicator)
                  }
                  if (void 0 === this.pes_slice_queues_[s.pid]) return;
                  const d = this.pes_slice_queues_[s.pid];
                  d.slices.push(r), s.payload_unit_start_indicator && (d.expected_length = 0 === o ? 0 : o + 6), d.total_length += r.byteLength, d.expected_length > 0 && d.expected_length === d.total_length ? this.emitPESSlices(d, s) : d.expected_length > 0 && d.expected_length < d.total_length && this.clearSlices(d, s)
                }
                emitSectionSlices(e, t) {
                  const i = new Uint8Array(e.total_length);
                  for (let t = 0, s = 0; t < e.slices.length; t++) {
                    const n = e.slices[t];
                    i.set(n, s), s += n.byteLength
                  }
                  e.slices = [], e.expected_length = -1, e.total_length = 0;
                  const s = new M;
                  s.pid = t.pid, s.data = i, s.file_position = e.file_position, s.random_access_indicator = e.random_access_indicator, this.parseSection(s)
                }
                emitPESSlices(e, t) {
                  const i = new Uint8Array(e.total_length);
                  for (let t = 0, s = 0; t < e.slices.length; t++) {
                    const n = e.slices[t];
                    i.set(n, s), s += n.byteLength
                  }
                  e.slices = [], e.expected_length = -1, e.total_length = 0;
                  const s = new x;
                  s.pid = t.pid, s.data = i, s.stream_type = t.stream_type, s.file_position = e.file_position, s.random_access_indicator = e.random_access_indicator, this.parsePES(s)
                }
                clearSlices(e, t) {
                  e.slices = [], e.expected_length = -1, e.total_length = 0
                }
                parseSection(e) {
                  var t;
                  const i = e.data,
                    s = e.pid;
                  0 === s ? this.parsePAT(i) : s === this.current_pmt_pid_ ? this.parsePMT(i) : (null === (t = this.pmt_) || void 0 === t ? void 0 : t.scte_35_pids[s]) && this.parseSCTE35(i)
                }
                parsePES(e) {
                  const t = e.data,
                    i = t[0] << 16 | t[1] << 8 | t[2],
                    s = t[3],
                    r = t[4] << 8 | t[5];
                  if (1 === i) {
                    if (188 !== s && 190 !== s && 191 !== s && 240 !== s && 241 !== s && 255 !== s && 242 !== s && 248 !== s) {
                      t[6];
                      const i = (192 & t[7]) >>> 6,
                        a = t[8];
                      let o, d;
                      2 !== i && 3 !== i || (o = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2, d = 3 === i ? 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2 : o);
                      const l = 9 + a;
                      let h;
                      if (0 !== r) {
                        if (r < 3 + a) return void n.Z.v(this.TAG, "Malformed PES: PES_packet_length < 3 + PES_header_data_length");
                        h = r - 3 - a
                      } else h = t.byteLength - l;
                      const c = t.subarray(l, l + h);
                      switch (e.stream_type) {
                        case k.kMPEG1Audio:
                        case k.kMPEG2Audio:
                          this.parseMP3Payload(c, o);
                          break;
                        case k.kPESPrivateData:
                          this.pmt_.common_pids.opus === e.pid ? this.parseOpusPayload(c, o) : this.pmt_.common_pids.ac3 === e.pid ? this.parseAC3Payload(c, o) : this.pmt_.common_pids.eac3 === e.pid ? this.parseEAC3Payload(c, o) : this.pmt_.smpte2038_pids[e.pid] ? this.parseSMPTE2038MetadataPayload(c, o, d, e.pid, s) : this.parsePESPrivateDataPayload(c, o, d, e.pid, s);
                          break;
                        case k.kADTSAAC:
                          this.parseADTSAACPayload(c, o);
                          break;
                        case k.kLOASAAC:
                          this.parseLOASAACPayload(c, o);
                          break;
                        case k.kAC3:
                          this.parseAC3Payload(c, o);
                          break;
                        case k.kEAC3:
                          this.parseEAC3Payload(c, o);
                          break;
                        case k.kID3:
                          this.parseTimedID3MetadataPayload(c, o, d, e.pid, s);
                          break;
                        case k.kH264:
                          this.parseH264Payload(c, o, d, e.file_position, e.random_access_indicator);
                          break;
                        case k.kH265:
                          this.parseH265Payload(c, o, d, e.file_position, e.random_access_indicator)
                      }
                    } else if ((188 === s || 191 === s || 240 === s || 241 === s || 255 === s || 242 === s || 248 === s) && e.stream_type === k.kPESPrivateData) {
                      const i = 6;
                      let n;
                      n = 0 !== r ? r : t.byteLength - i;
                      const a = t.subarray(i, i + n);
                      this.parsePESPrivateDataPayload(a, void 0, void 0, e.pid, s)
                    }
                  } else n.Z.e(this.TAG, `parsePES: packet_start_code_prefix should be 1 but with value ${i}`)
                }
                parsePAT(e) {
                  const t = e[0];
                  if (0 !== t) return void n.Z.e(this.TAG, `parsePAT: table_id ${t} is not corresponded to PAT!`);
                  const i = (15 & e[1]) << 8 | e[2],
                    s = (e[3], e[4], (62 & e[5]) >>> 1),
                    r = 1 & e[5],
                    a = e[6];
                  e[7];
                  let o = null;
                  if (1 === r && 0 === a) o = new B, o.version_number = s;
                  else if (o = this.pat_, null == o) return;
                  const d = i - 5 - 4;
                  let l = -1,
                    h = -1;
                  for (let t = 8; t < 8 + d; t += 4) {
                    const i = e[t] << 8 | e[t + 1],
                      s = (31 & e[t + 2]) << 8 | e[t + 3];
                    0 === i ? o.network_pid = s : (o.program_pmt_pid[i] = s, -1 === l && (l = i), -1 === h && (h = s))
                  }
                  1 === r && 0 === a && (void 0 === this.pat_ && n.Z.v(this.TAG, `Parsed first PAT: ${JSON.stringify(o)}`), this.pat_ = o, this.current_program_ = l, this.current_pmt_pid_ = h)
                }
                parsePMT(e) {
                  const t = e[0];
                  if (2 !== t) return void n.Z.e(this.TAG, `parsePMT: table_id ${t} is not corresponded to PMT!`);
                  const i = (15 & e[1]) << 8 | e[2],
                    s = e[3] << 8 | e[4],
                    r = (62 & e[5]) >>> 1,
                    a = 1 & e[5],
                    o = e[6];
                  e[7];
                  let d = null;
                  if (1 === a && 0 === o) d = new L, d.program_number = s, d.version_number = r, this.program_pmt_map_[s] = d;
                  else if (d = this.program_pmt_map_[s], null == d) return;
                  e[8], e[9];
                  const l = (15 & e[10]) << 8 | e[11],
                    h = 12 + l,
                    c = i - 9 - l - 4;
                  for (let t = h; t < h + c;) {
                    const i = e[t],
                      s = (31 & e[t + 1]) << 8 | e[t + 2],
                      r = (15 & e[t + 3]) << 8 | e[t + 4];
                    d.pid_stream_type[s] = i;
                    const a = d.common_pids.h264 || d.common_pids.h265,
                      o = d.common_pids.adts_aac || d.common_pids.loas_aac || d.common_pids.ac3 || d.common_pids.eac3 || d.common_pids.opus || d.common_pids.mp3;
                    if (i !== k.kH264 || a)
                      if (i !== k.kH265 || a)
                        if (i !== k.kADTSAAC || o)
                          if (i !== k.kLOASAAC || o)
                            if (i !== k.kAC3 || o)
                              if (i !== k.kEAC3 || o)
                                if (i !== k.kMPEG1Audio && i !== k.kMPEG2Audio || o)
                                  if (i === k.kPESPrivateData) {
                                    if (d.pes_private_data_pids[s] = !0, r > 0) {
                                      for (let i = t + 5; i < t + 5 + r;) {
                                        const t = e[i + 0],
                                          r = e[i + 1];
                                        if (5 === t) {
                                          const t = String.fromCharCode(...Array.from(e.subarray(i + 2, i + 2 + r)));
                                          "VANC" === t ? d.smpte2038_pids[s] = !0 : "Opus" === t && (d.common_pids.opus = s)
                                        } else if (127 === t && s === d.common_pids.opus) {
                                          let t = null;
                                          if (128 === e[i + 2] && (t = e[i + 3]), null == t) {
                                            n.Z.e(this.TAG, "Not Supported Opus channel count.");
                                            continue
                                          }
                                          const s = {
                                              codec: "opus",
                                              channel_count: 0 == (15 & t) ? 2 : 15 & t,
                                              channel_config_code: t,
                                              sample_rate: 48e3
                                            },
                                            r = {
                                              codec: "opus",
                                              meta: s
                                            };
                                          this.audio_init_segment_dispatched_ ? this.detectAudioMetadataChange(r) && (this.dispatchAudioMediaSegment(), this.dispatchAudioInitSegment(r)) : (this.audio_metadata_ = s, this.dispatchAudioInitSegment(r))
                                        }
                                        i += 2 + r
                                      }
                                      const a = e.subarray(t + 5, t + 5 + r);
                                      this.dispatchPESPrivateDataDescriptor(s, i, a)
                                    }
                                  } else i === k.kID3 ? d.timed_id3_pids[s] = !0 : i === k.kSCTE35 && (d.scte_35_pids[s] = !0);
                    else d.common_pids.mp3 = s;
                    else d.common_pids.eac3 = s;
                    else d.common_pids.ac3 = s;
                    else d.common_pids.loas_aac = s;
                    else d.common_pids.adts_aac = s;
                    else d.common_pids.h265 = s;
                    else d.common_pids.h264 = s;
                    t += 5 + r
                  }
                  s === this.current_program_ && (void 0 === this.pmt_ && n.Z.v(this.TAG, `Parsed first PMT: ${JSON.stringify(d)}`), this.pmt_ = d, (d.common_pids.h264 || d.common_pids.h265) && (this.has_video_ = !0), (d.common_pids.adts_aac || d.common_pids.loas_aac || d.common_pids.ac3 || d.common_pids.opus || d.common_pids.mp3) && (this.has_audio_ = !0))
                }
                parseSCTE35(e) {
                  const t = (e => {
                    var t, i, s, n, r, a;
                    const o = new A(e),
                      d = o.readBits(8),
                      l = o.readBool(),
                      h = o.readBool();
                    o.readBits(2);
                    const c = o.readBits(12),
                      u = o.readBits(8),
                      _ = o.readBool(),
                      m = o.readBits(6),
                      p = 4 * o.readBits(31) + o.readBits(2),
                      f = o.readBits(8),
                      g = o.readBits(12),
                      v = o.readBits(12),
                      y = o.readBits(8);
                    let E = null;
                    y === q.kSpliceNull ? E = {} : y === q.kSpliceSchedule ? E = (e => {
                      const t = e.readBits(8),
                        i = [];
                      for (let s = 0; s < t; s++) i.push(ee(e));
                      return {
                        splice_count: t,
                        events: i
                      }
                    })(o) : y === q.kSpliceInsert ? E = (e => {
                      const t = e.readBits(32),
                        i = e.readBool();
                      e.readBits(7);
                      const s = {
                        splice_event_id: t,
                        splice_event_cancel_indicator: i
                      };
                      if (i) return s;
                      if (s.out_of_network_indicator = e.readBool(), s.program_splice_flag = e.readBool(), s.duration_flag = e.readBool(), s.splice_immediate_flag = e.readBool(), e.readBits(4), s.program_splice_flag && !s.splice_immediate_flag && (s.splice_time = Y(e)), !s.program_splice_flag) {
                        s.component_count = e.readBits(8), s.components = [];
                        for (let t = 0; t < s.component_count; t++) s.components.push(K(s.splice_immediate_flag, e))
                      }
                      return s.duration_flag && (s.break_duration = X(e)), s.unique_program_id = e.readBits(16), s.avail_num = e.readBits(8), s.avails_expected = e.readBits(8), s
                    })(o) : y === q.kTimeSignal ? E = (e => ({
                      splice_time: Y(e)
                    }))(o) : y === q.kBandwidthReservation ? E = {} : y === q.kPrivateCommand ? E = ((e, t) => {
                      const i = String.fromCharCode(t.readBits(8), t.readBits(8), t.readBits(8), t.readBits(8)),
                        s = new Uint8Array(e - 4);
                      for (let i = 0; i < e - 4; i++) s[i] = t.readBits(8);
                      return {
                        identifier: i,
                        private_data: s.buffer
                      }
                    })(v, o) : o.readBits(8 * v);
                    const S = [],
                      b = o.readBits(16);
                    for (let e = 0; e < b;) {
                      const t = o.readBits(8),
                        i = o.readBits(8),
                        s = String.fromCharCode(o.readBits(8), o.readBits(8), o.readBits(8), o.readBits(8));
                      0 === t ? S.push(te(t, i, s, o)) : 1 === t ? S.push(ie(t, i, s, o)) : 2 === t ? S.push(ne(t, i, s, o)) : 3 === t ? S.push(re(t, i, s, o)) : 4 === t ? S.push(oe(t, i, s, o)) : o.readBits(8 * (i - 4)), e += 2 + i
                    }
                    const w = {
                      table_id: d,
                      section_syntax_indicator: l,
                      private_indicator: h,
                      section_length: c,
                      protocol_version: u,
                      encrypted_packet: _,
                      encryption_algorithm: m,
                      pts_adjustment: p,
                      cw_index: f,
                      tier: g,
                      splice_command_length: v,
                      splice_command_type: y,
                      splice_command: E,
                      descriptor_loop_length: b,
                      splice_descriptors: S,
                      E_CRC32: _ ? o.readBits(32) : void 0,
                      CRC32: o.readBits(32)
                    };
                    if (y === q.kSpliceInsert) {
                      const o = E;
                      if (o.splice_event_cancel_indicator) return {
                        splice_command_type: y,
                        detail: w,
                        data: e
                      };
                      if (o.program_splice_flag && !o.splice_immediate_flag) {
                        const r = o.duration_flag ? null === (t = null == o ? void 0 : o.break_duration) || void 0 === t ? void 0 : t.auto_return : void 0,
                          a = o.duration_flag ? ((null === (i = null == o ? void 0 : o.break_duration) || void 0 === i ? void 0 : i.duration) || 0) / 90 : void 0;
                        return (null === (s = o.splice_time) || void 0 === s ? void 0 : s.time_specified_flag) ? {
                          splice_command_type: y,
                          pts: (p + ((null === (n = null == o ? void 0 : o.splice_time) || void 0 === n ? void 0 : n.pts_time) || 0)) % Math.pow(2, 33),
                          auto_return: r,
                          duraiton: a,
                          detail: w,
                          data: e
                        } : {
                          splice_command_type: y,
                          auto_return: r,
                          duraiton: a,
                          detail: w,
                          data: e
                        }
                      }
                      return {
                        splice_command_type: y,
                        auto_return: o.duration_flag ? null === (r = o.break_duration) || void 0 === r ? void 0 : r.auto_return : void 0,
                        duraiton: o.duration_flag ? ((null === (a = o.break_duration) || void 0 === a ? void 0 : a.duration) || 0) / 90 : void 0,
                        detail: w,
                        data: e
                      }
                    }
                    if (y === q.kTimeSignal) {
                      const t = E;
                      return t.splice_time.time_specified_flag ? {
                        splice_command_type: y,
                        pts: (p + (t.splice_time.pts_time || 0)) % Math.pow(2, 33),
                        detail: w,
                        data: e
                      } : {
                        splice_command_type: y,
                        detail: w,
                        data: e
                      }
                    }
                    return {
                      splice_command_type: y,
                      detail: w,
                      data: e
                    }
                  })(e);
                  if (void 0 !== t.pts) {
                    const e = Math.floor(t.pts / this.timescale_);
                    t.pts = e
                  } else t.nearest_pts = this.aac_last_sample_pts_;
                  this.onSCTE35Metadata && this.onSCTE35Metadata(t)
                }
                parseH264Payload(e, t, i, s, r) {
                  var a, o;
                  const d = new V(e);
                  let l = null;
                  const h = [];
                  let c = 0,
                    u = !1;
                  for (; null != (l = d.readNextNaluPayload());) {
                    const e = new F(l);
                    if (e.type === I.kSliceSPS) {
                      const t = m.parseSPS(l.data);
                      this.video_init_segment_dispatched_ ? this.detectVideoMetadataChange(e, t) && (n.Z.v(this.TAG, "H264: Critical h264 metadata has been changed, attempt to re-generate InitSegment"), this.video_metadata_changed_ = !0, this.video_metadata_ = {
                        vps: void 0,
                        sps: e,
                        pps: void 0,
                        details: t
                      }) : this.video_metadata_ && (this.video_metadata_.sps = e, this.video_metadata_.details = t)
                    } else e.type === I.kSlicePPS ? this.video_init_segment_dispatched_ && !this.video_metadata_changed_ || (this.video_metadata_ && (this.video_metadata_.pps = e), (null === (a = this.video_metadata_) || void 0 === a ? void 0 : a.sps) && (null === (o = this.video_metadata_) || void 0 === o ? void 0 : o.pps) && (this.video_metadata_changed_ && this.dispatchVideoMediaSegment(), this.dispatchVideoInitSegment())) : (e.type === I.kSliceIDR || e.type === I.kSliceNonIDR && 1 === r) && (u = !0);
                    this.video_init_segment_dispatched_ && (h.push(e), c += e.data.byteLength)
                  }
                  const A = Math.floor(t / this.timescale_),
                    _ = Math.floor(i / this.timescale_);
                  if (h.length) {
                    const e = this.video_track_,
                      t = {
                        units: h,
                        length: c,
                        isKeyframe: u,
                        dts: _,
                        pts: A,
                        cts: A - _,
                        file_position: s
                      };
                    e && (e.samples.push(t), e.length += c)
                  }
                }
                parseH265Payload(e, t, i, s, r) {
                  var a, o, d, l, h, c, u;
                  const A = new ce(e);
                  let _ = null;
                  const m = [];
                  let p = 0,
                    f = !1;
                  for (; null != (_ = A.readNextNaluPayload());) {
                    const e = new he(_);
                    if (e.type === de.kSliceVPS) {
                      if (!this.video_init_segment_dispatched_) {
                        const t = g.parseVPS(_.data);
                        this.video_metadata_ && (this.video_metadata_.vps = e, this.video_metadata_.details = Object.assign(Object.assign({}, null === (a = this.video_metadata_) || void 0 === a ? void 0 : a.details), t))
                      }
                    } else if (e.type === de.kSliceSPS) {
                      const t = g.parseSPS(_.data);
                      this.video_init_segment_dispatched_ ? this.detectVideoMetadataChange(e, t) && (n.Z.v(this.TAG, "H265: Critical h265 metadata has been changed, attempt to re-generate InitSegment"), this.video_metadata_changed_ = !0, this.video_metadata_ = {
                        vps: void 0,
                        sps: e,
                        pps: void 0,
                        details: t
                      }) : this.video_metadata_ && (this.video_metadata_.sps = e, this.video_metadata_.details = Object.assign(Object.assign({}, null === (o = this.video_metadata_) || void 0 === o ? void 0 : o.details), t))
                    } else if (e.type === de.kSlicePPS) {
                      if (!this.video_init_segment_dispatched_ || this.video_metadata_changed_) {
                        const t = g.parsePPS(_.data);
                        this.video_metadata_ && (this.video_metadata_.pps = e, this.video_metadata_.details = Object.assign(Object.assign({}, null === (d = this.video_metadata_) || void 0 === d ? void 0 : d.details), t)), (null === (l = this.video_metadata_) || void 0 === l ? void 0 : l.vps) && (null === (h = this.video_metadata_) || void 0 === h ? void 0 : h.sps) && (null === (c = this.video_metadata_) || void 0 === c ? void 0 : c.pps) && (this.video_metadata_changed_ && this.dispatchVideoMediaSegment(), this.dispatchVideoInitSegment())
                      }
                    } else e.type !== de.kSliceIDR_W_RADL && e.type !== de.kSliceIDR_N_LP && e.type !== de.kSliceCRA_NUT || (f = !0);
                    this.video_init_segment_dispatched_ && (m.push(e), p += e.data.byteLength)
                  }
                  const v = Math.floor(t / this.timescale_),
                    y = Math.floor(i / this.timescale_);
                  if (m.length) {
                    const e = this.video_track_,
                      t = {
                        units: m,
                        length: p,
                        isKeyframe: f,
                        dts: y,
                        pts: v,
                        cts: v - y,
                        file_position: s
                      };
                    e && (null === (u = e.samples) || void 0 === u || u.push(t), e.length += p)
                  }
                }
                detectVideoMetadataChange(e, t) {
                  var i, s, r, a, o, d, l, h, c, u;
                  if (t.codec_mimetype !== (null === (s = null === (i = this.video_metadata_) || void 0 === i ? void 0 : i.details) || void 0 === s ? void 0 : s.codec_mimetype)) return n.Z.v(this.TAG, `Video: Codec mimeType changed from ${null===(r=this.video_metadata_)||void 0===r?void 0:r.details.codec_mimetype} to ${null==t?void 0:t.codec_mimetype}`), !0;
                  if (t.codec_size.width !== (null === (o = null === (a = this.video_metadata_) || void 0 === a ? void 0 : a.details) || void 0 === o ? void 0 : o.codec_size.width) || t.codec_size.height !== (null === (l = null === (d = this.video_metadata_) || void 0 === d ? void 0 : d.details) || void 0 === l ? void 0 : l.codec_size.height)) {
                    const e = null === (h = this.video_metadata_) || void 0 === h ? void 0 : h.details.codec_size,
                      i = t.codec_size;
                    return n.Z.v(this.TAG, `Video: Coded Resolution changed from ${e.width}x${e.height} to ${i.width}x${i.height}`), !0
                  }
                  return t.present_size.width !== (null === (c = this.video_metadata_) || void 0 === c ? void 0 : c.details.present_size.width) && (n.Z.v(this.TAG, `Video: Present resolution width changed from ${null===(u=this.video_metadata_)||void 0===u?void 0:u.details.present_size.width} to ${null==t?void 0:t.present_size.width}`), !0)
                }
                isInitSegmentDispatched() {
                  return this.has_video_ && this.has_audio_ ? this.video_init_segment_dispatched_ && this.audio_init_segment_dispatched_ : this.has_video_ && !this.has_audio_ ? this.video_init_segment_dispatched_ : !(this.has_video_ || !this.has_audio_) && this.audio_init_segment_dispatched_
                }
                dispatchVideoInitSegment() {
                  var e, t, i, s, r, a, o, d, l, h, c, u;
                  const A = null === (e = this.video_metadata_) || void 0 === e ? void 0 : e.details,
                    _ = {
                      type: "video"
                    };
                  _.id = null === (t = this.video_track_) || void 0 === t ? void 0 : t.id, _.timescale = 1e3, _.duration = this.duration_, _.codecWidth = A.codec_size.width, _.codecHeight = A.codec_size.height, _.presentWidth = A.present_size.width, _.presentHeight = A.present_size.height, _.profile = A.profile_string, _.level = A.level_string, _.bitDepth = A.bit_depth, _.chromaFormat = A.chroma_format, _.sarRatio = A.sar_ratio, _.frameRate = A.frame_rate;
                  const m = _.frameRate.fps_den,
                    p = _.frameRate.fps_num;
                  if (_.refSampleDuration = m / p * 1e3, _.codec = A.codec_mimetype, null === (i = this.video_metadata_) || void 0 === i ? void 0 : i.vps) {
                    const e = null === (s = this.video_metadata_) || void 0 === s ? void 0 : s.vps.data.subarray(4),
                      t = null === (a = null === (r = this.video_metadata_) || void 0 === r ? void 0 : r.sps) || void 0 === a ? void 0 : a.data.subarray(4),
                      i = null === (d = null === (o = this.video_metadata_) || void 0 === o ? void 0 : o.pps) || void 0 === d ? void 0 : d.data.subarray(4),
                      l = new ue(e, t, i, A);
                    _.hvcc = l.getData(), this.video_init_segment_dispatched_ || n.Z.v(this.TAG, `Generated first HEVCDecoderConfigurationRecord for mimeType: ${_.codec}`)
                  } else {
                    const e = null === (h = null === (l = this.video_metadata_) || void 0 === l ? void 0 : l.sps) || void 0 === h ? void 0 : h.data.subarray(4),
                      t = null === (u = null === (c = this.video_metadata_) || void 0 === c ? void 0 : c.pps) || void 0 === u ? void 0 : u.data.subarray(4),
                      i = new N(e, t, A);
                    _.avcc = i.getData(), this.video_init_segment_dispatched_ || n.Z.v(this.TAG, `Generated first AVCDecoderConfigurationRecord for mimeType: ${_.codec}`)
                  }
                  this.onTrackMetadata && this.onTrackMetadata("video", _), this.video_init_segment_dispatched_ = !0, this.video_metadata_changed_ = !1;
                  const f = this.media_info_;
                  f.hasVideo = !0, f.width = _.codecWidth, f.height = _.codecHeight, f.fps = _.frameRate.fps, f.profile = _.profile, f.level = _.level, f.refFrames = A.ref_frames, f.chromaFormat = A.chroma_format_string, f.sarNum = _.sarRatio.width, f.sarDen = _.sarRatio.height, f.videoCodec = _.codec, f.hasAudio && f.audioCodec ? f.mimeType = `video/mp2t; codecs="${f.videoCodec},${f.audioCodec}"` : f.mimeType = `video/mp2t; codecs="${f.videoCodec}"`, f.isComplete() && this.onMediaInfo && this.onMediaInfo(f)
                }
                dispatchVideoMediaSegment() {
                  var e;
                  this.isInitSegmentDispatched() && (null === (e = this.video_track_) || void 0 === e ? void 0 : e.length) && this.onDataAvailable && this.onDataAvailable(null, this.video_track_)
                }
                dispatchAudioMediaSegment() {
                  var e;
                  this.isInitSegmentDispatched() && (null === (e = this.audio_track_) || void 0 === e ? void 0 : e.length) && this.onDataAvailable && this.onDataAvailable(this.audio_track_, null)
                }
                dispatchAudioVideoMediaSegment() {
                  var e, t;
                  this.isInitSegmentDispatched() && ((null === (e = this.audio_track_) || void 0 === e ? void 0 : e.length) || (null === (t = this.video_track_) || void 0 === t ? void 0 : t.length)) && this.onDataAvailable && this.onDataAvailable(this.audio_track_, this.video_track_)
                }
                parseADTSAACPayload(e, t) {
                  var i, s, r;
                  if (this.has_video_ && !this.video_init_segment_dispatched_) return;
                  if (this.aac_last_incomplete_data_) {
                    const t = new Uint8Array(e.byteLength + this.aac_last_incomplete_data_.byteLength);
                    t.set(this.aac_last_incomplete_data_, 0), t.set(e, this.aac_last_incomplete_data_.byteLength), e = t
                  }
                  let a, o = 0;
                  if (void 0 !== t && (o = t / this.timescale_), "aac" === (null === (i = this.audio_metadata_) || void 0 === i ? void 0 : i.codec)) {
                    if (void 0 === t && void 0 !== this.aac_last_sample_pts_) a = 1024 / (null === (s = this.audio_metadata_) || void 0 === s ? void 0 : s.sampling_frequency) * 1e3, o = this.aac_last_sample_pts_ + a;
                    else if (void 0 === t) return void n.Z.w(this.TAG, "AAC: Unknown pts");
                    if (this.aac_last_incomplete_data_ && this.aac_last_sample_pts_) {
                      a = 1024 / this.audio_metadata_.sampling_frequency * 1e3;
                      const e = this.aac_last_sample_pts_ + a;
                      Math.abs(e - o) > 1 && (n.Z.w(this.TAG, `AAC: Detected pts overlapped, expected: ${e}ms, PES pts: ${o}ms`), o = e)
                    }
                  }
                  const d = new W(e);
                  let l = null,
                    h = o,
                    c = 0;
                  for (; null != (l = d.readNextAACFrame());) {
                    a = 1024 / l.sampling_frequency * 1e3;
                    const e = {
                      codec: "aac",
                      data: l
                    };
                    this.audio_init_segment_dispatched_ ? this.detectAudioMetadataChange(e) && (this.dispatchAudioMediaSegment(), this.dispatchAudioInitSegment(e)) : (this.audio_metadata_ = {
                      codec: "aac",
                      audio_object_type: l.audio_object_type,
                      sampling_freq_index: l.sampling_freq_index,
                      sampling_frequency: l.sampling_frequency,
                      channel_config: l.channel_config
                    }, this.dispatchAudioInitSegment(e)), c = h;
                    const t = Math.floor(h),
                      i = {
                        unit: l.data,
                        length: l.data.byteLength,
                        pts: t,
                        dts: t
                      };
                    this.audio_track_ && (null === (r = this.audio_track_) || void 0 === r || r.samples.push(i), this.audio_track_.length += l.data.byteLength), h += a
                  }
                  d.hasIncompleteData() && (this.aac_last_incomplete_data_ = d.getIncompleteData()), c && (this.aac_last_sample_pts_ = c)
                }
                parseLOASAACPayload(e, t) {
                  var i, s, r;
                  if (this.has_video_ && !this.video_init_segment_dispatched_) return;
                  if (this.aac_last_incomplete_data_) {
                    const t = new Uint8Array(e.byteLength + this.aac_last_incomplete_data_.byteLength);
                    t.set(this.aac_last_incomplete_data_, 0), t.set(e, this.aac_last_incomplete_data_.byteLength), e = t
                  }
                  let a, o = 0;
                  if (void 0 !== t && (o = t / this.timescale_), "aac" === (null === (i = this.audio_metadata_) || void 0 === i ? void 0 : i.codec)) {
                    if (void 0 === t && void 0 !== this.aac_last_sample_pts_) a = 1024 / this.audio_metadata_.sampling_frequency * 1e3, o = this.aac_last_sample_pts_ + a;
                    else if (void 0 === t) return void n.Z.w(this.TAG, "AAC: Unknown pts");
                    if (this.aac_last_incomplete_data_ && this.aac_last_sample_pts_) {
                      a = 1024 / this.audio_metadata_.sampling_frequency * 1e3;
                      const e = this.aac_last_sample_pts_ + a;
                      Math.abs(e - o) > 1 && (n.Z.w(this.TAG, `AAC: Detected pts overlapped, expected: ${e}ms, PES pts: ${o}ms`), o = e)
                    }
                  }
                  const d = new Q(e);
                  let l = null,
                    h = o,
                    c = 0;
                  for (; null != (l = d.readNextAACFrame(null !== (s = this.loas_previous_frame) && void 0 !== s ? s : void 0));) {
                    this.loas_previous_frame = l, a = 1024 / l.sampling_frequency * 1e3;
                    const e = {
                      codec: "aac",
                      data: l
                    };
                    this.audio_init_segment_dispatched_ ? this.detectAudioMetadataChange(e) && (this.dispatchAudioMediaSegment(), this.dispatchAudioInitSegment(e)) : (this.audio_metadata_ = {
                      codec: "aac",
                      audio_object_type: l.audio_object_type,
                      sampling_freq_index: l.sampling_freq_index,
                      sampling_frequency: l.sampling_frequency,
                      channel_config: l.channel_config
                    }, this.dispatchAudioInitSegment(e)), c = h;
                    const t = Math.floor(h),
                      i = {
                        unit: l.data,
                        length: l.data.byteLength,
                        pts: t,
                        dts: t
                      };
                    this.audio_track_ && (null === (r = this.audio_track_) || void 0 === r || r.samples.push(i), this.audio_track_.length += l.data.byteLength), h += a
                  }
                  d.hasIncompleteData() && (this.aac_last_incomplete_data_ = d.getIncompleteData()), c && (this.aac_last_sample_pts_ = c)
                }
                parseAC3Payload(e, t) {
                  var i, s;
                  if (this.has_video_ && !this.video_init_segment_dispatched_) return;
                  let r, a = 0;
                  if (void 0 !== t && (a = t / this.timescale_), "ac-3" === (null === (i = this.audio_metadata_) || void 0 === i ? void 0 : i.codec))
                    if (void 0 === t && void 0 !== this.aac_last_sample_pts_) r = 1536 / this.audio_metadata_.sampling_frequency * 1e3, a = this.aac_last_sample_pts_ + r;
                    else if (void 0 === t) return void n.Z.w(this.TAG, "AC3: Unknown pts");
                  const o = new fe(e);
                  let d = null,
                    l = a,
                    h = 0;
                  for (; null != (d = o.readNextAC3Frame());) {
                    r = 1536 / d.sampling_frequency * 1e3;
                    const e = {
                      codec: "ac-3",
                      data: d
                    };
                    this.audio_init_segment_dispatched_ ? this.detectAudioMetadataChange(e) && (this.dispatchAudioMediaSegment(), this.dispatchAudioInitSegment(e)) : (this.audio_metadata_ = {
                      codec: "ac-3",
                      sampling_frequency: d.sampling_frequency,
                      bit_stream_identification: d.bit_stream_identification,
                      bit_stream_mode: d.bit_stream_mode,
                      low_frequency_effects_channel_on: d.low_frequency_effects_channel_on,
                      channel_mode: d.channel_mode
                    }, this.dispatchAudioInitSegment(e)), h = l;
                    const t = Math.floor(l),
                      i = {
                        unit: d.data,
                        length: d.data.byteLength,
                        pts: t,
                        dts: t
                      };
                    this.audio_track_ && (null === (s = this.audio_track_) || void 0 === s || s.samples.push(i), this.audio_track_.length += d.data.byteLength), l += r
                  }
                  h && (this.aac_last_sample_pts_ = h)
                }
                parseEAC3Payload(e, t) {
                  var i, s;
                  if (this.has_video_ && !this.video_init_segment_dispatched_) return;
                  let r, a = 0;
                  if (void 0 !== t && (a = t / this.timescale_), "ec-3" === (null === (i = this.audio_metadata_) || void 0 === i ? void 0 : i.codec))
                    if (void 0 === t && void 0 !== this.aac_last_sample_pts_) r = 256 * (this.audio_metadata_.num_blks || 0) / (this.audio_metadata_.sampling_frequency || 0) * 1e3, a = this.aac_last_sample_pts_ + r;
                    else if (void 0 === t) return void n.Z.w(this.TAG, "EAC3: Unknown pts");
                  const o = new ye(e);
                  let d = null,
                    l = a,
                    h = 0;
                  for (; null != (d = o.readNextEAC3Frame());) {
                    r = 1536 / d.sampling_frequency * 1e3;
                    const e = {
                      codec: "ec-3",
                      data: d
                    };
                    this.audio_init_segment_dispatched_ ? this.detectAudioMetadataChange(e) && (this.dispatchAudioMediaSegment(), this.dispatchAudioInitSegment(e)) : (this.audio_metadata_ = {
                      codec: "ec-3",
                      sampling_frequency: d.sampling_frequency,
                      bit_stream_identification: d.bit_stream_identification,
                      low_frequency_effects_channel_on: d.low_frequency_effects_channel_on,
                      num_blks: d.num_blks,
                      channel_mode: d.channel_mode
                    }, this.dispatchAudioInitSegment(e)), h = l;
                    const t = Math.floor(l),
                      i = {
                        unit: d.data,
                        length: d.data.byteLength,
                        pts: t,
                        dts: t
                      };
                    this.audio_track_ && (null === (s = this.audio_track_) || void 0 === s || s.samples.push(i), this.audio_track_.length += d.data.byteLength), l += r
                  }
                  h && (this.aac_last_sample_pts_ = h)
                }
                parseOpusPayload(e, t) {
                  var i, s;
                  if (this.has_video_ && !this.video_init_segment_dispatched_) return;
                  let r, a = 0;
                  if (void 0 !== t && (a = t / this.timescale_), "opus" === (null === (i = this.audio_metadata_) || void 0 === i ? void 0 : i.codec))
                    if (void 0 === t && void 0 !== this.aac_last_sample_pts_) r = 20, a = this.aac_last_sample_pts_ + r;
                    else if (void 0 === t) return void n.Z.w(this.TAG, "Opus: Unknown pts");
                  let o = a,
                    d = 0;
                  for (let t = 0; t < e.length;) {
                    r = 20;
                    const i = 0 != (16 & e[t + 1]),
                      n = 0 != (8 & e[t + 1]);
                    let a = t + 2,
                      l = 0;
                    for (; 255 === e[a];) l += 255, a += 1;
                    l += e[a], a += 1, a += i ? 2 : 0, a += n ? 2 : 0, d = o;
                    const h = Math.floor(o),
                      c = e.slice(a, a + l),
                      u = {
                        unit: c,
                        length: c.byteLength,
                        pts: h,
                        dts: h
                      };
                    this.audio_track_ && (null === (s = this.audio_track_) || void 0 === s || s.samples.push(u), this.audio_track_.length += c.byteLength), o += r, t = a + l
                  }
                  d && (this.aac_last_sample_pts_ = d)
                }
                parseMP3Payload(e, t) {
                  var i;
                  if (this.has_video_ && !this.video_init_segment_dispatched_) return;
                  const s = [44100, 48e3, 32e3, 0],
                    n = [22050, 24e3, 16e3, 0],
                    r = [11025, 12e3, 8e3, 0],
                    a = e[1] >>> 3 & 3,
                    o = (6 & e[1]) >> 1;
                  e[2];
                  const d = (12 & e[2]) >>> 2,
                    l = 3 != (e[3] >>> 6 & 3) ? 2 : 1;
                  let h = 0,
                    c = 34;
                  switch (a) {
                    case 0:
                      h = r[d];
                      break;
                    case 2:
                      h = n[d];
                      break;
                    case 3:
                      h = s[d]
                  }
                  switch (o) {
                    case 1:
                      c = 34;
                      break;
                    case 2:
                      c = 33;
                      break;
                    case 3:
                      c = 32
                  }
                  const u = new _e;
                  u.object_type = c, u.sample_rate = h, u.channel_count = l, u.data = e;
                  const A = {
                    codec: "mp3",
                    data: u
                  };
                  this.audio_init_segment_dispatched_ ? this.detectAudioMetadataChange(A) && (this.dispatchAudioMediaSegment(), this.dispatchAudioInitSegment(A)) : (this.audio_metadata_ = {
                    codec: "mp3",
                    object_type: c,
                    sample_rate: h,
                    channel_count: l
                  }, this.dispatchAudioInitSegment(A));
                  const _ = {
                    unit: e,
                    length: e.byteLength,
                    pts: t / this.timescale_,
                    dts: t / this.timescale_
                  };
                  this.audio_track_ && (null === (i = this.audio_track_) || void 0 === i || i.samples.push(_), this.audio_track_.length += e.byteLength)
                }
                detectAudioMetadataChange(e) {
                  var t, i, s, r;
                  if (e.codec !== (null === (t = this.audio_metadata_) || void 0 === t ? void 0 : t.codec)) return n.Z.v(this.TAG, `Audio: Audio Codecs changed from ${null===(i=this.audio_metadata_)||void 0===i?void 0:i.codec} to ${e.codec}`), !0;
                  if ("aac" === e.codec && "aac" === this.audio_metadata_.codec) {
                    const t = e.data;
                    if (t.audio_object_type !== this.audio_metadata_.audio_object_type) return n.Z.v(this.TAG, `AAC: AudioObjectType changed from ${this.audio_metadata_.audio_object_type} to ${t.audio_object_type}`), !0;
                    if (t.sampling_freq_index !== this.audio_metadata_.sampling_freq_index) return n.Z.v(this.TAG, `AAC: SamplingFrequencyIndex changed from ${this.audio_metadata_.sampling_freq_index} to ${t.sampling_freq_index}`), !0;
                    if (t.channel_config !== this.audio_metadata_.channel_config) return n.Z.v(this.TAG, `AAC: Channel configuration changed from ${null===(s=this.audio_metadata_)||void 0===s?void 0:s.channel_config} to ${t.channel_config}`), !0
                  } else if ("ac-3" === e.codec && "ac-3" === this.audio_metadata_.codec) {
                    const t = e.data;
                    if (t.sampling_frequency !== this.audio_metadata_.sampling_frequency) return n.Z.v(this.TAG, `AC3: Sampling Frequency changed from ${null===(r=this.audio_metadata_)||void 0===r?void 0:r.sampling_frequency} to ${t.sampling_frequency}`), !0;
                    if (t.bit_stream_identification !== this.audio_metadata_.bit_stream_identification) return n.Z.v(this.TAG, `AC3: Bit Stream Identification changed from ${this.audio_metadata_.bit_stream_identification} to ${t.bit_stream_identification}`), !0;
                    if (t.bit_stream_mode !== this.audio_metadata_.bit_stream_mode) return n.Z.v(this.TAG, `AC3: BitStream Mode changed from ${this.audio_metadata_.bit_stream_mode} to ${t.bit_stream_mode}`), !0;
                    if (t.channel_mode !== this.audio_metadata_.channel_mode) return n.Z.v(this.TAG, `AC3: Channel Mode changed from ${this.audio_metadata_.channel_mode} to ${t.channel_mode}`), !0;
                    if (t.low_frequency_effects_channel_on !== this.audio_metadata_.low_frequency_effects_channel_on) return n.Z.v(this.TAG, `AC3: Low Frequency Effects Channel On changed from ${this.audio_metadata_.low_frequency_effects_channel_on} to ${t.low_frequency_effects_channel_on}`), !0
                  } else if ("opus" === e.codec && "opus" === this.audio_metadata_.codec) {
                    const t = e.meta;
                    if (t.sample_rate !== this.audio_metadata_.sample_rate) return n.Z.v(this.TAG, `Opus: SamplingFrequencyIndex changed from ${this.audio_metadata_.sample_rate} to ${t.sample_rate}`), !0;
                    if (t.channel_count !== this.audio_metadata_.channel_count) return n.Z.v(this.TAG, `Opus: Channel count changed from ${this.audio_metadata_.channel_count} to ${t.channel_count}`), !0
                  } else if ("mp3" === e.codec && "mp3" === this.audio_metadata_.codec) {
                    const t = e.data;
                    if (t.object_type !== this.audio_metadata_.object_type) return n.Z.v(this.TAG, `MP3: AudioObjectType changed from ${this.audio_metadata_.object_type} to ${t.object_type}`), !0;
                    if (t.sample_rate !== this.audio_metadata_.sample_rate) return n.Z.v(this.TAG, `MP3: SamplingFrequencyIndex changed from ${this.audio_metadata_.sample_rate} to ${t.sample_rate}`), !0;
                    if (t.channel_count !== this.audio_metadata_.channel_count) return n.Z.v(this.TAG, `MP3: Channel count changed from ${this.audio_metadata_.channel_count} to ${t.channel_count}`), !0
                  }
                  return !1
                }
                dispatchAudioInitSegment(e) {
                  var t, i, s, r, a, o;
                  const d = {
                    type: "audio"
                  };
                  if (d.id = null === (t = this.audio_track_) || void 0 === t ? void 0 : t.id, d.timescale = 1e3, d.duration = this.duration_, "aac" === (null === (i = this.audio_metadata_) || void 0 === i ? void 0 : i.codec)) {
                    const t = "aac" === e.codec ? e.data : null,
                      i = new H(t);
                    d.audioSampleRate = i.sampling_rate, d.channelCount = i.channel_count, d.codec = i.codec_mimetype, d.originalCodec = i.original_codec_mimetype, d.config = i.config, d.refSampleDuration = 1024 / d.audioSampleRate * d.timescale
                  } else if ("ac-3" === (null === (s = this.audio_metadata_) || void 0 === s ? void 0 : s.codec)) {
                    const t = "ac-3" === e.codec ? e.data : null,
                      i = new ge(t);
                    d.audioSampleRate = i.sampling_rate, d.channelCount = i.channel_count, d.codec = i.codec_mimetype, d.originalCodec = i.original_codec_mimetype, d.config = i.config, d.refSampleDuration = 1536 / d.audioSampleRate * d.timescale
                  } else if ("ec-3" === (null === (r = this.audio_metadata_) || void 0 === r ? void 0 : r.codec)) {
                    const t = "ec-3" === e.codec ? e.data : null,
                      i = new Ee(t);
                    d.audioSampleRate = i.sampling_rate, d.channelCount = i.channel_count, d.codec = i.codec_mimetype, d.originalCodec = i.original_codec_mimetype, d.config = i.config, d.refSampleDuration = 256 * i.num_blks / d.audioSampleRate * d.timescale
                  } else "opus" === (null === (a = this.audio_metadata_) || void 0 === a ? void 0 : a.codec) ? (d.audioSampleRate = this.audio_metadata_.sample_rate, d.channelCount = this.audio_metadata_.channel_count, d.channelConfigCode = this.audio_metadata_.channel_config_code, d.codec = "opus", d.originalCodec = "opus", d.config = void 0, d.refSampleDuration = 20) : "mp3" === (null === (o = this.audio_metadata_) || void 0 === o ? void 0 : o.codec) && (d.audioSampleRate = this.audio_metadata_.sample_rate, d.channelCount = this.audio_metadata_.channel_count, d.codec = "mp3", d.originalCodec = "mp3", d.config = void 0);
                  this.audio_init_segment_dispatched_ || n.Z.v(this.TAG, `Generated first AudioSpecificConfig for mimeType: ${d.codec}`), this.onTrackMetadata && this.onTrackMetadata("audio", d), this.audio_init_segment_dispatched_ = !0, this.video_metadata_changed_ = !1;
                  const l = this.media_info_;
                  l.hasAudio = !0, l.audioCodec = d.originalCodec, l.audioSampleRate = d.audioSampleRate, l.audioChannelCount = d.channelCount, l.hasVideo && l.videoCodec ? l.mimeType = `video/mp2t; codecs="${l.videoCodec},${l.audioCodec}"` : l.mimeType = `video/mp2t; codecs="${l.audioCodec}"`, l.isComplete() && this.onMediaInfo && this.onMediaInfo(l)
                }
                dispatchPESPrivateDataDescriptor(e, t, i) {
                  const s = new j;
                  s.pid = e, s.stream_type = t, s.descriptor = i, this.onPESPrivateDataDescriptor && this.onPESPrivateDataDescriptor(s)
                }
                parsePESPrivateDataPayload(e, t, i, s, n) {
                  const r = new z;
                  if (r.pid = s, r.stream_id = n, r.len = e.byteLength, r.data = e, void 0 !== t) {
                    const e = Math.floor(t / this.timescale_);
                    r.pts = e
                  } else r.nearest_pts = this.aac_last_sample_pts_;
                  if (void 0 !== i) {
                    const e = Math.floor(i / this.timescale_);
                    r.dts = e
                  }
                  this.onPESPrivateData && this.onPESPrivateData(r)
                }
                parseTimedID3MetadataPayload(e, t, i, s, n) {
                  const r = new z;
                  if (r.pid = s, r.stream_id = n, r.len = e.byteLength, r.data = e, void 0 !== t) {
                    const e = Math.floor(t / this.timescale_);
                    r.pts = e
                  }
                  if (void 0 !== i) {
                    const e = Math.floor(i / this.timescale_);
                    r.dts = e
                  }
                  this.onTimedID3Metadata && this.onTimedID3Metadata(r)
                }
                parseSMPTE2038MetadataPayload(e, t, i, s, n) {
                  const r = new Ae;
                  if (r.pid = s, r.stream_id = n, r.len = e.byteLength, r.data = e, void 0 !== t) {
                    const e = Math.floor(t / this.timescale_);
                    r.pts = e
                  }
                  if (r.nearest_pts = this.aac_last_sample_pts_, void 0 !== i) {
                    const e = Math.floor(i / this.timescale_);
                    r.dts = e
                  }
                  r.ancillaries = (e => {
                    let t = new A(e),
                      i = 0;
                    const s = [];
                    for (; i += 6, 0 === t.readBits(6);) {
                      const e = t.readBool();
                      i += 1;
                      const n = t.readBits(11);
                      i += 11;
                      const r = t.readBits(12);
                      i += 12;
                      const a = 255 & t.readBits(10);
                      i += 10;
                      const o = 255 & t.readBits(10);
                      i += 10;
                      const d = 255 & t.readBits(10);
                      i += 10;
                      const l = new Uint8Array(d);
                      for (let e = 0; e < d; e++) {
                        const s = 255 & t.readBits(10);
                        i += 10, l[e] = s
                      }
                      t.readBits(10), i += 10;
                      let h = "User Defined";
                      const c = {};
                      65 === a ? 7 === o && (h = "SCTE-104") : 95 === a ? 220 === o ? h = "ARIB STD-B37 (1SEG)" : 221 === o ? h = "ARIB STD-B37 (ANALOG)" : 222 === o ? h = "ARIB STD-B37 (SD)" : 223 === o && (h = "ARIB STD-B37 (HD)") : 97 === a && (1 === o ? h = "EIA-708" : 2 === o && (h = "EIA-608")), s.push({
                        yc_indicator: e,
                        line_number: n,
                        horizontal_offset: r,
                        did: a,
                        sdid: o,
                        user_data: l,
                        description: h,
                        information: c
                      }), t.readBits(8 - (i - Math.floor(i / 8)) % 8), i += (8 - (i - Math.floor(i / 8))) % 8
                    }
                    return t.destroy(), t = null, s
                  })(e), this.onSMPTE2038Metadata && this.onSMPTE2038Metadata(r)
                }
              },
              be = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
            class we {
              static init() {
                we.types = {
                  avc1: [],
                  avcC: [],
                  btrt: [],
                  dinf: [],
                  dref: [],
                  esds: [],
                  ftyp: [],
                  hdlr: [],
                  hvc1: [],
                  hvcC: [],
                  av01: [],
                  av1C: [],
                  mdat: [],
                  mdhd: [],
                  mdia: [],
                  mfhd: [],
                  minf: [],
                  moof: [],
                  moov: [],
                  mp4a: [],
                  mvex: [],
                  mvhd: [],
                  sdtp: [],
                  stbl: [],
                  stco: [],
                  stsc: [],
                  stsd: [],
                  stsz: [],
                  stts: [],
                  tfdt: [],
                  tfhd: [],
                  traf: [],
                  trak: [],
                  trun: [],
                  trex: [],
                  tkhd: [],
                  vmhd: [],
                  smhd: [],
                  ".mp3": [],
                  Opus: [],
                  dOps: [],
                  "ac-3": [],
                  dac3: [],
                  "ec-3": [],
                  dec3: []
                };
                for (const e in we.types) we.types.hasOwnProperty(e) && (we.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)])
              }
              static box(e, ...t) {
                let i = 8,
                  s = null;
                const n = Array.prototype.slice.call(arguments, 1),
                  r = n.length;
                for (let e = 0; e < r; e++) i += n[e].byteLength;
                s = new Uint8Array(i), s[0] = i >>> 24 & 255, s[1] = i >>> 16 & 255, s[2] = i >>> 8 & 255, s[3] = 255 & i, s.set(e, 4);
                let a = 8;
                for (let e = 0; e < r; e++) s.set(n[e], a), a += n[e].byteLength;
                return s
              }
              static generateInitSegment(e) {
                const t = we.box(we.types.ftyp, we.constants.FTYP),
                  i = we.moov(e),
                  s = new Uint8Array(t.byteLength + i.byteLength);
                return s.set(t, 0), s.set(i, t.byteLength), s
              }
              static moov(e) {
                const t = we.mvhd(e.timescale, e.duration),
                  i = we.trak(e),
                  s = we.mvex(e);
                return we.box(we.types.moov, t, i, s)
              }
              static mvhd(e, t) {
                return we.box(we.types.mvhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]))
              }
              static trak(e) {
                return we.box(we.types.trak, we.tkhd(e), we.mdia(e))
              }
              static tkhd(e) {
                const t = e.id,
                  i = e.duration,
                  s = e.presentWidth,
                  n = e.presentHeight;
                return we.box(we.types.tkhd, new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, 0, 0, 0, 0, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, s >>> 8 & 255, 255 & s, 0, 0, n >>> 8 & 255, 255 & n, 0, 0]))
              }
              static mdia(e) {
                return we.box(we.types.mdia, we.mdhd(e), we.hdlr(e), we.minf(e))
              }
              static mdhd(e) {
                const t = e.timescale,
                  i = e.duration;
                return we.box(we.types.mdhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, 85, 196, 0, 0]))
              }
              static hdlr(e) {
                let t = null;
                return t = "audio" === e.type ? we.constants.HDLR_AUDIO : we.constants.HDLR_VIDEO, we.box(we.types.hdlr, t)
              }
              static minf(e) {
                let t = null;
                return t = "audio" === e.type ? we.box(we.types.smhd, we.constants.SMHD) : we.box(we.types.vmhd, we.constants.VMHD), we.box(we.types.minf, t, we.dinf(), we.stbl(e))
              }
              static dinf() {
                return we.box(we.types.dinf, we.box(we.types.dref, we.constants.DREF))
              }
              static stbl(e) {
                return we.box(we.types.stbl, we.stsd(e), we.box(we.types.stts, we.constants.STTS), we.box(we.types.stsc, we.constants.STSC), we.box(we.types.stsz, we.constants.STSZ), we.box(we.types.stco, we.constants.STCO))
              }
              static stsd(e) {
                return "audio" === e.type ? "mp3" === e.codec ? we.box(we.types.stsd, we.constants.STSD_PREFIX, we.mp3(e)) : "ac-3" === e.codec ? we.box(we.types.stsd, we.constants.STSD_PREFIX, we.ac3(e)) : "ec-3" === e.codec ? we.box(we.types.stsd, we.constants.STSD_PREFIX, we.ec3(e)) : "opus" === e.codec ? we.box(we.types.stsd, we.constants.STSD_PREFIX, we.Opus(e)) : we.box(we.types.stsd, we.constants.STSD_PREFIX, we.mp4a(e)) : "video" === e.type && e.codec.startsWith("hvc1") ? we.box(we.types.stsd, we.constants.STSD_PREFIX, we.hvc1(e)) : "video" === e.type && e.codec.startsWith("av01") ? we.box(we.types.stsd, we.constants.STSD_PREFIX, we.av01(e)) : we.box(we.types.stsd, we.constants.STSD_PREFIX, we.avc1(e))
              }
              static mp3(e) {
                const t = e.channelCount,
                  i = e.audioSampleRate,
                  s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t, 0, 16, 0, 0, 0, 0, i >>> 8 & 255, 255 & i, 0, 0]);
                return we.box(we.types[".mp3"], s)
              }
              static mp4a(e) {
                const t = e.channelCount,
                  i = e.audioSampleRate,
                  s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t, 0, 16, 0, 0, 0, 0, i >>> 8 & 255, 255 & i, 0, 0]);
                return we.box(we.types.mp4a, s, we.esds(e))
              }
              static ac3(e) {
                var t;
                const i = e.channelCount,
                  s = e.audioSampleRate,
                  n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, i, 0, 16, 0, 0, 0, 0, s >>> 8 & 255, 255 & s, 0, 0]);
                return we.box(we.types["ac-3"], n, we.box(we.types.dac3, new Uint8Array(null !== (t = e.config) && void 0 !== t ? t : [])))
              }
              static ec3(e) {
                var t;
                const i = e.channelCount,
                  s = e.audioSampleRate,
                  n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, i, 0, 16, 0, 0, 0, 0, s >>> 8 & 255, 255 & s, 0, 0]);
                return we.box(we.types["ec-3"], n, we.box(we.types.dec3, new Uint8Array(null !== (t = e.config) && void 0 !== t ? t : [])))
              }
              static esds(e) {
                var t;
                const i = null !== (t = e.config) && void 0 !== t ? t : [],
                  s = i.length,
                  n = new Uint8Array([0, 0, 0, 0, 3, 23 + s, 0, 1, 0, 4, 15 + s, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([s]).concat(i).concat([6, 1, 2]));
                return we.box(we.types.esds, n)
              }
              static Opus(e) {
                const t = e.channelCount,
                  i = e.audioSampleRate,
                  s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t, 0, 16, 0, 0, 0, 0, i >>> 8 & 255, 255 & i, 0, 0]);
                return we.box(we.types.Opus, s, we.dOps(e))
              }
              static dOps(e) {
                const t = e.channelCount,
                  i = e.channelConfigCode,
                  s = e.audioSampleRate;
                let n = [];
                switch (i) {
                  case 1:
                  case 2:
                    n = [0];
                    break;
                  case 0:
                    n = [255, 1, 1, 0, 1];
                    break;
                  case 128:
                    n = [255, 2, 0, 0, 1];
                    break;
                  case 3:
                    n = [1, 2, 1, 0, 2, 1];
                    break;
                  case 4:
                    n = [1, 2, 2, 0, 1, 2, 3];
                    break;
                  case 5:
                    n = [1, 3, 2, 0, 4, 1, 2, 3];
                    break;
                  case 6:
                    n = [1, 4, 2, 0, 4, 1, 2, 3, 5];
                    break;
                  case 7:
                    n = [1, 4, 2, 0, 4, 1, 2, 3, 5, 6];
                    break;
                  case 8:
                    n = [1, 5, 3, 0, 6, 1, 2, 3, 4, 5, 7];
                    break;
                  case 130:
                    n = [1, 1, 2, 0, 1];
                    break;
                  case 131:
                    n = [1, 1, 3, 0, 1, 2];
                    break;
                  case 132:
                    n = [1, 1, 4, 0, 1, 2, 3];
                    break;
                  case 133:
                    n = [1, 1, 5, 0, 1, 2, 3, 4];
                    break;
                  case 134:
                    n = [1, 1, 6, 0, 1, 2, 3, 4, 5];
                    break;
                  case 135:
                    n = [1, 1, 7, 0, 1, 2, 3, 4, 5, 6];
                    break;
                  case 136:
                    n = [1, 1, 8, 0, 1, 2, 3, 4, 5, 6, 7]
                }
                const r = new Uint8Array([0, t, 0, 0, s >>> 24 & 255, s >>> 17 & 255, s >>> 8 & 255, s >>> 0 & 255, 0, 0, ...n]);
                return we.box(we.types.dOps, r)
              }
              static avc1(e) {
                const t = e.avcc,
                  i = e.codecWidth,
                  s = e.codecHeight,
                  n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, i >>> 8 & 255, 255 & i, s >>> 8 & 255, 255 & s, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 10, 120, 113, 113, 47, 102, 108, 118, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
                return we.box(we.types.avc1, n, we.box(we.types.avcC, t))
              }
              static hvc1(e) {
                const t = e.hvcc,
                  i = e.codecWidth,
                  s = e.codecHeight,
                  n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, i >>> 8 & 255, 255 & i, s >>> 8 & 255, 255 & s, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 10, 120, 113, 113, 47, 102, 108, 118, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
                return we.box(we.types.hvc1, n, we.box(we.types.hvcC, t))
              }
              static av01(e) {
                var t, i;
                const s = e.av1c,
                  n = null !== (t = e.codecWidth) && void 0 !== t ? t : 192,
                  r = null !== (i = e.codecHeight) && void 0 !== i ? i : 108,
                  a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, n >>> 8 & 255, 255 & n, r >>> 8 & 255, 255 & r, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 10, 120, 113, 113, 47, 102, 108, 118, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
                return we.box(we.types.av01, a, we.box(we.types.av1C, s))
              }
              static mvex(e) {
                return we.box(we.types.mvex, we.trex(e))
              }
              static trex(e) {
                const t = e.id,
                  i = new Uint8Array([0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
                return we.box(we.types.trex, i)
              }
              static moof(e, t) {
                return we.box(we.types.moof, we.mfhd(e.sequenceNumber), we.traf(e, t))
              }
              static mfhd(e) {
                const t = new Uint8Array([0, 0, 0, 0, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e]);
                return we.box(we.types.mfhd, t)
              }
              static traf(e, t) {
                const i = e.id,
                  s = we.box(we.types.tfhd, new Uint8Array([0, 0, 0, 0, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i])),
                  n = we.box(we.types.tfdt, new Uint8Array([0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t])),
                  r = we.sdtp(e),
                  a = we.trun(e, r.byteLength + 16 + 16 + 8 + 16 + 8 + 8);
                return we.box(we.types.traf, s, n, a, r)
              }
              static sdtp(e) {
                const t = e.samples || [],
                  i = t.length,
                  s = new Uint8Array(4 + i);
                for (let e = 0; e < i; e++) {
                  const i = t[e].flags;
                  s[e + 4] = i.isLeading << 6 | i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy
                }
                return we.box(we.types.sdtp, s)
              }
              static trun(e, t) {
                const i = e.samples || [],
                  s = i.length,
                  n = 12 + 16 * s,
                  r = new Uint8Array(n);
                t += 8 + n, r.set([0, 0, 15, 1, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t], 0);
                for (let e = 0; e < s; e++) {
                  const t = i[e].duration,
                    s = i[e].size,
                    n = i[e].flags,
                    a = i[e].cts;
                  r.set([t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, n.isLeading << 2 | n.dependsOn, n.isDependedOn << 6 | n.hasRedundancy << 4 | n.isNonSync, 0, 0, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a], 12 + 16 * e)
                }
                return we.box(we.types.trun, r)
              }
              static mdat(e) {
                return we.box(we.types.mdat, e)
              }
            }
            we.constants = {
              FTYP: new Uint8Array([105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118, 99, 49]),
              STSD_PREFIX: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]),
              STTS: be,
              STSC: be,
              STCO: be,
              STSZ: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
              HDLR_VIDEO: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
              HDLR_AUDIO: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]),
              DREF: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
              SMHD: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
              VMHD: new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
            }, we.init();
            const Te = we,
              Re = class {
                static getSilentFrame(e, t) {
                  if ("mp4a.40.2" === e) {
                    if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                    if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                    if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                    if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                    if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                    if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224])
                  } else {
                    if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                    if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                    if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                  }
                  return null
                }
              };
            var Ce = i(68);
            const Be = class {
              constructor(e) {
                var t;
                this.TAG = "MP4Remuxer", this._fillSilentAfterSeek = !1, this._config = e, this._isLive = !!e.isLive, this._dtsBase = -1, this._dtsBaseInited = !1, this._audioDtsBase = 1 / 0, this._videoDtsBase = 1 / 0, this._audioNextDts = void 0, this._videoNextDts = void 0, this._audioStashedLastSample = null, this._videoStashedLastSample = null, this._audioMeta = null, this._videoMeta = null, this._audioSegmentInfoList = new Ce.J1("audio"), this._videoSegmentInfoList = new Ce.J1("video"), this._onInitSegment = null, this._onMediaSegment = null, this._forceFirstIDR = !(!r.Z.chrome || !(r.Z.version && r.Z.version.major < 50 || r.Z.version && 50 === r.Z.version.major && ((null === (t = r.Z.version) || void 0 === t ? void 0 : t.build) || 0) < 2661)), this._fillSilentAfterSeek = !(!r.Z.msedge && !r.Z.msie), this._mp3UseMpegAudio = !r.Z.firefox, this._fillAudioTimestampGap = this._config.fixAudioTimestampGap
              }
              destroy() {
                this._dtsBase = -1, this._dtsBaseInited = !1, this._audioMeta = null, this._videoMeta = null, this._audioSegmentInfoList.clear(), this._audioSegmentInfoList = null, this._videoSegmentInfoList.clear(), this._videoSegmentInfoList = null, this._onInitSegment = null, this._onMediaSegment = null
              }
              bindDataSource(e) {
                var t;
                return e.onDataAvailable = null === (t = this.remux) || void 0 === t ? void 0 : t.bind(this), e.onTrackMetadata = this._onTrackMetadataReceived.bind(this), this
              }
              get onInitSegment() {
                return this._onInitSegment
              }
              set onInitSegment(e) {
                this._onInitSegment = e
              }
              get onMediaSegment() {
                return this._onMediaSegment
              }
              set onMediaSegment(e) {
                this._onMediaSegment = e
              }
              insertDiscontinuity() {
                this._audioNextDts = this._videoNextDts = void 0
              }
              seek(e) {
                this._audioStashedLastSample = null, this._videoStashedLastSample = null, this._videoSegmentInfoList.clear(), this._audioSegmentInfoList.clear()
              }
              remux(e, t) {
                if (!this._onMediaSegment) throw new l.rT("MP4Remuxer: onMediaSegment callback must be specificed!");
                this._dtsBaseInited || this._calculateDtsBase(e, t), t && this._remuxVideo(t), e && this._remuxAudio(e)
              }
              _onTrackMetadataReceived(e, t) {
                let i = null,
                  s = "mp4",
                  n = t.codec;
                if ("audio" === e) this._audioMeta = t, "mp3" === t.codec && this._mp3UseMpegAudio ? (s = "mpeg", n = "", i = new Uint8Array) : i = Te.generateInitSegment(t);
                else {
                  if ("video" !== e) return;
                  this._videoMeta = t, i = Te.generateInitSegment(t)
                }
                if (!this._onInitSegment) throw new l.rT("MP4Remuxer: onInitSegment callback must be specified!");
                this._onInitSegment(e, {
                  type: e,
                  data: i.buffer,
                  codec: n,
                  container: `${e}/${s}`,
                  mediaDuration: t.duration
                })
              }
              _calculateDtsBase(e, t) {
                var i, s;
                this._dtsBaseInited || ((null === (i = null == e ? void 0 : e.samples) || void 0 === i ? void 0 : i.length) && (this._audioDtsBase = e.samples[0].dts), (null === (s = null == t ? void 0 : t.samples) || void 0 === s ? void 0 : s.length) && (this._videoDtsBase = t.samples[0].dts), this._dtsBase = Math.min(this._audioDtsBase, this._videoDtsBase), this._dtsBaseInited = !0)
              }
              getTimestampBase() {
                if (this._dtsBaseInited) return this._dtsBase
              }
              flushStashedSamples() {
                const e = this._videoStashedLastSample,
                  t = this._audioStashedLastSample,
                  i = {
                    type: "video",
                    id: 1,
                    sequenceNumber: 0,
                    samples: [],
                    length: 0
                  };
                null != e && (i.samples.push(e), i.length = null == e ? void 0 : e.length);
                const s = {
                  type: "audio",
                  id: 2,
                  sequenceNumber: 0,
                  samples: [],
                  length: 0
                };
                null != t && (s.samples.push(t), s.length = null == t ? void 0 : t.length), this._videoStashedLastSample = null, this._audioStashedLastSample = null, this._remuxVideo(i, !0), this._remuxAudio(s, !0)
              }
              _remuxAudio(e, t) {
                var i, s, a, o, d, l, h;
                if (null == this._audioMeta) return;
                const c = e,
                  u = c.samples;
                let A, _ = -1,
                  m = -1;
                const p = this._audioMeta.refSampleDuration,
                  f = "mp3" === this._audioMeta.codec && this._mp3UseMpegAudio,
                  g = this._dtsBaseInited && void 0 === this._audioNextDts;
                let v = !1;
                if (!u || 0 === u.length) return;
                if (1 === u.length && !t) return;
                let y = 0,
                  E = null,
                  S = 0;
                f ? (y = 0, S = c.length) : (y = 8, S = 8 + c.length);
                let b = null;
                if (u.length > 1 && (b = u.pop(), S -= b.length), null != this._audioStashedLastSample) {
                  const e = this._audioStashedLastSample;
                  this._audioStashedLastSample = null, u.unshift(e), S += e.length
                }
                null != b && (this._audioStashedLastSample = b);
                const w = u[0].dts - this._dtsBase;
                if (this._audioNextDts) A = w - this._audioNextDts;
                else if (this._audioSegmentInfoList.isEmpty()) A = 0, this._fillSilentAfterSeek && !this._videoSegmentInfoList.isEmpty() && "mp3" !== this._audioMeta.originalCodec && (v = !0);
                else {
                  const e = this._audioSegmentInfoList.getLastSampleBefore(w);
                  if (null != e) {
                    let t = w - (e.originalDts + e.duration);
                    t <= 3 && (t = 0), A = w - (e.dts + e.duration + t)
                  } else A = 0
                }
                if (v) {
                  const e = w - A,
                    t = this._videoSegmentInfoList.getLastSegmentBefore(w);
                  if (null != t && t.beginDts < e) {
                    const r = Re.getSilentFrame(null === (i = this._audioMeta) || void 0 === i ? void 0 : i.originalCodec, null === (s = this._audioMeta) || void 0 === s ? void 0 : s.channelCount);
                    if (r) {
                      const i = t.beginDts,
                        s = e - t.beginDts;
                      n.Z.v(this.TAG, `InsertPrefixSilentAudio: dts: ${i}, duration: ${s}`), u.unshift({
                        unit: r,
                        dts: i,
                        pts: i
                      }), S += r.byteLength
                    }
                  } else v = !1
                }
                const T = [];
                for (let e = 0; e < u.length; e++) {
                  const t = u[e],
                    i = t.unit,
                    s = t.dts - this._dtsBase;
                  let h = s,
                    c = !1,
                    m = null,
                    f = 0;
                  if (!(s < -.001)) {
                    if ("mp3" !== this._audioMeta.codec) {
                      let e = s;
                      const t = 3;
                      if (this._audioNextDts && (e = this._audioNextDts), A = s - e, A <= -t * (p || 0)) {
                        n.Z.w(this.TAG, `Dropping 1 audio frame (originalDts: ${s} ms ,curRefDts: ${e} ms)  due to dtsCorrection: ${A} ms overlap.`);
                        continue
                      }
                      if (A >= t * (p || 0) && this._fillAudioTimestampGap && !r.Z.safari) {
                        c = !0;
                        const t = Math.floor(A / (p || 0));
                        n.Z.w(this.TAG, `Large audio timestamp gap detected, may cause AV sync to drift. Silent frames will be generated to avoid unsync.\noriginalDts: ${s} ms, curRefDts: ${e} ms, dtsCorrection: ${Math.round(A)} ms, generate: ${t} frames`), h = Math.floor(e), f = Math.floor(e + (p || 0)) - h;
                        let r = Re.getSilentFrame(null === (a = this._audioMeta) || void 0 === a ? void 0 : a.originalCodec, this._audioMeta.channelCount);
                        null == r && (n.Z.w(this.TAG, `Unable to generate silent frame for ${null===(o=this._audioMeta)||void 0===o?void 0:o.originalCodec} with ${this._audioMeta.channelCount} channels, repeat last frame`), r = i), m = [];
                        for (let i = 0; i < t; i++) {
                          e += p || 0;
                          const t = Math.floor(e),
                            i = Math.floor(e + (p || 0)) - t,
                            n = {
                              dts: t,
                              pts: t,
                              cts: 0,
                              unit: r,
                              size: r.byteLength,
                              duration: i,
                              originalDts: s,
                              flags: {
                                isLeading: 0,
                                dependsOn: 1,
                                isDependedOn: 0,
                                hasRedundancy: 0
                              }
                            };
                          m.push(n), S += n.size
                        }
                        this._audioNextDts = e + (p || 0)
                      } else h = Math.floor(e), f = Math.floor(e + (p || 0)) - h, this._audioNextDts = e + (p || 0)
                    } else h = s - A, f = e !== u.length - 1 ? u[e + 1].dts - this._dtsBase - A - h : null != b ? b.dts - this._dtsBase - A - h : T.length >= 1 ? null === (d = T[T.length - 1]) || void 0 === d ? void 0 : d.duration : Math.floor(p || 0), this._audioNextDts = h + f; - 1 === _ && (_ = h), T.push({
                      dts: h,
                      pts: h,
                      cts: 0,
                      unit: t.unit,
                      size: null === (l = t.unit) || void 0 === l ? void 0 : l.byteLength,
                      duration: f,
                      originalDts: s,
                      flags: {
                        isLeading: 0,
                        dependsOn: 1,
                        isDependedOn: 0,
                        hasRedundancy: 0
                      }
                    }), c && T.push.apply(T, m)
                  }
                }
                if (0 === T.length) return c.samples = [], void(c.length = 0);
                f ? E = new Uint8Array(S) : (E = new Uint8Array(S), E[0] = S >>> 24 & 255, E[1] = S >>> 16 & 255, E[2] = S >>> 8 & 255, E[3] = 255 & S, E.set(Te.types.mdat, 4));
                for (let e = 0; e < T.length; e++) {
                  const t = T[e].unit;
                  E.set(t, y), y += t.byteLength || 0
                }
                const R = T[T.length - 1];
                m = R.dts + R.duration;
                const C = new Ce.Yy;
                C.beginDts = _, C.endDts = m, C.beginPts = _, C.endPts = m, C.originalBeginDts = T[0].originalDts, C.originalEndDts = R.originalDts + R.duration, C.firstSample = new Ce.Wk(T[0].dts, T[0].pts, T[0].duration, T[0].originalDts, !1), C.lastSample = new Ce.Wk(R.dts, R.pts, R.duration, R.originalDts, !1), this._isLive || this._audioSegmentInfoList.append(C), c.samples = T, c.sequenceNumber++;
                let B = null;
                B = f ? new Uint8Array : Te.moof(c, _), c.samples = [], c.length = 0;
                const k = {
                  type: "audio",
                  data: this._mergeBoxes(B, E).buffer,
                  sampleCount: T.length,
                  info: C
                };
                f && g && k && (k.timestampOffset = _), null === (h = this._onMediaSegment) || void 0 === h || h.call(this, "audio", k)
              }
              _remuxVideo(e, t) {
                var i, s;
                if (null == this._videoMeta) return;
                const n = e,
                  r = n.samples;
                let a, o = -1,
                  d = -1,
                  l = -1,
                  h = -1;
                if (!r || 0 === r.length) return;
                if (1 === r.length && !t) return;
                let c = 8,
                  u = null,
                  A = 8 + e.length,
                  _ = null;
                if (r.length > 1 && (_ = r.pop(), A -= _.length), null != this._videoStashedLastSample) {
                  const e = this._videoStashedLastSample;
                  this._videoStashedLastSample = null, r.unshift(e), A += (null == e ? void 0 : e.length) || 0
                }
                null != _ && (this._videoStashedLastSample = _);
                const m = r[0].dts - this._dtsBase;
                if (this._videoNextDts) a = m - this._videoNextDts;
                else if (this._videoSegmentInfoList.isEmpty()) a = 0;
                else {
                  const e = this._videoSegmentInfoList.getLastSampleBefore(m);
                  if (null != e) {
                    let t = m - (e.originalDts + e.duration);
                    t <= 3 && (t = 0), a = m - (e.dts + e.duration + t)
                  } else a = 0
                }
                const p = new Ce.Yy,
                  f = [];
                for (let e = 0; e < r.length; e++) {
                  const t = r[e],
                    s = t.dts - this._dtsBase,
                    n = t.isKeyframe,
                    d = s - a,
                    h = t.cts,
                    c = d + h; - 1 === o && (o = d, l = c);
                  let u = 0;
                  if (u = e !== r.length - 1 ? r[e + 1].dts - this._dtsBase - a - d : null != _ ? _.dts - this._dtsBase - a - d : f.length >= 1 ? f[f.length - 1].duration : Math.floor((null === (i = this._videoMeta) || void 0 === i ? void 0 : i.refSampleDuration) || 0), n) {
                    const e = new Ce.Wk(d, c, u, t.dts, !0);
                    e.fileposition = t.fileposition, p.appendSyncPoint(e)
                  }
                  f.push({
                    dts: d,
                    pts: c,
                    cts: h,
                    units: t.units,
                    size: t.length,
                    isKeyframe: n,
                    duration: u,
                    originalDts: s,
                    flags: {
                      isLeading: 0,
                      dependsOn: n ? 2 : 1,
                      isDependedOn: n ? 1 : 0,
                      hasRedundancy: 0,
                      isNonSync: n ? 0 : 1
                    }
                  })
                }
                u = new Uint8Array(A), u[0] = A >>> 24 & 255, u[1] = A >>> 16 & 255, u[2] = A >>> 8 & 255, u[3] = 255 & A, u.set(Te.types.mdat, 4);
                for (let e = 0; e < f.length; e++) {
                  const t = f[e].units;
                  for (; null == t ? void 0 : t.length;) {
                    const e = t.shift(),
                      i = null == e ? void 0 : e.data;
                    u.set(i, c), c += i.byteLength
                  }
                }
                const g = f[f.length - 1];
                if (d = g.dts + g.duration, h = g.pts + g.duration, this._videoNextDts = d, p.beginDts = o, p.endDts = d, p.beginPts = l, p.endPts = h, p.originalBeginDts = f[0].originalDts, p.originalEndDts = g.originalDts + g.duration, p.firstSample = new Ce.Wk(f[0].dts, f[0].pts, f[0].duration, f[0].originalDts, !!f[0].isKeyframe), p.lastSample = new Ce.Wk(g.dts, g.pts, g.duration, g.originalDts, !!g.isKeyframe), this._isLive || this._videoSegmentInfoList.append(p), n.samples = f, n.sequenceNumber++, this._forceFirstIDR) {
                  const e = f[0].flags;
                  e.dependsOn = 2, e.isNonSync = 0
                }
                const v = Te.moof(n, o);
                n.samples = [], n.length = 0, null === (s = this._onMediaSegment) || void 0 === s || s.call(this, "video", {
                  type: "video",
                  data: this._mergeBoxes(v, u).buffer,
                  sampleCount: f.length,
                  info: p
                })
              }
              _mergeBoxes(e, t) {
                const i = new Uint8Array(e.byteLength + t.byteLength);
                return i.set(e, 0), i.set(t, e.byteLength), i
              }
            };
            var ke = i(575),
              Ie = i(473);
            const Oe = class {
              constructor(e, t) {
                var i;
                this.TAG = "TransmuxingController", this._emitter = new s.EventEmitter, this._config = t, e.segments || (e.segments = [{
                  duration: e.duration,
                  filesize: e.filesize,
                  url: e.url
                }]), "boolean" != typeof e.cors && (e.cors = !0), "boolean" != typeof e.withCredentials && (e.withCredentials = !1), this._mediaDataSource = e, this._currentSegmentIndex = 0;
                let n = 0;
                null === (i = this._mediaDataSource.segments) || void 0 === i || i.forEach((i => {
                  i.timestampBase = n, n += i.duration, i.cors = e.cors, i.withCredentials = e.withCredentials, t.referrerPolicy && (i.referrerPolicy = t.referrerPolicy)
                })), isNaN(n) || this._mediaDataSource.duration === n || (this._mediaDataSource.duration = n), this._mediaInfo = null, this._demuxer = null, this._remuxer = null, this._ioctl = null, this._pendingSeekTime = null, this._pendingResolveSeekPoint = null, this._statisticsReporter = null
              }
              destroy() {
                var e, t, i;
                this._mediaInfo = null, this._mediaDataSource = null, this._statisticsReporter && this._disableStatisticsReporter(), this._ioctl && (null === (e = this._ioctl) || void 0 === e || e.destroy(), this._ioctl = null), this._demuxer && (null === (t = this._demuxer) || void 0 === t || t.destroy(), this._demuxer = null), this._remuxer && (null === (i = this._remuxer) || void 0 === i || i.destroy(), this._remuxer = null), this._emitter.removeAllListeners(), this._emitter = null
              }
              on(e, t) {
                this._emitter.addListener(e, t)
              }
              off(e, t) {
                this._emitter.removeListener(e, t)
              }
              start() {
                this._loadSegment(0), this._enableStatisticsReporter()
              }
              _loadSegment(e, t) {
                var i, s, n;
                if (this._currentSegmentIndex = e, null === (i = this._mediaDataSource) || void 0 === i ? void 0 : i.segments) {
                  const i = null === (s = this._mediaDataSource) || void 0 === s ? void 0 : s.segments[e],
                    r = this._ioctl = new ke.Z(i, this._config, e);
                  r.onError = this._onIOException.bind(this), r.onSeeked = this._onIOSeeked.bind(this), r.onComplete = this._onIOComplete.bind(this), r.onRedirect = this._onIORedirect.bind(this), r.onRecoveredEarlyEof = this._onIORecoveredEarlyEof.bind(this), t ? null === (n = this._demuxer) || void 0 === n || n.bindDataSource(this._ioctl) : r.onDataArrival = this._onInitChunkArrival.bind(this), r.open(t)
                }
              }
              stop() {
                this._internalAbort(), this._disableStatisticsReporter()
              }
              _internalAbort() {
                this._ioctl && (this._ioctl.destroy(), this._ioctl = null)
              }
              pause() {
                var e;
                (null === (e = this._ioctl) || void 0 === e ? void 0 : e.isWorking()) && (this._ioctl.pause(), this._disableStatisticsReporter())
              }
              resume() {
                var e;
                (null === (e = this._ioctl) || void 0 === e ? void 0 : e.isPaused()) && (this._ioctl.resume(), this._enableStatisticsReporter())
              }
              seek(e) {
                var t, i, s, n, r, a, o, d, l, h, c, u, A, _;
                if (null == this._mediaInfo || !(null === (t = this._mediaInfo) || void 0 === t ? void 0 : t.isSeekable())) return;
                const m = this._searchSegmentIndexContains(e);
                if (m === this._currentSegmentIndex) {
                  const t = (null === (i = this._mediaInfo) || void 0 === i ? void 0 : i.segments) ? null === (s = this._mediaInfo) || void 0 === s ? void 0 : s.segments[m] : {};
                  if (void 0 === t) this._pendingSeekTime = e;
                  else {
                    const i = null == t ? void 0 : t.getNearestKeyframe(e);
                    null === (n = this._remuxer) || void 0 === n || n.seek(null == i ? void 0 : i.milliseconds), null === (r = this._ioctl) || void 0 === r || r.seek(null == i ? void 0 : i.fileposition), this._pendingResolveSeekPoint = null == i ? void 0 : i.milliseconds
                  }
                } else {
                  const t = (null === (a = this._mediaInfo) || void 0 === a ? void 0 : a.segments) ? null === (o = this._mediaInfo) || void 0 === o ? void 0 : o.segments[m] : {};
                  if (void 0 === t) this._pendingSeekTime = e, this._internalAbort(), null === (d = this._remuxer) || void 0 === d || d.seek(), null === (l = this._remuxer) || void 0 === l || l.insertDiscontinuity(), this._loadSegment(m);
                  else {
                    const i = t.getNearestKeyframe(e);
                    this._internalAbort(), null === (h = this._remuxer) || void 0 === h || h.seek(e), null === (c = this._remuxer) || void 0 === c || c.insertDiscontinuity(), this._demuxer && (null === (u = this._demuxer) || void 0 === u || u.resetMediaInfo(), this._demuxer.timestampBase = (null === (A = this._mediaDataSource) || void 0 === A ? void 0 : A.segments) ? null === (_ = this._mediaDataSource) || void 0 === _ ? void 0 : _.segments[m].timestampBase : 0), this._loadSegment(m, null == i ? void 0 : i.fileposition), this._pendingResolveSeekPoint = null == i ? void 0 : i.milliseconds, this._reportSegmentMediaInfo(m)
                  }
                }
                this._enableStatisticsReporter()
              }
              _searchSegmentIndexContains(e) {
                var t;
                const i = this._mediaDataSource.segments;
                let s = ((null == i ? void 0 : i.length) || 0) - 1;
                if (0 === ((null == i ? void 0 : i.length) || 0)) return s;
                for (let n = 0; n < ((null == i ? void 0 : i.length) || 0); n++)
                  if (i && e < ((null === (t = i[n]) || void 0 === t ? void 0 : t.timestampBase) || 0)) {
                    s = n - 1;
                    break
                  } return s
              }
              _onInitChunkArrival(e, t) {
                var i, s, r, a, o;
                let d = 0;
                if (t > 0) null === (i = this._demuxer) || void 0 === i || i.bindDataSource(this._ioctl), this._demuxer.timestampBase = this._mediaDataSource.segments ? null === (s = this._mediaDataSource.segments[this._currentSegmentIndex]) || void 0 === s ? void 0 : s.timestampBase : 0, d = (null === (r = this._demuxer) || void 0 === r ? void 0 : r.parseChunks(e, t)) || 0;
                else {
                  let i = null;
                  i = R.probe(e), i.match && (this._setupFLVDemuxerRemuxer(i), d = (null === (a = this._demuxer) || void 0 === a ? void 0 : a.parseChunks(e, t)) || 0), i.match || (null == i ? void 0 : i.needMoreData) || (i = Se.probe(e), i.match && (this._setupTSDemuxerRemuxer(i), d = (null === (o = this._demuxer) || void 0 === o ? void 0 : o.parseChunks(e, t)) || 0)), i.match || (null == i ? void 0 : i.needMoreData) || (i = null, n.Z.e(this.TAG, "Non MPEG-TS/FLV, Unsupported media type!"), Promise.resolve().then((() => {
                    this._internalAbort()
                  })), this._emitter.emit(Ie.Z.DEMUX_ERROR, p.Z.FORMAT_UNSUPPORTED, "Non MPEG-TS/FLV, Unsupported media type!"))
                }
                return d
              }
              _setupFLVDemuxerRemuxer(e) {
                var t;
                this._demuxer = new R(e, this._config), this._remuxer || (this._remuxer = new Be(this._config));
                const i = this._mediaDataSource;
                void 0 === i.duration || isNaN(i.duration) || (this._demuxer.overridedDuration = i.duration), "boolean" == typeof i.hasAudio && (this._demuxer.overridedHasAudio = i.hasAudio), "boolean" == typeof i.hasVideo && (this._demuxer.overridedHasVideo = i.hasVideo), i.segments && this._demuxer && this._remuxer && (this._demuxer.timestampBase = null === (t = null == i ? void 0 : i.segments[this._currentSegmentIndex]) || void 0 === t ? void 0 : t.timestampBase, this._demuxer.onError = this._onDemuxException.bind(this), this._demuxer.onMediaInfo = this._onMediaInfo.bind(this), this._demuxer.onMetaDataArrived = this._onMetaDataArrived.bind(this), this._demuxer.onScriptDataArrived = this._onScriptDataArrived.bind(this), this._remuxer.bindDataSource(this._demuxer.bindDataSource(this._ioctl)), this._remuxer.onInitSegment = this._onRemuxerInitSegmentArrival.bind(this), this._remuxer.onMediaSegment = this._onRemuxerMediaSegmentArrival.bind(this))
              }
              _setupTSDemuxerRemuxer(e) {
                const t = this._demuxer = new Se(e, this._config);
                this._remuxer || (this._remuxer = new Be(this._config)), t.onError = this._onDemuxException.bind(this), t.onMediaInfo = this._onMediaInfo.bind(this), t.onMetaDataArrived = this._onMetaDataArrived.bind(this), t.onTimedID3Metadata = this._onTimedID3Metadata.bind(this), t.onSMPTE2038Metadata = this._onSMPTE2038Metadata.bind(this), t.onSCTE35Metadata = this._onSCTE35Metadata.bind(this), t.onPESPrivateDataDescriptor = this._onPESPrivateDataDescriptor.bind(this), t.onPESPrivateData = this._onPESPrivateData.bind(this), this._remuxer.bindDataSource(this._demuxer), this._demuxer.bindDataSource(this._ioctl), this._remuxer.onInitSegment = this._onRemuxerInitSegmentArrival.bind(this), this._remuxer.onMediaSegment = this._onRemuxerMediaSegmentArrival.bind(this)
              }
              _onMediaInfo(e) {
                var t, i;
                null == this._mediaInfo && (this._mediaInfo = Object.assign({}, e), this._mediaInfo.keyframesIndex = null, this._mediaInfo.segments = [], this._mediaInfo.segmentCount = (null === (i = null === (t = this._mediaDataSource) || void 0 === t ? void 0 : t.segments) || void 0 === i ? void 0 : i.length) || 0, Object.setPrototypeOf(this._mediaInfo, a.Z.prototype));
                const s = Object.assign({}, e);
                Object.setPrototypeOf(s, a.Z.prototype), this._mediaInfo.segments && (this._mediaInfo.segments[this._currentSegmentIndex] = s), this._reportSegmentMediaInfo(this._currentSegmentIndex), null != this._pendingSeekTime && Promise.resolve().then((() => {
                  const e = this._pendingSeekTime;
                  this._pendingSeekTime = null, this.seek(e)
                }))
              }
              _onMetaDataArrived(e) {
                this._emitter.emit(Ie.Z.METADATA_ARRIVED, e)
              }
              _onScriptDataArrived(e) {
                this._emitter.emit(Ie.Z.SCRIPTDATA_ARRIVED, e)
              }
              _onTimedID3Metadata(e) {
                var t;
                const i = null === (t = this._remuxer) || void 0 === t ? void 0 : t.getTimestampBase();
                void 0 !== i && (void 0 !== e.pts && (e.pts -= i), void 0 !== e.dts && (e.dts -= i), this._emitter.emit(Ie.Z.TIMED_ID3_METADATA_ARRIVED, e))
              }
              _onSMPTE2038Metadata(e) {
                var t;
                const i = null === (t = this._remuxer) || void 0 === t ? void 0 : t.getTimestampBase();
                void 0 !== i && (void 0 !== e.pts && (e.pts -= i), void 0 !== e.dts && (e.dts -= i), void 0 !== e.nearest_pts && (e.nearest_pts -= i), this._emitter.emit(Ie.Z.SMPTE2038_METADATA_ARRIVED, e))
              }
              _onSCTE35Metadata(e) {
                var t;
                const i = null === (t = this._remuxer) || void 0 === t ? void 0 : t.getTimestampBase();
                void 0 !== i && (void 0 !== e.pts && (e.pts -= i), void 0 !== e.nearest_pts && (e.nearest_pts -= i), this._emitter.emit(Ie.Z.SCTE35_METADATA_ARRIVED, e))
              }
              _onPESPrivateDataDescriptor(e) {
                this._emitter.emit(Ie.Z.PES_PRIVATE_DATA_DESCRIPTOR, e)
              }
              _onPESPrivateData(e) {
                var t;
                const i = null === (t = this._remuxer) || void 0 === t ? void 0 : t.getTimestampBase();
                void 0 !== i && (void 0 !== e.pts && (e.pts -= i), void 0 !== e.nearest_pts && (e.nearest_pts -= i), void 0 !== e.dts && (e.dts -= i), this._emitter.emit(Ie.Z.PES_PRIVATE_DATA_ARRIVED, e))
              }
              _onIOSeeked() {
                var e;
                null === (e = this._remuxer) || void 0 === e || e.insertDiscontinuity()
              }
              _onIOComplete(e) {
                var t, i;
                const s = e + 1;
                s < ((null === (i = null === (t = this._mediaDataSource) || void 0 === t ? void 0 : t.segments) || void 0 === i ? void 0 : i.length) || 0) ? (this._internalAbort(), this._remuxer && this._remuxer.flushStashedSamples(), this._loadSegment(s)) : (this._remuxer && this._remuxer.flushStashedSamples(), this._emitter.emit(Ie.Z.LOADING_COMPLETE), this._disableStatisticsReporter())
              }
              _onIORedirect(e) {
                var t;
                const i = null === (t = this._ioctl) || void 0 === t ? void 0 : t.extraData;
                this._mediaDataSource.segments && (this._mediaDataSource.segments[i].redirectedURL = e)
              }
              _onIORecoveredEarlyEof() {
                this._emitter.emit(Ie.Z.RECOVERED_EARLY_EOF)
              }
              _onIOException(e, t) {
                n.Z.e(this.TAG, `IOException: type = ${e}, code = ${t.code}, msg = ${t.msg}`), this._emitter.emit(Ie.Z.IO_ERROR, e, t), this._disableStatisticsReporter()
              }
              _onDemuxException(e, t) {
                n.Z.e(this.TAG, `DemuxException: type = ${e}, info = ${t}`), this._emitter.emit(Ie.Z.DEMUX_ERROR, e, t)
              }
              _onRemuxerInitSegmentArrival(e, t) {
                this._emitter.emit(Ie.Z.INIT_SEGMENT, e, t)
              }
              _onRemuxerMediaSegmentArrival(e, t) {
                if (null == this._pendingSeekTime && (this._emitter.emit(Ie.Z.MEDIA_SEGMENT, e, t), null != this._pendingResolveSeekPoint && "video" === e)) {
                  const e = t.info.syncPoints;
                  let i = this._pendingResolveSeekPoint;
                  this._pendingResolveSeekPoint = null, r.Z.safari && e.length > 0 && e[0].originalDts === i && (i = e[0].pts), this._emitter.emit(Ie.Z.RECOMMEND_SEEKPOINT, i)
                }
              }
              _enableStatisticsReporter() {
                null == this._statisticsReporter && this._reportStatisticsInfo && (this._statisticsReporter = self.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval))
              }
              _disableStatisticsReporter() {
                this._statisticsReporter && (self.clearInterval(this._statisticsReporter), this._statisticsReporter = null)
              }
              _reportSegmentMediaInfo(e) {
                var t, i, s, n;
                const r = (null === (t = this._mediaInfo) || void 0 === t ? void 0 : t.segments) ? null === (i = this._mediaInfo) || void 0 === i ? void 0 : i.segments[e] : {},
                  a = Object.assign({}, r);
                a.duration = null === (s = this._mediaInfo) || void 0 === s ? void 0 : s.duration, a.segmentCount = null === (n = this._mediaInfo) || void 0 === n ? void 0 : n.segmentCount, delete a.segments, delete a.keyframesIndex, this._emitter.emit(Ie.Z.MEDIA_INFO, a)
              }
              _reportStatisticsInfo() {
                var e, t, i, s, n, r;
                const a = {};
                a.url = null === (e = this._ioctl) || void 0 === e ? void 0 : e.currentURL, a.hasRedirect = null === (t = this._ioctl) || void 0 === t ? void 0 : t.hasRedirect, a.hasRedirect && (a.redirectedURL = null === (i = this._ioctl) || void 0 === i ? void 0 : i.currentRedirectedURL), a.speed = null === (s = this._ioctl) || void 0 === s ? void 0 : s.currentSpeed, a.loaderType = null === (n = this._ioctl) || void 0 === n ? void 0 : n.loaderType, a.currentSegmentIndex = this._currentSegmentIndex, a.totalSegmentCount = null === (r = this._mediaDataSource.segments) || void 0 === r ? void 0 : r.length, this._emitter.emit(Ie.Z.STATISTICS_INFO, a)
              }
            }
          },
          473: (e, t, i) => {
            i.d(t, {
              Z: () => s
            });
            const s = {
              IO_ERROR: "io_error",
              DEMUX_ERROR: "demux_error",
              INIT_SEGMENT: "init_segment",
              MEDIA_SEGMENT: "media_segment",
              LOADING_COMPLETE: "loading_complete",
              RECOVERED_EARLY_EOF: "recovered_early_eof",
              MEDIA_INFO: "media_info",
              METADATA_ARRIVED: "metadata_arrived",
              SCRIPTDATA_ARRIVED: "scriptdata_arrived",
              TIMED_ID3_METADATA_ARRIVED: "timed_id3_metadata_arrived",
              SMPTE2038_METADATA_ARRIVED: "smpte2038_metadata_arrived",
              SCTE35_METADATA_ARRIVED: "scte35_metadata_arrived",
              PES_PRIVATE_DATA_DESCRIPTOR: "pes_private_data_descriptor",
              PES_PRIVATE_DATA_ARRIVED: "pes_private_data_arrived",
              STATISTICS_INFO: "statistics_info",
              RECOMMEND_SEEKPOINT: "recommend_seekpoint"
            }
          },
          638: (e, t, i) => {
            var s = i(278),
              n = i(943),
              r = i(473);
            let a = null;
            const o = function(e, t) {
              self.postMessage({
                msg: "logcat_callback",
                data: {
                  type: e,
                  logcat: t
                }
              })
            };

            function d(e, t) {
              const i = {
                msg: r.Z.INIT_SEGMENT,
                data: {
                  type: e,
                  data: t
                }
              };
              self.postMessage(i, [t.data])
            }

            function l(e, t) {
              const i = {
                msg: r.Z.MEDIA_SEGMENT,
                data: {
                  type: e,
                  data: t
                }
              };
              self.postMessage(i, [t.data])
            }

            function h() {
              const e = {
                msg: r.Z.LOADING_COMPLETE
              };
              self.postMessage(e)
            }

            function c() {
              const e = {
                msg: r.Z.RECOVERED_EARLY_EOF
              };
              self.postMessage(e)
            }

            function u(e) {
              const t = {
                msg: r.Z.MEDIA_INFO,
                data: e
              };
              self.postMessage(t)
            }

            function A(e) {
              const t = {
                msg: r.Z.METADATA_ARRIVED,
                data: e
              };
              self.postMessage(t)
            }

            function _(e) {
              const t = {
                msg: r.Z.SCRIPTDATA_ARRIVED,
                data: e
              };
              self.postMessage(t)
            }

            function m(e) {
              const t = {
                msg: r.Z.TIMED_ID3_METADATA_ARRIVED,
                data: e
              };
              self.postMessage(t)
            }

            function p(e) {
              const t = {
                msg: r.Z.SMPTE2038_METADATA_ARRIVED,
                data: e
              };
              self.postMessage(t)
            }

            function f(e) {
              const t = {
                msg: r.Z.SCTE35_METADATA_ARRIVED,
                data: e
              };
              self.postMessage(t)
            }

            function g(e) {
              const t = {
                msg: r.Z.PES_PRIVATE_DATA_DESCRIPTOR,
                data: e
              };
              self.postMessage(t)
            }

            function v(e) {
              const t = {
                msg: r.Z.PES_PRIVATE_DATA_ARRIVED,
                data: e
              };
              self.postMessage(t)
            }

            function y(e) {
              const t = {
                msg: r.Z.STATISTICS_INFO,
                data: e
              };
              self.postMessage(t)
            }

            function E(e, t) {
              self.postMessage({
                msg: r.Z.IO_ERROR,
                data: {
                  type: e,
                  info: t
                }
              })
            }

            function S(e, t) {
              self.postMessage({
                msg: r.Z.DEMUX_ERROR,
                data: {
                  type: e,
                  info: t
                }
              })
            }

            function b(e) {
              self.postMessage({
                msg: r.Z.RECOMMEND_SEEKPOINT,
                data: e
              })
            }
            self.addEventListener("message", (function(e) {
              switch (e.data.cmd) {
                case "init":
                  a = new n.Z(e.data.param[0], e.data.param[1]), a.on(r.Z.IO_ERROR, E), a.on(r.Z.DEMUX_ERROR, S), a.on(r.Z.INIT_SEGMENT, d), a.on(r.Z.MEDIA_SEGMENT, l), a.on(r.Z.LOADING_COMPLETE, h), a.on(r.Z.RECOVERED_EARLY_EOF, c), a.on(r.Z.MEDIA_INFO, u), a.on(r.Z.METADATA_ARRIVED, A), a.on(r.Z.SCRIPTDATA_ARRIVED, _), a.on(r.Z.TIMED_ID3_METADATA_ARRIVED, m), a.on(r.Z.SMPTE2038_METADATA_ARRIVED, p), a.on(r.Z.SCTE35_METADATA_ARRIVED, f), a.on(r.Z.PES_PRIVATE_DATA_DESCRIPTOR, g), a.on(r.Z.PES_PRIVATE_DATA_ARRIVED, v), a.on(r.Z.STATISTICS_INFO, y), a.on(r.Z.RECOMMEND_SEEKPOINT, b);
                  break;
                case "destroy":
                  a && (a.destroy(), a = null), self.postMessage({
                    msg: "destroyed"
                  });
                  break;
                case "start":
                  null == a || a.start();
                  break;
                case "stop":
                  null == a || a.stop();
                  break;
                case "seek":
                  null == a || a.seek(e.data.param);
                  break;
                case "pause":
                  null == a || a.pause();
                  break;
                case "resume":
                  null == a || a.resume();
                  break;
                case "logging_config": {
                  const t = e.data.param;
                  s.Z.applyConfig(t), !0 === t.enableCallback ? s.Z.addLogListener(o) : s.Z.removeLogListener(o);
                  break
                }
              }
            }))
          },
          898: (e, t, i) => {
            i.d(t, {
              Z: () => s
            });
            const s = {
              OK: "OK",
              FORMAT_ERROR: "FormatError",
              FORMAT_UNSUPPORTED: "FormatUnsupported",
              CODEC_UNSUPPORTED: "CodecUnsupported"
            }
          },
          578: (e, t, i) => {
            i.d(t, {
              default: () => F
            });
            var s = i(575);
            const n = {
              enableWorker: !1,
              enableStashBuffer: !0,
              stashInitialSize: void 0,
              isLive: !1,
              liveBufferLatencyChasing: !1,
              liveBufferLatencyMaxLatency: 1.5,
              liveBufferLatencyMinRemain: .5,
              lazyLoad: !0,
              lazyLoadMaxDuration: 180,
              lazyLoadRecoverDuration: 30,
              deferLoadAfterSourceOpen: !0,
              autoCleanupMaxBackwardDuration: 180,
              autoCleanupMinBackwardDuration: 120,
              statisticsInfoReportInterval: 600,
              fixAudioTimestampGap: !0,
              accurateSeek: !1,
              seekType: "range",
              seekParamStart: "bstart",
              seekParamEnd: "bend",
              rangeLoadZeroStart: !1,
              customSeekHandler: void 0,
              reuseRedirectedURL: !1,
              headers: void 0,
              customLoader: void 0,
              url: void 0,
              redirectedURL: void 0,
              cors: !1
            };

            function r() {
              return Object.assign({}, n)
            }
            class a {
              static supportMSEH264Playback() {
                var e;
                return null === (e = window.MediaSource) || void 0 === e ? void 0 : e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')
              }
              static supportMSEH265Playback() {
                var e;
                return null === (e = window.MediaSource) || void 0 === e ? void 0 : e.isTypeSupported('video/mp4; codecs="hvc1.1.6.L93.B0"')
              }
              static supportNetworkStreamIO() {
                const e = new s.Z({}, r()),
                  t = e.loaderType;
                return e.destroy(), "fetch-stream-loader" === t || "xhr-moz-chunked-loader" === t
              }
              static getNetworkLoaderTypeName() {
                const e = new s.Z({}, r()),
                  t = e.loaderType;
                return e.destroy(), t
              }
              static supportNativeMediaPlayback(e) {
                void 0 === a.videoElement && (a.videoElement = window.document.createElement("video"));
                const t = a.videoElement.canPlayType(e);
                return "probably" === t || "maybe" === t
              }
              static getFeatureList() {
                const e = {
                  msePlayback: !1,
                  mseLivePlayback: !1,
                  mseH265Playback: !1,
                  networkStreamIO: !1,
                  networkLoaderName: "",
                  nativeMP4H264Playback: !1,
                  nativeMP4H265Playback: !1,
                  nativeWebmVP8Playback: !1,
                  nativeWebmVP9Playback: !1
                };
                return e.msePlayback = a.supportMSEH264Playback(), e.networkStreamIO = a.supportNetworkStreamIO(), e.networkLoaderName = a.getNetworkLoaderTypeName() || "", e.mseLivePlayback = e.msePlayback && e.networkStreamIO, e.mseH265Playback = a.supportMSEH265Playback(), e.nativeMP4H264Playback = a.supportNativeMediaPlayback('video/mp4; codecs="avc1.42001E, mp4a.40.2"'), e.nativeMP4H265Playback = a.supportNativeMediaPlayback('video/mp4; codecs="hvc1.1.6.L93.B0"'), e.nativeWebmVP8Playback = a.supportNativeMediaPlayback('video/webm; codecs="vp8.0, vorbis"'), e.nativeWebmVP9Playback = a.supportNativeMediaPlayback('video/webm; codecs="vp9"'), e
              }
            }
            const o = a;
            var d = i(108),
              l = i(99),
              h = i(645),
              c = i(479);
            const u = {
                ERROR: "error",
                LOADING_COMPLETE: "loading_complete",
                RECOVERED_EARLY_EOF: "recovered_early_eof",
                MEDIA_INFO: "media_info",
                METADATA_ARRIVED: "metadata_arrived",
                SCRIPTDATA_ARRIVED: "scriptdata_arrived",
                TIMED_ID3_METADATA_ARRIVED: "timed_id3_metadata_arrived",
                SMPTE2038_METADATA_ARRIVED: "smpte2038_metadata_arrived",
                SCTE35_METADATA_ARRIVED: "scte35_metadata_arrived",
                PES_PRIVATE_DATA_DESCRIPTOR: "pes_private_data_descriptor",
                PES_PRIVATE_DATA_ARRIVED: "pes_private_data_arrived",
                STATISTICS_INFO: "statistics_info",
                DESTROYING: "destroying"
              },
              A = function() {
                const e = ENTRY_MODULE,
                  t = {};

                function i(s) {
                  if (t[s]) return t[s].exports;
                  const n = t[s] = {
                    exports: {}
                  };
                  return e[s](n, n.exports, i), n.exports
                }
                i.m = e, i.n = e => {
                  const t = e && e.__esModule ? () => e.default : () => e;
                  return i.d(t, {
                    a: t
                  }), t
                }, i.d = (e, t) => {
                  for (const s in t) i.o(t, s) && !i.o(e, s) && Object.defineProperty(e, s, {
                    enumerable: !0,
                    get: t[s]
                  })
                }, i.g = function() {
                  if ("[object Object]" === Object.prototype.toString.call(globalThis)) return globalThis;
                  try {
                    return this || new Function("return this")()
                  } catch (e) {
                    if ("[object Object]" === Object.prototype.toString.call(window)) return window
                  }
                }(), i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), i.r = e => {
                  "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                  }), Object.defineProperty(e, "__esModule", {
                    value: !0
                  })
                };
                const s = i(ENTRY_MODULE);
                return s.default || s
              };
            A.toString();
            const _ = "[\\.|\\-|\\+|\\w|/|@]+",
              m = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?(" + _ + ").*?\\)";

            function p(e) {
              return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
            }

            function f(e, t, s) {
              const n = {};
              n[s] = [];
              const r = t.toString(),
                a = r.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/) || r.match(/^\(\w+,\s*\w+,\s*(\w+)\)\s?\=\s?\>/);
              if (!a) return n;
              const o = a[1];
              let d, l = new RegExp("(\\\\n|\\W)" + p(o) + m, "g");
              for (; d = l.exec(r);) "dll-reference" !== d[3] && n[s].push(d[3]);
              for (l = new RegExp("\\(" + p(o) + '\\("(dll-reference\\s(' + _ + '))"\\)\\)' + m, "g"); d = l.exec(r);) e[d[2]] || (n[s].push(d[1]), e[d[2]] = i(d[1]).m), n[d[2]] = n[d[2]] || [], n[d[2]].push(d[4]);
              const h = Object.keys(n);
              for (let e = 0; e < h.length; e++)
                for (let t = 0; t < n[h[e]].length; t++) c = n[h[e]][t], isNaN(1 * c) || (n[h[e]][t] = 1 * n[h[e]][t]);
              var c;
              return n
            }

            function g(e) {
              return Object.keys(e).reduce(((t, i) => t || e[i].length > 0), !1)
            }

            function v(e, t, i, s) {
              const n = e[s].map((e => `"${e}": ${t[s][e].toString()}`)).join(","),
                r = A.toString().split("ENTRY_MODULE");
              return `${r[0]}{${n}}${r[1]}"${i}"${r[2]}`
            }
            var y = i(278),
              E = i(943),
              S = i(473),
              b = i(994);
            const w = "error",
              T = "source_open",
              R = "update_end",
              C = "buffer_full";
            var B = i(68),
              k = i(411);
            var I = i(898);
            const O = {
                NETWORK_ERROR: "NetworkError",
                MEDIA_ERROR: "MediaError",
                OTHER_ERROR: "OtherError"
              },
              D = {
                NETWORK_EXCEPTION: d.nm.EXCEPTION,
                NETWORK_STATUS_CODE_INVALID: d.nm.HTTP_STATUS_CODE_INVALID,
                NETWORK_TIMEOUT: d.nm.CONNECTING_TIMEOUT,
                NETWORK_UNRECOVERABLE_EARLY_EOF: d.nm.UNRECOVERABLE_EARLY_EOF,
                MEDIA_MSE_ERROR: "MediaMSEError",
                MEDIA_FORMAT_ERROR: I.Z.FORMAT_ERROR,
                MEDIA_FORMAT_UNSUPPORTED: I.Z.FORMAT_UNSUPPORTED,
                MEDIA_CODEC_UNSUPPORTED: I.Z.CODEC_UNSUPPORTED
              };
            const L = class {
              constructor(e, t) {
                var i, s, n;
                this.TAG = "MSEPlayer", this._type = "MSEPlayer", this._emitter = new l.EventEmitter, this._config = r(), "object" == typeof t && Object.assign(this._config, t);
                const a = e.type.toLowerCase();
                if ("mse" !== a && "mpegts" !== a && "m2ts" !== a && "flv" !== a) throw new k.OC("MSEPlayer requires an mpegts/m2ts/flv MediaDataSource input!");
                e.isLive && (this._config.isLive = !0), this.e = {
                  onvLoadedMetadata: this._onvLoadedMetadata.bind(this),
                  onvSeeking: this._onvSeeking.bind(this),
                  onvCanPlay: this._onvCanPlay.bind(this),
                  onvStalled: this._onvStalled.bind(this),
                  onvProgress: this._onvProgress.bind(this)
                }, self.performance && self.performance.now ? this._now = self.performance.now.bind(self.performance) : this._now = Date.now, this._pendingSeekTime = null, this._requestSetTime = !1, this._seekpointRecord = null, this._progressChecker = null, this._mediaDataSource = e, this._mediaElement = null, this._msectl = null, this._transmuxer = null, this._mseSourceOpened = !1, this._hasPendingLoad = !1, this._receivedCanPlay = !1, this._mediaInfo = null, this._statisticsInfo = null;
                const o = c.Z.chrome && (c.Z.version && (null === (i = c.Z.version) || void 0 === i ? void 0 : i.major) < 50 || c.Z.version && 50 === (null === (s = null === c.Z || void 0 === c.Z ? void 0 : c.Z.version) || void 0 === s ? void 0 : s.major) && ((null === (n = null === c.Z || void 0 === c.Z ? void 0 : c.Z.version) || void 0 === n ? void 0 : n.build) || -1) < 2661);
                this._alwaysSeekKeyframe = !!(o || c.Z.msedge || c.Z.msie), this._alwaysSeekKeyframe && (this._config.accurateSeek = !1)
              }
              destroy() {
                this._emitter.emit(u.DESTROYING), null != this._progressChecker && (window.clearInterval(this._progressChecker), this._progressChecker = null), this._transmuxer && this.unload(), this._mediaElement && this.detachMediaElement(), this.e = null, this._mediaDataSource = null, this._emitter.removeAllListeners(), this._emitter = null
              }
              on(e, t) {
                e === u.MEDIA_INFO ? null != this._mediaInfo && Promise.resolve().then((() => {
                  this._emitter.emit(u.MEDIA_INFO, this.mediaInfo)
                })) : e === u.STATISTICS_INFO && null != this._statisticsInfo && Promise.resolve().then((() => {
                  this._emitter.emit(u.STATISTICS_INFO, this.statisticsInfo)
                })), this._emitter.addListener(e, t)
              }
              off(e, t) {
                this._emitter.removeListener(e, t)
              }
              attachMediaElement(e) {
                var t, i, s, n, r;
                if (this._mediaElement = e, e.addEventListener("loadedmetadata", this.e.onvLoadedMetadata), e.addEventListener("seeking", this.e.onvSeeking), e.addEventListener("canplay", this.e.onvCanPlay), e.addEventListener("stalled", this.e.onvStalled), e.addEventListener("progress", this.e.onvProgress), this._msectl = new class {
                    constructor(e) {
                      this.TAG = "MSEController", this._config = e, this._emitter = new l.EventEmitter, this._config.isLive && void 0 === this._config.autoCleanupSourceBuffer && (this._config.autoCleanupSourceBuffer = !0), this.e = {
                        onSourceOpen: this._onSourceOpen.bind(this),
                        onSourceEnded: this._onSourceEnded.bind(this),
                        onSourceClose: this._onSourceClose.bind(this),
                        onSourceBufferError: this._onSourceBufferError.bind(this),
                        onSourceBufferUpdateEnd: this._onSourceBufferUpdateEnd.bind(this)
                      }, this._mediaSource = null, this._mediaSourceObjectURL = null, this._mediaElement = null, this._isBufferFull = !1, this._hasPendingEos = !1, this._requireSetMediaDuration = !1, this._pendingMediaDuration = 0, this._pendingSourceBufferInit = [], this._mimeTypes = {
                        video: null,
                        audio: null
                      }, this._sourceBuffers = {
                        video: null,
                        audio: null
                      }, this._lastInitSegments = {
                        video: null,
                        audio: null
                      }, this._pendingSegments = {
                        video: [],
                        audio: []
                      }, this._pendingRemoveRanges = {
                        video: [],
                        audio: []
                      }, this._idrList = new B.Vn
                    }
                    destroy() {
                      (this._mediaElement || this._mediaSource) && this.detachMediaElement(), this.e = null, this._emitter.removeAllListeners(), this._emitter = null
                    }
                    on(e, t) {
                      this._emitter.addListener(e, t)
                    }
                    off(e, t) {
                      this._emitter.removeListener(e, t)
                    }
                    attachMediaElement(e) {
                      if (this._mediaSource) throw new k.rT("MediaSource has been attached to an HTMLMediaElement!");
                      const t = this._mediaSource = new window.MediaSource;
                      t.addEventListener("sourceopen", this.e.onSourceOpen), t.addEventListener("sourceended", this.e.onSourceEnded), t.addEventListener("sourceclose", this.e.onSourceClose), this._mediaElement = e, this._mediaSourceObjectURL = window.URL.createObjectURL(this._mediaSource), e.src = this._mediaSourceObjectURL
                    }
                    detachMediaElement() {
                      if (this._mediaSource) {
                        const e = this._mediaSource;
                        for (const t in this._sourceBuffers) {
                          const i = this._pendingSegments[t];
                          i.splice(0, i.length), this._pendingSegments[t] = null, this._pendingRemoveRanges[t] = null, this._lastInitSegments[t] = null;
                          const s = this._sourceBuffers[t];
                          if (s) {
                            if ("closed" !== e.readyState) {
                              try {
                                e.removeSourceBuffer(s)
                              } catch (e) {
                                h.Z.e(this.TAG, e.message)
                              }
                              null == s || s.removeEventListener("error", this.e.onSourceBufferError), null == s || s.removeEventListener("updateend", this.e.onSourceBufferUpdateEnd)
                            }
                            this._mimeTypes[t] = null, this._sourceBuffers[t] = null
                          }
                        }
                        if ("open" === e.readyState) try {
                          e.endOfStream()
                        } catch (e) {
                          h.Z.e(this.TAG, e.message)
                        }
                        e.removeEventListener("sourceopen", this.e.onSourceOpen), e.removeEventListener("sourceended", this.e.onSourceEnded), e.removeEventListener("sourceclose", this.e.onSourceClose), this._pendingSourceBufferInit = [], this._isBufferFull = !1, this._idrList.clear(), this._mediaSource = null
                      }
                      this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src"), this._mediaElement = null), this._mediaSourceObjectURL && (window.URL.revokeObjectURL(this._mediaSourceObjectURL), this._mediaSourceObjectURL = null)
                    }
                    appendInitSegment(e, t) {
                      var i;
                      if (!this._mediaSource || "open" !== this._mediaSource.readyState) return this._pendingSourceBufferInit.push(e), void this._pendingSegments[e.type].push(e);
                      const s = e;
                      let n = `${s.container}`;
                      s.codec && s.codec.length > 0 && (n += `;codecs=${s.codec}`);
                      let r = !1;
                      if (h.Z.v(this.TAG, "Received Initialization Segment, mimeType: " + n), this._lastInitSegments[s.type] = s, n !== this._mimeTypes[s.type]) {
                        if (this._mimeTypes[s.type]) h.Z.v(this.TAG, `Notice: ${s.type} mimeType changed, origin: ${this._mimeTypes[s.type]||""}, target: ${n}`);
                        else {
                          r = !0;
                          try {
                            const e = this._sourceBuffers[s.type] = this._mediaSource.addSourceBuffer(n);
                            e.addEventListener("error", this.e.onSourceBufferError), e.addEventListener("updateend", this.e.onSourceBufferUpdateEnd)
                          } catch (e) {
                            return h.Z.e(this.TAG, e.message), void this._emitter.emit(w, {
                              code: e.code,
                              msg: e.message
                            })
                          }
                        }
                        this._mimeTypes[s.type] = n
                      }
                      t || this._pendingSegments[s.type].push(s), r || this._sourceBuffers[s.type] && !(null === (i = this._sourceBuffers[s.type]) || void 0 === i ? void 0 : i.updating) && this._doAppendSegments(), c.Z.safari && "audio/mpeg" === s.container && s.mediaDuration > 0 && (this._requireSetMediaDuration = !0, this._pendingMediaDuration = s.mediaDuration / 1e3, this._updateMediaSourceDuration())
                    }
                    appendMediaSegment(e) {
                      const t = e;
                      this._pendingSegments[t.type].push(t), this._config.autoCleanupSourceBuffer && this._needCleanupSourceBuffer() && this._doCleanupSourceBuffer();
                      const i = this._sourceBuffers[t.type];
                      !i || i.updating || this._hasPendingRemoveRanges() || this._doAppendSegments()
                    }
                    seek(e) {
                      var t, i;
                      for (const s in this._sourceBuffers) {
                        if (!this._sourceBuffers[s]) continue;
                        const n = this._sourceBuffers[s];
                        if ("open" === (null === (t = this._mediaSource) || void 0 === t ? void 0 : t.readyState)) try {
                          null == n || n.abort()
                        } catch (e) {
                          h.Z.e(this.TAG, e.message)
                        }
                        this._idrList.clear();
                        const r = this._pendingSegments[s];
                        if (r.splice(0, r.length), "closed" !== (null === (i = this._mediaSource) || void 0 === i ? void 0 : i.readyState)) {
                          if (n) {
                            for (let e = 0; e < n.buffered.length; e++) {
                              const t = n.buffered.start(e),
                                i = n.buffered.end(e);
                              this._pendingRemoveRanges[s].push({
                                start: t,
                                end: i
                              })
                            }(null == n ? void 0 : n.updating) || this._doRemoveRanges()
                          }
                          if (c.Z.safari) {
                            const e = this._lastInitSegments[s];
                            e && (this._pendingSegments[s].push(e), (null == n ? void 0 : n.updating) || this._doAppendSegments())
                          }
                        }
                      }
                    }
                    endOfStream() {
                      var e, t;
                      const i = this._mediaSource,
                        s = this._sourceBuffers;
                      i && "open" === i.readyState ? (null === (e = s.video) || void 0 === e ? void 0 : e.updating) || (null === (t = s.audio) || void 0 === t ? void 0 : t.updating) ? this._hasPendingEos = !0 : (this._hasPendingEos = !1, i.endOfStream()) : i && "closed" === i.readyState && this._hasPendingSegments() && (this._hasPendingEos = !0)
                    }
                    getNearestKeyframe(e) {
                      return this._idrList.getLastSyncPointBeforeDts(e)
                    }
                    _needCleanupSourceBuffer() {
                      var e, t;
                      if (!this._config.autoCleanupSourceBuffer) return !1;
                      const i = null === (e = this._mediaElement) || void 0 === e ? void 0 : e.currentTime;
                      for (const e in this._sourceBuffers) {
                        const s = this._sourceBuffers[e];
                        if (s) {
                          const e = s.buffered;
                          if (e.length >= 1 && i - e.start(0) >= ((null === (t = this._config) || void 0 === t ? void 0 : t.autoCleanupMaxBackwardDuration) || 0)) return !0
                        }
                      }
                      return !1
                    }
                    _doCleanupSourceBuffer() {
                      var e, t, i;
                      const s = null === (e = this._mediaElement) || void 0 === e ? void 0 : e.currentTime;
                      for (const e in this._sourceBuffers) {
                        const n = this._sourceBuffers[e];
                        if (n) {
                          const r = n.buffered;
                          let a = !1;
                          for (let n = 0; n < r.length; n++) {
                            const o = r.start(n),
                              d = r.end(n);
                            if (o <= s && s < d + 3) {
                              if (s - o >= ((null === (t = this._config) || void 0 === t ? void 0 : t.autoCleanupMaxBackwardDuration) || 0)) {
                                a = !0;
                                const t = s - ((null === (i = this._config) || void 0 === i ? void 0 : i.autoCleanupMinBackwardDuration) || 0);
                                this._pendingRemoveRanges[e].push({
                                  start: o,
                                  end: t
                                })
                              }
                            } else d < s && (a = !0, this._pendingRemoveRanges[e].push({
                              start: o,
                              end: d
                            }))
                          }
                          a && !n.updating && this._doRemoveRanges()
                        }
                      }
                    }
                    _updateMediaSourceDuration() {
                      var e, t, i, s;
                      const n = this._sourceBuffers;
                      if (0 === (null === (e = this._mediaElement) || void 0 === e ? void 0 : e.readyState) || "open" !== (null === (t = this._mediaSource) || void 0 === t ? void 0 : t.readyState)) return;
                      if ((null === (i = n.video) || void 0 === i ? void 0 : i.updating) || (null === (s = n.audio) || void 0 === s ? void 0 : s.updating)) return;
                      const r = this._mediaSource.duration,
                        a = this._pendingMediaDuration;
                      a > 0 && (isNaN(r) || a > r) && (h.Z.v(this.TAG, `Update MediaSource duration from ${r} to ${a}`), this._mediaSource.duration = a), this._requireSetMediaDuration = !1, this._pendingMediaDuration = 0
                    }
                    _doRemoveRanges() {
                      var e;
                      for (const t in this._pendingRemoveRanges) {
                        if (!this._sourceBuffers[t] || (null === (e = this._sourceBuffers[t]) || void 0 === e ? void 0 : e.updating)) continue;
                        const i = this._sourceBuffers[t],
                          s = this._pendingRemoveRanges[t];
                        for (; s.length && !(null == i ? void 0 : i.updating);) {
                          const e = s.shift();
                          null == i || i.remove(e.start, e.end)
                        }
                      }
                    }
                    _doAppendSegments() {
                      var e, t, i;
                      const s = this._pendingSegments;
                      for (const n in s)
                        if (this._sourceBuffers[n] && !(null === (e = this._sourceBuffers[n]) || void 0 === e ? void 0 : e.updating) && s[n].length > 0) {
                          const e = s[n].shift();
                          if (null == e ? void 0 : e.timestampOffset) {
                            const i = (null === (t = this._sourceBuffers[n]) || void 0 === t ? void 0 : t.timestampOffset) || 0,
                              s = e.timestampOffset / 1e3;
                            Math.abs(i - s) > .1 && (h.Z.v(this.TAG, `Update MPEG audio timestampOffset from ${i} to ${s}`), this._sourceBuffers[n] && (this._sourceBuffers[n].timestampOffset = s)), delete e.timestampOffset
                          }
                          if (!e.data || 0 === e.data.byteLength) continue;
                          try {
                            null === (i = this._sourceBuffers[n]) || void 0 === i || i.appendBuffer(e.data), this._isBufferFull = !1, "video" === n && e.hasOwnProperty("info") && this._idrList.appendArray(e.info.syncPoints)
                          } catch (t) {
                            this._pendingSegments[n].unshift(e), 22 === t.code ? (this._isBufferFull || this._emitter.emit(C), this._isBufferFull = !0) : (h.Z.e(this.TAG, t.message), this._emitter.emit(w, {
                              code: t.code,
                              msg: t.message
                            }))
                          }
                        }
                    }
                    _onSourceOpen() {
                      var e;
                      if (h.Z.v(this.TAG, "MediaSource onSourceOpen"), null === (e = this._mediaSource) || void 0 === e || e.removeEventListener("sourceopen", this.e.onSourceOpen), this._pendingSourceBufferInit.length > 0) {
                        const e = this._pendingSourceBufferInit;
                        for (; e.length;) {
                          const t = e.shift();
                          this.appendInitSegment(t, !0)
                        }
                      }
                      this._hasPendingSegments() && this._doAppendSegments(), this._emitter.emit(T)
                    }
                    _onSourceEnded() {
                      h.Z.v(this.TAG, "MediaSource onSourceEnded")
                    }
                    _onSourceClose() {
                      h.Z.v(this.TAG, "MediaSource onSourceClose"), this._mediaSource && null != this.e && (this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen), this._mediaSource.removeEventListener("sourceended", this.e.onSourceEnded), this._mediaSource.removeEventListener("sourceclose", this.e.onSourceClose))
                    }
                    _hasPendingSegments() {
                      const e = this._pendingSegments;
                      return e.video.length > 0 || e.audio.length > 0
                    }
                    _hasPendingRemoveRanges() {
                      const e = this._pendingRemoveRanges;
                      return e.video.length > 0 || e.audio.length > 0
                    }
                    _onSourceBufferUpdateEnd() {
                      this._requireSetMediaDuration ? this._updateMediaSourceDuration() : this._hasPendingRemoveRanges() ? this._doRemoveRanges() : this._hasPendingSegments() ? this._doAppendSegments() : this._hasPendingEos && this.endOfStream(), this._emitter.emit(R)
                    }
                    _onSourceBufferError(e) {
                      h.Z.e(this.TAG, `SourceBuffer Error: ${e}`)
                    }
                  }(this._config), null === (t = this._msectl) || void 0 === t || t.on(R, this._onmseUpdateEnd.bind(this)), null === (i = this._msectl) || void 0 === i || i.on(C, this._onmseBufferFull.bind(this)), null === (s = this._msectl) || void 0 === s || s.on(T, (() => {
                    this._mseSourceOpened = !0, this._hasPendingLoad && (this._hasPendingLoad = !1, this.load())
                  })), null === (n = this._msectl) || void 0 === n || n.on(w, (e => {
                    this._emitter.emit(u.ERROR, O.MEDIA_ERROR, D.MEDIA_MSE_ERROR, e)
                  })), null === (r = this._msectl) || void 0 === r || r.attachMediaElement(e), null != this._pendingSeekTime) try {
                  e.currentTime = this._pendingSeekTime, this._pendingSeekTime = null
                } catch (e) {}
              }
              detachMediaElement() {
                var e;
                this._mediaElement && (null === (e = this._msectl) || void 0 === e || e.detachMediaElement(), this._mediaElement.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._mediaElement.removeEventListener("seeking", this.e.onvSeeking), this._mediaElement.removeEventListener("canplay", this.e.onvCanPlay), this._mediaElement.removeEventListener("stalled", this.e.onvStalled), this._mediaElement.removeEventListener("progress", this.e.onvProgress), this._mediaElement = null), this._msectl && (this._msectl.destroy(), this._msectl = null)
              }
              load() {
                if (!this._mediaElement) throw new k.rT("HTMLMediaElement must be attached before load()!");
                if (this._transmuxer) throw new k.rT("MSEPlayer.load() has been called, please call unload() first!");
                this._hasPendingLoad || (!this._config.deferLoadAfterSourceOpen || this._mseSourceOpened ? (this._mediaElement.readyState > 0 && (this._requestSetTime = !0, this._mediaElement.currentTime = 0), this._transmuxer = new class {
                  constructor(e, t) {
                    if (this.TAG = "Transmuxer", this._workerDestroying = !1, this._controller = null, this._emitter = new l.EventEmitter, t.enableWorker && "undefined" != typeof Worker) try {
                      this._worker = this._worker = function(e, t) {
                        t = t || {};
                        const s = {
                            main: i.m
                          },
                          n = t.all ? {
                            main: Object.keys(s.main)
                          } : function(e, t) {
                            const i = {
                                main: [t]
                              },
                              s = {
                                main: []
                              },
                              n = {
                                main: {}
                              };
                            for (; g(i);) {
                              const t = Object.keys(i);
                              for (let r = 0; r < t.length; r++) {
                                const a = t[r],
                                  o = i[a].pop();
                                if (n[a] = n[a] || {}, n[a][o] || !e[a][o]) continue;
                                n[a][o] = !0, s[a] = s[a] || [], s[a].push(o);
                                const d = f(e, e[a][o], a),
                                  l = Object.keys(d);
                                for (let e = 0; e < l.length; e++) i[l[e]] = i[l[e]] || [], i[l[e]] = i[l[e]].concat(d[l[e]])
                              }
                            }
                            return s
                          }(s, e);
                        let r = "";
                        Object.keys(n).filter((e => "main" !== e)).forEach((e => {
                          let t = 0;
                          for (; n[e][t];) t++;
                          n[e].push(t), s[e][t] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", r += `var ${e} = (${v(n,s,t,modules)})();\n`
                        })), r += `(${v(n,s,e,"main")})();`;
                        const a = new window.Blob([r], {
                          type: "text/javascript"
                        });
                        if (t.bare) return a;
                        const o = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(a),
                          d = new window.Worker(o);
                        return d.objectURL = o, d
                      }(638), this._workerDestroying = !1, this._worker.addEventListener("message", this._onWorkerMessage.bind(this)), this._worker.postMessage({
                        cmd: "init",
                        param: [e, t]
                      }), this.e = {
                        onLoggingConfigChanged: this._onLoggingConfigChanged.bind(this)
                      }, y.Z.registerListener(this.e.onLoggingConfigChanged), this._worker.postMessage({
                        cmd: "logging_config",
                        param: y.Z.getConfig()
                      })
                    } catch (i) {
                      h.Z.e(this.TAG, "Error while initialize transmuxing worker, fallback to inline transmuxing"), this._worker = null, this._controller = new E.Z(e, t)
                    } else this._controller = new E.Z(e, t);
                    if (this._controller) {
                      const e = this._controller;
                      null == e || e.on(S.Z.IO_ERROR, this._onIOError.bind(this)), null == e || e.on(S.Z.DEMUX_ERROR, this._onDemuxError.bind(this)), null == e || e.on(S.Z.INIT_SEGMENT, this._onInitSegment.bind(this)), null == e || e.on(S.Z.MEDIA_SEGMENT, this._onMediaSegment.bind(this)), null == e || e.on(S.Z.LOADING_COMPLETE, this._onLoadingComplete.bind(this)), null == e || e.on(S.Z.RECOVERED_EARLY_EOF, this._onRecoveredEarlyEof.bind(this)), null == e || e.on(S.Z.MEDIA_INFO, this._onMediaInfo.bind(this)), null == e || e.on(S.Z.METADATA_ARRIVED, this._onMetaDataArrived.bind(this)), null == e || e.on(S.Z.SCRIPTDATA_ARRIVED, this._onScriptDataArrived.bind(this)), null == e || e.on(S.Z.TIMED_ID3_METADATA_ARRIVED, this._onTimedID3MetadataArrived.bind(this)), null == e || e.on(S.Z.SMPTE2038_METADATA_ARRIVED, this._onSMPTE2038MetadataArrived.bind(this)), null == e || e.on(S.Z.SCTE35_METADATA_ARRIVED, this._onSCTE35MetadataArrived.bind(this)), null == e || e.on(S.Z.PES_PRIVATE_DATA_DESCRIPTOR, this._onPESPrivateDataDescriptor.bind(this)), null == e || e.on(S.Z.PES_PRIVATE_DATA_ARRIVED, this._onPESPrivateDataArrived.bind(this)), null == e || e.on(S.Z.STATISTICS_INFO, this._onStatisticsInfo.bind(this)), null == e || e.on(S.Z.RECOMMEND_SEEKPOINT, this._onRecommendSeekpoint.bind(this))
                    }
                  }
                  destroy() {
                    var e;
                    this._worker ? this._workerDestroying || (this._workerDestroying = !0, this._worker.postMessage({
                      cmd: "destroy"
                    }), y.Z.removeListener(this.e.onLoggingConfigChanged), this.e = null) : (null === (e = this._controller) || void 0 === e || e.destroy(), this._controller = null), this._emitter.removeAllListeners(), this._emitter = null
                  }
                  on(e, t) {
                    this._emitter.addListener(e, t)
                  }
                  off(e, t) {
                    this._emitter.removeListener(e, t)
                  }
                  hasWorker() {
                    return null != this._worker
                  }
                  open() {
                    var e;
                    this._worker ? this._worker.postMessage({
                      cmd: "start"
                    }) : null === (e = this._controller) || void 0 === e || e.start()
                  }
                  close() {
                    var e;
                    this._worker ? this._worker.postMessage({
                      cmd: "stop"
                    }) : null === (e = this._controller) || void 0 === e || e.stop()
                  }
                  seek(e) {
                    var t;
                    this._worker ? this._worker.postMessage({
                      cmd: "seek",
                      param: e
                    }) : null === (t = this._controller) || void 0 === t || t.seek(e)
                  }
                  pause() {
                    var e;
                    this._worker ? this._worker.postMessage({
                      cmd: "pause"
                    }) : null === (e = this._controller) || void 0 === e || e.pause()
                  }
                  resume() {
                    var e;
                    this._worker ? this._worker.postMessage({
                      cmd: "resume"
                    }) : null === (e = this._controller) || void 0 === e || e.resume()
                  }
                  _onInitSegment(e, t) {
                    Promise.resolve().then((() => {
                      this._emitter.emit(S.Z.INIT_SEGMENT, e, t)
                    }))
                  }
                  _onMediaSegment(e, t) {
                    Promise.resolve().then((() => {
                      this._emitter.emit(S.Z.MEDIA_SEGMENT, e, t)
                    }))
                  }
                  _onLoadingComplete() {
                    Promise.resolve().then((() => {
                      this._emitter.emit(S.Z.LOADING_COMPLETE)
                    }))
                  }
                  _onRecoveredEarlyEof() {
                    Promise.resolve().then((() => {
                      this._emitter.emit(S.Z.RECOVERED_EARLY_EOF)
                    }))
                  }
                  _onMediaInfo(e) {
                    Promise.resolve().then((() => {
                      this._emitter.emit(S.Z.MEDIA_INFO, e)
                    }))
                  }
                  _onMetaDataArrived(e) {
                    Promise.resolve().then((() => {
                      this._emitter.emit(S.Z.METADATA_ARRIVED, e)
                    }))
                  }
                  _onScriptDataArrived(e) {
                    Promise.resolve().then((() => {
                      this._emitter.emit(S.Z.SCRIPTDATA_ARRIVED, e)
                    }))
                  }
                  _onTimedID3MetadataArrived(e) {
                    Promise.resolve().then((() => {
                      this._emitter.emit(S.Z.TIMED_ID3_METADATA_ARRIVED, e)
                    }))
                  }
                  _onSMPTE2038MetadataArrived(e) {
                    Promise.resolve().then((() => {
                      this._emitter.emit(S.Z.SMPTE2038_METADATA_ARRIVED, e)
                    }))
                  }
                  _onSCTE35MetadataArrived(e) {
                    Promise.resolve().then((() => {
                      this._emitter.emit(S.Z.SCTE35_METADATA_ARRIVED, e)
                    }))
                  }
                  _onPESPrivateDataDescriptor(e) {
                    Promise.resolve().then((() => {
                      this._emitter.emit(S.Z.PES_PRIVATE_DATA_DESCRIPTOR, e)
                    }))
                  }
                  _onPESPrivateDataArrived(e) {
                    Promise.resolve().then((() => {
                      this._emitter.emit(S.Z.PES_PRIVATE_DATA_ARRIVED, e)
                    }))
                  }
                  _onStatisticsInfo(e) {
                    Promise.resolve().then((() => {
                      this._emitter.emit(S.Z.STATISTICS_INFO, e)
                    }))
                  }
                  _onIOError(e, t) {
                    Promise.resolve().then((() => {
                      this._emitter.emit(S.Z.IO_ERROR, e, t)
                    }))
                  }
                  _onDemuxError(e, t) {
                    Promise.resolve().then((() => {
                      this._emitter.emit(S.Z.DEMUX_ERROR, e, t)
                    }))
                  }
                  _onRecommendSeekpoint(e) {
                    Promise.resolve().then((() => {
                      this._emitter.emit(S.Z.RECOMMEND_SEEKPOINT, e)
                    }))
                  }
                  _onLoggingConfigChanged(e) {
                    this._worker && this._worker.postMessage({
                      cmd: "logging_config",
                      param: e
                    })
                  }
                  _onWorkerMessage(e) {
                    const t = e.data,
                      i = null == t ? void 0 : t.data;
                    if ("destroyed" === t.msg || this._workerDestroying) return this._workerDestroying = !1, this._worker.terminate(), void(this._worker = null);
                    switch (t.msg) {
                      case S.Z.INIT_SEGMENT:
                      case S.Z.MEDIA_SEGMENT:
                        this._emitter.emit(t.msg, i.type, i.data);
                        break;
                      case S.Z.LOADING_COMPLETE:
                      case S.Z.RECOVERED_EARLY_EOF:
                        this._emitter.emit(t.msg);
                        break;
                      case S.Z.MEDIA_INFO:
                        Object.setPrototypeOf(i, b.Z.prototype), this._emitter.emit(t.msg, i);
                        break;
                      case S.Z.METADATA_ARRIVED:
                      case S.Z.SCRIPTDATA_ARRIVED:
                      case S.Z.TIMED_ID3_METADATA_ARRIVED:
                      case S.Z.SMPTE2038_METADATA_ARRIVED:
                      case S.Z.SCTE35_METADATA_ARRIVED:
                      case S.Z.PES_PRIVATE_DATA_DESCRIPTOR:
                      case S.Z.PES_PRIVATE_DATA_ARRIVED:
                      case S.Z.STATISTICS_INFO:
                        this._emitter.emit(t.msg, i);
                        break;
                      case S.Z.IO_ERROR:
                      case S.Z.DEMUX_ERROR:
                        this._emitter.emit(t.msg, i.type, i.info);
                        break;
                      case S.Z.RECOMMEND_SEEKPOINT:
                        this._emitter.emit(t.msg, i);
                        break;
                      case "logcat_callback":
                        h.Z.emitter.emit("log", i.type, i.logcat)
                    }
                  }
                }(this._mediaDataSource, this._config), this._transmuxer.on(S.Z.INIT_SEGMENT, ((e, t) => {
                  var i;
                  null === (i = this._msectl) || void 0 === i || i.appendInitSegment(t)
                })), this._transmuxer.on(S.Z.MEDIA_SEGMENT, ((e, t) => {
                  var i, s, n;
                  if (null === (i = this._msectl) || void 0 === i || i.appendMediaSegment(t), this._config.lazyLoad && !this._config.isLive) {
                    const e = null === (s = this._mediaElement) || void 0 === s ? void 0 : s.currentTime;
                    t.info.endDts >= 1e3 * (e + ((null === (n = this._config) || void 0 === n ? void 0 : n.lazyLoadMaxDuration) || 0)) && null == this._progressChecker && (h.Z.v(this.TAG, "Maximum buffering duration exceeded, suspend transmuxing task"), this._suspendTransmuxer())
                  }
                })), this._transmuxer.on(S.Z.LOADING_COMPLETE, (() => {
                  var e;
                  null === (e = this._msectl) || void 0 === e || e.endOfStream(), this._emitter.emit(u.LOADING_COMPLETE)
                })), this._transmuxer.on(S.Z.RECOVERED_EARLY_EOF, (() => {
                  this._emitter.emit(u.RECOVERED_EARLY_EOF)
                })), this._transmuxer.on(S.Z.IO_ERROR, ((e, t) => {
                  this._emitter.emit(u.ERROR, O.NETWORK_ERROR, e, t)
                })), this._transmuxer.on(S.Z.DEMUX_ERROR, ((e, t) => {
                  this._emitter.emit(u.ERROR, O.MEDIA_ERROR, e, {
                    code: -1,
                    msg: t
                  })
                })), this._transmuxer.on(S.Z.MEDIA_INFO, (e => {
                  this._mediaInfo = e, this._emitter.emit(u.MEDIA_INFO, Object.assign({}, e))
                })), this._transmuxer.on(S.Z.METADATA_ARRIVED, (e => {
                  this._emitter.emit(u.METADATA_ARRIVED, e)
                })), this._transmuxer.on(S.Z.SCRIPTDATA_ARRIVED, (e => {
                  this._emitter.emit(u.SCRIPTDATA_ARRIVED, e)
                })), this._transmuxer.on(S.Z.TIMED_ID3_METADATA_ARRIVED, (e => {
                  this._emitter.emit(u.TIMED_ID3_METADATA_ARRIVED, e)
                })), this._transmuxer.on(S.Z.SMPTE2038_METADATA_ARRIVED, (e => {
                  this._emitter.emit(u.SMPTE2038_METADATA_ARRIVED, e)
                })), this._transmuxer.on(S.Z.SCTE35_METADATA_ARRIVED, (e => {
                  this._emitter.emit(u.SCTE35_METADATA_ARRIVED, e)
                })), this._transmuxer.on(S.Z.PES_PRIVATE_DATA_DESCRIPTOR, (e => {
                  this._emitter.emit(u.PES_PRIVATE_DATA_DESCRIPTOR, e)
                })), this._transmuxer.on(S.Z.PES_PRIVATE_DATA_ARRIVED, (e => {
                  this._emitter.emit(u.PES_PRIVATE_DATA_ARRIVED, e)
                })), this._transmuxer.on(S.Z.STATISTICS_INFO, (e => {
                  this._statisticsInfo = this._fillStatisticsInfo(e), this._emitter.emit(u.STATISTICS_INFO, Object.assign({}, this._statisticsInfo))
                })), this._transmuxer.on(S.Z.RECOMMEND_SEEKPOINT, (e => {
                  this._mediaElement && !this._config.accurateSeek && (this._requestSetTime = !0, this._mediaElement.currentTime = e / 1e3)
                })), this._transmuxer.open()) : this._hasPendingLoad = !0)
              }
              unload() {
                this._mediaElement && this._mediaElement.pause(), this._msectl && this._msectl.seek(0), this._transmuxer && (this._transmuxer.close(), this._transmuxer.destroy(), this._transmuxer = null)
              }
              play() {
                var e;
                return function(e, t, i, s) {
                  return new(i || (i = Promise))((function(n, r) {
                    function a(e) {
                      try {
                        d(s.next(e))
                      } catch (e) {
                        r(e)
                      }
                    }

                    function o(e) {
                      try {
                        d(s.throw(e))
                      } catch (e) {
                        r(e)
                      }
                    }

                    function d(e) {
                      var t;
                      e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
                        e(t)
                      }))).then(a, o)
                    }
                    d((s = s.apply(e, t || [])).next())
                  }))
                }(this, void 0, void 0, (function*() {
                  return yield null === (e = this._mediaElement) || void 0 === e ? void 0 : e.play()
                }))
              }
              pause() {
                var e;
                null === (e = this._mediaElement) || void 0 === e || e.pause()
              }
              get type() {
                return this._type
              }
              get buffered() {
                var e;
                return null === (e = this._mediaElement) || void 0 === e ? void 0 : e.buffered
              }
              get duration() {
                var e;
                return null === (e = this._mediaElement) || void 0 === e ? void 0 : e.duration
              }
              get volume() {
                var e;
                return null === (e = this._mediaElement) || void 0 === e ? void 0 : e.volume
              }
              set volume(e) {
                this._mediaElement && (this._mediaElement.volume = e)
              }
              get muted() {
                var e;
                return null === (e = this._mediaElement) || void 0 === e ? void 0 : e.muted
              }
              set muted(e) {
                this._mediaElement && (this._mediaElement.muted = e)
              }
              get currentTime() {
                return this._mediaElement ? this._mediaElement.currentTime : 0
              }
              set currentTime(e) {
                this._mediaElement ? this._internalSeek(e) : this._pendingSeekTime = e
              }
              get mediaInfo() {
                return Object.assign({}, this._mediaInfo)
              }
              get statisticsInfo() {
                return null == this._statisticsInfo && (this._statisticsInfo = {}), this._statisticsInfo = this._fillStatisticsInfo(this._statisticsInfo), Object.assign({}, this._statisticsInfo)
              }
              _fillStatisticsInfo(e) {
                if (e.playerType = this._type, !(this._mediaElement instanceof HTMLVideoElement)) return e;
                let t = !0,
                  i = 0,
                  s = 0;
                if (this._mediaElement.getVideoPlaybackQuality) {
                  const e = this._mediaElement.getVideoPlaybackQuality();
                  i = e.totalVideoFrames, s = e.droppedVideoFrames
                } else void 0 !== this._mediaElement.webkitDecodedFrameCount ? (i = this._mediaElement.webkitDecodedFrameCount, s = this._mediaElement.webkitDroppedFrameCount) : t = !1;
                return t && (e.decodedFrames = i, e.droppedFrames = s), e
              }
              _onmseUpdateEnd() {
                var e, t, i, s;
                const n = null === (e = this._mediaElement) || void 0 === e ? void 0 : e.buffered,
                  r = (null === (t = this._mediaElement) || void 0 === t ? void 0 : t.currentTime) || 0;
                if (this._config.isLive && this._config.liveBufferLatencyChasing && (null == n ? void 0 : n.length) > 0 && !(null === (i = this._mediaElement) || void 0 === i ? void 0 : i.paused)) {
                  const e = n.end(n.length - 1);
                  if (e > ((null === (s = this._config) || void 0 === s ? void 0 : s.liveBufferLatencyMaxLatency) || 0) && e - r > (this._config.liveBufferLatencyMaxLatency || 0)) {
                    const t = e - (this._config.liveBufferLatencyMinRemain || 0);
                    this.currentTime = t
                  }
                }
                if (!this._config.lazyLoad || this._config.isLive) return;
                let a = 0;
                for (let e = 0; e < n.length; e++) {
                  const t = n.start(e),
                    i = n.end(e);
                  if (t <= r && r < i) {
                    a = i;
                    break
                  }
                }
                a >= r + (this._config.lazyLoadMaxDuration || 0) && null == this._progressChecker && (h.Z.v(this.TAG, "Maximum buffering duration exceeded, suspend transmuxing task"), this._suspendTransmuxer())
              }
              _onmseBufferFull() {
                h.Z.v(this.TAG, "MSE SourceBuffer is full, suspend transmuxing task"), null == this._progressChecker && this._suspendTransmuxer()
              }
              _suspendTransmuxer() {
                this._transmuxer && (this._transmuxer.pause(), null == this._progressChecker && (this._progressChecker = window.setInterval(this._checkProgressAndResume.bind(this), 1e3)))
              }
              _checkProgressAndResume() {
                var e, t, i;
                const s = (null === (e = this._mediaElement) || void 0 === e ? void 0 : e.currentTime) || 0,
                  n = null === (t = this._mediaElement) || void 0 === t ? void 0 : t.buffered;
                let r = !1;
                for (let e = 0; e < n.length; e++) {
                  const t = n.start(e),
                    i = n.end(e);
                  if (s >= t && s < i) {
                    s >= i - (this._config.lazyLoadRecoverDuration || 0) && (r = !0);
                    break
                  }
                }
                r && (window.clearInterval(this._progressChecker), this._progressChecker = null, r && (h.Z.v(this.TAG, "Continue loading from paused position"), null === (i = this._transmuxer) || void 0 === i || i.resume()))
              }
              _isTimepointBuffered(e) {
                var t;
                const i = null === (t = this._mediaElement) || void 0 === t ? void 0 : t.buffered;
                for (let t = 0; t < i.length; t++) {
                  const s = i.start(t),
                    n = i.end(t);
                  if (e >= s && e < n) return !0
                }
                return !1
              }
              _internalSeek(e) {
                var t, i, s, n, r;
                const a = this._isTimepointBuffered(e);
                let o = !1,
                  d = 0;
                if (e < 1 && (null === (t = this._mediaElement) || void 0 === t ? void 0 : t.buffered).length > 0) {
                  const t = (null === (i = this._mediaElement) || void 0 === i ? void 0 : i.buffered).start(0);
                  (t < 1 && e < t || c.Z.safari) && (o = !0, d = c.Z.safari ? .1 : t)
                }
                if (o) this._requestSetTime = !0, this._mediaElement && (this._mediaElement.currentTime = d);
                else if (a) {
                  if (this._alwaysSeekKeyframe) {
                    const t = null === (s = this._msectl) || void 0 === s ? void 0 : s.getNearestKeyframe(Math.floor(1e3 * e));
                    this._requestSetTime = !0, this._mediaElement && (this._mediaElement.currentTime = null != t ? t.dts / 1e3 : e)
                  } else this._requestSetTime = !0, this._mediaElement && (this._mediaElement.currentTime = e);
                  null != this._progressChecker && this._checkProgressAndResume()
                } else null != this._progressChecker && (window.clearInterval(this._progressChecker), this._progressChecker = null), null === (n = this._msectl) || void 0 === n || n.seek(e), null === (r = this._transmuxer) || void 0 === r || r.seek(Math.floor(1e3 * e)), this._config.accurateSeek && (this._requestSetTime = !0, this._mediaElement && (this._mediaElement.currentTime = e))
              }
              _checkAndApplyUnbufferedSeekpoint() {
                var e, t, i, s;
                if (this._seekpointRecord)
                  if (((null === (e = this._seekpointRecord) || void 0 === e ? void 0 : e.recordTime) || 0) <= this._now() - 100) {
                    const e = null === (t = this._mediaElement) || void 0 === t ? void 0 : t.currentTime;
                    this._seekpointRecord = null, this._isTimepointBuffered(e) || (null != this._progressChecker && (window.clearTimeout(this._progressChecker), this._progressChecker = null), null === (i = this._msectl) || void 0 === i || i.seek(e), null === (s = this._transmuxer) || void 0 === s || s.seek(Math.floor(1e3 * e)), this._config.accurateSeek && (this._requestSetTime = !0, this._mediaElement && (this._mediaElement.currentTime = e)))
                  } else window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50)
              }
              _checkAndResumeStuckPlayback(e) {
                const t = this._mediaElement;
                if (e || !this._receivedCanPlay || t.readyState < 2) {
                  const e = t.buffered;
                  e.length > 0 && t.currentTime < e.start(0) && (h.Z.w(this.TAG, `Playback seems stuck at ${t.currentTime}, seek to ${e.start(0)}`), this._requestSetTime = !0, this._mediaElement && (this._mediaElement.currentTime = e.start(0), this._mediaElement.removeEventListener("progress", this.e.onvProgress)))
                } else this._mediaElement && this._mediaElement.removeEventListener("progress", this.e.onvProgress)
              }
              _onvLoadedMetadata(e) {
                null != this._pendingSeekTime && (this._mediaElement && (this._mediaElement.currentTime = this._pendingSeekTime), this._pendingSeekTime = null)
              }
              _onvSeeking(e) {
                var t, i, s;
                const n = null === (t = this._mediaElement) || void 0 === t ? void 0 : t.currentTime,
                  r = null === (i = this._mediaElement) || void 0 === i ? void 0 : i.buffered;
                if (this._requestSetTime) this._requestSetTime = !1;
                else {
                  if (n < 1 && r.length > 0) {
                    const e = r.start(0);
                    if (e < 1 && n < e || c.Z.safari) return this._requestSetTime = !0, void(this._mediaElement && (this._mediaElement.currentTime = c.Z.safari ? .1 : e))
                  }
                  if (this._isTimepointBuffered(n)) {
                    if (this._alwaysSeekKeyframe) {
                      const e = null === (s = this._msectl) || void 0 === s ? void 0 : s.getNearestKeyframe(Math.floor(1e3 * n));
                      null != e && (this._requestSetTime = !0, this._mediaElement && (this._mediaElement.currentTime = e.dts / 1e3))
                    }
                    null != this._progressChecker && this._checkProgressAndResume()
                  } else this._seekpointRecord = {
                    seekPoint: n,
                    recordTime: this._now()
                  }, window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50)
                }
              }
              _onvCanPlay(e) {
                var t;
                this._receivedCanPlay = !0, null === (t = this._mediaElement) || void 0 === t || t.removeEventListener("canplay", this.e.onvCanPlay)
              }
              _onvStalled(e) {
                this._checkAndResumeStuckPlayback(!0)
              }
              _onvProgress(e) {
                this._checkAndResumeStuckPlayback()
              }
            };
            const x = class {
                constructor(e, t) {
                  this.TAG = "NativePlayer", this._type = "NativePlayer", this._emitter = new l.EventEmitter, this._config = r(), "object" == typeof t && Object.assign(this._config, t);
                  const i = e.type.toLowerCase();
                  if ("mse" === i || "mpegts" === i || "m2ts" === i || "flv" === i) throw new k.OC("NativePlayer does't support mse/mpegts/m2ts/flv MediaDataSource input!");
                  if (e.hasOwnProperty("segments")) throw new k.OC(`NativePlayer(${e.type}) doesn't support multipart playback!`);
                  this.e = {
                    onvLoadedMetadata: this._onvLoadedMetadata.bind(this)
                  }, this._pendingSeekTime = null, this._statisticsReporter = null, this._mediaDataSource = e, this._mediaElement = null
                }
                destroy() {
                  var e;
                  this._emitter.emit(u.DESTROYING), this._mediaElement && (this.unload(), this.detachMediaElement()), this.e = null, this._mediaDataSource = null, null === (e = this._emitter) || void 0 === e || e.removeAllListeners(), this._emitter = null
                }
                on(e, t) {
                  e === u.MEDIA_INFO ? null != this._mediaElement && 0 !== this._mediaElement.readyState && Promise.resolve().then((() => {
                    this._emitter.emit(u.MEDIA_INFO, this.mediaInfo)
                  })) : e === u.STATISTICS_INFO && null != this._mediaElement && 0 !== this._mediaElement.readyState && Promise.resolve().then((() => {
                    this._emitter.emit(u.STATISTICS_INFO, this.statisticsInfo)
                  })), this._emitter.addListener(e, t)
                }
                off(e, t) {
                  this._emitter.removeListener(e, t)
                }
                attachMediaElement(e) {
                  if (this._mediaElement = e, e.addEventListener("loadedmetadata", this.e.onvLoadedMetadata), null != this._pendingSeekTime) try {
                    e.currentTime = this._pendingSeekTime, this._pendingSeekTime = null
                  } catch (e) {}
                }
                detachMediaElement() {
                  this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src"), this._mediaElement.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._mediaElement = null), null != this._statisticsReporter && (window.clearInterval(this._statisticsReporter), this._statisticsReporter = null)
                }
                load() {
                  var e;
                  if (!this._mediaElement) throw new k.rT("HTMLMediaElement must be attached before load()!");
                  this._mediaElement.src = (null === (e = this._mediaDataSource) || void 0 === e ? void 0 : e.url) || "", this._mediaElement.readyState > 0 && (this._mediaElement.currentTime = 0), this._mediaElement.preload = "auto", this._mediaElement.load(), this._statisticsReporter = window.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval)
                }
                unload() {
                  this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src")), null != this._statisticsReporter && (window.clearInterval(this._statisticsReporter), this._statisticsReporter = null)
                }
                play() {
                  var e;
                  return function(e, t, i, s) {
                    return new(i || (i = Promise))((function(n, r) {
                      function a(e) {
                        try {
                          d(s.next(e))
                        } catch (e) {
                          r(e)
                        }
                      }

                      function o(e) {
                        try {
                          d(s.throw(e))
                        } catch (e) {
                          r(e)
                        }
                      }

                      function d(e) {
                        var t;
                        e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
                          e(t)
                        }))).then(a, o)
                      }
                      d((s = s.apply(e, t || [])).next())
                    }))
                  }(this, void 0, void 0, (function*() {
                    return yield null === (e = this._mediaElement) || void 0 === e ? void 0 : e.play()
                  }))
                }
                pause() {
                  var e;
                  null === (e = this._mediaElement) || void 0 === e || e.pause()
                }
                get type() {
                  return this._type
                }
                get buffered() {
                  var e;
                  return null === (e = this._mediaElement) || void 0 === e ? void 0 : e.buffered
                }
                get duration() {
                  var e;
                  return null === (e = this._mediaElement) || void 0 === e ? void 0 : e.duration
                }
                get volume() {
                  var e;
                  return null === (e = this._mediaElement) || void 0 === e ? void 0 : e.volume
                }
                set volume(e) {
                  this._mediaElement && (this._mediaElement.volume = e)
                }
                get muted() {
                  var e;
                  return null === (e = this._mediaElement) || void 0 === e ? void 0 : e.muted
                }
                set muted(e) {
                  this._mediaElement && (this._mediaElement.muted = e)
                }
                get currentTime() {
                  return this._mediaElement ? this._mediaElement.currentTime : 0
                }
                set currentTime(e) {
                  this._mediaElement ? this._mediaElement.currentTime = e : this._pendingSeekTime = e
                }
                get mediaInfo() {
                  const e = {
                    mimeType: (this._mediaElement instanceof HTMLAudioElement ? "audio/" : "video/") + this._mediaDataSource.type
                  };
                  return this._mediaElement && (e.duration = Math.floor(1e3 * this._mediaElement.duration), this._mediaElement instanceof HTMLVideoElement && (e.width = this._mediaElement.videoWidth, e.height = this._mediaElement.videoHeight)), e
                }
                get statisticsInfo() {
                  const e = {
                    playerType: this._type,
                    url: this._mediaDataSource.url
                  };
                  if (!(this._mediaElement instanceof HTMLVideoElement)) return e;
                  let t = !0,
                    i = 0,
                    s = 0;
                  if (this._mediaElement.getVideoPlaybackQuality) {
                    const e = this._mediaElement.getVideoPlaybackQuality();
                    i = e.totalVideoFrames, s = e.droppedVideoFrames
                  } else void 0 !== this._mediaElement.webkitDecodedFrameCount ? (i = this._mediaElement.webkitDecodedFrameCount, s = this._mediaElement.webkitDroppedFrameCount) : t = !1;
                  return t && (e.decodedFrames = i, e.droppedFrames = s), e
                }
                _onvLoadedMetadata(e) {
                  null != this._pendingSeekTime && (this._mediaElement && (this._mediaElement.currentTime = this._pendingSeekTime), this._pendingSeekTime = null), this._emitter.emit(u.MEDIA_INFO, this.mediaInfo)
                }
                _reportStatisticsInfo() {
                  this._emitter.emit(u.STATISTICS_INFO, this.statisticsInfo)
                }
              },
              M = {
                h264: 1,
                h265: 2,
                h266: 4,
                vp8: 8,
                vp9: 16,
                av1: 32
              },
              P = ["h264", "h265"],
              U = {
                createPlayer: function(e, t) {
                  (null == e ? void 0 : e.url) && (e.url = (e => {
                    const t = e.split("?"),
                      i = new URLSearchParams(t[1]);
                    return i.delete("vc"), t[0] + "?" + i.toString()
                  })(e.url));
                  const i = e;
                  if (null == i || "object" != typeof i) throw new k.OC("MediaDataSource must be an javascript object!");
                  if (!Object.prototype.hasOwnProperty.call(i, "type")) throw new k.OC("MediaDataSource must has type field to indicate video file type!");
                  switch (i.type) {
                    case "mse":
                    case "mpegts":
                    case "m2ts":
                    case "flv":
                      return new L(i, t);
                    default:
                      return new x(i, t)
                  }
                },
                isSupported: function() {
                  return o.supportMSEH264Playback()
                },
                getFeatureList: function() {
                  return o.getFeatureList()
                },
                BaseLoader: d.fp,
                LoaderStatus: d.GM,
                LoaderErrors: d.nm,
                version: "",
                Events: u,
                ErrorTypes: O,
                ErrorDetails: D,
                MSEPlayer: L,
                NativePlayer: x,
                LoggingControl: y.Z
              };
            Object.defineProperty(U, "version", {
              enumerable: !0,
              get: function() {
                return "2.0.0"
              }
            });
            const F = U
          },
          607: (e, t, i) => {
            e.exports = i(578).default
          },
          575: (e, t, i) => {
            i.d(t, {
              Z: () => p
            });
            var s = i(645);
            const n = class {
              constructor() {
                var e;
                this._firstCheckpoint = 0, this._lastCheckpoint = 0, this._intervalBytes = 0, this._totalBytes = 0, this._lastSecondBytes = 0, (null === (e = self.performance) || void 0 === e ? void 0 : e.now) ? this._now = self.performance.now.bind(self.performance) : this._now = Date.now
              }
              reset() {
                this._firstCheckpoint = this._lastCheckpoint = 0, this._totalBytes = this._intervalBytes = 0, this._lastSecondBytes = 0
              }
              addBytes(e) {
                0 === this._firstCheckpoint ? (this._firstCheckpoint = this._now(), this._lastCheckpoint = this._firstCheckpoint, this._intervalBytes += e, this._totalBytes += e) : this._now() - this._lastCheckpoint < 1e3 ? (this._intervalBytes += e, this._totalBytes += e) : (this._lastSecondBytes = this._intervalBytes, this._intervalBytes = e, this._totalBytes += e, this._lastCheckpoint = this._now())
              }
              get currentKBps() {
                this.addBytes(0);
                let e = (this._now() - this._lastCheckpoint) / 1e3;
                return 0 === e && (e = 1), this._intervalBytes / e / 1024
              }
              get lastSecondKBps() {
                return this.addBytes(0), 0 !== this._lastSecondBytes ? this._lastSecondBytes / 1024 : this._now() - this._lastCheckpoint >= 500 ? this.currentKBps : 0
              }
              get averageKBps() {
                const e = (this._now() - this._firstCheckpoint) / 1e3;
                return this._totalBytes / e / 1024
              }
            };
            var r = i(108),
              a = i(479),
              o = i(411);
            class d extends r.fp {
              static isSupported() {
                var e;
                try {
                  const t = a.Z.msedge && ((null === (e = null === a.Z || void 0 === a.Z ? void 0 : a.Z.version) || void 0 === e ? void 0 : e.minor) || 0) >= 15048 && !a.Z.webkit,
                    i = !a.Z.msedge || t;
                  return self.fetch && self.ReadableStream && i
                } catch (e) {
                  return !1
                }
              }
              constructor(e, t) {
                super("fetch-stream-loader"), this.TAG = "FetchStreamLoader", this._seekHandler = e, this._config = t, this._needStash = !0, this._requestAbort = !1, this._abortController = null, this._contentLength = null, this._receivedLength = 0
              }
              destroy() {
                this.isWorking() && this.abort(), super.destroy()
              }
              open(e, t) {
                this._dataSource = e, this._range = t;
                let i = e.url;
                this._config.reuseRedirectedURL && void 0 !== e.redirectedURL && (i = e.redirectedURL);
                const s = this._seekHandler.getConfig(i, t),
                  n = new self.Headers;
                if ("object" == typeof s.headers) {
                  const e = s.headers;
                  for (const t in e) e.hasOwnProperty(t) && n.append(t, e[t])
                }
                const a = {
                  method: "GET",
                  headers: n,
                  mode: "cors",
                  cache: "default",
                  referrerPolicy: "no-referrer-when-downgrade"
                };
                if ("object" == typeof this._config.headers)
                  for (const e in this._config.headers) n.append(e, this._config.headers[e]);
                e.cors || (a.mode = "same-origin"), e.withCredentials && (a.credentials = "include"), (null == e ? void 0 : e.referrerPolicy) && (a.referrerPolicy = e.referrerPolicy), self.AbortController && (this._abortController = new self.AbortController, this._abortController && (a.signal = this._abortController.signal)), this._status = r.GM.kConnecting, self.fetch(s.url, a).then((e => {
                  var t, i;
                  if (this._requestAbort) return this._status = r.GM.kIdle, void(null === (t = e.body) || void 0 === t || t.cancel());
                  if (e.ok && e.status >= 200 && e.status <= 299) {
                    if (e.url !== s.url && this._onURLRedirect) {
                      const t = this._seekHandler.removeURLParameters(e.url);
                      this._onURLRedirect(t)
                    }
                    const t = e.headers.get("Content-Length");
                    return null != t && (this._contentLength = parseInt(t), 0 !== this._contentLength && this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength)), this._pump.call(this, null === (i = e.body) || void 0 === i ? void 0 : i.getReader())
                  }
                  if (this._status = r.GM.kError, !this._onError) throw new o.OZ("FetchStreamLoader: Http code invalid, " + e.status + " " + e.statusText);
                  this._onError(r.nm.HTTP_STATUS_CODE_INVALID, {
                    code: e.status,
                    msg: e.statusText
                  })
                })).catch((e => {
                  var t;
                  if (!(null === (t = this._abortController) || void 0 === t ? void 0 : t.signal.aborted)) {
                    if (this._status = r.GM.kError, !this._onError) throw e;
                    this._onError(r.nm.EXCEPTION, {
                      code: -1,
                      msg: e.message
                    })
                  }
                }))
              }
              abort() {
                var e;
                if (this._requestAbort = !0, (this._status !== r.GM.kBuffering || !a.Z.chrome) && this._abortController) try {
                  null === (e = this._abortController) || void 0 === e || e.abort()
                } catch (e) {}
              }
              _pump(e) {
                return e.read().then((t => {
                  var i, s, n, a;
                  if (t.done)
                    if (null !== this._contentLength && this._receivedLength < this._contentLength) {
                      this._status = r.GM.kError;
                      const e = r.nm.EARLY_EOF,
                        t = {
                          code: -1,
                          msg: "Fetch stream meet Early-EOF"
                        };
                      if (!this._onError) throw new o.OZ(t.msg);
                      this._onError(e, t)
                    } else this._status = r.GM.kComplete, this._onComplete && this._onComplete((null === (i = this._range) || void 0 === i ? void 0 : i.from) || 0, ((null === (s = this._range) || void 0 === s ? void 0 : s.from) || 0) + this._receivedLength - 1);
                  else {
                    if (null === (n = this._abortController) || void 0 === n ? void 0 : n.signal.aborted) return void(this._status = r.GM.kComplete);
                    if (this._requestAbort) return this._status = r.GM.kComplete, e.cancel();
                    this._status = r.GM.kBuffering;
                    const i = t.value.buffer,
                      s = ((null === (a = this._range) || void 0 === a ? void 0 : a.from) || 0) + this._receivedLength;
                    this._receivedLength += i.byteLength, this._onDataArrival && this._onDataArrival(i, s, this._receivedLength), this._pump(e)
                  }
                })).catch((e => {
                  var t, i;
                  if (null === (i = null === (t = this._abortController) || void 0 === t ? void 0 : t.signal) || void 0 === i ? void 0 : i.aborted) return void(this._status = r.GM.kComplete);
                  if (11 === e.code && a.Z.msedge) return;
                  this._status = r.GM.kError;
                  let s = 0,
                    n = null;
                  if (19 !== e.code && "network error" !== e.message || !(null === this._contentLength || null !== this._contentLength && this._receivedLength < this._contentLength) ? (s = r.nm.EXCEPTION, n = {
                      code: e.code,
                      msg: e.message
                    }) : (s = r.nm.EARLY_EOF, n = {
                      code: e.code,
                      msg: "Fetch stream meet Early-EOF"
                    }), !this._onError) throw new o.OZ(n.msg);
                  this._onError(s, n)
                }))
              }
            }
            const l = d;
            class h extends r.fp {
              static isSupported() {
                try {
                  const e = new XMLHttpRequest;
                  return e.open("GET", "https://example.com", !0), e.responseType = "moz-chunked-arraybuffer", "moz-chunked-arraybuffer" === e.responseType
                } catch (e) {
                  return s.Z.w("MozChunkedLoader", e.message), !1
                }
              }
              constructor(e, t) {
                super("xhr-moz-chunked-loader"), this.TAG = "MozChunkedLoader", this._seekHandler = e, this._config = t, this._needStash = !0, this._xhr = null, this._requestAbort = !1, this._contentLength = null, this._receivedLength = 0
              }
              destroy() {
                this.isWorking() && this.abort(), this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onloadend = null, this._xhr.onerror = null, this._xhr = null), super.destroy()
              }
              open(e, t) {
                this._dataSource = e, this._range = t;
                let i = e.url;
                this._config.reuseRedirectedURL && void 0 !== e.redirectedURL && (i = e.redirectedURL);
                const s = this._seekHandler.getConfig(i, t);
                this._requestURL = s.url;
                const n = this._xhr = new XMLHttpRequest;
                if (n.open("GET", s.url, !0), n.responseType = "moz-chunked-arraybuffer", n.onreadystatechange = this._onReadyStateChange.bind(this), n.onprogress = this._onProgress.bind(this), n.onloadend = this._onLoadEnd.bind(this), n.onerror = this._onXhrError.bind(this), e.withCredentials && (n.withCredentials = !0), "object" == typeof s.headers) {
                  const e = s.headers;
                  for (const t in e) e.hasOwnProperty(t) && n.setRequestHeader(t, e[t])
                }
                if ("object" == typeof this._config.headers) {
                  const e = this._config.headers;
                  for (const t in e) e.hasOwnProperty(t) && n.setRequestHeader(t, e[t])
                }
                this._status = r.GM.kConnecting, n.send()
              }
              abort() {
                this._requestAbort = !0, this._xhr && this._xhr.abort(), this._status = r.GM.kComplete
              }
              _onReadyStateChange(e) {
                const t = e.target;
                if (2 === t.readyState) {
                  if (void 0 !== t.responseURL && t.responseURL !== this._requestURL && this._onURLRedirect) {
                    const e = this._seekHandler.removeURLParameters(t.responseURL);
                    this._onURLRedirect(e)
                  }
                  if (0 !== t.status && (t.status < 200 || t.status > 299)) {
                    if (this._status = r.GM.kError, !this._onError) throw new o.OZ("MozChunkedLoader: Http code invalid, " + t.status + " " + t.statusText);
                    this._onError(r.nm.HTTP_STATUS_CODE_INVALID, {
                      code: t.status,
                      msg: t.statusText
                    })
                  } else this._status = r.GM.kBuffering
                }
              }
              _onProgress(e) {
                var t;
                if (this._status === r.GM.kError) return;
                null === this._contentLength && null !== e.total && 0 !== e.total && (this._contentLength = e.total, this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength));
                const i = e.target.response,
                  s = ((null === (t = this._range) || void 0 === t ? void 0 : t.from) || 0) + this._receivedLength;
                this._receivedLength += i.byteLength, this._onDataArrival && this._onDataArrival(i, s, this._receivedLength)
              }
              _onLoadEnd(e) {
                this._requestAbort ? this._requestAbort = !1 : this._status !== r.GM.kError && (this._status = r.GM.kComplete, this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1))
              }
              _onXhrError(e) {
                this._status = r.GM.kError;
                let t = 0,
                  i = null;
                if (this._contentLength && e.loaded < this._contentLength ? (t = r.nm.EARLY_EOF, i = {
                    code: -1,
                    msg: "Moz-Chunked stream meet Early-Eof"
                  }) : (t = r.nm.EXCEPTION, i = {
                    code: -1,
                    msg: e.constructor.name + " " + e.type
                  }), !this._onError) throw new o.OZ(i.msg);
                this._onError(t, i)
              }
            }
            const c = h;
            class u extends r.fp {
              static isSupported() {
                try {
                  const e = new XMLHttpRequest;
                  return e.open("GET", "https://example.com", !0), e.responseType = "arraybuffer", "arraybuffer" === e.responseType
                } catch (e) {
                  return s.Z.w("RangeLoader", e.message), !1
                }
              }
              constructor(e, t) {
                super("xhr-range-loader"), this.TAG = "RangeLoader", this._seekHandler = e, this._config = t, this._needStash = !1, this._chunkSizeKBList = [128, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 5120, 6144, 7168, 8192], this._currentChunkSizeKB = 384, this._currentSpeedNormalized = 0, this._zeroSpeedChunkCount = 0, this._xhr = null, this._speedSampler = new n, this._requestAbort = !1, this._waitForTotalLength = !1, this._totalLengthReceived = !1, this._currentRequestURL = null, this._currentRedirectedURL = null, this._currentRequestRange = null, this._totalLength = null, this._contentLength = null, this._receivedLength = 0, this._lastTimeLoaded = 0
              }
              destroy() {
                this.isWorking() && this.abort(), this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onload = null, this._xhr.onerror = null, this._xhr = null), super.destroy()
              }
              get currentSpeed() {
                return this._speedSampler.lastSecondKBps
              }
              open(e, t) {
                this._dataSource = e, this._range = t, this._status = r.GM.kConnecting;
                let i = !1;
                null != this._dataSource.filesize && 0 !== this._dataSource.filesize && (i = !0, this._totalLength = this._dataSource.filesize), this._totalLengthReceived || i ? this._openSubRange() : (this._waitForTotalLength = !0, this._internalOpen(this._dataSource, {
                  from: 0,
                  to: -1
                }))
              }
              _openSubRange() {
                var e, t;
                const i = 1024 * this._currentChunkSizeKB,
                  s = ((null === (e = this._range) || void 0 === e ? void 0 : e.from) || 0) + this._receivedLength;
                let n = s + i;
                null != this._contentLength && n - this._range.from >= this._contentLength && (n = ((null === (t = this._range) || void 0 === t ? void 0 : t.from) || 0) + this._contentLength - 1), this._currentRequestRange = {
                  from: s,
                  to: n
                }, this._internalOpen(this._dataSource, this._currentRequestRange)
              }
              _internalOpen(e, t) {
                this._lastTimeLoaded = 0;
                let i = e.url;
                this._config.reuseRedirectedURL && (null != this._currentRedirectedURL ? i = this._currentRedirectedURL : null != e.redirectedURL && (i = e.redirectedURL));
                const s = this._seekHandler.getConfig(i, t);
                this._currentRequestURL = s.url;
                const n = this._xhr = new XMLHttpRequest;
                if (n.open("GET", s.url, !0), n.responseType = "arraybuffer", n.onreadystatechange = this._onReadyStateChange.bind(this), n.onprogress = this._onProgress.bind(this), n.onload = this._onLoad.bind(this), n.onerror = this._onXhrError.bind(this), e.withCredentials && (n.withCredentials = !0), "object" == typeof s.headers) {
                  const e = s.headers;
                  for (const t in e) e.hasOwnProperty(t) && n.setRequestHeader(t, e[t])
                }
                if ("object" == typeof this._config.headers) {
                  const e = this._config.headers;
                  for (const t in e) e.hasOwnProperty(t) && n.setRequestHeader(t, e[t])
                }
                n.send()
              }
              abort() {
                this._requestAbort = !0, this._internalAbort(), this._status = r.GM.kComplete
              }
              _internalAbort() {
                this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onload = null, this._xhr.onerror = null, this._xhr.abort(), this._xhr = null)
              }
              _onReadyStateChange(e) {
                const t = e.target;
                if (2 === t.readyState) {
                  if (null != t.responseURL) {
                    const e = this._seekHandler.removeURLParameters(t.responseURL);
                    t.responseURL !== this._currentRequestURL && e !== this._currentRedirectedURL && (this._currentRedirectedURL = e, this._onURLRedirect && this._onURLRedirect(e))
                  }
                  if (t.status >= 200 && t.status <= 299) {
                    if (this._waitForTotalLength) return;
                    this._status = r.GM.kBuffering
                  } else {
                    if (this._status = r.GM.kError, !this._onError) throw new o.OZ("RangeLoader: Http code invalid, " + t.status + " " + t.statusText);
                    this._onError(r.nm.HTTP_STATUS_CODE_INVALID, {
                      code: t.status,
                      msg: t.statusText
                    })
                  }
                }
              }
              _onProgress(e) {
                if (this._status === r.GM.kError) return;
                if (null === this._contentLength) {
                  let t = !1;
                  if (this._waitForTotalLength) {
                    this._waitForTotalLength = !1, this._totalLengthReceived = !0, t = !0;
                    const i = e.total;
                    this._internalAbort(), null != i && 0 !== i && (this._totalLength = i)
                  }
                  if (-1 === this._range.to ? this._contentLength = (this._totalLength || 0) - this._range.from : this._contentLength = this._range.to - this._range.from + 1, t) return void this._openSubRange();
                  this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength)
                }
                const t = e.loaded - this._lastTimeLoaded;
                this._lastTimeLoaded = e.loaded, this._speedSampler.addBytes(t)
              }
              _normalizeSpeed(e) {
                const t = this._chunkSizeKBList,
                  i = t.length - 1;
                let s = 0,
                  n = 0,
                  r = i;
                if (e < t[0]) return t[0];
                for (; n <= r;) {
                  if (s = n + Math.floor((r - n) / 2), s === i || e >= t[s] && e < t[s + 1]) return t[s];
                  t[s] < e ? n = s + 1 : r = s - 1
                }
              }
              _onLoad(e) {
                if (this._status === r.GM.kError) return;
                if (this._waitForTotalLength) return void(this._waitForTotalLength = !1);
                this._lastTimeLoaded = 0;
                let t = this._speedSampler.lastSecondKBps;
                if (0 === t && (this._zeroSpeedChunkCount++, this._zeroSpeedChunkCount >= 3 && (t = this._speedSampler.currentKBps)), 0 !== t) {
                  const e = this._normalizeSpeed(t);
                  this._currentSpeedNormalized !== e && (this._currentSpeedNormalized = e, this._currentChunkSizeKB = e)
                }
                const i = e.target.response,
                  s = this._range.from + this._receivedLength;
                this._receivedLength += i.byteLength;
                let n = !1;
                null != this._contentLength && this._receivedLength < this._contentLength ? this._openSubRange() : n = !0, this._onDataArrival && this._onDataArrival(i, s, this._receivedLength), n && (this._status = r.GM.kComplete, this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1))
              }
              _onXhrError(e) {
                this._status = r.GM.kError;
                let t = 0,
                  i = null;
                if (this._contentLength && this._receivedLength > 0 && this._receivedLength < this._contentLength ? (t = r.nm.EARLY_EOF, i = {
                    code: -1,
                    msg: "RangeLoader meet Early-Eof"
                  }) : (t = r.nm.EXCEPTION, i = {
                    code: -1,
                    msg: e.constructor.name + " " + e.type
                  }), !this._onError) throw new o.OZ(i.msg);
                this._onError(t, i)
              }
            }
            const A = u;
            class _ extends r.fp {
              static isSupported() {
                try {
                  return void 0 !== self.WebSocket
                } catch (e) {
                  return !1
                }
              }
              constructor(e, t) {
                super("websocket-loader"), this.TAG = "WebSocketLoader", this._needStash = !0, this._ws = null, this._requestAbort = !1, this._receivedLength = 0
              }
              destroy() {
                this._ws && this.abort(), super.destroy()
              }
              open(e) {
                try {
                  const t = this._ws = new self.WebSocket(e.url);
                  t.binaryType = "arraybuffer", t.onopen = this._onWebSocketOpen.bind(this), t.onclose = this._onWebSocketClose.bind(this), t.onmessage = this._onWebSocketMessage.bind(this), t.onerror = this._onWebSocketError.bind(this), this._status = r.GM.kConnecting
                } catch (e) {
                  this._status = r.GM.kError;
                  const t = {
                    code: e.code,
                    msg: e.message
                  };
                  if (!this._onError) throw new o.OZ(t.msg);
                  this._onError(r.nm.EXCEPTION, t)
                }
              }
              abort() {
                const e = this._ws;
                !e || 0 !== e.readyState && 1 !== e.readyState || (this._requestAbort = !0, e.close()), this._ws = null, this._status = r.GM.kComplete
              }
              _onWebSocketOpen(e) {
                this._status = r.GM.kBuffering
              }
              _onWebSocketClose(e) {
                this._requestAbort ? this._requestAbort = !1 : (this._status = r.GM.kComplete, this._onComplete && this._onComplete(0, this._receivedLength - 1))
              }
              _onWebSocketMessage(e) {
                if (e.data instanceof ArrayBuffer) this._dispatchArrayBuffer(e.data);
                else if (e.data instanceof Blob) {
                  const t = new FileReader;
                  t.onload = () => {
                    this._dispatchArrayBuffer(null == t ? void 0 : t.result)
                  }, t.readAsArrayBuffer(e.data)
                } else {
                  this._status = r.GM.kError;
                  const t = {
                    code: -1,
                    msg: "Unsupported WebSocket message type: " + e.data.constructor.name
                  };
                  if (!this._onError) throw new o.OZ(t.msg);
                  this._onError(r.nm.EXCEPTION, t)
                }
              }
              _dispatchArrayBuffer(e) {
                const t = e,
                  i = this._receivedLength;
                this._receivedLength += t.byteLength, this._onDataArrival && this._onDataArrival(t, i, this._receivedLength)
              }
              _onWebSocketError(e) {
                this._status = r.GM.kError;
                const t = {
                  code: e.code,
                  msg: e.message
                };
                if (!this._onError) throw new o.OZ(t.msg);
                this._onError(r.nm.EXCEPTION, t)
              }
            }
            const m = _,
              p = class {
                constructor(e, t, i) {
                  this.TAG = "IOController", this._config = t, this._extraData = i, this._stashInitialSize = 65536, void 0 !== t.stashInitialSize && t.stashInitialSize > 0 && (this._stashInitialSize = t.stashInitialSize), this._stashUsed = 0, this._stashSize = this._stashInitialSize, this._bufferSize = 3145728, this._stashBuffer = new ArrayBuffer(this._bufferSize), this._stashByteStart = 0, this._enableStash = !0, t.enableStashBuffer || (this._enableStash = !1), this._loader = null, this._loaderClass = null, this._seekHandler = null, this._dataSource = e, this._isWebSocketURL = /wss?:\/\/(.+?)/.test(e.url || ""), this._refTotalLength = e.filesize ? e.filesize : null, this._totalLength = this._refTotalLength, this._fullRequestFlag = !1, this._currentRange = null, this._redirectedURL = null, this._speedNormalized = 0, this._speedSampler = new n, this._speedNormalizeList = [32, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096], this._isEarlyEofReconnecting = !1, this._paused = !1, this._resumeFrom = 0, this._onDataArrival = null, this._onSeeked = null, this._onError = null, this._onComplete = null, this._onRedirect = null, this._onRecoveredEarlyEof = null, this._selectSeekHandler(), this._selectLoader(), this._createLoader()
                }
                destroy() {
                  var e, t, i;
                  (null === (e = this._loader) || void 0 === e ? void 0 : e.isWorking()) && (null === (t = this._loader) || void 0 === t || t.abort()), null === (i = this._loader) || void 0 === i || i.destroy(), this._loader = null, this._loaderClass = null, this._dataSource = null, this._stashBuffer = null, this._stashUsed = this._stashSize = this._bufferSize = this._stashByteStart = 0, this._currentRange = null, this._speedSampler = null, this._isEarlyEofReconnecting = !1, this._onDataArrival = null, this._onSeeked = null, this._onError = null, this._onComplete = null, this._onRedirect = null, this._onRecoveredEarlyEof = null, this._extraData = null
                }
                isWorking() {
                  var e;
                  return (null === (e = this._loader) || void 0 === e ? void 0 : e.isWorking()) && !this._paused
                }
                isPaused() {
                  return this._paused
                }
                get status() {
                  var e;
                  return null === (e = this._loader) || void 0 === e ? void 0 : e.status
                }
                get extraData() {
                  return this._extraData
                }
                set extraData(e) {
                  this._extraData = e
                }
                get onDataArrival() {
                  return this._onDataArrival
                }
                set onDataArrival(e) {
                  this._onDataArrival = e
                }
                get onSeeked() {
                  return this._onSeeked
                }
                set onSeeked(e) {
                  this._onSeeked = e
                }
                get onError() {
                  return this._onError
                }
                set onError(e) {
                  this._onError = e
                }
                get onComplete() {
                  return this._onComplete
                }
                set onComplete(e) {
                  this._onComplete = e
                }
                get onRedirect() {
                  return this._onRedirect
                }
                set onRedirect(e) {
                  this._onRedirect = e
                }
                get onRecoveredEarlyEof() {
                  return this._onRecoveredEarlyEof
                }
                set onRecoveredEarlyEof(e) {
                  this._onRecoveredEarlyEof = e
                }
                get currentURL() {
                  var e;
                  return null === (e = this._dataSource) || void 0 === e ? void 0 : e.url
                }
                get hasRedirect() {
                  var e;
                  return null != this._redirectedURL || void 0 !== (null === (e = this._dataSource) || void 0 === e ? void 0 : e.redirectedURL)
                }
                get currentRedirectedURL() {
                  var e;
                  return this._redirectedURL || (null === (e = this._dataSource) || void 0 === e ? void 0 : e.redirectedURL)
                }
                get currentSpeed() {
                  var e, t;
                  return this._loaderClass === A ? null === (e = this._loader) || void 0 === e ? void 0 : e.currentSpeed : null === (t = this._speedSampler) || void 0 === t ? void 0 : t.lastSecondKBps
                }
                get loaderType() {
                  var e;
                  return null === (e = this._loader) || void 0 === e ? void 0 : e.type
                }
                _selectSeekHandler() {
                  const e = this._config;
                  if ("range" === e.seekType) this._seekHandler = new class {
                    constructor(e) {
                      this._zeroStart = e || !1
                    }
                    getConfig(e, t) {
                      const i = {};
                      if (0 !== t.from || -1 !== t.to) {
                        let e;
                        e = -1 !== t.to ? `bytes=${t.from.toString()}-${t.to.toString()}` : `bytes=${t.from.toString()}-`, i.Range = e
                      } else this._zeroStart && (i.Range = "bytes=0-");
                      return {
                        url: e,
                        headers: i
                      }
                    }
                    removeURLParameters(e) {
                      return e
                    }
                  }(!!this._config.rangeLoadZeroStart);
                  else if ("param" === e.seekType) {
                    const t = e.seekParamStart || "bstart",
                      i = e.seekParamEnd || "bend";
                    this._seekHandler = new class {
                      constructor(e, t) {
                        this._startName = e, this._endName = t
                      }
                      getConfig(e, t) {
                        let i = e;
                        if (0 !== t.from || -1 !== t.to) {
                          let e = !0;
                          i.includes("?") || (i += "?", e = !1), e && (i += "&"), i += `${this._startName}=${t.from.toString()}`, -1 !== t.to && (i += `&${this._endName}=${t.to.toString()}`)
                        }
                        return {
                          url: i,
                          headers: {}
                        }
                      }
                      removeURLParameters(e) {
                        const t = e.split("?")[0];
                        let i;
                        const s = e.indexOf("?"); - 1 !== s && (i = e.substring(s + 1));
                        let n = "";
                        if (void 0 !== i && i.length > 0) {
                          const e = i.split("&");
                          for (let t = 0; t < e.length; t++) {
                            const i = e[t].split("="),
                              s = t > 0;
                            i[0] !== this._startName && i[0] !== this._endName && (s && (n += "&"), n += e[t])
                          }
                        }
                        return 0 === n.length ? t : t + "?" + n
                      }
                    }(t, i)
                  } else {
                    if ("custom" !== e.seekType) throw new o.OC(`Invalid seekType in config: ${(null==e?void 0:e.seekType)||""}`);
                    if ("function" != typeof e.customSeekHandler) throw new o.OC("Custom seekType specified in config but invalid customSeekHandler!");
                    this._seekHandler = new e.customSeekHandler
                  }
                }
                _selectLoader() {
                  var e;
                  if (null != this._config.customLoader) this._loaderClass = (null === (e = this._config) || void 0 === e ? void 0 : e.customLoader) || null;
                  else if (this._isWebSocketURL) this._loaderClass = m;
                  else if (l.isSupported()) this._loaderClass = l;
                  else if (c.isSupported()) this._loaderClass = c;
                  else {
                    if (!A.isSupported()) throw new o.OZ("Your browser doesn't support xhr with arraybuffer responseType!");
                    this._loaderClass = A
                  }
                }
                _createLoader() {
                  var e;
                  this._loaderClass && (this._loader = new this._loaderClass(this._seekHandler, this._config), (null === (e = this._loader) || void 0 === e ? void 0 : e.needStashBuffer) || (this._enableStash = !1), this._loader && (this._loader.onContentLengthKnown = this._onContentLengthKnown.bind(this), this._loader.onURLRedirect = this._onURLRedirect.bind(this), this._loader.onDataArrival = this._onLoaderChunkArrival.bind(this), this._loader.onComplete = this._onLoaderComplete.bind(this), this._loader.onError = this._onLoaderError.bind(this)))
                }
                open(e) {
                  var t, i;
                  this._currentRange = {
                    from: 0,
                    to: -1
                  }, e && (this._currentRange.from = e), null === (t = this._speedSampler) || void 0 === t || t.reset(), e || (this._fullRequestFlag = !0), null === (i = this._loader) || void 0 === i || i.open(this._dataSource, Object.assign({}, this._currentRange))
                }
                abort() {
                  var e;
                  null === (e = this._loader) || void 0 === e || e.abort(), this._paused && (this._paused = !1, this._resumeFrom = 0)
                }
                pause() {
                  var e, t;
                  this.isWorking() && (null === (e = this._loader) || void 0 === e || e.abort(), 0 !== this._stashUsed ? (this._resumeFrom = this._stashByteStart, this._currentRange && (this._currentRange.to = this._stashByteStart - 1)) : this._resumeFrom = ((null === (t = this._currentRange) || void 0 === t ? void 0 : t.to) || 0) + 1, this._stashUsed = 0, this._stashByteStart = 0, this._paused = !0)
                }
                resume() {
                  if (this._paused) {
                    this._paused = !1;
                    const e = this._resumeFrom;
                    this._resumeFrom = 0, this._internalSeek(e, !0)
                  }
                }
                seek(e) {
                  this._paused = !1, this._stashUsed = 0, this._stashByteStart = 0, this._internalSeek(e, !0)
                }
                _internalSeek(e, t) {
                  var i, s, n, r;
                  (null === (i = this._loader) || void 0 === i ? void 0 : i.isWorking()) && (null === (s = this._loader) || void 0 === s || s.abort()), this._flushStashBuffer(t), null === (n = this._loader) || void 0 === n || n.destroy(), this._loader = null;
                  const a = {
                    from: e,
                    to: -1
                  };
                  this._currentRange = {
                    from: a.from,
                    to: -1
                  }, null === (r = this._speedSampler) || void 0 === r || r.reset(), this._stashSize = this._stashInitialSize, this._createLoader(), this._loader.open(this._dataSource, a), this._onSeeked && this._onSeeked()
                }
                updateUrl(e) {
                  if (!e || "string" != typeof e || 0 === e.length) throw new o.OC("Url must be a non-empty string!");
                  this._dataSource.url = e
                }
                _expandBuffer(e) {
                  let t = this._stashSize;
                  for (; t + 1048576 < e;) t *= 2;
                  if (t += 1048576, t === this._bufferSize) return;
                  const i = new ArrayBuffer(t);
                  if (this._stashUsed > 0) {
                    const e = new Uint8Array(this._stashBuffer, 0, this._stashUsed);
                    new Uint8Array(i, 0, t).set(e, 0)
                  }
                  this._stashBuffer = i, this._bufferSize = t
                }
                _normalizeSpeed(e) {
                  const t = this._speedNormalizeList,
                    i = t.length - 1;
                  let s = 0,
                    n = 0,
                    r = i;
                  if (e < t[0]) return t[0];
                  for (; n <= r;) {
                    if (s = n + Math.floor((r - n) / 2), s === i || e >= t[s] && e < t[s + 1]) return t[s];
                    t[s] < e ? n = s + 1 : r = s - 1
                  }
                }
                _adjustStashSize(e) {
                  let t = 0;
                  t = this._config.isLive ? e / 8 : e < 512 ? e : e >= 512 && e <= 1024 ? Math.floor(1.5 * e) : 2 * e, t > 8192 && (t = 8192);
                  const i = 1024 * t + 1048576;
                  this._bufferSize < i && this._expandBuffer(i), this._stashSize = 1024 * t
                }
                _dispatchChunks(e, t) {
                  return this._currentRange && (this._currentRange.to = t + e.byteLength - 1), this._onDataArrival ? this._onDataArrival(e, t) : 0
                }
                _onURLRedirect(e) {
                  this._redirectedURL = e, this._onRedirect && this._onRedirect(e)
                }
                _onContentLengthKnown(e) {
                  e && this._fullRequestFlag && (this._totalLength = e, this._fullRequestFlag = !1)
                }
                _onLoaderChunkArrival(e, t, i) {
                  var s, n;
                  if (!this._onDataArrival) throw new o.rT("IOController: No existing consumer (onDataArrival) callback!");
                  if (this._paused) return;
                  this._isEarlyEofReconnecting && (this._isEarlyEofReconnecting = !1, this._onRecoveredEarlyEof && this._onRecoveredEarlyEof()), null === (s = this._speedSampler) || void 0 === s || s.addBytes(e.byteLength);
                  const r = null === (n = this._speedSampler) || void 0 === n ? void 0 : n.lastSecondKBps;
                  if (0 !== r) {
                    const e = this._normalizeSpeed(r);
                    this._speedNormalized !== e && (this._speedNormalized = e, this._adjustStashSize(e))
                  }
                  if (this._enableStash)
                    if (0 === this._stashUsed && 0 === this._stashByteStart && (this._stashByteStart = t), this._stashUsed + e.byteLength <= this._stashSize) new Uint8Array(this._stashBuffer, 0, this._stashSize).set(new Uint8Array(e), this._stashUsed), this._stashUsed += e.byteLength;
                    else {
                      let i = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                      if (this._stashUsed > 0) {
                        const t = this._stashBuffer.slice(0, this._stashUsed),
                          s = this._dispatchChunks(t, this._stashByteStart);
                        if (s < t.byteLength) {
                          if (s > 0) {
                            const e = new Uint8Array(t, s);
                            i.set(e, 0), this._stashUsed = e.byteLength, this._stashByteStart += s
                          }
                        } else this._stashUsed = 0, this._stashByteStart += s;
                        this._stashUsed + e.byteLength > this._bufferSize && (this._expandBuffer(this._stashUsed + e.byteLength), i = new Uint8Array(this._stashBuffer, 0, this._bufferSize)), i.set(new Uint8Array(e), this._stashUsed), this._stashUsed += e.byteLength
                      } else {
                        const s = this._dispatchChunks(e, t);
                        if (s < e.byteLength) {
                          const n = e.byteLength - s;
                          n > this._bufferSize && (this._expandBuffer(n), i = new Uint8Array(this._stashBuffer, 0, this._bufferSize)), i.set(new Uint8Array(e, s), 0), this._stashUsed += n, this._stashByteStart = t + s
                        }
                      }
                    }
                  else if (0 === this._stashUsed) {
                    const i = this._dispatchChunks(e, t);
                    if (i < e.byteLength) {
                      const s = e.byteLength - i;
                      s > this._bufferSize && this._expandBuffer(s), new Uint8Array(this._stashBuffer, 0, this._bufferSize).set(new Uint8Array(e, i), 0), this._stashUsed += s, this._stashByteStart = t + i
                    }
                  } else {
                    this._stashUsed + e.byteLength > this._bufferSize && this._expandBuffer(this._stashUsed + e.byteLength);
                    const t = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                    t.set(new Uint8Array(e), this._stashUsed), this._stashUsed += e.byteLength;
                    const i = this._dispatchChunks(this._stashBuffer.slice(0, this._stashUsed), this._stashByteStart);
                    if (i < this._stashUsed && i > 0) {
                      const e = new Uint8Array(this._stashBuffer, i);
                      t.set(e, 0)
                    }
                    this._stashUsed -= i, this._stashByteStart += i
                  }
                }
                _flushStashBuffer(e) {
                  if (this._stashUsed > 0) {
                    const t = this._stashBuffer.slice(0, this._stashUsed),
                      i = this._dispatchChunks(t, this._stashByteStart),
                      n = t.byteLength - i;
                    if (i < t.byteLength) {
                      if (!e) {
                        if (i > 0) {
                          const e = new Uint8Array(this._stashBuffer, 0, this._bufferSize),
                            s = new Uint8Array(t, i);
                          e.set(s, 0), this._stashUsed = s.byteLength, this._stashByteStart += i
                        }
                        return 0
                      }
                      s.Z.w(this.TAG, `${n} bytes unconsumed data remain when flush buffer, dropped`)
                    }
                    return this._stashUsed = 0, this._stashByteStart = 0, n
                  }
                  return 0
                }
                _onLoaderComplete(e, t) {
                  this._flushStashBuffer(!0), this._onComplete && this._onComplete(this._extraData)
                }
                _onLoaderError(e, t) {
                  var i;
                  switch (s.Z.e(this.TAG, `Loader error, code = ${t.code}, msg = ${t.msg}`), this._flushStashBuffer(!1), this._isEarlyEofReconnecting && (this._isEarlyEofReconnecting = !1, e = r.nm.UNRECOVERABLE_EARLY_EOF), e) {
                    case r.nm.EARLY_EOF:
                      if (!this._config.isLive && this._totalLength) {
                        const e = ((null === (i = this._currentRange) || void 0 === i ? void 0 : i.to) || 0) + 1;
                        return void(e < this._totalLength && (s.Z.w(this.TAG, "Connection lost, trying reconnect..."), this._isEarlyEofReconnecting = !0, this._internalSeek(e, !1)))
                      }
                      e = r.nm.UNRECOVERABLE_EARLY_EOF;
                    case r.nm.UNRECOVERABLE_EARLY_EOF:
                    case r.nm.CONNECTING_TIMEOUT:
                    case r.nm.HTTP_STATUS_CODE_INVALID:
                    case r.nm.EXCEPTION:
                  }
                  if (!this._onError) throw new o.OZ("IOException: " + t.msg);
                  this._onError(e, t)
                }
              }
          },
          108: (e, t, i) => {
            i.d(t, {
              GM: () => n,
              fp: () => a,
              nm: () => r
            });
            var s = i(411);
            const n = {
                kIdle: 0,
                kConnecting: 1,
                kBuffering: 2,
                kError: 3,
                kComplete: 4
              },
              r = {
                OK: "OK",
                EXCEPTION: "Exception",
                HTTP_STATUS_CODE_INVALID: "HttpStatusCodeInvalid",
                CONNECTING_TIMEOUT: "ConnectingTimeout",
                EARLY_EOF: "EarlyEof",
                UNRECOVERABLE_EARLY_EOF: "UnrecoverableEarlyEof"
              };
            class a {
              constructor(e) {
                this._type = e || "undefined", this._status = n.kIdle, this._needStash = !1, this._onContentLengthKnown = null, this._onURLRedirect = null, this._onDataArrival = null, this._onError = null, this._onComplete = null
              }
              destroy() {
                this._status = n.kIdle, this._onContentLengthKnown = null, this._onURLRedirect = null, this._onDataArrival = null, this._onError = null, this._onComplete = null
              }
              isWorking() {
                return this._status === n.kConnecting || this._status === n.kBuffering
              }
              get type() {
                return this._type
              }
              get status() {
                return this._status
              }
              get needStashBuffer() {
                return this._needStash
              }
              get onContentLengthKnown() {
                return this._onContentLengthKnown
              }
              set onContentLengthKnown(e) {
                this._onContentLengthKnown = e
              }
              get onURLRedirect() {
                return this._onURLRedirect
              }
              set onURLRedirect(e) {
                this._onURLRedirect = e
              }
              get onDataArrival() {
                return this._onDataArrival
              }
              set onDataArrival(e) {
                this._onDataArrival = e
              }
              get onError() {
                return this._onError
              }
              set onError(e) {
                this._onError = e
              }
              get onComplete() {
                return this._onComplete
              }
              set onComplete(e) {
                this._onComplete = e
              }
              open(e, t) {
                throw new s.do("Unimplemented abstract function!")
              }
              abort() {
                throw new s.do("Unimplemented abstract function!")
              }
            }
          },
          479: (e, t, i) => {
            i.d(t, {
              Z: () => n
            });
            const s = {};
            ! function() {
              const e = self.navigator.userAgent.toLowerCase(),
                t = /(edge)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(iemobile)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.includes("trident") && /(rv)(?::| )([\w.]+)/.exec(e) || !e.includes("compatible") && /(firefox)[ \/]([\w.]+)/.exec(e) || [],
                i = /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(android)/.exec(e) || /(windows)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || [],
                n = {
                  browser: t[5] || t[3] || t[1] || "",
                  version: t[2] || t[4] || "0",
                  majorVersion: t[4] || t[2] || "0",
                  platform: i[0] || ""
                },
                r = {};
              if (n.browser) {
                r[n.browser] = !0;
                const e = n.majorVersion.split(".");
                r.version = {
                  major: parseInt(n.majorVersion, 10),
                  string: n.version
                }, e.length > 1 && (r.version.minor = parseInt(e[1], 10)), e.length > 2 && (r.version.build = parseInt(e[2], 10))
              }
              if (n.platform && (r[n.platform] = !0), (r.chrome || r.opr || r.safari) && (r.webkit = !0), r.rv || r.iemobile) {
                r.rv && delete r.rv;
                const e = "msie";
                n.browser = e, r[e] = !0
              }
              if (r.edge) {
                delete r.edge;
                const e = "msedge";
                n.browser = e, r[e] = !0
              }
              if (r.opr) {
                const e = "opera";
                n.browser = e, r[e] = !0
              }
              if (r.safari && r.android) {
                const e = "android";
                n.browser = e, r[e] = !0
              }
              r.name = n.browser, r.platform = n.platform;
              for (const e in s) Object.prototype.hasOwnProperty.call(s, e) && delete s[e];
              Object.assign(s, r)
            }();
            const n = s
          },
          411: (e, t, i) => {
            i.d(t, {
              OC: () => r,
              OZ: () => s,
              do: () => a,
              rT: () => n
            });
            class s {
              constructor(e) {
                this.name = "RuntimeException", this._message = e
              }
              get message() {
                return this._message
              }
              toString() {
                return this.name + ": " + this.message
              }
            }
            class n extends s {
              constructor(e) {
                super(e), this.name = "IllegalStateException"
              }
            }
            class r extends s {
              constructor(e) {
                super(e), this.name = "InvalidArgumentException"
              }
            }
            class a extends s {
              constructor(e) {
                super(e), this.name = "NotImplementedException"
              }
            }
          },
          645: (e, t, i) => {
            i.d(t, {
              Z: () => r
            });
            var s = i(99);
            class n {
              static e(e, t) {
                var i;
                e && !n.FORCE_GLOBAL_TAG || (e = n.GLOBAL_TAG);
                const s = `[${e}] > ${t}`;
                n.ENABLE_CALLBACK && (null === (i = n.emitter) || void 0 === i || i.emit("log", "error", s))
              }
              static i(e, t) {
                e && !n.FORCE_GLOBAL_TAG || (e = n.GLOBAL_TAG);
                const i = `[${e}] > ${t}`;
                n.ENABLE_CALLBACK && n.emitter.emit("log", "info", i)
              }
              static w(e, t) {
                e && !n.FORCE_GLOBAL_TAG || (e = n.GLOBAL_TAG);
                const i = `[${e}] > ${t}`;
                n.ENABLE_CALLBACK && n.emitter.emit("log", "warn", i)
              }
              static d(e, t) {
                var i;
                e && !n.FORCE_GLOBAL_TAG || (e = n.GLOBAL_TAG);
                const s = `[${e}] > ${t}`;
                n.ENABLE_CALLBACK && (null === (i = n.emitter) || void 0 === i || i.emit("log", "debug", s))
              }
              static v(e, t) {
                var i;
                e && !n.FORCE_GLOBAL_TAG || (e = n.GLOBAL_TAG);
                const s = `[${e}] > ${t}`;
                n.ENABLE_CALLBACK && (null === (i = n.emitter) || void 0 === i || i.emit("log", "verbose", s))
              }
            }
            n.FORCE_GLOBAL_TAG = !1, n.GLOBAL_TAG = "rsl-flv", n.ENABLE_CALLBACK = !1, n.emitter = new s.EventEmitter, n.ENABLE_ERROR = !0, n.ENABLE_INFO = !0, n.ENABLE_WARN = !0, n.ENABLE_DEBUG = !0, n.ENABLE_VERBOSE = !0;
            const r = n
          },
          278: (e, t, i) => {
            i.d(t, {
              Z: () => a
            });
            var s = i(99),
              n = i(645);
            class r {
              static get forceGlobalTag() {
                return n.Z.FORCE_GLOBAL_TAG
              }
              static set forceGlobalTag(e) {
                n.Z.FORCE_GLOBAL_TAG = e, r._notifyChange()
              }
              static get globalTag() {
                return n.Z.GLOBAL_TAG
              }
              static set globalTag(e) {
                n.Z.GLOBAL_TAG = e, r._notifyChange()
              }
              static get enableAll() {
                return n.Z.ENABLE_VERBOSE && n.Z.ENABLE_DEBUG && n.Z.ENABLE_INFO && n.Z.ENABLE_WARN && n.Z.ENABLE_ERROR
              }
              static set enableAll(e) {
                n.Z.ENABLE_VERBOSE = e, n.Z.ENABLE_DEBUG = e, n.Z.ENABLE_INFO = e, n.Z.ENABLE_WARN = e, n.Z.ENABLE_ERROR = e, r._notifyChange()
              }
              static get enableDebug() {
                return n.Z.ENABLE_DEBUG
              }
              static set enableDebug(e) {
                n.Z.ENABLE_DEBUG = e, r._notifyChange()
              }
              static get enableVerbose() {
                return n.Z.ENABLE_VERBOSE
              }
              static set enableVerbose(e) {
                n.Z.ENABLE_VERBOSE = e, r._notifyChange()
              }
              static get enableInfo() {
                return n.Z.ENABLE_INFO
              }
              static set enableInfo(e) {
                n.Z.ENABLE_INFO = e, r._notifyChange()
              }
              static get enableWarn() {
                return n.Z.ENABLE_WARN
              }
              static set enableWarn(e) {
                n.Z.ENABLE_WARN = e, r._notifyChange()
              }
              static get enableError() {
                return n.Z.ENABLE_ERROR
              }
              static set enableError(e) {
                n.Z.ENABLE_ERROR = e, r._notifyChange()
              }
              static getConfig() {
                return {
                  globalTag: n.Z.GLOBAL_TAG,
                  forceGlobalTag: n.Z.FORCE_GLOBAL_TAG,
                  enableVerbose: n.Z.ENABLE_VERBOSE,
                  enableDebug: n.Z.ENABLE_DEBUG,
                  enableInfo: n.Z.ENABLE_INFO,
                  enableWarn: n.Z.ENABLE_WARN,
                  enableError: n.Z.ENABLE_ERROR,
                  enableCallback: n.Z.ENABLE_CALLBACK
                }
              }
              static applyConfig(e) {
                n.Z.GLOBAL_TAG = e.globalTag, n.Z.FORCE_GLOBAL_TAG = e.forceGlobalTag, n.Z.ENABLE_VERBOSE = e.enableVerbose, n.Z.ENABLE_DEBUG = e.enableDebug, n.Z.ENABLE_INFO = e.enableInfo, n.Z.ENABLE_WARN = e.enableWarn, n.Z.ENABLE_ERROR = e.enableError, n.Z.ENABLE_CALLBACK = !!e.enableCallback
              }
              static _notifyChange() {
                const e = r.emitter;
                if (e.listenerCount("change") > 0) {
                  const t = r.getConfig();
                  e.emit("change", t)
                }
              }
              static registerListener(e) {
                r.emitter.addListener("change", e)
              }
              static removeListener(e) {
                r.emitter.removeListener("change", e)
              }
              static addLogListener(e) {
                n.Z.emitter.addListener("log", e), n.Z.emitter.listenerCount("log") > 0 && (n.Z.ENABLE_CALLBACK = !0, r._notifyChange())
              }
              static removeLogListener(e) {
                n.Z.emitter.removeListener("log", e), 0 === n.Z.emitter.listenerCount("log") && (n.Z.ENABLE_CALLBACK = !1, r._notifyChange())
              }
            }
            r.emitter = new s.EventEmitter;
            const a = r
          }
        },
        t = {};

      function i(s) {
        var n = t[s];
        if (void 0 !== n) return n.exports;
        var r = t[s] = {
          exports: {}
        };
        return e[s](r, r.exports, i), r.exports
      }
      return i.m = e, i.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return i.d(t, {
          a: t
        }), t
      }, i.d = (e, t) => {
        for (var s in t) i.o(t, s) && !i.o(e, s) && Object.defineProperty(e, s, {
          enumerable: !0,
          get: t[s]
        })
      }, i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), i(607)
    })()))
  }(zt);
  var jt = zt.exports;
  class qt extends ae {
    constructor(e) {
      super(), this.player = e;
      const t = document.createElement("video"),
        i = document.createElement("canvas");
      this.$posterElement = document.createElement("img"), t.volume = 0, t.oncontextmenu = e => {
        e.preventDefault()
      }, this.player._opt.hasAudio || (t.muted = !0), t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", this._delayPlay = !1, e.$container.appendChild(t), this.videoInfo = {
        width: "",
        height: "",
        encType: ""
      }, this.$videoElement = t, this.$canvasElement = i, this.canvasContext = i.getContext("2d"), this.fixChromeVideoFlashBug(), this.resize();
      const {
        proxy: s
      } = this.player.events;
      s(this.$videoElement, "canplay", (() => {
        this.player.debug.log("Video", `canplay and _delayPlay is ${this._delayPlay}`), this._delayPlay && this._play(), this.player.$container.contains(this.$posterElement) && this.$posterElement && this.player.$container.removeChild(this.$posterElement)
      })), s(this.$videoElement, "waiting", (() => {
        this.player.emit(B.videoWaiting)
      })), s(this.$videoElement, "timeupdate", (e => {
        const t = parseInt(e.timeStamp, 10);
        this.player.emit(B.timeUpdate, t), !this.isPlaying() && this.init && (this.player.debug.log("Video", "timeupdate and this.isPlaying is false and retry play"), this.$videoElement.play())
      })), this.player.debug.log("Video", "init")
    }
    destroy() {
      super.destroy(), this.$canvasElement = null, this.canvasContext = null, this.$videoElement && (this.$videoElement.pause(), this.$videoElement.currentTime = 0, this.$videoElement.src = "", this.$videoElement.removeAttribute("src"), this.$videoElement = null), this.trackGenerator && (this.trackGenerator.stop(), this.trackGenerator = null), this.vwriter && (this.vwriter.close(), this.vwriter = null), this.player.$container.contains(this.$posterElement) && this.$posterElement && this.player.$container.removeChild(this.$posterElement), this.player.debug.log("Video", "destroy")
    }
    fixChromeVideoFlashBug() {
      const e = function() {
        const e = navigator.userAgent.toLowerCase(),
          t = {},
          i = {
            IE: window.ActiveXObject || "ActiveXObject" in window,
            Chrome: e.indexOf("chrome") > -1 && e.indexOf("safari") > -1,
            Firefox: e.indexOf("firefox") > -1,
            Opera: e.indexOf("opera") > -1,
            Safari: e.indexOf("safari") > -1 && -1 === e.indexOf("chrome"),
            Edge: e.indexOf("edge") > -1,
            QQBrowser: /qqbrowser/.test(e),
            WeixinBrowser: /MicroMessenger/i.test(e)
          };
        for (let s in i)
          if (i[s]) {
            let i = "";
            if ("IE" === s) i = e.match(/(msie\s|trident.*rv:)([\w.]+)/)[2];
            else if ("Chrome" === s) {
              for (const e in navigator.mimeTypes) "application/360softmgrplugin" === navigator.mimeTypes[e].type && (s = "360");
              i = e.match(/chrome\/([\d.]+)/)[1]
            } else "Firefox" === s ? i = e.match(/firefox\/([\d.]+)/)[1] : "Opera" === s ? i = e.match(/opera\/([\d.]+)/)[1] : "Safari" === s ? i = e.match(/version\/([\d.]+)/)[1] : "Edge" === s ? i = e.match(/edge\/([\d.]+)/)[1] : "QQBrowser" === s && (i = e.match(/qqbrowser\/([\d.]+)/)[1]);
            t.type = s, t.version = parseInt(i)
          } return t
      }().type.toLowerCase();
      if ("chrome" === e || "edge" === e) {
        this.player.$container.style.backdropFilter = "blur(0px)"
      }
    }
    play() {
      if (this.$videoElement) {
        const e = this._getVideoReadyState();
        if (this.player.debug.log("Video", `play and readyState: ${e}`), 0 === e) return this.player.debug.warn("Video", "readyState is 0 and set _delayPlay to true"), void(this._delayPlay = !0);
        this._play()
      }
    }
    _getVideoReadyState() {
      let e = 0;
      return this.$videoElement && (e = this.$videoElement.readyState), e
    }
    _play() {
      this.$videoElement && this.$videoElement.play().then((() => {
        this._delayPlay = !1, this.player.debug.log("Video", "_play success"), setTimeout((() => {
          this.isPlaying() || (this.player.debug.warn("Video", "play failed and retry play"), this._play())
        }), 100)
      })).catch((e => {
        this.player.debug.error("Video", "_play error", e)
      }))
    }
    pause(e) {
      this._poster(), e ? this.$videoElement && this.$videoElement.pause() : setTimeout((() => {
        this.$videoElement && this.$videoElement.pause()
      }), 100)
    }
    clearView() {}
    screenshot(e, t, i, s) {
      var n;
      e = e || Y() + "", s = s || M.download, t = t || "png";
      const r = {
        png: "image/png",
        jpeg: "image/jpeg",
        webp: "image/webp"
      };
      "number" != typeof i && (i = Number(i || .92));
      const a = this.$videoElement,
        o = this.$canvasElement;
      o.width = a.videoWidth, o.height = a.videoHeight, null === (n = this.canvasContext) || void 0 === n || n.drawImage(a, 0, 0, o.width, o.height);
      const d = o.toDataURL(r[t] || r.png, i);
      if (setTimeout((() => {
          var e;
          null === (e = this.canvasContext) || void 0 === e || e.clearRect(0, 0, o.width, o.height), o.width = 0, o.height = 0
        }), 10), s === M.base64) return d; {
        const t = q(d);
        if (s === M.blob) return t;
        s === M.download && ue(t, e)
      }
    }
    initCanvasViewSize() {
      this.resize()
    }
    _poster() {
      const e = this.screenshot("poster", "png", .75, M.base64);
      e.length < 10 || (this.$posterElement.src = e, this.$posterElement.style.position = "absolute", this.$posterElement.style.top = "0px", this.$posterElement.style.left = "0px", this.$posterElement.style.zIndex = "1", this.$posterElement.style.objectFit = "contain", this.$posterElement.style.pointerEvents = "none", this.player.$container.appendChild(this.$posterElement), this.resize())
    }
    render(e) {
      this.vwriter && this.vwriter.write(e.videoFrame)
    }
    resize() {
      this._resizeElement(this.$videoElement), this._resizeElement(this.$posterElement)
    }
    _resizeElement(e) {
      const t = this.player.width,
        i = this.player.height,
        s = this.player._opt,
        n = s.rotate;
      e.width = t, e.height = i, 270 !== n && 90 !== n || (e.width = i, e.height = t);
      const r = (t - e.width) / 2,
        a = (i - e.height) / 2;
      let o = "contain";
      s.scaleMode === F.full && (o = "fill"), s.scaleMode === F.fullAuto && (o = "cover"), e.style.objectFit = o, e.style.transform = "rotate(" + n + "deg)", e.style.left = r + "px", e.style.top = a + "px"
    }
    isPlaying() {
      return this.$videoElement && !this.$videoElement.paused
    }
  }
  class Yt extends Ie {
    constructor(e, t) {
      super(e, t, qt), this._checkHeartTimeout = null, this._opt.useMSE = !0, this._createPlayer(t)
    }
    close() {
      throw new Error("Method not implemented.")
    }
    _createPlayer(e) {
      var t;
      this._opt = Object.assign({}, this._opt, e), this.events || (this.events = new Be(this)), this.video || (this.video = new qt(this)), null === (t = jt.LoggingControl) || void 0 === t || t.applyConfig({
        globalTag: "EzuikitFlv",
        enableVerbose: !!this._opt.debug,
        enableDebug: !!this._opt.debug,
        enableInfo: !!this._opt.debug,
        enableWarn: !!this._opt.debug,
        enableError: !0
      }), this.player = jt.createPlayer({
        type: "flv",
        url: e.url,
        isLive: !0
      }, {
        stashInitialSize: 128,
        enableWorker: !0,
        liveBufferLatencyChasing: !0
      }), this.player.attachMediaElement(this.video.$videoElement), this.loaded = !0, this._flvEvents()
    }
    _flvEvents() {
      this.player && (this.player.on(jt.Events.ERROR, ((e, t, i) => {
        "MediaError" === e && "MediaMSEError" === t && 9 === i.code && this.emit(I.mediaSourceH265NotSupport, i), e.indexOf("NetworkError") > -1 && this.player && this.pause().then((() => {
          this.emit(B.timeout, B.delayTimeout), this.emit(B.delayTimeout)
        })), Qt.report(51, {
          event: e,
          value: i
        }), this.debug.error(`${jt.Events.ERROR}`, e, t, i)
      })), this.player.on(jt.Events.LOADING_COMPLETE, (e => {
        this.debug.log(`${jt.Events.LOADING_COMPLETE}`, e)
      })), this.player.on(jt.Events.RECOVERED_EARLY_EOF, (e => {
        this.debug.log(`${jt.Events.RECOVERED_EARLY_EOF}`, e)
      })), this.player.on(jt.Events.MEDIA_INFO, (e => {
        this.video.updateVideoInfo({
          encTypeCode: (null == e ? void 0 : e.videoCodec.indexOf("avc")) >= 0 ? 7 : 12,
          width: e.width,
          height: e.height
        })
      })), this.player.on(jt.Events.STATISTICS_INFO, (e => {
        e.decodedFrames === this._decodedFrames && null === this._checkHeartTimeout ? this.checkHeartTimeout() : e.decodedFrames !== this._decodedFrames && (this.clearCheckHeartTimeout(), this._decodedFrames = e.decodedFrames)
      })), this.player.on(jt.Events.DESTROYING, (e => {
        this.debug.log(`${jt.Events.DESTROYING}`, e)
      })), this.off(B.videoWaiting), this.off(B.timeUpdate), this.on(B.videoWaiting, (() => {
        this.clearCheckHeartTimeout(), null === this._checkHeartTimeout && this.handleRender()
      })), this.on(B.timeUpdate, (() => {
        this.clearCheckHeartTimeout()
      })))
    }
    getOption() {
      return this._opt
    }
    emitError(e, t = "") {
      this.emit(B.error, e, t), this.emit(e, t)
    }
    destroy() {
      this.player && this.playing && this.player.pause(), this.player && (this.player.unload(), this.player.detachMediaElement(), this.player.destroy(), this.player = null), this._loading = !1, this._playing = !1, this._hasLoaded = !1, this._lastVolume = null, this._times = {
        playInitStart: "",
        playStart: "",
        streamStart: "",
        streamResponse: "",
        demuxStart: "",
        decodeStart: "",
        videoStart: "",
        playTimestamp: "",
        streamTimestamp: "",
        streamResponseTimestamp: "",
        demuxTimestamp: "",
        decodeTimestamp: "",
        videoTimestamp: "",
        allTimestamp: ""
      }, this.video && (this.video.destroy(), this.video = null), this.events && (this.events.destroy(), this.events = null), this.resetStats(), this._audioTimestamp = 0, this._videoTimestamp = 0, this.emit("destroy"), this.off(), this.debug.log("play", "destroy end")
    }
    resetStats() {}
    set fullscreen(e) {
      ee() && this._opt.useWebFullScreen ? (this.emit(B.webFullscreen, e), setTimeout((() => {
        this.updateOption({
          rotate: e ? 270 : 0
        }), this.resize()
      }), 10)) : this.emit(B.fullscreen, e)
    }
    get fullscreen() {
      return te() || this.webFullscreen
    }
    set webFullscreen(e) {
      this.emit(B.webFullscreen, e)
    }
    get webFullscreen() {
      return this.$container.classList.contains("flv-fullscreen-web")
    }
    set loaded(e) {
      this._hasLoaded = e
    }
    get loaded() {
      return this._hasLoaded
    }
    set playing(e) {
      e && (this.loading = !1), this.playing !== e && (this._playing = e, this.emit(B.playing, e), this.emit(B.volumechange, this.volume), e ? this.emit(B.play) : this.emit(B.pause))
    }
    get playing() {
      return this._playing
    }
    get volume() {
      return this.video && this.video.$videoElement.volume || 0
    }
    set volume(e) {
      e !== this.volume && this.video && (this.video.$videoElement.muted = !1, this.video.$videoElement.volume = e, this._lastVolume = e), 0 === e ? this.emit(B.mute, !0) : this.emit(B.mute, !1)
    }
    get lastVolume() {
      return this._lastVolume
    }
    set loading(e) {
      this.loading !== e && (this._loading = e, this.emit(B.loading, this._loading))
    }
    get loading() {
      return this._loading
    }
    set audioTimestamp(e) {
      null !== e && (this._audioTimestamp = e)
    }
    get audioTimestamp() {
      return this._audioTimestamp
    }
    set videoTimestamp(e) {
      null !== e && (this._videoTimestamp = e)
    }
    get videoTimestamp() {
      return this._videoTimestamp
    }
    get isDebug() {
      return !0 === this._opt.debug
    }
    checkHeart() {
      this.clearCheckHeartTimeout(), this.checkHeartTimeout()
    }
    clearCheckHeartTimeout() {
      this._checkHeartTimeout && (clearTimeout(this._checkHeartTimeout), this._checkHeartTimeout = null)
    }
    checkHeartTimeout() {
      this._checkHeartTimeout = setTimeout((() => {
        this.playing && this.pause().then((() => {
          this.emit(B.timeout, B.delayTimeout), this.emit(B.delayTimeout)
        }))
      }), 1e3 * this._opt.heartTimeout)
    }
    checkLoadingTimeout() {
      this._checkLoadingTimeout = setTimeout((() => {
        this.playing || this.pause().then((() => {
          this.emit(B.timeout, B.loadingTimeout), this.emit(B.loadingTimeout)
        }))
      }), 1e3 * this._opt.loadingTimeout)
    }
    handleRender() {
      this.loading && (this.emit(B.start), this.loading = !1, this.clearCheckLoadingTimeout()), this.playing || (this.playing = !0), this.checkHeart()
    }
    clearCheckLoadingTimeout() {
      this._checkLoadingTimeout && (clearTimeout(this._checkLoadingTimeout), this._checkLoadingTimeout = null)
    }
    updateOption(e) {
      var t;
      super.updateOption(e), null === (t = jt.LoggingControl) || void 0 === t || t.applyConfig({
        globalTag: "EzuikitFlv",
        enableVerbose: !!e.debug,
        enableDebug: !!e.debug,
        enableInfo: !!e.debug,
        enableWarn: !!e.debug,
        enableError: !0
      })
    }
    play() {
      return this.player && this.player.playing ? this.pause().then((e => this._play())) : this._play()
    }
    _play() {
      return this._pause && this._createPlayer(this._opt), this.loading = !0, this.playing = !1, this._times.playInitStart = Y(), this.player ? (this.player.load(), this.clearCheckHeartTimeout(), new Promise(((e, t) => {
        this.player.play().then((() => {
          this.loading = !1, this.playing = !0, this._opt.isNotMute && this.mute(!1), e()
        })).catch((e => {
          t(e)
        }))
      }))) : Promise.reject()
    }
    _close() {
      return new Promise((e => {
        this._loading = !1, this._playing = !1, this._hasLoaded = !1, this._lastVolume = null, this._times = {
          playInitStart: "",
          playStart: "",
          streamStart: "",
          streamResponse: "",
          demuxStart: "",
          decodeStart: "",
          videoStart: "",
          playTimestamp: "",
          streamTimestamp: "",
          streamResponseTimestamp: "",
          demuxTimestamp: "",
          decodeTimestamp: "",
          videoTimestamp: "",
          allTimestamp: ""
        }, this.video && (this.video.resetInit(), this.video.pause(!0)), this.player && (this.player.pause(), this.player.unload(), this._pause = !0, this.loaded = !0), this.resetStats(), this._audioTimestamp = 0, this._videoTimestamp = 0, setTimeout((() => {
          e()
        }), 10)
      }))
    }
    pause() {
      return this._close()
    }
    resumeAudioAfterPause() {}
    mute(e) {
      this.volume = e ? 0 : .5
    }
    resize() {
      this.video.resize()
    }
  }
  class Xt {
    constructor(e, t) {
      this._opt = Object.assign({}, l, t);
      return new(Xt.getLoaderFactory(this._opt.useMSE))(e, this._opt)
    }
    static getLoaderFactory(e) {
      return e ? Yt : Ht
    }
  }
  Qt.initMonitor();
  class Kt extends re {
    constructor(e) {
      super();
      const t = e;
      let i = e.container;
      if ("string" == typeof e.container && (i = document.querySelector(e.container)), !i) throw new Error("Flv need container option");
      if ("CANVAS" === i.nodeName || "VIDEO" === i.nodeName) throw new Error(`Flv container type can not be ${i.nodeName} type`);
      if (!e.url) throw new Error("Flv url is empty");
      if (Qt.url = e.url, t.videoBuffer >= t.heartTimeout) throw new Error(`Flv videoBuffer ${t.videoBuffer}s must be less than heartTimeout ${t.heartTimeout}s`);
      i.classList.add("flv-container"), i.style.position = "relative", delete t.container, t.forceNoOffscreen = !0, se(t.videoBuffer) && (t.videoBuffer = 1e3 * Number(t.videoBuffer)), se(t.timeout) && (ie(t.loadingTimeout) && (t.loadingTimeout = t.timeout), ie(t.heartTimeout) && (t.heartTimeout = t.timeout)), this._opt = t, this.$container = i, this._loadingTimeoutReplayTimes = 0, this._heartTimeoutReplayTimes = 0, this.events = new Be(this), this._initPlayer(i, t)
    }
    destroy() {
      this.events && (this.events.destroy(), this.events = null), this.player && (this.player.destroy(), this.player = null), this.$container = null, this._opt = {}, this._loadingTimeoutReplayTimes = 0, this._heartTimeoutReplayTimes = 0, this.off(), Qt.report(50, {
        name: "destroy"
      })
    }
    _initPlayer(e, t) {
      t.url && (t.url = $t(t.url)), this.player = new Xt(e, t), this._bindEvents()
    }
    _resetPlayer(e = {}) {
      this.player.destroy(), this.player = null, this._opt = Object.assign(this._opt, e), this._initPlayer(this.$container, this._opt)
    }
    _bindEvents() {
      Object.keys(k).forEach((e => {
        this.player.on(k[e], (t => {
          this.emit(e, t)
        }))
      }))
    }
    setDebug(e) {
      this.player.updateOption({
        debug: e
      }), Qt.report(50, {
        name: "setDebug"
      })
    }
    closeSound() {
      this.player && this.player.mute(!0), Qt.report(50, {
        name: "closeSound"
      })
    }
    openSound() {
      this.player && this.player.mute(!1), Qt.report(50, {
        name: "openSound"
      })
    }
    setVolume(e) {
      this.player.volume = e, Qt.report(50, {
        name: "setVolume",
        value: e
      })
    }
    getVolume() {
      return Qt.report(50, {
        name: "getVolume"
      }), this.player.volume
    }
    setTimeout(e) {
      e = Number(e), this.player.updateOption({
        timeout: e,
        loadingTimeout: e,
        heartTimeout: e
      })
    }
    setScaleMode(e) {
      return new Promise(((t, i) => {
        try {
          e = Number(e)
        } catch (e) {
          return void i(e)
        } [F.full, F.auto, F.fullAuto].includes(e) ? (this.player.updateOption({
          scaleMode: e
        }), this.resize(), t(), Qt.report(50, {
          name: "setScaleMode"
        })) : i("scale mode 0 | 1 | 2")
      }))
    }
    pause() {
      return Qt.report(50, {
        name: "pause"
      }), this.player && this.player.pause()
    }
    close() {
      return this._opt.url = "", this._opt.playOptions = {}, this._opt.urlQuery = {}, Qt.report(50, {
        name: "close"
      }), this.player.close()
    }
    clearView() {
      this.player.video.clearView(), Qt.report(50, {
        name: "clearView"
      })
    }
    play(e = {}) {
      e.url && (Qt.url = e.url);
      const t = $t(e.url || this._opt.url);
      return this._opt = Object.assign({}, this._opt, e || {}, {
        url: t
      }), this._opt.urlQuery = Wt(e.url), Qt.report(50, {
        name: "play"
      }), new Promise(((e, t) => {
        if (!this._opt.url) return this.emit(B.error, I.playError), void t("play url is empty");
        this.player && this.player.playing ? (this.clearView(), this.player.play(this._opt).then((() => {
          e()
        })).catch((e => {
          this.player.debug.warn("Flv", "pause ->  play and play error", e), this.player.pause().then((() => {
            t(e)
          }))
        }))) : this._play(this._opt).then((() => {
          e()
        })).catch((e => {
          t(e)
        }))
      }))
    }
    _play(e = {}) {
      return new Promise(((t, i) => {
        const s = 0 === e.url.indexOf("http"),
          n = s ? a : r,
          l = s || -1 !== e.url.indexOf(".flv") || this._opt.isFlv ? o : d;
        this.player.updateOption({
          protocol: n,
          demuxType: l
        }), this.player.once(I.webglAlignmentError, (() => {
          this.pause().then((() => {
            this.player.debug.log("Flv", "webglAlignmentError"), this._resetPlayer({
              openWebglAlignment: !0
            }), this.play(e).then((() => {
              this.player.debug.log("Flv", "webglAlignmentError and play success")
            })).catch((() => {
              this.player.debug.log("Flv", "webglAlignmentError and play error")
            }))
          }))
        })), this.player.once(I.mediaSourceH265NotSupport, (() => {
          this.pause().then((() => {
            this.player._opt.autoWasm && (this.player.debug.log("Flv", "auto wasm [mse-> wasm] reset player and play"), this._resetPlayer({
              useMSE: !1
            }), this.play(e).then((() => {
              this.player.debug.log("Flv", "auto wasm [mse-> wasm] reset player and play success")
            })).catch((() => {
              this.player.debug.log("Flv", "auto wasm [mse-> wasm] reset player and play error")
            })))
          }))
        })), this.player.once(I.mediaSourceFull, (() => {
          this.pause().then((() => {
            this.player.debug.log("Flv", "media source full"), this._resetPlayer(), this.play(e).then((() => {
              this.player.debug.log("Flv", "media source full and reset player and play success")
            })).catch((() => {
              this.player.debug.warn("Flv", "media source full and reset player and play error")
            }))
          }))
        })), this.player.once(I.mediaSourceAppendBufferError, (() => {
          this.pause().then((() => {
            this.player.debug.log("Flv", "media source append buffer error"), this._resetPlayer(), this.play(e).then((() => {
              this.player.debug.log("Flv", "media source append buffer error and reset player and play success")
            })).catch((() => {
              this.player.debug.warn("Flv", "media source append buffer error and reset player and play error")
            }))
          }))
        })), this.player.once(I.mediaSourceBufferListLarge, (() => {
          this.pause().then((() => {
            this.player.debug.log("Flv", "media source buffer list large"), this._resetPlayer(), this.play(e).then((() => {
              this.player.debug.log("Flv", "media source buffer list large and reset player and play success")
            })).catch((() => {
              this.player.debug.warn("Flv", "media source buffer list large and reset player and play error")
            }))
          }))
        })), this.player.once(I.mediaSourceAppendBufferEndTimeout, (() => {
          this.pause().then((() => {
            this.player.debug.log("Flv", "media source append buffer end timeout"), this._resetPlayer(), this.play(e).then((() => {
              this.player.debug.log("Flv", "media source append buffer end timeout and reset player and play success")
            })).catch((() => {
              this.player.debug.warn("Flv", "media source append buffer end timeout and reset player and play error")
            }))
          }))
        })), this.player.once(I.mseSourceBufferError, (() => {
          this.pause().then((() => {
            this.player.debug.log("Flv", "mseSourceBufferError close success")
          }))
        })), this.player.once(I.webcodecsH265NotSupport, (() => {
          this.pause().then((() => {
            this.player._opt.autoWasm && (this.player.debug.log("Flv", "auto wasm [wcs-> wasm] reset player and play"), this._resetPlayer({
              useWCS: !1
            }), this.play(e).then((() => {
              this.player.debug.log("Flv", "auto wasm [wcs-> wasm] reset player and play success")
            })).catch((() => {
              this.player.debug.warn("Flv", "auto wasm [wcs-> wasm] reset player and play error")
            })))
          }))
        })), this.player.once(I.webcodecsWidthOrHeightChange, (() => {
          this.pause().then((() => {
            this.player.debug.log("Flv", "webcodecs Width Or Height Change reset player and play"), this._resetPlayer({
              useWCS: !0
            }), this.play(e).then((() => {
              this.player.debug.log("Flv", "webcodecs Width Or Height Change reset player and play success")
            })).catch((() => {
              this.player.debug.warn("Flv", "webcodecs Width Or Height Change reset player and play error")
            }))
          }))
        })), this.player.once(I.webcodecsDecodeError, (() => {
          this.pause().then((() => {
            this.player._opt.autoWasm && (this.player.debug.log("Flv", "webcodecs decode error reset player and play"), this._resetPlayer({
              useWCS: !1
            }), this.play(e).then((() => {
              this.player.debug.log("Flv", "webcodecs decode error  reset player and play success")
            })).catch((() => {
              this.player.debug.warn("Flv", "webcodecs decode error reset player and play error")
            })))
          }))
        })), this.player.once(I.wasmDecodeError, (() => {
          this.player._opt.wasmDecodeErrorReplay && this.pause().then((() => {
            this.player.debug.log("Flv", "wasm decode error and reset player and play"), this._resetPlayer({
              useWCS: !1
            }), this.play(e).then((() => {
              this.player.debug.log("Flv", "wasm decode error and reset player and play success")
            })).catch((() => {
              this.player.debug.warn("Flv", "wasm decode error and reset player and play error")
            }))
          }))
        })), this.player.once(B.delayTimeout, (() => {
          this.player._opt.heartTimeoutReplay && (this._heartTimeoutReplayTimes < this.player._opt.heartTimeoutReplayTimes || -1 === this.player._opt.heartTimeoutReplayTimes) && (this.player.debug.log("Flv", `delay timeout replay time is ${this._heartTimeoutReplayTimes}`), this._heartTimeoutReplayTimes += 1, this.play(e).then((() => {
            this._heartTimeoutReplayTimes = 0
          })).catch((e => {
            this._heartTimeoutReplayTimes = 0
          })))
        })), this.player.once(B.loadingTimeout, (() => {
          this.player._opt.loadingTimeoutReplay && (this._loadingTimeoutReplayTimes < this.player._opt.loadingTimeoutReplayTimes || -1 === this.player._opt.loadingTimeoutReplayTimes) && (this.player.debug.log("Flv", `loading timeout replay time is ${this._loadingTimeoutReplayTimes}`), this._loadingTimeoutReplayTimes += 1, this.play(e).then((() => {
            this._loadingTimeoutReplayTimes = 0
          })).catch((() => {})))
        })), this.hasLoaded() ? this.player.play(e).then((() => {
          t()
        })).catch((e => {
          this.player && (this.player.debug.warn("Flv", "hasLoaded and play error", e), this.player.pause().then((() => {
            i(e)
          })))
        })) : this.player.once(B.decoderWorkerInit, (() => {
          this.player.play(e).then((() => {
            t()
          })).catch((e => {
            this.player && (this.player.debug.warn("Flv", "decoderWorkerInit and play error", e), this.player.pause().then((() => {
              i(e)
            })))
          }))
        }))
      }))
    }
    resize() {
      this.player.resize(), Qt.report(50, {
        name: "resize"
      })
    }
    setBufferTime(e) {
      e = Number(e), this.player.updateOption({
        videoBuffer: 1e3 * e
      }), this.player.decoderWorker && this.player.decoderWorker.updateWorkConfig({
        key: "videoBuffer",
        value: 1e3 * e
      })
    }
    setRotate(e) {
      Qt.report(50, {
        name: "setRotate",
        value: e
      });
      try {
        e = parseInt(e, 10)
      } catch (e) {
        return Promise.reject("rotate 0 | 90 | 180 | 270")
      }
      const t = [0, 90, 180, 270];
      return new Promise(((i, s) => {
        t.includes(e) ? (this.player.updateOption({
          rotate: e
        }), this.resize(), i()) : s("rotate 0 | 90 | 180 | 270")
      }))
    }
    hasLoaded() {
      return this.player.loaded
    }
    setKeepScreenOn() {
      this.player.updateOption({
        keepScreenOn: !0
      }), Qt.report(50, {
        name: "setKeepScreenOn"
      })
    }
    _setFullscreen(e) {
      const t = !!e;
      this.player.fullscreen !== t && (this.player.fullscreen = t)
    }
    fullScreen() {
      this._setFullscreen(!0), Qt.report(50, {
        name: "fullScreen"
      })
    }
    cancelFullScreen() {
      this._setFullscreen(!1), Qt.report(50, {
        name: "cancelFullScreen"
      })
    }
    getState() {
      return {
        playing: !!this.player && this.player.playing,
        mute: !(this.player && this.player.volume > 0),
        fullscreen: !!this.player && this.player.fullscreen,
        webFullscreen: !!this.player && this.player.webFullscreen,
        loaded: !!this.player && this.player.loaded,
        volume: this.player ? parseFloat(this.player.volume).toFixed(2) : 0,
        isDebug: !!this.player && this.player.isDebug
      }
    }
    getVersion() {
      return Qt.report(50, {
        name: "getVersion"
      }), "1.0.0"
    }
  }
  return e(Kt, "ERROR", I), e(Kt, "TIMEOUT", {
    loadingTimeout: B.loadingTimeout,
    delayTimeout: B.delayTimeout
  }), Kt
}));
