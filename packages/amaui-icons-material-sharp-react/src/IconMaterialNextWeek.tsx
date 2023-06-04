import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNextWeek = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NextWeek'

      short_name='NextWeek'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11 17.5 4-4-4-4-1.4 1.4 2.6 2.6-2.6 2.6ZM2 21V6h6V2h8v4h6v15Zm8-15h4V4h-4ZM4 19h16V8H4Zm0 0V8Z"/>
    </Icon>
  );
});

IconMaterialNextWeek.displayName = 'AmauiIconMaterialNextWeek';

export default IconMaterialNextWeek;
