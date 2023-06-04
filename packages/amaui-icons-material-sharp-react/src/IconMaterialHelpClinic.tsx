import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHelpClinic = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HelpClinic'

      short_name='HelpClinic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 17h2v-5h-2Zm1-7q.425 0 .713-.288Q13 9.425 13 9t-.287-.713Q12.425 8 12 8t-.712.287Q11 8.575 11 9t.288.712Q11.575 10 12 10ZM4 21V9l8-6 8 6v12Zm2-2h12v-9l-6-4.5L6 10Zm6-6.75Z"/>
    </Icon>
  );
});

IconMaterialHelpClinic.displayName = 'AmauiIconMaterialHelpClinic';

export default IconMaterialHelpClinic;
