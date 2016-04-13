declare namespace stone {
    export interface Controller {
        LayoutID: string;
        FriendlyName: string;
        Platforms: string[];
        Layout: {
            ButtonA?: {
                Label?: string;
                Type?: string;
            };
            ButtonB?: {
                Label?: string;
                Type?: string;
            };
            ButtonC?: {
                Label?: string;
                Type?: string;
            };
            ButtonX?: {
                Label?: string;
                Type?: string;
            };
            ButtonY?: {
                Label?: string;
                Type?: string;
            };
            ButtonZ?: {
                Label?: string;
                Type?: string;
            };
            ButtonL?: {
                Label?: string;
                Type?: string;
            };
            ButtonR?: {
                Label?: string;
                Type?: string;
            };
            ButtonStart?: {
                Label?: string;
                Type?: string;
            };
            ButtonSelect?: {
                Label?: string;
                Type?: string;
            };
            ButtonGuide?: {
                Label?: string;
                Type?: string;
            };
            ButtonClickL?: {
                Label?: string;
                Type?: string;
            };
            ButtonClickR?: {
                Label?: string;
                Type?: string;
            };
            Button0?: {
                Label?: string;
                Type?: string;
            };
            Button1?: {
                Label?: string;
                Type?: string;
            };
            Button2?: {
                Label?: string;
                Type?: string;
            };
            Button3?: {
                Label?: string;
                Type?: string;
            };
            Button4?: {
                Label?: string;
                Type?: string;
            };
            Button5?: {
                Label?: string;
                Type?: string;
            };
            Button6?: {
                Label?: string;
                Type?: string;
            };
            Button7?: {
                Label?: string;
                Type?: string;
            };
            Button8?: {
                Label?: string;
                Type?: string;
            };
            Button9?: {
                Label?: string;
                Type?: string;
            };
            Button10?: {
                Label?: string;
                Type?: string;
            };
            Button11?: {
                Label?: string;
                Type?: string;
            };
            Button12?: {
                Label?: string;
                Type?: string;
            };
            Button13?: {
                Label?: string;
                Type?: string;
            };
            Button14?: {
                Label?: string;
                Type?: string;
            };
            Button15?: {
                Label?: string;
                Type?: string;
            };
            Button16?: {
                Label?: string;
                Type?: string;
            };
            Button17?: {
                Label?: string;
                Type?: string;
            };
            Button18?: {
                Label?: string;
                Type?: string;
            };
            Button19?: {
                Label?: string;
                Type?: string;
            };
            Button20?: {
                Label?: string;
                Type?: string;
            };
            Button21?: {
                Label?: string;
                Type?: string;
            };
            Button22?: {
                Label?: string;
                Type?: string;
            };
            Button23?: {
                Label?: string;
                Type?: string;
            };
            Button24?: {
                Label?: string;
                Type?: string;
            };
            Button25?: {
                Label?: string;
                Type?: string;
            };
            Button26?: {
                Label?: string;
                Type?: string;
            };
            Button27?: {
                Label?: string;
                Type?: string;
            };
            Button28?: {
                Label?: string;
                Type?: string;
            };
            Button29?: {
                Label?: string;
                Type?: string;
            };
            Button30?: {
                Label?: string;
                Type?: string;
            };
            Button31?: {
                Label?: string;
                Type?: string;
            };
            DirectionalN?: {
                Label?: string;
                Type?: string;
            };
            DirectionalE?: {
                Label?: string;
                Type?: string;
            };
            DirectionalS?: {
                Label?: string;
                Type?: string;
            };
            DirectionalW?: {
                Label?: string;
                Type?: string;
            };
            DirectionalNE?: {
                Label?: string;
                Type?: string;
            };
            DirectionalNW?: {
                Label?: string;
                Type?: string;
            };
            DirectionalSE?: {
                Label?: string;
                Type?: string;
            };
            DirectionalSW?: {
                Label?: string;
                Type?: string;
            };
            TriggerLeft?: {
                Label?: string;
                Type?: string;
            };
            TriggerRight?: {
                Label?: string;
                Type?: string;
            };
            AxisLeftAnalogPositiveX?: {
                Label?: string;
                Type?: string;
            };
            AxisLeftAnalogNegativeX?: {
                Label?: string;
                Type?: string;
            };
            AxisLeftAnalogPositiveY?: {
                Label?: string;
                Type?: string;
            };
            AxisLeftAnalogNegativeY?: {
                Label?: string;
                Type?: string;
            };
            AxisRightAnalogPositiveX?: {
                Label?: string;
                Type?: string;
            };
            AxisRightAnalogNegativeX?: {
                Label?: string;
                Type?: string;
            };
            AxisRightAnalogPositiveY?: {
                Label?: string;
                Type?: string;
            };
            AxisRightAnalogNegativeY?: {
                Label?: string;
                Type?: string;
            };
            RumbleBig?: {
                Label?: string;
                Type?: string;
            };
            RumbleSmall?: {
                Label?: string;
                Type?: string;
            };
            PointerMouse?: {
                Label?: string;
                Type?: string;
            };
            PointerAxisPositiveX?: {
                Label?: string;
                Type?: string;
            };
            PointerAxisNegativeX?: {
                Label?: string;
                Type?: string;
            };
            PointerAxisPositiveY?: {
                Label?: string;
                Type?: string;
            };
            PointerAxisNegativeY?: {
                Label?: string;
                Type?: string;
            };
            Keyboard?: {
                Label?: string;
                Type?: string;
            };
            Touchscreen?: {
                Label?: string;
                Type?: string;
            };
        };
    }
    export interface Platform {
        PlatformID: string;
        Metadata: {
        };
        MaximumInputs: number;
        FriendlyName: string;
        FileExtensions: string[];
    }
}

