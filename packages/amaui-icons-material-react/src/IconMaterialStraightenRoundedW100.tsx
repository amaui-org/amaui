import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStraightenRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightenRoundedW100'
      short_name='Straighten'

      {...props}
    >
      <path d="M4.8 16.7Q4.15 16.7 3.725 16.275Q3.3 15.85 3.3 15.2V8.8Q3.3 8.15 3.725 7.725Q4.15 7.3 4.8 7.3H19.2Q19.85 7.3 20.275 7.725Q20.7 8.15 20.7 8.8V15.2Q20.7 15.85 20.275 16.275Q19.85 16.7 19.2 16.7ZM4.8 16H19.2Q19.5 16 19.75 15.75Q20 15.5 20 15.2V8.8Q20 8.5 19.75 8.25Q19.5 8 19.2 8H16.35V11H15.65V8H12.35V11H11.65V8H8.35V11H7.65V8H4.8Q4.5 8 4.25 8.25Q4 8.5 4 8.8V15.2Q4 15.5 4.25 15.75Q4.5 16 4.8 16ZM7.65 11Q7.75 11 7.838 11Q7.925 11 8 11Q8.075 11 8.163 11Q8.25 11 8.35 11ZM11.65 11Q11.75 11 11.838 11Q11.925 11 12 11Q12.075 11 12.163 11Q12.25 11 12.35 11ZM15.65 11Q15.75 11 15.838 11Q15.925 11 16 11Q16.075 11 16.163 11Q16.25 11 16.35 11ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialStraightenRoundedW100.displayName = 'AmauiIconMaterialStraightenRoundedW100';

export default IconMaterialStraightenRoundedW100;
