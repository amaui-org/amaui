import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddToQueueFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToQueueFilled'

      short_name='AddToQueue'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 15h2v-3h3v-2h-3V7h-2v3H8v2h3Zm-3 6v-2H2V3h20v16h-6v2Z"/>
    </Icon>
  );
});

IconMaterialAddToQueueFilled.displayName = 'AmauiIconMaterialAddToQueueFilled';

export default IconMaterialAddToQueueFilled;
