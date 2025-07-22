# 📘 Prisma Querying Cheat Sheet (MongoDB)

## 🧱 Basic Setup

```ts
import { PrismaClient } from '../generated/prisma'; // or '@prisma/client'
const prisma = new PrismaClient();
```

---

## 🔍 Find Queries

### Find All Users

```ts
const users = await prisma.user.findMany();
```

### Find One by ID

```ts
const user = await prisma.user.findUnique({
  where: { id: 'user_id_here' },
});
```

### Find One by Unique Field

```ts
const user = await prisma.user.findUnique({
  where: { email: 'user@example.com' },
});
```

### Find First Matching

```ts
const user = await prisma.user.findFirst({
  where: { githubUsername: 'octocat' },
});
```

### Conditional Find

```ts
const users = await prisma.user.findMany({
  where: {
    contributions: { gt: 10 },
    bio: { contains: 'developer' },
    githubUsername: { not: null },
  },
});
```

---

## 🧾 Create

```ts
const newUser = await prisma.user.create({
  data: {
    name: 'Alice',
    email: 'alice@example.com',
    githubUsername: 'alicegit',
    profile: {
      create: {
        age: 28,
        gender: 'female',
        interests: ['music', 'hiking'],
        location: 'Berlin',
        profession: 'Engineer',
      },
    },
  },
});
```

---

## ✏️ Update

### Update by ID

```ts
const updatedUser = await prisma.user.update({
  where: { id: 'user_id' },
  data: { name: 'Updated Name' },
});
```

### Update Nested Relation

```ts
await prisma.user.update({
  where: { id: 'user_id' },
  data: {
    profile: {
      update: {
        profession: 'Designer',
      },
    },
  },
});
```

---

## ❌ Delete

```ts
await prisma.user.delete({
  where: { id: 'user_id' },
});
```

---

## 🔁 Relational Queries

### Get User with Profile

```ts
const user = await prisma.user.findUnique({
  where: { id: 'user_id' },
  include: { profile: true },
});
```

### Get Swipes a User Sent

```ts
const swipes = await prisma.user.findUnique({
  where: { id: 'user_id' },
  include: { swipesSent: true },
});
```

---

## 🔢 Pagination & Sorting

```ts
const users = await prisma.user.findMany({
  skip: 10,
  take: 5,
  orderBy: {
    contributions: 'desc',
  },
});
```

---

## ⏱️ Date Queries

```ts
const recentUsers = await prisma.user.findMany({
  where: {
    updatedAt: {
      gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // past 7 days
    },
  },
});
```

---

## 🧠 Full-Text Search Example

```ts
const bios = await prisma.user.findMany({
  where: {
    bio: { contains: 'open source', mode: 'insensitive' },
  },
});
```

---

## ⚡ Advanced: Raw Query

```ts
const rawUsers = await prisma.$queryRaw`db.getCollection('User').find({})`;
```

> ⚠️ Use `$queryRaw` cautiously – it bypasses Prisma safety.

---

## 📌 MongoDB-Specific Notes

- Use `@db.ObjectId` for IDs and foreign keys.
- Prisma handles MongoDB joins internally — no manual `$lookup` required.
- Dates are `Date` objects (`new Date()`).
