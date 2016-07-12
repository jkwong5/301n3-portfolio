page('/', indexController.index);
page('/about', aboutController.index);
page('/projects', projectController.index, projectController.loadAll);
page('/repositories', repoController.index);
page('/skills', skillController.index);
page('/learnings', learningController.index);
page('/resume', resumeController.index);

page();
