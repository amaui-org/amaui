import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFunctionsRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FunctionsRounded'
      short_name='Functions'

      {...props}
    >
      <path d="M7.525 20Q6.875 20 6.438 19.562Q6 19.125 6 18.475Q6 18.275 6.1 18.05Q6.2 17.825 6.325 17.7L12.5 12L6.325 6.3Q6.2 6.175 6.1 5.95Q6 5.725 6 5.525Q6 4.875 6.438 4.438Q6.875 4 7.525 4H16.5Q17.125 4 17.562 4.438Q18 4.875 18 5.5Q18 6.125 17.562 6.562Q17.125 7 16.5 7H11L14.575 10.525Q14.9 10.825 15.062 11.212Q15.225 11.6 15.225 12Q15.225 12.4 15.062 12.787Q14.9 13.175 14.575 13.475L11 17H16.5Q17.125 17 17.562 17.438Q18 17.875 18 18.5Q18 19.125 17.562 19.562Q17.125 20 16.5 20Z"/>
    </Icon>
  );
});

IconMaterialFunctionsRounded.displayName = 'AmauiIconMaterialFunctionsRounded';

export default IconMaterialFunctionsRounded;
