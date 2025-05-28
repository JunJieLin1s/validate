import { cva, type VariantProps } from 'class-variance-authority';

export const alertCva = cva({
    title: 'VAlert',
    base: 'p-4 rounded-md border-2',
    variants: {
        type: {
            info: 'bg-blue-50 border-blue-300 text-blue-700',
            success: 'bg-green-50 border-green-300 text-green-700',
            warning: 'bg-yellow-50 border-yellow-300 text-yellow-700',
            error: 'bg-red-50 border-red-300 text-red-700',
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
})

export type AlertVariants = VariantProps<typeof alertCva>
    