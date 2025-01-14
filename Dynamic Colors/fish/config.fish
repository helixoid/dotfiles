if status is-interactive
    # Commands to run in interactive sessions can go here
export TERMINAL=ghostty
starship init fish | source
atuin init fish | source
alias v="nvim"
alias prop="hyprctl clients | grep -i 'class\|title\|xwayland'"
alias ls='eza'
alias la='eza -a'
alias lla='eza -la'
alias lt='eza -la --tree'
end
