import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfoldLessFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldLessFilled'

      short_name='UnfoldLess'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.9 20-1.4-1.4 4.5-4.5 4.5 4.5-1.4 1.4-3.1-3.1ZM12 9.9 7.5 5.4 8.9 4 12 7.1 15.1 4l1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialUnfoldLessFilled.displayName = 'AmauiIconMaterialUnfoldLessFilled';

export default IconMaterialUnfoldLessFilled;
