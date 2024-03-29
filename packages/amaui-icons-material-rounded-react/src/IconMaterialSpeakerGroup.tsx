import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeakerGroup = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerGroup'

      short_name='SpeakerGroup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 17h9V3h-9v14Zm0 2q-.825 0-1.412-.587Q8 17.825 8 17V3q0-.825.588-1.413Q9.175 1 10 1h9q.825 0 1.413.587Q21 2.175 21 3v14q0 .825-.587 1.413Q19.825 19 19 19Zm4.5-11.5q.625 0 1.062-.438Q16 6.625 16 6t-.438-1.062Q15.125 4.5 14.5 4.5t-1.062.438Q13 5.375 13 6t.438 1.062q.437.438 1.062.438Zm0 8.5q1.45 0 2.475-1.025Q18 13.95 18 12.5q0-1.45-1.025-2.475Q15.95 9 14.5 9q-1.45 0-2.475 1.025Q11 11.05 11 12.5q0 1.45 1.025 2.475Q13.05 16 14.5 16Zm0-2q-.625 0-1.062-.438Q13 13.125 13 12.5t.438-1.062Q13.875 11 14.5 11t1.062.438Q16 11.875 16 12.5t-.438 1.062Q15.125 14 14.5 14ZM6 23q-.825 0-1.412-.587Q4 21.825 4 21V6q0-.425.287-.713Q4.575 5 5 5t.713.287Q6 5.575 6 6v15h9q.425 0 .713.288.287.287.287.712t-.287.712Q15.425 23 15 23Zm4-20v14V3Z"/>
    </Icon>
  );
});

IconMaterialSpeakerGroup.displayName = 'AmauiIconMaterialSpeakerGroup';

export default IconMaterialSpeakerGroup;
