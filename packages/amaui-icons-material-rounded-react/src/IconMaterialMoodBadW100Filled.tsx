import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoodBadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoodBadW100Filled'

      short_name='MoodBad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.25 10.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713q-.288-.287-.713-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm-6.5 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q9.175 8.5 8.75 8.5t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm-3.65-4.5h7.3q.25 0 .338-.162.087-.163-.038-.363-.725-1.15-1.787-1.663Q13.1 13.5 12 13.5q-1.1 0-2.162.512-1.063.513-1.788 1.663-.125.2-.038.363.088.162.338.162Z"/>
    </Icon>
  );
});

IconMaterialMoodBadW100Filled.displayName = 'AmauiIconMaterialMoodBadW100Filled';

export default IconMaterialMoodBadW100Filled;
