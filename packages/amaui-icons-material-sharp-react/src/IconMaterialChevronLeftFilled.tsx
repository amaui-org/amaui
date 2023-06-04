import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChevronLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronLeftFilled'

      short_name='ChevronLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14 18-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6Z"/>
    </Icon>
  );
});

IconMaterialChevronLeftFilled.displayName = 'AmauiIconMaterialChevronLeftFilled';

export default IconMaterialChevronLeftFilled;
