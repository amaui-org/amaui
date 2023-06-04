import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotationNone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationNone'

      short_name='TextRotationNone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 19v-2h13.2l-1.05-1.05 1.4-1.4L21 18l-3.45 3.45-1.4-1.4L17.2 19Zm2.9-5L11 3h2l4.1 11h-1.9l-.95-2.8H9.8l-1 2.8Zm3.45-4.4h3.3l-1.6-4.55h-.1Z"/>
    </Icon>
  );
});

IconMaterialTextRotationNone.displayName = 'AmauiIconMaterialTextRotationNone';

export default IconMaterialTextRotationNone;
