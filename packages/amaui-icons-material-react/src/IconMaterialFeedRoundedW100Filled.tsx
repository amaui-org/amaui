import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFeedRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeedRoundedW100Filled'
      short_name='Feed'

      {...props}
    >
      <path d="M5 19.7Q4.7 19.7 4.5 19.5Q4.3 19.3 4.3 19V5Q4.3 4.7 4.5 4.5Q4.7 4.3 5 4.3H15.45L19.7 8.55V19Q19.7 19.3 19.5 19.5Q19.3 19.7 19 19.7ZM8 15.7H16Q16.15 15.7 16.25 15.6Q16.35 15.5 16.35 15.35Q16.35 15.2 16.25 15.1Q16.15 15 16 15H8Q7.85 15 7.75 15.1Q7.65 15.2 7.65 15.35Q7.65 15.5 7.75 15.6Q7.85 15.7 8 15.7ZM8 9H11.65Q11.8 9 11.9 8.9Q12 8.8 12 8.65Q12 8.5 11.9 8.4Q11.8 8.3 11.65 8.3H8Q7.85 8.3 7.75 8.4Q7.65 8.5 7.65 8.65Q7.65 8.8 7.75 8.9Q7.85 9 8 9ZM8 12.35H16Q16.15 12.35 16.25 12.25Q16.35 12.15 16.35 12Q16.35 11.85 16.25 11.75Q16.15 11.65 16 11.65H8Q7.85 11.65 7.75 11.75Q7.65 11.85 7.65 12Q7.65 12.15 7.75 12.25Q7.85 12.35 8 12.35ZM15.75 9H19L15 5V8.25Q15 8.575 15.213 8.787Q15.425 9 15.75 9Z"/>
    </Icon>
  );
});

IconMaterialFeedRoundedW100Filled.displayName = 'AmauiIconMaterialFeedRoundedW100Filled';

export default IconMaterialFeedRoundedW100Filled;
