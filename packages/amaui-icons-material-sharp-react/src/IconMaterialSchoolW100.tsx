import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSchoolW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchoolW100'

      short_name='School'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 18-5.7-3.1v-4.5L3.7 9 12 4.5 20.3 9v5.9h-.7V9.4l-1.9 1v4.5Zm0-5.3L18.825 9 12 5.3 5.175 9Zm0 4.5 5-2.7v-3.7l-5 2.7-5-2.7v3.7Zm0-4.5Zm0 1.1Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialSchoolW100.displayName = 'AmauiIconMaterialSchoolW100';

export default IconMaterialSchoolW100;
