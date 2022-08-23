import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRadioSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadioSharp'
      short_name='Radio'

      {...props}
    >
      <path d="M2 22V6.65L15.9 1L16.55 2.65L8.3 6H22V22ZM4 20H20V13H4ZM4 11H16V9H18V11H20V8H4ZM8 19Q9.05 19 9.775 18.275Q10.5 17.55 10.5 16.5Q10.5 15.45 9.775 14.725Q9.05 14 8 14Q6.95 14 6.225 14.725Q5.5 15.45 5.5 16.5Q5.5 17.55 6.225 18.275Q6.95 19 8 19ZM4 13V20Z"/>
    </Icon>
  );
});

IconMaterialRadioSharp.displayName = 'AmauiIconMaterialRadioSharp';

export default IconMaterialRadioSharp;
