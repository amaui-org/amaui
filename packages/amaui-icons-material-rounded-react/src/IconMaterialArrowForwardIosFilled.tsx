import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowForwardIosFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardIosFilled'

      short_name='ArrowForwardIos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.15 21.1q-.375-.375-.375-.888 0-.512.375-.887L14.475 12l-7.35-7.35q-.35-.35-.35-.875t.375-.9q.375-.375.888-.375.512 0 .887.375l8.4 8.425q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325L8.9 21.125q-.35.35-.862.35-.513 0-.888-.375Z"/>
    </Icon>
  );
});

IconMaterialArrowForwardIosFilled.displayName = 'AmauiIconMaterialArrowForwardIosFilled';

export default IconMaterialArrowForwardIosFilled;
