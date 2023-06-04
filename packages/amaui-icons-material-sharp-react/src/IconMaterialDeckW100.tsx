import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeckW100'

      short_name='Deck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 21.35v-13h-7.6L12 2.8l7.95 5.55h-7.6v13ZM12 7.65h5.7H6.3Zm-8.35 13.7V16.2l-.7-3.85.7-.1.7 3.9h4v5.2h-.7v-4.5h-3.3v4.5Zm12 0v-5.2h4l.7-3.9.7.1-.7 3.85v5.15h-.7v-4.5h-3.3v4.5ZM6.3 7.65h11.4l-5.7-4Z"/>
    </Icon>
  );
});

IconMaterialDeckW100.displayName = 'AmauiIconMaterialDeckW100';

export default IconMaterialDeckW100;
