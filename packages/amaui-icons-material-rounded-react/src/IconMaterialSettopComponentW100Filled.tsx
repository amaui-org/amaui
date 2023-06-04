import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettopComponentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettopComponentW100Filled'

      short_name='SettopComponent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 15.7V8.3h17.4v7.4Zm2.35-3.35h4.6v-.7h-4.6Zm8.35.4q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Zm3 0q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.538.212-.212.213-.212.538 0 .325.212.537.213.213.538.213Z"/>
    </Icon>
  );
});

IconMaterialSettopComponentW100Filled.displayName = 'AmauiIconMaterialSettopComponentW100Filled';

export default IconMaterialSettopComponentW100Filled;
