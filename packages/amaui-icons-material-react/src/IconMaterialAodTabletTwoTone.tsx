import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAodTabletTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodTabletTwoTone'
      short_name='AodTablet'

      {...props}
    >
      <path d="M7.5 12V9.475h9.025V12Zm1 3v-2.525h7.025V15Zm-5 5.625q-1.25 0-2.137-.887Q.475 18.85.475 17.6V6.4q0-1.25.888-2.138.887-.887 2.137-.887h17q1.25 0 2.138.887.887.888.887 2.138v11.2q0 1.25-.887 2.138-.888.887-2.138.887ZM6.425 17.6h11.15V6.4H6.425Z"/>
    </Icon>
  )
});

export default IconMaterialAodTabletTwoTone;
