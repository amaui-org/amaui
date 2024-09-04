import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatTextdirectionVerticalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextdirectionVerticalFilled'

      short_name='FormatTextdirectionVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240v-200q-66 0-113-47T80-600q0-66 47-113t113-47h320v80h-80v440h-80v-440h-80v440h-80Zm480 80L560-320l56-56 64 63v-447h80v447l64-64 56 57-160 160Z"/>
    </Icon>
  );
});

IconMaterialFormatTextdirectionVerticalFilled.displayName = 'AmauiIconMaterialFormatTextdirectionVerticalFilled';

export default IconMaterialFormatTextdirectionVerticalFilled;
