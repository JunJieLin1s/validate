export enum AlertType {
    info = 'info',
    success = 'success',
    warning = 'warning',
    error = 'error',
}

export enum AlertSize {
    small = 'small',
    medium = 'medium',
    large = 'large',
}

export interface VAlertProps {
    type?: AlertType
    size?: AlertSize
    outlined?: boolean
    title?: string
    disabled?: boolean
}