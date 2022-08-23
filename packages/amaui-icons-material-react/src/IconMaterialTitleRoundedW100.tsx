import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTitleRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TitleRoundedW100'
      short_name='Title'

      {...props}
    >
      <path d="M12 18.85Q11.85 18.85 11.75 18.75Q11.65 18.65 11.65 18.5V5.85H6.5Q6.35 5.85 6.25 5.75Q6.15 5.65 6.15 5.5Q6.15 5.35 6.25 5.25Q6.35 5.15 6.5 5.15H17.5Q17.65 5.15 17.75 5.25Q17.85 5.35 17.85 5.5Q17.85 5.65 17.75 5.75Q17.65 5.85 17.5 5.85H12.35V18.5Q12.35 18.65 12.25 18.75Q12.15 18.85 12 18.85Z"/>
    </Icon>
  );
});

IconMaterialTitleRoundedW100.displayName = 'AmauiIconMaterialTitleRoundedW100';

export default IconMaterialTitleRoundedW100;
