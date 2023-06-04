import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAcUnitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AcUnitW100'

      short_name='AcUnit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 21.35V16.3l-3.9 3.85-.5-.5 4.4-4.4v-2.9h-2.9l-4.4 4.4-.5-.5 3.85-3.9H2.65v-.7H7.7l-3.85-3.9.5-.5 4.4 4.4h2.9v-2.9l-4.4-4.4.5-.5 3.9 3.85V2.65h.7V7.7l3.9-3.85.5.5-4.4 4.4v2.9h2.9l4.4-4.4.5.5-3.85 3.9h5.05v.7H16.3l3.85 3.9-.5.5-4.4-4.4h-2.9v2.9l4.4 4.4-.5.5-3.9-3.85v5.05Z"/>
    </Icon>
  );
});

IconMaterialAcUnitW100.displayName = 'AmauiIconMaterialAcUnitW100';

export default IconMaterialAcUnitW100;
