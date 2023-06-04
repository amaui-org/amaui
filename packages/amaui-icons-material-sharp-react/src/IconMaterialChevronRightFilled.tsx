import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChevronRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronRightFilled'

      short_name='ChevronRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.4 18 8 16.6l4.6-4.6L8 7.4 9.4 6l6 6Z"/>
    </Icon>
  );
});

IconMaterialChevronRightFilled.displayName = 'AmauiIconMaterialChevronRightFilled';

export default IconMaterialChevronRightFilled;
