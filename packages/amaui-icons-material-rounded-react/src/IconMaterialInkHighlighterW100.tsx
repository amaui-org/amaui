import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkHighlighterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkHighlighterW100'

      short_name='InkHighlighter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M544-416 440-520 246-326q-9 9-9 22t9 22l60 60q9 9 22 9t22-9l194-194Zm-84-124 104 104 197-197q9-9 9-23t-9-23l-58-58q-9-9-23-9t-23 9L460-540Zm-30-10 144 144-204 204q-18 18-42 18t-42-18l-10-10-34 34q-8 8-19.5 13t-23.5 5h-23q-10 0-13.5-9.5T166-186l68-68-8-8q-18-18-18-42t18-42l204-204Zm0 0 208-208q18-18 42-18t42 18l60 60q18 18 18 42t-18 42L574-406 430-550Z"/>
    </Icon>
  );
});

IconMaterialInkHighlighterW100.displayName = 'AmauiIconMaterialInkHighlighterW100';

export default IconMaterialInkHighlighterW100;
