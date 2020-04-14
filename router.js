const deleteHandler = require("./handlers/deleteHandler");
const homeHandler = require("./handlers/homeHandler.js");
const missingHandler = require("./handlers/missingHandler.js");
const publicHandler = require("./handlers/publicHandler.js");
const addRepoHandler = require("./handlers/formPageDisplay.js");
const checkRepoHandler = require("./handlers/checkRepo.js");
const submitPostHandler = require("./handlers/submitPost.js");
const loginGetHandler = require("./handlers/loginGet");
const loginPostHandler = require("./handlers/loginPost");

function router(request, response) {
  const url = request.url;
  const method = request.method;

  if (url === "/" && method === "DELETE") {
    deleteHandler(request, response);
  } else if (url === "/") {
    homeHandler(request, response);
  } else if (url === "/addRepo" && method === "GET") {
    addRepoHandler(request, response);
  } else if (url === "/addRepo/check" && method === "POST") {
    checkRepoHandler(request, response);
  } else if (url === "/submit" && method === "POST") {
    submitPostHandler(request, response);
  } else if (url === "/login" && method === "GET") {
    loginGetHandler(request, response);
  } else if (url === "/login" && method === "POST") {
    loginPostHandler(request, response);
  } else if (url.includes("public")) {
    publicHandler(request, response);
  } else {
    missingHandler(request, response);
  }
}

module.exports = router;

