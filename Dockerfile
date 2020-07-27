# Stage 1 - the build process
FROM node as builder
WORKDIR /usr/src/app
COPY . ./
RUN yarn
RUN yarn build
RUN ls -lha && ls -lha build && ls -lha public

#stage 2
FROM nginx
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf.template
COPY entrypoint.sh /
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
