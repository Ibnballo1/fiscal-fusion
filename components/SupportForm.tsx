"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function SupportForm() {
  const [formData, setFormData] = useState({
    name: "Tendai Nyasha Moyo",
    email: "Tendai@sample.com",
    issueTitle: "",
    issueDetails: "",
    attachments: null as File | null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, attachments: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Support ticket submitted:", formData);
  };

  return (
    <div className="p-6 mt-6">
      <div className="bg-[#FAFAFA] px-4 rounded-xl mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Customer Support
        </h2>
        <p className="text-sm text-gray-600">
          Have any question? Contact our support
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="mt-1"
            />
          </div>
          <div>
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="mt-1"
            />
          </div>
        </div>

        <div>
          <Label
            htmlFor="issue-title"
            className="text-sm font-medium text-gray-700"
          >
            Issue title
          </Label>
          <Input
            id="issue-title"
            placeholder="Enter title"
            value={formData.issueTitle}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, issueTitle: e.target.value }))
            }
            className="mt-1"
          />
        </div>

        <div>
          <Label
            htmlFor="issue-details"
            className="text-sm font-medium text-gray-700"
          >
            Issue details
          </Label>
          <Textarea
            id="issue-details"
            placeholder="Enter full details"
            value={formData.issueDetails}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, issueDetails: e.target.value }))
            }
            className="mt-1 min-h-[100px]"
          />
        </div>

        <div>
          <Label
            htmlFor="attachments"
            className="text-sm font-medium text-gray-700"
          >
            Attachments
          </Label>
          <div className="mt-1">
            <input
              id="attachments"
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => document.getElementById("attachments")?.click()}
              className="w-full md:w-auto"
            >
              Choose File
            </Button>
            {formData.attachments && (
              <p className="text-sm text-gray-600 mt-2">
                Selected: {formData.attachments.name}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-green-600 hover:bg-green-700 px-6"
          >
            Submit Ticket
          </Button>
        </div>
      </form>
    </div>
  );
}
