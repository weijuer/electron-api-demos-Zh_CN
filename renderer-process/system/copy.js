const clipboard = require('electron').clipboard

const copyBtn = document.getElementById('copy-to')
const copyInput = document.getElementById('copy-to-input')

copyBtn.addEventListener('click', function () {
  if (copyInput.value !== '') copyInput.value = ''
  copyInput.placeholder = '已复制! 请在这里执行粘贴.'
  clipboard.writeText('Electron 示例!')
})
