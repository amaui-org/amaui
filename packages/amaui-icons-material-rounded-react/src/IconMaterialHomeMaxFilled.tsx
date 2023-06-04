import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeMaxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMaxFilled'

      short_name='HomeMax'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 19q-.425 0-.713-.288Q7 18.425 7 18H5q-1.65 0-2.825-1.175Q1 15.65 1 14V9q0-1.65 1.175-2.825Q3.35 5 5 5h14q1.65 0 2.825 1.175Q23 7.35 23 9v5q0 1.65-1.175 2.825Q20.65 18 19 18h-2q0 .425-.288.712Q16.425 19 16 19Z"/>
    </Icon>
  );
});

IconMaterialHomeMaxFilled.displayName = 'AmauiIconMaterialHomeMaxFilled';

export default IconMaterialHomeMaxFilled;
