import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInNewOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewOffFilled'

      short_name='OpenInNewOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.775 22.625 18.15 21H3V5.85L1.375 4.225 2.8 2.8l18.4 18.4ZM5 19h11.15l-4.875-4.875L9.7 15.7l-1.4-1.4 1.575-1.575L5 7.85Zm16-.85-2-2V12h2Zm-6.875-6.875-1.4-1.4L17.6 5H14V3h7v7h-2V6.4ZM7.85 5l-2-2H12v2Z"/>
    </Icon>
  );
});

IconMaterialOpenInNewOffFilled.displayName = 'AmauiIconMaterialOpenInNewOffFilled';

export default IconMaterialOpenInNewOffFilled;
