import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExtensionSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionSharpFilled'
      short_name='Extension'

      {...props}
    >
      <path d="M8.8 21H3V15.2Q4.2 15.2 5.1 14.438Q6 13.675 6 12.5Q6 11.325 5.1 10.562Q4.2 9.8 3 9.8V4H9Q9 2.95 9.725 2.225Q10.45 1.5 11.5 1.5Q12.55 1.5 13.275 2.225Q14 2.95 14 4H20V10Q21.05 10 21.775 10.725Q22.5 11.45 22.5 12.5Q22.5 13.55 21.775 14.275Q21.05 15 20 15V21H14.2Q14.2 19.75 13.413 18.875Q12.625 18 11.5 18Q10.375 18 9.588 18.875Q8.8 19.75 8.8 21Z"/>
    </Icon>
  );
});

IconMaterialExtensionSharpFilled.displayName = 'AmauiIconMaterialExtensionSharpFilled';

export default IconMaterialExtensionSharpFilled;
