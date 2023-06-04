import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLyrics = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Lyrics'

      short_name='Lyrics'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V4q0-.825.588-1.413Q3.175 2 4 2h11q.825 0 1.413.587Q17 3.175 17 4v.425q-.6.275-1.1.675-.5.4-.9.9V4H4v12.175L4.175 16H15v-4q.4.5.9.9t1.1.675V16q0 .825-.587 1.413Q15.825 18 15 18H6Zm4-8h4v-2H6Zm13-2q-1.25 0-2.125-.875T16 9q0-1.25.875-2.125T19 6q.275 0 .525.05t.475.125V1h4v2h-2v6q0 1.25-.875 2.125T19 12ZM6 11h7V9H6Zm0-3h7V6H6Zm-2 8.175V4v12Z"/>
    </Icon>
  );
});

IconMaterialLyrics.displayName = 'AmauiIconMaterialLyrics';

export default IconMaterialLyrics;
