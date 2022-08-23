import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUmbrellaRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UmbrellaRoundedW100Filled'
      short_name='Umbrella'

      {...props}
    >
      <path d="M12 21.35Q11.875 21.35 11.8 21.3Q11.725 21.25 11.675 21.125L7.2 7.675Q7.125 7.45 7.287 7.275Q7.45 7.1 7.675 7.15L9.65 7.625L11.65 6.1V3.4Q11.65 2.675 12.188 2.162Q12.725 1.65 13.5 1.65Q14.275 1.65 14.812 2.175Q15.35 2.7 15.35 3.65Q15.35 3.8 15.25 3.9Q15.15 4 15 4Q14.85 4 14.75 3.9Q14.65 3.8 14.65 3.65Q14.65 3 14.35 2.637Q14.05 2.275 13.5 2.275Q13.025 2.275 12.688 2.612Q12.35 2.95 12.35 3.4V6.1L14.35 7.625L16.325 7.15Q16.55 7.1 16.7 7.275Q16.85 7.45 16.775 7.675L12.325 21.1Q12.275 21.225 12.2 21.288Q12.125 21.35 12 21.35ZM12.35 18.875 15.925 7.925 14.2 8.375 12.35 7ZM11.65 18.875V7L9.8 8.4L8.025 7.9Z"/>
    </Icon>
  );
});

IconMaterialUmbrellaRoundedW100Filled.displayName = 'AmauiIconMaterialUmbrellaRoundedW100Filled';

export default IconMaterialUmbrellaRoundedW100Filled;
