import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovieEditFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieEditFilled'

      short_name='MovieEdit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 19q-.825 0-1.412-.587Q2 17.825 2 17V5q0-.825.588-1.413Q3.175 3 4 3l2 4h3L7 3h2l2 4h3l-2-4h2l2 4h3l-2-4h3q.825 0 1.413.587Q22 4.175 22 5v4H4v8h8v2Zm15.15-6.3 2.15 2.1-4.875 4.9q-.15.15-.337.225Q15.9 20 15.7 20h-1.2q-.2 0-.35-.15-.15-.15-.15-.35v-1.2q0-.2.088-.4.087-.2.212-.325Zm2.875 1.4L19.9 11.975l.7-.7q.3-.3.725-.3t.7.3l.7.725q.275.3.275.712 0 .413-.275.688Z"/>
    </Icon>
  );
});

IconMaterialMovieEditFilled.displayName = 'AmauiIconMaterialMovieEditFilled';

export default IconMaterialMovieEditFilled;
