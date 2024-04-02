# Step to install 

We have migrated the backstage to new version. So please remove old backstage. We recommend to remove all the database related to backstage also.

1. Install Node 20 and yarn
2. Install python and pip
3. Install mkdocs (pip install mkdocs-techdocs-core)
4. install PostgreSQL
5. Download zip ()
6. upzip
7. yarn install (sh install.sh)
8. source .env
9. node packages/backend --config app-config.production.yaml (sh run.sh)
10.	Login to backstage (username/password : admin/admin)

# Step to configure
## Passwords and tokens

We recommend keeping all the passwords and token in a separate file. We can keep all passwords and token in environment variables
For example, create .env file as below.
```
export POSTGRES_HOST=localhost
export POSTGRES_PORT=5432
export POSTGRES_USER=postgres
export POSTGRES_PASSWORD=postgres

export CONFLENCE_TOKEN=token

export SVN_USERNAME=admin
export SVN_PASSWORD=admin

export ARTIFACTORY_USERNAME=admin
export ARTIFACTORY_PASSWORD=admin

export KEYCLOAK_REALM=master
export KEYCLOAK_REALM=master
export KEYCLOAK_CLIENTID=backstage
export KEYCLOAK_CLIENTSECRET=secret

export GITHUB_TOKEN=token

export NODE_OPTIONS=--no-node-snapshot

# include Proxy settings
```

Load environment variables using below command.
```
source .env
```

## Configure UI

Modify the configuration file "custom-ui.yaml" for show and hide coulmns
