import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPrintSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintSharpFilled'
      short_name='Print'

      {...props}
    >
      <path d="M18 7H6V3H18ZM18 12.5Q18.425 12.5 18.712 12.212Q19 11.925 19 11.5Q19 11.075 18.712 10.787Q18.425 10.5 18 10.5Q17.575 10.5 17.288 10.787Q17 11.075 17 11.5Q17 11.925 17.288 12.212Q17.575 12.5 18 12.5ZM16 19V15H8V19ZM18 21H6V17H2V8H22V17H18Z"/>
    </Icon>
  );
});

IconMaterialPrintSharpFilled.displayName = 'AmauiIconMaterialPrintSharpFilled';

export default IconMaterialPrintSharpFilled;
