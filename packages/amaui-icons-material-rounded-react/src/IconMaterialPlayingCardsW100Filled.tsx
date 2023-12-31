import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayingCardsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayingCardsW100Filled'

      short_name='PlayingCards'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m599-429 20-72q2-9-1-18.5T607-534l-61-42q-6-5-13.5-2t-9.5 11l-20 72q-2 9 1 18.5t11 14.5l61 42q6 5 13.5 2t9.5-11ZM192-183l-12-5q-32-14-43-46t3-62l52-111v224Zm180 51q-33 0-56.5-23.5T292-212v-174l83 228q3 8 6 14t8 12h-17Zm165-49q-24 9-46-1t-31-34L302-649q-9-24 1.5-46t34.5-31l243-89q24-9 46 1.5t31 34.5l158 433q9 24-1 46t-34 31l-244 88Z"/>
    </Icon>
  );
});

IconMaterialPlayingCardsW100Filled.displayName = 'AmauiIconMaterialPlayingCardsW100Filled';

export default IconMaterialPlayingCardsW100Filled;
