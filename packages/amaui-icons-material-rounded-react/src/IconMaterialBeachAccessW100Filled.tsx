import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBeachAccessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeachAccessW100Filled'

      short_name='BeachAccess'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.075 19.575 13.35 13.9l.5-.5 5.7 5.7q.1.1.1.25t-.125.25q-.1.1-.225.088-.125-.013-.225-.113ZM5.45 17.55q-1.325-2.275-1.187-4.925Q4.4 9.975 6 7.85q-.3 1-.162 2.088.137 1.087.537 2.149.4 1.063.988 2.038.587.975 1.187 1.725L6.7 17.7q-.3.3-.675.25-.375-.05-.575-.4Zm3.575-2.175q-1-1.125-1.587-2.375-.588-1.25-.813-2.4Q6.4 9.45 6.55 8.525q.15-.925.625-1.4.475-.475 1.4-.6.925-.125 2.062.112 1.138.238 2.375.838 1.238.6 2.338 1.575ZM17.7 6.7l-1.875 1.875Q15.1 8 14.15 7.412q-.95-.587-1.987-1Q11.125 6 10.05 5.825t-2.05.1q2.125-1.5 4.7-1.625t4.85 1.15q.35.2.4.575.05.375-.25.675Z"/>
    </Icon>
  );
});

IconMaterialBeachAccessW100Filled.displayName = 'AmauiIconMaterialBeachAccessW100Filled';

export default IconMaterialBeachAccessW100Filled;
