import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalPoliceSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPoliceSharp'
      short_name='LocalPolice'

      {...props}
    >
      <path d="M9.2 15.6 12 13.5 14.75 15.6 13.7 12.2 16.5 10H13.1L12 6.6L10.9 10H7.5L10.25 12.2ZM12 22Q8.525 21.125 6.263 18.012Q4 14.9 4 11.1V5L12 2L20 5V11.1Q20 14.9 17.738 18.012Q15.475 21.125 12 22ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 19.9Q14.6 19.075 16.3 16.6Q18 14.125 18 11.1V6.375L12 4.125L6 6.375V11.1Q6 14.125 7.7 16.6Q9.4 19.075 12 19.9Z"/>
    </Icon>
  );
});

IconMaterialLocalPoliceSharp.displayName = 'AmauiIconMaterialLocalPoliceSharp';

export default IconMaterialLocalPoliceSharp;
