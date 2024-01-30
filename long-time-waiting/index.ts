import {
  ExtensionContext,
  languages,
  CompletionList,
  CompletionItemProvider,
} from "coc.nvim";

function waiting(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([]);
    }, 5000);
  });
}

export const activate = async (context: ExtensionContext): Promise<void> => {
  const languageProvider: CompletionItemProvider = {
    async provideCompletionItems() {
      let completionList: CompletionList | null = null;
      const res = await waiting();

      completionList = {
        items: res,
        isIncomplete: false,
      };
      return completionList;
    },
  };

  context.subscriptions.push(
    languages.registerCompletionItemProvider(
      "test",
      "test",
      null,
      languageProvider,
    ),
  );
};
