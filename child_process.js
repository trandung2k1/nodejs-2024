//! List file inside folder
// const child = spawn('dir', ['D:\\app'], { shell: true });
// child.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
// });

// child.stderr.on('data', (data) => {
//     console.error(`stderr: ${data}`);
// });

// child.on('close', (code) => {
//     console.log(`child process exited with code ${code}`);
// });

const { spawn } = require('child_process');

// const lsProcess = spawn('ls');
// lsProcess.stdout.on('data', (data) => {
//     console.log(`stdout:\n${data}`);
// });
// lsProcess.stderr.on('data', (data) => {
//     console.log(`stdout: ${data}`);
// });
// lsProcess.on('exit', (code) => {
//     console.log(`Process ended with ${code}`);
// });

// Create child process running js
// const jsProcess = spawn('node', ['index.js']);

// jsProcess.stdout.on('data', (data) => {
//   console.log(new Date());
//   console.log(`stdout:\n${data}`);
// });
// jsProcess.stderr.on('data', (data) => {
//   onsole.log(new Date());
//   console.log(`stderr: ${data}`);
// });
// jsProcess.on('exit', (code) => {
//   console.log(`Process ended with ${code}`);
// });

// Create child process running py
const pythonProcess = spawn('py', ['hello.py']);
pythonProcess.stdout.on('data', (data) => {
    console.log(new Date());
    console.log(`stdout:\n${data}`);
});
pythonProcess.stderr.on('data', (data) => {
    console.log(new Date());
    console.log(`stderr: ${data}`);
});
pythonProcess.on('exit', (code) => {
    console.log(`Process ended with ${code}`);
});

// Create child process running go
const goProcess = spawn('./hello.exe');
goProcess.stdout.on('data', (data) => {
    console.log(new Date());
    console.log(`stdout:\n${data}`);
});
goProcess.stderr.on('data', (data) => {
    console.log(new Date());
    console.log(`stderr: ${data}`);
});
goProcess.on('exit', (code) => {
    console.log(`Process ended with ${code}`);
});
