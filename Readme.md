# Nginx Loadbalancing Demo

This repo is a demo for a simple load balancing scenario using Nginx and two servers.

![Diagram](./assets/diagram.png)

The servers are using express, each have one endpoint that returns the name of the server

Traffic is distributed using the round robing algorithm.

For more info on Nginx load balancing, check the [official documentation](https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/)

To read more about load balancing algorithms, check [this article](https://www.cloudflare.com/en-gb/learning/performance/types-of-load-balancing-algorithms/)

# Setup & Usage

To run the demo, you need docker

Run the following command `docker compose -up`

By accessing `localhost:8080` you will recieve a response from server A or server B based on the routing algorithm
