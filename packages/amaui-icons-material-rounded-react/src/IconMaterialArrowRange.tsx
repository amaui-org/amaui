import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowRange = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRange'

      short_name='ArrowRange'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m233 616 75 76q11 11 11.5 27.5T308 748q-11 11-28 11t-28-11L108 604q-12-12-12-28t12-28l144-144q12-12 28-11.5t28 12.5q11 12 11.5 28T308 461l-75 75h493l-75-75q-12-12-12-28.5t12-28.5q12-12 28.5-12t28.5 12l144 144q12 12 12 28t-12 28L708 748q-11 11-27.5 11.5T652 748q-12-12-12.5-28.5T651 691l75-75H233Z"/>
    </Icon>
  );
});

IconMaterialArrowRange.displayName = 'AmauiIconMaterialArrowRange';

export default IconMaterialArrowRange;
