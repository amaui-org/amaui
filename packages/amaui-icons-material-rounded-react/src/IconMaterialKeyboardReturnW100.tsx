import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardReturnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardReturnW100'

      short_name='KeyboardReturn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.625 16.85 4.3 12.525q-.125-.125-.175-.263-.05-.137-.05-.262 0-.15.05-.275.05-.125.175-.25L8.625 7.15q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-4 4h14.4V8q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.65q0 .3-.2.5t-.5.2h-14.4l4 4q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialKeyboardReturnW100.displayName = 'AmauiIconMaterialKeyboardReturnW100';

export default IconMaterialKeyboardReturnW100;
