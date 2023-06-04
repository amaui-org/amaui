import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayForWorkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayForWorkW100Filled'

      short_name='PlayForWork'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.7q-1.875 0-3.225-1.25T7.3 14.35q-.025-.125.088-.237Q7.5 14 7.65 14q.125 0 .238.1.112.1.137.25.125 1.55 1.263 2.6Q10.425 18 12 18q1.575 0 2.713-1.05 1.137-1.05 1.262-2.6.025-.15.125-.25t.25-.1q.15 0 .263.113.112.112.087.237-.125 1.85-1.475 3.1T12 18.7Zm0-4.9q-.15 0-.275-.05-.125-.05-.25-.175L9.15 11.25q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l2 2V6q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v6.75l2-2q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-2.325 2.325q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialPlayForWorkW100Filled.displayName = 'AmauiIconMaterialPlayForWorkW100Filled';

export default IconMaterialPlayForWorkW100Filled;
