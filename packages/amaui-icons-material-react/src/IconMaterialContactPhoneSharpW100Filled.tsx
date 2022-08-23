import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactPhoneSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPhoneSharpW100Filled'
      short_name='ContactPhone'

      {...props}
    >
      <path d="M1.3 19.2V4.8H22.7V19.2ZM9 14.3Q9.975 14.3 10.663 13.612Q11.35 12.925 11.35 11.95Q11.35 10.975 10.663 10.287Q9.975 9.6 9 9.6Q8.025 9.6 7.338 10.287Q6.65 10.975 6.65 11.95Q6.65 12.925 7.338 13.612Q8.025 14.3 9 14.3ZM18.1 17.25 19.6 15.75 18.45 14.2H16.7Q16.5 13.6 16.425 13.087Q16.35 12.575 16.35 12Q16.35 11.425 16.425 10.938Q16.5 10.45 16.7 9.8H18.45L19.6 8.25L18.1 6.75Q16.925 7.725 16.288 9.087Q15.65 10.45 15.65 12Q15.65 13.55 16.288 14.912Q16.925 16.275 18.1 17.25ZM3.55 18.5H14.45Q13.4 17.3 12 16.55Q10.6 15.8 9 15.8Q7.4 15.8 6 16.55Q4.6 17.3 3.55 18.5Z"/>
    </Icon>
  );
});

IconMaterialContactPhoneSharpW100Filled.displayName = 'AmauiIconMaterialContactPhoneSharpW100Filled';

export default IconMaterialContactPhoneSharpW100Filled;
