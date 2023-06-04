import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExplicit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Explicit'

      short_name='Explicit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 17h6v-2h-4v-2h4v-2h-4V9h4V7H9Zm-6 4V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialExplicit.displayName = 'AmauiIconMaterialExplicit';

export default IconMaterialExplicit;
