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
      <path d="M791-55 602-244l-82 84H190L48-302l244-252L55-791l57-57 736 736-57 57ZM224-240h262l59-61-197-197-188 194 64 64Zm491-119-57-57 142-146-198-198-142 146-56-56 196-204 312 312-197 203ZM559-515ZM447-400Z"/>
    </Icon>
  );
});

IconMaterialInkEraserOff.displayName = 'AmauiIconMaterialInkEraserOff';

export default IconMaterialInkEraserOff;
