(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),i=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),b=n("pD55"),p=n("8Aig"),d=n("ReZb"),u=n("GCVy"),s=n("+6vE");var m=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},j=n("gnlW"),O=n("mwnC"),f=n("/Rw0"),g=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var v=N,w=n("MfeC");function C(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var a=w.a.getVariantsForPage(e.root,n.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(C.Menu,{direction:e.direction,width:e.menuWidth},i)))}C.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var k=C,x=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),E=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),A=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,y=o.title,N=o.description,C=o.status,S=o.source,D=o.additionalContributors,B=void 0===D?[]:D,V=w.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:d.a,Note:u.a,Prompt:m,PromptReply:h,Screenshot:j.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(b.a,{title:y,description:N}),r.a.createElement(p.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(O.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),r.a.createElement(E,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},y),N))),null!=V?r.a.createElement(I,null,r.a.createElement(k,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:V,location:a})):null),n.tableOfContents.items?r.a.createElement(A,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(v,{items:n.tableOfContents.items})):null,r.a.createElement(T,null,C||S?r.a.createElement(l.k,{mb:3,alignItems:"center"},C?r.a.createElement(g.a,{status:C}):null,r.a.createElement(l.e,{mx:"auto"}),S?r.a.createElement(f.a,{href:S}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(s.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(B.map((function(e){return{login:e}})))}))))))}},eDat:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("O6H6"),o={},r={_frontmatter:o},c=i.a;function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm audit [--json] [--production] [--audit-level=(low|moderate|high|critical)]\nnpm audit fix [--force|--package-lock-only|--dry-run|--production|--only=(dev|prod)]\n\ncommon options: [--production] [--only=(dev|prod)]\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"The audit command submits a description of the dependencies configured in\nyour project to your default registry and asks for a report of known\nvulnerabilities.  If any vulnerabilities are found, then the impact and\nappropriate remediation will be calculated.  If the ",Object(l.b)("inlineCode",{parentName:"p"},"fix")," argument is\nprovided, then remediations will be applied to the package tree."),Object(l.b)("p",null,"The command will exit with a 0 exit code if no vulnerabilities were found."),Object(l.b)("p",null,"Note that some vulnerabilities cannot be fixed automatically and will\nrequire manual intervention or review.  Also note that since ",Object(l.b)("inlineCode",{parentName:"p"},"npm audit\nfix")," runs a full-fledged ",Object(l.b)("inlineCode",{parentName:"p"},"npm install")," under the hood, all configs that\napply to the installer will also apply to ",Object(l.b)("inlineCode",{parentName:"p"},"npm install")," -- so things like\n",Object(l.b)("inlineCode",{parentName:"p"},"npm audit fix --package-lock-only")," will work as expected."),Object(l.b)("p",null,"By default, the audit command will exit with a non-zero code if any\nvulnerability is found. It may be useful in CI environments to include the\n",Object(l.b)("inlineCode",{parentName:"p"},"--audit-level")," parameter to specify the minimum vulnerability level that\nwill cause the command to fail. This option does not filter the report\noutput, it simply changes the command's failure threshold."),Object(l.b)("h3",null,"Audit Endpoints"),Object(l.b)("p",null,"There are two audit endpoints that npm may use to fetch vulnerability\ninformation: the ",Object(l.b)("inlineCode",{parentName:"p"},"Bulk Advisory")," endpoint and the ",Object(l.b)("inlineCode",{parentName:"p"},"Quick Audit")," endpoint."),Object(l.b)("h4",null,"Bulk Advisory Endpoint"),Object(l.b)("p",null,"As of version 7, npm uses the much faster ",Object(l.b)("inlineCode",{parentName:"p"},"Bulk Advisory")," endpoint to\noptimize the speed of calculating audit results."),Object(l.b)("p",null,"npm will generate a JSON payload with the name and list of versions of each\npackage in the tree, and POST it to the default configured registry at\nthe path ",Object(l.b)("inlineCode",{parentName:"p"},"/-/npm/v1/security/advisories/bulk"),"."),Object(l.b)("p",null,"Any packages in the tree that do not have a ",Object(l.b)("inlineCode",{parentName:"p"},"version")," field in their\npackage.json file will be ignored.  If any ",Object(l.b)("inlineCode",{parentName:"p"},"--omit")," options are specified\n(either via the ",Object(l.b)("inlineCode",{parentName:"p"},"--omit")," config, or one of the shorthands such as\n",Object(l.b)("inlineCode",{parentName:"p"},"--production"),", ",Object(l.b)("inlineCode",{parentName:"p"},"--only=dev"),", and so on), then packages will be omitted\nfrom the submitted payload as appropriate."),Object(l.b)("p",null,"If the registry responds with an error, or with an invalid response, then\nnpm will attempt to load advisory data from the ",Object(l.b)("inlineCode",{parentName:"p"},"Quick Audit")," endpoint."),Object(l.b)("p",null,"The expected result will contain a set of advisory objects for each\ndependency that matches the advisory range.  Each advisory object contains\na ",Object(l.b)("inlineCode",{parentName:"p"},"name"),", ",Object(l.b)("inlineCode",{parentName:"p"},"url"),", ",Object(l.b)("inlineCode",{parentName:"p"},"id"),", ",Object(l.b)("inlineCode",{parentName:"p"},"severity"),", ",Object(l.b)("inlineCode",{parentName:"p"},"vulnerable_versions"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"title"),"."),Object(l.b)("p",null,"npm then uses these advisory objects to calculate vulnerabilities and\nmeta-vulnerabilities of the dependencies within the tree."),Object(l.b)("h4",null,"Quick Audit Endpoint"),Object(l.b)("p",null,"If the ",Object(l.b)("inlineCode",{parentName:"p"},"Bulk Advisory")," endpoint returns an error, or invalid data, npm will\nattempt to load advisory data from the ",Object(l.b)("inlineCode",{parentName:"p"},"Quick Audit")," endpoint, which is\nconsiderably slower in most cases."),Object(l.b)("p",null,"The full package tree as found in ",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," is submitted, along\nwith the following pieces of additional metadata:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"npm_version")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"node_version")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"platform")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"arch")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"node_env"))),Object(l.b)("p",null,"All packages in the tree are submitted to the Quick Audit endpoint.\nOmitted dependency types are skipped when generating the report."),Object(l.b)("h4",null,"Scrubbing"),Object(l.b)("p",null,'Out of an abundance of caution, npm versions 5 and 6 would "scrub" any\npackages from the submitted report if their name contained a ',Object(l.b)("inlineCode",{parentName:"p"},"/")," character,\nso as to avoid leaking the names of potentially private packages or git\nURLs."),Object(l.b)("p",null,"However, in practice, this resulted in audits often failing to properly\ndetect meta-vulnerabilities, because the tree would appear to be invalid\ndue to missing dependencies, and prevented the detection of vulnerabilities\nin package trees that used git dependencies or private modules."),Object(l.b)("p",null,"This scrubbing has been removed from npm as of version 7."),Object(l.b)("h4",null,"Calculating Meta-Vulnerabilities and Remediations"),Object(l.b)("p",null,"npm uses the\n",Object(l.b)("a",{parentName:"p",href:"http://npm.im/@npmcli/metavuln-calculator"},Object(l.b)("inlineCode",{parentName:"a"},"@npmcli/metavuln-calculator")),'\nmodule to turn a set of security advisories into a set of "vulnerability"\nobjects.  A "meta-vulnerability" is a dependency that is vulnerable by\nvirtue of dependence on vulnerable versions of a vulnerable package.'),Object(l.b)("p",null,"For example, if the package ",Object(l.b)("inlineCode",{parentName:"p"},"foo")," is vulnerable in the range ",Object(l.b)("inlineCode",{parentName:"p"},">=1.0.2\n<2.0.0"),", and the package ",Object(l.b)("inlineCode",{parentName:"p"},"bar")," depends on ",Object(l.b)("inlineCode",{parentName:"p"},"foo@^1.1.0"),", then that version\nof ",Object(l.b)("inlineCode",{parentName:"p"},"bar")," can only be installed by installing a vulnerable version of ",Object(l.b)("inlineCode",{parentName:"p"},"foo"),".\nIn this case, ",Object(l.b)("inlineCode",{parentName:"p"},"bar"),' is a "metavulnerability".'),Object(l.b)("p",null,"Once metavulnerabilities for a given package are calculated, they are\ncached in the ",Object(l.b)("inlineCode",{parentName:"p"},"~/.npm")," folder and only re-evaluated if the advisory range\nchanges, or a new version of the package is published (in which case, the\nnew version is checked for metavulnerable status as well)."),Object(l.b)("p",null,"If the chain of metavulnerabilities extends all the way to the root\nproject, and it cannot be updated without changing its dependency ranges,\nthen ",Object(l.b)("inlineCode",{parentName:"p"},"npm audit fix")," will require the ",Object(l.b)("inlineCode",{parentName:"p"},"--force")," option to apply the\nremediation.  If remediations do not require changes to the dependency\nranges, then all vulnerable packages will be updated to a version that does\nnot have an advisory or metavulnerability posted against it."),Object(l.b)("h3",null,"Exit Code"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"npm audit")," command will exit with a 0 exit code if no vulnerabilities\nwere found.  The ",Object(l.b)("inlineCode",{parentName:"p"},"npm audit fix")," command will exit with 0 exit code if no\nvulnerabilities are found ",Object(l.b)("em",{parentName:"p"},"or")," if the remediation is able to successfully\nfix all vulnerabilities."),Object(l.b)("p",null,"If vulnerabilities were found the exit code will depend on the\n",Object(l.b)("inlineCode",{parentName:"p"},"audit-level")," configuration setting."),Object(l.b)("h3",null,"Examples"),Object(l.b)("p",null,"Scan your project for vulnerabilities and automatically install any compatible\nupdates to vulnerable dependencies:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ npm audit fix\n")),Object(l.b)("p",null,"Run ",Object(l.b)("inlineCode",{parentName:"p"},"audit fix")," without modifying ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules"),", but still updating the\npkglock:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ npm audit fix --package-lock-only\n")),Object(l.b)("p",null,"Skip updating ",Object(l.b)("inlineCode",{parentName:"p"},"devDependencies"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ npm audit fix --only=prod\n")),Object(l.b)("p",null,"Have ",Object(l.b)("inlineCode",{parentName:"p"},"audit fix")," install SemVer-major updates to toplevel dependencies, not\njust SemVer-compatible ones:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ npm audit fix --force\n")),Object(l.b)("p",null,"Do a dry run to get an idea of what ",Object(l.b)("inlineCode",{parentName:"p"},"audit fix")," will do, and ",Object(l.b)("em",{parentName:"p"},"also")," output\ninstall information in JSON format:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ npm audit fix --dry-run --json\n")),Object(l.b)("p",null,"Scan your project for vulnerabilities and just show the details, without\nfixing anything:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ npm audit\n")),Object(l.b)("p",null,"Get the detailed audit report in JSON format:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ npm audit --json\n")),Object(l.b)("p",null,"Fail an audit only if the results include a vulnerability with a level of moderate or higher:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ npm audit --audit-level=moderate\n")),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"audit-level")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: null"),Object(l.b)("li",{parentName:"ul"},'Type: null, "info", "low", "moderate", "high", "critical", or "none"')),Object(l.b)("p",null,"The minimum level of vulnerability for ",Object(l.b)("inlineCode",{parentName:"p"},"npm audit")," to exit with a non-zero\nexit code."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"dry-run")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Indicates that you don't want npm to make any changes and that it should\nonly report what it would have done. This can be passed into any of the\ncommands that modify your local installation, eg, ",Object(l.b)("inlineCode",{parentName:"p"},"install"),", ",Object(l.b)("inlineCode",{parentName:"p"},"update"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"dedupe"),", ",Object(l.b)("inlineCode",{parentName:"p"},"uninstall"),", as well as ",Object(l.b)("inlineCode",{parentName:"p"},"pack")," and ",Object(l.b)("inlineCode",{parentName:"p"},"publish"),"."),Object(l.b)("p",null,"Note: This is NOT honored by other network related commands, eg ",Object(l.b)("inlineCode",{parentName:"p"},"dist-tags"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"owner"),", etc."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"force")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Removes various protections against unfortunate side effects, common\nmistakes, unnecessary performance degradation, and malicious input."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Allow clobbering non-npm files in global installs."),Object(l.b)("li",{parentName:"ul"},"Allow the ",Object(l.b)("inlineCode",{parentName:"li"},"npm version")," command to work on an unclean git repository."),Object(l.b)("li",{parentName:"ul"},"Allow deleting the cache folder with ",Object(l.b)("inlineCode",{parentName:"li"},"npm cache clean"),"."),Object(l.b)("li",{parentName:"ul"},"Allow installing packages that have an ",Object(l.b)("inlineCode",{parentName:"li"},"engines")," declaration requiring a\ndifferent version of npm."),Object(l.b)("li",{parentName:"ul"},"Allow installing packages that have an ",Object(l.b)("inlineCode",{parentName:"li"},"engines")," declaration requiring a\ndifferent version of ",Object(l.b)("inlineCode",{parentName:"li"},"node"),", even if ",Object(l.b)("inlineCode",{parentName:"li"},"--engine-strict")," is enabled."),Object(l.b)("li",{parentName:"ul"},"Allow ",Object(l.b)("inlineCode",{parentName:"li"},"npm audit fix")," to install modules outside your stated dependency\nrange (including SemVer-major changes)."),Object(l.b)("li",{parentName:"ul"},"Allow unpublishing all versions of a published package."),Object(l.b)("li",{parentName:"ul"},"Allow conflicting peerDependencies to be installed in the root project."),Object(l.b)("li",{parentName:"ul"},"Implicitly set ",Object(l.b)("inlineCode",{parentName:"li"},"--yes")," during ",Object(l.b)("inlineCode",{parentName:"li"},"npm init"),".")),Object(l.b)("p",null,"If you don't have a clear idea of what you want to do, it is strongly\nrecommended that you do not use this option!"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"json")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Whether or not to output JSON data, rather than the normal output."),Object(l.b)("p",null,"Not supported by all npm commands."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"package-lock-only")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"If set to true, it will update only the ",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json"),", instead of\nchecking ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," and downloading dependencies."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"omit")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: 'dev' if the ",Object(l.b)("inlineCode",{parentName:"li"},"NODE_ENV")," environment variable is set to\n'production', otherwise empty."),Object(l.b)("li",{parentName:"ul"},'Type: "dev", "optional", or "peer" (can be set multiple times)')),Object(l.b)("p",null,"Dependency types to omit from the installation tree on disk."),Object(l.b)("p",null,"Note that these dependencies ",Object(l.b)("em",{parentName:"p"},"are")," still resolved and added to the\n",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," or ",Object(l.b)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json")," file. They are just not\nphysically installed on disk."),Object(l.b)("p",null,"If a package type appears in both the ",Object(l.b)("inlineCode",{parentName:"p"},"--include")," and ",Object(l.b)("inlineCode",{parentName:"p"},"--omit")," lists, then\nit will be included."),Object(l.b)("p",null,"If the resulting omit list includes ",Object(l.b)("inlineCode",{parentName:"p"},"'dev'"),", then the ",Object(l.b)("inlineCode",{parentName:"p"},"NODE_ENV")," environment\nvariable will be set to ",Object(l.b)("inlineCode",{parentName:"p"},"'production'")," for all lifecycle scripts."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspace")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default:"),Object(l.b)("li",{parentName:"ul"},"Type: String (can be set multiple times)")),Object(l.b)("p",null,"Enable running a command in the context of the configured workspaces of the\ncurrent project while filtering by running only the workspaces defined by\nthis configuration option."),Object(l.b)("p",null,"Valid values for the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config are either:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Workspace names"),Object(l.b)("li",{parentName:"ul"},"Path to a workspace directory"),Object(l.b)("li",{parentName:"ul"},"Path to a parent workspace directory (will result to selecting all of the\nnested workspaces)")),Object(l.b)("p",null,"When set for the ",Object(l.b)("inlineCode",{parentName:"p"},"npm init")," command, this may be set to the folder of a\nworkspace which does not yet exist, to create the folder and set it up as a\nbrand new workspace within the project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspaces")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Enable running a command in the context of ",Object(l.b)("strong",{parentName:"p"},"all")," the configured\nworkspaces."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-install"},"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/using-npm/config"},"config"))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-audit-md-467a4e2d9d856a7bfb50.js.map