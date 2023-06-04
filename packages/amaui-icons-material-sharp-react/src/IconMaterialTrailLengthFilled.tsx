import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrailLengthFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthFilled'

      short_name='TrailLength'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17v-2h6q-.35-.425-.562-.925-.213-.5-.338-1.075H9v-2h3.1q.125-.575.338-1.075.212-.5.562-.925H3V7h14q2.075 0 3.538 1.462Q22 9.925 22 12q0 2.075-1.462 3.537Q19.075 17 17 17Zm-5-4v-2h6v2Zm1 4v-2h3v2Z"/>
    </Icon>
  );
});

IconMaterialTrailLengthFilled.displayName = 'AmauiIconMaterialTrailLengthFilled';

export default IconMaterialTrailLengthFilled;
