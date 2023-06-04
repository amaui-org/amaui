import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalculateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalculateW100'

      short_name='Calculate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 8.8h4.2v-.7h-4.2Zm6.75 8.05h4.2v-.7h-4.2Zm0-2.5h4.2v-.7h-4.2Zm-5 3.25h.7v-2h2v-.7h-2v-2h-.7v2h-2v.7h2Zm5.7-7.25 1.4-1.4 1.4 1.4.5-.5-1.4-1.4 1.4-1.4-.5-.5-1.4 1.4-1.4-1.4-.5.5 1.4 1.4-1.4 1.4ZM4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialCalculateW100.displayName = 'AmauiIconMaterialCalculateW100';

export default IconMaterialCalculateW100;
