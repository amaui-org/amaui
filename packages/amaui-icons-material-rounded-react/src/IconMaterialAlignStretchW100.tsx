import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignStretchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignStretchW100'

      short_name='AlignStretch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M336 470q-12.75 0-21.375-8.625T306 440V256H146q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h668q5.95 0 9.975 4.035 4.025 4.035 4.025 10T823.975 252q-4.025 4-9.975 4H654v184q0 12.75-8.625 21.375T624 470H336ZM146 924q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h160V712q0-12.75 8.625-21.375T336 682h288q12.75 0 21.375 8.625T654 712v184h160q5.95 0 9.975 4.035 4.025 4.035 4.025 10T823.975 920q-4.025 4-9.975 4H146Z"/>
    </Icon>
  );
});

IconMaterialAlignStretchW100.displayName = 'AmauiIconMaterialAlignStretchW100';

export default IconMaterialAlignStretchW100;
