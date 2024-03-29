import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterPh = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterPh'

      short_name='WaterPh'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21.95q-3.05-.35-5.025-2.625Q2 17.05 2 13.8q0-1.6.725-3.188.725-1.587 1.825-3.037T6.938 4.85Q8.225 3.575 9.325 2.6q.15-.125.312-.188Q9.8 2.35 10 2.35q.2 0 .363.062.162.063.312.188 1.125 1 2.4 2.262 1.275 1.263 2.375 2.713 1.1 1.45 1.825 3.025.725 1.575.725 3.2v.2h-2v-.2q0-1.825-1.512-4.125Q12.975 7.375 10 4.65 7.025 7.375 5.513 9.675 4 11.975 4 13.8q0 2.425 1.4 4.1 1.4 1.675 3.6 2.025Zm1-9.675ZM14.5 20h-2v1.25q0 .325-.212.538-.213.212-.538.212-.325 0-.537-.212Q11 21.575 11 21.25v-4.5q0-.325.213-.538.212-.212.537-.212h2.75q.6 0 1.05.45.45.45.45 1.05v1q0 .6-.45 1.05-.45.45-1.05.45Zm4-.5v1.75q0 .325-.212.538-.213.212-.538.212-.325 0-.538-.212Q17 21.575 17 21.25v-4.5q0-.325.212-.538.213-.212.538-.212.325 0 .538.212.212.213.212.538V18h2v-1.25q0-.325.212-.538.213-.212.538-.212.325 0 .538.212.212.213.212.538v4.5q0 .325-.212.538-.213.212-.538.212-.325 0-.538-.212-.212-.213-.212-.538V19.5Zm-6-1h2v-1h-2Z"/>
    </Icon>
  );
});

IconMaterialWaterPh.displayName = 'AmauiIconMaterialWaterPh';

export default IconMaterialWaterPh;
