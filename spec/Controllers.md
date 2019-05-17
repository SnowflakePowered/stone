# Controllers
**Version:** `^9.0.0`

A Stone controller definition represents a controller layout for an emulated controller. At least a single platform must be specified that this contoller supports, in the form of a Stone platform ID.

## Controller Element Types

Every element can have one of any of the following types. This means a face button can be treated as a directional button, etc, and serves as hinting outside of the semantic meaning of the element keys themselves to the consumer.

| Type                | Description                              |
| ------------------- | ---------------------------------------- |
| Null                | This element does not exist. Intended for internal use for consumers |
| Button              | A button, usually with a switch or dome that can be depressed on the controller, exclusing directional buttons |
| Directional         | A directional button or D-pad button representing one of 8 cardinal directions |
| AxisPositive        | An axis that increases in value on the number line. For example, analog stick movement towards the right, or towards the forward direction. |
| AxisNegative        | An axis that decreases in value on the number line. For example, analog stick movement towards the left, or towards the backwards direction. |
| Trigger             | An analog shoulder trigger, able to be depressed smoothly with varying degrees of pressure from undepressed (0%) to fully depressed (100%), usually marked L2 or R2 |
| Rumble              | A rumble motor that shakes the controller |
| Keyboard            | A keyboard of an unspecified amount of keys. Intended for special-case keyboard handling for consumers |
| Pointer             | A pointing device that can express position in the form of a contiguous set of coordinates on a multi-dimensional cartesian plane. Examples include a mouse, or the Wii Remote IR for 2D, |
| PointerAxisPositive | A pointer axis that increases in value on the number line, where the pointer device itself is not limited to axis-based representation. For example, continous right mouse movement. |
| PointerAxisNegative | A pointer axis that increases in value on the number line, where the pointer device itself is not limited to axis-based representation. For example, continous left mouse movement. |
| Touchscreen         | A touch sensitive surface of unspecified size and precision, where input can be expressed as a non-contiguous matrix of coordinates on a 2 dimentional cartesian plane. However, most touchscreens in video game controllers are only concerned with a single matrix due to the lack of multi-touch |
| Gyroscope           | A 3 axis rotation gyroscope of unspecified precision, where input can be expressed as a vector of 3 coordinates X, Y, and Z  |

## Valid Controller Elements

The following is a table of controller elements allowed by the Stone specification.

Generally, buttons are semantic in accordance with the physical controller being defined.  Every button as a semantic meaning that usually aligns with the Type that is specified. However, such meaning may be overriden using a Type, for example, treating axes as directional buttons instead of true axes.

Numbered buttons are meant to be used as numeric pad buttons, or placeholder buttons for buttons that do not have semantic meaning within the controller specification. For example, Keita Takahashi's *Tenya Wanya Teens* controller, with 16 sementically void multi-colored buttons, would use `Button0` to `Button15` to represent its layout, while something such as a Guitar Hero controller would use the lettered face buttons it replaces as part of its frets. `Button0` to `Button9` are reserved if the controller in question has auxillary buttons **as well as** a numeric pad. 0 to 9 should be used for the numeric pad, and 10 to 31, should be used in order, for the auxillary buttons. If the controller in question lacks an numeric pad, auxillary buttons should be define sequentially starting from `Button0`. 


