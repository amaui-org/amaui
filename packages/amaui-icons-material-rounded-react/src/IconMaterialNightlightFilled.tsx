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
      <path d="M14 22q-2.05 0-3.875-.788-1.825-.787-3.187-2.15-1.363-1.362-2.151-3.187Q4 14.05 4 12q0-2.075.787-3.887.788-1.813 2.151-3.175Q8.3 3.575 10.125 2.787 11.95 2 14 2q1.1 0 2.125.237 1.025.238 1.975.663.35.175.375.462.025.288-.325.538-1.9 1.375-3.025 3.475T14 12q0 2.525 1.125 4.625T18.15 20.1q.35.25.325.538-.025.287-.375.462-.95.425-1.975.662Q15.1 22 14 22Z"/>
    </Icon>
  );
});

IconMaterialNightlightFilled.displayName = 'AmauiIconMaterialNightlightFilled';

export default IconMaterialNightlightFilled;
