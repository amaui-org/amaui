import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCodeOffRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeOffRoundedW100'
      short_name='CodeOff'

      {...props}
    >
      <path d="M19.6 20.6 7.45 8.45 3.9 12 8.275 16.375Q8.375 16.475 8.375 16.6Q8.375 16.725 8.25 16.85Q8.125 16.975 8 16.975Q7.875 16.975 7.75 16.85L3.425 12.525Q3.2 12.3 3.2 12Q3.2 11.7 3.425 11.475L6.95 7.95L3.375 4.375Q3.275 4.275 3.275 4.15Q3.275 4.025 3.4 3.9Q3.525 3.775 3.65 3.775Q3.775 3.775 3.9 3.9L20.125 20.125Q20.225 20.225 20.225 20.35Q20.225 20.475 20.1 20.6Q19.975 20.725 19.85 20.725Q19.725 20.725 19.6 20.6ZM17.95 15.15 17.45 14.65 20.1 12 15.725 7.625Q15.625 7.525 15.625 7.4Q15.625 7.275 15.75 7.15Q15.875 7.025 16 7.025Q16.125 7.025 16.25 7.15L20.575 11.475Q20.8 11.7 20.8 12Q20.8 12.3 20.575 12.525Z"/>
    </Icon>
  );
});

IconMaterialCodeOffRoundedW100.displayName = 'AmauiIconMaterialCodeOffRoundedW100';

export default IconMaterialCodeOffRoundedW100;
