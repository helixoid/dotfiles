return {
  'saghen/blink.cmp',
  event = { 'InsertEnter', 'CmdlineEnter' },
  version = 'v0.*',
  dependencies = 'rafamadriz/friendly-snippets',
  opts = {
    keymap = { preset = 'default' },

    appearance = {
      use_nvim_cmp_as_default = true,
      nerd_font_variant = 'mono',
    },

    sources = {
      default = { 'lsp', 'path', 'snippets', 'buffer' },
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
  },
  opts_extend = { 'sources.default' },
}
