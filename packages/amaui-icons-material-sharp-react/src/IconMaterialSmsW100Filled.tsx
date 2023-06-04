import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmsW100Filled'

      short_name='Sms'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 10.7q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q8.275 9.3 8 9.3t-.487.212Q7.3 9.725 7.3 10t.213.487q.212.213.487.213Zm4 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q12.275 9.3 12 9.3t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm4 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q16.275 9.3 16 9.3t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213ZM3.3 19.5V3.3h17.4v13.4H6.1Z"/>
    </Icon>
  );
});

IconMaterialSmsW100Filled.displayName = 'AmauiIconMaterialSmsW100Filled';

export default IconMaterialSmsW100Filled;
