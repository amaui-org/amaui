import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallToActionSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallToActionSharpFilled'
      short_name='CallToAction'

      {...props}
    >
      <path d="M6 17H18V14H6ZM2 20V4H22V20Z"/>
    </Icon>
  );
});

IconMaterialCallToActionSharpFilled.displayName = 'AmauiIconMaterialCallToActionSharpFilled';

export default IconMaterialCallToActionSharpFilled;
