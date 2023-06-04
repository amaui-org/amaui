import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineStartArrowNotch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartArrowNotch'

      short_name='LineStartArrowNotch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 19 2 12l11-7-3.425 6H22v2H9.575Z"/>
    </Icon>
  );
});

IconMaterialLineStartArrowNotch.displayName = 'AmauiIconMaterialLineStartArrowNotch';

export default IconMaterialLineStartArrowNotch;
