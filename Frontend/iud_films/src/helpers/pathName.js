export function getPathName() {
  let pathName = window.location.pathname;
  let type = pathName.slice(1, pathName.length - 1);
  return type;
}
