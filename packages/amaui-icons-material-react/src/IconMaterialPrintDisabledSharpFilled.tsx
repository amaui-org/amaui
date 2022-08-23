import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPrintDisabledSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintDisabledSharpFilled'
      short_name='PrintDisabled'

      {...props}
    >
      <path d="M19.775 22.625 18 20.85V21H6V17H2V8H5.15L1.375 4.225L2.8 2.8L21.2 21.2ZM8 19H16V18.85L12.15 15H8ZM19.85 17H22V8H10.85ZM9.85 7 6 3.15V3H18V7ZM18 12.5Q17.575 12.5 17.288 12.212Q17 11.925 17 11.5Q17 11.075 17.288 10.787Q17.575 10.5 18 10.5Q18.425 10.5 18.712 10.787Q19 11.075 19 11.5Q19 11.925 18.712 12.212Q18.425 12.5 18 12.5Z"/>
    </Icon>
  );
});

IconMaterialPrintDisabledSharpFilled.displayName = 'AmauiIconMaterialPrintDisabledSharpFilled';

export default IconMaterialPrintDisabledSharpFilled;
