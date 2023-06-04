import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccessibility = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Accessibility'

      short_name='Accessibility'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
    </Icon>
  );
});

IconMaterialAccessibility.displayName = 'AmauiIconMaterialAccessibility';

export default IconMaterialAccessibility;
