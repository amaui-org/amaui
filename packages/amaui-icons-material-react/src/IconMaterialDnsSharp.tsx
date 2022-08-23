import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDnsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DnsSharp'
      short_name='Dns'

      {...props}
    >
      <path d="M7.5 6Q6.875 6 6.438 6.438Q6 6.875 6 7.5Q6 8.125 6.438 8.562Q6.875 9 7.5 9Q8.125 9 8.562 8.562Q9 8.125 9 7.5Q9 6.875 8.562 6.438Q8.125 6 7.5 6ZM7.5 16Q6.875 16 6.438 16.438Q6 16.875 6 17.5Q6 18.125 6.438 18.562Q6.875 19 7.5 19Q8.125 19 8.562 18.562Q9 18.125 9 17.5Q9 16.875 8.562 16.438Q8.125 16 7.5 16ZM3 12V3H21V12ZM5 5V10H19V5ZM3 22V13H21V22ZM5 15V20H19V15ZM5 5V10ZM5 15V20Z"/>
    </Icon>
  );
});

IconMaterialDnsSharp.displayName = 'AmauiIconMaterialDnsSharp';

export default IconMaterialDnsSharp;
