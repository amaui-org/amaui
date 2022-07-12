import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPolymerOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolymerOutlinedW100Filled'
      short_name='Polymer'

      {...props}
    >
      <path d="M6.35 18.4 2.8 12 6.4 5.6H9.6L6 12L8.1 15.7L14.3 5.6H17.6L21.2 12L17.6 18.4H14.4L18 12L15.9 8.3L9.7 18.4Z"/>
    </Icon>
  )
});

export default IconMaterialPolymerOutlinedW100Filled;
