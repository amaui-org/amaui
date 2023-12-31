import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkMarkerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkMarkerFilled'

      short_name='InkMarker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m272-104-38-38-90 90-90-94 88-88-38-40 583-583 170 170-585 583Zm172-396L216-274l58 58 226-228-56-56Z"/>
    </Icon>
  );
});

IconMaterialInkMarkerFilled.displayName = 'AmauiIconMaterialInkMarkerFilled';

export default IconMaterialInkMarkerFilled;
