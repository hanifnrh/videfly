import { MetadataRoute } from "next";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.videfly-two.vercel.app/";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date().toISOString(), // Optional: Add lastModified date
        },
    ];
}
