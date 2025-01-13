# Usa una imagen base ligera de Python
FROM python:3.12-slim

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia las dependencias (archivo requirements.txt) al contenedor
COPY ./requirements.txt /app/requirements.txt

# Instala las dependencias
RUN pip install --no-cache-dir -r /app/requirements.txt

# Copia el resto de la aplicación al contenedor
COPY ./app /app

# Expón el puerto 8000 para Flask
EXPOSE 8000

# Define el comando para ejecutar la aplicación
CMD ["python3", "app.py"]