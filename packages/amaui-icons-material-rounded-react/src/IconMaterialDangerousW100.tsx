import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDangerousW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DangerousW100'

      short_name='Dangerous'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.425 19.7q-.3 0-.587-.125-.288-.125-.488-.325l-3.6-3.6q-.2-.2-.325-.488-.125-.287-.125-.587v-5.15q0-.3.125-.588.125-.287.325-.487l3.6-3.6q.2-.2.488-.325.287-.125.587-.125h5.15q.3 0 .588.125.287.125.487.325l3.6 3.6q.2.2.325.487.125.288.125.588v5.15q0 .3-.125.587-.125.288-.325.488l-3.6 3.6q-.2.2-.487.325-.288.125-.588.125ZM12 12.5l2.625 2.625q.1.1.225.1t.25-.125q.125-.125.125-.25t-.125-.25L12.5 12l2.625-2.625q.1-.1.1-.225T15.1 8.9q-.125-.125-.25-.125t-.25.125L12 11.5 9.375 8.875q-.1-.1-.225-.1T8.9 8.9q-.125.125-.125.25t.125.25l2.6 2.6-2.625 2.625q-.1.1-.1.225t.125.25q.125.125.25.125t.25-.125ZM9.1 19h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8Zm2.9-7Z"/>
    </Icon>
  );
});

IconMaterialDangerousW100.displayName = 'AmauiIconMaterialDangerousW100';

export default IconMaterialDangerousW100;
