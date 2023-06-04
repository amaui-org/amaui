import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTempPreferencesCustomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempPreferencesCustomW100'

      short_name='TempPreferencesCustom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.7 7.95-.75-1.7-1.7-.75 1.7-.75.75-1.7.75 1.7 1.7.75-1.7.75Zm0 13-.75-1.7-1.7-.75 1.7-.75.75-1.7.75 1.7 1.7.75-1.7.75Zm-9-4.1L7.2 13.5 3.85 12l3.35-1.5 1.5-3.35 1.5 3.35 3.35 1.5-3.35 1.5Zm0-1.7 1-2.15 2.15-1-2.15-1-1-2.15-1 2.15-2.15 1 2.15 1Zm0-3.15Z"/>
    </Icon>
  );
});

IconMaterialTempPreferencesCustomW100.displayName = 'AmauiIconMaterialTempPreferencesCustomW100';

export default IconMaterialTempPreferencesCustomW100;
