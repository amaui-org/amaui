import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSchoolW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchoolW100Filled'

      short_name='School'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.6 14.9V9.4L12 13.5 3.7 9 12 4.5 20.3 9v5.9ZM12 18l-5.7-3.1v-3.8l5.7 3.1 5.7-3.1v3.8Z"/>
    </Icon>
  );
});

IconMaterialSchoolW100Filled.displayName = 'AmauiIconMaterialSchoolW100Filled';

export default IconMaterialSchoolW100Filled;
