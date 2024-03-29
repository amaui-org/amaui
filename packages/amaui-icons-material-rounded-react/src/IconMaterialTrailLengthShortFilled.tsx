import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrailLengthShortFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthShortFilled'

      short_name='TrailLengthShort'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 17q-1.825 0-3.188-1.137Q10.45 14.725 10.1 13H4v-2h6.1q.125-.575.338-1.075.212-.5.562-.925H6V7h9q2.075 0 3.538 1.462Q20 9.925 20 12q0 2.075-1.462 3.537Q17.075 17 15 17Zm-8 0v-2h3v2Z"/>
    </Icon>
  );
});

IconMaterialTrailLengthShortFilled.displayName = 'AmauiIconMaterialTrailLengthShortFilled';

export default IconMaterialTrailLengthShortFilled;
