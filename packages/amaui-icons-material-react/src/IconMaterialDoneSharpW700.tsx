import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoneSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneSharpW700'
      short_name='Done'

      {...props}
    >
      <path d="M9.55 18.8 3.05 12.3 5.3 10.05 9.55 14.3 18.7 5.15 20.95 7.4Z"/>
    </Icon>
  )
});

export default IconMaterialDoneSharpW700;
