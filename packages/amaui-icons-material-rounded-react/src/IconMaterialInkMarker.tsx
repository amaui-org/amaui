import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkMarker = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkMarker'

      short_name='InkMarker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m272-104-38-38-42 42q-19 19-46.5 19.5T100-100q-19-19-19-46t19-46l42-42-38-40 554-554q12-12 29-12t29 12l112 112q12 12 12 29t-12 29L272-104Zm172-396L216-274l58 58 226-228-56-56Z"/>
    </Icon>
  );
});

IconMaterialInkMarker.displayName = 'AmauiIconMaterialInkMarker';

export default IconMaterialInkMarker;
