(function (window, document) {
  'use strict';

  var cfg = window.waConfig || {};

  var CSS = [
    '#wa-btn{',
      'position:fixed;bottom:24px;right:24px;z-index:999998;',
      'width:52px;height:52px;border-radius:50%;background:#14b8a6;',
      'color:#fff;border:none;cursor:pointer;',
      'box-shadow:0 4px 18px rgba(0,0,0,.28);',
      'display:flex;align-items:center;justify-content:center;',
      'transition:transform .2s,background .2s;padding:0;',
    '}',
    '#wa-btn:hover{background:#0d9488;transform:scale(1.07)}',
    '#wa-panel{',
      'position:fixed;top:0;right:-430px;width:410px;height:100vh;',
      'background:#fff;z-index:999999;',
      'box-shadow:-4px 0 28px rgba(0,0,0,.16);',
      'display:flex;flex-direction:column;',
      'transition:right .32s cubic-bezier(.4,0,.2,1);',
      'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;',
      'font-size:13px;color:#1e293b;line-height:1.4;',
    '}',
    '#wa-panel.wa-open{right:0}',
    '#wa-header{',
      'padding:14px 18px;background:#14b8a6;color:#fff;',
      'display:flex;align-items:center;justify-content:space-between;flex-shrink:0;',
    '}',
    '#wa-header h2{margin:0;font-size:15px;font-weight:700;letter-spacing:-.2px}',
    '#wa-close{',
      'background:none;border:none;color:#fff;cursor:pointer;',
      'font-size:20px;line-height:1;padding:0 0 0 8px;opacity:.75;',
    '}',
    '#wa-close:hover{opacity:1}',
    '#wa-url-bar{',
      'padding:10px 18px;background:#f1f5f9;border-bottom:1px solid #e2e8f0;flex-shrink:0;',
    '}',
    '#wa-url-bar label{display:block;font-size:11px;font-weight:600;color:#64748b;margin-bottom:4px;text-transform:uppercase;letter-spacing:.4px}',
    '#wa-url-input{',
      'width:100%;box-sizing:border-box;',
      'border:1px solid #cbd5e1;border-radius:6px;',
      'padding:7px 10px;font-size:12px;',
      'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;',
      'color:#1e293b;background:#fff;outline:none;',
    '}',
    '#wa-url-input:focus{border-color:#14b8a6;box-shadow:0 0 0 3px rgba(20,184,166,.15)}',
    '#wa-score-bar{',
      'padding:14px 18px;background:#f8fafc;border-bottom:1px solid #e2e8f0;',
      'display:flex;align-items:center;gap:14px;flex-shrink:0;',
    '}',
    '.wa-score-circle{',
      'width:54px;height:54px;border-radius:50%;',
      'display:flex;align-items:center;justify-content:center;',
      'font-size:20px;font-weight:800;color:#fff;flex-shrink:0;',
    '}',
    '.wa-score-circle.good{background:#22c55e}',
    '.wa-score-circle.warn{background:#f59e0b}',
    '.wa-score-circle.bad{background:#ef4444}',
    '.wa-score-circle.neutral{background:#94a3b8}',
    '.wa-overall-info{flex:1;min-width:0}',
    '.wa-overall-info strong{display:block;font-size:13px;font-weight:700;margin-bottom:2px}',
    '.wa-overall-info span{color:#64748b;font-size:11.5px}',
    '#wa-run-btn{',
      'padding:7px 13px;background:#14b8a6;color:#fff;border:none;',
      'border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;',
      'white-space:nowrap;flex-shrink:0;',
    '}',
    '#wa-run-btn:hover{background:#0d9488}',
    '#wa-run-btn:disabled{opacity:.55;cursor:default}',
    '#wa-body{overflow-y:auto;flex:1;padding:8px 0}',
    '.wa-section{margin-bottom:2px}',
    '.wa-section-header{',
      'display:flex;align-items:center;gap:8px;',
      'padding:10px 18px;cursor:pointer;user-select:none;',
      'border-left:3px solid transparent;',
    '}',
    '.wa-section-header:hover{background:#f1f5f9}',
    '.wa-section-header.good{border-color:#22c55e}',
    '.wa-section-header.warn{border-color:#f59e0b}',
    '.wa-section-header.bad{border-color:#ef4444}',
    '.wa-section-header.neutral{border-color:#94a3b8}',
    '.wa-section-icon{font-size:15px}',
    '.wa-section-name{flex:1;font-weight:600;font-size:13px}',
    '.wa-section-score{',
      'font-size:11px;font-weight:700;padding:2px 8px;',
      'border-radius:12px;color:#fff;',
    '}',
    '.wa-section-score.good{background:#22c55e}',
    '.wa-section-score.warn{background:#f59e0b}',
    '.wa-section-score.bad{background:#ef4444}',
    '.wa-chevron{font-size:9px;color:#94a3b8;transition:transform .2s;margin-left:2px}',
    '.wa-section-header.expanded .wa-chevron{transform:rotate(90deg)}',
    '.wa-section-body{display:none;padding:2px 18px 12px}',
    '.wa-section-body.visible{display:block}',
    '.wa-check{',
      'display:flex;align-items:flex-start;gap:8px;',
      'padding:6px 0;border-bottom:1px solid #f1f5f9;',
    '}',
    '.wa-check:last-child{border-bottom:none}',
    '.wa-check-icon{font-size:13px;flex-shrink:0;margin-top:1px}',
    '.wa-check-text{flex:1;min-width:0}',
    '.wa-check-title{font-weight:600;font-size:12px;color:#1e293b}',
    '.wa-check-detail{color:#64748b;font-size:11.5px;margin-top:1px}',
    '.wa-kw-section-title{',
      'font-weight:700;font-size:11px;color:#475569;text-transform:uppercase;',
      'letter-spacing:.5px;margin:10px 0 5px;',
    '}',
    '.wa-kw-row{',
      'display:flex;align-items:center;gap:6px;',
      'padding:3px 0;border-bottom:1px solid #f8fafc;font-size:12px;',
    '}',
    '.wa-kw-row:last-child{border-bottom:none}',
    '.wa-kw-label{min-width:80px;color:#1e293b;font-weight:500}',
    '.wa-kw-bar-wrap{flex:1;height:6px;background:#f1f5f9;border-radius:3px;overflow:hidden}',
    '.wa-kw-bar{height:100%;border-radius:3px;transition:width .4s ease}',
    '.wa-kw-count{color:#94a3b8;font-size:11px;min-width:22px;text-align:right}',
    '#wa-panel-footer{',
      'padding:9px 18px;border-top:1px solid #e2e8f0;',
      'font-size:10.5px;color:#94a3b8;text-align:center;flex-shrink:0;',
    '}',
    '.wa-spinner{',
      'display:inline-block;width:12px;height:12px;',
      'border:2px solid rgba(255,255,255,.4);border-top-color:#fff;',
      'border-radius:50%;animation:wa-spin .6s linear infinite;',
      'vertical-align:middle;margin-right:5px;',
    '}',
    '@keyframes wa-spin{to{transform:rotate(360deg)}}',
    '@media(max-width:440px){#wa-panel{width:100vw}}',
  ].join('');

  function scoreClass(n) {
    return n >= 80 ? 'good' : n >= 50 ? 'warn' : 'bad';
  }

  function makeChecker(checks, pointsRef) {
    return function check(label, pass, warn, detail, weight) {
      weight = weight || 10;
      pointsRef.total += weight;
      if (pass) pointsRef.earned += weight;
      else if (warn) pointsRef.earned += weight / 2;
      checks.push({
        pass: pass ? 'pass' : warn ? 'warn' : 'fail',
        label: label,
        detail: detail,
      });
    };
  }

  function auditSEO(doc) {
    var checks = [];
    var pts = { earned: 0, total: 0 };
    var check = makeChecker(checks, pts);

    var title = doc.title || '';
    check(
      'Page title',
      title.length >= 10 && title.length <= 60,
      title.length > 0,
      title
        ? '"' + title.slice(0, 55) + (title.length > 55 ? '\u2026' : '') + '" \u2014 ' + title.length + ' chars (ideal 10\u201360)'
        : 'No <title> tag found \u2014 add a descriptive title'
    );

    var descEl = doc.querySelector('meta[name="description"]');
    var desc = descEl ? descEl.getAttribute('content') || '' : '';
    check(
      'Meta description',
      desc.length >= 50 && desc.length <= 160,
      desc.length > 0,
      desc
        ? desc.length + ' chars (ideal 50\u2013160)'
        : 'No meta description \u2014 add one to improve click-through rate'
    );

    var h1s = doc.querySelectorAll('h1');
    check(
      'Single H1 heading',
      h1s.length === 1,
      false,
      h1s.length === 0
        ? 'No H1 found \u2014 add one main heading'
        : h1s.length > 1
          ? h1s.length + ' H1 tags found \u2014 use exactly one'
          : '"' + h1s[0].textContent.trim().slice(0, 60) + '"'
    );

    var headings = Array.from(doc.querySelectorAll('h1,h2,h3,h4,h5,h6'));
    var hierarchyOk = true;
    var prevLevel = 0;
    for (var i = 0; i < headings.length; i++) {
      var level = parseInt(headings[i].tagName[1], 10);
      if (prevLevel && level > prevLevel + 1) {
        hierarchyOk = false;
        break;
      }
      prevLevel = level;
    }
    check(
      'Heading hierarchy',
      hierarchyOk,
      false,
      hierarchyOk
        ? headings.length + ' heading(s) with correct nesting'
        : 'Heading levels are skipped (e.g. H1 \u2192 H3) \u2014 keep nesting sequential'
    );

    var ogTitle = doc.querySelector('meta[property="og:title"]');
    var ogDesc = doc.querySelector('meta[property="og:description"]');
    var ogImage = doc.querySelector('meta[property="og:image"]');
    var ogCount = [ogTitle, ogDesc, ogImage].filter(Boolean).length;
    var missing = [];
    if (!ogTitle) missing.push('og:title');
    if (!ogDesc) missing.push('og:description');
    if (!ogImage) missing.push('og:image');
    check(
      'Open Graph tags',
      ogCount === 3,
      ogCount >= 1,
      ogCount === 3
        ? 'og:title, og:description, og:image all present'
        : 'Missing: ' + missing.join(', ')
    );

    var twitterCard = doc.querySelector('meta[name="twitter:card"]');
    check(
      'Twitter / X Card',
      !!twitterCard,
      false,
      twitterCard
        ? 'twitter:card = "' + twitterCard.getAttribute('content') + '"'
        : 'No twitter:card meta \u2014 add for better social sharing on X',
      8
    );

    var canonical = doc.querySelector('link[rel="canonical"]');
    check(
      'Canonical URL',
      !!canonical,
      false,
      canonical
        ? (canonical.getAttribute('href') || canonical.href)
        : 'No canonical link \u2014 add <link rel="canonical"> to avoid duplicate content'
    );

    var robotsMeta = doc.querySelector('meta[name="robots"]');
    var robotsContent = robotsMeta ? robotsMeta.getAttribute('content') || '' : '';
    var noindex = /noindex/i.test(robotsContent);
    check(
      'Robots meta',
      !noindex,
      !robotsMeta,
      noindex
        ? '\u26a0 Page is set to noindex \u2014 search engines will skip it'
        : robotsMeta
          ? 'content="' + robotsContent + '"'
          : 'No robots meta (page is indexable by default \u2014 consider adding one)'
    );

    var allImgs = doc.querySelectorAll('img');
    var missingAlt = Array.from(allImgs).filter(function (img) {
      return img.getAttribute('alt') === null;
    });
    check(
      'Image alt attributes',
      missingAlt.length === 0,
      false,
      missingAlt.length === 0
        ? 'All ' + allImgs.length + ' image(s) have alt attributes'
        : missingAlt.length + ' image(s) missing alt text \u2014 hurts SEO & accessibility'
    );

    var jsonLD = doc.querySelectorAll('script[type="application/ld+json"]');
    check(
      'Structured data (Schema.org)',
      jsonLD.length > 0,
      false,
      jsonLD.length > 0
        ? jsonLD.length + ' JSON-LD block(s) found'
        : 'No JSON-LD structured data \u2014 add Schema.org markup for rich results',
      8
    );

    return { score: Math.round((pts.earned / pts.total) * 100), checks: checks };
  }

  function auditAccessibility(doc) {
    var checks = [];
    var pts = { earned: 0, total: 0 };
    var check = makeChecker(checks, pts);

    var htmlLang = doc.documentElement ? doc.documentElement.getAttribute('lang') : null;
    check(
      'Language attribute',
      !!htmlLang && htmlLang.length >= 2,
      false,
      htmlLang ? 'lang="' + htmlLang + '" found on <html>' : 'Missing lang attribute on <html> \u2014 required for screen readers'
    );

    var allImgs = doc.querySelectorAll('img');
    var missingAlt = Array.from(allImgs).filter(function (img) {
      return img.getAttribute('alt') === null;
    });
    check(
      'Image alt text',
      missingAlt.length === 0,
      false,
      missingAlt.length === 0
        ? 'All images have alt attributes'
        : missingAlt.length + ' image(s) missing alt attribute \u2014 screen readers need this'
    );

    var inputs = Array.from(doc.querySelectorAll(
      'input:not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="image"])'
    ));
    var unlabeled = inputs.filter(function (input) {
      var id = input.id;
      return (
        !input.getAttribute('aria-label') &&
        !input.getAttribute('aria-labelledby') &&
        !(id && doc.querySelector('label[for="' + id + '"]')) &&
        !input.closest('label') &&
        !input.getAttribute('placeholder')
      );
    });
    check(
      'Form input labels',
      unlabeled.length === 0,
      false,
      unlabeled.length === 0
        ? 'All form inputs are labeled'
        : unlabeled.length + ' input(s) without accessible label (aria-label, for=, or wrapping <label>)'
    );

    var btns = Array.from(doc.querySelectorAll('button,[role="button"]'));
    var emptyBtns = btns.filter(function (b) {
      return (
        !b.textContent.trim() &&
        !b.getAttribute('aria-label') &&
        !b.getAttribute('title') &&
        !b.querySelector('img[alt]')
      );
    });
    check(
      'Button accessible labels',
      emptyBtns.length === 0,
      false,
      emptyBtns.length === 0
        ? 'All ' + btns.length + ' button(s) have accessible text'
        : emptyBtns.length + ' button(s) with no text or aria-label (invisible to screen readers)'
    );

    var hasMain = !!(doc.querySelector('main') || doc.querySelector('[role="main"]'));
    var hasNav = !!(doc.querySelector('nav') || doc.querySelector('[role="navigation"]'));
    check(
      'Landmark regions (main & nav)',
      hasMain && hasNav,
      hasMain || hasNav,
      (hasMain ? '\u2713 <main>' : '\u2717 <main> missing') + '  ' + (hasNav ? '\u2713 <nav>' : '\u2717 <nav> missing')
    );

    var skipLink = doc.querySelector('a[href="#main"],a[href="#content"],a[href="#maincontent"],a[href="#main-content"]');
    check(
      'Skip-to-content link',
      !!skipLink,
      false,
      skipLink
        ? 'Skip link found: href="' + skipLink.getAttribute('href') + '"'
        : 'No skip-to-content link \u2014 important for keyboard-only users',
      8
    );

    var tabindexHigh = Array.from(doc.querySelectorAll('[tabindex]')).filter(function (el) {
      return parseInt(el.getAttribute('tabindex'), 10) > 0;
    });
    check(
      'Tab order (no positive tabindex)',
      tabindexHigh.length === 0,
      false,
      tabindexHigh.length === 0
        ? 'No positive tabindex values found'
        : tabindexHigh.length + ' element(s) use tabindex > 0 \u2014 this disrupts natural keyboard navigation',
      8
    );

    var anchors = Array.from(doc.querySelectorAll('a[href]'));
    var emptyAnchors = anchors.filter(function (a) {
      return !a.textContent.trim() && !a.getAttribute('aria-label') && !a.querySelector('img[alt]');
    });
    check(
      'Link accessible text',
      emptyAnchors.length === 0,
      false,
      emptyAnchors.length === 0
        ? 'All links have accessible text'
        : emptyAnchors.length + ' link(s) with no text or aria-label',
      8
    );

    return { score: Math.round((pts.earned / pts.total) * 100), checks: checks };
  }

  function auditSecurity(doc, pageUrl) {
    var checks = [];
    var pts = { earned: 0, total: 0 };
    var check = makeChecker(checks, pts);

    var protocol = pageUrl ? (pageUrl.indexOf('https://') === 0 ? 'https:' : 'http:') : location.protocol;
    check(
      'HTTPS (secure connection)',
      protocol === 'https:',
      false,
      protocol === 'https:'
        ? 'Page is served over HTTPS'
        : 'Page is served over HTTP \u2014 switch to HTTPS for security and SEO'
    );

    var httpResources = Array.from(doc.querySelectorAll(
      'img[src^="http:"],script[src^="http:"],link[href^="http:"],iframe[src^="http:"]'
    ));
    check(
      'No mixed content',
      httpResources.length === 0,
      false,
      httpResources.length === 0
        ? 'No insecure HTTP resources found'
        : httpResources.length + ' HTTP resource(s) loaded on an HTTPS page \u2014 browsers may block them'
    );

    var blankLinks = Array.from(doc.querySelectorAll('a[target="_blank"]'));
    var unsafeLinks = blankLinks.filter(function (a) {
      var rel = a.getAttribute('rel') || '';
      return !rel.includes('noopener') && !rel.includes('noreferrer');
    });
    check(
      'External link safety (noopener)',
      unsafeLinks.length === 0,
      unsafeLinks.length <= 3,
      unsafeLinks.length === 0
        ? 'All target="_blank" links have rel="noopener"'
        : unsafeLinks.length + ' link(s) missing rel="noopener noreferrer" \u2014 potential tab-napping risk'
    );

    var iframes = doc.querySelectorAll('iframe');
    var unsandboxed = Array.from(iframes).filter(function (f) {
      return !f.getAttribute('sandbox');
    });
    check(
      'Iframe sandboxing',
      unsandboxed.length === 0,
      false,
      unsandboxed.length === 0
        ? 'All iframes sandboxed (or no iframes present)'
        : unsandboxed.length + ' iframe(s) without sandbox attribute'
    );

    var forms = Array.from(doc.querySelectorAll('form'));
    var pwdOverGet = forms.filter(function (f) {
      var method = (f.getAttribute('method') || 'get').toLowerCase();
      return method === 'get' && f.querySelector('input[type="password"]');
    });
    check(
      'Password forms use POST',
      pwdOverGet.length === 0,
      false,
      pwdOverGet.length === 0
        ? 'No password forms using GET method'
        : pwdOverGet.length + ' password form(s) using GET \u2014 passwords appear in URL!',
      12
    );

    var pwdInputs = Array.from(doc.querySelectorAll('input[type="password"]'));
    var noAutoComplete = pwdInputs.filter(function (i) {
      return i.getAttribute('autocomplete') === 'off' || i.getAttribute('autocomplete') === null;
    });
    if (pwdInputs.length > 0) {
      check(
        'Autocomplete on password fields',
        noAutoComplete.length === 0,
        false,
        noAutoComplete.length === 0
          ? 'Password fields have autocomplete set'
          : 'Consider autocomplete="current-password" or "new-password" on password fields',
        6
      );
    }

    return { score: Math.round((pts.earned / pts.total) * 100), checks: checks };
  }

  function auditKeywords(doc) {
    var STOP = new Set((
      'a an the and or but in on at to for of with by from is are was were be been ' +
      'being have has had do does did will would could should may might must shall ' +
      'can just that this these those it its not s t ve re ll d m i we you he she ' +
      'they them their our your his her its we us our also get got go going make ' +
      'made more most some any all about than into up out over when if then so as ' +
      'what which who how there here where'
    ).split(' '));

    var body = doc.body;
    if (!body) {
      return { score: null, checks: [{ pass: 'warn', label: 'Content', detail: 'No body content to analyze' }], keywords: [], phrases: [], maxCount: 1 };
    }

    var clone = body.cloneNode(true);
    var remove = clone.querySelectorAll('script,style,noscript,#wa-panel,#wa-btn');
    for (var i = 0; i < remove.length; i++) {
      remove[i].parentNode.removeChild(remove[i]);
    }

    var rawText = (clone.innerText || clone.textContent || '').toLowerCase();
    var text = rawText
      .replace(/[^a-z0-9\s\-']/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    var allWords = text.split(/\s+/).filter(function (w) {
      return w.length > 2 && !STOP.has(w) && !/^\d+$/.test(w) && !/^[-']+$/.test(w);
    });

    var uni = {}, bi = {}, tri = {};
    for (var j = 0; j < allWords.length; j++) {
      var w = allWords[j];
      uni[w] = (uni[w] || 0) + 1;
      if (j + 1 < allWords.length) {
        var b = (w + ' ' + allWords[j + 1]).trim();
        bi[b] = (bi[b] || 0) + 1;
      }
      if (j + 2 < allWords.length) {
        var t = (w + ' ' + allWords[j + 1] + ' ' + allWords[j + 2]).trim();
        tri[t] = (tri[t] || 0) + 1;
      }
    }

    function topN(obj, n, minCount) {
      return Object.keys(obj)
        .map(function (k) { return [k, obj[k]]; })
        .filter(function (e) { return e[1] >= (minCount || 1); })
        .sort(function (a, b) { return b[1] - a[1]; })
        .slice(0, n);
    }

    var topWords = topN(uni, 10, 2);
    var topBigrams = topN(bi, 5, 2);
    var topTrigrams = topN(tri, 3, 2);

    var titleText = (doc.title || '').toLowerCase();
    var descEl = doc.querySelector('meta[name="description"]');
    var descText = descEl ? (descEl.getAttribute('content') || '').toLowerCase() : '';

    var top3 = topWords.slice(0, 3).map(function (e) { return e[0]; });
    var inTitle = top3.filter(function (k) { return titleText.includes(k); });
    var inDesc = top3.filter(function (k) { return descText.includes(k); });

    var checks = [];
    checks.push({
      pass: inTitle.length >= Math.min(2, top3.length) ? 'pass' : inTitle.length > 0 ? 'warn' : 'fail',
      label: 'Primary keywords in title',
      detail: inTitle.length > 0
        ? 'Found in title: ' + inTitle.join(', ')
        : 'Top content keywords not found in page title \u2014 add them for better relevance',
    });
    checks.push({
      pass: inDesc.length >= Math.min(2, top3.length) ? 'pass' : inDesc.length > 0 ? 'warn' : 'fail',
      label: 'Primary keywords in meta description',
      detail: inDesc.length > 0
        ? 'Found in description: ' + inDesc.join(', ')
        : 'Top keywords missing from meta description \u2014 include them to improve CTR',
    });
    checks.push({
      pass: topWords.length >= 5 ? 'pass' : topWords.length > 0 ? 'warn' : 'fail',
      label: 'Content depth',
      detail: allWords.length + ' total words, ' + topWords.length + ' distinct keyword candidates',
    });

    var maxCount = topWords.length > 0 ? topWords[0][1] : 1;
    return {
      score: null,
      checks: checks,
      keywords: topWords,
      phrases: topBigrams.concat(topTrigrams).sort(function (a, b) { return b[1] - a[1]; }).slice(0, 7),
      maxCount: maxCount,
    };
  }

  window.waOpenPanel = function () {
    var panel = document.getElementById('wa-panel');
    if (panel) panel.classList.add('wa-open');
  };

  function buildUI() {
    if (document.getElementById('wa-panel')) return;

    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    var panel = document.createElement('div');
    panel.id = 'wa-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Website Audit Panel');
    panel.innerHTML = [
      '<div id="wa-header">',
        '<div><h2>&#9889; Website Audit</h2></div>',
        '<button id="wa-close" aria-label="Close audit panel">&#x2715;</button>',
      '</div>',
      '<div id="wa-url-bar">',
        '<label for="wa-url-input">URL to audit</label>',
        '<input type="url" id="wa-url-input" placeholder="https://" autocomplete="off">',
      '</div>',
      '<div id="wa-score-bar">',
        '<div class="wa-score-circle neutral" id="wa-overall-score">?</div>',
        '<div class="wa-overall-info">',
          '<strong id="wa-overall-label">Ready to audit</strong>',
          '<span id="wa-overall-sub">Enter a website URL to analyze and click Run Audit</span>',
        '</div>',
        '<button id="wa-run-btn">Run Audit</button>',
      '</div>',
      '<div id="wa-body">',
        '<div id="wa-placeholder" style="padding:48px 20px;text-align:center;color:#94a3b8">',
          '<div style="font-size:40px;margin-bottom:14px">&#128269;</div>',
          '<div style="font-weight:700;font-size:14px;color:#475569;margin-bottom:6px">No results yet</div>',
          '<div style="font-size:12px;line-height:1.6">Enter a website URL to analyze,<br>then click <strong>Run Audit</strong>.</div>',
        '</div>',
      '</div>',
      '<div id="wa-panel-footer">Website Audit &bull; Analyzes SEO, Accessibility, Security &amp; Keywords</div>',
    ].join('');
    document.body.appendChild(panel);

    document.getElementById('wa-url-input').value = '';

    document.getElementById('wa-close').addEventListener('click', function () {
      panel.classList.remove('wa-open');
    });

    document.getElementById('wa-run-btn').addEventListener('click', onRunAudit);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') panel.classList.remove('wa-open');
    });
  }

  function normalizeUrl(url) {
    url = (url || '').trim();
    if (url && url.indexOf('http') !== 0) url = 'https://' + url;
    return url;
  }

  function isSameOrigin(url) {
    try {
      var a = document.createElement('a');
      a.href = url;
      return a.hostname === window.location.hostname;
    } catch (e) {
      return false;
    }
  }

  function onRunAudit() {
  var runBtn = document.getElementById('wa-run-btn');
  var urlInput = document.getElementById('wa-url-input');
  var inputUrl = normalizeUrl(urlInput ? urlInput.value : '');

  runBtn.disabled = true;
  runBtn.innerHTML = '<span class="wa-spinner"></span>Auditing\u2026';

  if (!inputUrl) {
    showError('Please enter a website URL to audit.');
    runBtn.disabled = false;
    runBtn.textContent = 'Run Audit';
    return;
  }

  fetchAndAudit(inputUrl, runBtn);
}

  function fetchAndAudit(url, runBtn) {
    if (!cfg.ajaxUrl) {
      showError('Remote URL auditing is not configured. Please contact the site administrator.');
      runBtn.disabled = false;
      runBtn.textContent = 'Re-run Audit';
      return;
    }

    var data = new FormData();
    data.append('action', 'wa_fetch_url');
    data.append('nonce', cfg.nonce || '');
    data.append('url', url);

    fetch(cfg.ajaxUrl, { method: 'POST', body: data })
      .then(function (res) { return res.json(); })
      .then(function (json) {
        if (!json.success) throw new Error(json.data || 'Failed to fetch URL');
        var parser = new DOMParser();
        var doc = parser.parseFromString(json.data, 'text/html');
        runAuditOnDoc(doc, url, true);
      })
      .catch(function (err) {
        showError('Could not fetch "' + url + '": ' + err.message);
        console.error('[WebsiteAudit]', err);
      })
      .finally(function () {
        runBtn.disabled = false;
        runBtn.textContent = 'Re-run Audit';
      });
  }

  function runAuditOnDoc(doc, url, isRemote) {
    var results = {
      seo: auditSEO(doc),
      accessibility: auditAccessibility(doc),
      security: auditSecurity(doc, url),
      keywords: auditKeywords(doc),
    };

    renderResults(results, url, isRemote);
  }

  function showError(msg) {
    var body = document.getElementById('wa-body');
    if (body) {
      body.innerHTML = '<div style="padding:32px 20px;text-align:center;color:#ef4444;font-size:13px">' +
        '<div style="font-size:32px;margin-bottom:10px">&#9888;&#65039;</div>' +
        '<div>' + msg + '</div></div>';
    }
  }

  function renderResults(results, auditedUrl, isRemote) {
    var sections = [
      { key: 'seo', label: 'SEO', icon: '🔍' },
      { key: 'accessibility', label: 'Accessibility', icon: '♿️' },
      { key: 'security', label: 'Security', icon: '🔒' },
      { key: 'keywords', label: 'Keywords', icon: '🏷️' },
    ];

    var scoredSections = sections.filter(function (s) { return results[s.key].score !== null; });
    var totalScore = scoredSections.reduce(function (sum, s) { return sum + results[s.key].score; }, 0);
    var avg = Math.round(totalScore / scoredSections.length);

    var scoreCircle = document.getElementById('wa-overall-score');
    scoreCircle.textContent = avg;
    scoreCircle.className = 'wa-score-circle ' + scoreClass(avg);

    var allChecks = sections.reduce(function (acc, s) { return acc.concat(results[s.key].checks); }, []);
    var passed = allChecks.filter(function (c) { return c.pass === 'pass'; }).length;
    var warned = allChecks.filter(function (c) { return c.pass === 'warn'; }).length;
    var failed = allChecks.filter(function (c) { return c.pass === 'fail'; }).length;

    document.getElementById('wa-overall-label').textContent =
      avg >= 80 ? 'Looking great! Keep it up.' : avg >= 50 ? 'Some improvements needed' : 'Needs attention';
    document.getElementById('wa-overall-sub').textContent =
      passed + ' passed \u00b7 ' + warned + ' warnings \u00b7 ' + failed + ' failed';

    var footer = document.getElementById('wa-panel-footer');
    if (footer && auditedUrl) {
      var shortUrl = auditedUrl.replace(/^https?:\/\//, '').slice(0, 50);
      footer.textContent = 'Audited: ' + shortUrl + (isRemote ? ' (remote)' : '');
    }

    var body = document.getElementById('wa-body');
    body.innerHTML = '';

    sections.forEach(function (sec) {
      var data = results[sec.key];
      var hasScore = data.score !== null;
      var cls = hasScore ? scoreClass(data.score) : 'neutral';

      var checksHTML = data.checks.map(function (c) {
        var icon = c.pass === 'pass' ? '&#9989;' : c.pass === 'warn' ? '&#9888;&#65039;' : '&#10060;';
        return [
          '<div class="wa-check">',
            '<span class="wa-check-icon">' + icon + '</span>',
            '<div class="wa-check-text">',
              '<div class="wa-check-title">' + c.label + '</div>',
              '<div class="wa-check-detail">' + c.detail + '</div>',
            '</div>',
          '</div>',
        ].join('');
      }).join('');

      if (sec.key === 'keywords' && data.keywords && data.keywords.length) {
        var maxC = data.maxCount || 1;
        checksHTML += '<div class="wa-kw-section-title">Top Keywords</div>';
        checksHTML += data.keywords.map(function (entry) {
          var word = entry[0], count = entry[1];
          var pct = Math.round((count / maxC) * 100);
          return '<div class="wa-kw-row"><span class="wa-kw-label">' + word + '</span><div class="wa-kw-bar-wrap"><div class="wa-kw-bar" style="width:' + pct + '%;background:#14b8a6"></div></div><span class="wa-kw-count">' + count + '</span></div>';
        }).join('');

        if (data.phrases && data.phrases.length) {
          checksHTML += '<div class="wa-kw-section-title" style="margin-top:10px">Top Phrases</div>';
          checksHTML += data.phrases.map(function (entry) {
            var phrase = entry[0], count = entry[1];
            var pct = Math.round((count / maxC) * 100);
            return '<div class="wa-kw-row"><span class="wa-kw-label" style="min-width:120px">' + phrase + '</span><div class="wa-kw-bar-wrap"><div class="wa-kw-bar" style="width:' + pct + '%;background:#a78bfa"></div></div><span class="wa-kw-count">' + count + '</span></div>';
          }).join('');
        }
      }

      var div = document.createElement('div');
      div.className = 'wa-section';
      div.innerHTML = [
        '<div class="wa-section-header ' + cls + '" data-section="' + sec.key + '">',
          '<span class="wa-section-icon">' + sec.icon + '</span>',
          '<span class="wa-section-name">' + sec.label + '</span>',
          hasScore ? '<span class="wa-section-score ' + cls + '">' + data.score + '</span>' : '',
          '<span class="wa-chevron">&#9654;</span>',
        '</div>',
        '<div class="wa-section-body" id="wa-body-' + sec.key + '">' + checksHTML + '</div>',
      ].join('');
      body.appendChild(div);

      var hasProblem = data.checks.some(function (c) { return c.pass !== 'pass'; });
      if (hasProblem) {
        document.getElementById('wa-body-' + sec.key).classList.add('visible');
        div.querySelector('.wa-section-header').classList.add('expanded');
      }
    });

    body.addEventListener('click', function (e) {
      var header = e.target.closest('.wa-section-header');
      if (!header) return;
      var key = header.getAttribute('data-section');
      var bodyEl = document.getElementById('wa-body-' + key);
      if (bodyEl) {
        bodyEl.classList.toggle('visible');
        header.classList.toggle('expanded');
      }
    });
  }

  function bindShortcodeButtons() {
    var triggers = document.querySelectorAll('[data-wa-trigger="open"]');
    for (var i = 0; i < triggers.length; i++) {
      triggers[i].addEventListener('click', function (e) {
        e.preventDefault();
        window.waOpenPanel();
      });
    }
  }

  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        buildUI();
        bindShortcodeButtons();
      });
    } else {
      buildUI();
      bindShortcodeButtons();
    }
  }

  init();

}(window, document));
