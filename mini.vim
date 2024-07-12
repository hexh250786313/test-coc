set nocompatible
let g:test_coc_path = '/path/to/test-coc'
set runtimepath^=/path/to/coc.nvim

" execute 'set runtimepath^=' . g:test_coc_path . '/long-time-waiting'
execute 'let g:coc_config_home = "' . g:test_coc_path . '"'
execute 'let g:coc_data_home = "' . g:test_coc_path . '/coc"'
let g:coc_global_extensions = []

nnoremap gd <cmd>call CocAction('jumpDefinition')<cr>
nnoremap gr <cmd>call CocAction('jumpReferences')<cr>

" diagnostic.separateRelatedInformationAsDiagnostics makes everything of customized LS super slow and lag
let g:coc_user_config = {
    \ "diagnostic.separateRelatedInformationAsDiagnostics": 1,
    \ "languageserver": {
    \   "typescript": {
    \   "enable": 1,
    \   "command": "typescript-language-server",
    \   "args": ["--stdio"],
    \   "rootPatterns": ["package.json", ".git", ".editorconfig"],
    \   "filetypes": [
    \     "typescript",
    \     "typescriptreact",
    \     "javascript",
    \     "javascriptreact",
    \     "typescript.tsx",
    \     "javascript.jsx"
    \   ],
    \   "disabledFeatures": [],
    \   "initializationOptions": {
    \     "tsserver": {
    \     }
    \   },
    \   "settings": {
    \   }
    \   }
    \ }
    \ }
