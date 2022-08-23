import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLegendToggleRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LegendToggleRoundedW100Filled'
      short_name='LegendToggle'

      {...props}
    >
      <path d="M9.95 6.925 5.175 9.825Q5 9.95 4.825 9.837Q4.65 9.725 4.65 9.525Q4.65 9.425 4.7 9.337Q4.75 9.25 4.825 9.2L9.975 6.075L15 9.65L18.8 6.95Q18.975 6.825 19.163 6.925Q19.35 7.025 19.35 7.225Q19.35 7.325 19.312 7.4Q19.275 7.475 19.2 7.525L15 10.5ZM5 14.35Q4.85 14.35 4.75 14.25Q4.65 14.15 4.65 14Q4.65 13.85 4.75 13.75Q4.85 13.65 5 13.65H19Q19.15 13.65 19.25 13.75Q19.35 13.85 19.35 14Q19.35 14.15 19.25 14.25Q19.15 14.35 19 14.35ZM5 18.05Q4.85 18.05 4.75 17.95Q4.65 17.85 4.65 17.7Q4.65 17.55 4.75 17.45Q4.85 17.35 5 17.35H19Q19.15 17.35 19.25 17.45Q19.35 17.55 19.35 17.7Q19.35 17.85 19.25 17.95Q19.15 18.05 19 18.05Z"/>
    </Icon>
  );
});

IconMaterialLegendToggleRoundedW100Filled.displayName = 'AmauiIconMaterialLegendToggleRoundedW100Filled';

export default IconMaterialLegendToggleRoundedW100Filled;
