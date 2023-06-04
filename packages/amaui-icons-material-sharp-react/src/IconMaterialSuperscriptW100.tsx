import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSuperscriptW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SuperscriptW100'

      short_name='Superscript'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.15 8.85v-2.7h3v-1.3h-3v-.7h3.7v2.7h-3v1.3h3v.7ZM7.375 19.025l4.05-6.3-3.7-5.75h.85l3.4 5.325 3.475-5.325h.825l-3.75 5.75 4.075 6.3h-.825l-3.8-5.875-3.75 5.875Z"/>
    </Icon>
  );
});

IconMaterialSuperscriptW100.displayName = 'AmauiIconMaterialSuperscriptW100';

export default IconMaterialSuperscriptW100;
