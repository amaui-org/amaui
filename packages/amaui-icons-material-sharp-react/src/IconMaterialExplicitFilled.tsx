import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExplicitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExplicitFilled'

      short_name='Explicit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 17h6v-2h-4v-2h4v-2h-4V9h4V7H9Zm-6 4V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialExplicitFilled.displayName = 'AmauiIconMaterialExplicitFilled';

export default IconMaterialExplicitFilled;
