import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStayCurrentPortraitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayCurrentPortraitFilled'

      short_name='StayCurrentPortrait'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 23V1h14v22Zm2-5h10V6H7Z"/>
    </Icon>
  );
});

IconMaterialStayCurrentPortraitFilled.displayName = 'AmauiIconMaterialStayCurrentPortraitFilled';

export default IconMaterialStayCurrentPortraitFilled;
