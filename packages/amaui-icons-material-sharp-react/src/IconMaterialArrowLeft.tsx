import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowLeft'

      short_name='ArrowLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14 17-5-5 5-5Z"/>
    </Icon>
  );
});

IconMaterialArrowLeft.displayName = 'AmauiIconMaterialArrowLeft';

export default IconMaterialArrowLeft;
