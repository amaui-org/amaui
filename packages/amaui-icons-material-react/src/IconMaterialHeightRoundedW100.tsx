import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeightRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeightRoundedW100'
      short_name='Height'

      {...props}
    >
      <path d="M12 19.8Q11.85 19.8 11.725 19.75Q11.6 19.7 11.475 19.575L9.15 17.25Q9.025 17.125 9.025 16.988Q9.025 16.85 9.15 16.725Q9.25 16.6 9.4 16.6Q9.55 16.6 9.675 16.725L11.65 18.7V5.3L9.65 7.3Q9.55 7.4 9.413 7.4Q9.275 7.4 9.15 7.275Q9.05 7.15 9.05 7Q9.05 6.85 9.175 6.725L11.475 4.425Q11.6 4.3 11.725 4.25Q11.85 4.2 12 4.2Q12.15 4.2 12.275 4.25Q12.4 4.3 12.525 4.425L14.85 6.75Q14.975 6.875 14.975 7.012Q14.975 7.15 14.85 7.275Q14.75 7.4 14.6 7.4Q14.45 7.4 14.325 7.275L12.35 5.3V18.7L14.35 16.7Q14.45 16.6 14.588 16.6Q14.725 16.6 14.85 16.725Q14.95 16.85 14.95 17Q14.95 17.15 14.825 17.275L12.525 19.575Q12.4 19.7 12.275 19.75Q12.15 19.8 12 19.8Z"/>
    </Icon>
  );
});

IconMaterialHeightRoundedW100.displayName = 'AmauiIconMaterialHeightRoundedW100';

export default IconMaterialHeightRoundedW100;
