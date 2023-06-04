import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineEndSquareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndSquareFilled'

      short_name='LineEndSquare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 17.5V13H2v-2h9V6.5h11v11Z"/>
    </Icon>
  );
});

IconMaterialLineEndSquareFilled.displayName = 'AmauiIconMaterialLineEndSquareFilled';

export default IconMaterialLineEndSquareFilled;
