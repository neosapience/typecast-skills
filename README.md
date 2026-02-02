# Typecast Claude Skills Marketplace

A Claude Code plugin marketplace for Typecast TTS API integration.

## Installation

### Install via Claude Code Plugin (Recommended)

Use the `/plugin` command in Claude Code:

```bash
# 1. Add marketplace
/plugin marketplace add neosapience/typecast-skills

# 2. Install plugin
/plugin install typecast-api-expert@typecast-skills
```

### Update Plugins

```bash
# Update marketplace catalog
/plugin marketplace update typecast-skills

# Update installed plugin
/plugin update typecast-api-expert@typecast-skills
```

### Manual Installation

You can also manually copy the skill folders:

1. **Personal skill**: Copy the skill folder to `~/.claude/skills/`
2. **Project skill**: Copy the skill folder to `.cursor/skills/`

## Available Plugins

### [typecast-api-expert](./typecast-api-expert/)

Typecast TTS API expert agent.

**Features:**

- Typecast API concepts and getting started guide
- API key setup and configuration
- Code samples (Python, JavaScript, cURL)
- Error troubleshooting
- Plan comparison and pricing
- ssfm-v30 model with Smart Mode support

**Use Cases:**

- "How do I get started with Typecast API?"
- "Write code to generate speech using TTS API"
- "How do I fix a 403 error?"
- "Compare ElevenLabs vs Typecast"
- "How do I use Smart Mode for context-aware emotion?"

---

## Contributing

Want to add new skills or improve existing ones? Send a PR!

## License

See the [LICENSE](./LICENSE) file.
