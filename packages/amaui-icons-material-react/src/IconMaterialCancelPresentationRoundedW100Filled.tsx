import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCancelPresentationRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelPresentationRoundedW100Filled'
      short_name='CancelPresentation'

      {...props}
    >
      <path d="M9.15 14.85Q9.275 14.975 9.4 14.975Q9.525 14.975 9.65 14.85L12 12.5L14.375 14.875Q14.475 14.975 14.6 14.975Q14.725 14.975 14.85 14.85Q14.975 14.725 14.975 14.6Q14.975 14.475 14.85 14.35L12.5 12L14.875 9.625Q14.975 9.525 14.975 9.4Q14.975 9.275 14.85 9.15Q14.725 9.025 14.6 9.025Q14.475 9.025 14.35 9.15L12 11.5L9.625 9.125Q9.525 9.025 9.4 9.025Q9.275 9.025 9.15 9.15Q9.025 9.275 9.025 9.4Q9.025 9.525 9.15 9.65L11.5 12L9.125 14.375Q9.025 14.475 9.025 14.6Q9.025 14.725 9.15 14.85ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialCancelPresentationRoundedW100Filled.displayName = 'AmauiIconMaterialCancelPresentationRoundedW100Filled';

export default IconMaterialCancelPresentationRoundedW100Filled;
