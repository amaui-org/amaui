import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineStartSquare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartSquare'

      short_name='LineStartSquare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 15.5h7v-7H4Zm9 2H2v-11h11V11h9v2h-9ZM7.5 12Z"/>
    </Icon>
  );
});

IconMaterialLineStartSquare.displayName = 'AmauiIconMaterialLineStartSquare';

export default IconMaterialLineStartSquare;
