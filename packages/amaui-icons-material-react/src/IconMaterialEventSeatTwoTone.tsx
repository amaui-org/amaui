import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventSeatTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventSeatTwoTone'
      short_name='EventSeat'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 5h6v7H9z" opacity=".3"/><path d="M4 21h2v-4h12v4h2v-6H4zM17 5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v9h10V5zm-2 7H9V5h6v7zm4-2h3v3h-3zM2 10h3v3H2z"/>
    </Icon>
  );
});

export default IconMaterialEventSeatTwoTone;
