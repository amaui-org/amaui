import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPublish = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Publish'

      short_name='Publish'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20q-.425 0-.712-.288Q11 19.425 11 19v-7.15l-1.875 1.875q-.275.275-.713.263-.437-.013-.712-.288-.275-.275-.275-.7 0-.425.275-.7l3.6-3.6q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l3.6 3.6q.275.275.275.7 0 .425-.275.7-.275.275-.712.288-.438.012-.713-.263L13 11.85V19q0 .425-.287.712Q12.425 20 12 20ZM5 9q-.425 0-.713-.288Q4 8.425 4 8V6q0-.825.588-1.412Q5.175 4 6 4h12q.825 0 1.413.588Q20 5.175 20 6v2q0 .425-.288.712Q19.425 9 19 9t-.712-.288Q18 8.425 18 8V6H6v2q0 .425-.287.712Q5.425 9 5 9Z"/>
    </Icon>
  );
});

IconMaterialPublish.displayName = 'AmauiIconMaterialPublish';

export default IconMaterialPublish;
