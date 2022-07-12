import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPolymerOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolymerOutlinedFilled'
      short_name='Polymer'

      {...props}
    >
      <path d="M4.95 20 0.5 12 5 4H9L4.5 12L7.1 16.65L14.9 4H19L23.5 12L19 20H15L19.5 12L16.9 7.4L9.15 20Z"/>
    </Icon>
  )
});

export default IconMaterialPolymerOutlinedFilled;
