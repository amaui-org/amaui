import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLandslide = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Landslide'

      short_name='Landslide'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22h14q1.25 0 1.8-1.1t-.2-2.1L16 14l-5-2-2.4-3.2q-.275-.375-.7-.588Q7.475 8 7 8H4q-.825 0-1.412.587Q2 9.175 2 10v10q0 .825.588 1.413Q3.175 22 4 22Zm0-2v-1.6l2 .65 9.025-3L18 20H4Zm2-3.05-2-.675V14.4l2 .65 3.95-1.3 2.4 1.075Zm13.6-3.45 2.2-.975q.55-.25.875-.738Q23 11.3 23 10.7V9.6q0-.7-.438-1.25-.437-.55-1.137-.7l-2-.45q-.45-.1-.887.012-.438.113-.788.388l-1 .8q-.35.275-.55.687-.2.413-.2.863v1.1q0 .45.2.862.2.413.55.688l.8.65q.425.35.988.412.562.063 1.062-.162ZM6 12.95l-2-.675V10h3l1.625 2.075Zm12.8-1.275-.8-.625v-1.1l1-.8 2 .45v1.1ZM12.975 7.6l2.775-1.1q.575-.225.913-.725.337-.5.337-1.125v-2q0-.725-.45-1.288Q16.1.8 15.4.675L12.8.15q-.4-.075-.775 0t-.725.3l-1.4.95q-.425.275-.662.725-.238.45-.238.95v1.85q0 .5.238.95.237.45.662.725l1.225.825q.425.275.913.325.487.05.937-.15Zm-.75-1.85L11 4.925v-1.85l1.425-.95L15 2.65v2Z"/>
    </Icon>
  );
});

IconMaterialLandslide.displayName = 'AmauiIconMaterialLandslide';

export default IconMaterialLandslide;
