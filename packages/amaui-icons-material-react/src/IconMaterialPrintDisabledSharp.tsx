import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPrintDisabledSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintDisabledSharp'
      short_name='PrintDisabled'

      {...props}
    >
      <path d="M19.775 22.625 18 20.85V21H6V17H2V8H5.15L1.375 4.225L2.8 2.8L21.2 21.2ZM8 19H16V18.85L12.15 15H8ZM19.85 17 17.85 15H20V10H12.85L10.85 8H22V17ZM4 15H6V13H10.15L7.15 10H4ZM16 8V5H7.85L6 3.15V3H18V8ZM18 12.5Q18.425 12.5 18.712 12.212Q19 11.925 19 11.5Q19 11.075 18.712 10.787Q18.425 10.5 18 10.5Q17.575 10.5 17.288 10.787Q17 11.075 17 11.5Q17 11.925 17.288 12.212Q17.575 12.5 18 12.5ZM12.85 10H20H12.85ZM4 10H7.15H6H4Z"/>
    </Icon>
  );
});

IconMaterialPrintDisabledSharp.displayName = 'AmauiIconMaterialPrintDisabledSharp';

export default IconMaterialPrintDisabledSharp;
