import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRamenDining = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RamenDining'

      short_name='RamenDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.975 20h4v-1.1l1.25-.5q1.625-.65 2.763-1.813 1.137-1.162 1.637-2.587h-15.3q.5 1.425 1.625 2.587Q7.075 17.75 8.725 18.4l1.25.5Zm-1 2q-.425 0-.712-.288-.288-.287-.288-.712v-.75q-2.4-.95-3.987-2.812Q2.4 15.575 2.05 13.15q-.05-.45.262-.8.313-.35.813-.35h.85V4.9q0-.375.262-.663.263-.287.638-.337L21.15 2.1q.35-.05.588.162.237.213.237.563 0 .275-.187.487-.188.213-.463.263L10.475 4.8v1.7h10.75q.325 0 .538.213.212.212.212.537 0 .325-.212.537Q21.55 8 21.225 8h-10.75v4h10.35q.5 0 .813.35.312.35.262.8-.35 2.425-1.938 4.288-1.587 1.862-3.987 2.812V21q0 .425-.287.712-.288.288-.713.288Zm-1-15.5h1V4.95l-1 .1Zm-2.5 0h1V5.25l-1 .1Zm2.5 5.5h1V8h-1Zm-2.5 0h1V8h-1Zm6.5 8Z"/>
    </Icon>
  );
});

IconMaterialRamenDining.displayName = 'AmauiIconMaterialRamenDining';

export default IconMaterialRamenDining;
