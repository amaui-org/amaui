import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Deck'

      short_name='Deck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 22V9H2l10-7 10 7h-9v13Zm1-15h3.65-7.3ZM3 22v-5.25l-.8-4.4L4.15 12l.75 4H9v6H7v-4H5v4Zm12 0v-6h4.1l.75-4 1.95.35-.8 4.4V22h-2v-4h-2v4ZM8.35 7h7.3L12 4.45Z"/>
    </Icon>
  );
});

IconMaterialDeck.displayName = 'AmauiIconMaterialDeck';

export default IconMaterialDeck;
