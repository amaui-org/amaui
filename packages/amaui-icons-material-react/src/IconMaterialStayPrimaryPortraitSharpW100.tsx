import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStayPrimaryPortraitSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayPrimaryPortraitSharpW100'
      short_name='StayPrimaryPortrait'

      {...props}
    >
      <path d="M11.65 13.65V7.55H12.35V13.65ZM12 16.3Q11.8 16.3 11.65 16.15Q11.5 16 11.5 15.8Q11.5 15.575 11.65 15.438Q11.8 15.3 12 15.3Q12.225 15.3 12.363 15.438Q12.5 15.575 12.5 15.8Q12.5 16 12.363 16.15Q12.225 16.3 12 16.3ZM6.3 21.7V2.3H17.7V21.7ZM7 18.65H17V5.35H7ZM7 21H17V19.35H7ZM7 4.65H17V3H7ZM7 4.65V3V4.65ZM7 21V19.35V21Z"/>
    </Icon>
  );
});

IconMaterialStayPrimaryPortraitSharpW100.displayName = 'AmauiIconMaterialStayPrimaryPortraitSharpW100';

export default IconMaterialStayPrimaryPortraitSharpW100;
