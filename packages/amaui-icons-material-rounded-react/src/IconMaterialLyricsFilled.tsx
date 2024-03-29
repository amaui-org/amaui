import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLyricsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LyricsFilled'

      short_name='Lyrics'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V4q0-.825.588-1.413Q3.175 2 4 2h11q.825 0 1.413.587Q17 3.175 17 4v.425q-1.375.6-2.188 1.837Q14 7.5 14 9t.812 2.738q.813 1.237 2.188 1.837V16q0 .825-.587 1.413Q15.825 18 15 18H6Zm4-8h4v-2H6Zm13-2q-1.25 0-2.125-.875T16 9q0-1.275.875-2.138Q17.75 6 19 6q.275 0 .525.05t.475.125V1h4v2h-2v6q0 1.25-.875 2.125T19 12ZM6 11h7V9H6Zm0-3h7V6H6Z"/>
    </Icon>
  );
});

IconMaterialLyricsFilled.displayName = 'AmauiIconMaterialLyricsFilled';

export default IconMaterialLyricsFilled;
