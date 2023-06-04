import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloatLandscapeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloatLandscapeW100Filled'

      short_name='FloatLandscape'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M192 844q-26 0-43-17t-17-43V368q0-26 17-43t43-17h576q26 0 43 17t17 43v142q0 5.95-4.025 9.975Q819.95 524 814 524H648q-24.75 0-42.375 17.625T588 584v246q0 5.95-4.025 9.975Q579.95 844 574 844H192Zm526 0q-12.75 0-21.375-8.625T688 814V654q0-12.75 8.625-21.375T718 624h80q12.75 0 21.375 8.625T828 654v160q0 12.75-8.625 21.375T798 844h-80Z"/>
    </Icon>
  );
});

IconMaterialFloatLandscapeW100Filled.displayName = 'AmauiIconMaterialFloatLandscapeW100Filled';

export default IconMaterialFloatLandscapeW100Filled;
