import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWestSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WestSharpW700Filled'
      short_name='West'

      {...props}
    >
      <path d="M9.3 19.85 1.425 12 9.3 4.125 11.525 6.35 7.45 10.425H22.8V13.575H7.45L11.5 17.65Z"/>
    </Icon>
  )
});

export default IconMaterialWestSharpW700Filled;
