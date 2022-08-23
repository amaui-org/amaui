import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayForWorkSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayForWorkSharpW100'
      short_name='PlayForWork'

      {...props}
    >
      <path d="M12 18.7Q10.05 18.7 8.675 17.325Q7.3 15.95 7.3 14H8Q8 15.65 9.175 16.825Q10.35 18 12 18Q13.65 18 14.825 16.825Q16 15.65 16 14H16.7Q16.7 15.95 15.325 17.325Q13.95 18.7 12 18.7ZM12 14.1 8.9 11 9.4 10.5 11.65 12.75V5.65H12.35V12.75L14.6 10.5L15.1 11Z"/>
    </Icon>
  );
});

IconMaterialPlayForWorkSharpW100.displayName = 'AmauiIconMaterialPlayForWorkSharpW100';

export default IconMaterialPlayForWorkSharpW100;
