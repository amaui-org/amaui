import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidgetsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidgetsW100'

      short_name='Widgets'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.2 11.65-3.8-3.8 3.8-3.8 3.8 3.8ZM5.1 10.5V5.1h5.4v5.4Zm8.4 8.4v-5.4h5.4v5.4Zm-8.4 0v-5.4h5.4v5.4Zm.7-9.1h4v-4h-4Zm10.425.9 2.825-2.825-2.825-2.825L13.4 7.875ZM14.2 18.2h4v-4h-4Zm-8.4 0h4v-4h-4Zm4-8.4Zm3.6-1.925ZM9.8 14.2Zm4.4 0Z"/>
    </Icon>
  );
});

IconMaterialWidgetsW100.displayName = 'AmauiIconMaterialWidgetsW100';

export default IconMaterialWidgetsW100;
