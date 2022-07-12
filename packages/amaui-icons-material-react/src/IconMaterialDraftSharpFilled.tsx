import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDraftSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftSharpFilled'
      short_name='Draft'

      {...props}
    >
      <path d="M4 22V2H14L20 8V22ZM13 9H18L13 4Z"/>
    </Icon>
  )
});

export default IconMaterialDraftSharpFilled;
