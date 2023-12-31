import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFoldedHandsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoldedHandsW100'

      short_name='FoldedHands'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M610-346v-110l-43-80q-25 1-42 19t-17 43v204l83 138h-33l-78-130v-212q0-32 20-57t52-31l-69-130q-16-31-15-64.5t25-57.5l48-48 248 297 39 433h-28l-39-423-222-266-26 27q-16 16-19 37.5t8 41.5l136 251v118h-28Zm-288 0v-118l136-251q11-20 8-41.5T447-794l-26-27-222 266-39 423h-28l39-433 248-297 48 48q24 24 25 57.5T477-692l-70 130q32 6 52.5 31t20.5 57v212l-78 130h-33l83-138v-204q0-25-17-43t-42-19l-43 80v110h-28Z"/>
    </Icon>
  );
});

IconMaterialFoldedHandsW100.displayName = 'AmauiIconMaterialFoldedHandsW100';

export default IconMaterialFoldedHandsW100;
