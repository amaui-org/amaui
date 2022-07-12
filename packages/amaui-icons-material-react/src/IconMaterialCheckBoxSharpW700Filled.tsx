import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckBoxSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBoxSharpW700Filled'
      short_name='CheckBox'

      {...props}
    >
      <path d="M10.525 16.825 17.95 9.375 15.875 7.3 10.525 12.625 7.975 10.1 5.9 12.175ZM2.15 21.85V2.15H21.85V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialCheckBoxSharpW700Filled;
