import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightlightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlightFilled'

      short_name='Nightlight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 22q-2.05 0-3.875-.788-1.825-.787-3.187-2.15-1.363-1.362-2.151-3.187Q4 14.05 4 12q0-2.075.787-3.887.788-1.813 2.151-3.175Q8.3 3.575 10.125 2.787 11.95 2 14 2q1.35 0 2.625.35t2.375 1q-2.275 1.325-3.637 3.587Q14 9.2 14 12t1.363 5.062Q16.725 19.325 19 20.65q-1.1.65-2.375 1T14 22Z"/>
    </Icon>
  );
});

IconMaterialNightlightFilled.displayName = 'AmauiIconMaterialNightlightFilled';

export default IconMaterialNightlightFilled;
