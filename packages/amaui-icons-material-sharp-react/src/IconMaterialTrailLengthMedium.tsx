import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrailLengthMedium = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthMedium'

      short_name='TrailLengthMedium'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17v-2h5q-.35-.425-.562-.925-.213-.5-.338-1.075H5v-2h6.1q.125-.575.338-1.075.212-.5.562-.925H7V7h9q2.075 0 3.538 1.462Q21 9.925 21 12q0 2.075-1.462 3.537Q18.075 17 16 17Zm9-2q1.25 0 2.125-.875T19 12q0-1.25-.875-2.125T16 9q-1.25 0-2.125.875T13 12q0 1.25.875 2.125T16 15ZM3 17v-2h3v2Zm13-5Z"/>
    </Icon>
  );
});

IconMaterialTrailLengthMedium.displayName = 'AmauiIconMaterialTrailLengthMedium';

export default IconMaterialTrailLengthMedium;
