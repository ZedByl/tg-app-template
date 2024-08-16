FROM python:3.10

ENV PYTHONPATH /app/src/
ENV PATH /app/src/:$PATH
ENV PIP_DEFAULT_TIMEOUT=100 \
    PIP_DISABLE_PIP_VERSION_CHECK=1 \
    PIP_NO_CACHE_DIR=1

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN groupadd --gid 1000 pro && useradd --uid 1000 --gid pro --shell /bin/bash --create-home pro

WORKDIR /app

RUN apt-get update && \
    apt-get install -y \
    cmake \
    libopenblas-dev \
    liblapack-dev \
    libx11-dev \
    && rm -rf /var/lib/apt/lists/*

RUN pip install --upgrade pip
RUN pip install fastapi uvicorn structlog python-telegram-bot python-multipart

COPY . /app

EXPOSE 8080

ENTRYPOINT []
