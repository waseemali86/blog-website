import { defineType, defineField } from "sanity";

export const Blog = defineType({
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Blog Name",
    }),
    defineField({
      name: "summary",
      type: "string",
      title: "Summary",
    }),
    defineField({ 
      name: 'image',
      title: 'Product Image',
      type: 'image', // Image ka field
      options: {
        hotspot: true, // Crop aur focus ke liye hotspot enable kare
      },
      validation: (Rule) => Rule.required().error("An image is required.")
    }),
    defineField({
      name: "author",
      type: "string",
      title: "Author Name",
    }),
  ],
});
