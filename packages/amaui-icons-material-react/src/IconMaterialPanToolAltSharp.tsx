import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanToolAltSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolAltSharp'
      short_name='PanToolAlt'

      {...props}
    >
      <path d="M9.775 21 4.025 15.25 6.2 13 9.075 13.65V5.5Q9.075 4.45 9.8 3.725Q10.525 3 11.575 3Q12.625 3 13.35 3.725Q14.075 4.45 14.075 5.5V9.8H14.875L20.175 12.375L18.75 21ZM10.625 19H17.025L17.975 13.55L13.825 11.5H12.075V5.5Q12.075 5.275 11.938 5.137Q11.8 5 11.575 5Q11.35 5 11.213 5.137Q11.075 5.275 11.075 5.5V16.1L6.825 15.2ZM10.625 19H11.075Q11.075 19 11.213 19Q11.35 19 11.575 19Q11.8 19 11.938 19Q12.075 19 12.075 19H13.825H17.025Z"/>
    </Icon>
  );
});

IconMaterialPanToolAltSharp.displayName = 'AmauiIconMaterialPanToolAltSharp';

export default IconMaterialPanToolAltSharp;
