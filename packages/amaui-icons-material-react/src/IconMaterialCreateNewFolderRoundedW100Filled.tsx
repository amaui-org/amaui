import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreateNewFolderRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreateNewFolderRoundedW100Filled'
      short_name='CreateNewFolder'

      {...props}
    >
      <path d="M15 15.35Q15.15 15.35 15.25 15.25Q15.35 15.15 15.35 15V13.35H17Q17.15 13.35 17.25 13.25Q17.35 13.15 17.35 13Q17.35 12.85 17.25 12.75Q17.15 12.65 17 12.65H15.35V11Q15.35 10.85 15.25 10.75Q15.15 10.65 15 10.65Q14.85 10.65 14.75 10.75Q14.65 10.85 14.65 11V12.65H13Q12.85 12.65 12.75 12.75Q12.65 12.85 12.65 13Q12.65 13.15 12.75 13.25Q12.85 13.35 13 13.35H14.65V15Q14.65 15.15 14.75 15.25Q14.85 15.35 15 15.35ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V7.8Q3.3 7.15 3.725 6.725Q4.15 6.3 4.8 6.3H10.375Q10.675 6.3 10.95 6.412Q11.225 6.525 11.45 6.75L12 7.3H19.2Q19.85 7.3 20.275 7.725Q20.7 8.15 20.7 8.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialCreateNewFolderRoundedW100Filled.displayName = 'AmauiIconMaterialCreateNewFolderRoundedW100Filled';

export default IconMaterialCreateNewFolderRoundedW100Filled;
