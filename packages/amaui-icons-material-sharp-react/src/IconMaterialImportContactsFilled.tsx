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
      <path d="M13 17.05q1.1-.525 2.213-.788Q16.325 16 17.5 16q.9 0 1.763.15.862.15 1.737.45V6.7q-.825-.35-1.712-.525Q18.4 6 17.5 6q-1.175 0-2.325.3-1.15.3-2.175.9ZM12 20q-1.2-.95-2.6-1.475Q8 18 6.5 18q-1.325 0-2.775.5T1 20.05V5.55Q2.1 4.8 3.588 4.4 5.075 4 6.5 4q1.45 0 2.838.375Q10.725 4.75 12 5.5q1.275-.75 2.663-1.125Q16.05 4 17.5 4q1.425 0 2.913.4Q21.9 4.8 23 5.55v14.5Q21.75 19 20.288 18.5 18.825 18 17.5 18q-1.5 0-2.9.525T12 20Z"/>
    </Icon>
  );
});

IconMaterialImportContactsFilled.displayName = 'AmauiIconMaterialImportContactsFilled';

export default IconMaterialImportContactsFilled;
