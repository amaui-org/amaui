import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeckSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeckSharpW100'
      short_name='Deck'

      {...props}
    >
      <path d="M11.65 21.35V8.35H4.05L12 2.8L19.95 8.35H12.35V21.35ZM12 7.65H17.7H6.3ZM3.65 21.35V16.2L2.95 12.35L3.65 12.25L4.35 16.15H8.35V21.35H7.65V16.85H4.35V21.35ZM15.65 21.35V16.15H19.65L20.35 12.25L21.05 12.35L20.35 16.2V21.35H19.65V16.85H16.35V21.35ZM6.3 7.65H17.7L12 3.65Z"/>
    </Icon>
  );
});

IconMaterialDeckSharpW100.displayName = 'AmauiIconMaterialDeckSharpW100';

export default IconMaterialDeckSharpW100;
