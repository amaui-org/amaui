import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSprintFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SprintFilled'

      short_name='Sprint'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.05 13.375 6.125 19.3q-.3.3-.713.3-.412 0-.712-.3t-.3-.713q0-.412.3-.712L13.6 9H11v1q0 .425-.287.712Q10.425 11 10 11t-.712-.288Q9 10.425 9 10V8q0-.425.288-.713Q9.575 7 10 7h4.85q.4 0 .763.15.362.15.637.425l3 2.975q.5.5 1.163.837.662.338 1.437.488.425.075.738.387.312.313.312.738t-.35.7q-.35.275-.775.225-1.125-.15-2.075-.6-.95-.45-1.75-1.225l-1-1.05-2.2 2.2 1.325 1.325q.35.35.288.837-.063.488-.488.738l-4.55 2.625q-.35.2-.763.1-.412-.1-.612-.45t-.087-.762q.112-.413.462-.613l3.425-1.975ZM4 13q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h3q.425 0 .713.287Q8 11.575 8 12t-.287.712Q7.425 13 7 13Zm-2-3q-.425 0-.712-.288Q1 9.425 1 9t.288-.713Q1.575 8 2 8h3q.425 0 .713.287Q6 8.575 6 9t-.287.712Q5.425 10 5 10Zm17.475-2q-.825 0-1.425-.588-.6-.587-.6-1.412t.6-1.412Q18.65 4 19.475 4q.825 0 1.425.588.6.587.6 1.412t-.6 1.412Q20.3 8 19.475 8ZM4 7q-.425 0-.712-.287Q3 6.425 3 6t.288-.713Q3.575 5 4 5h3q.425 0 .713.287Q8 5.575 8 6t-.287.713Q7.425 7 7 7Z"/>
    </Icon>
  );
});

IconMaterialSprintFilled.displayName = 'AmauiIconMaterialSprintFilled';

export default IconMaterialSprintFilled;
