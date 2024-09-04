import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHistoryOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HistoryOffFilled'

      short_name='HistoryOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m785-289-58-58q16-29 24.5-63t8.5-70q0-117-81.5-198.5T480-760q-35 0-68.5 8.5T348-726l-59-59q43-26 91.5-40.5T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 53-14.5 101T785-289ZM520-554l-80-80v-46h80v126ZM792-56 672-176q-42 26-90 41t-102 15q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q37 0 70.5-8.5T614-234L288-560H120v-168l-64-64 56-56 736 736-56 56Z"/>
    </Icon>
  );
});

IconMaterialHistoryOffFilled.displayName = 'AmauiIconMaterialHistoryOffFilled';

export default IconMaterialHistoryOffFilled;
