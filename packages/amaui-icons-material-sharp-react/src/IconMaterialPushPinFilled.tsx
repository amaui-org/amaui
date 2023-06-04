import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPushPinFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PushPinFilled'

      short_name='PushPin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16 12 2 2v2h-5v6l-1 1-1-1v-6H6v-2l2-2V5H7V3h10v2h-1Z"/>
    </Icon>
  );
});

IconMaterialPushPinFilled.displayName = 'AmauiIconMaterialPushPinFilled';

export default IconMaterialPushPinFilled;
