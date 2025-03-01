import {
  IConfigurableActionArguments,
  IConfigurableActionConfiguration,
  IConfigurableActionDescriptor,
  IConfigurableActionIdentifier,
} from '@/interfaces/configurableAction';
import { GenericDictionary } from '../form/models';
import { IConfigurableActionGroupDictionary } from './models';
import { IApplicationApi } from '../sheshaApplication/publicApi';
import { IFormApi } from '../form/formApi';
import { createNamedContext } from '@/utils/react';

export interface IConfigurableActionDispatcherStateContext {
}

export interface IGetConfigurableActionPayload {
  owner: string;
  name: string;
}

export interface IArgumentsEvaluationContext extends GenericDictionary {
  form?: IFormApi;
  application?: IApplicationApi;
}

export interface IExecuteActionPayload {
  actionConfiguration: IConfigurableActionConfiguration;
  argumentsEvaluationContext: IArgumentsEvaluationContext;
  success?: (actionResponse: any) => void;
  fail?: (error: any) => void;
}

export interface IPrepareActionArgumentsPayload<TArguments = any> {
  actionConfiguration: IConfigurableActionConfiguration<TArguments>;
  argumentsEvaluationContext: IArgumentsEvaluationContext;
}

export interface IRegisterActionPayload<TArguments = IConfigurableActionArguments, TReponse = any>
  extends IConfigurableActionDescriptor<TArguments, TReponse> {
  isPermament?: boolean;
}

export interface RegisterActionType {
  <TArguments = IConfigurableActionArguments, TResponse = any>(
    arg: IRegisterActionPayload<TArguments, TResponse>
  ): void;
}

export type ConfigurableActionExecuter = (payload: IExecuteActionPayload) => Promise<void>;

export type ActionDynamicContextEvaluationHook = (actionConfig: IConfigurableActionConfiguration) => GenericDictionary;

export interface IConfigurableActionDispatcherActionsContext {
  getConfigurableAction: (payload: IGetConfigurableActionPayload) => IConfigurableActionDescriptor;
  getConfigurableActionOrNull: (payload: IGetConfigurableActionPayload) => IConfigurableActionDescriptor | null;
  getActions: () => IConfigurableActionGroupDictionary;
  registerAction: RegisterActionType;
  unregisterAction: (actionIdentifier: IConfigurableActionIdentifier) => void;
  prepareArguments: <TArguments = any>(payload: IPrepareActionArgumentsPayload<TArguments>) => Promise<TArguments>;

  executeAction: ConfigurableActionExecuter;
  useActionDynamicContext: ActionDynamicContextEvaluationHook;
}

/** initial state */
export const CONFIGURABLE_ACTION_DISPATCHER_CONTEXT_INITIAL_STATE: IConfigurableActionDispatcherStateContext = {
};

export const ConfigurableActionDispatcherStateContext = createNamedContext<IConfigurableActionDispatcherStateContext>(
  CONFIGURABLE_ACTION_DISPATCHER_CONTEXT_INITIAL_STATE,
  "ConfigurableActionDispatcherStateContext"
);

export const ConfigurableActionDispatcherActionsContext = createNamedContext<IConfigurableActionDispatcherActionsContext>(undefined, "ConfigurableActionDispatcherActionsContext");
