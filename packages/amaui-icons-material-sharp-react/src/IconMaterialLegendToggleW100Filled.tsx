import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLegendToggleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LegendToggleW100Filled'

      short_name='LegendToggle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 18.05v-.7h14.7v.7Zm0-3.7v-.7h14.7v.7ZM15 10.5 9.95 6.925l-5.3 3.225v-.825l5.325-3.25L15 9.65l4.35-3.1v.875Z"/>
    </Icon>
  );
});

IconMaterialLegendToggleW100Filled.displayName = 'AmauiIconMaterialLegendToggleW100Filled';

export default IconMaterialLegendToggleW100Filled;
