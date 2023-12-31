import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCirclesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CirclesW100'

      short_name='Circles'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M679-420q11 0 21-.5t21-2.5q-7 112-88 188.5T440-158q-58 0-109.5-22t-90-60.5Q202-279 180-330.5T158-440q0-112 76.5-192.5T423-722q-2 11-2.5 21.5T420-679q-94 10-157 77.5T200-440q0 100 70 170t170 70q94 0 162.5-63T679-420Zm1-440q75 0 127.5 52.5T860-680q0 75-52.5 127.5T680-500q-75 0-127.5-52.5T500-680q0-75 52.5-127.5T680-860Zm0 318q57.5 0 97.75-40.25T818-680q0-57.5-40.25-97.75T680-818q-57.5 0-97.75 40.25T542-680q0 57.5 40.25 97.75T680-542Zm0-138ZM440-440Z"/>
    </Icon>
  );
});

IconMaterialCirclesW100.displayName = 'AmauiIconMaterialCirclesW100';

export default IconMaterialCirclesW100;
