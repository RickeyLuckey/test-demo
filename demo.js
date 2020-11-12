window.onload = function() {
    let box = document.getElementsByClassName('box')[0];
    box.addEventListener('click', () => {
        alert('这是测试代码');
    })
}
console.log('这是dev分支的代码');