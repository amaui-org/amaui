import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineEndSquareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndSquareW100'

      short_name='LineEndSquare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.75 14.75h5.5v-5.5h-5.5Zm-.7.7v-3.1H3.4v-.7h9.65v-3.1h6.9v6.9ZM16.5 12Z"/>
    </Icon>
  );
});

IconMaterialLineEndSquareW100.displayName = 'AmauiIconMaterialLineEndSquareW100';

export default IconMaterialLineEndSquareW100;
