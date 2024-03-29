import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiningFilled'

      short_name='Dining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22q-.825 0-1.412-.587Q2 20.825 2 20V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v16q0 .825-.587 1.413Q20.825 22 20 22Zm4.75-3q.325 0 .538-.212.212-.213.212-.538v-6q.65-.2 1.075-.713Q11 11.025 11 10.3V6.5q0-.2-.15-.35Q10.7 6 10.5 6q-.2 0-.35.15-.15.15-.15.35V9h-.75V6.5q0-.2-.15-.35Q8.95 6 8.75 6q-.2 0-.35.15-.15.15-.15.35V9H7.5V6.5q0-.2-.15-.35Q7.2 6 7 6q-.2 0-.35.15-.15.15-.15.35v3.8q0 .725.425 1.237.425.513 1.075.713v6q0 .325.213.538.212.212.537.212Zm6 0q.325 0 .538-.212.212-.213.212-.538v-5.6q.825-.4 1.288-1.275.462-.875.462-2.05 0-1.425-.712-2.375Q15.825 6 14.75 6q-1.075 0-1.787.95-.713.95-.713 2.375 0 1.175.463 2.05.462.875 1.287 1.275v5.6q0 .325.213.538.212.212.537.212Z"/>
    </Icon>
  );
});

IconMaterialDiningFilled.displayName = 'AmauiIconMaterialDiningFilled';

export default IconMaterialDiningFilled;
