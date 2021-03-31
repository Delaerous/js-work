const path = "/users/download/index.html"


const isHtml = pat => {
    const requiredExt = ".html";
    const PathExt = path.slice(-5);
    return PathExt == requiredExt
}
      console.log(isHtml(path));