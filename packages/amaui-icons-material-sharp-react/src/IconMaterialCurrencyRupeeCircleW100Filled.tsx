import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyRupeeCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyRupeeCircleW100Filled'

      short_name='CurrencyRupeeCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M551-271h38l1-3-152-164.19 1-2.81h10q60 0 97.5-29t41.5-81h38v-28h-39.14Q584-602 573-620.5T545-652h81v-28H334v28h119q43 0 71 19t34 54H334v28h225q-4 39-32.5 60.5T453-469h-56v31l154 167Zm-70.83 139q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialCurrencyRupeeCircleW100Filled.displayName = 'AmauiIconMaterialCurrencyRupeeCircleW100Filled';

export default IconMaterialCurrencyRupeeCircleW100Filled;