// 0: {id: 244616234, node_id: "MDEwOlJlcG9zaXRvcnkyNDQ2MTYyMzQ=", name: "ChloeHettie-githubrepo", full_name: "fac19/ChloeHettie-githubrepo", private: false, …}
// 1: {id: 244616239, node_id: "MDEwOlJlcG9zaXRvcnkyNDQ2MTYyMzk=", name: "git-workflow-workshop-ako-hannah", full_name: "fac19/git-workflow-workshop-ako-hannah", private: false, …}
// 2: {id: 244616559, node_id: "MDEwOlJlcG9zaXRvcnkyNDQ2MTY1NTk=", name: "git-workshop-joe-vat", full_name: "fac19/git-workshop-joe-vat", private: false, …}
// 3: {id: 244616056, node_id: "MDEwOlJlcG9zaXRvcnkyNDQ2MTYwNTY=", name: "Git_workshop_repo-James-Ivo", full_name: "fac19/Git_workshop_repo-James-Ivo", private: false, …}
// 4: {id: 246554032, node_id: "MDEwOlJlcG9zaXRvcnkyNDY1NTQwMzI=", name: "hjrv-week2", full_name: "fac19/hjrv-week2", private: false, …}
// 5: {id: 244873334, node_id: "MDEwOlJlcG9zaXRvcnkyNDQ4NzMzMzQ=", name: "HTML-form-workshop-Kat-James", full_name: "fac19/HTML-form-workshop-Kat-James", private: false, …}
// 6: {id: 244616246, node_id: "MDEwOlJlcG9zaXRvcnkyNDQ2MTYyNDY=", name: "ina-and-giovanna", full_name: "fac19/ina-and-giovanna", private: false, …}
// 7: {id: 240059226, node_id: "MDEwOlJlcG9zaXRvcnkyNDAwNTkyMjY=", name: "projects-gallery", full_name: "fac19/projects-gallery", private: false, …}
// 8: {id: 240058111, node_id: "MDEwOlJlcG9zaXRvcnkyNDAwNTgxMTE=", name: "research", full_name: "fac19/research", private: false, …}
// 9: {id: 240052111, node_id: "MDEwOlJlcG9zaXRvcnkyNDAwNTIxMTE=", name: "resources", full_name: "fac19/resources", private: false, …}
// 10: {id: 244615736, node_id: "MDEwOlJlcG9zaXRvcnkyNDQ2MTU3MzY=", name: "rogertest", full_name: "fac19/rogertest", private: false, …}
// 11: {id: 240058256, node_id: "MDEwOlJlcG9zaXRvcnkyNDAwNTgyNTY=", name: "student-project-ideas", full_name: "fac19/student-project-ideas", private: false, …}
// 12: {id: 240058555, node_id: "MDEwOlJlcG9zaXRvcnkyNDAwNTg1NTU=", name: "user-manuals", full_name: "fac19/user-manuals", private: false, …}
// 13: {id: 249967735, node_id: "MDEwOlJlcG9zaXRvcnkyNDk5Njc3MzU=", name: "Week-4-GMNO", full_name: "fac19/Week-4-GMNO", private: false, …}
// 14: {id: 244884214, node_id: "MDEwOlJlcG9zaXRvcnkyNDQ4ODQyMTQ=", name: "week1-cica", full_name: "fac19/week1-cica", private: false, …}
// 15: {id: 244916961, node_id: "MDEwOlJlcG9zaXRvcnkyNDQ5MTY5NjE=", name: "week1-guardians", full_name: "fac19/week1-guardians", private: false, …}
// 16: {id: 244885294, node_id: "MDEwOlJlcG9zaXRvcnkyNDQ4ODUyOTQ=", name: "week1-hjrv", full_name: "fac19/week1-hjrv", private: false, …}
// 17: {id: 244885772, node_id: "MDEwOlJlcG9zaXRvcnkyNDQ4ODU3NzI=", name: "week1-hklo", full_name: "fac19/week1-hklo", private: false, …}
// 18: {id: 246567438, node_id: "MDEwOlJlcG9zaXRvcnkyNDY1Njc0Mzg=", name: "week2-cica", full_name: "fac19/week2-cica", private: false, …}
// 19: {id: 246603357, node_id: "MDEwOlJlcG9zaXRvcnkyNDY2MDMzNTc=", name: "week2-guardians", full_name: "fac19/week2-guardians", private: false, …}
// 20: {id: 246561344, node_id: "MDEwOlJlcG9zaXRvcnkyNDY1NjEzNDQ=", name: "week2-hklo", full_name: "fac19/week2-hklo", private: false, …}
// 21: {id: 248215717, node_id: "MDEwOlJlcG9zaXRvcnkyNDgyMTU3MTc=", name: "week3-abeh", full_name: "fac19/week3-abeh", private: false, …}
// 22: {id: 248212579, node_id: "MDEwOlJlcG9zaXRvcnkyNDgyMTI1Nzk=", name: "week3-GMNO", full_name: "fac19/week3-GMNO", private: false, …}
// 23: {id: 248217155, node_id: "MDEwOlJlcG9zaXRvcnkyNDgyMTcxNTU=", name: "week3-harl", full_name: "fac19/week3-harl", private: false, …}
// 24: {id: 248216979, node_id: "MDEwOlJlcG9zaXRvcnkyNDgyMTY5Nzk=", name: "week3-JICG", full_name: "fac19/week3-JICG", private: false, …}
// 25: {id: 249970961, node_id: "MDEwOlJlcG9zaXRvcnkyNDk5NzA5NjE=", name: "week4-abeh", full_name: "fac19/week4-abeh", private: false, …}
// 26: {id: 249975831, node_id: "MDEwOlJlcG9zaXRvcnkyNDk5NzU4MzE=", name: "week4-harl", full_name: "fac19/week4-harl", private: false, …}
// 27: {id: 249969280, node_id: "MDEwOlJlcG9zaXRvcnkyNDk5NjkyODA=", name: "week4-JICG", full_name: "fac19/week4-JICG", private: false, …}
// 28: {id: 252151529, node_id: "MDEwOlJlcG9zaXRvcnkyNTIxNTE1Mjk=", name: "week5-cjhk", full_name: "fac19/week5-cjhk", private: false, …}
// 29: {id: 252149008, node_id: "MDEwOlJlcG9zaXRvcnkyNTIxNDkwMDg=", name: "week5-DGHP", full_name: "fac19/week5-DGHP", private: false, …}
