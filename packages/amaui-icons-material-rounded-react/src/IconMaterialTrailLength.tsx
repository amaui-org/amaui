import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrailLength = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLength'

      short_name='TrailLength'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17v-2h6q-.35-.425-.562-.925-.213-.5-.338-1.075H9v-2h3.1q.125-.575.338-1.075.212-.5.562-.925H3V7h14q2.075 0 3.538 1.462Q22 9.925 22 12q0 2.075-1.462 3.537Q19.075 17 17 17Zm10-2q1.25 0 2.125-.875T20 12q0-1.25-.875-2.125T17 9q-1.25 0-2.125.875T14 12q0 1.25.875 2.125T17 15ZM2 13v-2h6v2Zm1 4v-2h3v2Zm14-5Z"/>
    </Icon>
  );
});

IconMaterialTrailLength.displayName = 'AmauiIconMaterialTrailLength';

export default IconMaterialTrailLength;
