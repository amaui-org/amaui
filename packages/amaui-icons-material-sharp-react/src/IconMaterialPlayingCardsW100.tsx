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
      <path d="m594-408 31-113-97-67-31 113 97 67ZM192-183l-87-39 87-185v224Zm100 51v-254l92 254h-92Zm189-28L282-706l355-129 200 545-356 130Zm17-38 302-110-178-490-302 110 178 490Zm62-300Z"/>
    </Icon>
  );
});

IconMaterialPlayingCardsW100.displayName = 'AmauiIconMaterialPlayingCardsW100';

export default IconMaterialPlayingCardsW100;
