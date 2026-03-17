# Use OpenJDK 17 as base image
FROM openjdk:17

# Set working directory
WORKDIR /app

# Copy all files into container
COPY . .

# Give permission to mvnw
RUN chmod +x mvnw

# Build the project
RUN ./mvnw clean install

# Expose port 8080
EXPOSE 8080

# Start the Spring Boot app
ENTRYPOINT ["java","-jar","target/*.jar"]