import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial1kFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kFilled'

      short_name='1k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15h1.5v-2.25L15.25 15H17l-2.25-3L17 9h-1.75l-1.75 2.25V9H12Zm-3.5 0H10V9H7v1.5h1.5ZM3 21V3h18v18Z"/>
    </Icon>
  );
});

IconMaterial1kFilled.displayName = 'AmauiIconMaterial1kFilled';

export default IconMaterial1kFilled;
