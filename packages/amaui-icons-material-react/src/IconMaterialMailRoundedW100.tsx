import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMailRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailRoundedW100'
      short_name='Mail'

      {...props}
    >
      <path d="M4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM20 6.55 12.425 11.575Q12.325 11.625 12.225 11.662Q12.125 11.7 12 11.7Q11.875 11.7 11.775 11.662Q11.675 11.625 11.575 11.575L4 6.55V17.2Q4 17.55 4.225 17.775Q4.45 18 4.8 18H19.2Q19.55 18 19.775 17.775Q20 17.55 20 17.2ZM12 11 19.6 6H4.4ZM4 6.55V6.75Q4 6.675 4 6.537Q4 6.4 4 6.275Q4 6.175 4 6.137Q4 6.1 4 6.175V6V6.175Q4 6.1 4 6.112Q4 6.125 4 6.25Q4 6.375 4 6.525Q4 6.675 4 6.75V6.55V17.2Q4 17.55 4 17.775Q4 18 4 18Q4 18 4 17.775Q4 17.55 4 17.2Z"/>
    </Icon>
  );
});

IconMaterialMailRoundedW100.displayName = 'AmauiIconMaterialMailRoundedW100';

export default IconMaterialMailRoundedW100;
