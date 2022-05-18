const fs = require("fs");
data = {
  data: `-- Gui to Lua
-- Version: 3.2
-- Instances:
local FPSBooster = Instance.new("ScreenGui")
local Frame = Instance.new("Frame")
local MainFrame = Instance.new("Frame")
local Enabled = Instance.new("TextButton")
local Frame_2 = Instance.new("Frame")
local UIAspectRatioConstraint = Instance.new("UIAspectRatioConstraint")
local UIAspectRatioConstraint_2 = Instance.new("UIAspectRatioConstraint")
local Disabled = Instance.new("TextButton")
local Frame_3 = Instance.new("Frame")
local UIAspectRatioConstraint_3 = Instance.new("UIAspectRatioConstraint")
local UIAspectRatioConstraint_4 = Instance.new("UIAspectRatioConstraint")
local UIAspectRatioConstraint_5 = Instance.new("UIAspectRatioConstraint")
local HeadFrame = Instance.new("Frame")
local Close = Instance.new("TextButton")
local UIAspectRatioConstraint_6 = Instance.new("UIAspectRatioConstraint")
local TextLabel = Instance.new("TextLabel")
local UIAspectRatioConstraint_7 = Instance.new("UIAspectRatioConstraint")
local UIAspectRatioConstraint_8 = Instance.new("UIAspectRatioConstraint")
local UIAspectRatioConstraint_9 = Instance.new("UIAspectRatioConstraint")
local UIAspectRatioConstraint_10 = Instance.new("UIAspectRatioConstraint")

-- Properties:

FPSBooster.Name = "FPSBooster"
FPSBooster.Parent = game.Players.LocalPlayer:WaitForChild("PlayerGui")
FPSBooster.ZIndexBehavior = Enum.ZIndexBehavior.Sibling

Frame.Parent = FPSBooster
Frame.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
Frame.BackgroundTransparency = 1.000
Frame.Position = UDim2.new(0.0101010101, 0, 0.0135593219, 0)
Frame.Size = UDim2.new(0.420454532, 0, 0.255932212, 0)

MainFrame.Name = "MainFrame"
MainFrame.Parent = Frame
MainFrame.BackgroundColor3 = Color3.fromRGB(46, 40, 59)
MainFrame.Position = UDim2.new(0.0111930091, 0, 0.439618647, 0)
MainFrame.Size = UDim2.new(0.9797979, 0, 0.498275667, 0)

Enabled.Name = "Enabled"
Enabled.Parent = MainFrame
Enabled.BackgroundColor3 = Color3.fromRGB(57, 50, 74)
Enabled.Position = UDim2.new(0.0322580636, 0, 0.149168372, 0)
Enabled.Size = UDim2.new(0.945161343, 0, 0.694444418, 0)
Enabled.Visible = false
Enabled.Font = Enum.Font.SourceSans
Enabled.Text = "Enabled"
Enabled.TextColor3 = Color3.fromRGB(255, 255, 255)
Enabled.TextSize = 16.000
Enabled.TextStrokeColor3 = Color3.fromRGB(255, 255, 255)
Enabled.TextWrapped = true

Frame_2.Parent = Enabled
Frame_2.BackgroundColor3 = Color3.fromRGB(76, 255, 82)
Frame_2.Position = UDim2.new(0.823974848, 0, -0.000408163294, 0)
Frame_2.Size = UDim2.new(0.170648471, 0, 1, 0)

UIAspectRatioConstraint.Parent = Frame_2
UIAspectRatioConstraint.AspectRatio = 1.007

UIAspectRatioConstraint_2.Parent = Enabled
UIAspectRatioConstraint_2.AspectRatio = 5.902

Disabled.Name = "Disabled"
Disabled.Parent = MainFrame
Disabled.BackgroundColor3 = Color3.fromRGB(57, 50, 74)
Disabled.Position = UDim2.new(0.0322580636, 0, 0.15279156, 0)
Disabled.Size = UDim2.new(0.945161343, 0, 0.694444418, 0)
Disabled.Font = Enum.Font.SourceSans
Disabled.Text = "Disabled"
Disabled.TextColor3 = Color3.fromRGB(255, 255, 255)
Disabled.TextSize = 16.000
Disabled.TextStrokeColor3 = Color3.fromRGB(255, 255, 255)
Disabled.TextWrapped = true

Frame_3.Parent = Disabled
Frame_3.BackgroundColor3 = Color3.fromRGB(255, 53, 56)
Frame_3.Position = UDim2.new(0.82738781, 0, -0.000408163294, 0)
Frame_3.Size = UDim2.new(0.170648471, 0, 1, 0)

UIAspectRatioConstraint_3.Parent = Frame_3
UIAspectRatioConstraint_3.AspectRatio = 1.007

UIAspectRatioConstraint_4.Parent = Disabled
UIAspectRatioConstraint_4.AspectRatio = 5.902

UIAspectRatioConstraint_5.Parent = MainFrame
UIAspectRatioConstraint_5.AspectRatio = 4.336

HeadFrame.Name = "HeadFrame"
HeadFrame.Parent = Frame
HeadFrame.BackgroundColor3 = Color3.fromRGB(46, 40, 59)
HeadFrame.Position = UDim2.new(0.0111930538, 0, 0.0520709604, 0)
HeadFrame.Size = UDim2.new(0.979798019, 0, 0.387547761, 0)

Close.Name = "Close"
Close.Parent = HeadFrame
Close.BackgroundColor3 = Color3.fromRGB(57, 50, 74)
Close.Position = UDim2.new(0.850993514, 0, 0.141956329, 0)
Close.Size = UDim2.new(0.129032254, 0, 0.714285731, 0)
Close.Font = Enum.Font.SourceSans
Close.Text = "-"
Close.TextColor3 = Color3.fromRGB(255, 255, 255)
Close.TextSize = 24.000
Close.TextStrokeColor3 = Color3.fromRGB(255, 255, 255)
Close.TextWrapped = true

UIAspectRatioConstraint_6.Parent = Close
UIAspectRatioConstraint_6.AspectRatio = 1.007

TextLabel.Parent = HeadFrame
TextLabel.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextLabel.BackgroundTransparency = 1.000
TextLabel.Position = UDim2.new(0.0322580561, 0, 0.107142851, 0)
TextLabel.Size = UDim2.new(0.715923548, 0, 0.751883447, 0)
TextLabel.Font = Enum.Font.Ubuntu
TextLabel.Text = "JaysHub - FPSBooster"
TextLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
TextLabel.TextSize = 20.000
TextLabel.TextStrokeColor3 = Color3.fromRGB(255, 255, 255)
TextLabel.TextWrapped = true
TextLabel.TextXAlignment = Enum.TextXAlignment.Left

UIAspectRatioConstraint_7.Parent = TextLabel
UIAspectRatioConstraint_7.AspectRatio = 5.309

UIAspectRatioConstraint_8.Parent = HeadFrame
UIAspectRatioConstraint_8.AspectRatio = 5.575

UIAspectRatioConstraint_9.Parent = Frame
UIAspectRatioConstraint_9.AspectRatio = 2.205

UIAspectRatioConstraint_10.Parent = FPSBooster
UIAspectRatioConstraint_10.AspectRatio = 1.342

-- Scripts:

local function PDGXVV_fake_script() -- MainFrame.LocalScript 
    local script = Instance.new('LocalScript', MainFrame)

    local Enabled = script.Parent.Enabled
    local Disabled = script.Parent.Disabled

    local Settings = {
        ["enabled"] = false,
        ["parts"] = {}
    }

    Disabled.MouseButton1Click:Connect(function()
        Enabled.Visible = true;
        Settings.enabled = true;
        Disabled.Visible = false;
        for _, v in pairs(workspace:GetDescendants()) do
            if v.ClassName == "Part" or v.ClassName == "SpawnLocation" or v.ClassName == "WedgePart" or v.ClassName ==
                "Terrain" or v.ClassName == "MeshPart" then
                table.insert(Settings.parts, {
                    ["object"] = v,
                    ["material"] = v.Material
                })
                v.Material = "Plastic"
            end
        end
        print(Settings)
    end)

    Enabled.MouseButton1Click:Connect(function()
        Disabled.Visible = true;
        Settings.enabled = false;
        Enabled.Visible = false;
        for _, v in ipairs(Settings.parts) do
            v.object.Material = v.material
        end
    end)

end
coroutine.wrap(PDGXVV_fake_script)()
local function EWFBUZ_fake_script() -- HeadFrame.Interactive 
    local script = Instance.new('LocalScript', HeadFrame)

    local TopFrame = script.Parent
    local CloseButton = script.Parent.Close
    local MainFrame = script.Parent.Parent.MainFrame

    CloseButton.MouseButton1Click:Connect(function()
        if MainFrame.Visible == false then
            print("Opening...")
            CloseButton.Text = "+"
            MainFrame.Visible = true
        elseif MainFrame.Visible == true then
            print("Closing...")
            CloseButton.Text = "-"
            MainFrame.Visible = false
        end
    end)

end
coroutine.wrap(EWFBUZ_fake_script)()
local function LFQJX_fake_script() -- Frame.Dragify 
    local script = Instance.new('LocalScript', Frame)

    local UserInputService = game:GetService("UserInputService")

    local gui = script.Parent

    local dragging
    local dragInput
    local dragStart
    local startPos

    local function update(input)
        local delta = input.Position - dragStart
        gui.Position = UDim2.new(startPos.X.Scale, startPos.X.Offset + delta.X, startPos.Y.Scale,
            startPos.Y.Offset + delta.Y)
    end

    gui.InputBegan:Connect(function(input)
        if input.UserInputType == Enum.UserInputType.MouseButton1 or input.UserInputType == Enum.UserInputType.Touch then
            dragging = true
            dragStart = input.Position
            startPos = gui.Position

            input.Changed:Connect(function()
                if input.UserInputState == Enum.UserInputState.End then
                    dragging = false
                end
            end)
        end
    end)

    gui.InputChanged:Connect(function(input)
        if input.UserInputType == Enum.UserInputType.MouseMovement or input.UserInputType == Enum.UserInputType.Touch then
            dragInput = input
        end
    end)

    UserInputService.InputChanged:Connect(function(input)
        if input == dragInput and dragging then
            update(input)
        end
    end)
end
coroutine.wrap(LFQJX_fake_script)()
`,
};

fs.writeFileSync("./req-data.json", JSON.stringify(data), "utf-8");
