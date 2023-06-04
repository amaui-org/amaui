import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPaddingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaddingFilled'

      short_name='Padding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 9h2V7H7Zm4 0h2V7h-2Zm4 0h2V7h-2ZM3 21V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialPaddingFilled.displayName = 'AmauiIconMaterialPaddingFilled';

export default IconMaterialPaddingFilled;
