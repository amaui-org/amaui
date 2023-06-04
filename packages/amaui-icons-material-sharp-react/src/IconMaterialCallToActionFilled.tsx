import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallToActionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallToActionFilled'

      short_name='CallToAction'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17h12v-3H6Zm-4 3V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialCallToActionFilled.displayName = 'AmauiIconMaterialCallToActionFilled';

export default IconMaterialCallToActionFilled;
