import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBusinessMessagesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessMessagesFilled'

      short_name='BusinessMessages'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160v-450L40-800h840v640H200Zm340-100 56-56-44-44h168v-80H360l180 180ZM360-520h360L540-700l-56 56 44 44H360v80Z"/>
    </Icon>
  );
});

IconMaterialBusinessMessagesFilled.displayName = 'AmauiIconMaterialBusinessMessagesFilled';

export default IconMaterialBusinessMessagesFilled;
