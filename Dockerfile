# Stage: Nginx runtime
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create app directory
WORKDIR /usr/share/nginx/html

# Keep the folder structure, but don't copy anything from host
RUN rm -rf ./*

# dist/ will be mounted as a volume at startup
