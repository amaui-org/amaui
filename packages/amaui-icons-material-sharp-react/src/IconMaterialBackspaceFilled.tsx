import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackspaceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackspaceFilled'

      short_name='Backspace'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.4 16 2.6-2.6 2.6 2.6 1.4-1.4-2.6-2.6L18 9.4 16.6 8 14 10.6 11.4 8 10 9.4l2.6 2.6-2.6 2.6Zm-3.45 3L3 12l4.95-7H21v14Z"/>
    </Icon>
  );
});

IconMaterialBackspaceFilled.displayName = 'AmauiIconMaterialBackspaceFilled';

export default IconMaterialBackspaceFilled;
