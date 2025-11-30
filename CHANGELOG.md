# Changelog

All notable changes to the "Text::Xslate" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.1] - 2024-01-01

### Added

- Initial release
- Syntax highlighting for Text::Xslate Kolon syntax
- Support for `.tx` and `.xslate` file extensions
- HTML embedding support
- Highlighting for:
  - Block tags `<: ... :>`
  - Line directives (`:` at line start)
  - Variables (`$name`, `$obj.property`)
  - Control structures (`if`, `for`, `while`, `block`, etc.)
  - Filters (`| html`, `| uri`, etc.)
  - Strings and numbers
  - Comments
