import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrokenImageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageW100'

      short_name='BrokenImage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4ZM6 13.5l4-4 4 4 4-4 1 1V5H5v7.5ZM5 19h14v-7.5l-1-1-4 4-4-4-4 4-1-1Zm0 0v-7.5.7V5v8.5Z"/>
    </Icon>
  );
});

IconMaterialBrokenImageW100.displayName = 'AmauiIconMaterialBrokenImageW100';

export default IconMaterialBrokenImageW100;
