import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextFormat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFormat'

      short_name='TextFormat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19v-2h14v2Zm1.9-4L11 4h2l4.1 11h-1.9l-.95-2.8H9.8l-1 2.8Zm3.45-4.4h3.3l-1.6-4.55h-.1Z"/>
    </Icon>
  );
});

IconMaterialTextFormat.displayName = 'AmauiIconMaterialTextFormat';

export default IconMaterialTextFormat;
