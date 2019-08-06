export default function setRem(baseWidth = 750) {
  const dpr = window.devicePixelRatio
  const currentWidth = document.documentElement.clientWidth
  let remSize = 0
  let scale = 0
  scale = currentWidth / baseWidth // 可视化窗口 / 理想视觉窗口
  remSize = baseWidth / 10
  remSize = remSize * scale
  document.documentElement.style.fontSize = remSize + 'px'
  document.documentElement.setAttribute('data-dpr', `${dpr}`)
}
