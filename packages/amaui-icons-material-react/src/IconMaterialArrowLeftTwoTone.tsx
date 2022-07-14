import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowLeftTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowLeftTwoTone'
      short_name='ArrowLeft'

      {...props}
    >
      <path d="M24 0v24H0V0h24z" fill="none" opacity=".87"/><path d="M14 7l-5 5 5 5V7z"/>
    </Icon>
  );
});

export default IconMaterialArrowLeftTwoTone;
