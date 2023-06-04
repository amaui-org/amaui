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
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="12,4.44 8.34,7 15.66,7"/><path d="M22,9L12,2L2,9h9v13h2V9H22z M12,4.44L15.66,7H8.34L12,4.44z"/><polygon points="4.14,12 2.18,12.37 3,16.74 3,22 5,22 5.02,18 7,18 7,22 9,22 9,16 4.9,16"/><polygon points="19.1,16 15,16 15,22 17,22 17,18 18.98,18 19,22 21,22 21,16.74 21.82,12.37 19.86,12"/></g></g>
    </Icon>
  );
});

IconMaterialDeck.displayName = 'AmauiIconMaterialDeck';

export default IconMaterialDeck;
