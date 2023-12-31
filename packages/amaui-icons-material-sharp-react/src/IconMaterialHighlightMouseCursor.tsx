import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighlightMouseCursor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlightMouseCursor'

      short_name='HighlightMouseCursor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M516-82q-9 2-18 2h-18q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v18q0 9-2 18l-78-24v-12q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h12l24 78Zm305 22L650-231 600-80 480-480l400 120-151 50 171 171-79 79Z"/>
    </Icon>
  );
});

IconMaterialHighlightMouseCursor.displayName = 'AmauiIconMaterialHighlightMouseCursor';

export default IconMaterialHighlightMouseCursor;
