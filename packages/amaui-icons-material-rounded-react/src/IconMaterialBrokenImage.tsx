import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrokenImage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImage'

      short_name='BrokenImage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm1-8.425 3.3-3.3q.15-.15.325-.213Q9.8 9 10 9t.375.062q.175.063.325.213l3.3 3.3 3.3-3.3q.15-.15.325-.213Q17.8 9 18 9t.375.062q.175.063.325.213l.3.3V5H5v6.575ZM5 19h14v-6.6l-1-1-3.3 3.3q-.125.125-.312.2-.188.075-.388.075t-.375-.075q-.175-.075-.325-.2L10 11.4l-3.3 3.3q-.15.15-.325.212-.175.063-.375.063t-.375-.063Q5.45 14.85 5.3 14.7l-.3-.3Zm0 0v-6.6 2V5v9.4Z"/>
    </Icon>
  );
});

IconMaterialBrokenImage.displayName = 'AmauiIconMaterialBrokenImage';

export default IconMaterialBrokenImage;
