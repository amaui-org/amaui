import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenshotFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotFilled'

      short_name='Screenshot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.75 11q-.325 0-.537-.213Q8 10.575 8 10.25v-2.5q0-.325.213-.537Q8.425 7 8.75 7h2.5q.325 0 .538.213.212.212.212.537 0 .325-.212.537-.213.213-.538.213H9.5v1.75q0 .325-.212.537Q9.075 11 8.75 11Zm4 6q-.325 0-.537-.212Q12 16.575 12 16.25q0-.325.213-.538.212-.212.537-.212h1.75v-1.75q0-.325.213-.538.212-.212.537-.212.325 0 .538.212.212.213.212.538v2.5q0 .325-.212.538-.213.212-.538.212ZM7 23q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v18q0 .825-.587 1.413Q17.825 23 17 23Zm0-5h10V6H7Z"/>
    </Icon>
  );
});

IconMaterialScreenshotFilled.displayName = 'AmauiIconMaterialScreenshotFilled';

export default IconMaterialScreenshotFilled;
