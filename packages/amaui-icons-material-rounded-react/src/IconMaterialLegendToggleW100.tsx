import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLegendToggleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LegendToggleW100'

      short_name='LegendToggle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.95 6.925-4.775 2.9q-.175.125-.35.012-.175-.112-.175-.312 0-.1.05-.188.05-.087.125-.137l5.15-3.125L15 9.65l3.8-2.7q.175-.125.363-.025.187.1.187.3 0 .1-.038.175-.037.075-.112.125L15 10.5ZM5 14.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h14q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 3.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h14q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialLegendToggleW100.displayName = 'AmauiIconMaterialLegendToggleW100';

export default IconMaterialLegendToggleW100;
