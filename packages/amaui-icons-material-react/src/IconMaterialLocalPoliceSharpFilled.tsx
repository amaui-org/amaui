import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalPoliceSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPoliceSharpFilled'
      short_name='LocalPolice'

      {...props}
    >
      <path d="M9.2 15.6 12 13.5 14.75 15.6 13.7 12.2 16.5 10H13.1L12 6.6L10.9 10H7.5L10.25 12.2ZM12 22Q8.525 21.125 6.263 18.012Q4 14.9 4 11.1V5L12 2L20 5V11.1Q20 14.9 17.738 18.012Q15.475 21.125 12 22Z"/>
    </Icon>
  );
});

IconMaterialLocalPoliceSharpFilled.displayName = 'AmauiIconMaterialLocalPoliceSharpFilled';

export default IconMaterialLocalPoliceSharpFilled;
