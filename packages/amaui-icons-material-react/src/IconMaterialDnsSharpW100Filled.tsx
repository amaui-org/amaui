import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDnsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DnsSharpW100Filled'
      short_name='Dns'

      {...props}
    >
      <path d="M7.5 7.45Q7.15 7.45 6.9 7.7Q6.65 7.95 6.65 8.3Q6.65 8.65 6.9 8.9Q7.15 9.15 7.5 9.15Q7.85 9.15 8.1 8.9Q8.35 8.65 8.35 8.3Q8.35 7.95 8.1 7.7Q7.85 7.45 7.5 7.45ZM7.5 15.85Q7.15 15.85 6.9 16.1Q6.65 16.35 6.65 16.7Q6.65 17.05 6.9 17.3Q7.15 17.55 7.5 17.55Q7.85 17.55 8.1 17.3Q8.35 17.05 8.35 16.7Q8.35 16.35 8.1 16.1Q7.85 15.85 7.5 15.85ZM4.3 11.5V5.1H19.7V11.5ZM4.3 19.9V13.5H19.7V19.9Z"/>
    </Icon>
  );
});

IconMaterialDnsSharpW100Filled.displayName = 'AmauiIconMaterialDnsSharpW100Filled';

export default IconMaterialDnsSharpW100Filled;
