import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImportContactsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImportContactsFilled'

      short_name='ImportContacts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 17.05q1.1-.525 2.213-.788Q16.325 16 17.5 16q.9 0 1.763.15.862.15 1.737.45V6.7q-.825-.35-1.712-.525Q18.4 6 17.5 6q-1.175 0-2.325.3-1.15.3-2.175.9Zm-1 2.425q-.35 0-.662-.087-.313-.088-.588-.238-.975-.575-2.05-.862Q7.625 18 6.5 18q-1.05 0-2.062.275-1.013.275-1.938.775-.525.275-1.012-.025Q1 18.725 1 18.15V6.1q0-.275.138-.525.137-.25.412-.375 1.175-.575 2.413-.888Q5.2 4 6.5 4q1.45 0 2.838.375Q10.725 4.75 12 5.5q1.275-.75 2.663-1.125Q16.05 4 17.5 4q1.3 0 2.538.312 1.237.313 2.412.888.275.125.413.375.137.25.137.525v12.05q0 .575-.487.875-.488.3-1.013.025-.925-.5-1.938-.775Q18.55 18 17.5 18q-1.125 0-2.2.288-1.075.287-2.05.862-.275.15-.587.238-.313.087-.663.087Z"/>
    </Icon>
  );
});

IconMaterialImportContactsFilled.displayName = 'AmauiIconMaterialImportContactsFilled';

export default IconMaterialImportContactsFilled;
