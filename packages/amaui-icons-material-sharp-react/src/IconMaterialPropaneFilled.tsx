import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPropaneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PropaneFilled'

      short_name='Propane'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 6h4V5h-4ZM7 21v-3q-2.5 0-4.25-1.75T1 12q0-2.5 1.75-4.25T7 6h1V3h8v3h1q2.5 0 4.25 1.75T23 12q0 2.5-1.75 4.25T17 18v3h-2v-3H9v3Z"/>
    </Icon>
  );
});

IconMaterialPropaneFilled.displayName = 'AmauiIconMaterialPropaneFilled';

export default IconMaterialPropaneFilled;
