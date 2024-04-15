import { scrapeTest } from "@/actions/companies";
import { Button, Input } from "@nextui-org/react";
import React from "react";

function ScrapeCompanies() {
  return (
    <>
      <h1>Scrape Company</h1>
      <form action={scrapeTest}>
        <Input
          label="Company Name"
          labelPlacement="inside"
          name="company_name"
        />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}

export default ScrapeCompanies;
