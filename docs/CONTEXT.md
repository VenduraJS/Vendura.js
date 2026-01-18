Vendura — Full Project Context
Project Name

Vendura

What is Vendura?

Vendura is a developer-first e-commerce framework built on top of Next.js, providing core commerce logic (cart, checkout, orders, payments, inventory) as a deterministic, high-performance runtime.

Vendura is not:

a Shopify alternative

a theme or template

a hosted SaaS

a no-code builder

Vendura is commerce infrastructure.

Core Philosophy

Logic over UI

Correctness over flexibility

Speed through constraints

Framework behavior, library form

Vendura intentionally owns:

checkout flow

payment verification

order lifecycle

inventory correctness

Vendura intentionally avoids:

UI components

auth systems

admin dashboards

CMS

shipping integrations

Architecture Overview

Vendura consists of:

Vendura Core (runtime)

Official adapters (MongoDB, Razorpay, Next.js)

CLI for scaffolding

User extension layer (vendura/ folder)

Next.js App
├── app/              → UI & routes
├── vendura/          → user-defined commerce extensions
├── vendura.config.ts → framework configuration
└── node_modules/
    └── vendura       → framework runtime

Vendura Core Responsibilities

Vendura Core owns:

Cart creation and mutation

Checkout orchestration

Order creation and state transitions

Payment lifecycle (via adapters)

Inventory reservation

Hook execution

Vendura Core must:

be framework-agnostic

be UI-agnostic

run in Node.js without Next.js

Extension Model

Vendura exposes controlled extension points:

Configuration (vendura.config.ts)

Lifecycle hooks

Plugins (npm packages)

Users must NOT:

bypass checkout

mutate order state manually

talk to payment gateways directly

vendura/ Folder Purpose

The vendura/ folder contains user-owned commerce extensions, such as:

pricing logic

inventory rules

side effects (emails, analytics)

custom validations

This folder does NOT contain Vendura core code.

Package Structure

vendura → core runtime

@vendura/mongodb → MongoDB adapter

@vendura/razorpay → Razorpay adapter

@vendura/next → Next.js bindings

create-vendura-app → CLI

Optional features are implemented as plugins, not core modules.

Performance Goals

Vendura prioritizes:

minimal client-side JavaScript

server-first execution

deterministic flows

indexed database access

idempotent payment handling

Target outcomes:

fast cart interactions

reliable checkout

zero double payments

predictable order state

Target Users

Vendura is for:

developers building custom commerce apps

teams who want control without rewriting checkout

India-first commerce using Razorpay

Vendura is not intended for non-technical users.

Guiding Principle

Vendura should feel invisible when it works —
and impossible to replace once adopted.