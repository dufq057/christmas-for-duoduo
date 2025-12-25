// 为朵朵特别定制的祝福语库
const wishesForDuoduo = [
    "🎄 朵朵，圣诞的钟声敲响，愿这个夜晚的星光，都落在你微笑的眼眸里，愿你的世界永远如圣诞童话般美好。",
    "✨ 每一片飘落的雪花，都是我寄给你的思念。朵朵，圣诞快乐，愿你被温暖和爱紧紧包围。",
    "🎁 圣诞树下最大的奇迹，不是礼物，而是这个世界有一个如此美好的你。朵朵，你就是我心中最珍贵的礼物。",
    "🌟 当圣诞灯火点亮夜空，我只想对你说：朵朵，愿你的每一天都如圣诞般充满惊喜与欢乐。",
    "❄️ 雪花是冬天的诗，圣诞是诗中最美的篇章，而朵朵你，是我心中永恒的诗行。",
    "💝 在这个充满魔法的夜晚，愿所有的祝福都奔向你，所有的美好都围绕你。朵朵，圣诞快乐！",
    "🦌 圣诞老人驾着驯鹿送来祝福，而我用心意化作繁星，只为照亮你前行的路。朵朵，愿你永远闪闪发光。",
    "🎶 圣诞歌声飘扬，但最美妙的声音，是你快乐的笑声。朵朵，愿你的笑声伴随每一个圣诞。",
    "🕯️ 烛光摇曳，温暖如初。朵朵，愿这个圣诞带给你无限的温馨和甜蜜的回忆。",
    "🎀 圣诞的丝带系着祝福，圣诞的铃铛摇响快乐。朵朵，愿你的生活如圣诞花环般圆满幸福。",
    "🍎 平安夜的苹果，圣诞节的钟声，都不及你的一声问候让我心动。朵朵，想你在这个浪漫的季节。",
    "🌠 对着圣诞星空许愿：愿朵朵的每一个梦想都能实现，每一个愿望都能成真。",
    "🎄✨ 圣诞树上的每一颗星星，都是我对你的祝福。朵朵，愿你的未来如星光般璀璨。",
    "🎅 圣诞老人问我想要什么礼物，我说：希望朵朵永远快乐。这就是我唯一的圣诞愿望。",
    "❤️ 这个圣诞节，最浪漫的事就是：心里有个人可以想念，而那个人就是你，朵朵。"
];

// DOM元素
const wishTextEl = document.getElementById('wish-text');
const newWishBtn = document.getElementById('new-wish-btn');
const musicBtn = document.getElementById('music-btn');
const snowBtn = document.getElementById('snow-btn');
const bgMusic = document.getElementById('bg-music');
const volumeSlider = document.getElementById('volume-slider');
const musicStatusEl = document.getElementById('music-status');
const currentDateEl = document.getElementById('current-date');
const loadingEl = document.getElementById('loading');
const snowflakesContainer = document.querySelector('.snowflakes-container');

// 全局变量
let isMusicPlaying = false;
let snowflakesCount = 50;
const snowflakeIcons = ['❄️', '✨', '🌟', '💎', '⚪', '🔷'];

// 初始化
function init() {
    // 显示当前日期
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    currentDateEl.textContent = now.toLocaleDateString('zh-CN', options);
    
    // 显示第一条祝福
    showRandomWish();
    
    // 设置音量
    bgMusic.volume = volumeSlider.value / 100;
    
    // 创建雪花
    createSnowflakes(snowflakesCount);
    
    // 隐藏加载动画
    setTimeout(() => {
        loadingEl.style.opacity = '0';
        setTimeout(() => {
            loadingEl.style.display = 'none';
        }, 500);
    }, 1500);
}

// 显示随机祝福
function showRandomWish() {
    const randomIndex = Math.floor(Math.random() * wishesForDuoduo.length);
    const wish = wishesForDuoduo[randomIndex];
    
    // 淡出效果
    wishTextEl.style.opacity = '0';
    
    setTimeout(() => {
        wishTextEl.textContent = wish;
        // 淡入效果
        wishTextEl.style.transition = 'opacity 0.8s ease';
        wishTextEl.style.opacity = '1';
        
        // 添加祝福特效
        addWishEffect();
    }, 300);
}

