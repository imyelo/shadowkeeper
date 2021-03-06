# ShadowKeeper
> a better **sslocal** base on itself and wrapped by nodejs

![](https://duckduckgo.com/i/216c706c.jpg)


## Installation

1. [Install shadowsocks](https://github.com/shadowsocks/shadowsocks/blob/master/README.md#install)
    
    ```
    apt-get install python-pip
    pip install shadowsocks
    ```

2. Install shadowkeeper from npm

    ```
    npm install shadowkeeper -g
    ```


## Usage
```bash
$ shadowkeeper ./gui-config.json

Options
  --ping  Ping servers 
  --help
```

### Launch
1. Create/Download your *gui-config.json* of [Shadowsocks for Windows](https://github.com/shadowsocks/shadowsocks-windows)
2. Launch ShadowKeeper with your *gui-config.json*

    ```
    shadowkeeper ./gui-config.json
    ```

    *The path can be omitted if it's same next time.*

3. Select your server config and local-port
4. Done

### Ping
1. Create/Download your *gui-config.json*
2. Ping servers with your *gui-config.json*

    ```
    shadowkeeper ./gui-config.json --ping
    ```

    *The path can be omitted if it's same next time.*

## License
The MIT License
