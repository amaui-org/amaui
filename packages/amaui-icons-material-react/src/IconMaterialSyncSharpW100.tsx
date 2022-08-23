import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSyncSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncSharpW100'
      short_name='Sync'

      {...props}
    >
      <path d="M14.75 4.85H19.15V5.55H15.95L17.2 6.8Q18.325 7.925 18.837 9.238Q19.35 10.55 19.35 11.9Q19.35 14.2 18.062 16.087Q16.775 17.975 14.65 18.85V18.1Q16.475 17.3 17.562 15.613Q18.65 13.925 18.65 11.9Q18.65 10.65 18.175 9.475Q17.7 8.3 16.7 7.3L15.45 6.05V9.25H14.75ZM9.25 19.15H4.85V18.45H8.05L6.8 17.2Q5.675 16.075 5.163 14.762Q4.65 13.45 4.65 12.1Q4.65 9.8 5.938 7.912Q7.225 6.025 9.35 5.15V5.9Q7.525 6.7 6.438 8.387Q5.35 10.075 5.35 12.1Q5.35 13.35 5.825 14.525Q6.3 15.7 7.3 16.7L8.55 17.95V14.75H9.25Z"/>
    </Icon>
  );
});

IconMaterialSyncSharpW100.displayName = 'AmauiIconMaterialSyncSharpW100';

export default IconMaterialSyncSharpW100;
