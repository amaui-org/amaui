import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGridOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridOffRounded'
      short_name='GridOff'

      {...props}
    >
      <path d="M22 19.15 20 17.15V16H18.85L16.85 14H20V10H16V13.15L14 11.15V10H12.85L10.85 8H14V4H10V7.15L8 5.15V4H6.85L4.85 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4ZM16 8H20V4Q20 4 20 4Q20 4 20 4H16ZM19.8 22.625 19.15 22H4Q3.175 22 2.588 21.413Q2 20.825 2 20V4.8L1.4 4.2Q1.125 3.925 1.125 3.5Q1.125 3.075 1.4 2.8Q1.675 2.525 2.1 2.525Q2.525 2.525 2.8 2.8L21.2 21.2Q21.475 21.475 21.475 21.9Q21.475 22.325 21.175 22.625Q20.9 22.9 20.5 22.9Q20.1 22.9 19.8 22.625ZM16 20H17.15L16 18.8ZM10 14H11.15L10 12.8ZM10 20H14V16.8L13.15 16H10ZM4 8H5.15L4 6.8ZM4 14H8V10.8L7.15 10H4ZM8 20V16H4V20Q4 20 4 20Q4 20 4 20Z"/>
    </Icon>
  );
});

IconMaterialGridOffRounded.displayName = 'AmauiIconMaterialGridOffRounded';

export default IconMaterialGridOffRounded;
