import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLandslideFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandslideFilled'

      short_name='Landslide'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20v-2.25l4 1.3 11.025-3.675L19.6 18.8q.75 1 .2 2.1T18 22H4q-.825 0-1.412-.587Q2 20.825 2 20Zm4-3.05L2 15.6v-1.85l4 1.3 6.9-2.3 2.55 1.025Zm13.6-3.45 2.2-.975q.55-.25.875-.738Q23 11.3 23 10.7V9.6q0-.7-.438-1.25-.437-.55-1.137-.7l-2-.45q-.45-.1-.887.012-.438.113-.788.388l-1 .8q-.35.275-.55.687-.2.413-.2.863v1.1q0 .45.2.862.2.413.55.688l.8.65q.425.35.988.412.562.063 1.062-.162ZM6 12.95 2 11.6V10q0-.825.588-1.413Q3.175 8 4 8h3q.475 0 .9.212.425.213.7.588l1.975 2.625Zm6.975-5.35 2.775-1.1q.575-.225.913-.725.337-.5.337-1.125v-2q0-.725-.45-1.288Q16.1.8 15.4.675L12.8.15q-.4-.075-.775 0t-.725.3l-1.4.95q-.425.275-.662.725-.238.45-.238.95v1.85q0 .5.238.95.237.45.662.725l1.225.825q.425.275.913.325.487.05.937-.15Z"/>
    </Icon>
  );
});

IconMaterialLandslideFilled.displayName = 'AmauiIconMaterialLandslideFilled';

export default IconMaterialLandslideFilled;
