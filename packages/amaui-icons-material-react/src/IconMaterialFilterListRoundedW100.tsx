import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterListRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterListRoundedW100'
      short_name='FilterList'

      {...props}
    >
      <path d="M11 17.35Q10.85 17.35 10.75 17.25Q10.65 17.15 10.65 17Q10.65 16.85 10.75 16.75Q10.85 16.65 11 16.65H13Q13.15 16.65 13.25 16.75Q13.35 16.85 13.35 17Q13.35 17.15 13.25 17.25Q13.15 17.35 13 17.35ZM4 6.35Q3.85 6.35 3.75 6.25Q3.65 6.15 3.65 6Q3.65 5.85 3.75 5.75Q3.85 5.65 4 5.65H20Q20.15 5.65 20.25 5.75Q20.35 5.85 20.35 6Q20.35 6.15 20.25 6.25Q20.15 6.35 20 6.35ZM7 11.85Q6.85 11.85 6.75 11.75Q6.65 11.65 6.65 11.5Q6.65 11.35 6.75 11.25Q6.85 11.15 7 11.15H17Q17.15 11.15 17.25 11.25Q17.35 11.35 17.35 11.5Q17.35 11.65 17.25 11.75Q17.15 11.85 17 11.85Z"/>
    </Icon>
  );
});

IconMaterialFilterListRoundedW100.displayName = 'AmauiIconMaterialFilterListRoundedW100';

export default IconMaterialFilterListRoundedW100;
