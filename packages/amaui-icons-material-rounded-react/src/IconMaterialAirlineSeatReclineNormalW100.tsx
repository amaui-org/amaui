import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatReclineNormalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatReclineNormalW100'

      short_name='AirlineSeatReclineNormal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.475 18.7q-.65 0-1.075-.425-.425-.425-.425-1.075V7.35q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v9.85q0 .3.25.55.25.25.55.25h5.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm2.05-12.05q-.675 0-1.137-.463-.463-.462-.463-1.137t.463-1.138q.462-.462 1.137-.462t1.138.462q.462.463.462 1.138 0 .675-.462 1.137-.463.463-1.138.463Zm6.15 14.7q-.15 0-.25-.1t-.1-.25v-4h-6.3q-.575 0-.963-.387-.387-.388-.387-.963V9.8q0-.8.525-1.325.525-.525 1.325-.525.8 0 1.325.525.525.525.525 1.325v5.5h3.3q.575 0 .963.388.387.387.387.962V21q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatReclineNormalW100.displayName = 'AmauiIconMaterialAirlineSeatReclineNormalW100';

export default IconMaterialAirlineSeatReclineNormalW100;
