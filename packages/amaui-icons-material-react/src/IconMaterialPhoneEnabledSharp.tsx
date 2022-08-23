import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneEnabledSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneEnabledSharp'
      short_name='PhoneEnabled'

      {...props}
    >
      <path d="M4.05 21Q3.8 21 3.525 20.988Q3.25 20.975 3 20.95V15.1L8 14.1L10.9 17Q12.8 15.85 14.388 14.275Q15.975 12.7 17.025 10.9L14.175 8.025L15.1 3H20.95Q21 3.25 21 3.525Q21 3.8 21 4.05Q21 7.275 19.562 10.337Q18.125 13.4 15.762 15.775Q13.4 18.15 10.338 19.575Q7.275 21 4.05 21ZM17.975 9Q18.4 8.025 18.625 7.025Q18.85 6.025 18.975 5H16.75L16.325 7.35ZM9.025 17.95 7.35 16.275 5 16.75V18.95Q6.025 18.875 7.038 18.625Q8.05 18.375 9.025 17.95ZM17.975 9Q17.975 9 17.975 9Q17.975 9 17.975 9ZM9.025 17.95Q9.025 17.95 9.025 17.95Q9.025 17.95 9.025 17.95Z"/>
    </Icon>
  );
});

IconMaterialPhoneEnabledSharp.displayName = 'AmauiIconMaterialPhoneEnabledSharp';

export default IconMaterialPhoneEnabledSharp;
