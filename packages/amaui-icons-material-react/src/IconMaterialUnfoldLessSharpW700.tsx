import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUnfoldLessSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldLessSharpW700'
      short_name='UnfoldLess'

      {...props}
    >
      <path d="M12 10.7 6.7 5.4 8.9 3.2 12 6.3 15.1 3.2 17.3 5.4ZM8.9 20.8 6.7 18.6 12 13.3 17.3 18.6 15.1 20.8 12 17.7Z"/>
    </Icon>
  )
});

export default IconMaterialUnfoldLessSharpW700;
