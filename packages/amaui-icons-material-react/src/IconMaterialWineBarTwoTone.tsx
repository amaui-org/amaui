import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWineBarTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WineBarTwoTone'
      short_name='WineBar'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M12,13c-1.86,0-3.41-1.28-3.86-3h7.72C15.41,11.72,13.86,13,12,13z" opacity=".3"/><path d="M6,3l0,6c0,2.97,2.16,5.43,5,5.91V19H8v2h8v-2h-3v-4.09c2.84-0.48,5-2.94,5-5.91V3H6z M12,13c-1.86,0-3.41-1.28-3.86-3h7.72 C15.41,11.72,13.86,13,12,13z M16,8H8l0-3h8L16,8z"/>
    </Icon>
  );
});

IconMaterialWineBarTwoTone.displayName = 'AmauiIconMaterialWineBarTwoTone';

export default IconMaterialWineBarTwoTone;
