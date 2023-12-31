import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowLeftAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowLeftAltFilled'

      short_name='ArrowLeftAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z"/>
    </Icon>
  );
});

IconMaterialArrowLeftAltFilled.displayName = 'AmauiIconMaterialArrowLeftAltFilled';

export default IconMaterialArrowLeftAltFilled;
