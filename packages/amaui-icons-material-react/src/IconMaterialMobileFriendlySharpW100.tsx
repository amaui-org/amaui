import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMobileFriendlySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileFriendlySharpW100'
      short_name='MobileFriendly'

      {...props}
    >
      <path d="M14.95 15.1 11.6 11.75 12.1 11.25 14.95 14.1 20.65 8.4 21.15 8.9ZM6 21H16V19.35H6ZM6 4.65H16V3H6ZM5.3 21.7V2.3H16.7V6.9H16V5.35H6V18.65H16V17.1H16.7V21.7ZM6 4.65V3V4.65ZM6 21V19.35V21Z"/>
    </Icon>
  );
});

IconMaterialMobileFriendlySharpW100.displayName = 'AmauiIconMaterialMobileFriendlySharpW100';

export default IconMaterialMobileFriendlySharpW100;
