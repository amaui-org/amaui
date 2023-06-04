import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCleaningServicesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleaningServicesW100Filled'

      short_name='CleaningServices'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.15 20.35V16.5q0-1.8 1.275-3.075Q6.7 12.15 8.5 12.15h1.4v-7.4q0-.875.612-1.488.613-.612 1.488-.612t1.488.612q.612.613.612 1.488v7.4h1.4q1.8 0 3.075 1.275Q19.85 14.7 19.85 16.5v3.85q0 .625-.437 1.063-.438.437-1.063.437H5.65q-.625 0-1.062-.437-.438-.438-.438-1.063Zm1.5.8H7.9V17.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.65h3.05V17.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.65h3.05V17.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.65h2.25q.35 0 .575-.225.225-.225.225-.575V16.5q0-1.5-1.075-2.575Q17 12.85 15.5 12.85h-7q-1.5 0-2.575 1.075Q4.85 15 4.85 16.5v3.85q0 .35.225.575.225.225.575.225Z"/>
    </Icon>
  );
});

IconMaterialCleaningServicesW100Filled.displayName = 'AmauiIconMaterialCleaningServicesW100Filled';

export default IconMaterialCleaningServicesW100Filled;
