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
      <path d="M516-82q-9 2-18 2h-18q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v18q0 9-2 18l-78-24v-12q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h12l24 78Zm266-18L650-231l-30 91q-5 14-19 13.5T582-141l-91-303q-4-11 5-20t20-5l303 91q14 5 14.5 19T820-340l-91 30 132 132q17 17 17 39t-17 39q-17 17-39.5 17T782-100Z"/>
    </Icon>
  );
});

IconMaterialHighlightMouseCursor.displayName = 'AmauiIconMaterialHighlightMouseCursor';

export default IconMaterialHighlightMouseCursor;
