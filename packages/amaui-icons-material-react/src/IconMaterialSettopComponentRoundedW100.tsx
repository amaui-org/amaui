import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettopComponentRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettopComponentRoundedW100'
      short_name='SettopComponent'

      {...props}
    >
      <path d="M3.3 15.7V8.3h17.4v7.4ZM4 15h16V9H4Zm1.65-2.65h4.6v-.7h-4.6Zm8.35.4q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Zm3 0q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.538.212-.212.213-.212.538 0 .325.212.537.213.213.538.213ZM4 15V9v6Z"/>
    </Icon>
  );
});

IconMaterialSettopComponentRoundedW100.displayName = 'AmauiIconMaterialSettopComponentRoundedW100';

export default IconMaterialSettopComponentRoundedW100;
