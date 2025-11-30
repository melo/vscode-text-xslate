import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Extension activated - language support is provided via package.json contributions
    console.log('Text::Xslate extension is now active');
}

export function deactivate() {
    // Cleanup if needed
}
