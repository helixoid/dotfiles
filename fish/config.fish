if status is-interactive
    # Commands to run in interactive sessions can go here
fastfetch
starship init fish | source
atuin init fish | source
alias v="nvim"
alias hx="helix"
alias prop="hyprctl clients | grep -i 'class\|title\|xwayland'"
alias ls='lsd'
alias la='lsd -a'
alias lla='lsd -la'
alias lt='lsd -la --tree'
export TERM=kitty
end
