{ pkgs }: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_22
  ];

  idx.extensions = [ ];

  idx.previews = {
    previews = {
      web = {
        command = [
          "bash"
          "-c"
          "cd frontend && npm run dev -- --port $PORT --host 0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}
