import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIceSkatingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IceSkatingW100'

      short_name='IceSkating'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 21.35v-.7h4v-3.3h-3V3.65h7.7V7.5q0 .875.525 1.6.525.725 1.425.975l5.05 1.4v5.875h-3v3.3H18q1.5 0 2.475-.75.975-.75 1.175-2.25h.7q-.2 1.8-1.375 2.75T18 21.35ZM8.15 6.5q0-.15.1-.25t.25-.1h2.15v-1.8h-6.3v12.3h13.3v-4.625l-4.575-1.3q-.75-.225-1.312-.688-.563-.462-.838-1.187H8.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.225q-.05-.275-.062-.588-.013-.312-.013-.712H8.5q-.15 0-.25-.1t-.1-.25Zm-.8 14.15h7.3v-3.3h-7.3Zm-3-4Z"/>
    </Icon>
  );
});

IconMaterialIceSkatingW100.displayName = 'AmauiIconMaterialIceSkatingW100';

export default IconMaterialIceSkatingW100;
