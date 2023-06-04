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
      <path d="M11.7 15.3q-.475.475-1.087.212Q10 15.25 10 14.575v-5.15q0-.675.613-.937.612-.263 1.087.212l2.6 2.6q.15.15.225.325.075.175.075.375t-.075.375q-.075.175-.225.325Z"/>
    </Icon>
  );
});

IconMaterialArrowRightFilled.displayName = 'AmauiIconMaterialArrowRightFilled';

export default IconMaterialArrowRightFilled;
