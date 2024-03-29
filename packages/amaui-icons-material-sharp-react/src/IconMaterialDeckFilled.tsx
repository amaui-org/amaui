import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeckFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeckFilled'

      short_name='Deck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 22V9H2l10-7 10 7h-9v13Zm-8 0v-5.25l-.8-4.4L4.15 12l.75 4H9v6H7v-4H5v4Zm12 0v-6h4.1l.75-4 1.95.35-.8 4.4V22h-2v-4h-2v4Z"/>
    </Icon>
  );
});

IconMaterialDeckFilled.displayName = 'AmauiIconMaterialDeckFilled';

export default IconMaterialDeckFilled;
