#mongodb
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list

sudo apt-get update
sudo apt-get install -y mongodb-org

touch /etc/systemd/system/mongodb.service


echo "[Unit]" >> /etc/systemd/system/mongodb.service

echo "Description=High-performance, schema-free document-oriented database" >> /etc/systemd/system/mongodb.service
echo "After=network.target" >> /etc/systemd/system/mongodb.service

echo "[Service]">> /etc/systemd/system/mongodb.service
echo "User=mongodb" >> /etc/systemd/system/mongodb.service
echo "ExecStart=/usr/bin/mongod --quiet --config /etc/mongod.conf">> /etc/systemd/system/mongodb.service

echo "[Install]" >> /etc/systemd/system/mongodb.service
echo "WantedBy=multi-user.target" >> /etc/systemd/system/mongodb.service

# sudo systemctl unmask mongodb
sudo systemctl start mongodb
sudo systemctl status mongodb
sudo systemctl enable mongodb