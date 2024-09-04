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
      <path d="M409.88-301Q514-301 586.5-373.88t72.5-177Q659-655 586.32-728q-72.67-73-176.5-73Q306-801 233-728.12t-73 177Q160-447 232.88-374t177 73ZM370-491l-70-70q-4-4-9.5-4.5T280-561q-5 5-5 10t5 10l69 69q8.8 9 20.9 9 12.1 0 21.1-9l148-149q4-4 4.5-9.5T539-641q-5-5-10-5t-10 5L370-491Zm40 218q-115 0-196.5-81.5T132-551q0-115 81.5-196.5T410-829q115 0 196 81.5T687-551q0 53.83-19 101.42Q649-402 616-365l203 203q4 3.73 4 8.87 0 5.13-4.21 10.13-4.21 5-10 5T798-143L596-345q-37 34-84.58 53-47.59 19-101.42 19Zm0-278Z"/>
    </Icon>
  );
});

IconMaterialSearchCheck2W100.displayName = 'AmauiIconMaterialSearchCheck2W100';

export default IconMaterialSearchCheck2W100;
