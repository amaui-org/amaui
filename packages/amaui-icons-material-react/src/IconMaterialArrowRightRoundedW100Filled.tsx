import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowRightRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightRoundedW100Filled'
      short_name='ArrowRight'

      {...props}
    >
      <path d="M11.925 14.175Q11.575 14.525 11.113 14.337Q10.65 14.15 10.65 13.65V10.35Q10.65 9.85 11.113 9.662Q11.575 9.475 11.925 9.825L13.575 11.475Q13.7 11.6 13.75 11.725Q13.8 11.85 13.8 12Q13.8 12.15 13.75 12.275Q13.7 12.4 13.575 12.525Z"/>
    </Icon>
  );
});

IconMaterialArrowRightRoundedW100Filled.displayName = 'AmauiIconMaterialArrowRightRoundedW100Filled';

export default IconMaterialArrowRightRoundedW100Filled;
