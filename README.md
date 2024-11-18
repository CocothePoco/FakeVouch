# Cocoa Market Bot

This project is a Discord bot written in JavaScript using the `discord.js` library. The bot sends periodic "vouch" messages to a specified Discord channel, including a random rating, a random vouch message, and a random member's avatar. The bot also uses the `figlet` library to display ASCII art in the console when it starts.

## Key Components

1. **Dependencies**: The bot uses `discord.js` for interacting with the Discord API and `figlet` for generating ASCII art.
2. **Client Initialization**: The bot initializes a Discord client with specific intents to access guilds, messages, and members.
3. **Event Handling**: The bot listens for the `ready` event to start its main functionality.
4. **Randomization Functions**: Functions to get random ratings, vouch messages, and member thumbnails.
5. **Embed Message**: The bot constructs and sends an embed message to a specified channel at regular intervals.
6. **Setup Script**: A batch script (`install.bat`) to install dependencies and run the bot.

## How to Use

1. **Clone the Repository**: Clone your GitHub repository containing this code to your local machine.
2. **Install Dependencies**: Run the `install.bat` script to install the necessary Node.js dependencies.
3. **Configure the Bot**: Replace the placeholder values for `token` and `channelId` in `index.js` with your actual Discord bot token and channel ID.
4. **Run the Bot**: Execute the `install.bat` script to start the bot.

## Example Usage

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/CocothePoco/FakeVouch.git
    ```

2. **Run the Setup Script**:
    ```sh
    install.bat
    ```

3. **Bot Configuration**:
    - Open `index.js` and replace:
      ```javascript
      const token = 'Your Bot Token';
      const channelId = 'Your Channel ID';
      ```

4. **Start the Bot**:
    - The `install.bat` script will automatically start the bot after installing dependencies.

This setup will ensure your Discord bot is up and running, sending periodic vouch messages to your specified channel.
