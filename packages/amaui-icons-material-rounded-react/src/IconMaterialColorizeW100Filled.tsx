import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialColorizeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ColorizeW100Filled'

      short_name='Colorize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.2 19.7q-.325 0-.538-.213-.212-.212-.212-.537V17.1q0-.15.05-.275.05-.125.175-.25L13 8.25l-1.65-1.6q-.1-.1-.1-.25t.1-.25q.125-.125.25-.125t.25.125L14 8.25l3.5-3.5q.15-.15.375-.15t.375.15L19.4 5.9q.15.15.15.375t-.15.375l-3.55 3.55L18 12.35q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125l-1.65-1.65-8.275 8.275q-.125.125-.25.175-.125.05-.275.05Zm-.05-.7H7.1l8.3-8.35-1.9-1.9-8.35 8.3Z"/>
    </Icon>
  );
});

IconMaterialColorizeW100Filled.displayName = 'AmauiIconMaterialColorizeW100Filled';

export default IconMaterialColorizeW100Filled;
