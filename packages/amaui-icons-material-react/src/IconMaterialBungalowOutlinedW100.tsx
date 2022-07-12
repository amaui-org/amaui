import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBungalowOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BungalowOutlinedW100'
      short_name='Bungalow'

      {...props}
    >
      <path d="M8.3 19.7V12.725L7.075 14.675L6.475 14.325L12 5.45L17.5 14.325L16.9 14.675L15.7 12.75V19.7ZM9 19H11.3V16.3H12.7V19H15V11.625L12 6.8L9 11.6ZM11.3 14V12.6H12.7V14ZM9 19H11.3H12.7H15H12H9Z"/>
    </Icon>
  )
});

export default IconMaterialBungalowOutlinedW100;
