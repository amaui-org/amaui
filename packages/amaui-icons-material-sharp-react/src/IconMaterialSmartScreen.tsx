import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartScreen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartScreen'

      short_name='SmartScreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.25 12.75q-.325 0-.537-.213-.213-.212-.213-.537 0-.325.213-.538.212-.212.537-.212.325 0 .538.212.212.213.212.538 0 .325-.212.537-.213.213-.538.213Zm-5 0q-.325 0-.537-.213Q7.5 12.325 7.5 12q0-.325.213-.538.212-.212.537-.212.325 0 .538.212Q9 11.675 9 12q0 .325-.212.537-.213.213-.538.213Zm7.5 0q-.325 0-.537-.213Q15 12.325 15 12q0-.325.213-.538.212-.212.537-.212.325 0 .538.212.212.213.212.538 0 .325-.212.537-.213.213-.538.213Zm-5 0q-.325 0-.537-.213Q10 12.325 10 12q0-.325.213-.538.212-.212.537-.212.325 0 .538.212.212.213.212.538 0 .325-.212.537-.213.213-.538.213ZM1 19V5h22v14Zm5-2h12V7H6Zm-3 0h1V7H3Zm17 0h1V7h-1ZM3 7h1Zm17 0h1Z"/>
    </Icon>
  );
});

IconMaterialSmartScreen.displayName = 'AmauiIconMaterialSmartScreen';

export default IconMaterialSmartScreen;
