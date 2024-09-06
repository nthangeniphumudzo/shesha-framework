import { setValueByPropertyName } from "@/utils/object";
import { ConfigurableFormInstance, ISetFormDataPayload } from "./contexts";
import { FormMode } from "@/generic-pages/dynamic/interfaces";
import { FormInstance } from "antd";
import { isEntityMetadata } from "@/interfaces";
import { IEntityEndpoints } from "../sheshaApplication/publicApi/entities/entityTypeAccessor";
import { IShaFormInstance } from "./store/interfaces";
import { IDelayedUpdateGroup } from "../delayedUpdateProvider/models";

export interface IFormSettings {
  modelType?: string;

  postUrl?: string;
  putUrl?: string;
  deleteUrl?: string;
  getUrl?: string;

  fieldsToFetch?: string[];

  /** if true then need to update components structure for using Setting component */
  isSettingsForm?: boolean;
};

type PublicFormSettings = Pick<IFormSettings, 'modelType'>;

/**
 * Form instance API
 */
export interface FormApi<Values = any> {
  /**
   * Add deferred update data to `data` object 
   * @param data model data object for updating
   * @returns The deferred update data
   */
  addDelayedUpdateData: (data: Values) => IDelayedUpdateGroup[];
  /**
   * Set field value
   * @param name field name
   * @param value field value
   */
  setFieldValue: (name: string, value: any) => void;
  /**
   * Set fields value
   * @param values 
   */
  setFieldsValue: (values: Values) => void;
  /**
   * Clear fields value
   */
  clearFieldsValue: () => void;
  /**
   * Submit form
   */
  submit: () => void;

  /**
   * Set form data
   * @deprecated The method should not be used
   * @param payload data payload
   */
  setFormData: (payload: ISetFormDataPayload) => void;

  /** antd form instance */
  formInstance?: FormInstance<Values>;
  /** Configurable form settings */
  formSettings: PublicFormSettings;
  /** Form mode */
  formMode: FormMode;
  /** Form data */
  data: Values;
  /** Default API endpoints (create, read, update, delete) */
  defaultApiEndpoints: IEntityEndpoints;
  /** Form arguments passed by caller */
  formArguments?: any;
};

export type ConfigurableFormPublicApi = Pick<ConfigurableFormInstance, 'setFormData' | 'form' | 'formSettings' | 'formMode' | 'formData' | 'modelMetadata'> & {
  shaForm?: IShaFormInstance;
};

class PublicFormApiWrapper implements FormApi {
  readonly #form: ConfigurableFormPublicApi;

  constructor(form: ConfigurableFormPublicApi) {
    this.#form = form;
  }

  addDelayedUpdateData = (data: any): IDelayedUpdateGroup[]  => {
    const delayedUpdateData = this.#form?.shaForm?.getDelayedUpdates();
    if (delayedUpdateData?.length > 0)
      data['_delayedUpdate'] = delayedUpdateData;
    return delayedUpdateData;
  };

  setFieldValue = (name: string, value: any) => {
    this.#form?.setFormData({ values: setValueByPropertyName(this.#form.formData, name, value, true), mergeValues: true });
  };
  setFieldsValue = (values: any) => {
    this.#form?.setFormData({ values, mergeValues: true });
  };
  clearFieldsValue = () => {
    this.#form?.setFormData({ values: {}, mergeValues: false });
  };
  submit = () => {
    this.#form?.form?.submit();
  };
  setFormData = (payload: ISetFormDataPayload) => {
    this.#form?.setFormData(payload);
  };
  get formInstance(): FormInstance<any> {
    // antd form
    return this.#form?.form;
  }
  get formSettings(): PublicFormSettings {
    return this.#form?.formSettings ? { modelType: this.#form.formSettings.modelType } : {};
  }
  get formMode(): FormMode {
    return this.#form?.formMode;
  }
  get data(): any {
    return this.#form?.formData;
  }
  get defaultApiEndpoints(): IEntityEndpoints {
    return isEntityMetadata(this.#form?.modelMetadata)
      ? this.#form.modelMetadata.apiEndpoints
      : {};
  }
  get formArguments(): any {
    return this.#form?.shaForm?.formArguments;
  }
}

export const getFormApi = (form: ConfigurableFormPublicApi): FormApi => {
  return new PublicFormApiWrapper(form);
};