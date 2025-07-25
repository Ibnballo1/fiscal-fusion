"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function UserProfilePage() {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDeleteAccount = () => {
    // Handle account deletion logic here
    console.log("Account deleted");
    setShowDeleteDialog(false);
  };
  return (
    <div className="min-h-screen py-8">
      <div className="px-4">
        {/* Profile Header */}
        <div className="text-center mb-8">
          <Avatar className="w-20 h-20 mx-auto mb-4">
            <AvatarImage
              src="/placeholder.svg?height=80&width=80"
              alt="Profile"
            />
            <AvatarFallback>TN</AvatarFallback>
          </Avatar>
          <h1 className="text-xl font-semibold text-gray-900">
            Tendai Nyasha Moyo
          </h1>
          <p className="text-sm text-gray-600">Tendai@sample.com</p>
        </div>

        {/* Password Section */}

        <div className="space-y-6">
          {/* Password Section */}
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="old-password" className="text-sm font-medium">
                    Old Password
                  </Label>
                  <Input
                    id="old-password"
                    type="password"
                    placeholder="••••••••••"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="new-password" className="text-sm font-medium">
                    New Password
                  </Label>
                  <Input
                    id="new-password"
                    type="password"
                    placeholder="••••••••••"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="confirm-new-password"
                    className="text-sm font-medium"
                  >
                    Confirm New Password
                  </Label>
                  <Input
                    id="confirm-new-password"
                    type="password"
                    placeholder="••••••••••"
                    className="mt-1"
                  />
                </div>
                {/* Action Buttons */}
                <div className="flex justify-end space-x-4 pt-4">
                  <Button variant="outline" size="lg">
                    Cancel
                  </Button>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Save Changes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Personal Informations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="first-name" className="text-sm font-medium">
                    First Name
                  </Label>
                  <Input
                    id="first-name"
                    defaultValue="Tendai"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="last-name" className="text-sm font-medium">
                    Last Name
                  </Label>
                  <Input
                    id="last-name"
                    defaultValue="Nyasha Moyo"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="Nyashatendai@sample.com"
                    className="mt-1"
                  />
                </div>

                {/* Bank Records */}
                <div className="mt-6">
                  <Label className="text-sm font-medium mb-3 block">
                    Bank Records
                  </Label>
                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Account Name
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Bank
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Account Number
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Branch
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Branch Code
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">
                            Nyasha Tendai
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-900">
                            CBZ Bank
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-900">
                            215042345789
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-900">
                            Borrowdale Branch
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-900">
                            6101
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="contact-phone"
                    className="text-sm font-medium"
                  >
                    Contact Phone Number
                  </Label>
                  <p className="text-xs text-gray-500 mb-1">
                    Enter phone number for payments
                  </p>
                  <Input
                    id="contact-phone"
                    defaultValue="+263 772 123 456"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="mobile-money-type"
                    className="text-sm font-medium"
                  >
                    Mobile Money Type
                  </Label>
                  <Select defaultValue="ecocash">
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ecocash">EcoCash</SelectItem>
                      <SelectItem value="onemoney">OneMoney</SelectItem>
                      <SelectItem value="telecash">TeleCash</SelectItem>
                      <SelectItem value="mvp">MVP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Language & Locale */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Language & Locale
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor="select-language"
                    className="text-sm font-medium text-gray-600"
                  >
                    Select Language
                  </Label>
                  <Select defaultValue="language">
                    <SelectTrigger className="mt-1 w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="language">Language</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                      <SelectItem value="german">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor="select-timezone"
                    className="text-sm font-medium text-gray-600"
                  >
                    Select Time Zone
                  </Label>
                  <Select defaultValue="gmt+">
                    <SelectTrigger className="mt-1 w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gmt+">GMT+</SelectItem>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="est">EST</SelectItem>
                      <SelectItem value="pst">PST</SelectItem>
                      <SelectItem value="gmt">GMT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor="select-currency"
                    className="text-sm font-medium text-gray-600"
                  >
                    Select Currency Format
                  </Label>
                  <Select defaultValue="zwl">
                    <SelectTrigger className="mt-1 w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="zwl">ZWL</SelectItem>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="eur">EUR</SelectItem>
                      <SelectItem value="gbp">GBP</SelectItem>
                      <SelectItem value="ngn">NGN</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor="compliance-alerts"
                    className="text-sm font-medium text-gray-600"
                  >
                    Compliance Alerts
                  </Label>
                  <Select defaultValue="email">
                    <SelectTrigger className="mt-1 w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="sms">SMS</SelectItem>
                      <SelectItem value="off">Off</SelectItem>
                      <SelectItem value="1week">1 week before</SelectItem>
                      <SelectItem value="2weeks">2 weeks before</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor="invoice-reminders"
                    className="text-sm font-medium text-gray-600"
                  >
                    Invoice Reminders
                  </Label>
                  <Select defaultValue="sms">
                    <SelectTrigger className="mt-1 w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="sms">SMS</SelectItem>
                      <SelectItem value="off">Off</SelectItem>
                      <SelectItem value="1week">1 week before</SelectItem>
                      <SelectItem value="2weeks">2 weeks before</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor="payout-notifications"
                    className="text-sm font-medium text-gray-600"
                  >
                    Payout Notifications
                  </Label>
                  <Select defaultValue="email">
                    <SelectTrigger className="mt-1 w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="sms">SMS</SelectItem>
                      <SelectItem value="off">Off</SelectItem>
                      <SelectItem value="1week">1 week before</SelectItem>
                      <SelectItem value="2weeks">2 weeks before</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor="system-notifications"
                    className="text-sm font-medium text-gray-600"
                  >
                    System Notifications
                  </Label>
                  <Select defaultValue="off">
                    <SelectTrigger className="mt-1 w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="sms">SMS</SelectItem>
                      <SelectItem value="off">Off</SelectItem>
                      <SelectItem value="1week">1 week before</SelectItem>
                      <SelectItem value="2weeks">2 weeks before</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Computational Methods */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Compliance Defaults
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label
                      htmlFor="require-vat"
                      className="text-sm font-medium"
                    >
                      Require VAT ID on invoices
                    </Label>
                  </div>
                  <Switch id="require-vat" defaultChecked />
                </div>

                <div>
                  <Label
                    htmlFor="device-sync-timeout"
                    className="text-sm font-medium"
                  >
                    Device sync timeout (hours)
                  </Label>
                  <Select defaultValue="1hour">
                    <SelectTrigger className="mt-1 w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1hour">1 hour</SelectItem>
                      <SelectItem value="2hours">2 day</SelectItem>
                      <SelectItem value="4hours">3 days</SelectItem>
                      <SelectItem value="8hours">1 weeks</SelectItem>
                      <SelectItem value="12hours">2 weeks</SelectItem>
                      <SelectItem value="24hours">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label
                      htmlFor="auto-assign-compliance"
                      className="text-sm font-medium"
                    >
                      Auto-assign compliance issues
                    </Label>
                  </div>
                  <Switch id="auto-assign-compliance" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payout Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Payout Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor="payout-method"
                    className="text-sm font-medium"
                  >
                    Payout Method
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-1 w-full">
                      <SelectValue placeholder="Select payout method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bank">Bank Transfer</SelectItem>
                      <SelectItem value="paypal">PayPal</SelectItem>
                      <SelectItem value="stripe">Stripe</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor="payout-method"
                    className="text-sm font-medium"
                  >
                    Payout Frequency
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-1 w-full">
                      <SelectValue placeholder="Select payout frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bank">Weekly</SelectItem>
                      <SelectItem value="stripe">Bi-Weekly</SelectItem>
                      <SelectItem value="paypal">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Security */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Account Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="two-factor" className="text-sm font-medium">
                      Two Factor Auth (2FA)
                    </Label>
                  </div>
                  <Switch id="two-factor" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label
                      htmlFor="login-activity"
                      className="text-sm font-medium"
                    >
                      Login History
                    </Label>
                  </div>
                  <Switch id="login-activity" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <div className="space-x-4">
                <Button variant="outline" size="lg">
                  Log out
                </Button>
                <Button
                  variant="destructive"
                  size="lg"
                  onClick={() => setShowDeleteDialog(true)}
                >
                  Delete account
                </Button>
              </div>
            </CardFooter>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-6">
            <div className="flex space-x-4">
              <Button variant="outline" size="lg">
                Cancel
              </Button>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Save Changes
              </Button>
            </div>
          </div>
        </div>

        {/* Delete Account Dialog */}
        <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
          <DialogContent className="sm:max-w-md px-4 py-6">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold">
                Delete Account ?
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-600 pt-2">
                Are you sure you want to delete this account?
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm text-gray-600">
                This action is permanent and will remove all associated account
                details. You will not be able to recover this information.
              </p>
            </div>
            <DialogFooter className="flex justify-end space-x-4">
              <Button
                variant="outline"
                onClick={() => setShowDeleteDialog(false)}
              >
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDeleteAccount}>
                Delete my account
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
