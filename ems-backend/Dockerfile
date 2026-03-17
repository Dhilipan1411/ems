# Use Java 17
FROM eclipse-temurin:17

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Give permission to mvnw
RUN chmod +x mvnw

# Build project
RUN ./mvnw clean package -DskipTests

# Expose port
EXPOSE 8080

# Run Spring Boot jar
ENTRYPOINT ["java","-jar","target/*.jar"]