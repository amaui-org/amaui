import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTagW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TagW100'

      short_name='Tag'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.325 19.35 1-4h-4l.175-.7h4l1.325-5.3h-4.5l.175-.7H10l1-4h.675l-1 4H15l1-4h.675l-1 4h4l-.175.7h-4l-1.325 5.3h4.5l-.175.7H14l-1 4h-.675l1-4H9l-1 4Zm1.85-4.7H13.5l1.325-5.3H10.5Z"/>
    </Icon>
  );
});

IconMaterialTagW100.displayName = 'AmauiIconMaterialTagW100';

export default IconMaterialTagW100;
