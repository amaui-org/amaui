import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTempPreferencesCustomW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempPreferencesCustomW100Filled'

      short_name='TempPreferencesCustom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.7 7.95-.75-1.7-1.7-.75 1.7-.75.75-1.7.75 1.7 1.7.75-1.7.75Zm0 13-.75-1.7-1.7-.75 1.7-.75.75-1.7.75 1.7 1.7.75-1.7.75Zm-9-4.1L7.2 13.5 3.85 12l3.35-1.5 1.5-3.35 1.5 3.35 3.35 1.5-3.35 1.5Z"/>
    </Icon>
  );
});

IconMaterialTempPreferencesCustomW100Filled.displayName = 'AmauiIconMaterialTempPreferencesCustomW100Filled';

export default IconMaterialTempPreferencesCustomW100Filled;
