import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUnfoldLessSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldLessSharp'
      short_name='UnfoldLess'

      {...props}
    >
      <path d="M12 9.9 7.5 5.4 8.9 4 12 7.1 15.1 4 16.5 5.4ZM8.9 20 7.5 18.6 12 14.1 16.5 18.6 15.1 20 12 16.9Z"/>
    </Icon>
  );
});

export default IconMaterialUnfoldLessSharp;
