import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkHighlighterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkHighlighterW100Filled'

      short_name='InkHighlighter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m420-540 144 144-194 194q-18 18-42 18t-42-18l-10-10-34 34q-8 8-19.5 13t-23.5 5h-23q-10 0-13.5-9.5T166-186l68-68-8-8q-18-18-18-42t18-42l194-194Zm20-20 198-198q18-18 42-18t42 18l60 60q18 18 18 42t-18 42L584-416 440-560Z"/>
    </Icon>
  );
});

IconMaterialInkHighlighterW100Filled.displayName = 'AmauiIconMaterialInkHighlighterW100Filled';

export default IconMaterialInkHighlighterW100Filled;
