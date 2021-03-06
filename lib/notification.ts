export type NotificationPermissionStatus = 'denied' | 'granted' | 'default';

export interface NotificationOptions {
  dir?: 'auto' | 'ltr' | 'rtl';
  lang?: string;
  body?: string;
  tag?: string;
  icon?: string;
  data?: any;
  vibrate?: number[];
  renotify?: boolean;
  silent?: boolean;
  sound?: string;
  noscreen?: boolean;
  sticky?: boolean;
}

export interface NotificationInstance extends NotificationOptions {
  onclick: () => void;
  onerror: () => void;
  onclose: () => void;
  timestamp: string;
  close(): void;
}

export interface NotificationStatic {
  new (title: string, options?: NotificationOptions): NotificationInstance;
  permission: NotificationPermissionStatus;
  requestPermission(): Promise<NotificationPermissionStatus>;
}
