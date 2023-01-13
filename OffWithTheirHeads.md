# The Skinny on Wordpress

Wordpress is a website builder and a content management system that's been around for 20 years. Starting out as a blogging platform, it has evolved over the years into a full blown website builder and Content Management System (CMS) that tells its' users that if they can dream it, they can DO IT! As a company, it has done a tremendous job at remaining relevant over the years so much so that the name "Wordpress" is synonymous with that good old "40% of website are Wordpress sites" statistic. 

Wordpress empowers Joe and Jane Schmoe to build an online presence for that cupcake company they've been dreaming about, or Clause House to branch off from his real estate firm and try and make it on his own! Wordpress solves a need for a lot of folks but it's no secret that it doesn't solve every problem. 

A traditional Wordpress site is built on what's called a **Monolithic** architecture. Everything is bundled together and integrated vertically. The client facing code is mostly HTML, CSS, and JavaScript but the heart and soul of core wordpress and it's plugins is PHP code. 

There aren't very many things that you can't theoretically do with Wordpress. But Wordpress shines the brightest when you do things the 'Wordpress way', and if you're developing on their platform, straying too far from the path that is intended has the potential to make things a lot more slow, insecure, and provide a worse experience for the client. Especially at scale. So much of what makes Wordpress great is reliant on plugins and if you're going over features for a project with a client you don't want to be wondering the entire time 'is there a plugin for that?'

### Pros of traditional wordpress
1. You can build just about anything without the need for programming knowledge with plugins
2. If all you need is a basic website, there is no configuration needed. You just fire up your wordpress.org instance, download a free theme, create your content, and bingo bango, you got yourself a website.
   
### Cons of traditional wordpress
1. If adding a bunch of plugins, there might be issues with your website. Some of the plugins might not interact with one another properly, security vulnerabilities, more maintenance, and speed drops.
2. Adding all of these plugins cause security risks. The more plugins, the more likely your data is insecure. There are plenty of ways to make it more secure with Wordpress, but those are done with plugins and have to be babysat long term.^1^

# A brief intro to the JAMStack

