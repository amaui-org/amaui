import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageFrenchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageFrenchW100Filled'

      short_name='LanguageFrench'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M225.965 750Q220 750 216 745.975T212 736V432q0-12.75 8.625-21.375T242 402h184q5.95 0 9.975 4.035 4.025 4.035 4.025 10T435.975 426q-4.025 4-9.975 4H240v132h146q5.95 0 9.975 4.035 4.025 4.035 4.025 10T395.975 586q-4.025 4-9.975 4H240v146q0 5.95-4.035 9.975-4.035 4.025-10 4.025Zm308 0Q528 750 524 745.975T520 736V432q0-12.75 8.625-21.375T550 402h138q24.75 0 42.375 17.625T748 462v78q0 24.935-17.5 42.468Q713 600 688 600h-24l73 130q4 7-.182 13.5T725 750q-4 0-7.13-1.909-3.131-1.909-4.87-5.091l-81-143h-84v136q0 5.95-4.035 9.975-4.035 4.025-10 4.025ZM548 572h140q14 0 23-9t9-23v-78q0-14-9-23t-23-9H548v142Z"/>
    </Icon>
  );
});

IconMaterialLanguageFrenchW100Filled.displayName = 'AmauiIconMaterialLanguageFrenchW100Filled';

export default IconMaterialLanguageFrenchW100Filled;
