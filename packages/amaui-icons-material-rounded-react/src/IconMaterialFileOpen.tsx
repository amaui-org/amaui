import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileOpen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileOpen'

      short_name='FileOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h7.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V14h-2V9h-4q-.425 0-.712-.288Q13 8.425 13 8V4H6v16h9v2Zm15.225-.35L19 19.425v1.225q0 .425-.288.712-.287.288-.712.288t-.712-.288Q17 21.075 17 20.65V17q0-.425.288-.712Q17.575 16 18 16h3.65q.425 0 .713.288.287.287.287.712t-.287.712q-.288.288-.713.288H20.4l2.25 2.25q.275.275.275.688 0 .412-.275.712-.3.3-.712.3-.413 0-.713-.3ZM6 20V4v16Z"/>
    </Icon>
  );
});

IconMaterialFileOpen.displayName = 'AmauiIconMaterialFileOpen';

export default IconMaterialFileOpen;
