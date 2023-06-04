import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSurgicalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SurgicalW100Filled'

      short_name='Surgical'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m457 670-76-76 287-287 76 76-287 287Zm79 173 28-28h323v28H536Zm-300 1q-22 0-43-5t-41-16l186-186 101 101-52 55q-25 26-58.5 38.5T260 844h-24Z"/>
    </Icon>
  );
});

IconMaterialSurgicalW100Filled.displayName = 'AmauiIconMaterialSurgicalW100Filled';

export default IconMaterialSurgicalW100Filled;
