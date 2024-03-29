import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaFilled'

      short_name='Spa'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 20.85q.05.475-.312.813-.363.337-.813.262-4.35-.65-6.9-3.363-2.55-2.712-2.9-7.387-.05-.5.287-.838.338-.337.838-.262 4.575.625 7.05 3.525 2.475 2.9 2.75 7.25ZM11.225 2.975q.3-.425.787-.413.488.013.788.438 1.125 1.575 1.963 3.45.837 1.875 1.012 3.15-.975.45-2.175 1.462-1.2 1.013-1.575 1.563-.35-.55-1.612-1.613Q9.15 9.95 8.275 9.6q.2-1.25 1.013-3.163.812-1.912 1.937-3.462Zm9.65 7.1q.475-.05.8.262.325.313.3.813-.2 4.025-2.187 6.538Q17.8 20.2 14.975 21.2q-.05-1.525-.462-3.462Q14.1 15.8 13.225 14.4q1.075-1.65 3.188-2.85 2.112-1.2 4.462-1.475Z"/>
    </Icon>
  );
});

IconMaterialSpaFilled.displayName = 'AmauiIconMaterialSpaFilled';

export default IconMaterialSpaFilled;