| Controller Element       | Description                              | Semantic Meaning                         |
| ------------------------ | ---------------------------------------- | ---------------------------------------- |
| ButtonA                  | The conventional 'A' or confirm face button in a controller | Lettered Face Button                     |
| ButtonB                  | The conventional 'B' or back face button in a controller | Lettered Face Button                     |
| ButtonC                  | The 'C'-labeled, or 3rd button in a 6-face button layout or similar | Lettered Face Button                     |
| ButtonX                  | The conventional 'X' button in a controller | Lettered Face Button                     |
| ButtonY                  | The conventional 'Y' button in a controller | Lettered Face Button                     |
| ButtonZ                  | The 'Z'-labeled or 6th button in a 6-face button layout or similar | Lettered Face Button                     |
| ButtonL                  | The shoulder button registering a digital signal on the left side of the controller | L/R Digital Shoulder Button              |
| ButtonR                  | The shoulder button registering a digital signal on the right side of the controller | L/R Digital Shoulder Button              |
| ButtonStart              | The traditional 'Start' button on a conventional controller that usually pauses or starts the game | UI Control Button                        |
| ButtonSelect             | The traditional 'Select' button on a conventional controller that provides auxillary functions | UI Control Button                        |
| ButtonGuide              | A guide button featured on modern controllers that bring up a pause or guide overlay outside of the game itself | UI Control Button                        |
| ButtonClickL             | A depression on the left analog stick that registers a digital signal. Usually labeled as L3 | Analog Click                             |
| ButtonClickR             | A depression on the Right analog stick that registers a digital signal. Usually labeled as R3 | Analog Click                             |
| Button0                  | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons, or as a numeric pad key on certain controllers | Numbered button                          |
| Button1                  | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons, or as a numeric pad key on certain controllers | Numbered button                          |
| Button2                  | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons, or as a numeric pad key on certain controllers | Numbered button                          |
| Button3                  | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons, or as a numeric pad key on certain controllers | Numbered button                          |
| Button4                  | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons, or as a numeric pad key on certain controllers | Numbered button                          |
| Button5                  | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons, or as a numeric pad key on certain controllers | Numbered button                          |
| Button6                  | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons, or as a numeric pad key on certain controllers | Numbered button                          |
| Button7                  | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons, or as a numeric pad key on certain controllers | Numbered button                          |
| Button8                  | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons, or as a numeric pad key on certain controllers | Numbered button                          |
| Button9                  | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons, or as a numeric pad key on certain controllers | Numbered button                          |
| Button10                 | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons. | Numbered button                          |
| Button11                 | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons. | Numbered button                          |
| Button12                 | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons. | Numbered button                          |
| Button13                 | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons. | Numbered button                          |
| Button14                 | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons. | Numbered button                          |
| Button15                 | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons. | Numbered button                          |
| Button16                 | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons. | Numbered button                          |
| Button17                 | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons. | Numbered Button                          |
| Button18                 | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons. | Numbered Button                          |
| Button19                 | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons. | Numbered Button                          |
| Button20                 | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons. | Numbered Button                          |
| Button21                 | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons. | Numbered Button                          |
| Button22                 | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons. | Numbered Button                          |
| Button23                 | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons. | Numbered Button                          |
| Button24                 | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons. | Numbered Button                          |
| Button25                 | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons. | Numbered Button                          |
| Button26                 | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons. | Numbered Button                          |
| Button27                 | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons. | Numbered Button                          |
| Button28                 | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons. | Numbered Button                          |
| Button29                 | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons. | Numbered Button                          |
| Button30                 | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons. | Numbered Button                          |
| Button31                 | Numbered button without semantic value. Used as a placeholder for buttons that do not fit within the other semantic buttons. | Numbered Button                          |
| DirectionalN             | Directional button indicating the north or upwards direction | Directional Button                       |
| DirectionalE             | Directional button indicating the east or rightwards direction | Directional Button                       |
| DirectionalS             | Direction button indicating the south or downwards direction | Directional Button                       |
| DirectionalW             | Direction button indicating the west or leftwards direction | Directional Button                       |
| DirectionalNE            | Auxillary directional button indicating the northeast, or upwards and right direction | Directional Button                       |
| DirectionalNW            | Auxillary directional button indicating the northwest, or upwards and left direction | Directional Button                       |
| DirectionalSE            | Auxillary directional button indicating the southeast, or downwards and right direction | Directional Button                       |
| DirectionalSW            | Auxillary directional button indicating the southwest, or downwards and left direction | Directional Button                       |
| TriggerLeft              | An analog shoulder trigger, able to be depressed smoothly with varying degrees of pressure from undepressed (0%) to fully depressed (100%), on the left side of the controller, usually marked L2 | Analog Shoulder Trigger                  |
| TriggerRight             | An analog shoulder trigger, able to be depressed smoothly with varying degrees of pressure from undepressed (0%) to fully depressed (100%), on the right side of the controller, usually marked R2 | Analog Shoulder Trigger                  |
| AxisLeftAnalogPositiveX  | Rightwards movement of the left analog stick along the X axis (horizontally) | Analog stick movement                    |
| AxisLeftAnalogNegativeX  | Leftwards movement of the left analog stick along the X axis (horizontally) | Analog stick movement                    |
| AxisLeftAnalogPositiveY  | Upwards movement of the left analog stick along the Y axis (vertically) | Analog stick movement                    |
| AxisLeftAnalogNegativeY  | Downwards movement of the left analog stick along the Y axis (vertically) | Analog stick movement                    |
| AxisRightAnalogPositiveX | Rightwards movement of the right analog stick along the X axis (horizontally) | Analog stick movement                    |
| AxisRightAnalogNegativeX | Leftwards movement of the right analog stick along the X axis (horizontally) | Analog stick movement                    |
| AxisRightAnalogPositiveY | Upwards movement of the right analog stick along the Y axis (vertically) | Analog stick movement                    |
| AxisRightAnalogNegativeY | Downwards movement of the right analog stick along the Y axis (vertically) | Analog stick movement                    |
| RumbleBig                | A large rumble action (usually through the larger of two rumble motors in a controller | Rumble                                   |
| RumbleSmall              | A smaller rumble action (usually through the smaller of two rumble motors in a controller | Rumble                                   |
| Pointer2D                | A pointing device that can express absolute position in the form of a set of coordinates on a 2 dimensional plane. Examples include a mouse, or the Wii Remote IR | Co-ordinate space pointer                |
| Pointer3D                | A pointing device that can express absolute position in the form of a set of coordinates in 3 dimensional space. Examples include the Oculus Touch device, or the Playstation Move | Co-ordinate space pointer                |
| PointerAxisPositiveX     | Continous rightwards movement of a pointer device on the X axis (horizontal) | Pointer Axis                             |
| PointerAxisNegativeX     | Continous leftwards movement of a pointer device on the X axis (horizontal) | Pointer Axis                             |
| PointerAxisPositiveY     | Continous upwards movement of a pointer device on the Y axis (vertical) | Pointer Axis                             |
| PointerAxisNegativeY     | Continous downwards movement of a pointer device on the Y axis (vertical) | Pointer Axis                             |
| PointerAxisPositiveZ     | Continous forwards movement of a pointer device on the Z axis | Pointer Axis                             |
| PointerAxisNegativeZ     | Continous backwards movement of a pointer device on the Z axis | Pointer Axis                             |
| Touchscreen              | A touch sensitive surface of unspecified size and precision, where input can be expressed as a set of coordinates on a 2 dimensional plane. | Touchscreen                              |
| Keyboard                 | A keyboad with an unspecified amount of keys. Intended for emulated computers such as the Commodore 64 | Keyboard                                 |
| Gyroscope                | A 3-axis gyroscope that can express rotational angles in the form of a 3-dimensional vector of unspecified unit| Gyroscope |
| NoElement                | No element                               | Null. Intended for internal use by consumers only |
