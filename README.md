<div align="center">

# Typecast Skills Marketplace

**Claude Code plugins for Typecast TTS API integration**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Claude Code](https://img.shields.io/badge/Claude_Code-Plugin-purple.svg)](https://code.claude.com)
[![Typecast API](https://img.shields.io/badge/Typecast-API-ff6b35.svg)](https://typecast.ai/developers/api)

[Installation](#installation) •
[Available Plugins](#available-plugins) •
[Features](#features) •
[Update](#update) •
[Contributing](#contributing)

</div>

---

## Overview

This marketplace provides Claude Code plugins for seamless integration with [Typecast TTS API](https://typecast.ai/developers/api). Convert text to natural, expressive speech with industry-leading emotional AI voices.

### Why Typecast?

| Feature          | Description                                                                |
| ---------------- | -------------------------------------------------------------------------- |
| **Emotion AI**   | 7 emotion presets + Smart Mode for context-aware expression                |
| **500+ Voices**  | Unique character voices across ages, genders, and styles                   |
| **37 Languages** | Global language support including Korean, English, Japanese                |
| **Low Latency**  | Streaming TTS endpoint for real-time playback                              |
| **Captions**     | Timestamp-aligned SRT/VTT output with shared rule across 11 SDKs + cast CLI |
| **Loudness**     | `target_lufs` for absolute loudness normalization (e.g. -14 LUFS)          |

---

## Installation

### Via Claude Code Plugin (Recommended)

```bash
# 1. Add marketplace
/plugin marketplace add neosapience/typecast-skills

# 2. Install plugin
/plugin install typecast-api-expert@typecast-skills
```

### Via skills.sh

For agents that use the [skills.sh](https://skills.sh) directory (Claude Code, Cursor, GitHub Copilot, and others):

```bash
npx skills add neosapience/typecast-skills
```

### Manual Installation

Copy the skill folder to your preferred location:

| Scope    | Path                |
| -------- | ------------------- |
| Personal | `~/.claude/skills/` |
| Project  | `.cursor/skills/`   |

---

## Available Plugins

### typecast-api-expert

> Typecast TTS API expert agent with comprehensive documentation and code samples.

<details>
<summary><b>Features</b></summary>

- API concepts and getting started guide
- API key setup and configuration
- Code samples (Python, JavaScript, cURL)
- Streaming TTS, timestamp-aligned captions (SRT/VTT), and runtime subscription lookup
- `target_lufs` loudness normalization
- `cast` CLI usage for one-shot generation and `cast captions` subcommand
- Error troubleshooting and debugging
- Plan comparison and pricing
- ssfm-v30 model with Smart Mode support

</details>

<details>
<summary><b>Example Prompts</b></summary>

- "How do I get started with Typecast API?"
- "Write Python code to generate speech with happy emotion"
- "How do I stream TTS in real time?"
- "Generate SRT captions for this text"
- "How do I check my Typecast plan and credits at runtime?"
- "Normalize TTS output to -14 LUFS"
- "What's the cast CLI and how do I use it?"
- "How do I fix a 403 error?"
- "Compare Typecast vs ElevenLabs"
- "Explain Smart Mode for context-aware emotion"

</details>

---

## Features

### Supported Models

| Model    | Emotions  | Smart Mode | Languages |
| -------- | --------- | ---------- | --------- |
| ssfm-v21 | 4 presets | ❌         | 30        |
| ssfm-v30 | 7 presets | ✅         | 37        |

### Emotion Presets (ssfm-v30)

```
normal • happy • sad • angry • whisper • toneup • tonedown
```

### Smart Mode

Let AI automatically infer emotion from surrounding context:

```python
prompt = {
    "emotion_type": "smart",
    "previous_text": "I just got the best news!",
    "next_text": "I can't wait to celebrate!"
}
```

---

## Update

Keep your plugins up to date:

```bash
# Update marketplace catalog
/plugin marketplace update typecast-skills

# Update installed plugin
/plugin update typecast-api-expert@typecast-skills
```

---

## Documentation

| Resource       | Link                                                                                     |
| -------------- | ---------------------------------------------------------------------------------------- |
| Official Docs  | [typecast.ai/docs](https://typecast.ai/docs/overview)                                    |
| API Reference  | [typecast.ai/docs/api-reference](https://typecast.ai/docs/api-reference)                 |
| SDK Family     | [github.com/neosapience/typecast-sdk](https://github.com/neosapience/typecast-sdk) (Python · JavaScript · Go · Rust · Swift · C# · Java · Kotlin · C · Zig · PHP) |
| `cast` CLI     | [github.com/neosapience/cast](https://github.com/neosapience/cast) (Go-based CLI, `brew install neosapience/tap/cast`) |
| MCP Server     | [github.com/neosapience/typecast-api-mcp-server](https://github.com/neosapience/typecast-api-mcp-server) (Model Context Protocol server) |
| n8n Node       | [github.com/neosapience/n8n-nodes-typecast](https://github.com/neosapience/n8n-nodes-typecast) (n8n integration) |

---

## Contributing

Contributions are welcome! To add new skills or improve existing ones:

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-skill`)
3. Commit your changes (`git commit -m 'feat: add amazing skill'`)
4. Push to the branch (`git push origin feature/amazing-skill`)
5. Open a Pull Request

---

## Support

| Channel  | Link                                                   |
| -------- | ------------------------------------------------------ |
| Discord  | [discord.gg/fhDDUbBKap](https://discord.gg/fhDDUbBKap) |
| Intercom | [typecast.ai](https://typecast.ai) (bottom right)      |
| Email    | sales@neosapience.com                                  |

---

<div align="center">

**Made with ❤️ by [Neosapience](https://neosapience.com)**

</div>
