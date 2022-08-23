import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSchoolSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchoolSharp'
      short_name='School'

      {...props}
    >
      <path d="M12 21 5 17.2V11.2L1 9L12 3L23 9V17H21V10.1L19 11.2V17.2ZM12 12.7 18.85 9 12 5.3 5.15 9ZM12 18.725 17 16.025V12.25L12 15L7 12.25V16.025ZM12 12.7ZM12 14.95ZM12 14.95Z"/>
    </Icon>
  );
});

IconMaterialSchoolSharp.displayName = 'AmauiIconMaterialSchoolSharp';

export default IconMaterialSchoolSharp;
