---
title: Logistics platform
summary: "One backend for delivery orders: authentication, a payment wallet and AI-assisted dispatch."
status: planned
stack: [Python, FastAPI, PostgreSQL]
year: 2026
order: 2
---

## Problem

TODO: one sentence on the delivery problem this solves and for whom.

## What I plan to build

One backend with three modules. Auth handles users and roles. The wallet holds balances in a double-entry ledger, tested against a payment provider's sandbox. Logistics lets a customer create a delivery order, get an AI-assisted cost or rider assignment, pay from the wallet and track status.

This page describes the plan. It will be rewritten as a case study when the first end-to-end order works.

## The hard decision

TODO: write this after the ledger is built. The likely topic is keeping balances correct under concurrent requests.

## Result

TODO: leave empty until there is a working demo.
