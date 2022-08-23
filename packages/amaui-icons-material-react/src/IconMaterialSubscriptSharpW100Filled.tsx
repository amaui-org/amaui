import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubscriptSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubscriptSharpW100Filled'
      short_name='Subscript'

      {...props}
    >
      <path d="M18.15 19.85V17.15H21.15V15.85H18.15V15.15H21.85V17.85H18.85V19.15H21.85V19.85ZM7.375 17.025 11.425 10.725 7.725 4.975H8.575L11.975 10.3L15.45 4.975H16.275L12.525 10.725L16.6 17.025H15.775L11.975 11.15L8.225 17.025Z"/>
    </Icon>
  );
});

IconMaterialSubscriptSharpW100Filled.displayName = 'AmauiIconMaterialSubscriptSharpW100Filled';

export default IconMaterialSubscriptSharpW100Filled;
