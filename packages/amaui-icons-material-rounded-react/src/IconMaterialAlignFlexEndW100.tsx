import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignFlexEndW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignFlexEndW100'

      short_name='AlignFlexEnd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M146 924q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h668q5.95 0 9.975 4.035 4.025 4.035 4.025 10T823.975 920q-4.025 4-9.975 4H146Zm330-160q-12.75 0-21.375-8.625T446 734V286q0-12.75 8.625-21.375T476 256h8q12.75 0 21.375 8.625T514 286v448q0 12.75-8.625 21.375T484 764h-8Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexEndW100.displayName = 'AmauiIconMaterialAlignFlexEndW100';

export default IconMaterialAlignFlexEndW100;
