import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallToAction = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallToAction'

      short_name='CallToAction'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17h12v-3H6Zm-4 3V4h20v16Zm2-2h16V6H4ZM4 6v12Z"/>
    </Icon>
  );
});

IconMaterialCallToAction.displayName = 'AmauiIconMaterialCallToAction';

export default IconMaterialCallToAction;
