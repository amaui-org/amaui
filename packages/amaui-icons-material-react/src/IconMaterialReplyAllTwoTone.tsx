import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReplyAllTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplyAllTwoTone'
      short_name='ReplyAll'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>
    </Icon>
  );
});

IconMaterialReplyAllTwoTone.displayName = 'AmauiIconMaterialReplyAllTwoTone';

export default IconMaterialReplyAllTwoTone;
