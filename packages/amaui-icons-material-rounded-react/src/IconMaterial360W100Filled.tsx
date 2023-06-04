import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial360W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='360W100Filled'

      short_name='360'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.15 18.1q-.125-.125-.125-.25t.125-.25l2-2q-2.825-.375-4.838-1.362Q3.3 13.25 3.3 12q0-1.475 2.538-2.588Q8.375 8.3 12 8.3t6.163 1.112Q20.7 10.525 20.7 12q0 .875-1.162 1.762-1.163.888-3.113 1.388-.175.05-.3-.05T16 14.8q0-.1.075-.2t.175-.125q1.8-.5 2.775-1.213Q20 12.55 20 12q0-.875-2.137-1.938Q15.725 9 12 9q-3.725 0-5.862 1.062Q4 11.125 4 12q0 .75 1.775 1.65 1.775.9 4.375 1.25l-2-2q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l2.325 2.325q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25L8.65 18.1q-.1.1-.237.112-.138.013-.263-.112Z"/>
    </Icon>
  );
});

IconMaterial360W100Filled.displayName = 'AmauiIconMaterial360W100Filled';

export default IconMaterial360W100Filled;
