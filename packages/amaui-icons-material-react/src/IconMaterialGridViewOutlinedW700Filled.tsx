import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGridViewOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridViewOutlinedW700Filled'
      short_name='GridView'

      {...props}
    >
      <path d="M2.15 11V2.15H11V11ZM2.15 21.85V13H11V21.85ZM13 11V2.15H21.85V11ZM13 21.85V13H21.85V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialGridViewOutlinedW700Filled;
