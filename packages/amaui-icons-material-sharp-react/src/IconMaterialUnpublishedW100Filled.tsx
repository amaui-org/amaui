import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnpublishedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnpublishedW100Filled'

      short_name='Unpublished'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.3 22.3-3.675-3.675q-1.15.975-2.575 1.525-1.425.55-3.05.55-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12q0-1.625.55-3.05.55-1.425 1.525-2.575L2.25 3.25l.5-.5L21.8 21.8Zm-1.9-5.7-4.875-4.875L16.75 9.5l-.5-.5-2.225 2.225L7.4 4.6q1-.625 2.162-.963Q10.725 3.3 12 3.3q1.8 0 3.388.687 1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.275-.337 2.438-.338 1.162-.963 2.162Zm-8.85-.9 2.075-2.075-.5-.5L10.55 14.7 7.7 11.85l-.5.5Z"/>
    </Icon>
  );
});

IconMaterialUnpublishedW100Filled.displayName = 'AmauiIconMaterialUnpublishedW100Filled';

export default IconMaterialUnpublishedW100Filled;
