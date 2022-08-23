import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowLeftRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowLeftRoundedW100'
      short_name='ArrowLeft'

      {...props}
    >
      <path d="M12.075 14.175 10.425 12.525Q10.3 12.4 10.25 12.275Q10.2 12.15 10.2 12Q10.2 11.85 10.25 11.725Q10.3 11.6 10.425 11.475L12.075 9.825Q12.425 9.475 12.888 9.662Q13.35 9.85 13.35 10.35V13.65Q13.35 14.15 12.888 14.337Q12.425 14.525 12.075 14.175Z"/>
    </Icon>
  );
});

IconMaterialArrowLeftRoundedW100.displayName = 'AmauiIconMaterialArrowLeftRoundedW100';

export default IconMaterialArrowLeftRoundedW100;
