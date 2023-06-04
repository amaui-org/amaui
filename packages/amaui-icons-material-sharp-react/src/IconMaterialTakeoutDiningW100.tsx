import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTakeoutDiningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TakeoutDiningW100'

      short_name='TakeoutDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.8 18h8.4l.575-7.4h-9.55Zm-.625-8.1h9.65L17 7.8 14.15 5h-4.3L7 7.8Zm-.65.7L2.9 7.2l.425-.55L6.45 9.6 6.3 7.55 9.55 4.3h4.9l3.25 3.25-.15 2.05 3.125-2.95.425.55-3.625 3.4Zm.625 8.1-.625-8.1h10.95l-.625 8.1ZM12 9.9Zm0 .7Z"/>
    </Icon>
  );
});

IconMaterialTakeoutDiningW100.displayName = 'AmauiIconMaterialTakeoutDiningW100';

export default IconMaterialTakeoutDiningW100;
