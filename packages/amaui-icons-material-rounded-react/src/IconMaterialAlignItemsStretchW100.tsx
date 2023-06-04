import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignItemsStretchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignItemsStretchW100'

      short_name='AlignItemsStretch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M336 790q-12.75 0-21.375-8.625T306 760V392q0-12.75 8.625-21.375T336 362h8q12.75 0 21.375 8.625T374 392v368q0 12.75-8.625 21.375T344 790h-8Zm280 0q-12.75 0-21.375-8.625T586 760V392q0-12.75 8.625-21.375T616 362h8q12.75 0 21.375 8.625T654 392v368q0 12.75-8.625 21.375T624 790h-8ZM146 924q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h668q5.95 0 9.975 4.035 4.025 4.035 4.025 10T823.975 920q-4.025 4-9.975 4H146Zm0-668q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h668q5.95 0 9.975 4.035 4.025 4.035 4.025 10T823.975 252q-4.025 4-9.975 4H146Z"/>
    </Icon>
  );
});

IconMaterialAlignItemsStretchW100.displayName = 'AmauiIconMaterialAlignItemsStretchW100';

export default IconMaterialAlignItemsStretchW100;
