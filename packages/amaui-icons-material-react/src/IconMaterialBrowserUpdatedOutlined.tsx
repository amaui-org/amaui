import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrowserUpdatedOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowserUpdatedOutlined'
      short_name='BrowserUpdated'

      {...props}
    >
      <path d="M6 21V19L7 18H4Q3.175 18 2.588 17.413Q2 16.825 2 16V5Q2 4.175 2.588 3.587Q3.175 3 4 3H12V5H4Q4 5 4 5Q4 5 4 5V16Q4 16 4 16Q4 16 4 16H20Q20 16 20 16Q20 16 20 16V13H22V16Q22 16.825 21.413 17.413Q20.825 18 20 18H17L18 19V21ZM15 15 10 10 11.4 8.6 14 11.175V3H16V11.175L18.6 8.6L20 10Z"/>
    </Icon>
  )
});

export default IconMaterialBrowserUpdatedOutlined;
