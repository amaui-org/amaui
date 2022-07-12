import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterListOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterListOutlinedW700'
      short_name='FilterList'

      {...props}
    >
      <path d="M9.425 18.95V15.8H14.575V18.95ZM2.425 8.2V5.05H21.575V8.2ZM5.425 13.575V10.425H18.575V13.575Z"/>
    </Icon>
  )
});

export default IconMaterialFilterListOutlinedW700;
