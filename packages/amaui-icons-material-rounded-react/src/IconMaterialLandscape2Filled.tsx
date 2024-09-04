import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLandscape2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Landscape2Filled'

      short_name='Landscape2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M110-160q-23 0-34-19t-1-39l109-218q10-20 28.5-32t41.5-12q24 0 44 12.5t29 35.5l27 66q2 6 9 5.5t9-6.5l86-287q14-48 53.5-77t89.5-29q49 0 87.5 28.5T742-657l155 444q7 20-5.5 36.5T859-160H110Zm130-400q-50 0-85-35.5T120-680q0-50 35-85t85-35q50 0 85 35t35 85q0 49-35 84.5T240-560Z"/>
    </Icon>
  );
});

IconMaterialLandscape2Filled.displayName = 'AmauiIconMaterialLandscape2Filled';

export default IconMaterialLandscape2Filled;
