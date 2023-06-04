import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChevronLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronLeft'

      short_name='ChevronLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14 18-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6Z"/>
    </Icon>
  );
});

IconMaterialChevronLeft.displayName = 'AmauiIconMaterialChevronLeft';

export default IconMaterialChevronLeft;
