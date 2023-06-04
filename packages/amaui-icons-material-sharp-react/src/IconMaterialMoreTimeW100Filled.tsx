import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoreTimeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreTimeW100Filled'

      short_name='MoreTime'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 19.7q-1.6 0-3-.6t-2.45-1.65Q4.5 16.4 3.9 15q-.6-1.4-.6-3t.6-3q.6-1.4 1.65-2.45Q6.6 5.5 8 4.9q1.4-.6 3-.6.525 0 1.012.062.488.063.988.188v.75q-.5-.15-.988-.225Q11.525 5 11 5 8.1 5 6.05 7.05 4 9.1 4 12q0 2.9 2.05 4.95Q8.1 19 11 19q2.9 0 4.95-2.05Q18 14.9 18 12q0-.275-.025-.575-.025-.3-.1-.575h.7q.05.225.088.55.037.325.037.6 0 1.6-.6 3t-1.65 2.45Q15.4 18.5 14 19.1q-1.4.6-3 .6Zm7-10.85v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3Zm-3.75 6.9-3.6-3.6V7h.7v4.85l3.4 3.4Z"/>
    </Icon>
  );
});

IconMaterialMoreTimeW100Filled.displayName = 'AmauiIconMaterialMoreTimeW100Filled';

export default IconMaterialMoreTimeW100Filled;
