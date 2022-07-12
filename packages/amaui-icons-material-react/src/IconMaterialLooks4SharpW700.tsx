import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooks4SharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks4SharpW700'
      short_name='Looks4'

      {...props}
    >
      <path d="M2.15 21.85V2.15H21.85V21.85ZM5.3 18.7H18.7V5.3H5.3ZM5.3 18.7V5.3V18.7ZM13 17H15.375V7H13V10.8H11V7H8.625V13.2H13Z"/>
    </Icon>
  )
});

export default IconMaterialLooks4SharpW700;
