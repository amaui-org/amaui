import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkHighlighterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkHighlighterFilled'

      short_name='InkHighlighter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m60-120 126-126-30-30v-56l228-228 216 216-228 228h-56l-30-30-26 26H60Zm381-497 255-255 216 216-255 255-216-216Z"/>
    </Icon>
  );
});

IconMaterialInkHighlighterFilled.displayName = 'AmauiIconMaterialInkHighlighterFilled';

export default IconMaterialInkHighlighterFilled;