If you want to read some stats on growing Jamstack popularity the last few years then I encourage you to skim this article here (https://naturaily.com/blog/why-are-developers-choosing-jamstack-more-often) but here's the quick and dirty tl;dr on Jamstack: The JAM in Jamstack stands for **J**avaScript **A**PIs and **M**arkup. Which is just another way of saying: We build our sites with Javascript and Markup and use APIs to get information into our application.

It isn't a specific framework, but a flavor of production. You use the tools that you're comfortable with that are at your disposal as a JavaScript developer to get the job done quick. So when you hear Jamstack or 'headless cms' you can think 'Nerds using a wider array of more modern tooling to build a website that runs faster than a traditional monolithic site. 

How does it do this? Without getting too much into the technicalities, the information that is consumed on the client is pre-built for the most part and it's in general as close as possible to where the information is being requested.

You have more flexibility with a Jamstack because that type of development is unopinionated about what tools you use to make website. Which makes for a much better developer experience because they can use the tools that they are most comfortable with and if a better, battle tested, way of doing something comes along they are free to try it without having to write their own Wordpress plugin or shove an existing one that will have to be modified into their app.

# Why stray from the traditional way of doing things? 
### It is! For most people who can't hire developers and designers who are in charge of making the best gd website around
There are limitations that you have to get around. Developing a traditional monolithic Wordpress site has to be done in a certain fashion which does not lend itself to a good developer experience. If the developer is limited, the designers are limited, and potentially what you could say 'yes' to when a client asks fora feature is limited. 
1. development time will be faster, more flexible
2. the designers can focus on designing a really bad ass websites without worrying about limitations that creating wordpress sites traditionally have. Eg: animations and making things more interactive.
3. When you develop in React, it's in your best interest to think in components. These 'building block' chunks of code can ostensibly be pulled out of one React application and plugged into another. So what ends up happening over time is you have a large component library of past work that you can pull from one project and plug into another seamlessly.
4. 

# So that's the JAMStack, what's all this 'headless' business?
A content management system being headless is really no more complicated that the UI being handled by HTML, CSS, and JavaScript, while the backend is handled by something like Wordpress, Drupal, Sanity, Contentful and [many more](https://www.stateofdigitalpublishing.com/digital-platform-tools/best-headless-cms/) 
## What are the pros and cons of turning wordpress into a headless CMS?
### pros
1. More performant websites
2. ability to leverage more modern front end tooling outside of wordpress ecosystem
3. Better developer experience
### cons
1. Slightly higher hosting costs because you have to host the front end and your wordpress instance separately
2. 'More expensive' in general
   1. Yes, definitely. Considering the fact that you need somebody who knows developing in a JamStack in order to accomplish this, but 116 already has a dev team budgeted out which is most of what they are talking about when they say this.
3. 'Some plugins might not work'
   1. Sure. I'm sure that there are a lot of plugins that won't work with a decoupled Wordpress instance but the ones that a client might want to install a plugin after we ship it and that might not work but the plugins that they'd want for major site functionality like Yoast, ACF, Polls, Google Schema, Gutenburg, and forms can all be accessed with an extended WPGraphQL - [list of plugins extendable by WPGraphQL](https://www.wpgraphql.com/extensions)
4. Additional complexity
   1. insofar as: relying on devs to trouble shoot, potentially maintaining two separate codebases (depending on the CMS you choose, there really isn't a codebase that needs maintenance with the Wordpress instance that I've seen that can't be done from the admin dashboard by a non-technical person.) - https://www.wpbeginner.com/beginners-guide/wordpress-maintenance-tasks-to-perform-regularly/
5. Weaker tools for content creators
   1. I'm not super sure what they mean by this. I found this as a potential pitfall in this wordpressVIP blog post (https://wpvip.com/2021/08/19/pros-and-cons-of-a-headless-cms/) but with Live Preview on Gastsby cloud along with the speed of incremental builds I'm struggling to find where the issue is here.
   2. I found this quote spread across three articles: "New headless CMSs are built considering the developers’ needs, thus many systems don’t contain intrusive content creation tools, such as the WYSIWYG editor for live preview. Thus, your non-technical staff has to spend more time doing their jobs." I think that they aren't keeping in mind the tools that are available like Live Preview, incremental builds, and WPGraphQL.
   3. So what people that say things like this mean is: you don't get the traditional content editing experience that you would get with a vanilla wordpress wite and that is just wholly not the case. With live preview and incremental builds with Gatsby, this functionality has been available for a couple of years now. https://www.gatsbyjs.com/blog/2020-07-07-wordpress-source-beta/#gatsby-skip-here
6. The problem that I'm finding with identifying the potential cons of decoupling a wordpress instance is that a lot of the information that is saying that this is a bad idea isn't written by developers. It seems like the things that folks are saying 'isn't possible' in a headless wordpress site are really saying 'this isn't possible if you aren't a developer'. There is a plug in called 'WPGraphQL for ACF' that makes the WYSIWYG editor possible and there's a similar plugin called 'WPGraphQL for WooCommerce' that makes WooCommerce possible. 
## Why gatsby specifically? 
## are there other options?
There are more front end options than you can shake a stick at, honestly. But Gastby has been optimized for speed and is built on top of React which is the most widely used front end framework in the biz.
You could definitely use something like Next.js or 
## some of the selling points of gatsby
## what about gatsby is good for a marketing agency specifically?
1. you're more likely able to say 'yes we can' when a client wants something that they may have seen something fancy on a competitor's website.
   1. If a client asks 'can I have this feature'? The immediate thought isn't 'is there a plug-in for that? You can just roll it right into the site with the help of a powerful front-end framework and its' libraries
     - libraries: 
       - React DnD: provides the necessary possibilities to create Trello like complicated drag and drop interfaces
       - React-motion: a popular animation library
       - Material UI: An enormous repository of customizable components that designers can pull information from that will be quick to develop.
2. If a client is opinionated about their CMS, that is not an issue. 
3. Since the side is hosted on The Edge, it provides a better experience for the clients using your client's website.
   1. Edge Computing:  At its simplest, edge computing is the practice of capturing, processing, and analyzing data near where it is created. So, instead of all of the computationally intensive work that needs to be done in order for a client to see their website being done in a centralized server, it's being done on the server closest to the client in a distributed network of servers. 
   2. The reason this is so cool: Normally your server resources are constantly required and if there is a problem with your server resources, your site goes down. Say WPEngine goes down for a little bit, you might have problems _building_ your gatsby site or making changes while this occurs, but the live site that your client is seeing will remain just as it was before the server went down because it has already been built and potentially all of data has already been requested.
   3. Normally: Information is requested from the client, the request travels to a central server to get that information, and it's sent back to the client. Edge: the requested information only has to go to the server that is closest to it in a distributed network of servers. 
### Why should we hitch our company wagon to this piece of technology that we've never heard of?
[These folks did](https://www.gatsbyjs.com/agencies?) and if you click through a little you'll be able to see what awesome websites they're making with Gatsby.
# How much more will it cost?
I am willing to eat the cost of hosting websites in the first six months. I believe in this technology and what it could do for the agency so I propose that we take the hosting costs out of my salary. 
There will be some kinks to work out but I am confident that this is a fantastic long term solution. I think that we can get away with the Professional tier to start and then graduate to the Agency tier and become a Gatsby Approved agency partner once we get a few baller sites under our belts. 
The cost for a year will be $510 and we'd get 10 sites that are able to max out at 5,000 pages each.
https://www.gatsbyjs.com/pricing
# What will the development process look like as opposed to how it is now?
The only people that making this switch will affect are the devs. The designers will have a little more flexibility with what is possible but other than that, the clients will be using the same CMS that they are used to, the back end will still be hosted on WP Engine, and they'll be able to preview potential changes that they are making to the site without having to log in to their Gatsby Cloud account which is where the front end will be hosted. 

--------------------------------------------------------------------------------------------

# Notes on youtube video Gatsby for Agencies - https://www.youtube.com/watch?v=BnqD8OBrdb4
### Balancing Client's needs
#### Agency Experience Vs. Client Experience
- Sometimes diametrically opposed
  - Speed:
    - Agency wants to develop faster, how quickly can you build new things?
    - Client wants their website to be faster. More performance focused.
  - Security: 
    - Agency wants website tech to be dependable. 
    - Client wants their data safe
  - Scalability: 
    - Agency wants their web tech to scale across multiple projects. Can I use the same tech across multiple types of projects?
    - Client wants the website to continually grow and for the tech to support that.
### How Jamstack Helps balance client needs
#### Major problem that Jamstack solves:
    - Not having to pick something to specialize in. You can't be an expert in everything, you basically have to pick a flavor of what your agency is going to specialize in and accept all of the baggage that comes along with that.
#### Jamstack is a cloud-native modern architecture pattern for building better websites. The JAM in Jamstack stands for Javascript, APIs, and Markup.
    - Best of breed in services and content management systems while still getting a lot of the advantages that the CMS or Front end framework of choice might offer.
    - Secure, performant, and MOST IMPORTANTLY - *flexible*
      - Sometimes you want to have your box of tricks that you know how to do very well but other times you might want to be able to say 'yes' to a client more often and not have them 'choose out' of your services.
#### Four pillars of JAMStack:
    1. Security
       1. Static sites are decoupled from the server and separate from an open database. Even if plugins are updated constantly, and everything on the wordpress backend is kept up to date there is still an open connection to a live database with these monolithic site architecture which is potentially an open back door in your site architecture. 
    2. Scalability
       1. JAMStack sites are on the edge. https://www.cloudflare.com/learning/cdn/glossary/edge-server/
       2. No need to boost server bandwidth to meet a spike in clients growing needs.
       3. It's a different type of ball game when the front end of your website has a constant need for server resources. If WPEngine goes down for some reason then your entire site goes down. If your server goes down with a Jamstack site, you might have issues updating or building that site, but the live site and therefore client experience is unaffected.
    3. Affordability
       1. Hosting on the edge means that your static site is just sitting there without the need for a call to the server on every page refresh. Your server will only spin up if there are changes to the CMS that trigger a rebuild or there's a serverless function call which will cost a negligible amount of resources. 
    4. Productivity
       1. For Gatsby specifically: It lives in the React ecosystem. A whole world of dev tools.
       2. Gatsby has a myriad of ✨starters and themes✨ to handle a lot of the configuration and set up that goes with starting a new project out of the box. You also have the option of creating your own custom starters that have all of tooling you use for every project all set up and ready to go. 
### How Gatsby helps. Why Gatsby?
    1. Gatsby is an open source framework coupled with a vertically integrated cloud. 
         - Gatsby open source: The Framework that you develop in and all the thousands of fancy plugins are free!
         - Gatsby Cloud: Optimized builds that speed up the time it takes to serve/ update your website, hosting, previews, and serverless functions. This helps with both developer experience (faster build times, templates, product tooling) and user experience (blazing fast sites and build times)
    2. How Gatsby differentiates themselves:
       1. Connect and content or data
          1. The data layer
            - If a client wants Stripe payment integration, a blog section powered by Wordpress, and a store that uses Shopify, that is possible! Because of Gatsby's rich plug-in ecosystem, getting data from all of those different sources is as simple as a few lines of code. The client can still use the CMS of their choice, and they can still use Shopify or any of these other third part integrations and the front end of the website more seamlessly integrates all of these services for a fast, secure, unified experience. 
       2. work with modern tech and tooling 
          1. Enormous React ecosystem of developer tools
       3. start and finish projects faster
          1. Starters, themes, plugins. 
       4. fast performance
          1. Build and hosting solution that can build incrementally large 10-15k page sites in seconds. There is very little time between updating the CMS and seeing those changes on your site.
### Why Gatsby Cloud?
    Four things that GC helps you do better as an agency:
        1. create
           1. integration out of the box with many popular headless CMS's
        2. collaborate
           1. Each Gatsby site has a live 'preview url' that updates every time there is a change to the code or the CMS gets updates
           2. incremental builds: doesn't rebuild the entire site: only rebuilds what changed in the CMS
        3. deliver
           1. Automatic deployments
           2. Free SSL, Edge Network, HTTPS/2, Global PoPs
           3. Build on top of FAST, on of the largest, most well known, and most secure CDNs in the game
        4. organize
           1. Workspaces: Little silos for end clients to have all of the different content they have in one spot. They can attach billing? I'm actually kind of unclear about what this is.

# Sources
1: https://www.wpbeginner.com/beginners-guide/reasons-why-wordpress-site-gets-hacked/


# cut content
1. Choose your hosting provider and snag a domain name
    - typically a self hosted solution is what Joe Schmoe will do. A place like Bluehost which offers shared servers for you to keep your website on
2. Download wordpress and spin up their own instance
    - Some hosting sites will do this for you. As a dev who likes to work on stuff locally and then push to a remote repo, I have something different that achieves the same results as my solution.
3. Pick a theme for the non-techy user or start writing HTML, CSS, JavaScript, and PHP for the nerds
    - The quick and dirty of PHP: developed in the mid-nineties and used to create the initial infrastructure of huge companies like Facebook, Wikipedia, and (obviously) Wordpress. When developing for Wordpress specifically, it's a language that is woven into your HTML reaches and reaches for data that you have in the backend of your application through different "methods". You can think of a method as a single command that executes a bundle of code, normally something self describing like WP_GET_ALL_POSTS().
4. Ship it! There is a TON more customization and additions that one could do for a Wordpress site but that's the bare bones of traditional Wordpress development. You can make an e-commerce store, start a podcast, make a job board site, all that jazz. If you can dream it, you can do it with Wordpress 🤓