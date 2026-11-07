---
title: Bowen AI
summary: "A question-answering assistant for students that answers from course documents and shows its sources."
status: building
stack: [Python, FastAPI, Qdrant, Gemini]
year: 2026
order: 1
# demo: https://TODO
# repo: https://github.com/TODO
---

## Problem

TODO: one sentence on who asked the question and what went wrong without this tool (for example, students searching long documents by hand).

## What I built

A retrieval-augmented chatbot. Documents are split into chunks, embedded and stored in Qdrant. A question retrieves the closest chunks, and Gemini answers using only those chunks. Every answer lists the sources it came from.

TODO: add the architecture diagram here once the cut-down version is deployed.

## The hard decision

TODO: pick one real trade-off from the build. Examples: chunk size and overlap, the score threshold below which the bot refuses to answer, or why auth was removed from this repo and moved into a separate platform.

## Result

TODO: paste the retrieval hit rate from `eval/RESULTS.md` (k=3 and k=5) and the number of unanswerable questions it correctly refused. Do not publish a number you did not measure.
