import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStethoscopeArrow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StethoscopeArrow'

      short_name='StethoscopeArrow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18 21-1.4-1.4 1.575-1.6H14v-2h4.175L16.6 14.4 18 13l4 4Zm-4.5 1q-2.7 0-4.6-1.9Q7 18.2 7 15.5v-.575q-2.15-.35-3.575-2.013Q2 11.25 2 9V3h3V2h2v4H5V5H4v4q0 1.65 1.175 2.825Q6.35 13 8 13q1.65 0 2.825-1.175Q12 10.65 12 9V5h-1v1H9V2h2v1h3v6q0 2.25-1.425 3.912Q11.15 14.575 9 14.925v.575q0 1.875 1.312 3.188Q11.625 20 13.5 20Z"/>
    </Icon>
  );
});

IconMaterialStethoscopeArrow.displayName = 'AmauiIconMaterialStethoscopeArrow';

export default IconMaterialStethoscopeArrow;
