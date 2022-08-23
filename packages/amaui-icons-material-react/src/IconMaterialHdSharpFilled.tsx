import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHdSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdSharpFilled'
      short_name='Hd'

      {...props}
    >
      <path d="M6 15H7.5V13H9.5V15H11V9H9.5V11.5H7.5V9H6ZM13 15H17Q17.425 15 17.712 14.712Q18 14.425 18 14V10Q18 9.575 17.712 9.287Q17.425 9 17 9H13ZM14.5 13.5V10.5H16.5Q16.5 10.5 16.5 10.5Q16.5 10.5 16.5 10.5V13.5Q16.5 13.5 16.5 13.5Q16.5 13.5 16.5 13.5ZM2 20V4H22V20Z"/>
    </Icon>
  );
});

IconMaterialHdSharpFilled.displayName = 'AmauiIconMaterialHdSharpFilled';

export default IconMaterialHdSharpFilled;
