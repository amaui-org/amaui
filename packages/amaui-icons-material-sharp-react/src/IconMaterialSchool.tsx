import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSchool = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='School'

      short_name='School'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 21-7-3.8v-6L1 9l11-6 11 6v8h-2v-6.9l-2 1.1v6Zm0-8.3L18.85 9 12 5.3 5.15 9Zm0 6.025 5-2.7V12.25L12 15l-5-2.75v3.775Zm0-6.025Zm0 2.25Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialSchool.displayName = 'AmauiIconMaterialSchool';

export default IconMaterialSchool;
