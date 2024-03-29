import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHandGestureFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandGestureFilled'

      short_name='HandGesture'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.5 9 3.35 6.65 1 5.5l2.35-1.15L4.5 2l1.15 2.35L8 5.5 5.65 6.65ZM19 21l-1.3-2.7L15 17l2.7-1.3L19 13l1.3 2.7L23 17l-2.7 1.3Zm-6.675 1q-.875 0-1.662-.363-.788-.362-1.363-1.012L4 14.5l1.35-1.35q.5-.5 1.2-.575.7-.075 1.3.325L9.5 14V6q0-.825.588-1.412Q10.675 4 11.5 4q.125 0 .25.012.125.013.25.063V4q0-.825.588-1.413Q13.175 2 14 2q.6 0 1.075.312.475.313.725.813.175-.05.338-.088Q16.3 3 16.5 3q.825 0 1.413.587.587.588.587 1.413v.075q.125-.05.25-.063Q18.875 5 19 5q.825 0 1.413.588Q21 6.175 21 7v3.5h-1.5V7q0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35v5H17V5q0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15Q16 4.8 16 5v7h-1.5V4q0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35v8H12V6q0-.2-.15-.338-.15-.137-.35-.137-.2 0-.35.15-.15.15-.15.35v10.8l-3.975-2.65q-.2-.125-.375-.075t-.25.125l-.35.35 4.4 5.075q.35.425.838.638.487.212 1.037.212h3.425l.75 1.5Z"/>
    </Icon>
  );
});

IconMaterialHandGestureFilled.displayName = 'AmauiIconMaterialHandGestureFilled';

export default IconMaterialHandGestureFilled;
