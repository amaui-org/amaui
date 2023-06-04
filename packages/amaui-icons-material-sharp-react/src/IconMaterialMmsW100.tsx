import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMmsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MmsW100'

      short_name='Mms'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.95 13.1h8.3L13.7 9.7l-2.5 3.1-1.6-1.85ZM3.3 19.5V3.3h17.4v13.4H6.1Zm.7-1.7L5.8 16H20V4H4Zm0 0V4v12Z"/>
    </Icon>
  );
});

IconMaterialMmsW100.displayName = 'AmauiIconMaterialMmsW100';

export default IconMaterialMmsW100;
