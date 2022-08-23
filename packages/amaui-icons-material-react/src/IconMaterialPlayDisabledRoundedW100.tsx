import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayDisabledRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayDisabledRoundedW100'
      short_name='PlayDisabled'

      {...props}
    >
      <path d="M14.9 13.05 14.4 12.55 15.3 12 11.35 9.5 9.3 7.45V7.35L15.6 11.35Q15.95 11.55 15.938 11.975Q15.925 12.4 15.575 12.625ZM10.45 15.925Q10.075 16.175 9.688 15.95Q9.3 15.725 9.3 15.275V11.25L5.2 7.15Q5.1 7.05 5.088 6.912Q5.075 6.775 5.2 6.65Q5.325 6.525 5.45 6.525Q5.575 6.525 5.7 6.65L17.3 18.25Q17.4 18.35 17.413 18.488Q17.425 18.625 17.3 18.75Q17.175 18.875 17.05 18.875Q16.925 18.875 16.8 18.75L12.6 14.55ZM10 12ZM10 15.35 12.05 14.05 10 12ZM11.35 9.5Z"/>
    </Icon>
  );
});

IconMaterialPlayDisabledRoundedW100.displayName = 'AmauiIconMaterialPlayDisabledRoundedW100';

export default IconMaterialPlayDisabledRoundedW100;
