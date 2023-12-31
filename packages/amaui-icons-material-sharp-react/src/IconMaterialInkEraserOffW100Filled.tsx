import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkEraserOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkEraserOffW100Filled'

      short_name='InkEraserOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M794-126 585-335 466-212H180l-48-48q-18-18-18.5-42t17.5-43l218-226-223-223 20-20 668 668-20 20ZM660-412 423-649l104-108q18-19 42-18.5t42 18.5l153 153q18 18 18.5 42.5T765-519L660-412Z"/>
    </Icon>
  );
});

IconMaterialInkEraserOffW100Filled.displayName = 'AmauiIconMaterialInkEraserOffW100Filled';

export default IconMaterialInkEraserOffW100Filled;
