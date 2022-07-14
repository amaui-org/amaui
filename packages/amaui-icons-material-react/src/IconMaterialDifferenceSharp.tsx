import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDifferenceSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DifferenceSharp'
      short_name='Difference'

      {...props}
    >
      <path d="M12.5 11H14.5V9H16.5V7H14.5V5H12.5V7H10.5V9H12.5ZM10.5 15H16.5V13H10.5ZM6 19V1H15L21 7V19ZM8 17H19V8L14 3H8ZM2 23V7H4V21H15V23ZM8 17V3V8V17Z"/>
    </Icon>
  );
});

export default IconMaterialDifferenceSharp;
