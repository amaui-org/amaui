import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditAttributesRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditAttributesRoundedW100Filled'
      short_name='EditAttributes'

      {...props}
    >
      <path d="M7 15.7Q5.45 15.7 4.375 14.625Q3.3 13.55 3.3 12Q3.3 10.45 4.375 9.375Q5.45 8.3 7 8.3H17Q18.55 8.3 19.625 9.375Q20.7 10.45 20.7 12Q20.7 13.55 19.625 14.625Q18.55 15.7 17 15.7ZM8.05 13.4Q8.2 13.4 8.325 13.35Q8.45 13.3 8.575 13.175L10.75 11Q10.85 10.9 10.863 10.762Q10.875 10.625 10.75 10.5Q10.625 10.375 10.5 10.375Q10.375 10.375 10.25 10.5L8.05 12.7L7.35 12Q7.25 11.9 7.113 11.887Q6.975 11.875 6.85 12Q6.725 12.125 6.725 12.25Q6.725 12.375 6.85 12.5L7.525 13.175Q7.65 13.3 7.775 13.35Q7.9 13.4 8.05 13.4Z"/>
    </Icon>
  );
});

IconMaterialEditAttributesRoundedW100Filled.displayName = 'AmauiIconMaterialEditAttributesRoundedW100Filled';

export default IconMaterialEditAttributesRoundedW100Filled;
