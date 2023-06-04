import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightFilled'

      short_name='ArrowRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 17V7l5 5Z"/>
    </Icon>
  );
});

IconMaterialArrowRightFilled.displayName = 'AmauiIconMaterialArrowRightFilled';

export default IconMaterialArrowRightFilled;
