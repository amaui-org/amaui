import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkHighlighterMove = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkHighlighterMove'

      short_name='InkHighlighterMove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m584-400-52-52-52-52-200 200 104 104 200-200Zm-47-161 52 52 52 52 199-199-104-104-199 199ZM100-120l126-126-30-30v-56l257-257 216 216-257 257h-56l-30-30-26 26H100Zm353-469 283-283 216 216-283 283-216-216Zm98-211H280v-80h351l-80 80ZM391-640H160v-80h311l-80 80ZM231-480H40v-80h271l-80 80Z"/>
    </Icon>
  );
});

IconMaterialInkHighlighterMove.displayName = 'AmauiIconMaterialInkHighlighterMove';

export default IconMaterialInkHighlighterMove;
