1.树莓派安装docker
curl -fsSL get.docker.com -o get-docker.sh && sh get-docker.sh
2。更换源
sudo nano /etc/docker/daemon.json
--
{
  "registry-mirrors": ["https://registry.docker-cn.com"]
}
--
3。设置开机启动
sudo systemctl enable docker #开机启动
sudo systemctl start docker #启动
4。安装装armhf-hassio-supervisor镜像：
sudo docker pull homeassistant/armhf-hassio-supervisor:latest
5。安装armhf-homeassistant镜像
sudo docker pull homeassistant/armhf-homeassistant:latest
6。运行sudo
sudo docker run -d \
 --name="home-assistant" \
 -v /home/pi/homeassistant:/config \
 -v /etc/localtime:/etc/localtime:ro \
 --net=host \
 --restart=always \
 homeassistant/armhf-homeassistant
 7。查看
 输入IP：8123