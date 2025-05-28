import { cva, type VariantProps } from 'class-variance-authority';

export const alertCva = cva(
    'p-4 rounded-md border-2 shadow-sm',
    {
        variants: {
            type: {
                info: 'bg-blue-50 border-blue-300 text-blue-700',
                success: 'bg-green-50 border-green-300 text-green-700',
                warning: 'bg-yellow-50 border-yellow-300 text-yellow-700',
                error: 'bg-red-50 border-red-300 text-red-700',
            },
            size:{
                small: 'text-sm',
                medium: 'text-base',
                large: 'text-lg'
            },
            outlined: {
                true: 'bg-transparent',
                false: '',
            },
            disabled: {
                true: 'opacity-50 cursor-not-allowed',
                false: '',
            }
        },
        defaultVariants: {
            type: 'info',
            size: 'medium',
            outlined: false,
            disabled: false,
        },
        compoundVariants: [
            {
                type: 'info',
                outlined: true,
                class: 'border-blue-500 text-blue-700',
            },
            {
                type: 'success',
                outlined: true,
                class: 'border-green-500 text-green-700',
            },
            {
                type: 'warning',
                outlined: true,
                class: 'border-yellow-500 text-yellow-700',
            },
            {
                type: 'error',
                outlined: true,
                class: 'border-red-500 text-red-700',
            },
        ]
    }
)
    