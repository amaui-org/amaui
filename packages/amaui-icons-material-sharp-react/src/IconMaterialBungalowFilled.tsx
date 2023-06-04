import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBungalowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BungalowFilled'

      short_name='Bungalow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21v-6.2l-1.1 1.75-1.7-1.05L12 3l7.8 12.5-1.7 1.05L17 14.8V21h-4v-5h-2v5Zm4-7h2v-2h-2Z"/>
    </Icon>
  );
});

IconMaterialBungalowFilled.displayName = 'AmauiIconMaterialBungalowFilled';

export default IconMaterialBungalowFilled;
