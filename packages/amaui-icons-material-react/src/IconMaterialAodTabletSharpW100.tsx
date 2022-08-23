import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAodTabletSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodTabletSharpW100'
      short_name='AodTablet'

      {...props}
    >
      <path d="M8.65 11.1v-.7h6.7v.7Zm1 3v-.7h4.7v.7ZM2.3 18.7V5.3h19.4v13.4Zm3.05-.7h13.3V6H5.35ZM3 18h1.65V6H3Zm16.35 0H21V6h-1.65ZM3 6h1.65Zm16.35 0H21Z"/>
    </Icon>
  );
});

IconMaterialAodTabletSharpW100.displayName = 'AmauiIconMaterialAodTabletSharpW100';

export default IconMaterialAodTabletSharpW100;
