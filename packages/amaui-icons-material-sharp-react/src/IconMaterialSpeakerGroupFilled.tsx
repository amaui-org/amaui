import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeakerGroupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerGroupFilled'

      short_name='SpeakerGroup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 19V1h13v18Zm6.5-11.5q.625 0 1.062-.438Q16 6.625 16 6t-.438-1.062Q15.125 4.5 14.5 4.5t-1.062.438Q13 5.375 13 6t.438 1.062q.437.438 1.062.438Zm0 8.5q1.45 0 2.475-1.025Q18 13.95 18 12.5q0-1.45-1.025-2.475Q15.95 9 14.5 9q-1.45 0-2.475 1.025Q11 11.05 11 12.5q0 1.45 1.025 2.475Q13.05 16 14.5 16Zm0-2q-.625 0-1.062-.438Q13 13.125 13 12.5t.438-1.062Q13.875 11 14.5 11t1.062.438Q16 11.875 16 12.5t-.438 1.062Q15.125 14 14.5 14Zm1.5 9H4V5h2v16h10Z"/>
    </Icon>
  );
});

IconMaterialSpeakerGroupFilled.displayName = 'AmauiIconMaterialSpeakerGroupFilled';

export default IconMaterialSpeakerGroupFilled;
