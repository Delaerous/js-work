const path = "/users/download/index.html"


const isHtml = path => {
    const requiredExt = ".html";
    const PathExt = path.slice(-5);
    return PathExt == requiredExt
}
      console.log(isHtml(path));