import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkFlagFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkFlagFilled'

      short_name='BookmarkFlag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-430v-90h140q12 0 18-11t-2-21l-36-48 36-48q8-10 2-21t-18-11H420q-17 0-28.5 11.5T380-640v210q0 13 8.5 21.5T410-400q13 0 21.5-8.5T440-430Zm40 190-168 72q-40 17-76-6.5T200-241v-519q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v519q0 43-36 66.5t-76 6.5l-168-72Z"/>
    </Icon>
  );
});

IconMaterialBookmarkFlagFilled.displayName = 'AmauiIconMaterialBookmarkFlagFilled';

export default IconMaterialBookmarkFlagFilled;
