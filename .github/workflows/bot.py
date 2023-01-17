import discord
import asyncio
import random
from discord import Intents

number = 0

##intents = discord.Intents.default()
##intents.typing = True
##intents.presences = True
##intents.members = True

client = discord.Client(intents=Intents.all())

@client.event
async def on_ready():
    print("We have logged in as {0.user}".format(client))

@client.event
async def on_message(message):
    print(message.content)
    command = str(message.content).split(' ', 1)[0]
    text_send = "send"

    if message.content == ".test":
        text = random.choice(["Ey, I'm nub bot. xD","Hey pro","No u","And?","Haha... you don't know the code.","What are you trying?","Find a mistake? Hah, you never report bugs.","/holla come to my shop __/click here to Hollawarp__","Hello World","Sorry, I'm working on coding. I can't help you now :frowning: ","What? xD","Wait, what are you doing? Hacking? :exploding_head:"])
        await message.channel.send (text)

    elif command == ".play":
        global numbers
        global number
        numbers = random.randint(1,100)
        number += numbers
        await asyncio.sleep(1)
        text_n = await message.channel.send(".play **" + str(number) + "** (+" + str(numbers) + ")" )
        await text_n.delete(delay=2)

        if message.content == ".stop":
            await message.channel.send("Stopping...")
    
    elif message.content.upper() == "HI" or message.content.upper() == "HELLO":
        emojis2 = random.choice([":smile:",":wink:",":grinning:",":sunglasses:",":wave:"])
        emojis = "{0.author.mention} Hello! ".format(message) + str(emojis2)
        await message.channel.send (emojis)

    elif 'FUCK' in message.content.upper():
        emojis = "{0.author.mention} Please do not use for swearing.".format(message)
        emojis1 = await message.channel.send(emojis)
        await message.delete()
        await emojis1.delete(delay=3)

    elif message.add_reaction == "👍":
        await message.channel.send("test")

    elif message.content == ".em":
        test123 = await message.add_reaction("😀")
        test321 = ("Work?"+str(test123))
        await message.content(test321)

    elif message.content.upper() == ".addrole":
        role = discord.utils.get(message.guild.roles, name="RDWD")
        await message.delete()
        await message.author.add_roles(role)

    elif message.content == ".removerole":
        role = discord.utils.get(message.guild.roles, name="RDWD")
        await message.delete()
        await message.author.remove_roles(role)

    elif message.content == "send":
        #await ctx.send(file=discord.File(“path_to_text_file”))
        #await message.channel.send(file=discord.File("Test.txt"))
        file = discord.File("kural.png", filename="kural.png")
        await message.channel.send(file=file)

    elif message.content == "print!":
        f = open("C:/Users/Alex/Desktop/testprint/test10.txt")
        print(f.read())

    elif message.content == text_send:
        await message.channel.send("Hey :D")
    
    elif message.content != "":
        f = open("LOGS_discord.txt", "a+", encoding="utf8")
        f.write(message.author.name + ": " + message.content + "\n")
        #print(f)


client.run("NDg4Mzc3MDYyMzI3ODQ0ODg0.GYO-hk._3R_JWFsMoqR4-vx1N9L5q6ZIiuzEdhhG5rV_U")
