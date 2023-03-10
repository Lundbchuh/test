import { BaseCommand, Command, Message } from '../../Structures'

@Command('wallet', {
    description: '',
    usage: 'wallet',
    category: 'economy',
    exp: 10,
    cooldown: 10
})
export default class command extends BaseCommand {
    override execute = async ({ from, sender, message }: Message): Promise<void> => {
        const { wallet, tag } = await this.client.DB.getUser(sender.jid)
        const buttons = [
            {
                buttonId: 'id1',
                buttonText: { displayText: `${this.client.config.prefix}bank` },
                type: 1
            }
        ]
        const buttonMessage = {
            text: `š *Wallet* š\n\nā©ļø *Name:- ${sender.username}*\n\n  š® *tag: #${tag}*\n\nšŖ *Gold: ${wallet}*`,
            footer: 'Levi 2022 šāØ',
            buttons: buttons,
            headerType: 1
        }
        return void (await this.client.sendMessage(from, buttonMessage))
    }
}
