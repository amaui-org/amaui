import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeadphonesSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesSharpW100Filled'
      short_name='Headphones'

      {...props}
    >
      <path d="M4.3 19.7V12Q4.3 10.4 4.9 9Q5.5 7.6 6.55 6.55Q7.6 5.5 9 4.9Q10.4 4.3 12 4.3Q13.6 4.3 15 4.9Q16.4 5.5 17.45 6.55Q18.5 7.6 19.1 9Q19.7 10.4 19.7 12V19.7H16.2V14.1H19V12Q19 9.075 16.962 7.037Q14.925 5 12 5Q9.075 5 7.038 7.037Q5 9.075 5 12V14.1H7.8V19.7Z"/>
    </Icon>
  );
});

IconMaterialHeadphonesSharpW100Filled.displayName = 'AmauiIconMaterialHeadphonesSharpW100Filled';

export default IconMaterialHeadphonesSharpW100Filled;
