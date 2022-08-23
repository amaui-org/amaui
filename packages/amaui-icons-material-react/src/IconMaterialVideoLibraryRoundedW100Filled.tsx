import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoLibraryRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLibraryRoundedW100Filled'
      short_name='VideoLibrary'

      {...props}
    >
      <path d="M12.65 12.55 15.675 10.625Q16.025 10.4 16.025 10Q16.025 9.6 15.675 9.375L12.65 7.45Q12.275 7.2 11.887 7.412Q11.5 7.625 11.5 8.075V11.925Q11.5 12.375 11.887 12.587Q12.275 12.8 12.65 12.55ZM8.15 16.7Q7.5 16.7 7.075 16.275Q6.65 15.85 6.65 15.2V4.8Q6.65 4.15 7.075 3.725Q7.5 3.3 8.15 3.3H18.55Q19.2 3.3 19.625 3.725Q20.05 4.15 20.05 4.8V15.2Q20.05 15.85 19.625 16.275Q19.2 16.7 18.55 16.7ZM5.45 19.4Q4.8 19.4 4.375 18.975Q3.95 18.55 3.95 17.9V7.15Q3.95 7 4.05 6.9Q4.15 6.8 4.3 6.8Q4.45 6.8 4.55 6.9Q4.65 7 4.65 7.15V17.9Q4.65 18.25 4.875 18.475Q5.1 18.7 5.45 18.7H16.2Q16.35 18.7 16.45 18.8Q16.55 18.9 16.55 19.05Q16.55 19.2 16.45 19.3Q16.35 19.4 16.2 19.4Z"/>
    </Icon>
  );
});

IconMaterialVideoLibraryRoundedW100Filled.displayName = 'AmauiIconMaterialVideoLibraryRoundedW100Filled';

export default IconMaterialVideoLibraryRoundedW100Filled;
