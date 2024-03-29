import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTakeoutDining = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TakeoutDining'

      short_name='TakeoutDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.8 18h8.45l.475-7H7.3Zm-.65-9h9.725l.075-1.25L14.15 5h-4.3l-2.8 2.75Zm-1.9 1.7L2 7.45l1.4-1.4L5 7.65l-.05-.6L9 3h6l4.05 4.05-.05.6 1.6-1.6 1.4 1.4-3.25 3.25Zm.7 9.3-.7-9.3h13.5l-.7 9.3ZM12 9Zm.025 2Z"/>
    </Icon>
  );
});

IconMaterialTakeoutDining.displayName = 'AmauiIconMaterialTakeoutDining';

export default IconMaterialTakeoutDining;
