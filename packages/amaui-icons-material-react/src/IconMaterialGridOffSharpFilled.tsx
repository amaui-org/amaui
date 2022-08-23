import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGridOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridOffSharpFilled'
      short_name='GridOff'

      {...props}
    >
      <path d="M22 19.15 20 17.15V16H18.85L16.85 14H20V10H16V13.15L14 11.15V10H12.85L10.85 8H14V4H10V7.15L8 5.15V4H6.85L4.85 2H22ZM16 8H20V4H16ZM20.5 23.3 19.15 22H2V4.8L0.7 3.5L2.1 2.1L21.9 21.9ZM16 20H17.15L16 18.8ZM10 14H11.15L10 12.8ZM10 20H14V16.8L13.15 16H10ZM4 8H5.15L4 6.8ZM4 14H8V10.8L7.15 10H4ZM4 20H8V16H4Z"/>
    </Icon>
  );
});

IconMaterialGridOffSharpFilled.displayName = 'AmauiIconMaterialGridOffSharpFilled';

export default IconMaterialGridOffSharpFilled;
