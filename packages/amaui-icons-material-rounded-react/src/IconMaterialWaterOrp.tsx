import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterOrp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterOrp'

      short_name='WaterOrp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 13.8q0-1.6.725-3.188.725-1.587 1.825-3.037T6.938 4.85Q8.225 3.575 9.325 2.6q.15-.125.312-.188Q9.8 2.35 10 2.35q.2 0 .363.062.162.063.312.188 1.125 1 2.4 2.262 1.275 1.263 2.375 2.713 1.1 1.45 1.825 3.025.725 1.575.725 3.2v.2h-2v-.2q0-1.825-1.512-4.125Q12.975 7.375 10 4.65 7.025 7.375 5.513 9.675 4 11.975 4 13.8q0 .7.125 1.35.125.65.375 1.225v3.475q-1.175-1.125-1.837-2.675Q2 15.625 2 13.8Zm8-3.275ZM7.5 22q-.425 0-.713-.288Q6.5 21.425 6.5 21v-4q0-.425.287-.712Q7.075 16 7.5 16H10q.425 0 .713.288.287.287.287.712v4q0 .425-.287.712Q10.425 22 10 22Zm.5-1.5h1.5v-3H8Zm5.5-.5v1.25q0 .325-.212.538-.213.212-.538.212-.325 0-.537-.212Q12 21.575 12 21.25v-4.5q0-.325.213-.538.212-.212.537-.212h2.75q.625 0 1.062.438.438.437.438 1.062v1q0 .45-.25.825-.25.375-.65.575l.5 1.15q.15.35-.062.65-.213.3-.588.3-.2 0-.375-.113-.175-.112-.25-.312L14.65 20Zm6 0v1.25q0 .325-.212.538-.213.212-.538.212-.325 0-.538-.212Q18 21.575 18 21.25v-4.5q0-.325.212-.538.213-.212.538-.212h2.75q.625 0 1.062.438.438.437.438 1.062v1q0 .625-.438 1.062Q22.125 20 21.5 20Zm-6-1.5h2v-1h-2Zm6 0h2v-1h-2Z"/>
    </Icon>
  );
});

IconMaterialWaterOrp.displayName = 'AmauiIconMaterialWaterOrp';

export default IconMaterialWaterOrp;
