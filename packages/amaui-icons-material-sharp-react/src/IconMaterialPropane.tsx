import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPropane = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Propane'

      short_name='Propane'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 6h4V5h-4ZM7 21v-3q-2.5 0-4.25-1.75T1 12q0-2.5 1.75-4.25T7 6h1V3h8v3h1q2.5 0 4.25 1.75T23 12q0 2.5-1.75 4.25T17 18v3h-2v-3H9v3Zm0-5h10q1.65 0 2.825-1.175Q21 13.65 21 12q0-1.65-1.175-2.825Q18.65 8 17 8H7Q5.35 8 4.175 9.175 3 10.35 3 12q0 1.65 1.175 2.825Q5.35 16 7 16Zm5-4Z"/>
    </Icon>
  );
});

IconMaterialPropane.displayName = 'AmauiIconMaterialPropane';

export default IconMaterialPropane;
