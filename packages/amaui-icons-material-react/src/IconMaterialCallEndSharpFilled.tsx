import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallEndSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallEndSharpFilled'
      short_name='CallEnd'

      {...props}
    >
      <path d="M4.025 17 0.4 13.475Q2.75 10.725 5.75 9.363Q8.75 8 12 8Q15.25 8 18.238 9.363Q21.225 10.725 23.6 13.475L19.975 17L16 14V10.65Q15.05 10.35 14.05 10.175Q13.05 10 12 10Q10.95 10 9.95 10.175Q8.95 10.35 8 10.65V14Z"/>
    </Icon>
  );
});

IconMaterialCallEndSharpFilled.displayName = 'AmauiIconMaterialCallEndSharpFilled';

export default IconMaterialCallEndSharpFilled;
