import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPianoSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PianoSharpW700Filled'
      short_name='Piano'

      {...props}
    >
      <path d="M2.15 21.85V2.15H21.85V21.85ZM5.3 18.7H7.85V14.7H6.6V5.3H5.3ZM16.15 18.7H18.7V5.3H17.4V14.7H16.15ZM10.125 18.7H13.875V14.7H12.625V5.3H11.375V14.7H10.125Z"/>
    </Icon>
  )
});

export default IconMaterialPianoSharpW700Filled;
