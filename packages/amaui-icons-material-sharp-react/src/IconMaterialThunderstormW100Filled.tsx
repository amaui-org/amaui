import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThunderstormW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThunderstormW100Filled'

      short_name='Thunderstorm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.975 23.35 1.975-2.225-2-1 2.15-2.475h.925l-1.975 2.225 2 1-2.15 2.475Zm-6 0 1.975-2.225-2-1L9.1 17.65h.925L8.05 19.875l2 1L7.9 23.35Zm.525-8q-2.025 0-3.438-1.412Q2.65 12.525 2.65 10.5q0-1.9 1.288-3.275Q5.225 5.85 7.175 5.65q.725-1.4 1.988-2.2 1.262-.8 2.837-.8 2.125 0 3.638 1.425 1.512 1.425 1.737 3.55 1.875.1 2.925 1.237Q21.35 10 21.35 11.5q0 1.6-1.125 2.725T17.5 15.35Z"/>
    </Icon>
  );
});

IconMaterialThunderstormW100Filled.displayName = 'AmauiIconMaterialThunderstormW100Filled';

export default IconMaterialThunderstormW100Filled;
