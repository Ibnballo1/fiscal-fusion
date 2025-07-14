"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export const Mark = () => {
  return (
    <svg
      className="w-4 h-4 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
};

export default function Component() {
  const [dragOver, setDragOver] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: "Bulk Import",
      active: currentStep === 1,
      completed: currentStep > 1,
    },
    {
      number: 2,
      title: "Review Application",
      active: currentStep === 2,
      completed: currentStep > 2,
    },
    {
      number: 3,
      title: "Approval",
      active: currentStep === 3,
      completed: false,
    },
  ];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    // Handle file drop logic here
  };

  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-6">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-6 w-1/2 mx-auto relative">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center flex-1">
              <div
                className={`flex flex-col items-center justify-evenly ${
                  index === 2 && "w-[90%]"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border ${
                    step.completed
                      ? "border-green-500 text-white"
                      : step.active
                      ? "border-[#AE8C00] text-[#AE8C00]"
                      : "border-[#E3E3E3] text-muted-foreground"
                  }`}
                >
                  <div
                    className={`${
                      step.completed &&
                      "w-6 h-6 rounded-full flex justify-center items-center bg-green-500"
                    }`}
                  >
                    {step.completed ? <Mark /> : step.number}
                  </div>
                </div>
                <span className="mt-2 text-sm text-gray-600">{step.title}</span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-px bg-gray-300 absolute top-1/4 ml-16 ${
                    index === 1 ? "w-36 ml-[90px]" : "w-36 ml-14"
                  } ${step.completed ? "bg-green-500" : "bg-gray-300"}`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-between min-h-[530px]">
          <div className="border rounded-xl p-5 space-y-5">
            {currentStep === 1 && (
              <>
                <h1 className="text-xl font-medium text-gray-900">
                  Bulk Import
                </h1>
                {/* Upload Area - keep existing upload area code */}
                <Card className="p-0 overflow-hidden">
                  <div
                    className={`bg-green-50 border-1 border-dashed transition-colors ${
                      dragOver
                        ? "border-green-400 bg-green-100"
                        : "border-green-200"
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <div className="flex flex-col items-center px-6 py-5 text-center">
                      <Image
                        src="/media.png"
                        alt="Media Upload Image"
                        width={150}
                        height={90}
                        className="mb-4"
                      />
                      {/* <div className="mx-auto w-24 h-24 mb-6">
                      <svg
                        viewBox="0 0 100 80"
                        className="w-full h-full"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 25h70c2.5 0 4.5 2 4.5 4.5v40c0 2.5-2 4.5-4.5 4.5H15c-2.5 0-4.5-2-4.5-4.5v-40c0-2.5 2-4.5 4.5-4.5z"
                          fill="#10B981"
                          opacity="0.8"
                        />
                        <path
                          d="M15 20h25l5 5h40c2.5 0 4.5 2 4.5 4.5v35c0 2.5-2 4.5-4.5 4.5H15c-2.5 0-4.5-2-4.5-4.5v-40c0-2.5 2-4.5 4.5-4.5z"
                          fill="#059669"
                        />
                        <rect
                          x="25"
                          y="35"
                          width="20"
                          height="25"
                          rx="2"
                          fill="white"
                          opacity="0.9"
                        />
                        <rect
                          x="30"
                          y="32"
                          width="20"
                          height="25"
                          rx="2"
                          fill="white"
                          opacity="0.7"
                        />
                        <rect
                          x="35"
                          y="29"
                          width="20"
                          height="25"
                          rx="2"
                          fill="white"
                        />
                        <line
                          x1="38"
                          y1="35"
                          x2="50"
                          y2="35"
                          stroke="#6B7280"
                          strokeWidth="1"
                        />
                        <line
                          x1="38"
                          y1="39"
                          x2="52"
                          y2="39"
                          stroke="#6B7280"
                          strokeWidth="1"
                        />
                        <line
                          x1="38"
                          y1="43"
                          x2="48"
                          y2="43"
                          stroke="#6B7280"
                          strokeWidth="1"
                        />
                      </svg>
                    </div> */}
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Upload Reseller Data
                      </h3>
                      <p className="text-gray-600">
                        Drop your CSV here, or{" "}
                        <button className="text-blue-600 hover:text-blue-700 underline">
                          browse
                        </button>
                      </p>
                    </div>
                  </div>
                </Card>
              </>
            )}

            {currentStep === 2 && (
              <>
                <h1 className="text-xl font-semibold text-gray-900">
                  Review Application
                </h1>
                <Card>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b bg-gray-50">
                          <th className="text-left py-3 px-4 font-medium text-gray-700">
                            Reseller Name
                          </th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">
                            Docs Received
                          </th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">
                            KYC Status
                          </th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-4 px-4">Apex Digital</td>
                          <td className="py-4 px-4">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm">✓</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                              Approved
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <button className="text-gray-400 hover:text-gray-600">
                              ⋮
                            </button>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-4 px-4">Synergy Corp</td>
                          <td className="py-4 px-4">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm">✓</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                              Approved
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <button className="text-gray-400 hover:text-gray-600">
                              ⋮
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4">Prime Tech</td>
                          <td className="py-4 px-4">
                            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm">✕</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                              Pending
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <button className="text-gray-400 hover:text-gray-600">
                              ⋮
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>
              </>
            )}

            {currentStep === 3 && (
              <>
                <h1 className="text-2xl font-semibold text-gray-900">
                  Approval
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="p-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Total Imported</p>
                        <p className="text-2xl font-bold text-gray-900">12</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Total Approved</p>
                        <p className="text-2xl font-bold text-gray-900">8</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Total Rejected</p>
                        <p className="text-2xl font-bold text-gray-900">4</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between">
            <div>
              {currentStep > 1 && (
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Back
                </Button>
              )}
            </div>
            <div>
              {currentStep < 3 ? (
                <Button
                  className="bg-green-700 hover:bg-green-800 text-white px-6"
                  onClick={() => setCurrentStep(currentStep + 1)}
                >
                  {currentStep === 1
                    ? "Review Application"
                    : "Approval Summary"}
                </Button>
              ) : (
                <Button className="bg-green-700 hover:bg-green-800 text-white px-6">
                  Approval Summary
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
