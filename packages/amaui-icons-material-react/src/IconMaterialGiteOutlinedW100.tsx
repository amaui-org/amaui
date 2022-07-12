import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGiteOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GiteOutlinedW100'
      short_name='Gite'

      {...props}
    >
      <path d="M3.3 17.675V10.9L6.9 7.3H8.3V5.9H9V7.3H17.1L20.7 10.9V17.675ZM14.7 16.975H20V11.2L17.375 8.575L14.7 11.25ZM4 16.975H14V12H4Z"/>
    </Icon>
  )
});

export default IconMaterialGiteOutlinedW100;
