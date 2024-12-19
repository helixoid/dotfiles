return {
  -- Mason Package Manager for LSP/Linters/Formatters,etc.
  -- Disable this if using native packages.
  {
    'williamboman/mason.nvim',
    dependencies = {
      {
        'williamboman/mason-lspconfig.nvim',
        'WhoIsSethDaniel/mason-tool-installer.nvim',
      },
    },
    config = function()
      require('mason').setup()
      require('mason-lspconfig').setup {
        ensure_installed = { 'lua_ls', 'pyright', 'clangd' },
      }
      require('mason-tool-installer').setup {
        ensure_installed = { 'stylua', 'taplo', 'prettierd', 'black', 'isort' },
      }
    end,
  },

  {
    'neovim/nvim-lspconfig',
    dependencies = {

      { 'j-hui/fidget.nvim', opts = {} },
      {
        'Bilal2453/luvit-meta',
        lazy = true,
      },
      {
        'folke/lazydev.nvim',
        ft = 'lua',
        opts = {
          library = {
            { path = 'luvit-meta/library', words = { 'vim%.uv' } },
          },
        },
      },
    },
    config = function()
      local capabilities = require('blink.cmp').get_lsp_capabilities()
      local lspconfig = require 'lspconfig'
      require('lspconfig').lua_ls.setup { capabilities = capabilities }
      require('lspconfig').pyright.setup {}
    end,
  },
}
