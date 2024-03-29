import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsEsportsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsEsportsFilled'

      short_name='SportsEsports'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.55 19q-1.275 0-1.975-.887-.7-.888-.525-2.163l1.05-7.5q.225-1.5 1.338-2.475Q5.55 5 7.05 5h9.9q1.5 0 2.612.975 1.113.975 1.338 2.475l1.05 7.5q.175 1.275-.525 2.163-.7.887-1.975.887-.525 0-.975-.188-.45-.187-.825-.562L15.4 16H8.6l-2.25 2.25q-.375.375-.825.562-.45.188-.975.188ZM17 13q.425 0 .712-.288Q18 12.425 18 12t-.288-.713Q17.425 11 17 11t-.712.287Q16 11.575 16 12t.288.712Q16.575 13 17 13Zm-2-3q.425 0 .713-.288Q16 9.425 16 9t-.287-.713Q15.425 8 15 8t-.712.287Q14 8.575 14 9t.288.712Q14.575 10 15 10Zm-6.5 3q.325 0 .538-.213.212-.212.212-.537v-1h1q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212h-1v-1q0-.325-.212-.538Q8.825 8 8.5 8q-.325 0-.537.212-.213.213-.213.538v1h-1q-.325 0-.537.212Q6 10.175 6 10.5q0 .325.213.537.212.213.537.213h1v1q0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialSportsEsportsFilled.displayName = 'AmauiIconMaterialSportsEsportsFilled';

export default IconMaterialSportsEsportsFilled;
