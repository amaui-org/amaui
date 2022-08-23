import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialModeCommentRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeCommentRounded'
      short_name='ModeComment'

      {...props}
    >
      <path d="M20.3 20.3 18 18H4Q3.175 18 2.588 17.413Q2 16.825 2 16V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V19.575Q22 20.25 21.388 20.512Q20.775 20.775 20.3 20.3ZM4 4V16Q4 16 4 16Q4 16 4 16H18.825L20 17.175V4Q20 4 20 4Q20 4 20 4H4Q4 4 4 4Q4 4 4 4ZM4 4V17.175V16Q4 16 4 16Q4 16 4 16V4Q4 4 4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4Z"/>
    </Icon>
  );
});

IconMaterialModeCommentRounded.displayName = 'AmauiIconMaterialModeCommentRounded';

export default IconMaterialModeCommentRounded;
