import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStyleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StyleW100Filled'

      short_name='Style'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.425 20.45q-.8-.35-1.075-1.15-.275-.8.075-1.55l1-2.15Zm5 1.4q-.825 0-1.413-.587-.587-.588-.587-1.413V16.5l1.7 4.7q.075.2.15.35.075.15.2.3Zm3.5-1.15q-.275.125-.55-.037-.275-.163-.4-.463L7.525 8q-.125-.275.025-.55t.425-.4l7.55-2.75q.275-.125.525.037.25.163.375.463l4.45 12.15q.125.3.013.588-.113.287-.413.412Zm-1.7-10.7q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q11.65 8 11.225 8t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialStyleW100Filled.displayName = 'AmauiIconMaterialStyleW100Filled';

export default IconMaterialStyleW100Filled;
