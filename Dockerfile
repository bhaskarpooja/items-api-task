# Stage 1: Build
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

# Copy pom and download dependencies first (caches better)
COPY pom.xml .
RUN mvn -B dependency:go-offline

# Copy source code and build jar
COPY src ./src
RUN mvn -B package -DskipTests

# Stage 2: Runtime
FROM eclipse-temurin:17-jdk
WORKDIR /app

# Copy built jar from build stage
COPY --from=build /app/target/*.jar app.jar

# Set port
EXPOSE 8080

# Start the app
CMD ["java", "-jar", "app.jar"]


