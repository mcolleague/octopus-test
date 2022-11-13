---
inject: true
to: components/<%= dir %>/index.ts
append: true
---
export { default as <%= name %> } from './<%= name %>'