import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineStartArrowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartArrowFilled'

      short_name='LineStartArrow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 19 2 12l11-7v6h9v2h-9Z"/>
    </Icon>
  );
});

IconMaterialLineStartArrowFilled.displayName = 'AmauiIconMaterialLineStartArrowFilled';

export default IconMaterialLineStartArrowFilled;
