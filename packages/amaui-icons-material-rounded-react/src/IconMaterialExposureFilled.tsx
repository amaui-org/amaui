import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExposureFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureFilled'

      short_name='Exposure'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21ZM6.75 8.5h3.5q.325 0 .538-.213Q11 8.075 11 7.75q0-.325-.212-.537Q10.575 7 10.25 7h-3.5q-.325 0-.537.213Q6 7.425 6 7.75q0 .325.213.537.212.213.537.213ZM5 19h14V5L5 19Zm10.25-1q-.325 0-.537-.212-.213-.213-.213-.538V16h-1.25q-.325 0-.537-.213-.213-.212-.213-.537 0-.325.213-.538.212-.212.537-.212h1.25v-1.25q0-.325.213-.538.212-.212.537-.212.325 0 .538.212.212.213.212.538v1.25h1.25q.325 0 .538.212.212.213.212.538 0 .325-.212.537-.213.213-.538.213H16v1.25q0 .325-.212.538-.213.212-.538.212Z"/>
    </Icon>
  );
});

IconMaterialExposureFilled.displayName = 'AmauiIconMaterialExposureFilled';

export default IconMaterialExposureFilled;
