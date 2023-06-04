import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHelpClinicW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HelpClinicW100'

      short_name='HelpClinic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.6q.15 0 .25-.1t.1-.25v-3q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v3q0 .15.1.25t.25.1Zm0-5.9q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q12.275 9.3 12 9.3t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm-5.2 9q-.625 0-1.062-.438Q5.3 18.825 5.3 18.2v-7.8q0-.35.163-.675.162-.325.437-.525l5.2-3.925q.4-.3.9-.3t.9.3L18.1 9.2q.275.2.438.525.162.325.162.675v7.8q0 .625-.438 1.062-.437.438-1.062.438Zm0-.7h10.4q.35 0 .575-.225Q18 18.55 18 18.2v-7.8q0-.2-.087-.363-.088-.162-.238-.287l-5.2-3.9q-.2-.175-.475-.175-.275 0-.475.175l-5.2 3.9q-.15.125-.237.287Q6 10.2 6 10.4v7.8q0 .35.225.575Q6.45 19 6.8 19Zm5.2-6.675Z"/>
    </Icon>
  );
});

IconMaterialHelpClinicW100.displayName = 'AmauiIconMaterialHelpClinicW100';

export default IconMaterialHelpClinicW100;
