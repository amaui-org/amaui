import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlag2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Flag2W100'

      short_name='Flag2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-464v318q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-612q0-12.75 8.63-21.38Q269.25-788 282-788h456q8 0 14.93 3.85 6.92 3.84 11 10Q768-768 768.5-760t-3.76 16.13L703-626l61.74 117.87Q769-500 768.5-492q-.5 8-4.57 14.15-4.08 6.16-11 10Q746-464 738-464H280Zm0-28h461l-55-106q-7-13.09-7-28.04 0-14.96 7-27.96l55-106H280v268Zm0 0v-268 268Z"/>
    </Icon>
  );
});

IconMaterialFlag2W100.displayName = 'AmauiIconMaterialFlag2W100';

export default IconMaterialFlag2W100;
