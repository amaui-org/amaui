import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCabinFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CabinFilled'

      short_name='Cabin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19h12v-2H6Zm0-4h12v-2H6Zm0-4h12v-.9L16.55 9h-9.1L6 10.1Zm4.05-4h3.9L12 5.525ZM4 21v-9.375L2.2 13 1 11.4l3-2.3V6h2v1.575L12 3l11 8.4-1.2 1.575-1.8-1.35V21ZM4 5q0-1.25.875-2.125T7 2q.425 0 .713-.288Q8 1.425 8 1h2q0 1.25-.875 2.125T7 4q-.425 0-.713.287Q6 4.575 6 5Z"/>
    </Icon>
  );
});

IconMaterialCabinFilled.displayName = 'AmauiIconMaterialCabinFilled';

export default IconMaterialCabinFilled;
