---
title: Launching a Promotional Site
author: Kevin Damm
---

# {{ $frontmatter.title }}

One of the first things you should do when starting out is build a web presence
that you can link to or mention in marketing or even in conversation.  This can
serve as a point of information that others can forward along on your behalf,
too.  It doesn't have to be complicated, but it should include at least the
mission, information about the current status and a Call-to-Action (usually in
the form of interested parties sharing their email address to receive updates).

Even if you don't have a demo ready yet, having a presence is still a good idea.
It's not just about planting a flag in the ground or showing to others that
You're Serious About This.  It is an effective way to test the market for your
idea and analyze whether it makes sense to continue allocating your time to it.

This tutorial will show you how to build a basic promotional site and host it
for free, with a handful of options each allowing you to link a custom domain
to it, too.

## Local Dev

TODO...

## Pages (on github)

TODO...

<details><summary>Preview versions of site only on certain branch updates</summary>
...</details>

## Pages (Cloudflare)

TODO... describe the direct (via `wrangler` tool) and automatic (continuously
deployed when github branches update)


### Deploy with `wrangler`


### Continuous Deployment


<details><summary>Preview versions of site only on certain branch updates</summary>
...

<details><summary>Why?</summary>
If you are maintaining your application on the same branch, you may find that
the continuous-deployment triggers even when there aren't any site-relevant
updates.

Your account with the host will have a limit to how many build runs it will do,
and it will either stop running after that (until the next accounting
window gives you quota) or start costing you more.
</details>

You then need to do any non-site development on branches that do not match these
patterns.  For this book, I have a `dev-book` branch for chapter content updates
and `dev-workers` for parts of the site that aren't in the statically-generated
content.  I also have a wildcard `dev-book-*` rule for building preview
versions of chapters as they are written.

This way, `dev-book` can be pulled into `main` without triggering a site-update
and `dev-workers` can be updated, and update `main`, as often as I want without
worrying about running against my monthly quota.  For a team size greater than
one this becomes even more likely, but even as a solo dev with a handful of
projects, it's easier to define a narrow rule now, while setting up the CD
process, rather than forget about it until it becomes an issue.

</details>

TODO ...rest of setup and testing it
