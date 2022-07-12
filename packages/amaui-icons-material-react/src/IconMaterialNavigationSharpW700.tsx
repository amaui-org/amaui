import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNavigationSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigationSharpW700'
      short_name='Navigation'

      {...props}
    >
      <path d="M4.8 22.525 3 20.725 12 0.475 21 20.725 19.2 22.525 12 19.45ZM7.725 17.85 12 16 16.275 17.85 12 8.2ZM12 16Z"/>
    </Icon>
  )
});

export default IconMaterialNavigationSharpW700;
