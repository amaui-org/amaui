import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrWeak = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrWeak'

      short_name='HdrWeak'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 16q-1.65 0-2.825-1.175Q1 13.65 1 12q0-1.65 1.175-2.825Q3.35 8 5 8q1.65 0 2.825 1.175Q9 10.35 9 12q0 1.65-1.175 2.825Q6.65 16 5 16Zm12 2q-2.5 0-4.25-1.75T11 12q0-2.5 1.75-4.25T17 6q2.5 0 4.25 1.75T23 12q0 2.5-1.75 4.25T17 18Zm0-2q1.65 0 2.825-1.175Q21 13.65 21 12q0-1.65-1.175-2.825Q18.65 8 17 8q-1.65 0-2.825 1.175Q13 10.35 13 12q0 1.65 1.175 2.825Q15.35 16 17 16Z"/>
    </Icon>
  );
});

IconMaterialHdrWeak.displayName = 'AmauiIconMaterialHdrWeak';

export default IconMaterialHdrWeak;
