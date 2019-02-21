declare module '*.png';
declare module '*.jpg';
declare module '*.json';
declare module '*.svg';

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

/** Type let T 所有屬性選用 */
declare type Optional<T> = { [P in keyof T]?: T[P] };

/** Type for Redux Form Error */
declare type FormErrors<FormData = {}> = { [P in keyof FormData]?: string };

declare type CallbackFuncType = (error: any, responseData?: any) => void;
