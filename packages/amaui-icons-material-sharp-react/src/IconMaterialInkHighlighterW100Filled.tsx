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
      <path d="m140-160 94-94-29-29v-42l215-215 144 144-215 215h-42l-31-31-52 52h-84Zm300-400 240-240 144 144-240 240-144-144Z"/>
    </Icon>
  );
});

IconMaterialInkHighlighterW100Filled.displayName = 'AmauiIconMaterialInkHighlighterW100Filled';

export default IconMaterialInkHighlighterW100Filled;
