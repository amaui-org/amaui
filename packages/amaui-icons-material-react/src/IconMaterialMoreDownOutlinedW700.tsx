import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreDownOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreDownOutlinedW700'
      short_name='MoreDown'

      {...props}
    >
      <path d="M4.225 19.775V7.625h3.15v9h9v3.15Zm5.4-5.4V2.225h3.15v9h9v3.15Z"/>
    </Icon>
  )
});

export default IconMaterialMoreDownOutlinedW700;
