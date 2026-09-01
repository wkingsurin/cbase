"use client";

import ToolbarButton from "@/components/toolbar/toolbar-button";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { DatabaseArrowUp } from "lucide-react";
import { useState } from "react";
import { ImportClient } from "../types";
import ImportPreview from "./import-preview";

export default function ImportCSVDialog() {
  const [uploadedData, setUploadedData] = useState<ImportClient[]>([]);

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      const result = event.target?.result;

      if (typeof result !== "string") return;

      const data = normalizeData(result);

      setUploadedData(data);
    };

    reader.readAsText(file, "UTF-8");
  };

  function normalizeData(csvData: string): ImportClient[] {
    const lines = csvData.trim().split(/\r?\n/);

    if (lines.length < 2) return [];

    const headers = lines[0].split(",").map((header) => header.trim());

    return lines.slice(1).map((line) => {
      const values = line.split(",");

      const row = Object.fromEntries(
        headers.map((header, index) => [header, values[index]?.trim() ?? ""]),
      );

      return {
        fullname: row.fullname ?? "",
        tg: row.tg ?? "",
        vk: row.vk ?? "",
        site: row.site ?? "",
        phone: row.phone ?? "",
        comment: row.comment ?? "",
      };
    });
  }

  return (
    <Dialog>
      <DialogTrigger render={<ToolbarButton icon={DatabaseArrowUp} />} />
      <DialogContent className="min-w-[720px]">
        <DialogHeader>Import clients data</DialogHeader>

        <ImportPreview data={uploadedData} />

        <form className="flex flex-col gap-6">
          <FieldGroup>
            <Field>
              <Input
                id="upload"
                type="file"
                className="bg-background rounded-md px-3"
                onChange={onUpload}
              />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Merge data</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
