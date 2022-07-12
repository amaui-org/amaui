import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableOutlinedW700'
      short_name='Table'

      {...props}
    >
      <path d="M2.15 21.85V2.15H21.85V21.85ZM5.3 8.575H18.7V5.3H5.3ZM10.425 13.65H13.575V10.575H10.425ZM10.425 18.7H13.575V15.65H10.425ZM5.3 13.65H8.425V10.575H5.3ZM15.575 13.65H18.7V10.575H15.575ZM5.3 18.7H8.425V15.65H5.3ZM15.575 18.7H18.7V15.65H15.575Z"/>
    </Icon>
  )
});

export default IconMaterialTableOutlinedW700;
