import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBeenhereSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeenhereSharpFilled'
      short_name='Beenhere'

      {...props}
    >
      <path d="M12 23 4 17V2H20V17ZM10.95 15 16.6 9.35 15.2 7.9 10.95 12.15 8.85 10.05 7.4 11.45Z"/>
    </Icon>
  );
});

export default IconMaterialBeenhereSharpFilled;
