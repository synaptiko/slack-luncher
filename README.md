# Slack Luncher

Simple CLI utility to set status during your lunch and snooze notifications (so you can enjoy it).

It's an equivalent of the following Slack commands:
```
/status :fork_and_knife: Lunch
/dnd for 1 hour

… lunchin' … nom nom nom …

/dnd
/status clear
```

## Usage

0. Have `node` and `yarn` installed
1. Clone the repo, `cd slack-luncher`, run `yarn`
2. Get a legacy token from the following URL: https://api.slack.com/custom-integrations/legacy-tokens
3. Create `.env` file with the following content:

```
SLACK_TOKEN=xoxp-<whatever>
```

4. You can now use: `./lunch.sh` and `./lunch.sh back`

Tip 1: You can also create an alias `alias lunch=<path-to-the-repo>/lunch.sh` and then just run `lunch` or `lunch back`

Tip 2: Integrate the above command with any task runner you use, e.g. [`Rofi`](https://github.com/DaveDavenport/rofi) or [`Alfred`](https://www.alfredapp.com/)

## Defaults

By default the status and snoozing is active for 60 minutes. As a status `:fork_and_knife:` with `Lunch` text is used. You can be more creative if you edit `index.js`.
