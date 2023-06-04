import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineStartSquareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartSquareW100'

      short_name='LineStartSquare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.75 14.75h5.5v-5.5h-5.5Zm6.2.7h-6.9v-6.9h6.9v3.1h9.65v.7h-9.65ZM7.5 12Z"/>
    </Icon>
  );
});

IconMaterialLineStartSquareW100.displayName = 'AmauiIconMaterialLineStartSquareW100';

export default IconMaterialLineStartSquareW100;
