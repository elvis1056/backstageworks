- Mac
  - CMD + Shift + P -> Format Document
    (open setting JSON)

---

{
    "workbench.iconTheme": "vscode-icons",
    "[javascriptreact]": {
        "editor.defaultFormatter": "schroeter.prettier-vscode-space-parenthesis"
    },
    "html.format.unformatted": "",
    "diffEditor.ignoreTrimWhitespace": false,
    "editor.fontSize": 16,
    "timeline.excludeSources": [],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
    },
    "terminal.integrated.fontSize": 14,
    "editor.tabSize": 2,
    "[json]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "gitlens.codeLens.authors.enabled": false,
    "gitlens.codeLens.recentChange.enabled": false,
    "better-comments.tags": [
        // ! warning
        {
          "tag": "!",
          "color": "#FF2D00",
          "strikethrough": false,
          "underline": false,
          "backgroundColor": "transparent",
          "bold": true,
          "italic": false
        },
        // # state
        {
          "tag": "#",
          "color": "#fff912",
          "strikethrough": false,
          "underline": false,
          "backgroundColor": "transparent",
          "bold": false,
          "italic": false
        },
        // $ init data
        {
          "tag": "$",
          "color": "#32ff2d",
          "strikethrough": false,
          "underline": false,
          "backgroundColor": "transparent",
          "bold": false,
          "italic": false
        },
        // % context
        {
          "tag": "%",
          "color": "#56a2ff",
          "strikethrough": false,
          "underline": false,
          "backgroundColor": "transparent",
          "bold": false,
          "italic": false
        },
        // ^ import 3th plugins
        {
          "tag": "^",
          "color": "#2dffd7",
          "strikethrough": false,
          "underline": false,
          "backgroundColor": "transparent",
          "bold": false,
          "italic": false
        },
        // & handled data
        {
          "tag": "&",
          "color": "#8f2dff",
          "strikethrough": false,
          "underline": false,
          "backgroundColor": "transparent",
          "bold": false,
          "italic": false
        },
        // * hooks
        {
          "tag": "*",
          "color": "#ff2d99",
          "strikethrough": false,
          "underline": false,
          "backgroundColor": "transparent",
          "bold": false,
          "italic": false
        },
        // ? import self coding modules
        {
          "tag": "?",
          "color": "#3498DB",
          "strikethrough": false,
          "underline": false,
          "backgroundColor": "transparent",
          "bold": false,
          "italic": false
        },
        // - methods
        {
          "tag": "-",
          "color": "#ff6300",
          "strikethrough": false,
          "underline": false,
          "backgroundColor": "transparent",
          "bold": false,
          "italic": false
        },
        // = style in functional components
        {
          "tag": "=",
          "color": "#ff80cc",
          "strikethrough": false,
          "underline": false,
          "backgroundColor": "transparent",
          "bold": false,
          "italic": false
        },
        // // old conding style
        {
          "tag": "//",
          "color": "#474747",
          "strikethrough": true,
          "underline": false,
          "backgroundColor": "transparent",
          "bold": false,
          "italic": false
        },
        // todo Todo things
        {
          "tag": "todo",
          "color": "#FF8C00",
          "strikethrough": false,
          "underline": false,
          "backgroundColor": "transparent",
          "bold": false,
          "italic": false
        }
      ],
      "editor.suggestSelection": "first",
      "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
      "files.exclude": {
        "**/.classpath": true,
        "**/.project": true,
        "**/.settings": true,
        "**/.factorypath": true
      }
}