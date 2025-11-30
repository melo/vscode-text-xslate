# Text::Xslate for Visual Studio Code

Syntax highlighting support for [Text::Xslate](https://metacpan.org/pod/Text::Xslate) template files in Visual Studio Code.

## Features

- **Enhanced Syntax Highlighting**: Complete support for Text::Xslate Kolon syntax
- **HTML Integration**: Full HTML language support with embedded template directives
- **Attribute Expression Support**: Xslate expressions work inside HTML attributes (class, src, href, etc.)
- **Comment Support**: Proper highlighting for `<:#` comment syntax
- **Template Features**: Support for expressions, control structures, filters, and all Xslate constructs

## Supported Syntax

### Block Tags

```html
<: if $condition :>
  <p>Content here</p>
<: end :>
```

### Line Directives

```html
: for $items -> $item {
  <li><: $item.name :></li>
: }
```

### Expressions

```html
<p>Hello, <: $name :>!</p>
<p>Escaped: <: $html | html :></p>
<img src="<: $image_url :>" alt="<: $image.alt_text :>">
<div class="<: $user.is_admin ? 'admin' : 'user' :>">Content</div>
```

### Control Structures

- `if` / `elsif` / `else` / `end`
- `for` / `while`
- `block` / `override`
- `include` / `cascade`
- `macro`

### Comments

```html
<:# This is a comment :>
<p>Visible content</p>
```

## File Extensions

This extension activates for files with the following extensions:

- `.tx`
- `.xslate`

## Installation

### From Marketplace

Search for "Text::Xslate" in the VS Code Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`).

### From VSIX

1. Download the `.vsix` file from the releases page
2. Run `code --install-extension text-xslate-0.9.0.vsix`

## Requirements

No additional requirements or dependencies.

## Extension Settings

This extension does not add any VS Code settings.

## Known Issues

Please report issues on the [GitHub repository](https://github.com/melo/vscode-text-xslate/issues).

## Release Notes

See [CHANGELOG.md](CHANGELOG.md) for release notes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see [LICENSE](LICENSE) for details.
