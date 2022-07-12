import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddOutlinedW100'
      short_name='Add'

      {...props}
    >
      <path d="M11.65 18.35V12.35H5.65V11.65H11.65V5.65H12.35V11.65H18.35V12.35H12.35V18.35Z"/>
    </Icon>
  )
});

export default IconMaterialAddOutlinedW100;
