'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var child_process = require('child_process');
var fs = require('fs');
var nodePandoc = require('node-pandoc');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var nodePandoc__default = /*#__PURE__*/_interopDefaultLegacy(nodePandoc);

async function getEntitiesByAll(catalogNames, subversionBaseUrl, subversionAuthtoken, subversionUsername, subversionPassword, subversionDirectory, redmineBaseUrl, redmineProject, redmineApiKey, generateDocsScriptPath) {
  const promises = catalogNames.map(async (item) => {
    console.log(item);
    if (item != "../" && item != "http://subversion.apache.org/") {
      try {
        item = item.substring(0, item.length - 1);
        const catalogFetchResponse = await fetch(`${subversionBaseUrl}/${item}/catalog-info.json`, { headers: { "Authorization": subversionAuthtoken } });
        if (catalogFetchResponse.ok) {
          const catalogData = await catalogFetchResponse.json();
          console.log(`REDMINE_WIKI_URL: ${redmineBaseUrl}/projects/${redmineProject}/wiki/${item}.json`);
          if (Object.keys(catalogData.metadata.annotations).includes("backstage.io/techdocs-ref")) {
            let script = String.raw`${generateDocsScriptPath} ${item} ${subversionUsername} ${subversionPassword} ${subversionBaseUrl} ${subversionDirectory}`;
            child_process.exec(script, async (error, stdout, stderr) => {
              if (error) {
                console.log(`error: ${error.message}`);
                return;
              }
              if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
              }
              console.log(`stdout: ${stdout}`);
              let docFilePath = `${subversionDirectory}\\${item}\\docs\\index.md`;
              fs.readFile(docFilePath, "utf-8", async (err, data) => {
                if (err) {
                  console.log(`error: ${err.message}`);
                  return;
                }
                if (data) {
                  console.log("Inside readfile", item);
                  let args = `-f markdown -t textile`;
                  nodePandoc__default["default"](data, args, async (err2, result) => {
                    if (err2) {
                      console.log(`error: ${err2.message}`);
                      return;
                    }
                    console.log(result);
                    const response = await fetch(
                      `${redmineBaseUrl}/projects/${redmineProject}/wiki/${item}.json`,
                      {
                        method: "PUT",
                        headers: {
                          "X-Redmine-API-Key": redmineApiKey,
                          "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                          "wiki_page": {
                            "text": result
                          }
                        })
                      }
                    );
                    const catalogsHtml = await response;
                    console.log("REDMINE", catalogsHtml);
                  });
                }
              });
            });
          }
          return catalogData;
        } else {
          console.error(`Error fetching ${item}: ${catalogFetchResponse.statusText}`);
          return;
        }
      } catch (error) {
        console.error(`Error processing ${item}: ${error.message}`);
        return;
      }
    }
  });
  try {
    var results = await Promise.all(promises);
    results = results.filter((element) => {
      return element !== void 0;
    });
    return results;
  } catch (error) {
    console.error(`Error fetching entities: ${error.message}`);
    return;
  }
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class SubversionProvider {
  /** [1] */
  constructor(env, config) {
    __publicField(this, "env");
    // private readonly reader: UrlReader;
    __publicField(this, "config");
    __publicField(this, "connection");
    this.env = env;
    this.config = config;
  }
  /** [2] */
  getProviderName() {
    return `subversion-${this.env}`;
  }
  /** [3] */
  async connect(connection) {
    this.connection = connection;
  }
  /** [4] */
  async run() {
    if (!this.connection) {
      throw new Error("Not initialized");
    }
    var entitiesFromSubversion = [];
    const subversionBaseUrl = this.config.getOptionalString("integrations.subversion.baseUrl");
    const subversionAuthtoken = this.config.getOptionalString("integrations.subversion.authorizationToken");
    const subversionUsername = this.config.getOptionalString("integrations.subversion.username");
    const subversionPassword = this.config.getOptionalString("integrations.subversion.password");
    const subversionDirectory = this.config.getOptionalString("integrations.subversion.localDirectory");
    const redmineBaseUrl = this.config.getOptionalString("integrations.redmine.baseUrl");
    const redmineProject = this.config.getOptionalString("integrations.redmine.project");
    const redmineApiKey = this.config.getOptionalString("integrations.redmine.apiKey");
    const generateDocsScriptPath = this.config.getOptionalString("integrations.subversion.generateDocsScriptPath");
    const response = await fetch(subversionBaseUrl, { headers: { "Authorization": subversionAuthtoken } });
    const catalogsHtml = await response.text();
    const regex = /<a[^>]*href="([^"]*\/)"[^>]*>(.*?)<\/a>/g;
    let extractedStrings = [];
    let match;
    while ((match = regex.exec(catalogsHtml)) !== null) {
      extractedStrings.push(match[1]);
    }
    const catalogInfos = await getEntitiesByAll(extractedStrings, subversionBaseUrl, subversionAuthtoken, subversionUsername, subversionPassword, subversionDirectory, redmineBaseUrl, redmineProject, redmineApiKey, generateDocsScriptPath);
    catalogInfos == null ? void 0 : catalogInfos.map((element) => {
      let elm = element;
      entitiesFromSubversion.push(elm);
    });
    const entity1 = {
      apiVersion: "backstage.io/v1alpha1",
      kind: "Component",
      spec: {
        type: "service",
        lifecycle: "experimental",
        owner: "team-a"
      },
      metadata: {
        name: "entity-1",
        annotations: {
          "backstage.io/managed-by-location": "url:https://github.com/backstage/backstage/tree/master/.github",
          "backstage.io/managed-by-origin-location": "url:https://github.com/backstage/backstage/tree/master/.github"
        }
      }
    };
    const entity2 = {
      apiVersion: "backstage.io/v1alpha1",
      kind: "Component",
      spec: {
        type: "service",
        lifecycle: "experimental",
        owner: "team-a"
      },
      metadata: {
        name: "entity-2",
        annotations: {
          "backstage.io/managed-by-location": "url:https://github.com/backstage/backstage/tree/master/.github",
          "backstage.io/managed-by-origin-location": "url:https://github.com/backstage/backstage/tree/master/.github"
        }
      }
    };
    const entities = entitiesFromSubversion != void 0 ? entitiesFromSubversion : [entity1, entity2];
    await this.connection.applyMutation({
      type: "full",
      entities: entities.map((entity) => ({
        entity,
        locationKey: `subversion-provider:${this.env}`
      }))
    });
  }
}

exports.SubversionProvider = SubversionProvider;
//# sourceMappingURL=index.cjs.js.map
