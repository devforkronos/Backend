-- Gui to Lua
-- Version: 3.2
-- Instances:
local BloxSafe = Instance.new("ScreenGui")
local Frame = Instance.new("Frame")
local Master = Instance.new("Frame")
local ScrollingFrame = Instance.new("ScrollingFrame")
local HttpService = game:GetService("HttpService")
local ScriptBox = Instance.new("Frame")
local Name = Instance.new("TextLabel")
local Inject = Instance.new("TextButton")
local UIAspectRatioConstraint = Instance.new("UIAspectRatioConstraint")
local UIAspectRatioConstraint_2 = Instance.new("UIAspectRatioConstraint")
local Side = Instance.new("Frame")
local DestroyGUI = Instance.new("TextButton")
local Toggle = Instance.new("TextButton")
local TextLabel = Instance.new("TextLabel")
local UIAspectRatioConstraint_3 = Instance.new("UIAspectRatioConstraint")
local UIAspectRatioConstraint_4 = Instance.new("UIAspectRatioConstraint")
local UIAspectRatioConstraint_5 = Instance.new("UIAspectRatioConstraint")

-- Properties:

BloxSafe.Name = "BloxSafe"
BloxSafe.Parent = game.Players.LocalPlayer:WaitForChild("PlayerGui")
BloxSafe.ZIndexBehavior = Enum.ZIndexBehavior.Sibling

Frame.Parent = BloxSafe
Frame.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
Frame.BackgroundTransparency = 1.000
Frame.Position = UDim2.new(0.155303016, 0, 0.162711889, 0)
Frame.Size = UDim2.new(0, 469, 0, 314)

Master.Name = "Master"
Master.Parent = Frame
Master.BackgroundColor3 = Color3.fromRGB(25, 25, 38)
Master.Position = UDim2.new(0.359190881, 0, -0.00234586885, 0)
Master.Size = UDim2.new(0, 314, 0, 314)

ScrollingFrame.Parent = Master
ScrollingFrame.Active = true
ScrollingFrame.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
ScrollingFrame.BackgroundTransparency = 1.000
ScrollingFrame.BorderSizePixel = 0
ScrollingFrame.Position = UDim2.new(0, 0, 0.0246388633, 0)
ScrollingFrame.Size = UDim2.new(0, 306, 0, 298)
ScrollingFrame.ScrollBarThickness = 7

ScriptBox.Name = "ScriptBox"
ScriptBox.Parent = ScrollingFrame
ScriptBox.BackgroundColor3 = Color3.fromRGB(31, 31, 47)
ScriptBox.Position = UDim2.new(0.0605581179, 0, 0.00838582218, 0)
ScriptBox.Size = UDim2.new(0, 268, 0, 95)

Name.Name = "Name"
Name.Parent = ScriptBox
Name.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
Name.BackgroundTransparency = 1.000
Name.Position = UDim2.new(0.065311946, 0, 0, 0)
Name.Size = UDim2.new(0, 250, 0, 45)
Name.Font = Enum.Font.JosefinSans
Name.Text = "Script Name"
Name.TextColor3 = Color3.fromRGB(248, 248, 248)
Name.TextSize = 14.000
Name.TextXAlignment = Enum.TextXAlignment.Left

Inject.Name = "Inject"
Inject.Parent = ScriptBox
Inject.BackgroundColor3 = Color3.fromRGB(52, 122, 235)
Inject.Position = UDim2.new(0.0429238863, 0, 0.480585039, 0)
Inject.Size = UDim2.new(0, 250, 0, 39)
Inject.Font = Enum.Font.Ubuntu
Inject.Text = "Load Script"
Inject.TextColor3 = Color3.fromRGB(255, 255, 255)
Inject.TextSize = 14.000

UIAspectRatioConstraint.Parent = ScriptBox
UIAspectRatioConstraint.AspectRatio = 2.821

UIAspectRatioConstraint_2.Parent = Master
UIAspectRatioConstraint_2.AspectRatio = 0.975

