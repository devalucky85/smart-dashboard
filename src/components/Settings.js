import React, { useState } from "react";

const Settings = ({ darkMode, setDarkMode }) => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    autoBackup: true,
    language: "english",
    timezone: "UTC+5:30"
  });

  const [profile, setProfile] = useState({
    name: "Dev Kumar",
    email: "devkumar.dev@gmail.com",
    phone: "+91 XXXXX XXXXX",
    department: "Full Stack Development"
  });

  const handleSettingChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleProfileChange = (key, value) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
  };

  const handleSaveSettings = () => {
    console.log("Settings Saved:", settings);
    alert("Settings saved successfully!");
  };

  const handleSaveProfile = () => {
    console.log("Profile Updated:", profile);
    alert("Profile updated successfully!");
  };

  return (
    <div className="settings">
      <h1 style={{ marginBottom: "30px" }}>Account Settings</h1>

      <div style={{ display: "grid", gap: "30px" }}>
        {/* Profile Settings */}
        <div className="table-container" style={{ padding: "25px" }}>
          <h2 style={{ marginBottom: "20px", color: "var(--primary)" }}>
            Profile Settings
          </h2>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
          >
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => handleProfileChange("name", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => handleProfileChange("email", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => handleProfileChange("phone", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Department</label>
              <select
                value={profile.department}
                onChange={(e) =>
                  handleProfileChange("department", e.target.value)
                }
              >
                <option value="Full Stack Development">
                  Full Stack Development
                </option>
                <option value="Frontend Development">
                  Frontend Development
                </option>
                <option value="Backend Development">
                  Backend Development
                </option>
                <option value="AI Development">AI Development</option>
              </select>
            </div>
          </div>

          <button
            className="btn btn-primary"
            onClick={handleSaveProfile}
            style={{ marginTop: "20px" }}
          >
            Update Profile
          </button>
        </div>

        {/* Application Settings */}
        <div className="table-container" style={{ padding: "25px" }}>
          <h2 style={{ marginBottom: "20px", color: "var(--primary)" }}>
            Application Settings
          </h2>

          <div style={{ display: "grid", gap: "20px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 0",
                borderBottom: "1px solid var(--border)"
              }}
            >
              <div>
                <h4>Dark Mode</h4>
                <p style={{ color: "var(--gray)", fontSize: "14px" }}>
                  Switch between light and dark themes
                </p>
              </div>

              <label className="switch">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={(e) => setDarkMode(e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 0",
                borderBottom: "1px solid var(--border)"
              }}
            >
              <div>
                <h4>Email Notifications</h4>
                <p style={{ color: "var(--gray)", fontSize: "14px" }}>
                  Receive email alerts and updates
                </p>
              </div>

              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings.emailNotifications}
                  onChange={(e) =>
                    handleSettingChange("emailNotifications", e.target.checked)
                  }
                />
                <span className="slider"></span>
              </label>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 0",
                borderBottom: "1px solid var(--border)"
              }}
            >
              <div>
                <h4>SMS Notifications</h4>
                <p style={{ color: "var(--gray)", fontSize: "14px" }}>
                  Receive text message alerts
                </p>
              </div>

              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings.smsNotifications}
                  onChange={(e) =>
                    handleSettingChange("smsNotifications", e.target.checked)
                  }
                />
                <span className="slider"></span>
              </label>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 0",
                borderBottom: "1px solid var(--border)"
              }}
            >
              <div>
                <h4>Auto Backup</h4>
                <p style={{ color: "var(--gray)", fontSize: "14px" }}>
                  Automatically backup data daily
                </p>
              </div>

              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings.autoBackup}
                  onChange={(e) =>
                    handleSettingChange("autoBackup", e.target.checked)
                  }
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="form-group">
              <label>Language</label>
              <select
                value={settings.language}
                onChange={(e) => handleSettingChange("language", e.target.value)}
              >
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
              </select>
            </div>

            <div className="form-group">
              <label>Timezone</label>
              <select
                value={settings.timezone}
                onChange={(e) => handleSettingChange("timezone", e.target.value)}
              >
                <option value="UTC+5:30">IST (UTC+5:30)</option>
                <option value="UTC+0">GMT (UTC+0)</option>
                <option value="UTC-5">EST (UTC-5)</option>
                <option value="UTC-8">PST (UTC-8)</option>
              </select>
            </div>
          </div>

          <button
            className="btn btn-primary"
            onClick={handleSaveSettings}
            style={{ marginTop: "20px" }}
          >
            Save Settings
          </button>
        </div>

        {/* Danger Zone */}
        <div
          className="table-container"
          style={{ padding: "25px", border: "2px solid #f44336" }}
        >
          <h2 style={{ marginBottom: "20px", color: "#f44336" }}>Danger Zone</h2>

          <div
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <div>
              <h4>Delete Account</h4>
              <p style={{ color: "var(--gray)", fontSize: "14px" }}>
                Permanently delete your account and all data
              </p>
            </div>

            <button
              className="btn btn-danger"
              onClick={() => {
                if (window.confirm("Are you sure you want to delete your account?")) {
                  alert("Account deleted!");
                }
              }}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;