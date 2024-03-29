import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFireplaceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireplaceFilled'

      short_name='Fireplace'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.6 16.95q.975.8 2.113.387Q13.85 16.925 14 15.65q.125-1.175-.725-1.738-.85-.562-1.275-1.462-.125.35-.125.65 0 .3.075.65.075.425.175.8.1.375.025.8-.125.45-.55.925-.425.475-1 .675ZM4 22q-.825 0-1.412-.587Q2 20.825 2 20V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v16q0 .825-.587 1.413Q20.825 22 20 22Zm8.925-13.9q.075.9.625 1.812.55.913 1.6 1.688.825.6 1.338 1.412Q17 13.825 17 15q0 .875-.275 1.613Q16.45 17.35 16 18h1q.425 0 .712.288.288.287.288.712v1h2V4H4v16h2v-1q0-.425.287-.712Q6.575 18 7 18h1.25q-.575-.725-.912-1.525Q7 15.675 7 14.95q0-2.15.975-3.863.975-1.712 4.075-3.537.375-.225.6-.088.225.138.275.638Z"/>
    </Icon>
  );
});

IconMaterialFireplaceFilled.displayName = 'AmauiIconMaterialFireplaceFilled';

export default IconMaterialFireplaceFilled;
