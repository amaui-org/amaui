import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLivingSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LivingSharpFilled'
      short_name='Living'

      {...props}
    >
      <path d="M2 22V2H22V22ZM5 18H19V10.35H17.75V6H6.25V10.35H5ZM6.5 16.5V11.5H8.5V14.5H15.5V11.5H17.5V16.5ZM10 13V10.05H7.75V7.5H16.25V10.05H14V13Z"/>
    </Icon>
  );
});

export default IconMaterialLivingSharpFilled;
