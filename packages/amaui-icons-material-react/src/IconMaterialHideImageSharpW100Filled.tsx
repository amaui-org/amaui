import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHideImageSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImageSharpW100Filled'
      short_name='HideImage'

      {...props}
    >
      <path d="M19.7 16.85 7.15 4.3H19.7ZM20.7 21.7 18.7 19.7H4.3V5.3L2.3 3.3L2.8 2.8L21.2 21.2ZM7.95 16.35H15.35L12.925 13.925L11.2 16.05L9.6 14.2Z"/>
    </Icon>
  );
});

IconMaterialHideImageSharpW100Filled.displayName = 'AmauiIconMaterialHideImageSharpW100Filled';

export default IconMaterialHideImageSharpW100Filled;
