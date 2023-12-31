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
      <path d="M638-464v104q0 6-4 10t-10 4q-6 0-10-4t-4-10v-96l-43-80q-25 1-42 19t-17 43v204l83 138h-33l-78-130v-212q0-32 20-57t52-31l-69-130q-16-31-15-64.5t25-57.5l24-25q9-9 23-9t22 11l214 258q6 7 9.5 15.5T790-546l38 414h-28l-39-423-222-266-26 27q-16 16-19 37.5t8 41.5l136 251Zm-316 0 136-251q11-20 8-41.5T447-794l-26-27-222 266-39 423h-28l37-414q1-9 4.5-17.5T183-579l215-258q8-11 21.5-11t22.5 9l25 25q24 24 25 57.5T477-692l-70 130q32 6 52.5 31t20.5 57v212l-78 130h-33l83-138v-204q0-25-17-43t-42-19l-43 80v96q0 6-4 10t-10 4q-6 0-10-4t-4-10v-104Z"/>
    </Icon>
  );
});

IconMaterialFoldedHandsW100.displayName = 'AmauiIconMaterialFoldedHandsW100';

export default IconMaterialFoldedHandsW100;
