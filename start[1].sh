#!/bin/bash

clear

BLACK="\033[30m"
RED="\033[31m"
GREEN="\033[32m"
YELLOW="\033[33m"
BLUE="\033[34m"
MAGENTA="\033[35m"
CYAN="\033[36m"
WHITE="\033[37m"
RESET="\033[0m"
BOLD="\033[1m"
DIM="\033[2m"
clear

    echo "${CYAN}${BOLD}--------------------------------------------------${RESET}"
    echo "${RED}${BOLD} [ SISTEMA ] ${RESET}${CYAN}Iniciando o script de inicialização...${RESET}"
    echo "${CYAN}${BOLD}--------------------------------------------------${RESET}"
  sleep 1
printf "${RESET}"

echo  "      ${CYAN} ${BOLD}CRISTAL - BOT ${RESET}"
echo  "${WHITE}                  Criado por ${CYAN}${BOLD}Sr.Patman ${RESET}& ${MAGENTA}${BOLD}Haru👑${RESET}"
echo ""

sleep 2.5

echo  "\n\n${GREEN}${BOLD}SCRIPT PRONTO${RESET}\n"
sleep 1

while true
do
    echo  "${RED}${BOLD}[ SISTEMA ] ${RESET} ${GREEN}Aplicação iniciada com sucesso...${RESET}"
    node connect.js

    echo  "\n${RED}${BOLD}[ SISTEMA ] ${RESET} ${RED}O bot foi encerrado ou caiu.${RESET}"
    echo  "${RED}${BOLD}[ SISTEMA ] ${RESET} ${YELLOW}Reiniciando em 3 segundos...${RESET}\n"
    sleep 3
done