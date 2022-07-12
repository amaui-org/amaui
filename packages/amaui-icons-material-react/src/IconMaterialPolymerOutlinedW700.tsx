import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPolymerOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolymerOutlinedW700'
      short_name='Polymer'

      {...props}
    >
      <path d="M4.725 20.225 0.15 12 4.775 3.775H8.925L4.275 12L6.95 16.8L14.975 3.775H19.225L23.85 12L19.225 20.225H15.075L19.725 12L17.05 7.25L9.075 20.225Z"/>
    </Icon>
  )
});

export default IconMaterialPolymerOutlinedW700;
