import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkEraserW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkEraserW100'

      short_name='InkEraser'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M662-240h186v28H634l28-28Zm-482 28-90-90 478-498 238 238-340 350H180Zm274-28 314-322-198-198-442 456 64 64h262Zm26-240Z"/>
    </Icon>
  );
});

IconMaterialInkEraserW100.displayName = 'AmauiIconMaterialInkEraserW100';

export default IconMaterialInkEraserW100;
