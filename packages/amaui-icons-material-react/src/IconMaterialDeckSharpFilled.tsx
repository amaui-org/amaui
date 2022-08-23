import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeckSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeckSharpFilled'
      short_name='Deck'

      {...props}
    >
      <path d="M11 22V9H2L12 2L22 9H13V22ZM3 22V16.75L2.2 12.35L4.15 12L4.9 16H9V22H7V18H5V22ZM15 22V16H19.1L19.85 12L21.8 12.35L21 16.75V22H19V18H17V22Z"/>
    </Icon>
  );
});

IconMaterialDeckSharpFilled.displayName = 'AmauiIconMaterialDeckSharpFilled';

export default IconMaterialDeckSharpFilled;
