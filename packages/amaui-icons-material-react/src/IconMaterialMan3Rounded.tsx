import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMan3Rounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man3Rounded'
      short_name='Man3'

      {...props}
    >
      <path d="M11 22.25q-.425 0-.712-.288Q10 21.675 10 21.25v-6H9q-.425 0-.712-.288Q8 14.675 8 14.25v-5q0-.825.588-1.413Q9.175 7.25 10 7.25h4q.825 0 1.413.587Q16 8.425 16 9.25v5q0 .425-.287.712-.288.288-.713.288h-1v6q0 .425-.287.712-.288.288-.713.288Zm.65-16.1L10.1 4.6q-.15-.15-.15-.35 0-.2.15-.35l1.55-1.55q.15-.15.35-.15.2 0 .35.15L13.9 3.9q.15.15.15.35 0 .2-.15.35l-1.55 1.55q-.15.15-.35.15-.2 0-.35-.15Z"/>
    </Icon>
  );
});

IconMaterialMan3Rounded.displayName = 'AmauiIconMaterialMan3Rounded';

export default IconMaterialMan3Rounded;
