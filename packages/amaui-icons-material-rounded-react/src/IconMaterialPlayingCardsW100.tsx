import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayingCardsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayingCardsW100'

      short_name='PlayingCards'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m599-429 20-72q2-9-1-18.5T607-534l-61-42q-6-5-13.5-2t-9.5 11l-20 72q-2 9 1 18.5t11 14.5l61 42q6 5 13.5 2t9.5-11ZM192-183l-12-5q-32-14-43-46t3-62l52-111v224Zm180 51q-33 0-56.5-23.5T292-212v-174l83 228q3 8 6 14t8 12h-17Zm165-49q-24 9-46-1t-31-34L302-649q-9-24 1.5-46t34.5-31l243-89q24-9 46 1.5t31 34.5l158 433q9 24-1 46t-34 31l-244 88Zm-9-28 242-88q13-5 18.5-16.5t.5-24.5L633-768q-5-13-16.5-18.5T592-787l-242 88q-13 5-18.5 16.5T331-658l156 430q5 13 16.5 18.5t24.5.5Zm32-289Z"/>
    </Icon>
  );
});

IconMaterialPlayingCardsW100.displayName = 'AmauiIconMaterialPlayingCardsW100';

export default IconMaterialPlayingCardsW100;
