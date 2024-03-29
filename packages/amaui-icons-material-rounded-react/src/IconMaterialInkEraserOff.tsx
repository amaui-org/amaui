import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkEraserOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkEraserOff'

      short_name='InkEraserOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M763-84 602-244l-70 72q-6 6-13.5 9t-15.5 3H207q-8 0-15.5-3t-13.5-9l-73-73q-23-23-23.5-57t22.5-58l188-194L83-763q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84ZM224-240h262l59-61-197-197-188 194 64 64Zm491-119-57-57 142-146-198-198-142 146-56-56 140-146q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L715-359ZM559-515ZM447-400Z"/>
    </Icon>
  );
});

IconMaterialInkEraserOff.displayName = 'AmauiIconMaterialInkEraserOff';

export default IconMaterialInkEraserOff;
