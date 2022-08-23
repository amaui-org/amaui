import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRowingSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RowingSharp'
      short_name='Rowing'

      {...props}
    >
      <path d="M5.5 20.5 4 19 8.5 14.5 11 17H9ZM15 5Q14.175 5 13.588 4.412Q13 3.825 13 3Q13 2.175 13.588 1.587Q14.175 1 15 1Q15.825 1 16.413 1.587Q17 2.175 17 3Q17 3.825 16.413 4.412Q15.825 5 15 5ZM18 24 15 21V19.5L7.9 12.4Q7.675 12.45 7.45 12.475Q7.225 12.5 7 12.5V10.3Q8.25 10.35 9.55 9.762Q10.85 9.175 11.65 8.3L13.05 6.75Q13.325 6.45 13.825 6.225Q14.325 6 14.75 6Q15.7 6 16.35 6.65Q17 7.3 17 8.25V14Q17 14.65 16.763 15.188Q16.525 15.725 16.1 16.15L12.5 12.6V10.3Q12 10.725 11.425 11.075Q10.85 11.425 10.2 11.7L16.5 18H18L21 21Z"/>
    </Icon>
  );
});

IconMaterialRowingSharp.displayName = 'AmauiIconMaterialRowingSharp';

export default IconMaterialRowingSharp;
