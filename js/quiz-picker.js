// 随堂练习：题型 / 数量选择
// 依赖页面结构：form#quiz-form 下的 .quiz-question，每题一个 <strong>题目</strong> 和若干 radio
(function () {
  'use strict';

  function stripNumber(html) {
    return html.replace(/^\s*\d+\s*[、.．]\s*/, '');
  }

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  function init() {
    var form = document.getElementById('quiz-form');
    if (!form) return;
    var blocks = Array.prototype.slice.call(form.querySelectorAll('.quiz-question'));
    if (!blocks.length) return;

    // 收集题目信息：2 个选项视为判断题，其余视为选择题
    var all = blocks.map(function (el) {
      var inputs = el.querySelectorAll('input[type="radio"]');
      var strong = el.querySelector('strong');
      return {
        el: el,
        type: inputs.length === 2 ? 'tf' : 'choice',
        strong: strong,
        raw: strong ? strong.innerHTML : ''
      };
    });
    var hasChoice = all.some(function (it) { return it.type === 'choice'; });
    var hasTf = all.some(function (it) { return it.type === 'tf'; });

    // 隐藏原来的"选择题（共6题）/ 判断题（共4题）"分节标题
    Array.prototype.forEach.call(form.querySelectorAll('.card'), function (card) {
      var title = card.querySelector('.card-title');
      if (title && /选择题|判断题|填空题/.test(title.textContent) && !card.querySelector('input')) {
        card.style.display = 'none';
      }
    });

    // 练习设置面板
    var panel = document.createElement('div');
    panel.className = 'card';
    panel.style.cssText = 'margin-bottom:20px;display:flex;flex-wrap:wrap;gap:16px;align-items:center;';
    panel.innerHTML =
      '<div class="card-title" style="margin:0;white-space:nowrap;">🎯 练习设置</div>' +
      '<label style="display:flex;align-items:center;gap:6px;font-size:.9rem;cursor:pointer;">' +
        '<input type="checkbox" id="qp-choice" checked' + (hasChoice ? '' : ' disabled') + '> 选择题</label>' +
      '<label style="display:flex;align-items:center;gap:6px;font-size:.9rem;cursor:pointer;">' +
        '<input type="checkbox" id="qp-tf" checked' + (hasTf ? '' : ' disabled') + '> 判断题</label>' +
      '<label style="display:flex;align-items:center;gap:6px;font-size:.9rem;">数量' +
        '<select id="qp-count" style="padding:4px 8px;border:1px solid var(--border);border-radius:6px;">' +
          '<option value="5">5 题</option>' +
          '<option value="8">8 题</option>' +
          '<option value="10">10 题</option>' +
          '<option value="all" selected>全部</option>' +
        '</select></label>' +
      '<button type="button" class="btn btn-secondary" id="qp-apply" style="padding:6px 16px;">生成练习</button>' +
      '<span id="qp-info" style="font-size:.85rem;color:var(--text-light);"></span>';

    form.insertBefore(panel, blocks[0]);

    var countSel = document.getElementById('qp-count');

    function apply() {
      var wantChoice = document.getElementById('qp-choice').checked;
      var wantTf = document.getElementById('qp-tf').checked;
      if (!wantChoice && !wantTf) {
        document.getElementById('qp-tf').checked = true;
        wantTf = true;
      }

      var pool = all.filter(function (it) {
        return (it.type === 'choice' && wantChoice) || (it.type === 'tf' && wantTf);
      });
      var val = countSel.value;
      var picked;
      if (val === 'all') {
        picked = pool.slice();
      } else {
        picked = shuffle(pool.slice()).slice(0, Math.min(parseInt(val, 10), pool.length));
        picked.sort(function (a, b) { return all.indexOf(a) - all.indexOf(b); });
      }

      all.forEach(function (it) { it.el.style.display = 'none'; });
      picked.forEach(function (it, i) {
        it.el.style.display = '';
        if (it.strong) it.strong.innerHTML = (i + 1) + '、' + stripNumber(it.raw);
      });

      // 清空作答与判分痕迹
      Array.prototype.forEach.call(form.querySelectorAll('.quiz-options label'), function (l) { l.style.background = ''; });
      Array.prototype.forEach.call(form.querySelectorAll('.quiz-options input'), function (input) {
        input.disabled = false;
        input.checked = false;
      });
      var result = document.getElementById('quiz-result');
      if (result) result.style.display = 'none';

      document.getElementById('qp-info').textContent = '本次共 ' + picked.length + ' 题';
    }

    document.getElementById('qp-apply').addEventListener('click', apply);
    countSel.addEventListener('change', apply);

    apply();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
