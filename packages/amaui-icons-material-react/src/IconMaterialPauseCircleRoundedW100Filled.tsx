import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPauseCircleRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseCircleRoundedW100Filled'
      short_name='PauseCircle'

      {...props}
    >
      <path d="M10.4 15.35Q10.55 15.35 10.65 15.25Q10.75 15.15 10.75 15V8.975Q10.75 8.85 10.65 8.75Q10.55 8.65 10.4 8.65Q10.25 8.65 10.15 8.75Q10.05 8.85 10.05 9V15.025Q10.05 15.15 10.15 15.25Q10.25 15.35 10.4 15.35ZM13.6 15.35Q13.75 15.35 13.85 15.25Q13.95 15.15 13.95 15V8.975Q13.95 8.85 13.85 8.75Q13.75 8.65 13.6 8.65Q13.45 8.65 13.35 8.75Q13.25 8.85 13.25 9V15.025Q13.25 15.15 13.35 15.25Q13.45 15.35 13.6 15.35ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialPauseCircleRoundedW100Filled.displayName = 'AmauiIconMaterialPauseCircleRoundedW100Filled';

export default IconMaterialPauseCircleRoundedW100Filled;
