import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckBoxOutlineBlankTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBoxOutlineBlankTwoTone'
      short_name='CheckBoxOutlineBlank'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
    </Icon>
  );
});

IconMaterialCheckBoxOutlineBlankTwoTone.displayName = 'AmauiIconMaterialCheckBoxOutlineBlankTwoTone';

export default IconMaterialCheckBoxOutlineBlankTwoTone;
