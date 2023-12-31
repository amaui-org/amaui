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
      <path d="m544-416-52-52-52-52-216 216 104 104 216-216Zm-84-124 52 52 52 52 220-220-104-104-220 220ZM140-160l94-94-29-29v-42l225-225 144 144-225 225h-42l-31-31-52 52h-84Zm290-390 250-250 144 144-250 250-144-144Z"/>
    </Icon>
  );
});

IconMaterialInkHighlighterW100.displayName = 'AmauiIconMaterialInkHighlighterW100';

export default IconMaterialInkHighlighterW100;
