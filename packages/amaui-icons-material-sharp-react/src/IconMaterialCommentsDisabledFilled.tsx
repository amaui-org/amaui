import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCommentsDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentsDisabledFilled'

      short_name='CommentsDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.475 23.3-5.3-5.3H2V4.825L.675 3.5 2.1 2.075l19.8 19.8ZM22 19.125 16.875 14H18v-2h-3.125l-1-1H18V9h-6.125l-1-1H18V6H8.875l-4-4H22ZM6 14h5.175l-2-2H6Zm0-3h2.175l-2-2H6Z"/>
    </Icon>
  );
});

IconMaterialCommentsDisabledFilled.displayName = 'AmauiIconMaterialCommentsDisabledFilled';

export default IconMaterialCommentsDisabledFilled;
