import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeveloperBoardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperBoardW100Filled'

      short_name='DeveloperBoard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.1 19.7q-.65 0-1.075-.425Q3.6 18.85 3.6 18.2V5.8q0-.65.425-1.075Q4.45 4.3 5.1 4.3h12.4q.65 0 1.075.425Q19 5.15 19 5.8V8h1.05q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H19v2.95h1.05q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H19v2.95h1.05q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H19v2.2q0 .65-.425 1.075-.425.425-1.075.425ZM8.05 16h2.25q.325 0 .538-.213.212-.212.212-.537V14q0-.325-.212-.538-.213-.212-.538-.212H8.05q-.325 0-.537.212-.213.213-.213.538v1.25q0 .325.213.537.212.213.537.213Zm5.25-6.25h1.25q.325 0 .538-.213.212-.212.212-.537v-.25q0-.325-.212-.538Q14.875 8 14.55 8H13.3q-.325 0-.537.212-.213.213-.213.538V9q0 .325.213.537.212.213.537.213Zm-5.25 2h2.25q.325 0 .538-.213.212-.212.212-.537V8.75q0-.325-.212-.538Q10.625 8 10.3 8H8.05q-.325 0-.537.212-.213.213-.213.538V11q0 .325.213.537.212.213.537.213ZM13.3 16h1.25q.325 0 .538-.213.212-.212.212-.537V12q0-.325-.212-.538-.213-.212-.538-.212H13.3q-.325 0-.537.212-.213.213-.213.538v3.25q0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialDeveloperBoardW100Filled.displayName = 'AmauiIconMaterialDeveloperBoardW100Filled';

export default IconMaterialDeveloperBoardW100Filled;
