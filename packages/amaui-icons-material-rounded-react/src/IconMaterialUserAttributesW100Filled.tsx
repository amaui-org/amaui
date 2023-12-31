import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUserAttributesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UserAttributesW100Filled'

      short_name='UserAttributes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M579-694v-28h268v28H579Zm0 148v-28h268v28H579Zm0 148v-28h268v28H579Zm-265.765-22Q280-420 256.5-443.265q-23.5-23.264-23.5-56.5Q233-533 256.265-556.5q23.264-23.5 56.5-23.5Q346-580 369.5-556.735q23.5 23.264 23.5 56.5Q393-467 369.735-443.5q-23.264 23.5-56.5 23.5ZM113-220v-36q0-10.678 5.5-20.339Q124-286 133-292q41-23 85.71-35.5Q263.42-340 313-340q49.58 0 94.29 12.5Q452-315 493-292q9 6 14.5 15.661T513-256v36H113Z"/>
    </Icon>
  );
});

IconMaterialUserAttributesW100Filled.displayName = 'AmauiIconMaterialUserAttributesW100Filled';

export default IconMaterialUserAttributesW100Filled;
