import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloatPortraitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloatPortraitW100Filled'

      short_name='FloatPortrait'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M638 924q-12.75 0-21.375-8.625T608 894V734q0-12.75 8.625-21.375T638 704h80q12.75 0 21.375 8.625T748 734v160q0 12.75-8.625 21.375T718 924h-80Zm-366 0q-26 0-43-17t-17-43V288q0-26 17-43t43-17h416q26 0 43 17t17 43v302q0 5.95-4.025 9.975Q739.95 604 734 604H568q-24.75 0-42.375 17.625T508 664v246q0 5.95-4.025 9.975Q499.95 924 494 924H272Z"/>
    </Icon>
  );
});

IconMaterialFloatPortraitW100Filled.displayName = 'AmauiIconMaterialFloatPortraitW100Filled';

export default IconMaterialFloatPortraitW100Filled;
