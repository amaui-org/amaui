import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileOpenW100'

      short_name='FileOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V3.3h9.35l4.05 4.05v7.3H18V7.7h-3.7V4H6v16h9.65v.7Zm16.65.75-3.6-3.6v3.175h-.7V16.65h4.375v.7h-3.2l3.6 3.6ZM6 20V4v16Z"/>
    </Icon>
  );
});

IconMaterialFileOpenW100.displayName = 'AmauiIconMaterialFileOpenW100';

export default IconMaterialFileOpenW100;
