import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignSelfStretchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSelfStretchW100'

      short_name='AlignSelfStretch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M146 924q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h668q5.95 0 9.975 4.035 4.025 4.035 4.025 10T823.975 920q-4.025 4-9.975 4H146Zm330-180q-12.75 0-21.375-8.625T446 714V418.232q0-13.232 8.625-21.732T476 388h8q12.75 0 21.375 8.625T514 418v295.768q0 13.232-8.625 21.732T484 744h-8ZM146 256q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h668q5.95 0 9.975 4.035 4.025 4.035 4.025 10T823.975 252q-4.025 4-9.975 4H146Z"/>
    </Icon>
  );
});

IconMaterialAlignSelfStretchW100.displayName = 'AmauiIconMaterialAlignSelfStretchW100';

export default IconMaterialAlignSelfStretchW100;
