import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhonelinkOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkOffSharp'
      short_name='PhonelinkOff'

      {...props}
    >
      <path d="M8.85 6 6.85 4H21V6ZM22 19.15 20 17.15V10H16V13.15L14 11.15V8H22ZM19.8 22.6 17.15 20H14V16.8L6 8.8V17H12V20H2V17H4V6.8L1.4 4.2L2.8 2.8L21.2 21.2Z"/>
    </Icon>
  )
});

export default IconMaterialPhonelinkOffSharp;
