import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayDisabledRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayDisabledRoundedFilled'
      short_name='PlayDisabled'

      {...props}
    >
      <path d="M9.55 18.025Q9.05 18.35 8.525 18.062Q8 17.775 8 17.175V10.8L2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.5Q20.775 20.775 20.775 21.188Q20.775 21.6 20.475 21.9Q20.175 22.175 19.775 22.175Q19.375 22.175 19.075 21.875L13 15.8ZM16.45 13.6 8 5.15V5L17.675 11.15Q18.15 11.425 18.138 11.987Q18.125 12.55 17.65 12.85Z"/>
    </Icon>
  );
});

IconMaterialPlayDisabledRoundedFilled.displayName = 'AmauiIconMaterialPlayDisabledRoundedFilled';

export default IconMaterialPlayDisabledRoundedFilled;
