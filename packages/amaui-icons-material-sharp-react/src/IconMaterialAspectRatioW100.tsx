import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAspectRatioW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AspectRatioW100'

      short_name='AspectRatio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 11.35h.7v-3h3v-.7h-3.7Zm9 5h3.7v-3.7h-.7v3h-3Zm6.05 2.35H3.3V5.3h17.4ZM4 18V6Zm0 0h16V6H4Z"/>
    </Icon>
  );
});

IconMaterialAspectRatioW100.displayName = 'AmauiIconMaterialAspectRatioW100';

export default IconMaterialAspectRatioW100;
