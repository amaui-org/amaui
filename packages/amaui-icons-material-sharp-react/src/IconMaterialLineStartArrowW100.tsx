import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineStartArrowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartArrowW100'

      short_name='LineStartArrow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.45 16.175 4.875 12l6.575-4.175v3.825h9.15v.7h-9.15Zm-.7-1.275V9.1L6.2 12Zm0-2.9Z"/>
    </Icon>
  );
});

IconMaterialLineStartArrowW100.displayName = 'AmauiIconMaterialLineStartArrowW100';

export default IconMaterialLineStartArrowW100;
