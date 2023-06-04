import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRampLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RampLeftW100'

      short_name='RampLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.35q-.15 0-.25-.1t-.1-.25V5.275l-2 2q-.125.125-.25.125t-.25-.125q-.125-.125-.125-.25t.125-.25l2.325-2.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l2.325 2.325q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125l-2-2V9q0 2.925 1.788 4.975 1.787 2.05 3.437 3.175.15.125.175.275.025.15-.1.275-.075.075-.2.088-.125.012-.225-.038-1.725-1.175-2.975-2.562-1.25-1.388-1.9-2.863V20q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialRampLeftW100.displayName = 'AmauiIconMaterialRampLeftW100';

export default IconMaterialRampLeftW100;
