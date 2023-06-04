import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickPhrasesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickPhrasesW100Filled'

      short_name='QuickPhrases'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.3 19.4v-3.7h-.225q-2.35 0-4.062-1.475Q3.3 12.75 3.3 10.5q0-2.175 1.512-3.675 1.513-1.5 3.688-1.5h2.45L8.7 3.075l.5-.5 3.1 3.1-3.1 3.1-.5-.5 2.25-2.25H8.5q-1.875 0-3.188 1.3Q4 8.625 4 10.5q0 1.95 1.525 3.225Q7.05 15 9.075 15H10v2.7l2.675-2.7H15.5q1.875 0 3.2-1.312 1.325-1.313 1.325-3.188 0-1.875-1.325-3.188Q17.375 6 15.5 6h-.25v-.7h.25q2.175 0 3.7 1.512 1.525 1.513 1.525 3.688 0 2.175-1.525 3.688-1.525 1.512-3.7 1.512H13Z"/>
    </Icon>
  );
});

IconMaterialQuickPhrasesW100Filled.displayName = 'AmauiIconMaterialQuickPhrasesW100Filled';

export default IconMaterialQuickPhrasesW100Filled;
