# Contributing guidelines for _Edge Saas Tutorials_ repository

## Branching Workflow

The repositories follow a lightweight workflow with few mainline branches plus
many short-term branches for features and patches.  The workflow follows the same
outline as documented in [GitHub flow].  If you are unfamiliar with git, consider
watching this [Git for Professionals Tutorial].

Each repository has a `main` branch which remains stable.  That is, it should
always be possible to deploy to production from the `main` branch of each repo.
Continuous Integration on the `dev` branch and merge actions on the `main` branch
will keep some errors in check.  Builds are not continuously deployed to production
but can be deployed to integration from a dev branch.  Deploying with DEBUG mode
and symbols can only be done by an individual.  To protect against accidentally
leaking DEBUG symbols and functionality to production, only automation-built artifacts
should be allowed to be deployed to production (safeguarded by deployment automation).

To contribute a change, for each feature/bugfix or version update follow these steps:

* create a dedicated branch (fork from `main` or `dev`)
* make changes on your branch (only include what is needed, add tests, split commits)
* create a pull request (follow the repository's template for PRs if one exists)
* address review comments (may involve multiple commit round-trips)
  * respect each other, see [](CODE_OF_CONDUCT.md)
* merge your pull request after meeting all branch protections
  * address merge conflicts if another PR was merged since HEAD (retain history)
* delete the feature/fix branch after merging

**One critical rule:** Do _NOT_ git rebase on commits that have already been pushed
or shared on github (or any remote repository).  Rebase is only for cleaning up a
local commit history before merging it into a shared team branch.

For a great video about git version control concepts, especially for rebase vs merge,
see [Git for Professionals] Tutorial.  Also note that GitHub rebase is not the same
as git rebase.

## Steps for creating good issues and/or pull requests

Any Pull Request of significant size or functionality should include a reference
to an issue that justifies the change.  Small patches, refactors and version
updates may bypass issue creation but must provide justification in the PR and
commit messages.

When creating issues, specify the intended/expected behavior and any details
about the runtime environment (browser, platform).  Avoid giving any personally
identifiable details about yourself or others.  Issues relating to your account
on any Symbol Not Found service should be provided via the web site while logged
in or in the application where you are having an issue.

When creating Pull Requests, provide a test case if possible and run the
integration tests if provided in the repository.  Build and Test setup steps
are included in each repository's `README.md`

## Community and behavioral expectations

See the [](CODE_OF_CONDUCT.md) for this organization's Code of Conduct all
contributers must agree to.  It is based on the same code of conduct as github.


[Git for Professionals Tutorial]: https://youtu.be/Uszj_k0DGsg

[GitHub flow]: https://docs.github.com/en/get-started/quickstart/github-flow
