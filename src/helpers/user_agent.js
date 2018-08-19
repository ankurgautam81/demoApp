export function isMobileBrowser () {
  const testExp = new RegExp(`Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile`,'i');
  return testExp.test(window.navigator.userAgent)
}