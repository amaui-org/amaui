import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUmbrellaSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UmbrellaSharpW100Filled'
      short_name='Umbrella'

      {...props}
    >
      <path d="M12 21.35Q11.875 21.35 11.8 21.3Q11.725 21.25 11.675 21.125L6.975 6.975L9.65 7.625L11.65 6.1V3.4Q11.65 2.675 12.188 2.162Q12.725 1.65 13.5 1.65Q14.275 1.65 14.812 2.162Q15.35 2.675 15.35 3.4V4H14.65V3.4Q14.65 2.9 14.312 2.587Q13.975 2.275 13.5 2.275Q13.025 2.275 12.688 2.612Q12.35 2.95 12.35 3.4V6.1L14.35 7.625L17.025 6.975L12.325 21.1Q12.275 21.225 12.2 21.288Q12.125 21.35 12 21.35ZM12.35 18.875 15.925 7.925 14.2 8.375 12.35 7ZM11.65 18.875V7L9.8 8.4L8.025 7.9Z"/>
    </Icon>
  );
});

IconMaterialUmbrellaSharpW100Filled.displayName = 'AmauiIconMaterialUmbrellaSharpW100Filled';

export default IconMaterialUmbrellaSharpW100Filled;
