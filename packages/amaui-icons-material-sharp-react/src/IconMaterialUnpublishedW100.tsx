import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnpublishedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnpublishedW100'

      short_name='Unpublished'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.3 22.3-3.675-3.675q-1.15.975-2.575 1.525-1.425.55-3.05.55-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12q0-1.625.55-3.05.55-1.425 1.525-2.575L2.25 3.25l.5-.5L21.8 21.8ZM12 20q1.475 0 2.775-.5 1.3-.5 2.35-1.375l-4.5-4.5L10.55 15.7 7.2 12.35l.5-.5 2.85 2.85 1.575-1.575-6.25-6.25Q5 7.925 4.5 9.225T4 12q0 3.325 2.338 5.663Q8.675 20 12 20Zm7.4-3.4-.525-.525q.55-.9.837-1.925Q20 13.125 20 12q0-3.325-2.337-5.663Q15.325 4 12 4q-1.125 0-2.15.287-1.025.288-1.925.838L7.4 4.6q1-.625 2.162-.963Q10.725 3.3 12 3.3q1.8 0 3.388.687 1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.275-.337 2.438-.338 1.162-.963 2.162Zm-4.875-4.875-.5-.5L16.25 9l.5.5ZM13.4 10.6Zm-1.9 1.9Z"/>
    </Icon>
  );
});

IconMaterialUnpublishedW100.displayName = 'AmauiIconMaterialUnpublishedW100';

export default IconMaterialUnpublishedW100;
