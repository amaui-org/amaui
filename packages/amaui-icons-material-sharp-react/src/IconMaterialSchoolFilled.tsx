import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSchoolFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchoolFilled'

      short_name='School'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21 17v-6.9L12 15 1 9l11-6 11 6v8Zm-9 4-7-3.8v-5l7 3.8 7-3.8v5Z"/>
    </Icon>
  );
});

IconMaterialSchoolFilled.displayName = 'AmauiIconMaterialSchoolFilled';

export default IconMaterialSchoolFilled;
