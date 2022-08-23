import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommentsDisabledSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentsDisabledSharpFilled'
      short_name='CommentsDisabled'

      {...props}
    >
      <path d="M20.475 23.3 15.175 18H2V4.825L0.675 3.5L2.1 2.075L21.9 21.875ZM22 19.125 16.875 14H18V12H14.875L13.875 11H18V9H11.875L10.875 8H18V6H8.875L4.875 2H22ZM6 14H11.175L9.175 12H6ZM6 11H8.175L6.175 9H6Z"/>
    </Icon>
  );
});

IconMaterialCommentsDisabledSharpFilled.displayName = 'AmauiIconMaterialCommentsDisabledSharpFilled';

export default IconMaterialCommentsDisabledSharpFilled;
