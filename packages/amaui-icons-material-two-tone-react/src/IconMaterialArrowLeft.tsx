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
      <path d="M24 0v24H0V0h24z" fill="none" opacity=".87"/><path d="M14 7l-5 5 5 5V7z"/>
    </Icon>
  );
});

IconMaterialArrowLeft.displayName = 'AmauiIconMaterialArrowLeft';

export default IconMaterialArrowLeft;
