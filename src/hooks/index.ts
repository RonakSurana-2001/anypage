'use client'

import { dataWidgets } from "@/data/index";
import { useState } from "react";

const useWidgets = () => {
    const [widgets, setWidgets]: any = useState([]);

    document.onkeyup = function(e) {
        if (e.altKey && e.which == 84) {
          alert("Ctrl + B shortcut combination was pressed");
        } 
      };

    const addWidget = (nextWidget: any) => {
        console.log(nextWidget, widgets);
        const newData = [...widgets, nextWidget];
        setWidgets(newData);
    }

    const removeWidget = (indexOfWidget: any) => {
        const newData = [...widgets?.slice(0, indexOfWidget), ...widgets?.slice(indexOfWidget+1)];
        console.log(newData);
        setWidgets(newData);
    }

    const updateWidget = (widgetData: any, indexOfWidget: any) => {
        const newData = [...widgets?.slice(0, indexOfWidget), widgetData, ...widgets?.slice(indexOfWidget+1)];
        console.log(newData);
        setWidgets(newData);
    }

    const toggleRequiredWidget = (indexOfWidget: any) => {
        console.log(indexOfWidget);
        const selectedWidget = widgets[indexOfWidget]
        const newData = {...selectedWidget, data: {...selectedWidget?.data, required: !selectedWidget?.data?.required}}
        updateWidget(newData, indexOfWidget);
    }

    const duplicateWidget = (indexOfWidget: any) => {
        const newWidget = dataWidgets[widgets[indexOfWidget]?.value];
        const newData =  [...widgets, newWidget];
        setWidgets(newData);
    }

    const addTitle = (indexOfWidget: any) => {
        const titleWidget = dataWidgets['title'];
        const newData = [...widgets?.slice(0, indexOfWidget), titleWidget, ...widgets?.slice(indexOfWidget)];
        setWidgets(newData);
    }

    const saveToDb = () => {
        
    }

    return {
        widgets, 
        saveToDb,
        addWidget,
        removeWidget,
        toggleRequiredWidget,
        addTitle,
        duplicateWidget
    }
}

export default useWidgets;