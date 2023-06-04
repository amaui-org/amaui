import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineEndSquare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndSquare'

      short_name='LineEndSquare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 15.5h7v-7h-7Zm-2 2V13H2v-2h9V6.5h11v11Zm5.5-5.5Z"/>
    </Icon>
  );
});

IconMaterialLineEndSquare.displayName = 'AmauiIconMaterialLineEndSquare';

export default IconMaterialLineEndSquare;
