---
title: Bowen AI
summary: "A question-answering assistant for students that answers from course documents and shows its sources."
status: building
stack: [Python, FastAPI, Qdrant, Gemini]
year: 2026
order: 2
repo: https://github.com/Samd43366/bowen-ai
---

## Problem

University information lives in long documents such as the handbook and course materials, and finding one answer in them by hand is slow. Bowen AI lets a student ask in plain language and answers from those documents, with the source shown.

## What I built

A retrieval-augmented chatbot. Documents are split into chunks, embedded and stored in Qdrant. A question retrieves the closest chunks, and Gemini answers using those chunks. The app shows the sources each answer used. It also has sign-in with roles, an admin page for uploading documents, and scheduled jobs that keep the knowledge base up to date.

## What's next

- **Cut it down to the chatbot.** Auth, payments and logistics move out into a separate platform, so this repo does one thing.
- **Move the vector store from Qdrant to pgvector.** I decided on this to keep the setup cheaper to run. This page still lists Qdrant because that's what the code uses today.
- **Let visitors try it.** The plan is a demo where you upload a document, it is chunked and embedded, and you ask it questions. It is not live yet.
