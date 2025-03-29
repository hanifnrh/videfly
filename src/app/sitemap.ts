import { MetadataRoute } from "next";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.ecofix.id/";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date().toISOString(), // Optional: Add lastModified date
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/service`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/information`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/blog/pentingnya-servis-ac-berkala-untuk-kenyamanan-dan-efisiensi`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/blog/mengatasi-saluran-mampet-dengan-mudah`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/blog/solusi-efektif-untuk-limbah-lemak-dan-minyak-dapur`,
            lastModified: new Date().toISOString(),
        },
    ];
}
