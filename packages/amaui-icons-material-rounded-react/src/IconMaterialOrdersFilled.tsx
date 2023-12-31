import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOrdersFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OrdersFilled'

      short_name='Orders'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240v-436L98-810q-7-15-1-30.5t21-22.5q15-7 30.5-1.5T171-844l77 166h464l77-166q7-15 22.5-21t30.5 2q15 7 21 22.5t-1 30.5l-62 134v436q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Zm240-200h160q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520H400q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440Z"/>
    </Icon>
  );
});

IconMaterialOrdersFilled.displayName = 'AmauiIconMaterialOrdersFilled';

export default IconMaterialOrdersFilled;
