import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowDownTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowDownTwoTone'
      short_name='KeyboardArrowDown'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowDownTwoTone.displayName = 'AmauiIconMaterialKeyboardArrowDownTwoTone';

export default IconMaterialKeyboardArrowDownTwoTone;
