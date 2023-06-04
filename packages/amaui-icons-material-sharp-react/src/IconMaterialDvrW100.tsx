import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDvrW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DvrW100'

      short_name='Dvr'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.15 9.35h8.2v-.7h-8.2Zm0 4h8.2v-.7h-8.2ZM7 9.5q.225 0 .363-.15Q7.5 9.2 7.5 9q0-.225-.137-.363Q7.225 8.5 7 8.5q-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15Zm0 4q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363Q7.225 12.5 7 12.5q-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15Zm2.3 6.2v-2h-6V4.3h17.4v13.4h-6v2ZM4 17h16V5H4Zm0 0V5v12Z"/>
    </Icon>
  );
});

IconMaterialDvrW100.displayName = 'AmauiIconMaterialDvrW100';

export default IconMaterialDvrW100;
