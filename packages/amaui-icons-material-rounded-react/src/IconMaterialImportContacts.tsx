import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImportContacts = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImportContacts'

      short_name='ImportContacts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 16q1.175 0 2.288.262 1.112.263 2.212.788V7.2q-1.025-.6-2.175-.9Q7.675 6 6.5 6q-.9 0-1.787.175Q3.825 6.35 3 6.7v9.9q.875-.3 1.738-.45Q5.6 16 6.5 16Zm6.5 1.05q1.1-.525 2.213-.788Q16.325 16 17.5 16q.9 0 1.763.15.862.15 1.737.45V6.7q-.825-.35-1.712-.525Q18.4 6 17.5 6q-1.175 0-2.325.3-1.15.3-2.175.9Zm-1 2.425q-.35 0-.662-.087-.313-.088-.588-.238-.975-.575-2.05-.862Q7.625 18 6.5 18q-1.05 0-2.062.275-1.013.275-1.938.775-.525.275-1.012-.025Q1 18.725 1 18.15V6.1q0-.275.138-.525.137-.25.412-.375 1.15-.6 2.4-.9Q5.2 4 6.5 4q1.45 0 2.838.375Q10.725 4.75 12 5.5q1.275-.75 2.663-1.125Q16.05 4 17.5 4q1.3 0 2.55.3 1.25.3 2.4.9.275.125.413.375.137.25.137.525v12.05q0 .575-.487.875-.488.3-1.013.025-.925-.5-1.938-.775Q18.55 18 17.5 18q-1.125 0-2.2.288-1.075.287-2.05.862-.275.15-.587.238-.313.087-.663.087ZM7 11.65Z"/>
    </Icon>
  );
});

IconMaterialImportContacts.displayName = 'AmauiIconMaterialImportContacts';

export default IconMaterialImportContacts;
