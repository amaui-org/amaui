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
      <path d="M12 17q.425 0 .713-.288Q13 16.425 13 16v-3q0-.425-.287-.713Q12.425 12 12 12t-.712.287Q11 12.575 11 13v3q0 .425.288.712.287.288.712.288Zm0-7q.425 0 .713-.288Q13 9.425 13 9t-.287-.713Q12.425 8 12 8t-.712.287Q11 8.575 11 9t.288.712Q11.575 10 12 10ZM6 21q-.825 0-1.412-.587Q4 19.825 4 19v-9q0-.475.213-.9.212-.425.587-.7l6-4.5q.525-.4 1.2-.4.675 0 1.2.4l6 4.5q.375.275.588.7.212.425.212.9v9q0 .825-.587 1.413Q18.825 21 18 21Zm0-2h12v-9l-6-4.5L6 10v9Zm6-6.75Z"/>
    </Icon>
  );
});

IconMaterialHelpClinic.displayName = 'AmauiIconMaterialHelpClinic';

export default IconMaterialHelpClinic;
