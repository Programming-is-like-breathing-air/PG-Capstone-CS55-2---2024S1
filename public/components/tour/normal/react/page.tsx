import React, { useRef, useState } from "react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Overlay from "@/components/ui/overlay"; // 引入 Overlay 组件

const TourComponent = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const [tourStep, setTourStep] = useState(0);
    const [isTourActive, setIsTourActive] = useState(false); // 状态来控制是否显示 tour

    const steps = [
        {
            title: "Upload File",
            description: "Put your files here.",
            target: ref1,
        },
        {
            title: "Save",
            description: "Save your changes.",
            target: ref2,
        },
        {
            title: "Other Actions",
            description: "Click to see other actions.",
            target: ref3,
        },
    ];

    const handleNext = () => {
        setTourStep((prev) => (prev < steps.length ? prev + 1 : 0));
    };

    const handlePrevious = () => {
        setTourStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1)); // 循环回到最后一个
    };

    const handleFinish = () => {
        setTourStep(0);
        setIsTourActive(false); // 关闭 tour
    };

    const beginTour = () => {
        setIsTourActive(true);
        setTourStep(1); // 开始 tour
    };

    // 根据当前步骤计算弹出框的位置
    const getTourPopupPosition = () => {
        if (tourStep > 0 && steps[tourStep - 1].target.current) {
            const rect = steps[tourStep - 1].target.current.getBoundingClientRect();
            return {
                top: rect.bottom + window.scrollY + 8,
                left: rect.left + window.scrollX,
            };
        }
        return { top: 0, left: 0 };
    };

    const { top, left } = getTourPopupPosition();

    return (
        <div className="p-4 relative">
            <div className="w-full p-4 border rounded-lg shadow-lg">
                <CardHeader>
                    <CardTitle>Tour component</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div className="flex">
                        <Button onClick={beginTour} className="w-2/3">
                            Begin Tour
                        </Button>
                    </div>
                    <div className="flex gap-2">
                        <Button
                            ref={ref1}
                            style={tourStep === 1 ? { backgroundColor: "#E2573E", zIndex: 1050 } : {}}
                        >
                            Upload
                        </Button>
                        <Button
                            ref={ref2}
                            style={tourStep === 2 ? { backgroundColor: "#E2573E", zIndex: 1050 } : {}}
                        >
                            Save
                        </Button>
                        <Button
                            ref={ref3}
                            style={tourStep === 3 ? { backgroundColor: "#E2573E", zIndex: 1050 } : {}}
                        >
                            ...
                        </Button>
                    </div>
                </CardContent>
            </div>

            {isTourActive && (
                <>
                    {/* Full screen overlay to darken the rest of the screen */}
                    <div className="fixed inset-0 bg-black opacity-50 z-1000"></div>

                    {/* Position the tour overlay */}
                    <Overlay
                        isOpen={tourStep > 0}
                        usePortal={true}
                        hasBackdrop={false}
                        unmountOnExit={true}
                        transitionName="tour-popup"
                        className="absolute p-4 border bg-white rounded-lg shadow-lg text-center z-1050"
                        style={{ top, left }}
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-bold">{steps[tourStep - 1].title}</h3>
                            <p>{steps[tourStep - 1].description}</p>
                            <div className="flex justify-between mt-4">
                                {tourStep > 1 && (
                                    <Button onClick={handlePrevious}>Previous</Button>
                                )}
                                {tourStep < steps.length && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}
                                {tourStep === steps.length && (
                                    <Button onClick={handleFinish}>Finish</Button>
                                )}
                            </div>
                        </div>
                    </Overlay>
                </>
            )}
        </div>
    );
};

export default TourComponent;
