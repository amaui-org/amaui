import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDnsRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DnsRoundedW100Filled'
      short_name='Dns'

      {...props}
    >
      <path d="M5 11.5Q4.7 11.5 4.5 11.262Q4.3 11.025 4.3 10.65V5.8Q4.3 5.5 4.5 5.3Q4.7 5.1 5 5.1H19Q19.3 5.1 19.5 5.3Q19.7 5.5 19.7 5.8V10.65Q19.7 11.025 19.5 11.262Q19.3 11.5 19 11.5ZM7.5 9.15Q7.85 9.15 8.1 8.9Q8.35 8.65 8.35 8.3Q8.35 7.95 8.1 7.7Q7.85 7.45 7.5 7.45Q7.15 7.45 6.9 7.7Q6.65 7.95 6.65 8.3Q6.65 8.65 6.9 8.9Q7.15 9.15 7.5 9.15ZM5.05 19.9Q4.7 19.9 4.5 19.663Q4.3 19.425 4.3 19V14.3Q4.3 13.95 4.475 13.725Q4.65 13.5 5 13.5H18.95Q19.3 13.5 19.5 13.725Q19.7 13.95 19.7 14.3V19Q19.7 19.425 19.5 19.663Q19.3 19.9 18.95 19.9ZM7.5 17.55Q7.85 17.55 8.1 17.3Q8.35 17.05 8.35 16.7Q8.35 16.35 8.1 16.1Q7.85 15.85 7.5 15.85Q7.15 15.85 6.9 16.1Q6.65 16.35 6.65 16.7Q6.65 17.05 6.9 17.3Q7.15 17.55 7.5 17.55Z"/>
    </Icon>
  );
});

IconMaterialDnsRoundedW100Filled.displayName = 'AmauiIconMaterialDnsRoundedW100Filled';

export default IconMaterialDnsRoundedW100Filled;
