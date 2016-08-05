#!/usr/bin/env node

const Promise = require('bluebird')
const inquirer = require('inquirer')
const fs = Promise.promisifyAll(require('fs'))
const path = require('path')
const spawn = require('child_process').spawn

fs.readFileAsync(__dirname + '/data/config/source.json')
  .then((content) => JSON.parse(content))
  .then((json) => {
    return inquirer.prompt([{
      type: 'list',
      name: 'config',
      message: 'choose your server config',
      choices: json.configs.filter((config) => config.remarks).map((config) => config.remarks),
      default: 'ru-21',
      filter: (remark) => {
        return json.configs.find((config) => config.remarks === remark)
      }
    }, {
      type: 'input',
      name: 'port',
      message: 'type your local port',
      default: (answer) => {
        return answer.config.local_port || json.localPort
      },
      validate: (value) => {
        return /^\d{1,4}$/.test(value) || 'the local port should be a number between 1-9999'
      }
    }]).then((answer) => {
      const config = answer.config
      config.local_port = answer.port
      return config
    })
  })
  .then((config) => {
    console.log(config)
    const proc = spawn('sslocal', [
      '-s', config.server,
      '-p', config.server_port,
      '-k', config.password,
      '-m', config.method,
      '-l', config.local_port
      ])
    proc.stdout.on('data', data => console.log(`stdout: ${data}`))
    proc.stderr.on('data', data => console.log(`stderr: ${data}`))
    proc.on('close', code => console.log(`child process close with ${code}`))
  })