import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTakeoutDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TakeoutDiningFilled'

      short_name='TakeoutDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.625 10 2 7.45l1.4-1.4L5 7.65l-.05-.6L9 3h6l4.05 4.05-.05.6 1.6-1.6 1.4 1.4L19.375 10ZM5.95 20l-.65-8.45h13.4L18.05 20Z"/>
    </Icon>
  );
});

IconMaterialTakeoutDiningFilled.displayName = 'AmauiIconMaterialTakeoutDiningFilled';

export default IconMaterialTakeoutDiningFilled;
