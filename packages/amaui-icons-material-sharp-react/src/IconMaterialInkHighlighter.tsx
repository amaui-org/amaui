import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkHighlighter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkHighlighter'

      short_name='InkHighlighter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m544-400-52-52-52-52-200 200 104 104 200-200Zm-47-161 52 52 52 52 199-199-104-104-199 199ZM60-120l126-126-30-30v-56l257-257 216 216-257 257h-56l-30-30-26 26H60Zm353-469 283-283 216 216-283 283-216-216Z"/>
    </Icon>
  );
});

IconMaterialInkHighlighter.displayName = 'AmauiIconMaterialInkHighlighter';

export default IconMaterialInkHighlighter;
