# Changelog

All notable changes to the "Text::Xslate" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.9.2] - 2025-12-01

### Changed
- Updated description, we only support Kolon

### Added
- Complete CHANGELOG.md with detailed version history

## [0.9.1] - 2025-11-30

### Changed
- Enhanced README.md with improved features section highlighting HTML attribute support
- Added comprehensive examples showing Xslate expressions in HTML attributes
- Updated installation instructions with current version number
- Added comment syntax examples to documentation
- Complete CHANGELOG.md with detailed version history and feature descriptions

## [0.9.0] - 2025-11-30

### Changed
- Updated publisher to "melo"
- Marked extension as free
- Added activation events for better performance

## [0.0.4] - 2025-11-30

### Added
- **Injection grammar for HTML attribute syntax highlighting**
- Critical feature enabling proper Xslate expressions within HTML attributes
- Support for expressions in class, src, href, and all HTML attribute contexts
- Grammar injection using L: (left-to-right) approach

### Fixed
- Xslate expressions now properly highlighted inside HTML attribute values
- Resolved issue where attribute values were treated as plain HTML strings

## [0.0.3] - 2025-11-30

### Fixed
- **Comment syntax handling** - Fixed critical parser issue with `<:# ... :>` comment tags
- Added dedicated pattern for comment tags with proper delimiter matching
- Improved sample documentation with correct comment syntax

### Changed
- Updated examples with comprehensive test cases for HTML attribute expressions
- Removed incorrect block comment examples (Kolon only supports line comments)
- Enhanced documentation for common template patterns

## [0.0.2] - 2025-11-30

### Fixed
- Text::Xslate Kolon syntax highlighting improvements

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
