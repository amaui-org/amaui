import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDnsRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DnsRoundedFilled'
      short_name='Dns'

      {...props}
    >
      <path d="M4 12Q3.575 12 3.288 11.712Q3 11.425 3 11V4Q3 3.575 3.288 3.287Q3.575 3 4 3H20Q20.425 3 20.712 3.287Q21 3.575 21 4V11Q21 11.425 20.712 11.712Q20.425 12 20 12ZM7.5 9Q8.125 9 8.562 8.562Q9 8.125 9 7.5Q9 6.875 8.562 6.438Q8.125 6 7.5 6Q6.875 6 6.438 6.438Q6 6.875 6 7.5Q6 8.125 6.438 8.562Q6.875 9 7.5 9ZM4 22Q3.575 22 3.288 21.712Q3 21.425 3 21V14Q3 13.575 3.288 13.287Q3.575 13 4 13H20Q20.425 13 20.712 13.287Q21 13.575 21 14V21Q21 21.425 20.712 21.712Q20.425 22 20 22ZM7.5 19Q8.125 19 8.562 18.562Q9 18.125 9 17.5Q9 16.875 8.562 16.438Q8.125 16 7.5 16Q6.875 16 6.438 16.438Q6 16.875 6 17.5Q6 18.125 6.438 18.562Q6.875 19 7.5 19Z"/>
    </Icon>
  );
});

IconMaterialDnsRoundedFilled.displayName = 'AmauiIconMaterialDnsRoundedFilled';

export default IconMaterialDnsRoundedFilled;
