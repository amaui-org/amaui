import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUserAttributesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UserAttributesW100'

      short_name='UserAttributes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M579-694v-28h268v28H579Zm0 148v-28h268v28H579Zm0 148v-28h268v28H579Zm-265.765-22Q280-420 256.5-443.265q-23.5-23.264-23.5-56.5Q233-533 256.265-556.5q23.264-23.5 56.5-23.5Q346-580 369.5-556.735q23.5 23.264 23.5 56.5Q393-467 369.735-443.5q-23.264 23.5-56.5 23.5ZM113-220v-36q0-10.678 5.5-20.339Q124-286 133-292q41-23 85.71-35.5Q263.42-340 313-340q49.58 0 94.29 12.5Q452-315 493-292q9 6 14.5 15.661T513-256v36H113Zm28-44v16h344v-16q-41-23-84.5-35.5T313-312q-44 0-87.5 12.5T141-264Zm172-184q21 0 36.5-15.5T365-500q0-21-15.5-36.5T313-552q-21 0-36.5 15.5T261-500q0 21 15.5 36.5T313-448Zm0-52Zm0 252Z"/>
    </Icon>
  );
});

IconMaterialUserAttributesW100.displayName = 'AmauiIconMaterialUserAttributesW100';

export default IconMaterialUserAttributesW100;
