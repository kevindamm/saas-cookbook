---
title: Introduction
author: Kevin Damm
---

# {{ $frontmatter.title }}

These tutorials can help you build a SaaS (Software as a Service) application,
guiding you towards economical and secure systems, with a varying amount of
detail as decided by how much you expand and explore.

<details>
<summary> <u> <i> Software at any Scale </i> </u>
</summary>

With edge servers you can benefit from an ability to scale while maintaining a
low baseline for ongoing costs, paying mostly for what you use instead of paying
for unused capacity or dealing with unresponsiveness whenever the site gets a
little too popular.  That's the promise of it, anyway.

It's true you can build some amazing applications with only edge services, and
it's true there are some applications that just make more sense to build on a
traditional server farm, or by regulations require it.  In these tutorials I
will be focusing on applications of edge compute that

- make sense for a young startup (even non-SaaS startups) to build

- make sense for non-startup SaaS, too

- make effective and economic use of edge compute
 (not forcing any square pegs into round holes)

In this and in most of my endeavors, I try to approach a problem in search of
its solutions, as opposed to looking for problems to which I can apply some
solution to.  All of these tutorials started with a functional requirement
such as collecting subscriber emails for sending product updates, collecting
votes on audience preference, sending and receiving game updates in the browser,
protecting against fraud and abuse, consistently aggregating values from
a multitude of sources, avoiding web site vulnerabilities, and so on.

There are more examples than what I've chosen to include here -- my selection
criteria is a blend of "important for most small or young web enterprises" and
"effective to do with edge compute" and "can be done economically".  Ties were
broken by finding the tutorials with minimal overlap and preferring examples
that didn't need to combine many dependencies at once.  I also tried to keep
each tutorial modular enough that you could select based on your priority and
not require that you go through each one (but I highly recommend all of the
security and tooling tutorials, at least).

</details>


## Motivation

There are already numerous sources, easily found on the internet or in books,
describing how to do most (all?) of the basic pieces found in these tutorials,
so why another one?  Why even write about this topic at all?

A few reasons &mdash; mainly it helps preserve my notes on how I've previously
done some of these things, it helps me be consistent across projects;
also the existing material is somewhat scattered, superficial.. and often
lacking in significant security considerations, for the sake of simplicity.

<details>
<summary><b>Why?</b>
</summary>

To help me through the process of reproducing certain online software, I present
these tutorials as high-level checklists first, with additional details revealed
when expanded or when certain embedded forms are populated.  I've tried to keep
the material useful to others despite it being mostly a fancy way of keeping
notes.  This usually helps 6-months-plus future me, as well.

<!-- TODO also, the checklists are persisted in localStorage so that you can work through the tutorials in multiple sittings, or as time allows -->


<details>
<summary><b>Who?</b>
</summary>

The person I've had in mind when writing these is a combination of a few people
who I know IRL who are curious and industrious, and have a range of ability with
writing software.  During my other attempts at writing tutorials and blogs, I've
found it easier to stay on message than to stay on complexity, level-of-detail.
So this time I'm trying something a little different, a kind of tiered approach
that includes the details and may get lengthy but tucks most of it away inside
collapsible `<detail>` blocks where only the `<summary>` is seen.

<details>
<summary><b>How?</b>
</summary>

This use of `detail` tags is a core part of HTML that doesn't rely on javascript
to give dynamic quality to the view.  I've tried to be consistent about that in
a lot of the tutorials, even using HTMX if it fits, because I think there is
enormous utility in using the languages where they're most suitable.  There is
plenty of Javascript despite that, as all of the Cloudflare workers and much of
the interaction within the tutorial pages, typically use javascript.

The projects I'm creating here should be robust enough to live on in your larger
efforts without a lot of toil, so I've tried to be selective with the libraries
and techniques being chosen.  As a precaution, because there is no certainty
with that kind of thing, I've also written it all in TypeScript and included
unit and integration tests that I hope hit an appropriate level of abstraction
(too precise a test can be brittle, too abstract will miss critical edge cases).

<details>
<summary><b>When?</b>
</summary>

I plan on getting the first 2-3 tutorials of each section during January 2025.

If I were to take a week writing each tutorial, the proposed seven chapters
would take half a year or so to complete.  Considering how deep I could go on
some of the tutorials' topics, a week seems a little ambitious, but if I'm
going to finish it then I think time-boxing it will be necessary.

More details TBD

</details></details></details></details>

<!-- TODO a convenient place for visualization of current progress -->


## Contributors

Currently there is only one author (Kevin Damm) but if you are interested in
co-authoring or submitting your own chapter entry, contact me with your choice
of article and some background on why you think you would be a good fit as
author or co-author.  I will be happy to accept high-quality submissions!

Contributors should of course follow the Community Guidelines as outlined in
the source repository
([CONTRIBUTING.md](https://github.com/kevindamm/edge-saas/main/CONTRIBUTING.md)).

