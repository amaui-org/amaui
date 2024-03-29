import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableLamp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableLamp'

      short_name='TableLamp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 21q-.425 0-.712-.288Q13 20.425 13 20t.288-.712Q13.575 19 14 19h6q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 21 20 21ZM5.525 9H9V5H7.275ZM17 18q-.425 0-.712-.288Q16 17.425 16 17V8q0-.425-.287-.713Q15.425 7 15 7h-4v3q0 .425-.287.712Q10.425 11 10 11H4q-.55 0-.85-.45-.3-.45-.075-.95L5.45 4.2q.25-.55.738-.875Q6.675 3 7.275 3H9q.825 0 1.413.587Q11 4.175 11 5h4q1.25 0 2.125.875T18 8v9q0 .425-.288.712Q17.425 18 17 18ZM5.525 9H9Z"/>
    </Icon>
  );
});

IconMaterialTableLamp.displayName = 'AmauiIconMaterialTableLamp';

export default IconMaterialTableLamp;
