import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOffSharp'
      short_name='EditOff'

      {...props}
    >
      <path d="M19.8 22.6 12.725 15.525 7.25 21H3V16.75L8.475 11.275L1.4 4.2L2.825 2.775L21.225 21.175ZM5 19H6.4L11.3 14.1L10.6 13.4L9.9 12.7L5 17.6ZM11.3 14.1 10.6 13.4 9.9 12.7 11.3 14.1ZM15.575 12.675 14.15 11.25 15.025 10.375 13.625 8.975 12.75 9.85 11.325 8.425 13.6 6.15 17.85 10.4ZM19.3 8.925 15.05 4.725 17.875 1.9 22.1 6.125ZM13.45 10.55Z"/>
    </Icon>
  );
});

IconMaterialEditOffSharp.displayName = 'AmauiIconMaterialEditOffSharp';

export default IconMaterialEditOffSharp;
