return {
  'saghen/blink.cmp',
  version = 'v0.*',
  event = { 'InsertEnter', 'CmdlineEnter' },
  dependencies = {
    'rafamadriz/friendly-snippets',
    {
      'ray-x/lsp_signature.nvim',
      -- Other config related to this.
    },
    {
      'L3MON4D3/LuaSnip',
      version = 'v2.*',
      -- other config related to LuaSnip
    },
  },
  opts = {

    snippets = {
      expand = function(snippet)
        require('luasnip').lsp_expand(snippet)
      end,
      active = function(filter)
        if filter and filter.direction then
          return require('luasnip').jumpable(filter.direction)
        end
        return require('luasnip').in_snippet()
      end,
      jump = function(direction)
        require('luasnip').jump(direction)
      end,
    },

    keymap = {
      preset = 'default',
    },

    appearance = {
      use_nvim_cmp_as_default = true,
      nerd_font_variant = 'mono',
    },

    -- elsewhere in your config, without redefining it, via `opts_extend`
    sources = {
      default = { 'lsp', 'path', 'luasnip', 'snippets', 'buffer' },
    },

    completion = {
      menu = {
        border = 'rounded',
        draw = {
          columns = { { 'label', 'label_description', gap = 1 }, { 'kind_icon', 'kind' } },
        },
      },
      documentation = {
        window = {
          border = 'rounded',
        },
        auto_show = true,
      },
    },
    signature = {
      enabled = false, -- Another plugin does that included in this plugin's dependency.
    },
  },
  opts_extend = { 'sources.default' },
}
