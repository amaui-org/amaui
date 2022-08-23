import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRamenDiningSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RamenDiningSharpW100Filled'
      short_name='RamenDining'

      {...props}
    >
      <path d="M8.575 20.7V19.35Q6.275 18.45 4.713 16.85Q3.15 15.25 2.725 13.3V13.25L4.075 13.3V5.3L21.125 3.45V4.15L9.175 5.45V7.6H21.275V8.3H9.175V13.3H19.875Q19.5 15.25 17.888 16.85Q16.275 18.45 13.975 19.35V20.7ZM6.975 7.6H8.475V5.55L6.975 5.7ZM4.775 7.6H6.275V5.75L4.775 5.9ZM6.975 13.3H8.475V8.3H6.975ZM4.775 13.3H6.275V8.3H4.775Z"/>
    </Icon>
  );
});

IconMaterialRamenDiningSharpW100Filled.displayName = 'AmauiIconMaterialRamenDiningSharpW100Filled';

export default IconMaterialRamenDiningSharpW100Filled;
