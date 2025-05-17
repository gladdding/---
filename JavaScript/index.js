window.onload=function(){
    // 改变“联系客服”的CSS样式
    const lx = document.getElementById('lx');
    if (lx) {
        const span1 = lx.querySelector('span');
        const a1 = lx.querySelector('a');
        
        if (span1 && a1) {
            lx.addEventListener('mouseenter', function() {
                a1.style.color = '#ee3350';
                span1.className = 'span3';
            });
            
            lx.addEventListener('mouseleave', function() {
                a1.style.color = '';
                span1.className = '';
            });
        }
    }
    
    // 实现轮播效果
    const bannerPic = document.getElementById('banner_pic');
    const buttonOl = document.getElementById('button');
    
    if (bannerPic && buttonOl) {
        const picDivs = bannerPic.querySelectorAll('div');
        const buttons = buttonOl.querySelectorAll('li');
        let currentIndex = 0;
        let timer;
        
        // 确保轮播按钮数量与图片数量一致
        if (buttons.length < picDivs.length) {
            console.error('轮播按钮数量不足，应为', picDivs.length, '个');
        }
        
        function showPic(index) {
            // 修正索引范围
            index = index % picDivs.length;
            
            picDivs.forEach((div, i) => {
                if (i === index) {
                    div.classList.add('current');
                    div.classList.remove('pic');
                    div.style.opacity = '1';
                } else {
                    div.classList.add('pic');
                    div.classList.remove('current');
                    div.style.opacity = '0';
                }
            });
            
            buttons.forEach((button, i) => {
                if (i === index) {
                    button.classList.add('current');
                    button.classList.remove('but');
                } else {
                    button.classList.add('but');
                    button.classList.remove('current');
                }
            });
            
            currentIndex = index;
        }
        
        function autoChange() {
            currentIndex = (currentIndex + 1) % picDivs.length;
            showPic(currentIndex);
        }
        
        buttons.forEach((button, index) => {
            button.addEventListener('mouseover', function() {
                clearInterval(timer);
                showPic(index);
            });
            
            button.addEventListener('mouseout', function() {
                timer = setInterval(autoChange, 3000);
            });
        });
        
        // 启动自动轮播
        timer = setInterval(autoChange, 3000);
        
        // 初始显示第一张图片
        showPic(0);
    }
}