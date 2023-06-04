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
      <path d="M13.8 15H17V9H8.775q1.825.925 3.125 2.487Q13.2 13.05 13.8 15Zm-1.5 3.7q0-1.875-.712-3.512-.713-1.638-1.925-2.851-1.213-1.212-2.85-1.925Q5.175 9.7 3.3 9.7V5.3h17.4v13.4Zm-3.7 0q0-2.2-1.55-3.75Q5.5 13.4 3.3 13.4v-3q1.725 0 3.238.65 1.512.65 2.637 1.775t1.775 2.638q.65 1.512.65 3.237Zm-3.7 0q0-.65-.475-1.125T3.3 17.1v-3q1.925.05 3.262 1.375Q7.9 16.8 7.9 18.7Z"/>
    </Icon>
  );
});

IconMaterialCastConnectedW100Filled.displayName = 'AmauiIconMaterialCastConnectedW100Filled';

export default IconMaterialCastConnectedW100Filled;
