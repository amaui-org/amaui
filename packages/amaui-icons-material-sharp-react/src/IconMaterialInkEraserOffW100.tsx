import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkEraserOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkEraserOffW100'

      short_name='InkEraserOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M794-126 585-335 466-212H180l-90-90 259-269-223-223 20-20 668 668-20 20ZM192-240h262l111-115-197-197-240 248 64 64Zm468-172-20-20 128-130-198-198-127 131-20-20 145-151 239 239-147 149ZM542-531Zm-75 77Z"/>
    </Icon>
  );
});

IconMaterialInkEraserOffW100.displayName = 'AmauiIconMaterialInkEraserOffW100';

export default IconMaterialInkEraserOffW100;
