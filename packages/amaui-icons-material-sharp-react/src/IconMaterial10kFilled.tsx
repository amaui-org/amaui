import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial10kFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='10kFilled'

      short_name='10k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 15h1.5v-2.25L17.25 15H19l-2.25-3L19 9h-1.75l-1.75 2.25V9H14Zm-8 0h1.5V9H5v1.5h1Zm2.5 0H13V9H8.5Zm1.5-1.5v-3h1.5v3ZM3 21V3h18v18Z"/>
    </Icon>
  );
});

IconMaterial10kFilled.displayName = 'AmauiIconMaterial10kFilled';

export default IconMaterial10kFilled;
