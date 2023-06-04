import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineStartSquareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartSquareFilled'

      short_name='LineStartSquare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 17.5H2v-11h11V11h9v2h-9Z"/>
    </Icon>
  );
});

IconMaterialLineStartSquareFilled.displayName = 'AmauiIconMaterialLineStartSquareFilled';

export default IconMaterialLineStartSquareFilled;
