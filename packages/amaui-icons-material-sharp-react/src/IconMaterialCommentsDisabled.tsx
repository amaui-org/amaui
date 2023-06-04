import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCommentsDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentsDisabled'

      short_name='CommentsDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.475 23.3-5.3-5.3H2V4.825L.675 3.5 2.1 2.075l19.8 19.8ZM22 19.125 18.875 16H20V4H6.875l-2-2H22ZM4 16h9.175l-2-2H6v-2h3.175l-1-1H6V9h.175L4 6.825Zm12.875-2-2-2H18v2Zm-3-3-2-2H18v2Zm-3-3-2-2H18v2ZM8.6 11.4Zm4.275-1.4Z"/>
    </Icon>
  );
});

IconMaterialCommentsDisabled.displayName = 'AmauiIconMaterialCommentsDisabled';

export default IconMaterialCommentsDisabled;
