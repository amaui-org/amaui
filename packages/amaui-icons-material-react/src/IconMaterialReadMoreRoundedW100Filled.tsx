import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReadMoreRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReadMoreRoundedW100Filled'
      short_name='ReadMore'

      {...props}
    >
      <path d="M9.975 12.35H2.35Q2.2 12.35 2.1 12.25Q2 12.15 2 12Q2 11.85 2.1 11.75Q2.2 11.65 2.35 11.65H9.975L6.55 8.2Q6.45 8.1 6.45 7.95Q6.45 7.8 6.55 7.7Q6.65 7.6 6.8 7.6Q6.95 7.6 7.05 7.7L10.8 11.475Q11.025 11.7 11.025 12Q11.025 12.3 10.8 12.525L7.05 16.3Q6.95 16.4 6.8 16.4Q6.65 16.4 6.55 16.3Q6.45 16.2 6.45 16.05Q6.45 15.9 6.55 15.8ZM13.35 8.35Q13.2 8.35 13.1 8.25Q13 8.15 13 8Q13 7.85 13.1 7.75Q13.2 7.65 13.35 7.65H20.35Q20.5 7.65 20.6 7.75Q20.7 7.85 20.7 8Q20.7 8.15 20.6 8.25Q20.5 8.35 20.35 8.35ZM13.35 16.35Q13.2 16.35 13.1 16.25Q13 16.15 13 16Q13 15.85 13.1 15.75Q13.2 15.65 13.35 15.65H20.35Q20.5 15.65 20.6 15.75Q20.7 15.85 20.7 16Q20.7 16.15 20.6 16.25Q20.5 16.35 20.35 16.35ZM16.35 12.35Q16.2 12.35 16.1 12.25Q16 12.15 16 12Q16 11.85 16.1 11.75Q16.2 11.65 16.35 11.65H20.35Q20.5 11.65 20.6 11.75Q20.7 11.85 20.7 12Q20.7 12.15 20.6 12.25Q20.5 12.35 20.35 12.35Z"/>
    </Icon>
  );
});

IconMaterialReadMoreRoundedW100Filled.displayName = 'AmauiIconMaterialReadMoreRoundedW100Filled';

export default IconMaterialReadMoreRoundedW100Filled;
