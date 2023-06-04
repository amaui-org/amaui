import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMan3 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man3'

      short_name='Man3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 22.25v-7H8v-8h8v8h-2v7ZM12 6.5 9.75 4.25 12 2l2.25 2.25Z"/>
    </Icon>
  );
});

IconMaterialMan3.displayName = 'AmauiIconMaterialMan3';

export default IconMaterialMan3;
