import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeckSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeckSharp'
      short_name='Deck'

      {...props}
    >
      <path d="M11 22V9H2L12 2L22 9H13V22ZM12 7H15.65H8.35ZM3 22V16.75L2.2 12.35L4.15 12L4.9 16H9V22H7V18H5V22ZM15 22V16H19.1L19.85 12L21.8 12.35L21 16.75V22H19V18H17V22ZM8.35 7H15.65L12 4.45Z"/>
    </Icon>
  );
});

IconMaterialDeckSharp.displayName = 'AmauiIconMaterialDeckSharp';

export default IconMaterialDeckSharp;
