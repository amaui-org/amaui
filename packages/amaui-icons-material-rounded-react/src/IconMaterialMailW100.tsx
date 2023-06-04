import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMailW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailW100'

      short_name='Mail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425ZM20 6.55l-7.575 5.025q-.1.05-.2.087-.1.038-.225.038t-.225-.038q-.1-.037-.2-.087L4 6.55V17.2q0 .35.225.575Q4.45 18 4.8 18h14.4q.35 0 .575-.225Q20 17.55 20 17.2ZM12 11l7.6-5H4.4ZM4 6.55v.2-.613.038V6v.175-.063.638-.2V18 17.2Z"/>
    </Icon>
  );
});

IconMaterialMailW100.displayName = 'AmauiIconMaterialMailW100';

export default IconMaterialMailW100;
