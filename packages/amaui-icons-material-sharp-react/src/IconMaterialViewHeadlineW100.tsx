import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewHeadlineW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewHeadlineW100'

      short_name='ViewHeadline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 14.2v-.7h14.7v.7Zm0 3.7v-.7h14.7v.7Zm0-7.4v-.7h14.7v.7Zm0-3.7v-.7h14.7v.7Z"/>
    </Icon>
  );
});

IconMaterialViewHeadlineW100.displayName = 'AmauiIconMaterialViewHeadlineW100';

export default IconMaterialViewHeadlineW100;
