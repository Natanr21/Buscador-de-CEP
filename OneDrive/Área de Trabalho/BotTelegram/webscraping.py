from selenium import webdriver
from selenium.webdriver.common.by import By

# Buscar as informações
nav = webdriver.Chrome()

link = 'https://br.betano.com/sport/futebol/brasil/brasileirao-serie-a/10016/'

nav.get(link)
aposta_casa = nav.find_element('xpath', '/html/body/div[1]/div/section[2]/div[4]/div[2]/section/div[3]/div/div/div[1]/div[2]/div/div[2]/div[2]/div/section/div[2]/button[1]/span').get_attribute('innerHTML')

print(aposta_casa)



#<span class="sgl-ParticipantOddsOnly80_Odds">2.40</span>
# Salvar em um dicionário

# Bot Telegram