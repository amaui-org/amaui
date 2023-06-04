import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineStartArrowNotchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartArrowNotchFilled'

      short_name='LineStartArrowNotch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 19 2 12l11-7-3.425 6H22v2H9.575Z"/>
    </Icon>
  );
});

IconMaterialLineStartArrowNotchFilled.displayName = 'AmauiIconMaterialLineStartArrowNotchFilled';

export default IconMaterialLineStartArrowNotchFilled;
