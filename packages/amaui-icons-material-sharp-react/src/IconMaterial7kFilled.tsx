import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial7kFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='7kFilled'

      short_name='7k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 15h1.5v-2.25L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13Zm-5.25 0H9.5l1.85-6H6.5v1.5h2.65ZM3 21V3h18v18Z"/>
    </Icon>
  );
});

IconMaterial7kFilled.displayName = 'AmauiIconMaterial7kFilled';

export default IconMaterial7kFilled;
