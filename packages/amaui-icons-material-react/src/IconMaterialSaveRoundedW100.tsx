import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSaveRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveRoundedW100'
      short_name='Save'

      {...props}
    >
      <path d="M5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H15.825Q16.125 4.3 16.413 4.425Q16.7 4.55 16.9 4.75L19.25 7.1Q19.45 7.3 19.575 7.588Q19.7 7.875 19.7 8.175V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM19 7.85 16.15 5H5.8Q5.45 5 5.225 5.225Q5 5.45 5 5.8V18.2Q5 18.55 5.225 18.775Q5.45 19 5.8 19H18.2Q18.55 19 18.775 18.775Q19 18.55 19 18.2ZM12 16.1Q12.7 16.1 13.2 15.6Q13.7 15.1 13.7 14.4Q13.7 13.7 13.2 13.2Q12.7 12.7 12 12.7Q11.3 12.7 10.8 13.2Q10.3 13.7 10.3 14.4Q10.3 15.1 10.8 15.6Q11.3 16.1 12 16.1ZM7.75 9.7H13.2Q13.525 9.7 13.738 9.487Q13.95 9.275 13.95 8.95V7.75Q13.95 7.425 13.738 7.213Q13.525 7 13.2 7H7.75Q7.425 7 7.213 7.213Q7 7.425 7 7.75V8.95Q7 9.275 7.213 9.487Q7.425 9.7 7.75 9.7ZM5 7.85V18.2Q5 18.55 5 18.775Q5 19 5 19Q5 19 5 18.775Q5 18.55 5 18.2V5.8Q5 5.45 5 5.225Q5 5 5 5Z"/>
    </Icon>
  );
});

IconMaterialSaveRoundedW100.displayName = 'AmauiIconMaterialSaveRoundedW100';

export default IconMaterialSaveRoundedW100;
