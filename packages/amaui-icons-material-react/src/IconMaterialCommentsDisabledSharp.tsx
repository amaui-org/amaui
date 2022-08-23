import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommentsDisabledSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentsDisabledSharp'
      short_name='CommentsDisabled'

      {...props}
    >
      <path d="M20.475 23.3 15.175 18H2V4.825L0.675 3.5L2.1 2.075L21.9 21.875ZM22 19.125 18.875 16H20V4H6.875L4.875 2H22ZM4 16H13.175L11.175 14H6V12H9.175L8.175 11H6V9H6.175L4 6.825ZM16.875 14 14.875 12H18V14ZM13.875 11 11.875 9H18V11ZM10.875 8 8.875 6H18V8ZM8.6 11.4ZM12.875 10Z"/>
    </Icon>
  );
});

IconMaterialCommentsDisabledSharp.displayName = 'AmauiIconMaterialCommentsDisabledSharp';

export default IconMaterialCommentsDisabledSharp;
