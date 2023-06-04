import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHistoryEduW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HistoryEduW100Filled'

      short_name='HistoryEdu'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 18.4q-.3 0-.5-.2t-.2-.5V16h2.7v-3.55q-.975.275-2.037.038Q7.2 12.25 6.55 11.6v-1.5h-1.5L2.4 7.45q.85-.675 1.875-1.038Q5.3 6.05 6.4 6.05q1.05 0 2.038.325.987.325 1.862 1V5.4h9.4v11.3q0 .725-.487 1.213-.488.487-1.213.487ZM11 16h6v.7q0 .425.288.713.287.287.712.287t.712-.287Q19 17.125 19 16.7V6.1h-8V8l5.35 5.35v.5h-.5l-3.1-3.1-.675.675q-.275.275-.525.45T11 12.2ZM5.35 9.4h1.9v1.9q.575.35 1.05.475.475.125.9.125.725 0 1.313-.25.587-.25 1.087-.75l.65-.65L10.4 8.4q-.825-.825-1.85-1.238Q7.525 6.75 6.4 6.75q-.8 0-1.562.225-.763.225-1.338.575Z"/>
    </Icon>
  );
});

IconMaterialHistoryEduW100Filled.displayName = 'AmauiIconMaterialHistoryEduW100Filled';

export default IconMaterialHistoryEduW100Filled;
