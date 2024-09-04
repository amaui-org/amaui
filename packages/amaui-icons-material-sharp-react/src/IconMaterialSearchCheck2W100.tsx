import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSearchCheck2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchCheck2W100'

      short_name='SearchCheck2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M409.88-301Q514-301 586.5-373.88t72.5-177Q659-655 586.32-728q-72.67-73-176.5-73Q306-801 233-728.12t-73 177Q160-447 232.88-374t177 73ZM370-451l179-180-20-20-159 160-80-80-20 20 100 100Zm40 178q-115 0-196.5-81.5T132-551q0-115 81.5-196.5T410-829q115 0 196 81.5T687-551q0 53.83-19 101.42Q649-402 616-365l212 212-19 21-213-213q-37 34-84.58 53-47.59 19-101.42 19Zm0-278Z"/>
    </Icon>
  );
});

IconMaterialSearchCheck2W100.displayName = 'AmauiIconMaterialSearchCheck2W100';

export default IconMaterialSearchCheck2W100;
