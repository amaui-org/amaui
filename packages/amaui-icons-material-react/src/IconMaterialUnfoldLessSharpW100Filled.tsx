import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUnfoldLessSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldLessSharpW100Filled'
      short_name='UnfoldLess'

      {...props}
    >
      <path d="M12 9 8.4 5.4 8.9 4.9 12 8 15.1 4.9 15.6 5.4ZM8.9 19.1 8.4 18.6 12 15 15.6 18.6 15.1 19.1 12 16Z"/>
    </Icon>
  );
});

export default IconMaterialUnfoldLessSharpW100Filled;
