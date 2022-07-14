import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPrintSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintSharp'
      short_name='Print'

      {...props}
    >
      <path d="M16 8V5H8V8H6V3H18V8ZM18 12.5Q18.425 12.5 18.712 12.212Q19 11.925 19 11.5Q19 11.075 18.712 10.787Q18.425 10.5 18 10.5Q17.575 10.5 17.288 10.787Q17 11.075 17 11.5Q17 11.925 17.288 12.212Q17.575 12.5 18 12.5ZM16 19V15H8V19ZM18 21H6V17H2V8H22V17H18ZM20 15V10H4V15H6V13H18V15ZM4 10H20H18H6Z"/>
    </Icon>
  );
});

export default IconMaterialPrintSharp;
