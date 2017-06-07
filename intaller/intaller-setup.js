var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: '../',
    outputDirectory: '/resutlt',
    authors: 'Roger Esteve Productions',
    exe: 'Kundarsvarig.exe'
  });
