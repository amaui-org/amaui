import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkEraserW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkEraserW100Filled'

      short_name='InkEraser'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M662-240h186v28H634l28-28Zm-482 28-48-48q-18-18-18.5-42t17.5-43l396-412q18-19 42-18.5t42 18.5l153 153q18 18 18.5 42.5T765-519L466-212H180Z"/>
    </Icon>
  );
});

IconMaterialInkEraserW100Filled.displayName = 'AmauiIconMaterialInkEraserW100Filled';

export default IconMaterialInkEraserW100Filled;
