import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpoofW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpoofW100'

      short_name='Spoof'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 824q-117 0-216-59.5T109 602q-3.5-6-5.25-12.5T102 576.25q0-6.75 2-13.5t5-12.75q56-103 155-162.5T480 328q117 0 216 59.5T851 550q3.5 6 5.25 12.5t1.75 13.25q0 6.75-2 13.5T851 602q-56 103-155 162.5T480 824Zm0-28q105.563 0 196.282-52Q767 692 820 601q-52-46-112-80.5T582 469q21 20 33.5 47.5T628 576q0 61.667-43.235 104.833Q541.529 724 479.765 724 418 724 375 680.833 332 637.667 332 576q0-33 13-61.5t36-48.5q-69 14-131 47.5T140 601q53 91 143.718 143Q374.437 796 480 796Zm0-100q50.4 0 85.2-34.8Q600 626.4 600 576q0-50.4-34.8-85.2Q530.4 456 480 456q-50.4 0-85.2 34.8Q360 525.6 360 576q0 50.4 34.8 85.2Q429.6 696 480 696ZM129 573q69-72 160-108.5T479.5 428q99.5 0 188.5 41.5T832 575q-50-101-144.5-160t-207-59q-112.5 0-207 58.5T129 573Z"/>
    </Icon>
  );
});

IconMaterialSpoofW100.displayName = 'AmauiIconMaterialSpoofW100';

export default IconMaterialSpoofW100;