// 添加祝福特效
function addWishEffect() {
    // 创建特效元素
    for (let i = 0; i < 5; i++) {
        const effect = document.createElement('div');
        effect.className = 'wish-effect';
        effect.innerHTML = '✨';
        effect.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 20 + 15}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: 0;
            animation: floatUp ${Math.random() * 2 + 1}s ease-out forwards;
            z-index: 1;
        `;
        
        document.querySelector('.wish-card').appendChild(effect);
        
        // 动画结束后移除元素
        setTimeout(() => {
            effect.remove();
        }, 2000);
    }
}

// 创建雪花
function createSnowflakes(count) {
    // 清空现有雪花
    snowflakesContainer.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = snowflakeIcons[Math.floor(Math.random() * snowflakeIcons.length)];
        
        // 随机属性
        const size = Math.random() * 20 + 10;
        const startX = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        
        snowflake.style.cssText = `
            left: ${startX}%;
            font-size: ${size}px;
            animation-name: fall;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
        `;
        
        // 添加浮动动画
        snowflake.style.animation = `
            fall ${duration}s linear ${delay}s infinite,
            sway ${Math.random() * 3 + 2}s ease-in-out ${delay}s infinite alternate
        `;
        
        snowflakesContainer.appendChild(snowflake);
    }
}

// 添加浮动动画关键帧
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes sway {
        0%, 100% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(${Math.random() > 0.5 ? '-' : ''}${Math.random() * 50 + 20}px);
        }
    }
    
    @keyframes floatUp {
        0% {
            transform: translateY(0) scale(0.5);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) scale(1.2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(styleSheet);

// 事件监听
newWishBtn.addEventListener('click', showRandomWish);

musicBtn.addEventListener('click', function() {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicBtn.innerHTML = '<i class="fas fa-play"></i> 播放圣诞音乐';
        musicStatusEl.textContent = '音乐已暂停';
        musicBtn.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a52)';
    } else {
        // 解决浏览器自动播放限制
        const playPromise = bgMusic.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                isMusicPlaying = true;
                musicBtn.innerHTML = '<i class="fas fa-pause"></i> 暂停音乐';
                musicStatusEl.textContent = '正在播放：Jingle Bells';
                musicBtn.style.background = 'linear-gradient(135deg, #1dd1a1, #10ac84)';
            }).catch(error => {
                // 如果自动播放被阻止，显示提示
                musicStatusEl.textContent = '请点击播放按钮或页面任意处后重试';
                musicBtn.innerHTML = '<i class="fas fa-exclamation-circle"></i> 点击播放';
            });
        }
    }
    isMusicPlaying = !isMusicPlaying;
});

snowBtn.addEventListener('click', function() {
    snowflakesCount += 20;
    if (snowflakesCount > 200) snowflakesCount = 50; // 重置
    createSnowflakes(snowflakesCount);
    snowBtn.innerHTML = `<i class="fas fa-snowflake"></i> 雪花 x${snowflakesCount}`;
});

volumeSlider.addEventListener('input', function() {
    bgMusic.volume = this.value / 100;
    musicStatusEl.textContent = `音量: ${this.value}%`;
});

// 解决浏览器自动播放策略：用户交互后尝试播放
document.addEventListener('click', function initAudio() {
    if (!isMusicPlaying && bgMusic.paused) {
        bgMusic.play().then(() => {
            bgMusic.pause();
            bgMusic.currentTime = 0;
        }).catch(console.error);
    }
    document.removeEventListener('click', initAudio);
}, { once: true });

// 页面加载完成时初始化
window.addEventListener('load', init);

// 页面可见性变化处理（标签页切换）
document.addEventListener('visibilitychange', function() {
    if (document.hidden && isMusicPlaying) {
        bgMusic.pause();
    } else if (!document.hidden && isMusicPlaying) {
        bgMusic.play().catch(console.error);
    }
});

// 添加键盘快捷键
document.addEventListener('keydown', function(event) {
    // 空格键切换音乐
    if (event.code === 'Space') {
        event.preventDefault();
        musicBtn.click();
    }
    // N键获取新祝福
    else if (event.code === 'KeyN') {
        newWishBtn.click();
    }
    // S键增加雪花
    else if (event.code === 'KeyS') {
        snowBtn.click();
    }
});
