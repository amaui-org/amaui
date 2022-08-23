import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDropDownTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownTwoTone'
      short_name='ArrowDropDown'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 10l5 5 5-5H7z"/>
    </Icon>
  );
});

IconMaterialArrowDropDownTwoTone.displayName = 'AmauiIconMaterialArrowDropDownTwoTone';

export default IconMaterialArrowDropDownTwoTone;
