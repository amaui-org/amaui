import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExplicitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExplicitW100Filled'

      short_name='Explicit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.65 16.35h4.7v-.7h-4v-3.3h4v-.7h-4v-3.3h4v-.7h-4.7ZM4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialExplicitW100Filled.displayName = 'AmauiIconMaterialExplicitW100Filled';

export default IconMaterialExplicitW100Filled;
