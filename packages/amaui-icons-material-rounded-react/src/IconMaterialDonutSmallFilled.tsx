import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDonutSmallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DonutSmallFilled'

      short_name='DonutSmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.825 11q-.225-.65-.687-1.137-.463-.488-1.113-.713v-7.1q3.575.35 6.088 2.862Q21.625 7.425 21.975 11Zm-3.8 10.95q-3.85-.375-6.425-3.225Q2.025 15.875 2.025 12q0-3.875 2.575-6.725 2.575-2.85 6.425-3.225v7.1q-.9.325-1.45 1.112-.55.788-.55 1.738t.55 1.712q.55.763 1.45 1.088Zm2 0V14.8q.65-.225 1.113-.688.462-.462.687-1.112h7.15q-.35 3.575-2.862 6.087Q16.6 21.6 13.025 21.95Z"/>
    </Icon>
  );
});

IconMaterialDonutSmallFilled.displayName = 'AmauiIconMaterialDonutSmallFilled';

export default IconMaterialDonutSmallFilled;
