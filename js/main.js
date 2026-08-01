// 数据结构课程网站 - 公共脚本

document.addEventListener('DOMContentLoaded', function() {
  // 高亮当前导航
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// 章节导航高亮
function highlightSidebar(activeId) {
  document.querySelectorAll('.sidebar-menu a').forEach(link => {
    link.classList.toggle('active', link.dataset.chapter === activeId);
  });
}

// 简单的本地存储进度跟踪
const Progress = {
  get(chapter) {
    try { return JSON.parse(localStorage.getItem('ds_progress') || '{}')[chapter] || 0; }
    catch { return 0; }
  },
  set(chapter, percent) {
    try {
      const data = JSON.parse(localStorage.getItem('ds_progress') || '{}');
      data[chapter] = percent;
      localStorage.setItem('ds_progress', JSON.stringify(data));
    } catch {}
  }
};

// 测试评分
function scoreQuiz(formId, answers) {
  const form = document.getElementById(formId);
  if (!form) return;
  let correct = 0, total = answers.length;
  answers.forEach((ans, idx) => {
    const selected = form.querySelector(`input[name="q${idx}"]:checked`);
    const opts = form.querySelectorAll(`input[name="q${idx}"]`);
    opts.forEach(opt => {
      const label = opt.closest('label');
      if (opt.value === ans) label.style.background = '#d1fae5';
      else if (opt.checked && opt.value !== ans) label.style.background = '#fee2e2';
      opt.disabled = true;
    });
    if (selected && selected.value === ans) correct++;
  });
  const result = document.getElementById('quiz-result');
  if (result) {
    result.innerHTML = `<strong>得分：${correct}/${total}</strong>（正确率 ${Math.round(correct/total*100)}%）`;
    result.style.display = 'block';
  }
  return { correct, total };
}
