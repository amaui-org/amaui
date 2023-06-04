import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowTopLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowTopLeft'

      short_name='ArrowTopLeft'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M680 896V496H313l143 143-56 57-240-240 240-240 56 56-143 144h447v480h-80Z"/>
    </Icon>
  );
});

IconMaterialArrowTopLeft.displayName = 'AmauiIconMaterialArrowTopLeft';

export default IconMaterialArrowTopLeft;
