import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfoldLess = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldLess'

      short_name='UnfoldLess'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.9 20-1.4-1.4 4.5-4.5 4.5 4.5-1.4 1.4-3.1-3.1ZM12 9.9 7.5 5.4 8.9 4 12 7.1 15.1 4l1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialUnfoldLess.displayName = 'AmauiIconMaterialUnfoldLess';

export default IconMaterialUnfoldLess;
