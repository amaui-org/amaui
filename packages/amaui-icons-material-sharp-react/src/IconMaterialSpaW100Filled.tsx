import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaW100Filled'

      short_name='Spa'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.45 20.65q-3.8-.425-6.062-2.95-2.263-2.525-2.538-6.65 1.875 0 3.45.725 1.575.725 2.712 2 1.138 1.275 1.788 3.037.65 1.763.65 3.838Zm.7-.225q0-.925-.2-2.038-.2-1.112-.625-2.237.925-2.2 3.188-3.675Q17.775 11 20.15 11.05q-.225 3.65-1.912 5.912-1.688 2.263-5.088 3.463ZM12 15.35q-.5-.875-1.212-1.725-.713-.85-1.438-1.425.075-1.875.813-3.888Q10.9 6.3 12 4.95q1.1 1.35 1.838 3.388.737 2.037.812 3.912-.825.575-1.562 1.438-.738.862-1.088 1.662Z"/>
    </Icon>
  );
});

IconMaterialSpaW100Filled.displayName = 'AmauiIconMaterialSpaW100Filled';

export default IconMaterialSpaW100Filled;
