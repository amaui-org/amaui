import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRangeHoodTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RangeHoodTwoTone'
      short_name='RangeHood'

      {...props}
    >
      <path d="m1.775 11.675 4.525-4.7v-4.7h11.425v4.7l4.525 4.7Zm2.55 9.025q-1.25 0-2.137-.888-.888-.887-.888-2.137V13.55h21.425v4.125q0 1.25-.9 2.137-.9.888-2.125.888Zm4.225-4.2h6.925v-1.75H8.55Z"/>
    </Icon>
  )
});

export default IconMaterialRangeHoodTwoTone;
