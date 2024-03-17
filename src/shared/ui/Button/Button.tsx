import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import {type ButtonHTMLAttributes, type FC} from 'react';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}


type ButtonProps = {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize
} & ButtonHTMLAttributes<HTMLButtonElement>;
export const Button: FC<ButtonProps> = props => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
    }

    return (
        <button type="button" className={classNames(cls.Button,  mods, [className])}
            {...otherProps}

        >
            {children}
        </button>
    );
};
