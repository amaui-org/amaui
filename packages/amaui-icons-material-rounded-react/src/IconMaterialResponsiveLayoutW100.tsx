import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResponsiveLayoutW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResponsiveLayoutW100'

      short_name='ResponsiveLayout'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-232v-296q0-25 17.5-42.5T232-588h140v-140q0-25 17.5-42.5T432-788h296q25 0 42.5 17.5T788-728v496q0 25-17.5 42.5T728-172H232q-25 0-42.5-17.5T172-232Zm448 32h108q14 0 23-9t9-23v-496q0-14-9-23t-23-9H432q-14 0-23 9t-9 23v140h128q25 0 42.5 17.5T588-528v296q0 14 9 23t23 9Zm-220 0h160v-328q0-14-9-23t-23-9H400v360Zm-168 0h140v-360H232q-14 0-23 9t-9 23v296q0 14 9 23t23 9Z"/>
    </Icon>
  );
});

IconMaterialResponsiveLayoutW100.displayName = 'AmauiIconMaterialResponsiveLayoutW100';

export default IconMaterialResponsiveLayoutW100;
