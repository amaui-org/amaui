import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonochromePhotosFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonochromePhotosFilled'

      short_name='MonochromePhotos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19h8V7h-8v1.5q-1.875 0-3.188 1.312Q7.5 11.125 7.5 13q0 1.875 1.312 3.188Q10.125 17.5 12 17.5Zm0-1.5v-2q1.05 0 1.775-.725.725-.725.725-1.775 0-1.05-.725-1.775Q13.05 10.5 12 10.5v-2q1.875 0 3.188 1.312Q16.5 11.125 16.5 13q0 1.875-1.312 3.188Q13.875 17.5 12 17.5Zm0-2q-1.05 0-1.775-.725Q9.5 14.05 9.5 13q0-1.05.725-1.775Q10.95 10.5 12 10.5ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19V7q0-.825.588-1.412Q3.175 5 4 5h3.15L8.4 3.65q.275-.325.662-.488Q9.45 3 9.875 3h4.25q.425 0 .813.162.387.163.662.488L16.85 5H20q.825 0 1.413.588Q22 6.175 22 7v12q0 .825-.587 1.413Q20.825 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialMonochromePhotosFilled.displayName = 'AmauiIconMaterialMonochromePhotosFilled';

export default IconMaterialMonochromePhotosFilled;
