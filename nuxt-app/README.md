# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# My Fixed Errors
**Thrown error TS18028: 
Private identifiers are only available when 
targeting ECMAScript 2015 and higher.**

`E:\repos\demo\nuxt-app\node_modules\mime\dist\src\Mime.d.ts`

### Technical Information to the setup: ###
* IDE is VSCode
* Version: 1.87.2 (system setup)
* Commit: 863d2581ecda6849923a2118d93a088b0745d9d6
* Date: 2024-03-08T15:20:17.278Z
* Electron: 27.3.2
* ElectronBuildId: 26836302
* Chromium: 118.0.5993.159
* Node.js: 18.17.1
* V8: 11.8.172.18-electron.0
* OS: Windows_NT x64 10.0.19045


```
type TypeMap = {
    [key: string]: string[];
};
export default class Mime {
        #private;
```
    
Outcommented the 

    //    #private;

line because of error TS18028.
    
Occured during compiling a *.ts file with:
    
`npx tsc ./demo/test.ts`
    
targeting in `tsconfig.json` didn't resolve the problem. 
  

`~/nuxt-app/tsconfig.json`   
```     
{
    "extends": "./.nuxt/tsconfig.json",
    "compilerOptions": {
        "module": "ES2020",
        "target": "ES2015"
    },
    "exclude": ["node_modules"]
}
```
Maybe, because of too many Mime Versions used
in Nuxt 3 installed with @latest option.

`npm list mime` 

    nuxt-app@ E:\repos\demo\nuxt-app
    ├── mime@4.0.1
    └─┬ nuxt@3.11.1
    ├─┬ nitropack@2.9.4
    │ ├─┬ @cloudflare/kv-asset-handler@0.3.1
    │ │ └── mime@3.0.0
    │ ├── mime@4.0.1 deduped
    │ └─┬ serve-static@1.15.0
    │   └─┬ send@0.18.0
    │     └── mime@1.6.0
    └─┬ unenv@1.9.0
        └── mime@3.0.0

`node -v`
```
v21.7.1
```

`tsc -v`
```
Version 5.4.3
 ```   
Here the dependencies automatically created by

`npx nuxi@latest init`,

`npm install -g typescript@latest`,

`npm install webpack@latest --save-dev` and

`npm install mime@latest` in the

`~/nuxt-app/package.json`
```
{
    "dependencies": {
    "mime": "^4.0.1",
    "vue": "^3.4.21",
    "vue-router": "^4.3.0"
    },
    "devDependencies": {
    "@nuxt/typescript-build": "^3.0.2",
    "@types/node": "^20.11.30",
    "@types/webpack": "^5.28.5",
    "nuxt": "^3.11.1",
    "ts-node": "^10.9.2",
    "typescript": "^5.4.3",
    "webpack": "^5.91.0"
    }
}
```
**So the actual Code of the**
  
  `E:\repos\demo\nuxt-app\node_modules\mime\dist\src\Mime.d.ts`

```
    type TypeMap = {
        [key: string]: string[];
    };
    
    export default class Mime {
        
        //  #private;

        constructor(...args: TypeMap[]);
        define(typeMap: TypeMap, force?: boolean): this;
        getType(path: string): string | null;
        getExtension(type: string): string | null;
        getAllExtensions(type: string): Set<string> | null;
        _freeze(): this;
        _getTestState(): {
            types: Map<string, string>;
            extensions: Map<string, string>;
        };
    }
    export {};

