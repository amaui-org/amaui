import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBeachAccessFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeachAccessFilled'

      short_name='BeachAccess'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.9 20.3-5.65-5.65 1.4-1.4 5.65 5.65q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM4.5 18.525Q3 16.2 2.913 13.487q-.088-2.712 1.237-5.112.075.85.425 1.912.35 1.063.963 2.238Q6.15 13.7 7 14.938q.85 1.237 1.875 2.437l-1.3 1.3q-.7.7-1.637.662Q5 19.3 4.5 18.525ZM10.25 16q-1.2-1.2-2.1-2.613-.9-1.412-1.412-2.737-.513-1.325-.575-2.413-.063-1.087.462-1.612.525-.55 1.613-.5 1.087.05 2.425.563Q12 7.2 13.413 8.112q1.412.913 2.612 2.113Zm8.425-8.425L17.4 8.85Q16.225 7.825 14.988 7q-1.238-.825-2.4-1.45-1.163-.625-2.225-.988Q9.3 4.2 8.45 4.125 10.825 2.9 13.525 3q2.7.1 4.975 1.525.775.5.825 1.425.05.925-.65 1.625Z"/>
    </Icon>
  );
});

IconMaterialBeachAccessFilled.displayName = 'AmauiIconMaterialBeachAccessFilled';

export default IconMaterialBeachAccessFilled;
