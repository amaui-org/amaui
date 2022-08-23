import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderSpecialRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSpecialRoundedW100Filled'
      short_name='FolderSpecial'

      {...props}
    >
      <path d="M14.9 14.575 16.025 15.45Q16.175 15.575 16.325 15.475Q16.475 15.375 16.425 15.175L16 13.75L17.225 12.75Q17.35 12.625 17.3 12.462Q17.25 12.3 17.075 12.3H15.6L15.125 10.9Q15.075 10.725 14.9 10.725Q14.725 10.725 14.675 10.9L14.2 12.3H12.725Q12.55 12.3 12.5 12.462Q12.45 12.625 12.575 12.75L13.8 13.75L13.375 15.175Q13.325 15.375 13.475 15.475Q13.625 15.575 13.775 15.45ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V7.8Q3.3 7.15 3.725 6.725Q4.15 6.3 4.8 6.3H10.375Q10.675 6.3 10.95 6.412Q11.225 6.525 11.45 6.75L12 7.3H19.2Q19.85 7.3 20.275 7.725Q20.7 8.15 20.7 8.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialFolderSpecialRoundedW100Filled.displayName = 'AmauiIconMaterialFolderSpecialRoundedW100Filled';

export default IconMaterialFolderSpecialRoundedW100Filled;
