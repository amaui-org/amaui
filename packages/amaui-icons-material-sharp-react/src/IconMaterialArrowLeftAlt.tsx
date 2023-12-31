import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowLeftAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowLeftAlt'

      short_name='ArrowLeftAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z"/>
    </Icon>
  );
});

IconMaterialArrowLeftAlt.displayName = 'AmauiIconMaterialArrowLeftAlt';

export default IconMaterialArrowLeftAlt;
