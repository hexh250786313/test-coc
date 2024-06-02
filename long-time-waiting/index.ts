import {
  ExtensionContext,
  languages,
  CompletionList,
  CompletionItemProvider,
  CompletionItem,
  MarkupKind,
  TextDocument,
  Position,
  CancellationToken,
  CompletionContext,
} from "coc.nvim";

function waiting(str: string): Promise<CompletionItem[]> {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        resolve([
          {
            label: str,
            kind: "TEST" as any,
            detail: "",
            documentation: {
              kind: MarkupKind.Markdown,
              value: `TEST`,
            },
            // textEdit: TextEdit.replace(Range.create(start, end), insertText),
            preselect: true,
          },
        ]);
        // 0毫秒和5050毫秒之间随机
      },
      Math.floor(Math.random() * 5050),
    );
  });
}

export const activate = async (context: ExtensionContext): Promise<void> => {
  const languageProvider: CompletionItemProvider = {
    async provideCompletionItems(
      _document: TextDocument,
      _position: Position,
      _token: CancellationToken,
      context: CompletionContext,
    ) {
      const { option } = context;
      let completionList: CompletionList | null = null;
      const res = await waiting(option?.input || "jb");

      completionList = {
        items: res,
        isIncomplete: true,
      };
      return completionList;
    },
  };

  context.subscriptions.push(
    languages.registerCompletionItemProvider(
      "TEST",
      "TEST",
      null,
      languageProvider,
      [".", "/", "@", " ", "*", "<"],
      1000,
    ),
  );
};
