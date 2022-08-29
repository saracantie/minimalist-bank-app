image: python
stages:
- build
- test
- deploy
build-job:
  stage: build
  script:
    - python3 -V
test-job:
  stage: test
  script:
    - python3 teste.py
deploy-job:
  stage: deploy
  script:
    - echo "Finalizado!"
