import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMobileFriendlySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileFriendlySharpFilled'
      short_name='MobileFriendly'

      {...props}
    >
      <path d="M14.95 16 10.7 11.75 12.1 10.35 14.95 13.2 20.6 7.55 22 8.95ZM4 23V1H18V7H16V6H6V18H16V17H18V23Z"/>
    </Icon>
  );
});

IconMaterialMobileFriendlySharpFilled.displayName = 'AmauiIconMaterialMobileFriendlySharpFilled';

export default IconMaterialMobileFriendlySharpFilled;
