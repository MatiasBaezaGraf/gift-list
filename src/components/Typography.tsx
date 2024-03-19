import { ReactNode } from 'react';

import classNames from 'classnames';

export const Title = ({
    children,
    size = 'md',
    color = 'black',
    bold = true,
    uppercase,
    captalize
}: {
    children: ReactNode;
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    bold?: boolean;
    uppercase?: boolean;
    captalize?: boolean;
}) => {
    return (
        <h1
            className={classNames({
                'font-bold': bold,
                uppercase: uppercase,
                captalize: captalize,
                'lg:text-[20px] text-[16px]': size === 'sm',
                'lg:text-[24px] text-[20px]': size === 'md',
                'lg:text-[28px] text-[24px]': size === 'lg',
            })}

            style={{ color: color }}
        >
            {children}
        </h1>
    );
};

export const Subtitle = ({
    children,
    size = 'md',
    color = 'black',
    bold,
    uppercase,
    captalize
}: {
    children: ReactNode;
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    bold?: boolean;
    uppercase?: boolean;
    captalize?: boolean;
}) => {
    return (
        <h2
            className={classNames({
                'font-bold': bold,
                uppercase: uppercase,
                captalize: captalize,
                'lg:text-[18px] text-[14px]': size === 'sm',
                'lg:text-[22px] text-[18px]': size === 'md',
                'lg:text-[26px] text-[22px]': size === 'lg',
            })}
            style={{ color: color }}
        >
            {children}
        </h2>
    );
};

export const Text = ({
    children,
    size = 'md',
    color = 'black',
    bold,
    uppercase,
    captalize
}: {
    children: ReactNode;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    color?: string;
    bold?: boolean;
    uppercase?: boolean;
    captalize?: boolean;
}) => {
    return (
        <p
            className={classNames({
                'font-bold': bold,
                uppercase: uppercase,
                captalize: captalize,
                'lg:text-[10px] text-[8px]': size === 'xs',
                'lg:text-[13px] text-[10px]': size === 'sm',
                'lg:text-[15px] text-[13px]': size === 'md',
                'lg:text-[17px] text-[15px]': size === 'lg',
            })}
            style={{ color: color }}
        >
            {children}
        </p>
    );
}
