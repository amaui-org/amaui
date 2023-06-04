import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHelpClinicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HelpClinicW100Filled'

      short_name='HelpClinic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 16.6h.7v-3.7h-.7Zm.35-5.9q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q12.275 9.3 12 9.3t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm-6.7 9V9.65L12 4.6l6.7 5.05V19.7Z"/>
    </Icon>
  );
});

IconMaterialHelpClinicW100Filled.displayName = 'AmauiIconMaterialHelpClinicW100Filled';

export default IconMaterialHelpClinicW100Filled;
