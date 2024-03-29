import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoDrinks = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoDrinks'

      short_name='NoDrinks'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21q-.425 0-.713-.288Q6 20.425 6 20t.287-.712Q6.575 19 7 19h4v-5l-1.2-1.35-7.7-7.725q-.275-.275-.275-.688 0-.412.275-.712.3-.3.712-.3.413 0 .713.3L20.5 20.5q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3L13 15.85V19h4.025q.425 0 .7.288.275.287.275.712t-.288.712Q17.425 21 17 21ZM5.85 3h13.7q.6 0 1.025.438.425.437.425 1.037 0 .275-.087.5-.088.225-.263.425l-5.85 6.55-1.425-1.375L14.775 9h-2.95L9.85 7h6.7l1.8-2H7.85Zm6.75 6.775Z"/>
    </Icon>
  );
});

IconMaterialNoDrinks.displayName = 'AmauiIconMaterialNoDrinks';

export default IconMaterialNoDrinks;
