import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPushPin = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PushPin'

      short_name='PushPin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16 12 2 2v2h-5v6l-1 1-1-1v-6H6v-2l2-2V5H7V3h10v2h-1Zm-7.15 2h6.3L14 12.85V5h-4v7.85ZM12 14Z"/>
    </Icon>
  );
});

IconMaterialPushPin.displayName = 'AmauiIconMaterialPushPin';

export default IconMaterialPushPin;
