import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCastConnectedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastConnectedW100'

      short_name='CastConnected'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.25 9H8.775q1.825.925 3.125 2.487Q13.2 13.05 13.8 15h2.45q.325 0 .538-.213.212-.212.212-.537v-4.5q0-.325-.212-.538Q16.575 9 16.25 9Zm-1.95 9.7V18h4.9q.35 0 .575-.225Q20 17.55 20 17.2V6.8q0-.35-.225-.575Q19.55 6 19.2 6H4.8q-.35 0-.575.225Q4 6.45 4 6.8v.9h-.7v-.9q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm-11 0h1.6q0-.65-.475-1.125T3.3 17.1Zm4.6 0h.7q0-2.2-1.55-3.75Q5.5 13.4 3.3 13.4v.7q1.925.05 3.262 1.375Q7.9 16.8 7.9 18.7Zm-4.6-9v.7q1.725 0 3.238.65 1.512.65 2.637 1.775t1.775 2.638q.65 1.512.65 3.237h.7q0-1.875-.712-3.512-.713-1.638-1.925-2.851-1.213-1.212-2.85-1.925Q5.175 9.7 3.3 9.7Zm8.35 2.65Z"/>
    </Icon>
  );
});

IconMaterialCastConnectedW100.displayName = 'AmauiIconMaterialCastConnectedW100';

export default IconMaterialCastConnectedW100;
