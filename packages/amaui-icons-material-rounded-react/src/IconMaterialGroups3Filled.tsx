import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroups3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Groups3Filled'

      short_name='Groups3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 13.525 6.525 11 4 8.475 1.475 11ZM17.5 13 20 9l2.5 4ZM1 18q-.425 0-.712-.288Q0 17.425 0 17v-.575q0-1.1 1.1-1.763Q2.2 14 4 14q.325 0 .613.025.287.025.562.075-.35.5-.513 1.075Q4.5 15.75 4.5 16.4V18Zm6 0q-.425 0-.713-.288Q6 17.425 6 17v-.6q0-1.625 1.663-2.638Q9.325 12.75 12 12.75q2.7 0 4.35 1.012Q18 14.775 18 16.4v.6q0 .425-.288.712Q17.425 18 17 18Zm12.5 0v-1.6q0-.65-.175-1.225-.175-.575-.5-1.075.275-.05.563-.075Q19.675 14 20 14q1.8 0 2.9.662 1.1.663 1.1 1.763V17q0 .425-.288.712Q23.425 18 23 18ZM12 12q-1.25 0-2.125-.875T9 9q0-1.25.875-2.125T12 6q1.25 0 2.125.875T15 9q0 1.25-.875 2.125T12 12Z"/>
    </Icon>
  );
});

IconMaterialGroups3Filled.displayName = 'AmauiIconMaterialGroups3Filled';

export default IconMaterialGroups3Filled;
