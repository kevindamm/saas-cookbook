# Supercloud SaaS Cookbook (source repository)

A cookbook of SaaS recipes and guidance on system design, with a focus on
economical use of cloud services and an attention to security, integrity,
scalability and privacy.

The term "Supercloud" was suggested by Cloudflare in 2022 to describe their
particular flavor of hyperscaling cloud deployment that has excellent
developer productivity.  And I agree, some of their features set them apart
from other hyperscalers (GCP, AWS, Azure, et al.) especially their Durable
Objects, their networking & security solutions, and their attention to tooling.
The free bandwidth on their storage solution and very generous free tier in
general are also appealing, and projects that want to call out to LLMs or
be an MCP server for LLMs will find a lot of the build and deploy steps
already taken care of.  In this book I will try to demonstrate these features
that I particularly enjoy.  This isn't sponsored by Cloudflare, I'm just
sharing what I've learned from their docs and from various experiments.

## Read, Build, Run

This repository is composed of three main parts:

- `book/` containing markdown files of the book's contents, being developed in
the open and hosted on Pages.  The book itself contains more information about
its motivation and how to get your development environment and accounts set up.

- `demo/` containing full implementations of a few demonstrations that are
referenced in the book and can act as starting points for your own projects.

- `workers/` containing the Cloudflare Workers implementation of additional
features provided by the book's website.  The `accounts` worker handles
authentication and registering of accounts on the site, tying them to the
identity provider, and identity, of the user's choice.  The `api` worker
handles comments and voting, etc.  The `admin` worker has restricted access
and is the administrative interface for moderation and other operations.

Each directory has its own README further describing its contents.


## Contributing

This is still very early days, but after I've written the first few chapters
and have the basic structure of the big demos, I will be asking around for
peers who would like to co-author a chapter or recipe, improve the UI/UX and
otherwise help out.  If you're interested, watch this space!
