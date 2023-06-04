import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineStartArrow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartArrow'

      short_name='LineStartArrow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 19 2 12l11-7v6h9v2h-9Zm-2-3.65v-6.7L5.725 12ZM11 12Z"/>
    </Icon>
  );
});

IconMaterialLineStartArrow.displayName = 'AmauiIconMaterialLineStartArrow';

export default IconMaterialLineStartArrow;
