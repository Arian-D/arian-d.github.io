{ pkgs ? import <nixpkgs> { } }:
with pkgs;
mkShell {
  buildInputs = [
    nixpkgs-fmt
    nodejs
    nodePackages.npm
  ];

  shellHook = ''
    # ...
  '';
}
