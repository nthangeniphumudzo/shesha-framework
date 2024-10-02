import React, { useContext, useReducer, PropsWithChildren, FC } from "react";
import { ChartDataActionsContext, ChartDataStateContext, INITIAL_STATE } from "./context";
import { chartDataReducer } from "./reducer";
import { SetChartFiltersAction, SetControlPropsAction, SetDataAction, SetFilterdDataAction, SetIsFilterVisibleAction, SetIsLoadedAction, SetRefListsAction } from "./actions";
import { IFilter } from "@/designer-components/charts/model";

const ChartDataProvider: FC<PropsWithChildren<{}>> = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(chartDataReducer, INITIAL_STATE);

  const setData = (data: any[]) => {
    dispatch(SetDataAction(data));
  };

  const setRefLists = (refLists: any[]) => {
    dispatch(SetRefListsAction(refLists));
  };

  const setFilterdData = (filteredData: any[]) => {
    dispatch(SetFilterdDataAction(filteredData));
  };

  const setChartFilters = (filters: IFilter[]) => {
    dispatch(SetChartFiltersAction(filters));
  };

  const setIsLoaded = (isLoaded: boolean) => {
    dispatch(SetIsLoadedAction(isLoaded));
  };

  const setIsFilterVisible = (isFilterVisible: boolean) => {
    dispatch(SetIsFilterVisibleAction(isFilterVisible));
  };

  const onFilter = () => {
    // implement this function
  };

  const setControlProps = (controlProps: any) => {
    dispatch(SetControlPropsAction(controlProps));
  };

  return (
    <ChartDataStateContext.Provider value={state}>
      <ChartDataActionsContext.Provider value={{
        setData,
        setRefLists,
        setFilterdData,
        setChartFilters,
        onFilter,
        setIsLoaded,
        setIsFilterVisible,
        setControlProps
      }}>
        {children}
      </ChartDataActionsContext.Provider>
    </ChartDataStateContext.Provider>
  );
};

export const useChartDataStateContext = () => {
  const context = useContext(ChartDataStateContext);
  if (!context) {
    throw new Error("useChartDataStateContext must be used within a ChartDataProvider");
  }
  return context;
};

export const useChartDataActionsContext = () => {
  const context = useContext(ChartDataActionsContext);
  if (!context) {
    throw new Error("useChartDataActionsContext must be used within a ChartDataProvider");
  }
  return context;
};

export default ChartDataProvider;