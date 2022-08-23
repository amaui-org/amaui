import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPublishRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublishRoundedW100Filled'
      short_name='Publish'

      {...props}
    >
      <path d="M12 18.7Q11.85 18.7 11.75 18.6Q11.65 18.5 11.65 18.35V9.9L9.65 11.9Q9.55 12 9.413 12.012Q9.275 12.025 9.15 11.9Q9.025 11.775 9.025 11.65Q9.025 11.525 9.15 11.4L11.475 9.075Q11.6 8.95 11.725 8.9Q11.85 8.85 12 8.85Q12.15 8.85 12.275 8.9Q12.4 8.95 12.525 9.075L14.85 11.4Q14.95 11.5 14.963 11.637Q14.975 11.775 14.85 11.9Q14.725 12.025 14.6 12.025Q14.475 12.025 14.35 11.9L12.35 9.9V18.35Q12.35 18.5 12.25 18.6Q12.15 18.7 12 18.7ZM5.65 8.55Q5.5 8.55 5.4 8.45Q5.3 8.35 5.3 8.2V6.35Q5.3 5.7 5.725 5.275Q6.15 4.85 6.8 4.85H17.2Q17.85 4.85 18.275 5.275Q18.7 5.7 18.7 6.35V8.2Q18.7 8.35 18.6 8.45Q18.5 8.55 18.35 8.55Q18.2 8.55 18.1 8.45Q18 8.35 18 8.2V6.35Q18 6.05 17.75 5.8Q17.5 5.55 17.2 5.55H6.8Q6.5 5.55 6.25 5.8Q6 6.05 6 6.35V8.2Q6 8.35 5.9 8.45Q5.8 8.55 5.65 8.55Z"/>
    </Icon>
  );
});

IconMaterialPublishRoundedW100Filled.displayName = 'AmauiIconMaterialPublishRoundedW100Filled';

export default IconMaterialPublishRoundedW100Filled;
