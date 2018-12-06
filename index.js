const { WebClient } = require('@slack/client')
const web = new WebClient(process.env.SLACK_TOKEN)
const duration = 60 // mins

async function lunch () {
	await web.dnd.setSnooze({ num_minutes: duration })
	await web.users.profile.set({
		profile: {
			status_text: 'Lunch',
			status_emoji: ':fork_and_knife:',
			status_expiration: (Date.now() / 1000 + duration * 60)
		}
	})
}

async function back () {
	await web.dnd.endSnooze()
	await web.users.profile.set({
		profile: {
			status_text: null,
			status_emoji: null,
			status_expiration: 0
		}
	})
}

if (process.argv[2] === 'back') {
	back()
} else {
	lunch()
}
