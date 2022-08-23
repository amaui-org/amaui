import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPausePresentationRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PausePresentationRoundedW100Filled'
      short_name='PausePresentation'

      {...props}
    >
      <path d="M10.4 15.35Q10.55 15.35 10.65 15.25Q10.75 15.15 10.75 15V9Q10.75 8.85 10.65 8.75Q10.55 8.65 10.4 8.65Q10.25 8.65 10.15 8.75Q10.05 8.85 10.05 9V15Q10.05 15.15 10.15 15.25Q10.25 15.35 10.4 15.35ZM13.6 15.35Q13.75 15.35 13.85 15.25Q13.95 15.15 13.95 15V9Q13.95 8.85 13.85 8.75Q13.75 8.65 13.6 8.65Q13.45 8.65 13.35 8.75Q13.25 8.85 13.25 9V15Q13.25 15.15 13.35 15.25Q13.45 15.35 13.6 15.35ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialPausePresentationRoundedW100Filled.displayName = 'AmauiIconMaterialPausePresentationRoundedW100Filled';

export default IconMaterialPausePresentationRoundedW100Filled;
