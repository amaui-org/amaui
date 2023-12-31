import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkHighlighterMoveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkHighlighterMoveFilled'

      short_name='InkHighlighterMove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m100-120 126-126-30-30v-56l228-228 216 216-228 228h-56l-30-30-26 26H100Zm381-497 255-255 216 216-255 255-216-216Zm70-183H280v-80h351l-80 80ZM391-640H160v-80h311l-80 80ZM231-480H40v-80h271l-80 80Z"/>
    </Icon>
  );
});

IconMaterialInkHighlighterMoveFilled.displayName = 'AmauiIconMaterialInkHighlighterMoveFilled';

export default IconMaterialInkHighlighterMoveFilled;
