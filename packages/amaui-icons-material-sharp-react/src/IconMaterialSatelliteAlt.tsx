import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSatelliteAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SatelliteAlt'

      short_name='SatelliteAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 23.2v-2q2.925 0 4.962-2.037Q21 17.125 21 14.2h2q0 1.875-.712 3.512-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.925-1.638.713-3.513.713Zm0-4v-2q1.25 0 2.125-.875T17 14.2h2q0 2.075-1.462 3.537Q16.075 19.2 14 19.2Zm-8.45 3.375q-.375 0-.75-.15T4.125 22l-3.55-3.55q-.275-.3-.425-.675Q0 17.4 0 17.025q0-.4.15-.763.15-.362.425-.637L3.75 12.45q.575-.575 1.425-.587.85-.013 1.425.562l1.25 1.25.7-.7-2.65-2.65 4.25-4.25L12.8 8.75l.7-.7-1.25-1.25q-.575-.575-.575-1.413 0-.837.575-1.412L15.425.8q.3-.3.675-.45.375-.15.75-.15t.737.15q.363.15.663.45l3.55 3.55q.3.275.438.637.137.363.137.763 0 .375-.137.75-.138.375-.438.675l-3.175 3.175q-.575.575-1.413.575-.837 0-1.412-.575L14.55 9.1l-.7.7 2.65 2.65-4.225 4.225-2.675-2.65-.7.7 1.25 1.25q.575.575.563 1.425-.013.85-.588 1.425L6.95 22q-.275.275-.638.425-.362.15-.762.15Zm0-1.975 1.05-1.05L3.05 16 2 17.05Zm2.125-2.125 1.05-1.05-3.55-3.55-1.05 1.05Zm4.6-4.6 1.4-1.4-3.55-3.55-1.4 1.4Zm4.95-4.95 1.05-1.05-3.55-3.55-1.05 1.05ZM19.35 6.8l1.05-1.05-3.55-3.55-1.05 1.05Zm-8.15 4.6Z"/>
    </Icon>
  );
});

IconMaterialSatelliteAlt.displayName = 'AmauiIconMaterialSatelliteAlt';

export default IconMaterialSatelliteAlt;
