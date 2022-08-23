import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMailRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailRoundedW100Filled'
      short_name='Mail'

      {...props}
    >
      <path d="M4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM12 11.7Q12.125 11.7 12.225 11.662Q12.325 11.625 12.425 11.575L19.7 6.75Q19.825 6.675 19.85 6.537Q19.875 6.4 19.8 6.275Q19.75 6.175 19.6 6.137Q19.45 6.1 19.325 6.175L12 11L4.675 6.175Q4.55 6.1 4.412 6.112Q4.275 6.125 4.2 6.25Q4.125 6.375 4.15 6.525Q4.175 6.675 4.3 6.75L11.575 11.575Q11.675 11.625 11.775 11.662Q11.875 11.7 12 11.7Z"/>
    </Icon>
  );
});

IconMaterialMailRoundedW100Filled.displayName = 'AmauiIconMaterialMailRoundedW100Filled';

export default IconMaterialMailRoundedW100Filled;
