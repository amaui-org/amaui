import React from 'react';

import { useAmauiTheme } from '@amaui/style-react';

import { IIcon } from '../Icon/Icon';

export interface IModalIcon extends IIcon {

}

const ModalIcon = React.forwardRef((props_: IModalIcon, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiModalIcon?.props?.default }), [props_]);

  const {
    className,

    children,

    ...other
  } = props;

  return (
    React.cloneElement(children as any, {
      ref,

      size: 'regular',

      ...other
    })
  );
});

ModalIcon.displayName = 'AmauiModalIcon';

export default ModalIcon;
