"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Phone, Edit3, Save, X, FileText, Settings, HelpCircle, Info, LogOut } from "lucide-react"

interface ProfileSidebarProps {
  onClose: () => void
}

export function ProfileSidebar({ onClose }: ProfileSidebarProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [activeSection, setActiveSection] = useState("profile")
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    mobile: "+1 (555) 123-4567",
    notes: "Love exploring new places and trying local cuisines. Planning a trip to Europe next summer.",
  })
  const [editData, setEditData] = useState(profileData)

  const handleSave = () => {
    setProfileData(editData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditData(profileData)
    setIsEditing(false)
  }

  const renderProfileSection = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/user-avatar.jpg" />
          <AvatarFallback className="text-lg">
            {profileData.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{profileData.name}</h3>
          <p className="text-sm text-muted-foreground">Travel Enthusiast</p>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-medium">Profile Details</h4>
          {!isEditing ? (
            <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)}>
              <Edit3 className="h-4 w-4 mr-1" />
              Edit
            </Button>
          ) : (
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" onClick={handleCancel}>
                <X className="h-4 w-4" />
              </Button>
              <Button size="sm" onClick={handleSave}>
                <Save className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        {isEditing ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="edit-name">Name</Label>
              <Input
                id="edit-name"
                value={editData.name}
                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-email">Email</Label>
              <Input
                id="edit-email"
                type="email"
                value={editData.email}
                onChange={(e) => setEditData({ ...editData, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-mobile">Mobile Number</Label>
              <Input
                id="edit-mobile"
                value={editData.mobile}
                onChange={(e) => setEditData({ ...editData, mobile: e.target.value })}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{profileData.name}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{profileData.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{profileData.mobile}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )

  const renderNotesSection = () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <FileText className="h-5 w-5 text-primary" />
        <h4 className="font-medium">S-Note (Travel Notes)</h4>
      </div>
      <div className="space-y-2">
        <Label htmlFor="travel-notes">Your Travel Notes</Label>
        <Textarea
          id="travel-notes"
          placeholder="Write down your travel thoughts, plans, and memories..."
          value={editData.notes}
          onChange={(e) => setEditData({ ...editData, notes: e.target.value })}
          className="min-h-32"
        />
        <Button size="sm" onClick={() => setProfileData({ ...profileData, notes: editData.notes })}>
          Save Notes
        </Button>
      </div>
    </div>
  )

  const renderSettingsSection = () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Settings className="h-5 w-5 text-primary" />
        <h4 className="font-medium">Settings</h4>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Language</Label>
          <Select defaultValue="english">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="hindi">Hindi</SelectItem>
              <SelectItem value="telugu">Telugu</SelectItem>
              <SelectItem value="spanish">Spanish</SelectItem>
              <SelectItem value="french">French</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Separator />
        <div className="space-y-3">
          <Button variant="ghost" className="w-full justify-start">
            <HelpCircle className="h-4 w-4 mr-2" />
            Help & Support
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Info className="h-4 w-4 mr-2" />
            About TravelMate
          </Button>
          <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  )

  const menuItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notes", label: "S-Note", icon: FileText },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-xl font-semibold">Profile</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="p-6 space-y-6">
          {/* Navigation Menu */}
          <div className="flex space-x-1 bg-muted p-1 rounded-lg">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  className="flex-1"
                  onClick={() => setActiveSection(item.id)}
                >
                  <Icon className="h-4 w-4 mr-1" />
                  {item.label}
                </Button>
              )
            })}
          </div>

          {/* Content Sections */}
          {activeSection === "profile" && renderProfileSection()}
          {activeSection === "notes" && renderNotesSection()}
          {activeSection === "settings" && renderSettingsSection()}
        </div>
      </div>
    </div>
  )
}
