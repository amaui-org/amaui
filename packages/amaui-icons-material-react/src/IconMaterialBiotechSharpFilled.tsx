import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBiotechSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BiotechSharpFilled'
      short_name='Biotech'

      {...props}
    >
      <path d="M5 21V19H10V17Q7.925 17 6.463 15.537Q5 14.075 5 12Q5 10.475 5.812 9.275Q6.625 8.075 7.725 7.55Q7.625 8.075 7.763 8.625Q7.9 9.175 8.2 9.625Q7.625 10 7.312 10.6Q7 11.2 7 12Q7 13.25 7.875 14.125Q8.75 15 10 15H18V17H13V19H19V21ZM14 12.1 13.7 11.15 12.75 11.5 12.25 10.175Q12.75 9.8 13.025 9.225Q13.3 8.65 13.3 8Q13.3 6.825 12.463 6.012Q11.625 5.2 10.45 5.2L10 3.95L10.95 3.6L10.6 2.7L12.5 2L12.8 2.95L13.75 2.6L16.5 10.1L15.55 10.45L15.9 11.4ZM10.5 9.8Q9.75 9.8 9.225 9.275Q8.7 8.75 8.7 8Q8.7 7.25 9.225 6.725Q9.75 6.2 10.5 6.2Q11.25 6.2 11.775 6.725Q12.3 7.25 12.3 8Q12.3 8.75 11.775 9.275Q11.25 9.8 10.5 9.8Z"/>
    </Icon>
  );
});

IconMaterialBiotechSharpFilled.displayName = 'AmauiIconMaterialBiotechSharpFilled';

export default IconMaterialBiotechSharpFilled;
