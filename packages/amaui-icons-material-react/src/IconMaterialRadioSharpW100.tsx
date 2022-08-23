import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRadioSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadioSharpW100'
      short_name='Radio'

      {...props}
    >
      <path d="M3.3 20.7V7.4L14.6 2.8L14.85 3.45L5.35 7.3H20.7V20.7ZM4 20H20V12.4H4ZM4 11.7H16.65V9.9H17.35V11.7H20V8H4ZM7.8 18.2Q8.625 18.2 9.213 17.612Q9.8 17.025 9.8 16.2Q9.8 15.375 9.213 14.787Q8.625 14.2 7.8 14.2Q6.975 14.2 6.388 14.787Q5.8 15.375 5.8 16.2Q5.8 17.025 6.388 17.612Q6.975 18.2 7.8 18.2ZM4 12.4V20Z"/>
    </Icon>
  );
});

IconMaterialRadioSharpW100.displayName = 'AmauiIconMaterialRadioSharpW100';

export default IconMaterialRadioSharpW100;
