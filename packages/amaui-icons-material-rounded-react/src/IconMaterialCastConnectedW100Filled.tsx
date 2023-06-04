import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCastConnectedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastConnectedW100Filled'

      short_name='CastConnected'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.8 15h2.45q.325 0 .538-.213.212-.212.212-.537v-4.5q0-.325-.212-.538Q16.575 9 16.25 9H8.775q1.825.925 3.125 2.487Q13.2 13.05 13.8 15Zm-1.5 3.7q0-1.875-.712-3.512-.713-1.638-1.925-2.851-1.213-1.212-2.85-1.925Q5.175 9.7 3.3 9.7V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm-3.7 0q0-2.2-1.55-3.75Q5.5 13.4 3.3 13.4v-3q1.725 0 3.238.65 1.512.65 2.637 1.775t1.775 2.638q.65 1.512.65 3.237Zm-3.7 0q0-.65-.475-1.125T3.3 17.1v-3q1.925.05 3.262 1.375Q7.9 16.8 7.9 18.7Z"/>
    </Icon>
  );
});

IconMaterialCastConnectedW100Filled.displayName = 'AmauiIconMaterialCastConnectedW100Filled';

export default IconMaterialCastConnectedW100Filled;
