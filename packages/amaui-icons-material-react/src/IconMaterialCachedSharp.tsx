import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCachedSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CachedSharp'
      short_name='Cached'

      {...props}
    >
      <path d="M5 8.025 9 12.025 7.6 13.425 6 11.825V12Q6 14.5 7.763 16.25Q9.525 18 12.05 18Q12.7 18 13.325 17.85Q13.95 17.7 14.55 17.4L16.05 18.9Q15.1 19.45 14.1 19.725Q13.1 20 12.05 20Q8.7 20 6.35 17.675Q4 15.35 4 12V11.825L2.4 13.425L1 12.025ZM19 15.975 15 11.975 16.4 10.575 18 12.175V12Q18 9.5 16.238 7.75Q14.475 6 11.95 6Q11.3 6 10.675 6.15Q10.05 6.3 9.45 6.6L7.95 5.1Q8.9 4.55 9.9 4.275Q10.9 4 11.95 4Q15.3 4 17.65 6.325Q20 8.65 20 12V12.175L21.6 10.575L23 11.975Z"/>
    </Icon>
  );
});

IconMaterialCachedSharp.displayName = 'AmauiIconMaterialCachedSharp';

export default IconMaterialCachedSharp;