Side.Name = "Side"
Side.Parent = Frame
Side.BackgroundColor3 = Color3.fromRGB(25, 25, 38)
Side.Position = UDim2.new(-0.00184437633, 0, -0.000605106354, 0)
Side.Size = UDim2.new(0, 162, 0, 314)

DestroyGUI.Name = "DestroyGUI"
DestroyGUI.Parent = Side
DestroyGUI.BackgroundColor3 = Color3.fromRGB(212, 74, 74)
DestroyGUI.Position = UDim2.new(0.0513669252, 0, 0.19806622, 0)
DestroyGUI.Size = UDim2.new(0, 142, 0, 39)
DestroyGUI.Font = Enum.Font.Ubuntu
DestroyGUI.Text = "Destroy GUI"
DestroyGUI.TextColor3 = Color3.fromRGB(255, 255, 255)
DestroyGUI.TextSize = 14.000

Toggle.Name = "Toggle"
Toggle.Parent = Side
Toggle.BackgroundColor3 = Color3.fromRGB(52, 122, 235)
Toggle.Position = UDim2.new(0.0513669252, 0, 0.042015247, 0)
Toggle.Size = UDim2.new(0, 142, 0, 39)
Toggle.Font = Enum.Font.Ubuntu
Toggle.Text = "Toggle GUI"
Toggle.TextColor3 = Color3.fromRGB(255, 255, 255)
Toggle.TextSize = 14.000

TextLabel.Parent = Side
TextLabel.BackgroundColor3 = Color3.fromRGB(130, 253, 255)
TextLabel.BackgroundTransparency = 1.000
TextLabel.Position = UDim2.new(0.0493827164, 0, 0.866242051, 0)
TextLabel.Size = UDim2.new(0, 142, 0, 34)
TextLabel.Font = Enum.Font.JosefinSans
TextLabel.Text = "By github.com/BloxSafe"
TextLabel.TextColor3 = Color3.fromRGB(241, 241, 241)
TextLabel.TextSize = 12.000

UIAspectRatioConstraint_3.Parent = TextLabel
UIAspectRatioConstraint_3.AspectRatio = 4.176

UIAspectRatioConstraint_4.Parent = Side
UIAspectRatioConstraint_4.AspectRatio = 0.516

UIAspectRatioConstraint_5.Parent = Frame
UIAspectRatioConstraint_5.AspectRatio = 1.427

-- Scripts:

local function FXMSY_fake_script() -- ScrollingFrame.LocalScript 
    local script = Instance.new('LocalScript', ScrollingFrame)
    local data = HttpService:JSONDecode([[{{ScriptData}}]]);
    for count = 1, #data do
        local code = data[count]
        print(code)
        local template = script.Parent:WaitForChild("ScriptBox"):Clone()
        template:FindFirstChild("Name").Text = code.name
        template.Parent = script.Parent.Parent:WaitForChild("ScrollingFrame")
        template.Position = UDim2.new(template.Position.X.Scale, 0, template.Position.Y.Scale,
            (template.Size.Y.Offset + 10) * (count - 1))
        template:FindFirstChild("Inject").MouseButton1Click:Connect(function()
            loadstring(code.content)()
        end)
    end
    script.Parent:WaitForChild("ScriptBox"):Destroy()
end
coroutine.wrap(FXMSY_fake_script)()
local function LVOBV_fake_script() -- DestroyGUI.LocalScript 
    local script = Instance.new('LocalScript', DestroyGUI)

    script.Parent.MouseButton1Click:Connect(function()
        script.Parent.Parent.Parent:Destroy()
    end)
end
coroutine.wrap(LVOBV_fake_script)()
local function LJXTGVH_fake_script() -- Toggle.LocalScript 
    local script = Instance.new('LocalScript', Toggle)

    local Master = script.Parent.Parent.Parent:WaitForChild("Master")

    script.Parent.MouseButton1Click:Connect(function()
        if Master.Visible == true then
            Master.Visible = false
        else
            Master.Visible = true
        end
    end)
end
coroutine.wrap(LJXTGVH_fake_script)()
local function NNOPHV_fake_script() -- Frame.Dragify 
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
coroutine.wrap(NNOPHV_fake_script)()
