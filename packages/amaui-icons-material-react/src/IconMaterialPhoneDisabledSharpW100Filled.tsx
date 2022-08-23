import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneDisabledSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneDisabledSharpW100Filled'
      short_name='PhoneDisabled'

      {...props}
    >
      <path d="M16.2 13.45 15.7 12.95Q16.125 12.425 16.587 11.762Q17.05 11.1 17.4 10.5L14.75 8.075L15.575 4.3H19.525Q19.575 4.55 19.588 4.8Q19.6 5.05 19.6 5.35Q19.6 7.425 18.65 9.55Q17.7 11.675 16.2 13.45ZM5.35 19.55Q5.125 19.55 4.825 19.538Q4.525 19.525 4.3 19.475V15.575L7.65 14.875L10.2 17.55Q11.15 17.025 12.075 16.362Q13 15.7 13.85 14.95L3.3 4.4L3.8 3.9L20.2 20.3L19.7 20.8L14.35 15.45Q12.1 17.45 9.825 18.5Q7.55 19.55 5.35 19.55Z"/>
    </Icon>
  );
});

IconMaterialPhoneDisabledSharpW100Filled.displayName = 'AmauiIconMaterialPhoneDisabledSharpW100Filled';

export default IconMaterialPhoneDisabledSharpW100Filled;
