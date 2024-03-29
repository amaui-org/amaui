import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFireExtinguisherFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireExtinguisherFilled'

      short_name='FireExtinguisher'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 22q-.825 0-1.412-.587Q7 20.825 7 20v-1h10v1q0 .825-.587 1.413Q15.825 22 15 22Zm-2-4v-5h10v5Zm.1-6q.25-1.15 1.05-2.163.8-1.012 2.025-1.487-.25-.2-.45-.438-.2-.237-.35-.512L5 6.5v-1l4.375-.9q.375-.725 1.063-1.162Q11.125 3 12 3q.525 0 1 .175t.85.475L17 3v6l-3.175-.65q1.175.475 1.987 1.437.813.963 1.088 2.213ZM12 7q.425 0 .713-.287Q13 6.425 13 6q-.025-.45-.3-.725Q12.425 5 12 5q-.425 0-.712.287Q11 5.575 11 6t.288.713Q11.575 7 12 7Z"/>
    </Icon>
  );
});

IconMaterialFireExtinguisherFilled.displayName = 'AmauiIconMaterialFireExtinguisherFilled';

export default IconMaterialFireExtinguisherFilled;
