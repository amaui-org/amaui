import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneDisabledSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneDisabledSharp'
      short_name='PhoneDisabled'

      {...props}
    >
      <path d="M17.975 9Q18.4 8.025 18.625 7.025Q18.85 6.025 18.975 5H16.75L16.325 7.35ZM5 18.95Q6.025 18.875 7.038 18.625Q8.05 18.375 9.025 17.95L7.35 16.275L5 16.75ZM17.075 14.325 15.65 12.9Q15.925 12.6 16.413 11.863Q16.9 11.125 17.025 10.9L14.175 8.025L15.1 3H20.95Q21 3.275 21 3.525Q21 3.775 21 4.05Q21 6.8 19.962 9.425Q18.925 12.05 17.075 14.325ZM3.95 21Q3.675 21 3.438 20.988Q3.2 20.975 3 20.95V15.125L8 14.1L10.9 17Q11.4 16.7 11.875 16.387Q12.35 16.075 12.8 15.7L1.4 4.3L2.8 2.9L21.2 21.3L19.8 22.7L14.25 17.15Q12.025 18.95 9.363 19.975Q6.7 21 3.95 21ZM17.975 9Q17.975 9 17.975 9Q17.975 9 17.975 9ZM9.025 17.95Q9.025 17.95 9.025 17.95Q9.025 17.95 9.025 17.95Z"/>
    </Icon>
  );
});

IconMaterialPhoneDisabledSharp.displayName = 'AmauiIconMaterialPhoneDisabledSharp';

export default IconMaterialPhoneDisabledSharp;
