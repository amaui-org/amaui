import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWbAutoSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbAutoSharpFilled'
      short_name='WbAuto'

      {...props}
    >
      <path d="M4.825 15H6.025L6.675 13.2H9.475L10.125 15H11.325L8.725 8H7.425ZM7.025 12.2 8.025 9.3H8.125L9.125 12.2ZM8.075 19Q5.15 19 3.113 16.962Q1.075 14.925 1.075 12Q1.075 9.075 3.113 7.037Q5.15 5 8.075 5Q9.95 5 11.538 5.925Q13.125 6.85 14.075 8.45L13.975 8H15.175L16.375 13.1H16.425L17.875 8H18.975L20.425 13.1H20.525L21.725 8H22.925L21.075 15H19.925L18.425 9.75H18.375L16.925 15H15.775L15.075 12.1Q15.075 14.975 13.025 16.988Q10.975 19 8.075 19Z"/>
    </Icon>
  );
});

IconMaterialWbAutoSharpFilled.displayName = 'AmauiIconMaterialWbAutoSharpFilled';

export default IconMaterialWbAutoSharpFilled;
