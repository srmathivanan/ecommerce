# Environment / Octopus (non-endpoint) variables

Only environment (deployment target) specific values should be defined in these files, NOT any domain or endpoint variables

* Any and all access to environment configuration values should be done through EnvironmentService
* environment.json has the base values and that file can be replacedWith (via angular CLI) the necessary environment file
