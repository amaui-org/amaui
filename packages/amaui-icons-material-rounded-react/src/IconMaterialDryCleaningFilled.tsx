import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDryCleaningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DryCleaningFilled'

      short_name='DryCleaning'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 22q-.825 0-1.412-.587Q7 20.825 7 20v-4H5.4q-.975 0-1.688-.713Q3 14.575 3 13.6q0-.725.388-1.338.387-.612 1.062-.912L11 8.45V7.8q-.875-.3-1.438-1.063Q9 5.975 9 5q0-1.275.863-2.138Q10.725 2 12 2q1.05 0 1.812.512.763.513.988 1.313.125.475-.15.825t-.825.35q-.35 0-.6-.163-.25-.162-.45-.437-.125-.2-.337-.3Q12.225 4 12 4q-.425 0-.712.287Q11 4.575 11 5t.288.713Q11.575 6 12 6t.713.287Q13 6.575 13 7v1.45l6.55 2.9q.675.3 1.063.912.387.613.387 1.338 0 .975-.712 1.687Q19.575 16 18.6 16H17v4q0 .825-.587 1.413Q15.825 22 15 22Zm-3.6-8h1.875q.325-.5.738-.75Q8.425 13 9 13h6q.575 0 .988.25.412.25.737.75H18.6q.225 0 .313-.15.087-.15.087-.3 0-.125-.062-.213-.063-.087-.188-.137l-6.75-3-6.75 3q-.125.05-.188.137Q5 13.425 5 13.55q0 .2.1.325t.3.125Z"/>
    </Icon>
  );
});

IconMaterialDryCleaningFilled.displayName = 'AmauiIconMaterialDryCleaningFilled';

export default IconMaterialDryCleaningFilled;
