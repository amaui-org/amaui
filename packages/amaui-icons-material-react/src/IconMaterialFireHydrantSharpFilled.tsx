import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFireHydrantSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireHydrantSharpFilled'
      short_name='FireHydrant'

      {...props}
    >
      <path d="M4 22V20H6V17H5Q4.175 17 3.587 16.413Q3 15.825 3 15V13Q3 12.175 3.587 11.587Q4.175 11 5 11H6V8H4V6H6.35Q6.975 4.25 8.513 3.125Q10.05 2 12 2Q13.95 2 15.488 3.125Q17.025 4.25 17.65 6H20V8H18V11H19Q19.825 11 20.413 11.587Q21 12.175 21 13V15Q21 15.825 20.413 16.413Q19.825 17 19 17H18V20H20V22ZM12 17.5Q13.45 17.5 14.475 16.475Q15.5 15.45 15.5 14Q15.5 12.55 14.475 11.525Q13.45 10.5 12 10.5Q10.55 10.5 9.525 11.525Q8.5 12.55 8.5 14Q8.5 15.45 9.525 16.475Q10.55 17.5 12 17.5ZM12 15.5Q11.375 15.5 10.938 15.062Q10.5 14.625 10.5 14Q10.5 13.375 10.938 12.938Q11.375 12.5 12 12.5Q12.625 12.5 13.062 12.938Q13.5 13.375 13.5 14Q13.5 14.625 13.062 15.062Q12.625 15.5 12 15.5Z"/>
    </Icon>
  );
});

IconMaterialFireHydrantSharpFilled.displayName = 'AmauiIconMaterialFireHydrantSharpFilled';

export default IconMaterialFireHydrantSharpFilled;
