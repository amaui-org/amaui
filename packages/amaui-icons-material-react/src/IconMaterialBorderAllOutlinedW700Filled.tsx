import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderAllOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderAllOutlinedW700Filled'
      short_name='BorderAll'

      {...props}
    >
      <path d="M13 2.15H21.85V11H13ZM13 21.85V13H21.85V21.85ZM2.15 11V2.15H11V11ZM2.15 21.85V13H11V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialBorderAllOutlinedW700Filled;
