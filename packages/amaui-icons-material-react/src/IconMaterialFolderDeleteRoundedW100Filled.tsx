import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderDeleteRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderDeleteRoundedW100Filled'
      short_name='FolderDelete'

      {...props}
    >
      <path d="M14.25 16.6H16.75Q17.2 16.6 17.525 16.275Q17.85 15.95 17.85 15.5V10.6H18.25Q18.4 10.6 18.5 10.5Q18.6 10.4 18.6 10.25Q18.6 10.1 18.5 10Q18.4 9.9 18.25 9.9H16.35Q16.35 9.675 16.2 9.537Q16.05 9.4 15.775 9.4H15.225Q14.95 9.4 14.8 9.537Q14.65 9.675 14.65 9.9H12.75Q12.6 9.9 12.5 10Q12.4 10.1 12.4 10.25Q12.4 10.4 12.5 10.5Q12.6 10.6 12.75 10.6H13.15V15.5Q13.15 15.95 13.475 16.275Q13.8 16.6 14.25 16.6ZM14.25 15.9Q14.075 15.9 13.963 15.787Q13.85 15.675 13.85 15.5V10.6H17.15V15.5Q17.15 15.675 17.038 15.787Q16.925 15.9 16.75 15.9ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V7.8Q3.3 7.15 3.725 6.725Q4.15 6.3 4.8 6.3H10.375Q10.675 6.3 10.963 6.425Q11.25 6.55 11.45 6.75L12 7.3H19.2Q19.85 7.3 20.275 7.725Q20.7 8.15 20.7 8.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialFolderDeleteRoundedW100Filled.displayName = 'AmauiIconMaterialFolderDeleteRoundedW100Filled';

export default IconMaterialFolderDeleteRoundedW100Filled;
