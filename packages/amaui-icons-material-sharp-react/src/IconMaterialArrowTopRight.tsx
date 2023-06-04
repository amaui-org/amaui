import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowTopRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowTopRight'

      short_name='ArrowTopRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 896V416h447L504 272l56-56 240 240-240 240-56-57 143-143H280v400h-80Z"/>
    </Icon>
  );
});

IconMaterialArrowTopRight.displayName = 'AmauiIconMaterialArrowTopRight';

export default IconMaterialArrowTopRight;
