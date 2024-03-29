import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeaker = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speaker'

      short_name='Speaker'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 22H7q-.825 0-1.412-.587Q5 20.825 5 20V4q0-.825.588-1.413Q6.175 2 7 2h10q.825 0 1.413.587Q19 3.175 19 4v16q0 .825-.587 1.413Q17.825 22 17 22Zm0-2V4H7v16ZM12 9q.825 0 1.413-.588Q14 7.825 14 7t-.587-1.412Q12.825 5 12 5q-.825 0-1.412.588Q10 6.175 10 7t.588 1.412Q11.175 9 12 9Zm0 10q1.65 0 2.825-1.175Q16 16.65 16 15q0-1.65-1.175-2.825Q13.65 11 12 11q-1.65 0-2.825 1.175Q8 13.35 8 15q0 1.65 1.175 2.825Q10.35 19 12 19Zm0-2q-.825 0-1.412-.587Q10 15.825 10 15q0-.825.588-1.413Q11.175 13 12 13t1.413.587Q14 14.175 14 15q0 .825-.587 1.413Q12.825 17 12 17ZM7 4v16V4Z"/>
    </Icon>
  );
});

IconMaterialSpeaker.displayName = 'AmauiIconMaterialSpeaker';

export default IconMaterialSpeaker;
