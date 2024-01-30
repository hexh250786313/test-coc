let g:test_coc_path = '/path/to/test-coc'
set runtimepath^=/path/to/coc.nvim

execute 'set runtimepath^=' . g:test_coc_path . '/long-time-waiting'
execute 'let g:coc_config_home = "' . g:test_coc_path . '"'
execute 'let g:coc_data_home = "' . g:test_coc_path . '/coc"'
let g:coc_global_extensions = ["coc-css"]

inoremap <silent><expr> <Tab>
  \ coc#pum#visible() ? coc#_select_confirm() :
  \ <SID>CHECK_BACKSPACE() ? "\<Tab>" :
  \ coc#refresh()

let g:coc_user_config = {
    \ "less.completion.triggerPropertyValueCompletion": 1 " once it set to 0, it will not freeze nvim
    \ }
