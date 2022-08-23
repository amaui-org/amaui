import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeselectRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeselectRoundedFilled'
      short_name='Deselect'

      {...props}
    >
      <path d="M3 13V11H5V13ZM7 21V19H9V21ZM11 5V3H13V5ZM19 5V3Q19.825 3 20.413 3.587Q21 4.175 21 5ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19H5ZM3 17V15H5V17ZM11 21V19H13V21ZM19 13V11H21V13ZM19 9V7H21V9ZM15 5V3H17V5ZM9 3V5H7.825L7 4.175V3ZM21 15V17H19.825L19 16.175V15ZM9 15H12.175L9 11.825ZM15 21V19H17V21ZM17 14.175 15 12.175V9H11.825L9.825 7H16Q16.425 7 16.712 7.287Q17 7.575 17 8ZM3 9V7H5V9ZM19.075 21.9 14.175 17H8Q7.575 17 7.287 16.712Q7 16.425 7 16V9.825L2.1 4.925Q1.825 4.65 1.825 4.237Q1.825 3.825 2.1 3.525Q2.4 3.225 2.812 3.225Q3.225 3.225 3.525 3.525L20.5 20.5Q20.8 20.8 20.788 21.2Q20.775 21.6 20.475 21.9Q20.175 22.175 19.775 22.188Q19.375 22.2 19.075 21.9Z"/>
    </Icon>
  );
});

IconMaterialDeselectRoundedFilled.displayName = 'AmauiIconMaterialDeselectRoundedFilled';

export default IconMaterialDeselectRoundedFilled;
