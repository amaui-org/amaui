import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextDecreaseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextDecreaseFilled'

      short_name='TextDecrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 19 6.25 5h2.5L14 19h-2.4l-1.275-3.575h-5.65L3.4 19Zm4.4-5.6h4.2L7.55 7.6h-.1ZM15 13v-2h8v2Z"/>
    </Icon>
  );
});

IconMaterialTextDecreaseFilled.displayName = 'AmauiIconMaterialTextDecreaseFilled';

export default IconMaterialTextDecreaseFilled;
