import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkHighlighterMoveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkHighlighterMoveW100Filled'

      short_name='InkHighlighterMove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m208-160 94-94-29-29v-42l215-215 144 144-215 215h-42l-31-31-52 52h-84Zm300-400 240-240 144 144-240 240-144-144Zm99-240H332v-28h303l-28 28ZM479-672H212v-28h295l-28 28ZM351-544H92v-28h287l-28 28Z"/>
    </Icon>
  );
});

IconMaterialInkHighlighterMoveW100Filled.displayName = 'AmauiIconMaterialInkHighlighterMoveW100Filled';

export default IconMaterialInkHighlighterMoveW100Filled;
