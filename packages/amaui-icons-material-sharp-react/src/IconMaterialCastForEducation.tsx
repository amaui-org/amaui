import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCastForEducation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastForEducation'

      short_name='CastForEducation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15 11.5 3.5-2-3.5-2-3.5 2Zm0 2.425 2.5-1.425V11L15 12.425 12.5 11v1.5ZM15 20v-2h5V6H4v1H2V4h20v16ZM2 20h3q0-1.25-.875-2.125T2 17Zm5 0h2q0-2.925-2.037-4.963Q4.925 13 2 13v2q2.075 0 3.537 1.462Q7 17.925 7 20ZM2 9v2q1.875 0 3.513.712 1.637.713 2.85 1.925 1.212 1.213 1.925 2.851Q11 18.125 11 20h2q0-2.275-.863-4.275-.862-2-2.362-3.5t-3.5-2.362Q4.275 9 2 9Zm9 4Z"/>
    </Icon>
  );
});

IconMaterialCastForEducation.displayName = 'AmauiIconMaterialCastForEducation';

export default IconMaterialCastForEducation;
