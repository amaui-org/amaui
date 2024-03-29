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
      <path d="m19.6 21-6.35-6.35 1.4-1.4L21 19.6Zm-13.65-.7q-2.5-2.45-2.937-5.75-.438-3.3 1.137-6.175.075.85.425 1.912.35 1.063.963 2.238Q6.15 13.7 7 14.938q.85 1.237 1.875 2.437Zm4.3-4.3q-1.2-1.2-2.1-2.613-.9-1.412-1.412-2.737-.513-1.325-.575-2.413-.063-1.087.462-1.612.525-.55 1.613-.5 1.087.05 2.425.563Q12 7.2 13.413 8.112q1.412.913 2.612 2.113Zm7.15-7.15Q16.225 7.825 14.988 7q-1.238-.825-2.4-1.45-1.163-.625-2.225-.988Q9.3 4.2 8.45 4.125q2.875-1.5 6.163-1.038Q17.9 3.55 20.3 5.95Z"/>
    </Icon>
  );
});

IconMaterialBeachAccessFilled.displayName = 'AmauiIconMaterialBeachAccessFilled';

export default IconMaterialBeachAccessFilled;
