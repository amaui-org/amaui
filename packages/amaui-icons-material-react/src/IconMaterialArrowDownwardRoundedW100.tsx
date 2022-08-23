import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDownwardRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDownwardRoundedW100'
      short_name='ArrowDownward'

      {...props}
    >
      <path d="M12 18.7Q11.875 18.7 11.738 18.65Q11.6 18.6 11.475 18.475L5.25 12.25Q5.125 12.125 5.125 12Q5.125 11.875 5.25 11.75Q5.375 11.625 5.5 11.625Q5.625 11.625 5.75 11.75L11.65 17.65V5.35Q11.65 5.2 11.75 5.1Q11.85 5 12 5Q12.15 5 12.25 5.1Q12.35 5.2 12.35 5.35V17.65L18.25 11.75Q18.375 11.625 18.5 11.625Q18.625 11.625 18.75 11.75Q18.875 11.875 18.875 12Q18.875 12.125 18.75 12.25L12.525 18.475Q12.4 18.6 12.275 18.65Q12.15 18.7 12 18.7Z"/>
    </Icon>
  );
});

IconMaterialArrowDownwardRoundedW100.displayName = 'AmauiIconMaterialArrowDownwardRoundedW100';

export default IconMaterialArrowDownwardRoundedW100;
