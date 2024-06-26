"use server";

import puppeteer from "puppeteer";

type SearchParams = {
  companyName?: string;
  address?: string;
  status?: string;
  sicCode?: string;
};

export async function scrapeCompanies(searchQuery: FormData) {
  const companyName = searchQuery.get("companyName");
  const address = searchQuery.get("address");
  const status = searchQuery.get("status");
  const sicCode = searchQuery.get("sicCode");

  return { companyName, address, status, sicCode };
}

export async function testing() {
  console.log("test");
}
export async function scrapeTest(searchQuery: FormData) {
  const companyName = searchQuery.get("company_name");
  console.log(companyName);
  console.log("COMPANY: " + companyName);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.google.com");
  try {
    await page.waitForSelector(`.${companyName}`, { timeout: 300000 }); // 5 min
    console.log("Found it");
    await page.screenshot({ path: "screenshot.png" });
  } catch (error) {
    console.log("Not found it");
  }

  await browser.close();
}
