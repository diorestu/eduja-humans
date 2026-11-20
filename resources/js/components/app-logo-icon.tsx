import type { ComponentProps } from 'react';

export default function AppLogoIcon(props: ComponentProps<'img'>) {
    const className = props.className ?? '';

    return (
        <>
            <img
                {...props}
                src="/logo.svg"
                className={`${className} dark:hidden`}
                alt={props.alt ?? 'Eduja Humans'}
            />
            <img
                {...props}
                src="/logo-dark.svg"
                className={`${className} hidden dark:block`}
                alt={props.alt ?? 'Eduja Humans'}
            />
        </>
    );
}
